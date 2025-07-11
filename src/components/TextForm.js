import React, {useState} from 'react';



export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!","success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
    
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!","success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear the texts","success");

  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy the text","success");

  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove Extra Spaces","success");

  };
  const [text, setText] = useState("");

  return (
    <>
    <div className='container' style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
      <h1 >{props.heading} </h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'gray' : 'white',color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-outline-primary mx-2" onClick={handleUpClick}>
        Convert To Uppercase
      </button>
      <button className="btn btn-outline-primary mx-2"  onClick={handleLowClick}>
        Convert To Lowercase
      </button>

      <button className="btn btn-outline-primary mx-2"  onClick={handleCopy}>
        Copy Text
      </button>

      <button className="btn btn-outline-primary mx-2"  onClick={handleExtraSpace}>
        Remove Extra Space
      </button>
      <button className="btn btn-outline-warning mx-2"  onClick={handleClearClick}>
        Clear Text
      </button>

      
    </div>
    <div className='container my-3' style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
      <h1>Your text summery</h1>
      <p>{text.split(" ").length-1} words and {text.length} characters</p>
      <p>{0.008*text.length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Enter something in the textbox to preview it here"}</p>



    </div>
    </>
  )
}
