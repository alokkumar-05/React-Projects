const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero_content">
        <h1>YOUR FEET DESERVE THE BEST</h1>

        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </p>

        <div className="hero-buttons">
          <button>Shop Now</button>
          <button>Category</button>
        </div>

        <div className="shopping">
          <p>available on</p>

          <div className="brand-icon">
            <img src="/images/flipkart.png" alt="flipkart" />
            <img src="/images/amazon.png" alt="amazon" />
          </div>
        </div>
      </div>

      <div className="hero_img">
        <img src="/images/hero_icon.png" alt="hero icon" />
      </div>
    </main>
  );
};

export default HeroSection;
