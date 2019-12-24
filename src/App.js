import React, { Fragment } from "react";
import { BrowserRouter, Route, useParams, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function IndividualComic() {
  const params = useParams();
  const currentComicId = parseInt(params.comicId, 10);
  const MAX_IMAGES = 28;
  return (
    <section>
      <img
        id="comic"
        src={`/comics/comic${currentComicId}.png`}
        alt="So It Begins"
      />
      <div>
        <Link to={`/comic/1`}>Beggining</Link>
        {currentComicId > 1 && (
          <Link to={`/comic/${currentComicId - 1}.png`}>Back</Link>
        )}
        {currentComicId < MAX_IMAGES && (
          <Link to={`/comic/${currentComicId + 1}.png`}>Next</Link>
        )}
        {currentComicId < MAX_IMAGES && (
          <Link to={`/comic/${MAX_IMAGES}.png`}>Most recent</Link>
        )}
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
          {/* <ul>
          <li>
            <button id="first" name="first">
              {" "}
              <img src="dist/first.png" alt="first" class="button-img" />
            </button>
          </li>
          <li>
            <button id="back" name="back">
              {" "}
              <img src="dist/back.png" alt="back" class="button-img" />
            </button>
          </li>
          <li>
            <button id="next" name="next">
              {" "}
              <img src="dist/next.png" alt="next" class="button-img" />
            </button>
          </li>
        </ul> */}
        </nav>
        <footer>
          <ul>
            <li>
              <a href="">
                <img
                  class="icon"
                  src="dist/instagram.svg"
                  alt="instagram-icon"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img class="icon" src="dist/twitter.svg" alt="twitter-icon" />
              </a>
            </li>
            <li>
              <a href="">
                <img class="icon" src="dist/facebook.svg" alt="facebook-icon" />
              </a>
            </li>
            <li>
              <a href="https://www.reddit.com/user/unicorndroppingz">
                <img class="icon" src="dist/reddit.svg" alt="reddit-icon" />
              </a>
            </li>
          </ul>
        </footer>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
