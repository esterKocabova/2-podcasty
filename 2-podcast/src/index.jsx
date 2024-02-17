import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';
import {Episode} from './components/episode/Episode'

createRoot(
  document.querySelector('#app'),
).render(<Episode />);
