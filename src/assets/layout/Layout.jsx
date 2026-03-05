import React from 'react'
import { IconPhoto } from '@tabler/icons-react';
import { IconMessage2Filled } from '@tabler/icons-react';
import { IconBellFilled } from '@tabler/icons-react';
import { IconUsers } from '@tabler/icons-react';
import LoginHero from './../Img/signup-bg-DGRfriy9.png'
import { IconHeartFilled } from '@tabler/icons-react';
import PfpImg from './../Img/alex-avatar-BLDJqiDr.png'
import { IconStarFilled } from '@tabler/icons-react';

export default function Layout() {
  return (
    <div className='p-10 bg-blue-500' style={{
        backgroundImage: `linear-gradient(rgba(20,71,230,0.8), rgba(20,71,230,0.8)), url(${LoginHero})`
      }}  >
        <div className="flex items-center flex-wrap">
          <div className="size-12 text-lg font-bold flex justify-center items-center text-white bg-white/40 border border-white/30 rounded-xl">
            S
          </div>
          <div className="ps-1 text-white font-extrabold text-xl">
            SocialHub
          </div>
        </div>
        <div>
          <h3 className='text-white text-5xl font-bold'>Welcome Back</h3>
          <h3 className='text-cyan-300 text-5xl font-bold'>to SocialHub App</h3>
          <p className='pt-2 text-white'>Signin to connect people all over the world</p>
        </div>
        <div className='feature-cards grid lg:grid-cols-2 gap-4 pt-5'>
          <div className=' flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-2 hover:scale-105 transition-transform duration-200'>
            <div className='bg-green-300/50 rounded-2xl p-3'><IconMessage2Filled stroke={2} color='oklch(87.1% .15 154.449) ' size={'1.5rem'} /></div>
            <div className='text-white ps-2'>
              <p>Real-time Chat</p>
              <p>Instant messaging</p>
            </div>
          </div>
          <div className=' flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-2 hover:scale-105 transition-transform duration-200'>
            <div className='bg-blue-400 rounded-2xl p-3'><IconPhoto stroke={2} color='white' size={'1.5rem'} /></div>
            <div className='text-white ps-2'>
              <p>Share Media</p>
              <p>Photos & videos</p>
            </div>
          </div>
          <div className=' flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-2 hover:scale-105 transition-transform duration-200'>
            <div className='bg-purple-600/80 rounded-2xl p-3'><IconBellFilled stroke={2} color='white' size={'1.5rem'} /></div>
            <div className='text-white ps-2'>
              <p>Share Media</p>
              <p>Stay updated</p>
            </div>
          </div>
          <div className=' flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-2 hover:scale-105 transition-transform duration-200'>
            <div className='bg-green-300/50 rounded-2xl p-3'><IconUsers stroke={2} color='oklch(87.1% .15 154.449) ' size={'1.5rem'} /></div>
            <div className='text-white ps-2'>
              <p>Communities</p>
              <p>Find your tribe</p>
            </div>
          </div>

        </div>
        <div className='flex gap-3 pt-5 text-white'>
          <div >
            <div className='flex'> <IconUsers stroke={2} size='35px' /> <p className='font-bold text-3xl ps-1'> 2M+</p></div>
            <p className='pt-2'>Active Users</p>
          </div>
          <div >
            <div className='flex'> <IconHeartFilled stroke={2} size='35px' /> <p className='font-bold text-3xl ps-1'> 10M+</p></div>
            <p className='pt-2'>Posts Shared</p>
          </div>
          <div >
            <div className='flex'> <IconMessage2Filled stroke={2} size='35px' /> <p className='font-bold text-3xl ps-1'> 50M+</p></div>
            <p className='pt-2'>Messages Sent</p>
          </div>

        </div>
        <div className='bg-white/20 border border-white/30 backdrop-blur-sm rounded-xl p-4 space-y-4 hover:bg-white/25 transition-colors duration-200'>
          <div className='flex gap-0.5'>
            <IconStarFilled color='gold' />
            <IconStarFilled color='gold' />
            <IconStarFilled color='gold' />
            <IconStarFilled color='gold' />
            <IconStarFilled color='gold' />
          </div>
          <div>
            <p className='text-white'>"SocialHub has completely changed how I connect with friends and discover new communities. The experience is seamless!"</p>
          </div>
          <div className='flex gap-3 items-center'>
            <img src={PfpImg} alt="UserImg" className='w-15 rounded-4xl' />
            <div >
              <p className='text-white font-semibold'>Alex Johnson</p>
              <p className='text-gray-300'>Product Designer</p>
            </div>
          </div>
        </div>
      </div>  )
}
