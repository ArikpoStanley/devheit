import React, {useContext} from 'react';
import { Input, Button, Select } from 'antd';
import CampaignCard from './CampaignCard';
import {LayoutGrid, List, Search} from 'lucide-react'
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { DataContext } from "../context/DataContext";


const CampaignExplorer = () => {
  const { formData } = useContext(DataContext);
  const campaignData = [
    {
      title: "Epic Social Buzz",
      category: "Samsung . Product Review",
      description: "Aliquam massa donec proin sit duis magna eu maecenas. Ultricies id mattis lobortis proin congue proin elementum. Sed ac porttitor metus ante et susp",
      budget: "$1000 - $2000",
      color: "#9333ea"
    },
    {
      title: "Epic Social Buzz",
      description: "Aliquam massa donec proin sit duis magna eu maecenas. Ultricies id mattis lobortis proin congue proin elementum. Sed ac porttitor metus ante et susp",
      category: "Samsung . Product Review",
      budget: "$1000 - $2000",
      color: "#dc2626"
    },
    {
      title: "Viral Social Sparks",
      description: "Aliquam massa donec proin sit duis magna eu maecenas. Ultricies id mattis lobortis proin congue proin elementum. Sed ac porttitor metus ante et susp",
      category: "Samsung . Product Review",
      budget: "$1000 - $2000",
      color: "#eab308"
    },
    {
      title: "Connect & Trend",
      description: "Aliquam massa donec proin sit duis magna eu maecenas. Ultricies id mattis lobortis proin congue proin elementum. Sed ac porttitor metus ante et susp",
      category: "Samsung . Product Review",
      budget: "$1000 - $2000",
      color: "#2563eb"
    },
    {
      title: "Engage & Share",
      description: "Aliquam massa donec proin sit duis magna eu maecenas. Ultricies id mattis lobortis proin congue proin elementum. Sed ac porttitor metus ante et susp",
      category: "Samsung . Product Review",
      budget: "$1000 - $2000",
      color: "#dc2626"
    },
    {
      title: "Dynamic Social Pulse",
      description: "Aliquam massa donec proin sit duis magna eu maecenas. Ultricies id mattis lobortis proin congue proin elementum. Sed ac porttitor metus ante et susp",
      category: "Samsung . Product Review",
      budget: "$1000 - $2000",
      color: "#16a34a"
    }
  ];
  campaignData.push(formData)
  
  return(
    <div className='lg:bg-gray-100 md:bg-gray-100 bg-white'>
    {/* Center: Search Bar */}
    <div className="flex lg:hidden md:hidden">
    <Input placeholder="Search Description" className="w-[95%] mx-auto py-4 placeholder:text-[#053559] placeholder:pl-6 bg-[#E7F5FF] border-0 mb-4 rounded-2xl" />
    <SearchOutlined className="absolute left-7 top-[13.2%]  text-[#053559]" />
    </div>
    
  <div className=" lg:flex justify-between mb-3 md:flex hidden lg:mt-5 md:mt-5 mt-0">
    <h3 className="text-xl font-semibold mb-4">Explore Campaigns</h3>
    <div className='w-2/5 flex bg-[#E7F5FF] rounded-xl'>
    <Input placeholder="Search Description" className="w-full py-4 bg-[#E7F5FF] border-0" />
    <Button className='bg-[#053559] h-full rounded-xl'>
      <Search color='white' />
    </Button>
    </div>
  </div>

  <div className=" lg:flex justify-between mb-3 gap-5 md:flex hidden">
    <p className="text-lg mb-4">Search result: <span className="text-[#053559] font-bold ">432 Blog post</span> campaigns</p>
    <div className='flex items-center rounded-xl gap-3'>
    <p>Sort by: </p>

    <Select
    defaultValue="Category"
       style={{
        width: 120,
        backgroundColor: '#e6f7ff',  // Light blue background (as in the image)
        borderColor: '#91d5ff',      // Light blue border color
        color: '#0050b3',            // Dark blue text color
      }} // Light blue background

    >
      <Option value="category">Category</Option>
      <Option value="price">Price</Option>
      <Option value="date">Date</Option>
    </Select>
    <LayoutGrid className='bg-[#E7F5FF] p-1' size={30}/>
    <List size={30} />
   
    </div>
  </div>

  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 md:gap-2 gap-0">
    {
      campaignData.map((camp, index)=>(
        <CampaignCard key={index} title={camp.title} category={camp.category} budget={camp.budget} description={camp.description} color={camp.color} />
      ))
    }
    
  </div>
</div>
  )
}
 
export default CampaignExplorer;