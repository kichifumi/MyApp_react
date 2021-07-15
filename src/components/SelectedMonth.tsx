import React from 'react';

const SelectedMonth = () => {
  const currentDate = new Date();
  const getDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDay();
    return [year, month, day];
  };

  const formatDate = (date: Date) => {
    const [year, month, day] = getDate(date);
    return `${year}年 ${month}月`;
  };

  return <div>{formatDate(currentDate)}</div>;
};
export default SelectedMonth;
