import React from 'react';

const PostPreview = ({ title, imgUrl }) => {
  return (
    <React.Fragment>
      <div className="preview">
        <div className="row">
          <div className="col lg-3">
            <img src={imgUrl}/>
          </div>
          <div className="col lg-7">
            <h3>{title}</h3>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PostPreview;