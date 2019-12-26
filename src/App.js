import React, { Fragment } from "react";
import { BrowserRouter, Route, useParams, Link } from "react-router-dom";
import "./App.css";
import TwitterIcon from "./icons/Twitter.js";
import FacebookIcon from "./icons/Facebook.js";
import RedditIcon from "./icons/Reddit.js";
import InstagramIcon from "./icons/Instagram.js";

const MAX_IMAGES = 28;
const currentComicId = MAX_IMAGES;

function IndividualComic() {
  const params = useParams();
  const currentComicId = parseInt(params.comicId, 10);
  return (
    <section>
      <img
        id="comic"
        src={`/comics/comic${currentComicId}.png`}
        alt="So It Begins"
      />
      <div>
        <ul>
          <li>
            <Link to={`/comic/1`}>
              <img
                id="Beginning"
                src={require("./icons/first alt 2.png")}
                style={{ width: "82px", height: "40px" }}
                alt="Beginning"
              />
            </Link>
          </li>
          {currentComicId > 1 && (
            <li>
              <Link to={`/comic/${currentComicId - 1}.png`}>
                <img
                  id="Back"
                  className="buttom img"
                  src={require("./icons/back.png")}
                  style={{ width: "82px", height: "40px" }}
                  alt="Back"
                />
              </Link>
            </li>
          )}
          {currentComicId < MAX_IMAGES && (
            <li>
              <Link to={`/comic/${currentComicId + 1}.png`}>
                <img
                  id="Next"
                  src={require("./icons/next.png")}
                  style={{ width: "82px", height: "40px" }}
                  alt="Next"
                />
              </Link>
            </li>
          )}
          {currentComicId < MAX_IMAGES && (
            <li>
              <Link to={`/comic/${MAX_IMAGES}.png`}>
                <img
                  id="Most Recent"
                  src={require("./icons/most recent.png")}
                  style={{ width: "82px", height: "40px" }}
                  alt="Most Recent"
                />
              </Link>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <header>
          <h1>Startup Comic</h1>
        </header>
        <nav>
          <Route path="/comic/:comicId">
            <IndividualComic />
          </Route>

          <Route exact path="/">
            <img
              id="comic"
              src={`/comics/comic${currentComicId}.png`}
              alt="So It Begins"
            />

            <div>
              <ul>
                <li>
                  <Link to={`/comic/1`}>
                    <img
                      id="Beginning"
                      src={require("./icons/first alt 2.png")}
                      style={{ width: "82px", height: "40px" }}
                      alt="Beginning"
                    />
                  </Link>
                </li>
                <li>
                  <Link to={`/comic/${currentComicId - 1}.png`}>
                    <img
                      id="Back"
                      className="buttom img"
                      src={require("./icons/back.png")}
                      style={{ width: "82px", height: "40px" }}
                      alt="Back"
                    />
                  </Link>
                </li>
                <li>
                  <Link to={`/comic/${MAX_IMAGES}.png`}>
                    <img
                      id="Most Recent"
                      src={require("./icons/most recent.png")}
                      style={{ width: "82px", height: "40px" }}
                      alt="Most Recent"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </Route>
        </nav>
        <footer>
          <ul>
            <li>
              <a href="https://www.instagram.com/unicorndroppingz/">
                <InstagramIcon width="40px" height="40px" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/unicorndroppin1">
                <TwitterIcon width="40px" height="40px" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/unicorndroppingz/">
                <FacebookIcon width="40px" height="40px" />
              </a>
            </li>
            <li>
              <a href="https://www.reddit.com/user/unicorndroppingz">
                <RedditIcon width="40px" height="40px" />
              </a>
            </li>
          </ul>
        </footer>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
