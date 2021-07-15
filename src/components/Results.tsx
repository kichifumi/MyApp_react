import React from 'react';
import AmountList from '../components/AmountList';

const Results = () => {
  const spendingAmount = [
    {
      date: '7/10(土)',
      amount: 1000,
    },
    {
      date: '7/9(金)',
      amount: 2000,
    },
  ];

  const incomeAmount = [
    {
      date: '7/11(日)',
      amount: 9000,
    },
    {
      date: '7/5(月)',
      amount: 100,
    },
    {
      date: '7/4(日)',
      amount: 2000,
    },
  ];

  return (
    <>
      {/* <table>
        <tr>
          <td>収入</td>
          <td>支出</td>
        </tr>
        <tr>
          <td>7/10(土) 1000円</td>
          <td>7/10(土) 2000円</td>
        </tr>
      </table> */}
      <AmountList title="収入" amountList={spendingAmount} />
    </>
  );
};
export default Results;
