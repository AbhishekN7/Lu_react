import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';




function App() {

  let searchData = "today";

  let[articles,setArticles] = useState([])

  function readValue(value) {
    searchData = value;
    
  }

  useEffect(()=>{
    getNews();

  },[])

  function getNews() {
    fetch(`https://newsapi.org/v2/everything?q=${searchData}&apiKey=7952dcb6471d4eb6b590b6676fdcb634`)
    .then((response)=>response.json())
    .then((news)=>{
      setArticles(news.articles);
      console.log(news.articles);
    })
    .catch((err)=>{
      console.log(err);
    })
  }


  return (

    <div className="App">
      <Header />
      <div className="search">
        <input placeholder="Search News" className="search-input" onChange={(event)=>{readValue(event.target.value)}}></input>
          <button className="search-btn" onClick={getNews}>Search</button>
      </div>

      <div className="articles">
          {
          articles.map((article,index)=> {
            return (

              <div key={index} className="article">

                <img className="news-img" src={article.urlToImage}></img>
                <div className="news-details">
                  <h3 className="title">{article.title}</h3>
                  <h4 className="author">Author: {article.author} </h4>
                  <h4 className="author">Published at : {article.publishedAt.split("T")[0]} </h4>
                  <a href={article.url} target="_blank">
                  <button className="btn">Read More</button>
                  </a>
                </div>

              </div>
            )
          })}
      </div>
    </div>
  );
}

export default App;
