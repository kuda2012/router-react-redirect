import React from "react";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import "./DogList.css";
const DogList = ({ dogs }) => {
  return (
    <div className="DogList">
      {dogs.map((dog, i) => (
        <div className="DogList-dogcard" key={uuid()}>
          <h5>{dog.name}</h5>
          <Link to={`/dogs/${dog.name}`}>
            <img src={dog.src} alt={`Dog${i}`} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DogList;
