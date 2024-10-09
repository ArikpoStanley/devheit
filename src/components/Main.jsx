import React from 'react';
import { Layout } from 'antd';
import DashboardHeader from './DashboardHeader';
import FinancialOverview from './FinancialOverview';
import CampaignExplorer from './CampaignExplorer';
import { DataProvider } from '../context/DataContext';
const { Content } = Layout;

const MainContainer = () => (
<DataProvider>
<Layout className='lg:ml-[17%] overflow-x-hidden '>
    <DashboardHeader />
    <Content className="lg:p-8 p-2 overflow-x-hidden bg-white md:bg-gray-100 lg:bg-gray-100">
      <FinancialOverview />
      <CampaignExplorer />
    </Content>
  </Layout>
</DataProvider>
);

export default MainContainer;

