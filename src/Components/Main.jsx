import React from "react";

const Main = (props) => {
  const copyText = () => {
    let newTxt = document.getElementById("exampleFormControlTextarea1");
    newTxt.select();
    newTxt.setSelectRange(0, 99999);
    navigator.clipboard.writeText(newTxt.value);
    alert("Copied to clipboard successfully");
  };
  return (
    <>
      <div
        style={{
          backgroundColor: props.Mode === "dark" ? "black" : "white",
          color: props.Mode === "dark" ? "white" : "black",
          height: "100vh",
          width: "100%",
          padding: "1rem",
        }}
        className={`main-container my-4`}
      >
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label fw-bold text-uppercase"
          >
            Want to Format Your Text ? Then Write Down Below .{" "}
          </label>
          <textarea
            className="form-control my-2 bg-light w"
            id="exampleFormControlTextarea1"
            rows="10"
            value={props.Text}
            onChange={(event) => props.setText(event.target.value)}
          ></textarea>
        </div>
        <button
          onClick={props.convertToUpperCase}
          className="btn btn-secondary"
        >
          Convert to uppercase
        </button>
        <button
          onClick={props.convertToLowerCase}
          className="btn btn-secondary mx-2"
        >
          Covert to lowerCase
        </button>
        <button onClick={props.removeSpace} className="btn btn-secondary mx-2">
          Remove Space
        </button>
        <button onClick={copyText} className="btn btn-secondary mx-2">
          Copy Text
        </button>
        <button onClick={props.clearText} className="btn btn-secondary mx-2">
          Clear Text
        </button>
        <div className="word-counter-details my-3">
          <span className="total-words">Total Words : {props.cntWords}</span>
          <br />
          <span className="total-character">
            Total Characters : {props.Text.length}
          </span>
          <br />
          <span className="Reading-time">
            Reading Time : {props.ReadingTime}s
          </span>
          <br />
          <span className="speaking-time">
            Speaking Time : {props.speakTime}s
          </span>
        </div>
      </div>
    </>
  );
};

export default Main;
