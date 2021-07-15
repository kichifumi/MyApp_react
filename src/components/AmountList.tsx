import React from 'react';

type Props = {
  title: string;
  amountList: any;
};

const AmountList = ({ title, amountList }: Props) => {
  //   console.log(amountList);
  return (
    <>
      <div>{title}</div>
      <ul>
        {amountList.map((item: any) => {
          <li>{item.date}</li>;
          <li>{item.amounr}</li>;
        })}
      </ul>
    </>
  );
};
export default AmountList;
