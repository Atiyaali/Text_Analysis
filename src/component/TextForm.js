
import React,{useState} from 'react'

export default function TextForm(props) {
 
function handleOnChange(event){
setText(event.target.value);
}
function handleonlclick(){
  let lcase = text.toLowerCase();
  setText(lcase);
}
function handleonuclick(){
  let ucase = text.toUpperCase();
  setText(ucase);
 }
 function handleonclear(){
  setText("");
 }
 function handleonreplace(){
  let Rword = prompt("Enter a word you want to replace");
  let Rword2 = prompt("Enter a word you want to replace with");
  let Rcase = text.replace(new RegExp(Rword, 'g'),Rword2);
  setText(Rcase);

 }
 function handleonreverse(){
  let Reversetext = text.split(' ').reverse().join(' ');
  setText(Reversetext);
 }
 function handleonFuppercase(){
  let words = text.split(' ');
  let fword=  words.map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  })
  var result = fword.join(' ');
  setText(result);
 }
 function speak(){
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}
function handleextraspaces(){
  let Rspaces = text.split(/[ ]+/);
let Rspaces1 = Rspaces.join(" ");
setText(Rspaces1);
}
function handleoncopy(){
  let text = document.querySelector("#text2");
  text.select();
 navigator.clipboard.writeText(text.value);
}
  const[text , setText] = useState('Enter the words here');
  function countWords() {
    let text1 = text.trim();
    if (text1 === "") {
      return 0;
    }
    var words = text1.split(" ");
    return words.length;
  }

  return (
<>

    <div className="container text-center" style={{color:props.Mode==="dark"?"white":"black"}}>
    <h1>{props.heading}</h1>
    <textarea name="" id="text2" style={{backgroundColor:props.Mode==="dark"?"black":"white", color:props.Mode==="dark"?"white":"black" , border:props.Mode==="dark"?"2px solid white":"2px solid black"}} value={text} onChange={handleOnChange} cols="60" rows="10" ></textarea>
    <br />
    <button type="submit" onClick={handleonclear} className="btn btn-warning mx-2 my-2">Clear Text</button>
    <button type="submit" onClick={handleonreplace} className="btn btn-warning mx-2 my-2">Replace Text</button>
    <button type="submit" onClick={handleonreverse} className="btn btn-warning mx-2 my-2">Reverse Text</button>
    <button type="submit" onClick={handleonFuppercase} className="btn btn-warning mx-2 my-2">FirstLetter to UpperCase</button>
    <button type="submit" onClick={handleonuclick} className="btn btn-warning mx-2 my-2">To Uppercase</button>
    <button type="submit" onClick={handleonlclick} className="btn btn-warning mx-2 my-2">To LowerCase</button>
    <button type="submit" onClick={handleoncopy} className="btn btn-warning mx-2 my-2">Copy Text</button>
    <button type="submit" onClick={handleextraspaces} className="btn btn-warning mx-2 my-2">RemoveExtraSPaces</button>
    <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
 <h2>Text Summary</h2>
    <p>Number of words:{countWords()}</p>
    <p>Number of alphabets:{text.length}</p>
    <h2>Time to read</h2>
    <p>{0.008 * text.split(" ").length}Minutes</p>
    <h2>PreviewText</h2>
    <p>{text}</p>
    </div>
</>
  )
}
