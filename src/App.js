import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <header className='header'>
        <img src='https://placeit-assets1.s3-accelerate.amazonaws.com/custom-pages/fitness-logo-maker/fitness-logo-template-with-an-abstract-energetic-human-illustration-2457a-1024x1024.png'>
        </img>
      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messeges</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Setting</a>
        </div>
      </nav>
      <div className='content'></div>
    </div>
  );
}

export default App;
