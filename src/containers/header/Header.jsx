import React from 'react'
import './header.css'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';



const Header = () => {
  return (
    <div className='gpt3__header section__padding'>
     <div className="gpt3__header-content">
         <h1 className='gradient__text'>
            Let's Build Something amazing with GPT-3 OpenAI
         </h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quidem dolorum eveniet velit aperiam odit. Minus harum, excepturi commodi non, odit sed perferendis sint ipsam recusandae magni cumque temporibus vitae!</p>
         <div className="gpt3__header-content__input">
            <input type="email" placeholder='Enter your email id' />
            <button type="button">Get Started</button>
         </div>

         <div className="gpt3__header-content__people">
            <img src={people} alt="people"/>
            <p>1,600 people requested access in past 24 hours</p>
         </div>
         <div className="gpt3__header-image">
           <img src={ai} alt="ai" />
         </div>
     </div>
    </div>
  )
}

export default Header