import React, { useState } from 'react';

import './card.css'

const Item = ({ text, img }) => {

  const [cardRotateX, setRotateX] = useState(0);
  const [cardRotateY, setRotateY] = useState(0);
  const [cardScale, setCardScale] = useState(1);

  // данные о наклоне, перспективе и т д.
  const tiltEffectSettings = {
    max: 20,
    perspective: 1000,
    scale: `${cardScale}`
  }

  const cards = React.createRef()

  function mouseMove(event) {

    const card = cards.current;

      const cardWidth = card.offsetWidth;
      const cardHeight = card.offsetHeight;

      const centerX = card.offsetLeft + cardWidth / 2;
      const centerY = card.offsetTop + cardHeight / 2;

      const mouseX = event.clientX - centerX;
      const mouseY = event.clientY - centerY;

      const rotateX = (tiltEffectSettings.max) * mouseY / (cardHeight / 2).toFixed(2);
      const rotateY = (tiltEffectSettings.max) * mouseX / (cardWidth / 2).toFixed(2);

      setRotateX(-rotateX)
      setRotateY(rotateY)
  }

  function mouseLeave() {
    setRotateX(0);
    setRotateY(0);

    setCardScale(1);
  }

  function mouseEnter() {
    setCardScale(1.5)
  }

  return (
    <div className='card' ref={cards} onMouseMove={mouseMove} onMouseLeave={mouseLeave} onMouseEnter={mouseEnter}
      style={
        {
          background: `url(${img})`,
          transform:
            `
              perspective(${tiltEffectSettings.perspective}px) 
              rotateX(${cardRotateX}deg) 
              rotateY(${cardRotateY}deg)
              scale3d(${cardScale}, ${cardScale}, ${cardScale})
              `
        }
      }>
      <div className='card__item'>
        <h1 className='text'>{text}</h1>
        <h2 className='text'>{text}</h2>
      </div>
    </div>
  );
};

export default Item;