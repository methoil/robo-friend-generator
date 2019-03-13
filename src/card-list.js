import React from "react";
import Card from "./card.js";
import {data} from "./data.js";
import {map} from 'lodash';

const CardList = () => {
  const cardComponent = map(data, item => {
    return <Card name={item.name} id={item.id} email={item.email} />;
  });
  return <div>{cardComponent}</div>;
};

export default CardList;
