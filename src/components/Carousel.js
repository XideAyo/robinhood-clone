import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: '/caro1.png',
    altText: 'Learn as You Grow',
    caption: 'Our goal is to make investing in financial markets more affordable, more intuitive, and more fun, no matter how much experience you have (or don’t have).'
  },
  {
    src: '/caro2.png',
    altText: 'Manage your Portfolio',
    caption: 'Keep your portfolio in your pocket. Everything you need to manage your assets is available in a single app'
  },
  {
    src: '/caro1.png',
    altText: 'Keep Tabs on your Money',
    caption: 'Set up customized news and notifications to stay on top of your assets as casually or as relentlessly as you like. Controlling the flow of info is up to you'
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText}  className='resize'/>
        <div className='row justify-content-center'>
            <div className="col-md-6">
                <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
            </div>
        </div>
      </CarouselItem>
    );
  });

  return (
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
  );
}

export default Example;