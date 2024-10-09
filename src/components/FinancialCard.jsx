import React from 'react';
import { Card } from 'antd';

const FinancialCard = ({ title, amount }) => (
  <Card className="bg-[#283549]">
    <p className="text-sm mb-2">{title}</p>
    <p className="text-2xl font-bold">{amount}</p>
  </Card>
);

export default FinancialCard;