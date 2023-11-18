import type { AppProps } from 'next/app';
import type { NextPageWithLayout } from '@/types';
import Layout from '@/layouts/_layout'; // Adjust the import path as needed
import { useState } from 'react';

import { WalletNotConnectedError } from "@demox-labs/aleo-wallet-adapter-base";
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import { LeoWalletAdapter } from "@demox-labs/aleo-wallet-adapter-leo";
import React, { FC, useCallback } from "react";
import { SignMessage } from '@/components/SignMessage';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function Test({ Component, pageProps }: AppPropsWithLayout) {

  const toggleAddLiquidity = () => {
    console.log('Toggling Add Liquidity');
  };

  const clearAll = () => {
    console.log('Clearing all fields');
  };

  const handleMaxClick = () => {
    console.log('Max clicked');
  };

  const addLiquidityUni = () => {
    console.log('Add Liquidity button clicked');
  };


  const removeLiquidityUni = () => {
    console.log('Remove Liquidity Uni');
  };

  return (

    <>
      <Layout>

        <div className="flex flex-col items-center justify-center min-h-screen py-4 text-white">

          <div className="card bg-black text-white w-full max-w-md">

            <div className="card-body">
              <div className="container mb-4">
              <h1 className="mb-4 text-lg font-medium uppercase tracking-wider text-gray-900 dark:text-white sm:text-2xl">Add Liquidity</h1>
              </div>
              <div className="container card text-black">
                <input
                  type="number"
                  defaultValue={0}
                  onChange={(e) => {
                  }}
                  style={{ textAlign: "right" }}
                  className="shadow appearance-none border rounded my-2 w-full px-3 leading-tight focus:outline-none focus:shadow-outline text-black"
                />
                <div className="flex justify-between">
                  <span>Coin A</span>
                  <span>Balance: 0.000000</span>
                  <a href="#" onClick={handleMaxClick}>
                    MAX
                  </a>
                </div>
              </div>
              <div className="container card text-black">
                <input
                  type="number"
                  defaultValue={0}
                  onChange={(e) => {
                  }}
                  style={{ textAlign: "right" }}
                  className="shadow appearance-none border rounded my-2 w-full px-3 leading-tight focus:outline-none focus:shadow-outline text-black"

                />
                <div className="flex justify-between">
                  <span>Coin B</span>
                  <span>Balance: 0.000000</span>
                  <a href="#" onClick={handleMaxClick}>
                    MAX
                  </a>
                </div>
              </div>

              <div className="text-center ">
                <p>Estimated Transaction Cost: $0.12</p>
              </div>
            </div>

            <div className="text-center my-4 mb-4">

              <button onClick={addLiquidityUni} className="bg-transparent border border-white text-white py-2 px-4 rounded">
                Add Liquidity
              </button>
            </div>
          </div>

          <hr className="my-4 py-2 w-full max-w-4xl border-t border-gray-300" />


          <div className="card bg-black text-white w-full max-w-md">
            <div className="card-header border-white">
              <div className="container mb-4">
              <h1 className="mb-4 text-lg font-medium uppercase tracking-wider text-gray-900 dark:text-white sm:text-2xl">Remove Liquidity</h1>
              </div>
            </div>

            <div className="card-body bg-black text-white p-3">
              <div className="flex justify-between mb-3">
                <div>USDT Token Pool</div>
                <div>
                  <a href="https://v2.info.uniswap.org/account/sender" className="text-white">
                    Active Pools 🟢
                  </a>
                </div>
              </div>
              <div className="card ">
                <div className="flex justify-between mb-3">
                  <div>
                    <a href="https://v2.info.uniswap.org/pair/lptokenaddress" className="text-white">
                      USDT
                    </a>
                  </div>
                  <div>1.01 USD</div>
                </div>

                <div className="flex justify-between">
                  <div>
                    <p>Fee tier</p>
                  </div>
                  <div>1%</div>
                </div>
              </div>
            </div>


          </div>
          <button onClick={removeLiquidityUni} className="bg-transparent border border-white text-white py-2 px-4 rounded">
            Remove Liquidity
          </button>

        </div>


      </Layout>
    </>
  );
}

export default Test;
