import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/home.css'
import dressing from '../asset/dressing.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import jordan4 from '../asset/jordan4.png'
import jordan5 from '../asset/jordan5.png'


function Home() {
 
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
 

  return (
    <div>
      <section>
        <div className='banner'>
          <img  className='banner-image' src={dressing} alt="" />
          <div className='text'>
            <span className='span-text'>Lorem,  <br /> ipsum dolor <br />bsum placeat </span>
        {/*     <p className='p-text'>Inscrivez vous pour publier des article </p>
             <button className='button'>Connectez-vous</button>  */}
          </div>
        </div>
      </section>

              <section className='section-image'>
              <Carousel responsive={responsive}>
                    <div className='card'>
                      <img  className='product-image' src={jordan5} alt="jordan" />
                      <h2>sport sneaker</h2>
                      <p className='price'>$98.5</p>
                      <p className='description'> Air Jordan 4 Retro, un modèle emblématique de la collaboration entre Michael Jordan et Nike.</p>
                        <button className='card-button'>Add to cart</button>
                    </div>
                    {/* <div className='card'>
                      <img  className='product--image' src={jordan4} alt="jordan" />
                      <h2>sport sneaker</h2>
                      <p className='price'>$98.5</p>
                      <p className='description'> Air Jordan 4 Retro, un modèle emblématique de la collaboration entre Michael Jordan et Nike.</p>
                        <button className='card-button'>Add to cart</button>
                    </div> */}
                    <div className='card'>
                      <img  className='product-image' src={jordan4} alt="jordan" />
                      <h2>sport sneaker</h2>
                      <p className='price'>$98.5</p>
                      <p className='description'> Air Jordan 4 Retro, un modèle emblématique de la collaboration entre Michael Jordan et Nike.</p>
                        <button className='card-button'>Add to cart</button>
                    </div>
                    <div className='card'>
                      <img  className='product-image' src={jordan5} alt="jordan" />
                      <h2>sport sneaker</h2>
                      <p className='price'>$98.5</p>
                      <p className='description'> Air Jordan 4 Retro, un modèle emblématique de la collaboration entre Michael Jordan et Nike.</p>
                        <button className='card-button'>Add to cart</button>
                    </div>
                    <div className='card'>
                      <img  className='product-image' src={jordan5} alt="jordan" />
                      <h2>sport sneaker</h2>
                      <p className='price'>$98.5</p>
                      <p className='description'> Air Jordan 4 Retro, un modèle emblématique de la collaboration entre Michael Jordan et Nike.</p>
                        <button className='card-button'>Add to cart</button>
                    </div>
              </Carousel>
              </section>
              <section className='section-image'>
              <Carousel responsive={responsive}>
                    <div className='card'>
                      <img  className='product-image' src={jordan5} alt="jordan" />
                      <h2>sport sneaker</h2>
                      <p className='price'>$98.5</p>
                      <p className='description'> Air Jordan 4 Retro, un modèle emblématique de la collaboration entre Michael Jordan et Nike.</p>
                        <button className='card-button'>Add to cart</button>
                    </div>
                    <div className='card'>
                      <img  className='product-image' src={jordan4} alt="jordan" />
                      <h2>sport sneaker</h2>
                      <p className='price'>$98.5</p>
                      <p className='description'> Air Jordan 4 Retro, un modèle emblématique de la collaboration entre Michael Jordan et Nike.</p>
                        <button className='card-button'>Add to cart</button>
                    </div>
                    <div className='card'>
                      <img  className='product-image' src={jordan4} alt="jordan" />
                      <h2>sport sneaker</h2>
                      <p className='price'>$98.5</p>
                      <p className='description'> Air Jordan 4 Retro, un modèle emblématique de la collaboration entre Michael Jordan et Nike.</p>
                        <button className='card-button'>Add to cart</button>
                    </div>
                    <div className='card'>
                      <img  className='product-image' src={jordan5} alt="jordan" />
                      <h2>sport sneaker</h2>
                      <p className='price'>$98.5</p>
                      <p className='description'> Air Jordan 4 Retro, un modèle emblématique de la collaboration entre Michael Jordan et Nike.</p>
                        <button className='card-button'>Add to cart</button>
                    </div>
                    <div className='card'>
                      <img  className='product-image' src={jordan4} alt="jordan" />
                      <h2>sport sneaker</h2>
                      <p className='price'>$98.5</p>
                      <p className='description'> Air Jordan 4 Retro, un modèle emblématique de la collaboration entre Michael Jordan et Nike.</p>
                        <button className='card-button'>Add to cart</button>
                    </div>
              </Carousel>
              </section>
    </div>
  )
}

export default Home;
