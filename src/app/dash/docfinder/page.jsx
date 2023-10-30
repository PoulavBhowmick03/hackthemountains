"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import Map, { GeolocateControl, FullscreenControl, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";

const stores = {
  type: "FeatureCollection",
  features: [
    {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.403088, 22.513429],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">Ruby General Hospital</a></strong><p> Rating: 4.6</p>',
          name: "Ruby General Hospital",
          address: "Kasba Golpark, E M Bypass, Kolkata",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.402138, 22.543739],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">Apollo Gleneagles Hospital</a></strong><p> Rating: 4.6</p>',
          name: "Apollo Gleneagles Hospital",
          address: "58, Canal Circular Road, Kolkata",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.365205, 22.514912],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">Fortis Hospital</a></strong><p> Rating: 4.6</p>',
          name: "Fortis Hospital",
          address: "111A, Rash Behari Avenue, Gariahat, Kolkata",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.418223, 22.582752],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">AMRI Hospitals</a></strong><p> Rating: 4.6</p>',
          name: "AMRI Hospitals",
          address: "JC - 16 & 17, Salt Lake, Kolkata",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.334765, 22.539444],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">Woodlands Multispeciality Hospital</a></strong><p> Rating: 4.6</p>',
          name: "Woodlands Multispeciality Hospital",
          address: "8/5, Alipore Road, Kolkata",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.394311, 22.468541],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">Peerless Hospital</a></strong><p> Rating: 4.6</p>',
          name: "Peerless Hospital",
          address: "360, Panchasayar, Kolkata",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.399545, 22.486617],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">Medica Superspecialty Hospital</a></strong><p> Rating: 4.6</p>',
          name: "Medica Superspecialty Hospital",
          address: "127, Mukundapur, Kolkata",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.334135, 22.537504],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">Kothari Medical Centre</a></strong><p> Rating: 4.6</p>',
          name: "Kothari Medical Centre",
          address: "8/3, Alipore Road, Kolkata",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.366453, 22.546505],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">Belle Vue Clinic</a></strong><p> Rating: 4.6</p>',
          name: "Belle Vue Clinic",
          address: "9, Dr. U. N. Brahmachari Street, Kolkata",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.430661, 22.595864],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">Columbia Asia Hospital</a></strong><p> Rating: 4.6</p>',
          name: "Columbia Asia Hospital",
          address: "Block DJ, Sector II, Salt Lake City, Kolkata",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.416226, 22.503268],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">Desun Hospital and Heart Institute</a></strong><p> Rating: 4.6</p>',
          name: "Desun Hospital and Heart Institute",
          address: "720, Anandapur, Kolkata",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.400854, 22.485735],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">Rabindranath Tagore International Institute of Cardiac Sciences</a></strong><p> Rating: 4.6</p>',
          name: "Rabindranath Tagore International Institute of Cardiac Sciences",
          address: "124, Mukundapur, E.M.Bypass, Kolkata",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.354695, 22.537053],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">Peerless Hospitex Hospital and Research Center Ltd.</a></strong><p> Rating: 4.6</p>',
          name: "Peerless Hospitex Hospital and Research Center Ltd.",
          address: "12, Jawaharlal Nehru Road, Kolkata",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.415701, 22.501789],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">NH RTIICS Hospital</a></strong><p> Rating: 4.6</p>',
          name: "NH RTIICS Hospital",
          address: "700, Anandapur, E.M.Bypass, Kolkata",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.383013, 22.567439],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">Ils Hospital</a></strong><p> Rating: 4.6</p>',
          name: "Ils Hospital",
          address: "1, Narkeldanga Main Rd, Kadapara, Phool Bagan, Kolkata",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.353259, 22.566282],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">Peerless Diagnostic Centre</a></strong><p> Rating: 4.6</p>',
          name: "Peerless Diagnostic Centre",
          address: "44, Motilal Nehru Rd, Chowringhee North, Kolkata",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.301284, 22.583570],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">Narayana Superspeciality Hospital</a></strong><p> Rating: 4.6</p>',
          name: "Narayana Superspeciality Hospital",
          address: "120, 1, Andul Road, Tikiapara, Howrah, West Bengal",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.354534, 22.514688],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">Calcutta Heart Clinic & Hospital</a></strong><p> Rating: 4.6</p>',
          name: "Calcutta Heart Clinic & Hospital",
          address: "125, Rash Behari Ave, Lake Market, Kalighat, Kolkata",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.310345, 22.586126],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">Howrah General Hospital</a></strong><p> Rating: 4.7</p>',
          name: "Howrah General Hospital",
          address: "Dobson Road, Howrah, West Bengal",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.328131, 22.583961],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">Sanjivani Hospital</a></strong><p> Rating: 4.5</p>',
          name: "Sanjivani Hospital",
          address: "Shibpur, Howrah, West Bengal",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.353554, 22.574110],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">Howrah City Hospital</a></strong><p> Rating: 4.6</p>',
          name: "Howrah City Hospital",
          address: "Nabagram, Howrah, West Bengal",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.368355, 22.581527],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">Kolkata Medical Center</a></strong><p> Rating: 4.6</p>',
          name: "Kolkata Medical Center",
          address: "Shalimar, Howrah, West Bengal",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.365188, 22.527843],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">Rabindra Sadan Hospital</a></strong><p> Rating: 4.8</p>',
          name: "Rabindra Sadan Hospital",
          address: "Maidan, Kolkata",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.347476, 22.550458],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">Kolkata Health Institute</a></strong><p> Rating: 4.7</p>',
          name: "Kolkata Health Institute",
          address: "Park Street, Kolkata",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.359704, 22.525835],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">Kolkata Care Hospital</a></strong><p> Rating: 4.6</p>',
          name: "Kolkata Care Hospital",
          address: "Bhowanipore, Kolkata",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.370553, 22.561805],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">Medical Square Hospital</a></strong><p> Rating: 4.7</p>',
          name: "Medical Square Hospital",
          address: "Chowringhee, Kolkata",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.393588, 22.619337],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">Salt Lake Hospital</a></strong><p> Rating: 4.5</p>',
          name: "Salt Lake Hospital",
          address: "Salt Lake, Kolkata",
          distance: 0,
        },
      },
        ],
};
const Explore = () => {
  const [lng, setLng] = useState();
  const [lat, setLat] = useState();
  const [zoom, setZoom] = useState(10);
  const mapRef = useRef();
  const [distances, setDistances] = useState({});

  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers

    return distance;
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  const getUserLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          setLat(userLat);
          setLng(userLng);
        },
        (error) => {
          console.error("Error getting user's location:", error);
        }
      );
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []); // Run this effect once when the component mounts

  useEffect(() => {
    const updatedDistances = {};

    stores.features.forEach((store) => {
      const distance = getDistanceFromLatLonInKm(
        lat,
        lng,
        store.geometry.coordinates[1],
        store.geometry.coordinates[0]
      );

      updatedDistances[store.properties.name] = distance;
    });

    setDistances(updatedDistances);
  }, [lat, lng]);

  const onSelect = useCallback(({ longitude, latitude }) => {
    mapRef.current?.flyTo({
      center: [longitude, latitude],
      duration: 1500,
      zoom: 15,
    });
  }, []);

  return (
    <>
      <div className="bg-black w-full flex justify-around">
        <div className="bg-slate-200 w-1/3 h-screen flex flex-col shadow-xl overflow-y-scroll">
          <div className="bg-white p-5 rounded-lg w-full mb-2 h-fit flex justify-center font-semibold text-xl sticky top-0 shadow-xl">
            Nearby Stalls
          </div>
          {stores.features.map((store) => (
  <div key={store.properties.name} className="bg-white p-5 rounded-lg w-full h-fit border-slate-400 border-opacity-50 mb-2 shadow-md">
    <div className="flex justify-between">
      <span
        className="font-semibold text-lg cursor-pointer hover:text-black text-slate-600"
        onClick={() =>
          onSelect({
            longitude: store.geometry.coordinates[0],
            latitude: store.geometry.coordinates[1],
          })
        }
      >
        {store.properties.name}
      </span>
      <div className="font-semibold flex flex-row items-center text-[#24963F] hover:scale-105">
        <span className="m-1">4.5</span>
        <AiFillStar className="" />
      </div>
    </div>
    <div className="text-base text-slate-500">
      {store.properties.address}
    </div>
    <div className="text-sm font-medium text-slate-500">
      {distances[store.properties.name]} km away from your location
    </div>
    <span className="flex">
      <a className="text-blue-600 hover:text-blue-800 flex items-center mt-5">
        Get Directions
      </a>
      <a href="#" className="text-red-600 hover:text-red-800 flex items-center mt-5 ml-2">
        More Info
      </a>
    </span>
  </div>
))}
        </div>
        <div className="bg-slate-700 w-2/3 p-2">
          <div className="w-full h-full">
            <Map
              ref={mapRef}
              mapboxAccessToken="pk.eyJ1Ijoic2ltcGxlc29udTk4IiwiYSI6ImNsN3UxZzlhMjBvbWozcGxldTVheDFkdXMifQ.kdwiGRrDf_iMhE3r-V7kgw"
              initialViewState={{
                longitude: lng || 88.403088,
                latitude: lat || 22.513429,
                zoom: zoom,
              }}
              className="w-full h-full"
              mapStyle="mapbox://styles/mapbox/streets-v11"
            >
              {stores.features.map((store) => (
                <Marker
                  key={store.properties.name}
                  longitude={store.geometry.coordinates[0]}
                  latitude={store.geometry.coordinates[1]}
                  anchor="bottom"
                />
              ))}
              <GeolocateControl />
              <FullscreenControl />
            </Map>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
