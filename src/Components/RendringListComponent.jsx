import React, { useEffect, useState } from "react";
import "./UserComponent.css";
const RendringList = (props) => {
  const [data, setData] = useState({});

  const [index, setIndex] = useState(3);
  const [fetched, setFetched] = useState(false);

  const getData = async () => {
    const res = await fetch(props.url);
    res
      .json()
      .then((res) => {
        setData(res);
        setFetched(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  const loadData = () => {
    const newIndex = index + 3;
    setIndex(newIndex);
  };
  return (
    <div>
      <div>{fetched && props.callback(data, index)}</div>
      <div>
        <button onClick={loadData}>Load</button>
      </div>
    </div>
  );
};

export default RendringList;
