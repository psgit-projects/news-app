
import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

function NewsBoard({category}) {
  
   const [articles,setArticles]=useState([]);
   useEffect(()=>{
    let url = `https://news-app-yh6s.onrender.com/`;
    fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles))
   
  },[category])


  return (
    <div>
      <br></br>
   <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
   {articles.map((news,index)=>{
    return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
   })}
    </div>
  );
}

export default NewsBoard;
