import App from 'next/app'
import React, { FC, useMemo } from "react";
import { LeoWalletAdapter } from "@demox-labs/aleo-wallet-adapter-leo";


require("@demox-labs/aleo-wallet-adapter-reactui/styles.css");


export default class MyApp extends App {
    render() {
        const wallets = useMemo(
            () => [
                new LeoWalletAdapter({
                    appName: "Leo Demo App",
                }),
            ],
            []
        );

        return (
            <>
            
            {/* <WalletProvider
                wallets={wallets}
                decryptPermission={DecryptPermission.UponRequest}
                network={WalletAdapterNetwork.Testnet}
                autoConnect
            >
                <WalletModalProvider>
                    <Header></Header>
                </WalletModalProvider>
            </WalletProvider> */}
            </>
        )
    }
}

