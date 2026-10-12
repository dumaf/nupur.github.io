import { useState } from 'react';
import dncData from '../data/dnc2024.json';

function Dnc2024() {
  const images = dncData;
  const [current, setCurrent] = useState(0);

  // Return null or fallback if data is still loading/empty
  if (!images || images.length === 0) return null;

  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  return (
    <div className="page-container">
      <h1 className="page-title">DNC 2024</h1>
      <div className="slideshow-container">
        <img src={images[current].image} alt={`DNC 2024 photo ${current + 1}`} />
        <div className="slideshow-counter">
          {current + 1}/{images.length}
        </div>
        <button className="slideshow-arrow left" onClick={prev} aria-label="Previous">&#8249;</button>
        <button className="slideshow-arrow right" onClick={next} aria-label="Next">&#8250;</button>
        {images[current].caption && (
          <div
            className="slideshow-caption"
            dangerouslySetInnerHTML={{ __html: images[current].caption }}
          />
        )}
      </div>
      <div style={{ marginTop: '3rem' }}>
        <p className="slideshow-page-text" style={{fontSize: '14px', lineHeight: '1.6'}}>
          Throngs of protesters gathered at Union Park to protest the Democratic National Convention (DNC) and demand that political representatives "stand with Palestine and end US aid to Israel." Leading this protest were the United States Palestinian Community Network (<a href="https://uspcn.org/" target="_blank" rel="noopener noreferrer">USPCN</a>) and the Chicago Alliance Against Racial and Political Repression (<a href="https://www.caarpr.org/" target="_blank" rel="noopener noreferrer">CAARPR</a>). They were joined by nearly 200 organizations from all over the United States.
        </p>
      </div>
    </div>
  );
}

export default Dnc2024;
