import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UpperCase","success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to LowerCase","success");
  };
  const handleClearClick = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("Cleared the box!","success");
  };
  const handleCopy = () => {
    let content = document.getElementById("myBox");
    content.select();
    navigator.clipboard.writeText(content.value);
    props.showAlert("Copied the text","success");
  };
  const handleExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Removed Extra Spaces","success");
  };
  return (
    <>
      <div className="container bg-green">
        <div className="container">
          <h2>{props.heading}</h2>
          <div className="mb-3">
            <textarea
              className={`form-control border-${
                props.mode === "light"
                  ? "primary-subtle bg-white text-black"
                  : "white bg-black text-white"
              }`}
              value={text}
              onChange={handleOnChange}
              id="myBox"
              rows="8"
            ></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleClearClick}>
            Clear Text
          </button>
          <button className="btn btn-primary mx-2" onClick={handleCopy}>
            Copy Text
          </button>
          <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
            Remove Extra Spaces
          </button>
        </div>
        <div className="container my-3">
          <h1>Your text summary</h1>
          <p>
            {text.split(" ").length} words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter something in the textbox above to preview it here"} </p>
        </div>
      </div>
    </>
  );
}
