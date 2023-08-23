import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/home.css'
import dressing from '../asset/dressing.png'
import Carousel from 'react-multi-carousel';
import { productData, responsive } from '../data';
import Product from './Product';
import 'react-multi-carousel/lib/styles.css'

function Home() {

              const product = productData.map((item) => (
                <Product
                  name={item.name}
                  url={item.imageurl}
                  price={item.price}
                  description={item.description}
                />
              ));


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
            <Carousel showDots={true} responsive={responsive}>
                         {product}
            </Carousel>
              </section>
              <section className='section-image'>
              <Carousel showDots={true} responsive={responsive}>
                         {product}
            </Carousel>
              </section>
    </div>
  )
}

export default Home;
