import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';
import {Episode} from './components/episode/Episode.jsx'
import  {episodes} from './data.js'

export const App = () => {
 return(
  <>
  <div className="episodes-list">
    {episodes.map((episode) => 
    (<Episode className="episode"
      key={episode.num} 
      num={episode.num} 
      title={episode.title} 
      guest={episode.guest} >
    </Episode>))}
  </div>
  </>
 )
}


createRoot(
  document.querySelector('#app'),
).render(<App />);
