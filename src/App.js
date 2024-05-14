import './App.css';
import illustration from './images/illustration-article.svg';
import Greg from './images/image-avatar.webp';

function App() {
  return (
    <>
      <div className='learning-card'>

          <img className='illustration' src={illustration} alt=""/>  

          <div className='learning-tab'>
            <p>Learning</p>
          </div>

          <p>Published 21 Dec 2023</p>

          <h2>HTML & CSS foundations</h2>

          <p>These languages are the backbone of every website, defining structure, content, and presentation.</p>

          <div className='greg-cont'>
            <img className='Greg' src={Greg} alt="Greg Hooper"/>
            <p>Greg Hooper</p>
          </div>

      </div>
    </>
  );
}

export default App;
