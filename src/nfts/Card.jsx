import React from 'react'
import '../styles/Card.css'

const Card= ({id , img, title, desc}) => {
  return (
   <div className="card">
     <div className="card-image">
       <img src={img} alt="image" />
     </div>
     <div className="card-details">
         <h4 className="card-title">
           {title}
         </h4>
       </div>
     <div className="card-content">
       <div className="card-heading">
       <span className="card-series">
           {id}
         </span>
         <span className="card-series">
           {desc}
         </span>
       </div>
      
     </div>
   </div>
  )
}

export default Card