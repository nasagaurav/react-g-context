import React {createContext, useContext} from 'react';
import './style.css';

const NasaContext =  

export default function App() {
const value =  {
  x:1,
  y:2,
  z:3,
  a:[1,2,3,4,5],
  b:['html','css']
}

  return (
    <NasaContext.Provider value={value}>
      <C1 />
    </NasaContext.Provider>
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
  const data = useContext(NasaContext);
  console.log(data);
  return (
    <div>
      <h1>C10 components</h1>
    </div>
  );
}
