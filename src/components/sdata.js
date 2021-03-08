import React, {useState, useEffect} from "react";
import Table from "./table";
import Pagination from '../pagination/Pagination';

require("es6-promise").polyfill();
require("isomorphic-fetch");

const Small = () => {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/accuknox/TrainingAPI/main/small.json")
    .then(response => response.json())
    .then((json) => setData(json));
  }, []);

  const search= (rows) => {
    const columns = rows[0] && Object.keys(rows[0]);
    return rows.filter((row) => 
  
    columns.some((column) => row[column].toLowerCase().indexOf(q.toLowerCase()) > -1)
    
    );
  }

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


  return (
    <div className="App">
     <div>
       <input className="input_tab" type="text" value={q} onChange={(e) => setQ(e.target.value)} placeholder="search"  />
     </div>
     <div>
       <Table data={search(data)} />
       
     </div>
    </div>
  );
}


export default Small