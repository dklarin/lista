import React, { useEffect, useState } from "react";
import Tabletop from "tabletop";

export const MovieData = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    Tabletop.init({
      key:
        "https://docs.google.com/spreadsheets/d/1LXP8veJn8S9rqGk3THjsDA_0DvB7C3hSNZHilQMIPGc/edit?usp=sharing",
      simpleSheet: true,
    }).then(function (data) {
      setData(data);
    });
  }, []);

  const movies = Array.from(data);

  return (
    <ul>
      {movies.map((el) => (
        <li key={el.movie}>
          {el.movie} ({el.year}) - Rating {el.rating}
        </li>
      ))}
    </ul>
  );
};
export default MovieData;
