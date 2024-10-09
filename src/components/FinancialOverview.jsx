import React from 'react';
import { Card, Image } from 'antd';
import FinancialCard from './FinancialCard';
import {ChevronDown, ChevronUp, ExternalLink} from 'lucide-react'
import Profile from "../assets/Profile.png";
import image1 from '../assets/image1.png'
const completionPercentage = 15;
const FinancialOverview = () => (
  <div className="lg:mb-3 flex gap-4 lg:mt-0 ">
    <div className="bg-[#053559] text-white lg:w-4/5 w-3/5  p-4 rounded-2xl lg:block md:block hidden">
    <div className='justify-between flex flex-row'>
    <p className='font-bold text-xl'>Financial Overview</p>
    <div className='flex'>
    <p>View all campaigns</p>
    <ExternalLink className='ml-2 p-1' />
    </div>
    </div>
    <hr className='bg-gray-900 mt-4' />

    <div className='mt-12 flex lg:gap-28 md:gap-16'>
      <div>
        <p>Total income</p>
        <h3 className='font-bold text-3xl'>$62,932</h3>
      </div>
      <div>
        <p>Funds In Escrow</p>
        <h3 className='font-bold text-3xl'>$62,231</h3>
      </div>
      <div>
        <p>Ave. Income Monthly</p>
        <h3 className='font-bold text-3xl'>$3,542</h3>
      </div>
    </div>

    <div className='mt-12'>
      <p> <span className='font-bold text-lg mr-3'>January Summary:</span> Total Fund in Escrow <span className='font-bold mr-3'>. $350</span> Total Income <span className='font-bold'>. $850</span></p>
    </div>
    </div>
    <Card className='border rounded-2xl text-[#053559] w-2/5 border-[#053559] lg:block md:block hidden'>
    <div className='flex justify-between'>
    <p className='font-bold text-lg'>Profile Information</p>
    <ExternalLink />
    </div>

    <div className="flex items-center my-5 w-full">
        <Image src={Profile} alt="profile" className="w-12 h-12 rounded-full" />
        <div className="w-full">
          <p className="font-semibold text-[18px]">Olivia Jacobs</p>
          
          <div className="flex items-center mt-1 w-full">
          <div className=" h-2 bg-gray-200 rounded-lg w-[130%]">
            <div
              className="h-2 bg-blue-500 rounded-lg "
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
          <span className="ml-2 text-sm text-gray-700">{completionPercentage}%</span>
        </div>
        </div>
        </div>
        <p className='lg:text-lg md:text-lg'>Complete your profile with details showcasing your skills and personality. Stand out and attract more opportunities.</p>
      
    </Card>
  </div>
);

export default FinancialOverview;