import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';
import  {episodes} from './episodes.js'

const App = () => {
 return(
  <div className="episodes-list">
  <div className="">{episodes.map((episode) => (
      <div key={episode.num} className="episode"> 
      <div className="episode__num">{episode.num}</div>
      <div className="episode__body">
          <div className="episode__title">{episode.title}</div>
          <div className="episode__guest">{episode.guest}</div>
      </div></div>
      ))}
  </div>
  </div>
 )
}

createRoot(
  document.querySelector('#app'),
).render(<App />);
