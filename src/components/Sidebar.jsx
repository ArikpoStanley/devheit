import React from 'react';
import { Layout, Menu, Image, Row, Col, Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import {Campaign} from '@mui/icons-material'
import {ChevronDown, ChevronUp, ChevronRight, Layers, SlidersHorizontal, MegaphoneIcon, MessagesSquareIcon} from 'lucide-react'
import camp from '../assets/camp.png'
import chat from '../assets/chat.png'
import set from '../assets/set.png'
import solar from '../assets/solar.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import Profile from "../assets/Profile.png";

const { Sider } = Layout;
const bottomMenuItems =[
  {text: "TechGuru's Tech Review S...", img: img1},
  {text: "BeautyBlend Makeup...", img: img2},
  {text: "Wanderlust Adventure...", img: img3},
  {text: "Fitness Fusion Worko...", img: img4},
  {text: "Home Harmony DIY C...", img: img5},
]

const Sidebar = () => {
  return(
    <div>
      <Sider width={320} className="lg:flex lg:fixed hidden text-[#053559] h-[100vh] bg-white shadow-lg shadow-b-0  ">
    <div className="p-4">
      <div className="flex items-center mb-3">
        <span className="ml-3 text-[22px] font-bold">Micro-Influx</span>
      </div>
      <div className="flex items-center mx-auto">
        <Image src={Profile} alt="profile" className="w-12 h-12 rounded-full" />
        <div className="ml-3">
          <p className="font-semibold text-[18px]">Olivia Jacobs</p>
          <p className="text-sm">Lifestyle Influencer</p>
        </div>
        <div className='ml-8'>
        <ChevronUp/>
        <ChevronDown />
        </div>
      </div>
    </div>
    <Menu
      theme="light"
      mode='inline'
      defaultSelectedKeys={['1']}
      className="p-6 border-0 space-y-5 items-center"
    >
      <Menu.Item key="1" icon={<HomeOutlined height={40} width={40}/>} className=" text-white rounded-md border-0 ">
        Dashboard
      </Menu.Item>
      <Menu.Item key="2" icon={ <MegaphoneIcon /> } className='font-bold ml-5'>Campaigns</Menu.Item>
      <Menu.Item key="3" icon={<MessagesSquareIcon />} className='font-bold'>Messages</Menu.Item>
      <Menu.Item key="4" icon={<Layers />} className='font-bold'>Earning History</Menu.Item>
      <Menu.Item key="5" icon={<SlidersHorizontal />} className='font-bold'>Settings</Menu.Item>
    </Menu>

    <Row className="flex flex-col mt-40 mx-6 ">
      <div className='flex flex-row justify-between mb-3'>
      <h3 className="text-sm font-semibold mb-2 ml-3 ">Campaign Shortcuts</h3>
      <Button className='bg-[#E7F5FF] text-xs p-1'>
        View all
      </Button>
      </div>
      <Menu theme="light" mode="inline" className="border-0">
        {
          bottomMenuItems.map((it, index)=>(
            <Col className='justify-between flex flex-row items-center border-0'>
        <Menu.Item key={index} icon={<Image src={it.img} alt="Tech" className=" items-center" />}>
          {it.text} 
        </Menu.Item>
        <ChevronRight />
        </Col>
          ))
        }
        
      </Menu>
    </Row>
  </Sider>
    </div>
  )
};

export default Sidebar;