import React, { useEffect, useRef } from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // console.log(text);

  const textAreaRef = useRef(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, []);

  //*UpperCase
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert('Converted to Upper','success');
  };

  //*LowerCase
  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert('Converted to Lower','success');
  };

  //*Clear Text
  const handleClearClick = () => {
    setText('');
    props.showAlert('Text cleared','success');
  };

  const wordCount = () => {
    let count = 0;
    if (text !== "") {
      console.log(text.split(" "));
      let countArr = text.split(" ");
      for (let i = 0; i < countArr.length; i++) {
        if (countArr[i] === "") {
          countArr.pop();
        }
      }

      count = countArr.length;
    } else count = 0;

    return count;
  };

  //* Speak
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert('Text to speech','success');
  }

  //* Copy
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    // console.log(text);
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Text copied','success');
  }

  //* Remove Extra Spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Extra spaces are removed from text','success');
  } 

  const handleOnChange = (event) => {
    console.log("changed", event.target.value);
    //* event.target.value holds the current value
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="7"
            value={text}
            onChange={handleOnChange}
            ref={textAreaRef}
            style={{border:'1px solid black',backgroundColor: props.mode === 'light' ? 'white' : 'grey'}}
          ></textarea>
        </div>
        <button className="btn btn-primary m-2" onClick={handleUpClick}>
          convert to upperCase
        </button>

        <button className="btn btn-primary m-2" onClick={handleLowClick}>
          convert to LowerCase
        </button>

        <button className="btn btn-primary m-2" onClick={speak}>
          Speak
        </button>

        <button className="btn btn-primary m-2" onClick={handleCopy}>
          copy text
        </button>

        <button className="btn btn-primary m-2" onClick={handleExtraSpaces}>
          Remove extra space
        </button>

        <button className="btn btn-primary m-2" onClick={handleClearClick}>
          clear text
        </button>
      </div>

      <div className="container" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
        <h1>Your text summary</h1>
        {/* SPLIT() - Split a string into substrings using the specified separator and return them as an array. */}
        <p>
          {wordCount()} words & {text.length} characters
        </p>
        <p>{(wordCount() * 0.008).toFixed(2)} mins read</p>
        <p>Preview</p>
        <p>{text.length > 0 ? text: 'enter something to preview here.'}</p>
      </div>
    </>
  );
}
