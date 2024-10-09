import React, { useState, useContext } from 'react';
import { Layout, Modal, Input, Button, Select, Drawer, Menu } from 'antd';
import { PlusOutlined, MenuOutlined, HomeOutlined, } from '@ant-design/icons';
import { MessageSquareText, Bell, Layers, SlidersHorizontal, MegaphoneIcon, MessagesSquareIcon,  ArrowLeft} from 'lucide-react';
import think from '../assets/think.png';
import { DataContext } from "../context/DataContext";

const { Header } = Layout;
const { TextArea } = Input;
const { Option } = Select;

const DashboardHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');
  const { setFormData } = useContext(DataContext);

  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const toggleDrawer = () => setDrawerVisible(!drawerVisible);

  function getRandomHexColor() {
    // Generate a random number, convert to hex, and slice the first 6 characters
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // Pad with leading zeros if needed
    return `#${randomColor.padStart(6, '0')}`;
}
const color = getRandomHexColor()

  const handleSubmit = (e) => {
    e.preventDefault();
  console.log("hello")
    const formData = {
      title,
      brand,
      category,
      description,
      budget,
      color
    };
    setFormData(formData);
    setIsModalOpen(false);
    setTitle('')
    setCategory('')
    setDescription('')
    setBudget('')
    setBrand('')
  };

  return (
    <div className=''>
      {/* Mobile Header */}
      <Header className="flex lg:hidden md:hidden justify-between items-center bg-white lg:bg-gray-100 md:bg-gray-100 p-4">
        <div className="flex items-center space-x-2">
          <img src={think} alt="Logo" className="w-12 h-12" />
        </div>
        <h1 className="text-xl font-bold text-[#053559]">Micro Influx</h1>
        <div className="lg:hidden">
          <MenuOutlined className="text-2xl text-gray-800 cursor-pointer" onClick={toggleDrawer} />
        </div>
      </Header>

      {/* Drawer for Menu */}
      <Drawer
        title="Menu"
        placement="left"
        onClose={toggleDrawer}
        visible={drawerVisible}
        bodyStyle={{ padding: 0 }}
      >
        <Menu theme="light" defaultSelectedKeys={['1']} className="space-y-2">
          <Menu.Item key="1" icon={<HomeOutlined />} className="font-bold">Dashboard</Menu.Item>
          <Menu.Item key="2" icon={<MegaphoneIcon size={20} />} className="font-bold">Campaigns</Menu.Item>
          <Menu.Item key="3" icon={<MessagesSquareIcon size={20} />} className="font-bold">Messages</Menu.Item>
          <Menu.Item key="4" icon={<Layers size={20} />} className="font-bold">History</Menu.Item>
          <Menu.Item key="5" icon={<SlidersHorizontal size={20} />} className="font-bold">Settings</Menu.Item>
        </Menu>
        <div className='items-center text-center'>
          <Button onClick={showModal} className='bg-[#053559] text-white p-6' icon={<PlusOutlined />} size="small">
            Create a New Campaign
          </Button>
        </div>
      </Drawer>

      {/* Desktop Header */}
      <Header className="lg:bg-gray-100 md:bg-gray-100 bg-white z-10 lg:flex justify-between items-center px-8 py-4 md:flex hidden">
        <h2 className="text-2xl font-bold text-[#053559]">Dashboard</h2>
        <div className='flex items-center'>
          <Button onClick={showModal} className='bg-[#053559] text-white p-6' icon={<PlusOutlined />} size="large">
            Create a New Campaign
          </Button>
          <MessageSquareText fill='#053559' size={43} className='mx-5 text-gray-100' />
          <Bell fill='#053559' color='#053559' size={35} />
        </div>
      </Header>

      {/* Modal */}
      <div className="hidden justify-center items-center min-h-screen min-w-screen bg-gray-50 text-[#053559]">
        <Modal
          title={<span style={{ color: "#053559", display: "flex" }}> <ArrowLeft onClick={handleCancel} className='mr-1' />Create Campaign</span>}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
          style={{ color: "#053559" }}
          className="p-0"
          centered
        >
          <form className="space-y-4 text-[#053559]" >
            {/* Campaign Title */}
            <div>
              <label className="block text-[#053559]">Campaign Title</label>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} className='py-2' placeholder="Enter your campaign title here" style={{ borderColor: "#053559" }} />
            </div>

            {/* Brand Name */}
            <div>
              <label className="block text-[#053559]">Brand Name</label>
              <Input value={brand} onChange={(e) => setBrand(e.target.value)} className='py-2' placeholder="Enter your brand name here" style={{ borderColor: "#053559" }} />
            </div>

            {/* Campaign Category */}
            <div>
              <label className="block text-[#053559]">Campaign Category</label>
              <Select
                value={category}
                onChange={(value) => setCategory(value)}
                placeholder="Select your campaign category"
                className="w-full h-10"
                style={{ borderColor: "#053559" }}
              >
                <Option value="category1">Category 1</Option>
                <Option value="category2">Category 2</Option>
                <Option value="category3">Category 3</Option>
              </Select>
            </div>

            {/* Campaign Description */}
            <div>
              <label className="block text-[#053559]">Campaign Description</label>
              <TextArea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} placeholder="Enter your campaign description here" style={{ borderColor: "#053559" }} />
            </div>

            {/* Campaign Budget */}
            <div>
              <label className="block text-[#053559]">Campaign Budget</label>
              <Input value={budget} onChange={(e) => setBudget(e.target.value)} className='py-2' placeholder="Enter your campaign budget" style={{ borderColor: "#053559" }} />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <Button onClick={handleSubmit} type='submit' className="bg-[#053559] text-white p-5">
                Create New Campaign
              </Button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
}

export default DashboardHeader;
