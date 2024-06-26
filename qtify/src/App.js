import React, { useEffect, useState }  from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { fetchNewAlbums, fetchTopAlbums, fetchSongs } from "./api/api";

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    generateData('topAlbums', fetchTopAlbums);
    generateData('newAlbums', fetchNewAlbums);
    generateData('songs', fetchSongs);
  }, []);

  const generateData = (key, source) => {
    source().then((data) => {
      setData(prevData => {
        return {...prevData, [key]: data};
      });
    });
  }
  const {topAlbums=[], newAlbums=[], songs=[]} = data;
  return (
    <div className="App">
      <Navbar />
      <Outlet context={{data: {topAlbums, newAlbums, songs}}} />
    </div>
  );
}

export default App;
