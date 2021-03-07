import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Editor } from "@tinymce/tinymce-react";


const TextBox = () => {
  const [bodyText, setBodyText] = useState(null);
  const [titleText, setTitleText] = useState(null);

  const handleEditorBodyChange = (content) => {
    setBodyText(content);
  }

  const handleEditorTitleChange = (content) => {
    setTitleText(content);
  }

  const handleEditorSubmit = () => {
    console.log("Post Title: ", titleText);
    console.log("Post Body: ", bodyText);
  } 

  return (
      <React.Fragment>
        <div className='form-text'>
          <h1>Add New Post</h1>
          <div>
            <label for='title'>Title</label>
            <Editor
              initialValue={titleText}
              init={{
                height: 80,
                menubar: false,
                plugins: [],
                toolbar: ''
              }}
              onEditorChange={handleEditorTitleChange}
            />
          </div>
          <div>
            <label for='title'>Body</label>
            <Editor
              initialValue={bodyText}
              init={{
                height: 400,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount'
                ],
                toolbar:
                  'undo redo | formatselect | bold italic backcolor | \
                  alignleft aligncenter alignright alignjustify | \
                  bullist numlist outdent indent | removeformat | help'
              }}
              onEditorChange={handleEditorBodyChange}
            />
          </div>
          <Link to="/home">
            <span className="buttom-text cancel" onClick={handleEditorSubmit}>
                Cancelar
            </span>
          </Link>
          <span className="buttom-text" onClick={handleEditorSubmit}>
              Salvar
          </span>
          {/* <button onClick={handleEditorSubmit}>Submit</button> */}
        </div>
      </React.Fragment>
  );
}

export default TextBox;