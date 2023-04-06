import data from '../MovieData.json';
import React, { useEffect, useState } from 'react';
import { Movie } from '../types/movies';
import '../Home.module.css';

const mds = data.MovieData;

function MovieList() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchFood = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setMovieData(temp);
    };

    fetchFood();
  }, []);

  return (
    <>
      <br />
      <div>
        <h1>Joel Hilton's Movie Collection</h1>
      </div>
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {mds.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
