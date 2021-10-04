import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import RightData from '../Comonent/file.json'
import {President, VicePresident, Secretary, JointSecratary} from './file.jsx'

const PostCard = ({ designation, img,name,year, achievements, moto }) =>{
    return (
      <div className="postCard">
        <div className="deignation">{designation}</div>
        <img src={img} />
        <div className="commonincard">
        <div className="name "><h3>Name  :</h3> {name}</div>
        <div className="year "><h3>Study Year :</h3> {year}</div>
        <div className="achievements "><h3>Achiements :</h3> {achievements}</div>
        <div className="moto "><h3>Motto :</h3> {moto}</div>
        </div>
      </div>
    );
  };


const RightInfo = () =>{

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  // importing the post of presidenr
    const Infop = President;
    console.log(Infop);
    // console.log(Info.name)

    // importing the post ofvice president
    const Infovp = VicePresident;
    console.log(Infovp);
    // console.log()

    // importing the post of secretary
    const Infos = Secretary;
    console.log(Infos);
    // console.log()

    // importing the post of joint secretary
    const Infojs = JointSecratary;
    console.log(Infojs);
    // console.log()
    return (
        <section id="projects">

          {/* president display */}
          <h2 id="president" color="black">Presidential Candidates </h2>
          <div className="postCardsContainer">
            {Infop.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>

          {/* vicepresident display*/}
          <h2 id="vicepresident"color="black">Vice - Presidential Candidates </h2>
          <div className="postCardsContainer">
            {Infovp.map((postvp) => (
              <PostCard key={postvp.id} {...postvp} />
            ))}
          </div>
          {/*Secretary display*/}
          <h2 id="secretary" color="black"> Secretarial Candidates </h2>
          <div className="postCardsContainer">
            {Infos.map((posts) => (
              <PostCard key={posts.id} {...posts} />
            ))}
          </div>
          
          {/*Joint Secretary display*/}
          <h2 id="jointsecretary" color="black">Joint Secretarial Candidates </h2>
          <div className="postCardsContainer">
            {Infojs.map((postjs) => (
              <PostCard key={postjs.id} {...postjs} />
            ))}
          </div>
 
          <div className="topbutton" onClick={handleScrollToTop}>
          <i class="fas fa-arrow-alt-circle-up"></i>
          </div>
        </section>
      );
}
export default RightInfo;