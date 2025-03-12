import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Edison bulb gatekeep four loko, slow-carb skateboard chambray
            crucifix asymmetrical ethical green juice sustainable farm-to-table
            sartorial cornhole. Semiotics affogato kitsch, bicycle rights salvia
            +1 sartorial celiac paleo.
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='woman and the browser' className='img' />
        </div>
      </div>
    </section>
  );
};
export default Hero;
