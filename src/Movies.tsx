import data from './MovieData.json';
import React from 'react';
import styles from './Home.module.css';

const mds = data.MovieData;

function MovieList() {
  return (
    <>
      <br />
      <div>
        <h1 className={styles.h1}>Joel Hilton's Movie Collection</h1>
      </div>
      <div className={styles.padding}>
        <table className="table">
          <thead>
            <tr>
              <th className={styles.th}>Title</th>
              <th className={styles.th}>Year</th>
              <th className={styles.th}>Director</th>
              <th className={styles.th}>Rating</th>
              <th className={styles.th}>Category</th>
              <th className={styles.th}>Edited</th>
            </tr>
          </thead>
          <tbody>
            {mds.map((m) => (
              <tr>
                <td className={styles.td}>{m.Title}</td>
                <td className={styles.td}>{m.Year}</td>
                <td className={styles.td}>{m.Director}</td>
                <td className={styles.td}>{m.Rating}</td>
                <td className={styles.td}>{m.Category}</td>
                <td className={styles.td}>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
