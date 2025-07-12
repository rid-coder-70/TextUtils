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
    document.getSelection().removeAllRanges();
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
      <h1 className='mb-2'>{props.heading} </h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#253559' : 'white',color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-outline-primary mx-2 my-1" onClick={handleUpClick}>
        Convert To Uppercase
      </button>
      <button disabled={text.length===0} className="btn btn-outline-primary mx-2 my-1"  onClick={handleLowClick}>
        Convert To Lowercase
      </button>

      <button disabled={text.length===0} className="btn btn-outline-primary mx-2 my-1"  onClick={handleCopy}>
        Copy Text
      </button>
 
      <button disabled={text.length===0} className="btn btn-outline-primary mx-2 my-1"  onClick={handleExtraSpace}>
        Remove Extra Space
      </button>
      <button disabled={text.length===0} className="btn btn-outline-warning mx-2 my-1"  onClick={handleClearClick}>
        Clear Text
      </button>

      
    </div>
    <div className='container my-3' style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
      <h1>Your text summery</h1>
      <p>{text.split(" ").filter( (element) => {return element.length != 0}).length} words and {text.length} characters</p>
      <p>{0.008*text.split(" "). filter( (element) => {return element.length != 0}).length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Nothing to preview!"}</p>



    </div>
    </>
  )
}
