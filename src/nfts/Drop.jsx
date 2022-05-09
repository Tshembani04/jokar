import React from 'react'
import '../styles/Drop.css'
import Card from './Card'
import img1 from '../images/jokar/img1.png'
import img2 from '../images/jokar/img2.png'
import img3 from '../images/jokar/img3.png'
import img4 from '../images/jokar/img4.png'
import img5 from '../images/jokar/img5.png'
import img6 from '../images/jokar/img6.png'
import img7 from '../images/jokar/img7.png'
import img8 from '../images/jokar/img8.png'
import img9 from '../images/jokar/img9.png'
import img10 from '../images/jokar/img10.png'

const Drop = () => {



const data = 
     [
        {
            id: 1,
            img: img1,
            title: 'Crypto Punk',
            desc: 'Rare pixilated punk of all time',
        },
        {
            id: 2,
            img: img2,
            title: 'Crypto Punk',
            desc: 'Rare pixilated punk of all time',
        },
        {
            id: 3,
            img: img3,
            title: 'Crypto Punk',
            desc: 'Rare pixilated punk of all time',
        },
        {
            id: 4,
            img: img4,
            title: 'Crypto Punk',
            desc: 'Rare pixilated punk of all time',
        },
        // {
        //     id: 5,
        //     img: img5,
        //     title: 'Crypto Punk',
        //     desc: 'Rare pixilated punk of all time',
        // },
        // {
        //     id: 6,
        //     img: img6,
        //     title: 'Crypto Punk',
        //     desc: 'Rare pixilated punk of all time',
        // },
        {
            id: 7,
            img: img7,
            title: 'Crypto Punk',
            desc: 'Rare pixilated punk of all time',
        },
        {
            id: 8,
            img: img8,
            title: 'Crypto Punk',
            desc: 'Rare pixilated punk of all time',
        },
        {
            id: 9,
            img: img9,
            title: 'Crypto Punk',
            desc: 'Rare pixilated punk of all time',
        },
        {
            id: 10,
            img: img10,
            title: 'Crypto Punk',
            desc: 'Rare pixilated punk of all time',
        },
    ]


  return (
    <div className="super-rare">
      <div className="title-container">
        <h2 className="title">
         The Club-House
        </h2>
        <p className="description">
        The Upcoming largest NFT marketplace. Authentic and truly unique
          digital creation. Signed and issued by the creators, made possible by 
          blockchain technology.
        </p>
      </div>
      <div className="cards">
        {
          data.map(({id, img, title, desc}, index)=>(
            <Card
            id={id}
            img={img}
            title={title}
            desc={desc}
            key={index}
            />
            
          ))
        }
      </div>
    </div>
  )
}

export default Drop