import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Automatic Quarterly Lapwing</title>
        <meta property="og:title" content="Automatic Quarterly Lapwing" />
      </Helmet>
      <div className="home-container1">
        <header data-role="Header" className="home-header">
          <span className="home-title Heading">
            <span>TWWmidis</span>
            <br></br>
          </span>
          <a
            href="https://TWWmidis.github.io"
            target="_blank"
            rel="noreferrer noopener"
            className="home-request Heading"
          >
            Request a MIDI
          </a>
        </header>
        <header data-role="Header" className="home-header1">
          <ul className="home-anthems list">
            <li className="home-heading">
              <h1 className="home-heading1">
                <span>Anthems</span>
                <br></br>
                <br></br>
              </h1>
            </li>
            <li className="home-li list-item">
              <button type="button" className="home-button button">
                <a
                  href="https://twwmidis.github.io/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link"
                >
                  <span>O Canada</span>
                  <br></br>
                  <br></br>
                </a>
              </button>
            </li>
          </ul>
          <ul className="home-music list">
            <li className="list-item">
              <h1 className="home-heading3">
                <span>Music</span>
                <br></br>
              </h1>
            </li>
            <li className="home-li1 list-item">
              <button type="button" className="home-button1 button">
                <a
                  href="https://twwmidis.github.io/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link1"
                >
                  <span>Paint It Black</span>
                  <br></br>
                  <br></br>
                </a>
              </button>
            </li>
          </ul>
          <ul className="home-memes list">
            <li className="list-item">
              <h1 className="home-heading5">
                <span>Memes</span>
                <br></br>
                <br></br>
              </h1>
            </li>
            <li className="home-li2 list-item">
              <button type="button" className="home-button2 button">
                <a
                  href="https://twwmidis.github.io/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link2"
                >
                  <span>Megalovania</span>
                  <br></br>
                  <br></br>
                </a>
              </button>
            </li>
          </ul>
        </header>
      </div>
    </div>
  )
}

export default Home
