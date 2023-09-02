import React from 'react'
import { Link } from 'react-router-dom'


function ShowCard({ img, button }) {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-2 mx-auto">
      <div className="card">
        <img src={img} alt="" className="img-top" />
        <div className="card-footer text-center">
            {button === 'coming-soon' && (<button type="button" class="btn" disabled>Coming Soon</button>
)}
            {button!=='coming-soon' && (<Link  to="/contact" className='btn' >Book Now</Link>)}      
            
        </div>
      </div>
    </div>
  )
}

export default ShowCard
