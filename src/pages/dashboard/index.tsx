import type { AppProps } from 'next/app';
import type { NextPageWithLayout } from '@/types';
import Layout from '@/layouts/_layout'; // Adjust the import path as needed
import { useState } from 'react';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

type Transaction = {
  id: number;
  type: string;
  details: string;
  status: string;
  explorerLink: string;
};

function Test({ Component, pageProps }: AppPropsWithLayout) {

  const [loanAmount, setLoanAmount] = useState<number>(0); // Example state for loan amount
  const [loanDuration, setLoanDuration] = useState<number>(0); // Example state for loan duration
  const [transactions, setTransactions] = useState<Transaction[]>([]); // State for transactions

  // Example function to handle button clicks
  const handleButtonClick = (buttonName: string) => {
    console.log(`${buttonName} pressed`);
  };

  // Function to handle 'View All' click
  const handleViewAllClick = () => {
    console.log('view');
  };

  return (

    <>
      <Layout>

        <div className="flex flex-col items-center justify-center p-4 text-white">
          {/* Container 1 */}
          <div className="max-w-full rounded border p-4">
            <h2 className="text-lg font-bold">Loan Amount</h2>
            <p>{loanAmount}</p>
            <p className="mt-2">Loan Duration: {loanDuration} days</p>
          </div>

          {/* Container 2 */}
          <div className="max-w-full flex justify-around items-center mt-4 rounded border p-4">
            {['Payback', 'History', 'Invite', 'Account'].map((item) => (
              <button key={item} onClick={() => handleButtonClick(item)} className="rounded p-2">
                <span>{item}</span>
              </button>
            ))}
          </div>

          {/* Container 3 */}
          <div className="max-w-full mt-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">Transaction History</h3>
              <button onClick={handleViewAllClick} className="rounded bg-white text-black px-4 py-2">
                View All
              </button>
            </div>
            <ul>
              {transactions.map((transaction) => (
                <li key={transaction.id} className="flex items-center mt-2">
                  {/* Add Money Icon here */}
                  <span>{transaction.type} - {transaction.details} - {transaction.status}</span>
                  <a href={transaction.explorerLink} className="ml-2">Link</a>
                </li>
              ))}
            </ul>
          </div>
        </div>



      </Layout>
    </>
  );
}

export default Test;
