import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import '../css/home.css'
import dressing from '../asset/dressing.png'
import jordan1 from '../asset/jordan1.png'
import jordan2 from '../asset/jordan2.png'
import jordan4 from '../asset/jordan4.png'
import jordan5 from '../asset/jordan5.png'
import { useState } from 'react';
import Modal from './Modal';


function Home(showModal) {
  const [modal, setModal] = useState (false)
  showModal = ()=>{
    setModal(!modal)
  }

  return (
    <div>
      <section>
        <div className='banner'>
          <img  className='banner-image' src={dressing} alt="" />
          <div className='text'>
            <span className='span-text'>Lorem,  <br /> ipsum dolor <br />bsum placeat </span>
            <p className='p-text'>Inscrivez vous pour publier des article </p>
            <button>Connectez-vous</button>
          </div>
        </div>
      </section>

      <section className='section-carousel'>
      <Carousel>
      <Carousel.Item>
      <img
        className='d-block '
        src={jordan1}
        alt='first slide'
      />
        <Carousel.Caption>
{/*           <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>  */}
        </Carousel.Caption>
        <input onClick={showModal} className='input-button' type="button" value="Detail" />
        {modal && <Modal  showModal = {showModal} />}
      </Carousel.Item>
      {/* <Carousel.Item>
      <img
        className='d-block '
        src={jordan2}
        alt='first slide'
      />
        <Carousel.Caption> */}
{/*           <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
     {/*    </Carousel.Caption>
        <input className='input-button' type="button" value="Detail" />
      </Carousel.Item>
      <Carousel.Item>
      <img
        className='d-block'
        src={jordan5}
        alt='first slide'
      />
        <Carousel.Caption> */}
{/*           <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
    {/*     </Carousel.Caption>
        <input className='input-button' type="button" value="Detail" />
      </Carousel.Item> */}
    </Carousel>
      </section>
      <section className='section-carousel'>
      <Carousel >
      <Carousel.Item>
      <img
        className='d-block '
        src={jordan1}
        alt='first slide'
      />
        <Carousel.Caption>
{/*           <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
        <input className='input-button' type="button" value="Detail" />
      </Carousel.Item>
      <Carousel.Item>
      <img
        className='d-block '
        src={jordan2}
        alt='first slide'
      />
        <Carousel.Caption>
{/*           <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
        <input className='input-button' type="button" value="Detail" />
      </Carousel.Item>
      <Carousel.Item>
      <img
        className='d-block'
        src={jordan4}
        alt='first slide'
      />
        <Carousel.Caption>
{/*           <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
        <input className='input-button' type="button" value="Detail" />
      </Carousel.Item>
    </Carousel>
      </section>
      <section className='section-carousel'>
      <Carousel>
      <Carousel.Item>
      <img
        className='d-block '
        src={jordan1}
        alt='first slide'
      />
        <Carousel.Caption>
{/*           <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
        <input className='input-button' type="button" value="Detail" />
      </Carousel.Item>
      <Carousel.Item>
      <img
        className='d-block '
        src={jordan2}
        alt='first slide'
      />
        <Carousel.Caption>
{/*           <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
        <input className='input-button' type="button" value="Detail" />
      </Carousel.Item>
      <Carousel.Item>
      <img
        className='d-block'
        src={jordan1}
        alt='first slide'
      />
        <Carousel.Caption>
{/*           <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
        <input className='input-button' type="button" value="Detail" />
      </Carousel.Item>
    </Carousel>
      </section>
      <section className='section-carousel'>
      <Carousel>
      <Carousel.Item>
      <img
        className='d-block '
        src={jordan4}
        alt='first slide'
      />
        <Carousel.Caption>
{/*           <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
        <input className='input-button' type="button" value="Detail" />
      </Carousel.Item>
      <Carousel.Item>
      <img
        className='d-block '
        src={jordan5}
        alt='first slide'
      />
        <Carousel.Caption>
{/*           <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
        <input className='input-button' type="button" value="Detail" />
      </Carousel.Item>
      <Carousel.Item>
      <img
        className='d-block'
        src={jordan2}
        alt='first slide'
      />
        <Carousel.Caption>
{/*           <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
        <input className='input-button' type="button" value="Detail" />
      </Carousel.Item>
    </Carousel>
      </section>
      <section className='section-carousel'>
      <Carousel>
      <Carousel.Item>
      <img
        className='d-block '
        src={jordan4}
        alt='first slide'
      />
        <Carousel.Caption>
{/*           <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
        <input className='input-button' type="button" value="Detail" />
      </Carousel.Item>
      <Carousel.Item>
      <img
        className='d-block '
        src={jordan5}
        alt='first slide'
      />
        <Carousel.Caption>
{/*           <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
        <input className='input-button' type="button" value="Detail" />
      </Carousel.Item>
      <Carousel.Item>
      <img
        className='d-block'
        src={jordan2}
        alt='first slide'
      />
        <Carousel.Caption>
{/*           <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
        <input className='input-button' type="button" value="Detail" />
      </Carousel.Item>
    </Carousel>
      </section>
    </div>
  )
}

export default Home;
