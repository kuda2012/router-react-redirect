import React from "react";
import { v4 as uuid } from "uuid";
import { useParams, Redirect } from "react-router-dom";
import "./DogDetails.css";

const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const dog = dogs.filter((dog) => dog.name === name);
  const shouldRedirect = dog[0] ? false : true;
  return (
    <>
      {!shouldRedirect && (
        <div className="DogDetails">
          <div>
            <div>
              <b>Name: </b>
              {dog[0].name}
            </div>
            <div>
              <b>Age: </b>
              {dog[0].age}
            </div>
            <div>
              <img src={dog[0].src} alt={dog[0].name} />
            </div>
            <ul className="DogDetails-facts">
              <b>Quick Facts</b>
              {dog[0].facts.map((fact) => (
                <li key={uuid()} className="DogDetails-fact">
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {shouldRedirect && <Redirect to="/dogs" />}
    </>
  );
};

export default DogDetails;
