import React, { useEffect, useState } from 'react';

// components
import Layout from '../../components/Layout';
import TextInput from '../../components/TextInput/TextInput';
import SelectedMonth from '../../components/SelectedMonth';
import Results from '../../components/Results';

const Home = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [dispBalance, setDispBalance] = useState<number>(0);
  const [dispIncomeAmount, setDispIncomeAmount] = useState<number>(0); // 総収入金額
  const [dispSpendingAmount, setDispSpendingAmount] = useState<number>(0); // 総支出金額
  const [inputIncomeAmount, setInputIncomeAmount] = useState<string>(''); // 収入金額(入力)
  const [inputSpendingAmount, setInputSpendingAmount] = useState<string>(''); // 支出金額(入力)

  useEffect(() => {
    setCurrentMonth(new Date());
  }, []);

  // 総収入額計算
  const calcIncomeAmount = (amount: number) => {
    setDispIncomeAmount(0);
  };

  // 総支出額計算
  const calcSpendingAmount = (amount: number) => {
    setDispSpendingAmount(0);
  };

  // 収入額追加
  const addIncomeAmount = () => {
    console.log(inputIncomeAmount);
  };

  // 支出額追加
  const addSpendingAmount = () => {
    console.log(inputSpendingAmount);
  };

  return (
    <div className="Home">
      <Layout>
        <div>
          <SelectedMonth />
          <div>{`残高 ¥ ${dispBalance.toLocaleString()}円`}</div>
          <div>{`収入合計 ¥ ${dispIncomeAmount.toLocaleString()}円`}</div>
          <div>{`支出合計 ¥ ${dispSpendingAmount.toLocaleString()}円`}</div>
          <div>
            <div>
              <TextInput
                value={inputIncomeAmount}
                onChangeText={setInputIncomeAmount}
                placeholder="収入"
              />
              <button onClick={addIncomeAmount}>追加</button>
            </div>

            <div>
              <TextInput
                value={inputSpendingAmount}
                onChangeText={setInputSpendingAmount}
                placeholder="支出"
              />
              <button onClick={addSpendingAmount}>追加</button>
            </div>
          </div>
          <Results />
        </div>
      </Layout>
    </div>
  );
};
export default Home;
