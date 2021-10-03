import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import RightData from '../Comonent/file.json'
import data from './file.jsx'

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
    const Info = data;
    console.log(Info.name)
    return (
        <section id="projects">
          <h2>Post Bearers</h2>
          <div className="postCardsContainer">
            {Info.map((post) => (
              <PostCard key={post.designation} {...post} />
            ))}
          </div>
        </section>
      );
}
export default RightInfo;