import './App.css';
import React, { useState } from 'react';

//  COMPONENTS
import Item from './card/Item.jsx';
// IMG 
import img0 from './card/svg/Aizen.jpg'
import img1 from './card/svg/Aizen.jpg'
import img2 from './card/svg/Aizen.jpg'

function App() {

  const [item, setItem] = useState([
    {
      id: 1,
      text: 'test-1',
      img: {img0}
    },
    {
      id: 2,
      text: 'test-2',
      img: {img1}
    },
    {
      id: 3,
      text: 'test-3',
      img: {img2}
    }
  ])

  const result = Array.from(item.map((item, index) => {
    return(
      <Item key={index}
        text={item.text}
        img={item.img}
        />
        )
      }));

  return (
    <div className="App">
      <div className='list'>
        {result}
      </div>
    </div>
  );
}

export default App;
