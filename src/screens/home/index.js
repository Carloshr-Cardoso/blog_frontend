import React, { useEffect, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import {apiGet} from '../../api/api'

//Components
import PostPreview from '../../components/postPreview';
import DataFetching from '../../api/dataFetching';

const dummyPosts = [
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgUrl: "https://loremflickr.com/100/100"
  },
  {
    title: "Donec luctus iaculis molestie. A rutrum risus hendrerit eget.",
    imgUrl: "https://loremflickr.com/200/200"
  },
  {
    title: "Vestibulum non enim at neque sagittis rhoncus sit amet nec lacus.",
    imgUrl: "https://loremflickr.com/300/300"
  }
]


const Home = () => {
  const [postagens, setPostagens] = useState(null);
  const [error, setError] = useState('');

  const result = apiGet("/");
  console.log(result);

  return (
    <React.Fragment>

      <div className="container">
        {/* <DataFetching/> */}
        
        <div className="w3-sidebar w3-bar-block" style={{width:'10%'}}>
          <h3 className="w3-bar-item sidebar-title">Tags</h3>
          <a href="#" className="w3-bar-item w3-button">Tag 1</a>
          <a href="#" className="w3-bar-item w3-button">Tag 2</a>
          <a href="#" className="w3-bar-item w3-button">Tag 3</a>
        </div>

        <Link to="/create">
          <div className="buttom-place">
            <span className="buttom-text">
              Create
              <svg id="plus" height="10pt" viewBox="0 0 448 448" width="10pt" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"
                  fill="#fff"
                  />
              </svg>
            </span>
          </div>
        </Link>

        <div>
          {dummyPosts.map(({title, imgUrl})=>{
            return(
            <div className="row">
              <div className="col lg-8" >
                <PostPreview title={title} imgUrl={imgUrl}/>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;