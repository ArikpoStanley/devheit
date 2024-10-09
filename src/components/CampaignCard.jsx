import React from 'react';
import { Card, Avatar, Button } from 'antd';
import {Bookmark} from 'lucide-react'
import {Facebook, Instagram, Twitter, YouTube} from '@mui/icons-material'
import Tik from '../assets/Tiktok.png'
const CampaignCard = ({ title, category, budget, color, description }) => (
  <Card className="lg:border md:border lg:shadow-sm md:shadow-sm border-b lg:rounded-xl md-rounded-xl rounded text-[#053559] border-0 shadow-0">
    <div className="flex justify-between items-center mb-4">
{/* card header */}
      <div className='flex flex-row justify-between '>
          <div style={{ backgroundColor: color }} className='p-2 font-bold text-white rounded-md mr-2 h-12'>
            <p className='font-bold text-[20px]'>{title.split(" ")[0].substring(0,2).toUpperCase()}</p>
          </div>
          <div className='flex flex-row justify-between '>
              <div className=''>
              <div className='flex justify-between lg:space-x-28 md:space-x-16 space-x-5'>
                <h4 className="font-semibold mb-2">{title}</h4>
                <p className="text-xs text-right flex text-black">Posted 2 days ago <Bookmark fill='#FF3366'  className='text-[#FF3366] '/> </p>
              </div>
              <p className="text-sm font-semi-bold text-black mb-4">{category}</p>
              </div>              
          </div>
      </div>
    </div>

    <div>
      <p className='lg:text-lg text-black'>{description}</p>
    </div>
    <div className="flex flex-col ">
      <div>
          <p className='font-bold mb-2 mt-4'>Channels</p>
            <div className='flex flex-row gap-1 items-center'>
              <Instagram className='text-[#053559]' />
              <img src={Tik} alt="" className='h-4 w-4'/>
              <YouTube className='text-[#053559]' />
              <Twitter className='text-[#053559]' />
              <Facebook className='text-[#053559]' />
              <p>+ 2 more</p>
            </div>
      </div>
    </div>

    <div className='flex flex-row justify-between mt-3'>
        <div className=''>
            <p className="text-sm font-bold">Budget</p>
            <p className="lg:text-3xl text-lg font-bold">{budget}</p>
        </div>
        <Button className='bg-[#053559] text-white font-bold p-6 '>Apply Now</Button>
        </div>
  </Card>
);

export default CampaignCard;