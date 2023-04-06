import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <>
      <br />
      <div>
        <h1 className={styles.h1}>Home Page</h1>
        <center>
          <img src="./JoelHiltonHeadshot.jpg" alt="companyLogo" width="400" />
        </center>
        <br />
        <center>
          <p>
            This page is dedicated to Joel Hilton and has page for podcasts he
            listens to as well as a list of movies in his movie collection
          </p>
        </center>
      </div>
    </>
  );
};

export default Home;
