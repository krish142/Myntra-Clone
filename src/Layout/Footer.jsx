import React, { useState } from 'react'

const Footer = () => {

  const Firststate = ['Men','Women','Kids','Home & Living','Beauty','Gift Cards','Myntra Insider'];

  const Secondlist = ['Contact Us','FAQ','T&C','Terms Of Use','Track Orders','Shipping','Cancellation','Returns','Privacy policy','Grievance Officer']
  return (
    <div className='bg-[#FAFBFC] px-[100px] py-[40px]'>
      <div className=' flex gap-[100px]'> 
        <div className='flex gap-[60px]'>
          <ul>
            <p className='text-[12px] font-bold pb-4 cursor-pointer '> ONLINE SHOPPING </p>
            {Firststate.map((items,index)=>{
              return (
                <li key={index} className='py-[5px] text-slate-600 text-[14px] cursor-pointer font-sans hover:text-black'>{items}</li>
              )
            })}
          </ul>
          <ul>
            <p className='text-[12px] font-bold pb-4 cursor-pointer '> CUSTOMER POLICIES </p>
            {Secondlist.map((items,index)=>{
              return (
                <li key={index} className='py-[5px] text-slate-600 text-[14px] cursor-pointer font-sans hover:text-black'>{items}</li>
              )
            })}
          </ul>
        </div>
        <div>
          <p className='text-[12px] font-bold pb-6 '> EXPERIENCE MYNTRA APP ON MOBILE </p>
          <div className='flex gap-2 '>
            <img src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt=""  className='w-[123px] h-[42px]'/>
            <img src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt=""  className='w-[123px] h-[42px]'/>
          </div>
          <p className='text-[12px] font-bold pt-7 '> KEEP IN TOUCH </p>
          <div className='flex gap-3 py-3'>
            <img src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png" alt="" className='h-[20px]' />
            <img src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png" alt="" className='h-[20px]' />
            <img src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png" alt="" className='h-[20px]'/>
            <img src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png" alt=""className='h-[20px]' />
          </div>
        </div>
        <div className='w-[260px] flex flex-col gap-9'>
          <div className='flex gap-2'>
            <img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" alt=""  className='w-[50px] h-[42px]'/>
            <p className='text-slate-600 text-[14px]'><strong className='text-[#282c3f] text-[14px]'>100% ORIGINAL </strong>  guarantee for all products at myntra.com </p>
          </div>
          <div className='flex gap-3'>
            <img src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png" alt=""  className='w-[52px] h-[44px]'/>
            <p className='text-slate-600 text-[14px]'><strong className='text-[#282c3f] text-[14px]'>Return within 14days  </strong>of receiving your order</p>
          </div>
        </div>
      </div>
      <p className='pt-5 text-center text-slate-700'>© 2024 www.myntra.com. All rights reserved.</p>
    </div>
  )
}

export default Footer
