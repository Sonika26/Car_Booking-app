import "./StatsBanner.css";

const StatsBanner = () => {
  return (
    <div className="stats-banner">
      {/* Item 1 */}
      <div className="stats-item">
        {/* Car SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" 
             className="icon" 
             viewBox="0 0 24 24" 
             fill="currentColor">
          <path d="M5 11h14l-1.5-4.5A2 2 0 0 0 15.6 5H8.4a2 2 0 0 0-1.9 1.5L5 11zm-1 2v5h2v-2h12v2h2v-5H4z"/>
        </svg>
        <div>
          <h3>10,000+ Cars Listed</h3>
        </div>
      </div>

      {/* Item 2 */}
      <div className="stats-item">
        {/* Location Pin SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" 
             className="icon" 
             viewBox="0 0 24 24" 
             fill="currentColor">
          <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
        </svg>
        <div>
          <h3>Trusted Sellers</h3>
          <p>Verified & Reviewed</p>
        </div>
      </div>

      {/* Item 3 */}
      <div className="stats-item">
        {/* Heart SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" 
             className="icon" 
             viewBox="0 0 24 24" 
             fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                   2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 
                   4.5 2.09C13.09 3.81 14.76 3 16.5 3
                   19.58 3 22 5.42 22 8.5c0 3.78-3.4 
                   6.86-8.55 11.54L12 21.35z"/>
        </svg>
        <div>
          <h3>Best Prices</h3>
          <p>Market Competitive</p>
        </div>
      </div>
    </div>
  );
};

export default StatsBanner;
