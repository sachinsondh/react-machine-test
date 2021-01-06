import React, { useState, useEffect } from "react";

import axios from "axios";

const RendringList = (props) => {
  const [Data, setData] = useState({});
  const [index, setIndex] = useState(3);

  const url = props.url;
  const getData = async () => {
    await axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  const loadData = () => {
    const nextIndex = index + 3;
    setIndex(nextIndex);
  };

  return (
    <div>
      <div>{props.callback(Data, index)}</div>
      <div>
        <button onClick={loadData}>Load</button>
      </div>
    </div>
  );
};

export default RendringList;
