import Search from './components/Search';
import DisplayEmojis from './components/DisplayEmojis';
import filterEmoji from './filterEmoji';
import { useState } from "react";
import './App.css';

function App() {

  // State for input text
  const [text, setText] = useState('');

  // Function to handle text change in input bar
  const handleChange = (e) => {
      setText(e.target.value)
  }

  return (
    <div className="App">
      <h1>Emoji Search</h1>
      <Search handleChange = {handleChange}/>
      <DisplayEmojis emojiList={filterEmoji(text)} />
    </div>
  );
}

export default App;
