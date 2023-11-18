

import Layout from '@/layouts/_layout';
import React, { useState } from 'react';

interface Transaction {
  amount: number;
  date: string; // Assuming date is a string, format as needed
}


const LoanForm: React.FC = () => {

  const [loanAmount, setLoanAmount] = useState<number>(10000); // Example amount
  const [remainingDays, setRemainingDays] = useState<number>(30); // Example days
  const [paymentDueDate, setPaymentDueDate] = useState<string>('2023-12-01'); // Example date
  const [interestRate, setInterestRate] = useState<number>(5.0); // Example interest rate
  const [transactions, setTransactions] = useState<Transaction[]>([
    { amount: 5123, date: '2023-11-07' },
    { amount: 310, date: '2023-11-02' },
    { amount: 583, date: '2023-10-30' },
    { amount: 690, date: '2023-10-23' },
    { amount: 5032, date: '2023-10-21' },
    { amount: 303, date: '2023-10-01' },
  ]);

  const handlePayment = () => {
    console.log('Initiate payment transaction');
    // Payment logic here
  };

  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-screen py-4">
          {/* First Div */}
          <div className=" text-white p-4 w-full max-w-4xl mx-4">
            <p className="mb-4 text-lg font-medium uppercase tracking-wider text-gray-900 dark:text-white sm:text-2xl">Loan Amount</p>
            <h1>${loanAmount}</h1>
            <div className="flex justify-between mt-4">
              {/* Other details */}
            </div>
          </div>
          <hr className="my-4 w-full max-w-4xl border-t border-gray-300" />


          {/* Second Div */}
          <div className=" text-white p-4 w-full max-w-4xl mx-4">
            <h1 className="mb-4 text-lg font-medium uppercase tracking-wider text-gray-900 dark:text-white sm:text-2xl">Payment Schedule</h1>
            <div className="mt-4">
              {transactions.map((transaction, index) => (
                <div key={index} className="flex justify-between py-2">
                  <div className="text-left">
                    <span>${transaction.amount}</span>
                  </div>
                  <div className="text-right">
                    <span>{transaction.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='py-4'>
            {/* Pay Now Button */}
            <button
              className="bg-transparent border border-white text-white py-2 px-4 rounded"
              onClick={handlePayment}
            >
              Pay Now
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default LoanForm;
