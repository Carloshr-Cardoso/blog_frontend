import React from 'react';

//Components
import TextBox from '../../components/textBox'

const AddingPost = () => {
  return(
    <React.Fragment>
      <div className="container">
        <div className="textBox-place">
          <TextBox/>
        </div>

      </div>
    </React.Fragment>
  );
}

export default AddingPost;