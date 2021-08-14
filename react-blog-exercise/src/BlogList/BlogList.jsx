import React from "react";
import { blogList } from "../data/data-blog";
import {Blog} from '../Blog/Blog'
import "./BlogList.css";

export const BlogList = () => {
  return (
    <div className="container">
      {blogList.map((element, i) => (
        <Blog title= {element.title} post = {element.text} key={i}/>
      ))}
    </div>
  );
};
