import React from "react";

export default function Photo({ imgSource }) {
  return <img src={imgSource} />;
}

// passing props: passing info/data from one component to another (from parent to child)
// In this example, the Photo component receives a prop called imgSource.
