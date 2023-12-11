import './App.css';

function App() {
  const title = 'Welcome to my wordle dupe';
  const likes = 50;
  // const person = { name: 'yoshi', age: 30 };
  const link = 'https://www.linkedin.com/in/nathanchancs/';
  
  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>liked { likes } times</p>

        {/* <p>{ person }</p> */}

        <p>{ 10 }</p>
        <p>{ 'Hello world! ' }</p>
        <p>{ [1, 2, 3, 4, 5] }</p>
        <p>{ Math.random() * 10 }</p>
        
        <a href={ link }>Linkedin Profile</a>
      </div>
    </div>
  );
}

export default App;
