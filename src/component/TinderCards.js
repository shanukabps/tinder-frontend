import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCard.css";
import axios from "./axios";

function TinderCards() {
  const [people, setPeopel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get("/tinder/card");

      setPeopel(req.data);
    };
    fetchData();

    const req = axios.get("/tinder/card");
    console.log(req.data);
  }, []);

  //console.log(people);
  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };

  return (
    <div className="tinderCards">
      <div class="tinderCard_cardcontainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={("up", "down")}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
