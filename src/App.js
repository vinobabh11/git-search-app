import { useEffect, useState } from 'react';
import './App.css';
import Header from "./comonents/Layout/Header";
import Search from "./comonents/Layout/SearchBar";
import Card from "./comonents/UI/Card";

function App() {
  const [apiData, setApiData] = useState({});
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState('');

  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/octocat')
    .then(res => res.json())
    .then(data => {
      setApiData(data)
    });
  }, []);

  const handleSearch = (e) =>{
    setUserInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${userInput}`)
    .then(res => res.json())
    .then(data => {
      if(data.message){
        setError(data.message);
      }else{
        setApiData(data)
        setError(null)
      }
      console.log(apiData);
    })
  }

  const handleMode = () => {
    setIsLightMode(!isLightMode)
  }

  let handleChangeMode = (isLightMode === true ) ? "DARK" : "LIGHT";

  return (
    <div className={isLightMode ? "body" : "body dark"}>
      <Header className="header" changeMode = {handleMode} isLightMode={isLightMode} changeLang={handleChangeMode}></Header>
      <Search error={error} submit={handleSubmit} search={handleSearch}></Search>
      <Card apiData={apiData}/>
    </div>
  );
}

export default App;
