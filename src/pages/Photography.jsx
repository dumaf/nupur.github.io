import { useState } from 'react';
import photographyData from '../data/photography.json';

function Photography() {
  const images = photographyData;
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  return (
    <div className="page-container">
      <h1 className="page-title">Photography</h1>
      <div className="slideshow-container">
        <img src={images[current].image} alt={`Photography ${current + 1}`} />
        <div className="slideshow-counter">
          {current + 1}/{images.length}
        </div>
        <button className="slideshow-arrow left" onClick={prev} aria-label="Previous">&#8249;</button>
        <button className="slideshow-arrow right" onClick={next} aria-label="Next">&#8250;</button>
        {images[current].caption && (
          <div className="slideshow-caption">
            {images[current].caption}
          </div>
        )}
      </div>
    </div>
  );
}

export default Photography;
