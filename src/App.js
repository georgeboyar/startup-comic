import React, { Fragment } from "react";
import Stories from './data/stories.json';
import AuthorNotes from './data/notes.json';
import Popup from "reactjs-popup";
import {render} from 'react-dom';
import { BrowserRouter, Route, useParams, Link } from "react-router-dom";
import "./App.css";
import TwitterIcon from "./icons/Twitter.js";
import FacebookIcon from "./icons/Facebook.js";
import RedditIcon from "./icons/Reddit.js";
import InstagramIcon from "./icons/Instagram.js";
import ReactGA from 'react-ga';

const MAX_IMAGES = 44;
ReactGA.initialize('UA-138331555-1');

function IndividualComic() {
  const params = useParams();
  ReactGA.pageview(`backup`);
  var currentComicId = parseInt(params.comicId, 10);
  {
    (isNaN(currentComicId) || currentComicId > MAX_IMAGES ) &&
      (currentComicId = MAX_IMAGES);
    (currentComicId < 1 ) &&
      (currentComicId = 1);
  }
  ReactGA.pageview(`${currentComicId}`);
  return (
    <section style = {{lineHeight:"23px"}}>
    {AuthorNotes.map((authorNote, index)=>{
      if (authorNote.id == currentComicId){
        return (
          <div class="tooltip">
            <img
              id="comic"
              src={`/comics/comic${currentComicId}.png`}
              style={{ maxWidth: "900px" }}
              alt="So It Begins"
              tooltip = "Hello"
            />
          <span class="tooltiptext">{authorNote.comment}</span></div>
        );
      }
    else {
      return (
        <img
          id="comic"
          src={`/comics/comic${currentComicId}.png`}
          style={{ maxWidth: "900px" }}
          alt="So It Begins"
        />
      )}
    })}
      <div>
        <ul>
          <li>
            <Link to={`/comic/1`}>
              <img
                id="Beginning"
                src={require("./icons/first.png")}
                style={{ width: "82px", height: "40px" }}
                alt="Beginning"
              />
            </Link>
          </li>
            <li>
              <Link to={`/comic/${currentComicId - 1}`}>
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
              <Link to={`/comic/${Math.floor(Math.random() * MAX_IMAGES + 1)}`}>
                <img
                  id="Random"
                  className="buttom img"
                  src={require("./icons/random.png")}
                  style={{ width: "82px", height: "40px" }}
                  alt="Back"
                />
              </Link>
            </li>
            <li>
              <Link to={`/comic/${currentComicId + 1}`}>
                <img
                  id="Next"
                  src={require("./icons/next.png")}
                  style={{ width: "82px", height: "40px" }}
                  alt="Next"
                />
              </Link>
            </li>
            <li>
              <Link to={`/comic/${MAX_IMAGES}`}>
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
      {Stories.map((storyDetail, index)=>{
        if (storyDetail.id == currentComicId && storyDetail.leftAlign == false){
          return (
            <div style = {{margin: "3%", textAlign: "left"}}>
              <ul>
                <li>
                  <h3>{storyDetail.question}</h3>
                  <p>{storyDetail.story}</p>
                </li>
                <li style = {{margin: "auto"}}>
                  <img
                    id="profile_photo"
                    src ={`/profilePhotos/${storyDetail.profilePhoto}`}
                    style ={{maxWidth: "150px", minWidth: "100px"}}
                  />
                  <h3 style = {{  textAlign: "center"}}>{storyDetail.role}</h3>
                </li>
              </ul>
            </div>
          )
        } if (storyDetail.id == currentComicId && storyDetail.leftAlign == true){
          return (
            <div style = {{margin: "3%", textAlign: "left"}}>
              <ul>
                <li style = {{margin: "auto"}}>
                  <img
                    id="profile_photo"
                    src ={`/profilePhotos/${storyDetail.profilePhoto}`}
                    style ={{maxWidth: "150px", minWidth: "100px"}}
                  />
                  <h3 style = {{  textAlign: "center"}}>{storyDetail.role}</h3>
                </li>
                <li>
                  <h3>{storyDetail.question}</h3>
                  <p>{storyDetail.story}</p>
                </li>
              </ul>
            </div>
          )
        }
      })}
      <a href ={`https://docs.google.com/forms/d/e/1FAIpQLSfckTV_odSTU8Z186FugH_aSXftiyp9qcYWkZ95Z6t6YNbZhw/viewform?usp=pp_url&entry.19004455=comic${currentComicId}`} target="_blank">
        <img
          id="Next"
          src={require("./icons/featured-button.png")}
          style ={{maxWidth: "700px"}}
          alt="Next"
        />
      </a>
    </section>
  );
}

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <header>
          {/* <h1 style={{ fontSize: "5vw" }}>Startup Comic</h1> */}
          <img
            id="banner"
            src={`/cover v3.png`}
            style={{ maxWidth: "100%" }}
            alt="Startup Comic"
          />
        </header>
        <nav>
          <Route path="/comic/:comicId">
            <IndividualComic />
          </Route>
          <Route exact path="/">
            <IndividualComic />
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
