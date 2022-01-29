import React from "react";

const ImageList = (props) => {
  const images = props.images.map(({id, description, urls}) => {
    return (
      <img className="d-block w-100 my-2" key={id} alt={description} src={urls.regular} alt="" />
    );
  });
  return <div className="" >{images}</div>;
};

export default ImageList;
