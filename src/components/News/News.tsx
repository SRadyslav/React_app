import React from 'react';
import s from './News.module.css';
import NewNews from "./newNews/newNews"
const News: React.FC = () => {
    return (
        <div className={s.news}>
            <NewNews message="Hey, how are you?" likeCount={23} />
            <NewNews message="it's my first post" likeCount={1} />
            <NewNews message="I'm so boring" likeCount={9} />
        </div>
    );
}

export default News;