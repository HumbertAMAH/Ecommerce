import React from 'react'
import '../css/footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <section className='footer-content'>
            <nav className='nav-footer'>
              <ul>
                <Link className='link-footer'>Contactez-nous</Link>
                <Link className='link-footer'>Copyright</Link>
                <Link className='link-footer'>Qui sommes-nous?</Link>
              </ul>
            </nav>
      </section>
    </footer>
  )
}

export default Footer