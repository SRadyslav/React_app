import React from 'react';
import s from './News.module.css';
import newNews from './newNews/newNews.jsx';

const News = () => {
    return(
        <div>
            <newNews message="Hey, how are you?" likeCount= "23" />
            <newNews message= "it's my first post" likeCount= "1" />
            <newNews message= "I'm so boring" likeCount= "9" />
        </div>
    );
}

export default News;