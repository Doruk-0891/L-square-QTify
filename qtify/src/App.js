import React, { useEffect, useState }  from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { fetchNewAlbums, fetchTopAlbums } from "./api/api";

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    generateData('topAlbums', fetchTopAlbums);
    generateData('newAlbums', fetchNewAlbums);
  }, []);

  const generateData = (key, source) => {
    source().then((data) => {
      setData(prevData => {
        return {...prevData, [key]: data};
      });
    });
  }
  const {topAlbums=[], newAlbums=[]} = data;
  return (
    <div className="App">
      <Navbar />
      <Outlet context={{data: {topAlbums, newAlbums}}} />
    </div>
  );
}

export default App;
