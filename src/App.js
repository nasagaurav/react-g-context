import React {createContext} from 'react';
import './style.css';

const NasaContext = createContext();

export default function App() {
  return (
    <div>
      <C1 />
    </div>
  );
}

const C1 = () => <C2 />;
const C2 = () => <C3 />;
const C3 = () => <C4 />;
const C4 = () => <C5 />;
const C5 = () => <C6 />;
const C6 = () => <C7 />;
const C7 = () => <C8 />;
const C8 = () => <C9 />;
const C9 = () => <C10 />;

function C10() {
  return (
    <div>
      <h1>C10 components</h1>
    </div>
  );
}
