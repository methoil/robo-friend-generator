import React from "react";
import Card from "./Card.js";
import { map } from "lodash";

const CardList = props => {
  const { data } = props;
  const cardComponent = map(data, (item, key) => {
    return <Card key={key} name={item.name} id={item.id} email={item.email} />;
  });
  return <div>{cardComponent}</div>;
};

export default CardList;
