import React from 'react'
import { useState } from 'react';
import { FaHandPointDown, FaHandPointUp } from "react-icons/fa";

export const Question = ({ id, title, info }) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='border border-slate-300 rounded-xl shadow-sm'>
            <div className='flex justify-between items-center cursor-pointer hover:bg-indigo-100 transition rounded-xl p-4' onClick={()=>setIsOpen(!isOpen)}>
                <span className='font-medium text-slate-800'>{title}</span>
                <span>{!isOpen ?
                    <FaHandPointDown className=''/>
                    : <FaHandPointUp className=''/>}</span></div>
            {isOpen &&
                <div className='p-4 border-t border-gray-100  motion-safe:animate-bounce'>{info}</div>
            }



        </div>
    )
}
