import Layout from '@/layouts/_layout';
import React, { useState } from 'react';

interface FormState {
  loanAmount: number;
  loanDuration: number;
}

const LoanForm: React.FC = () => {
  // State variables
  const [formState, setFormState] = useState<FormState>({ loanAmount: 0, loanDuration: 0 });
  const loanLimit = 10000; // Replace with actual loan limit
  const creditRate = 5; // Replace with actual credit rate

  // Handlers
  const handleLoanAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, loanAmount: parseFloat(event.target.value) });
  };

  const handleDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, loanDuration: parseInt(event.target.value, 10) });
  };

  const handleSubmit = () => {
    console.log('Sent', formState);
    // Add logic to send data to the contract
  };

  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-center p-4 text-white">
          <form className="w-full max-w-md">
            {/* Loan Amount */}
            <div className="mb-4">
              <label htmlFor="loanAmount" className="block text-sm font-bold mb-2">How much do you need?</label>
              <input
                type="number"
                id="loanAmount"
                value={formState.loanAmount}
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight text-black focus:outline-none focus:shadow-outline"
                placeholder="Enter amount"
                onChange={handleLoanAmountChange}
                min="0"
                max={loanLimit}
              />
              <p className="text-xs mt-2">Your loan limit is: {loanLimit}</p>
            </div>

            {/* Loan Duration */}
            <div className="mb-4">
              <label htmlFor="loanDuration" className="block text-sm font-bold mb-2">Loan Duration (days)</label>
              <input
                type="number"
                id="loanDuration"
                value={formState.loanDuration}
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight text-black focus:outline-none focus:shadow-outline"
                placeholder="Enter number of days"
                onChange={handleDurationChange}
              />
            </div>

            {/* Credit Rate */}
            <div className="mb-6">
              <p className="text-sm">Credit Based Interest Rates: {creditRate}%</p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleSubmit}
              >
                Get Loan
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default LoanForm;
