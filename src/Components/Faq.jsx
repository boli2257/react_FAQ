import React from 'react'
import { useState } from 'react'
import { questions } from "../data_faq.js"
import { Question } from './Question.jsx'

export const Faq = () => {
    const [faq] = useState(questions) 
    console.log(faq);
    
  return (
    <div className='space-y-4'>
      {faq.map(obj=><Question key={obj.id} {...obj}/>)}
    </div>
  )
}
