import * as React from 'react';
import Map,{Marker,Popup} from 'react-map-gl';
import {useState,useEffect} from 'react';
import axios from "axios";
import { Room, Star, StarBorder } from "@material-ui/icons";
import { format } from "timeago.js";
import "./app.css";
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const myStorage = window.localStorage;
  const [currentUsername, setCurrentUsername] = useState(myStorage.getItem("user"));
  const [viewState, setViewState] = useState({
    width:"100vw",
    height:"100vh",
    longitude:76.271080,
    latitude: 10.850516,
    zoom: 4
  });
  const [pins, setPins] = useState([]);
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [newPlace, setNewPlace] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [star, setStar] = useState(0);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const getPins = async () => {
      try {
        const allPins = await axios.get("/pins");
        setPins(allPins.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, []);

   
  const handleMarkerClick = (id, lat, long) => {
    setCurrentPlaceId(id);
    setViewState({ ...viewState, latitude: lat, longitude: long });
   
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPin = {
      username: currentUsername,
      title,
      desc,
      rating: star,
      lat: newPlace.lat,
      long: newPlace.long,
    };

    try {
      const res = await axios.post("/pins", newPin);
      setPins([...pins, res.data]);
      setNewPlace(null);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddClick = (e) => {
    const [longitude, latitude] = e.lngLat;
    setNewPlace({
      lat: latitude,
      long: longitude,
    });
  };

  const handleLogout = () => {
    setCurrentUsername(null);
    myStorage.removeItem("user");
  }

  


  return  <div style={{ height: "100vh", width: "100%" }}>
  <Map
    {...viewState}
    mapboxApiAccessToken='pk.eyJ1Ijoibmluam9zIiwiYSI6ImNsMGZiOWMwaDByYTkza3BvMnh6dTF6eGQifQ.HMK45m0aBh37dDPH8_TU_Q'
    onMove={evt => setViewState(evt.viewState)}
    onViewStateChange={evt => setViewState(evt.viewState)}
    // transitionDuration="200"
    mapStyle="mapbox://styles/safak/cknndpyfq268f17p53nmpwira"
    onDblClick={handleAddClick}
  >
     {pins.map((p) => (
          <>
              <Marker longitude={p.long} latitude={p.lat} offsetLeft={-3.5 * viewState.zoom}
              offsetTop={-7 * viewState.zoom} >
      {/* <img src="./pin.png" /> */}
      <Room
                style={{
                  fontSize: 7 * viewState.zoom,
                  color:currentUsername === p.username ? "tomato" : "slateblue",
                  cursor: "pointer",
                }}
                onClick={() => handleMarkerClick(p._id,p.lat, p.long)}
               
              />
    </Marker>
    {p._id === currentPlaceId &&(
    <Popup longitude={p.long} latitude={p.lat} closeButton={true} closeOnClick={false}  onClose={() => setCurrentPlaceId(null)}
        anchor="bottom"
        >
            <div className="card">
                  <label>Place</label>
                  <h4 className="place">{p.title}</h4>
                  <label>Review</label>
                  <p className="desc">{p.desc}</p>
                  <label>Rating</label>
                  <div className="stars">
                  {Array(p.rating).fill(<Star className="star" />)}
                  </div>
                  <label>Information</label>
                  <span className="username">
                    Created by <b>{p.username}</b>
                  </span>
                  <span className="date">{format(p.createdAt)}</span>
                </div>
      </Popup>)}
          </>
        ))}
        {newPlace && (
          <Popup
              latitude={newPlace.lat}
              longitude={newPlace.long}
              closeButton={true}
              closeOnClick={false}
              onClose={() => setNewPlace(null)}
              anchor="left"
            >

             <div>
                <form onSubmit={handleSubmit}>
                  <label>Title</label>
                  <input
                    placeholder="Enter a title"
                    autoFocus
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <label>Description</label>
                  <textarea
                    placeholder="Say us something about this place."
                    onChange={(e) => setDesc(e.target.value)}
                  />
                  <label>Rating</label>
                  <select onChange={(e) => setStar(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <button type="submit" className="submitButton">
                    Add Pin
                  </button>
                </form>
              </div>

            
          </Popup>)}

          {currentUsername ? (
          <button className="button logout" onClick={handleLogout}>
            Log out
          </button>
        ) : (
          <div className="buttons">
            <button className="button login" onClick={() => setShowLogin(true)}>
              Log in
            </button>
            <button
              className="button register"
              onClick={() => setShowRegister(true)}
            >
              Register
            </button>
          </div>
        )}
        {showRegister && <Register setShowRegister={setShowRegister} />}
        {showLogin && (
          <Login
            setShowLogin={setShowLogin}
            setCurrentUsername={setCurrentUsername}
            myStorage={myStorage}
          />
        )}

     
  </Map>
  </div>
}
export default App;