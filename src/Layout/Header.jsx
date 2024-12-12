import React, { useState } from 'react'
import { FiUser } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { PiHandbagLight } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";


const Header = () => {

    const [menu,setmenu] = useState([
        {
            name:"MEN",
        },
        {
            name:"WOMEN",
        },
        {
            name:"KIDS",
        },
        {
            name:"HOME & LIVING",
        },
        {
            name:"BEAUTY",
        },
        {
            name:"STUDIO",
            sup:"NEW",
        },
    ])

    const [menulast,setmenulast]=useState([
        {
            icon:<FiUser />,
            name:"Profile"
        },
        {
            icon:<CiHeart />,
            name:"Wishlist"
        },
        {
            icon:<PiHandbagLight />,
            name:"Bag"
        },
    ])
  return (
    <header className='shadow-md bg-white'>
        <div className='max-w-[1250px]  ml-8  p-1 flex items-center gap-7 '>
            <div className='w-[70px]'>
                <img src="/public/myntra-logo.png" alt="Myntra-logo" />
            </div>
            <div className='list-none flex items-center gap-8'>

                {menu.map((items,index)=>{
                    return(
                        <li key={index} className='font-bold text-[13px] text-[rgba(0,0,0,0.9)] cursor-pointer'>{items.name} <sup className='text-pink-600 text-[9px] font-bold'>{items.sup}</sup></li>
                    )
                })}
            </div>
            <div className='h-[38px] w-[350px] rounded-[4px] ml-[60px] bg-gray-50 flex gap-5 items-center'>
                <IoSearchOutline  className='text-[20px] text-gray-900 ml-3'/>
                <input className='w-full bg-gray-50  rounded-[4px] text-[13px] text-black input' type='text' placeholder='Search for products, brands and more'/>
            </div>
            <div>
                <div className='flex gap-7 items-center justify-center ml-2 h-[78px]'>
                    {menulast.map((item,index)=>{
                        return(
                            <li key={index} className='list-none flex flex-col items-center justify-center  gap-[1px] cursor-pointer  h-[78px]'>
                                <span className='text-[20px]'>{item.icon}</span>
                                <span className='font-bold text-[11px]'>{item.name}</span>
                            </li>
                        )
                    })}
                </div>
            </div>
        </div>
    </header>  
  )
}

export default Header