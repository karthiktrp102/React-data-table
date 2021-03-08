import React, { useState, useEffect } from "react";
import Table from "./table";

require("es6-promise").polyfill();
require("isomorphic-fetch");

const Medium = () => {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/accuknox/TrainingAPI/main/medium.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const search= (rows) => {
    const columns = rows[0] && Object.keys(rows[0]);
    return rows.filter((row) => 
  
    columns.some((column) => row[column].toLowerCase().indexOf(q.toLowerCase()) > -1)
    
    );
  }

  return (
    <div className="App">
      <div>
        <input
          className="input_tab"
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="search"
        />
      </div>
      <div>
        <Table data={search(data)} />
      </div>
    </div>
  );
};

export default Medium;
