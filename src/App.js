import React,{useState} from "react";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";

const App = () => {
  const [Text, setText ] = useState("Formatted Text");
  const [Mode,setMode] = useState('dark')
  const toggleMode = () => {
    Mode === 'dark' ? setMode('light') : setMode('dark');
  }
  const convertToUpperCase = () => {
    let newTxt = Text.toUpperCase();
    setText(newTxt);
  };
  const convertToLowerCase = () => {
    let newTxt = Text.toLowerCase();
    setText(newTxt);
  };
  const clearText = () => {
    setText("");
  };
  const removeSpace = () => {
    let newTxt = Text.replaceAll(" ", '');
    setText(newTxt);
  };

  const cntWords = Text.split(" ").length;
  let ReadingTime = Math.round(cntWords / 238 * 60);
  let speakTime = Math.round(cntWords/200 * 60);
  return (
    <>
      <header>
        <Navbar Mode={Mode} toggleMode={toggleMode}/>
      </header>
      <section className="main-work container">
        <Main Text={Text} setText={setText} convertToLowerCase={convertToLowerCase} convertToUpperCase={convertToUpperCase} clearText={clearText} removeSpace={removeSpace}  cntWords={cntWords} ReadingTime={ReadingTime} speakTime={speakTime} Mode={Mode} toggleMode={toggleMode}/>
      </section>
    </>
  );
};

export default App;
