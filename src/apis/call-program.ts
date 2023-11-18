import {
    Transaction,
    WalletAdapterNetwork,
    WalletNotConnectedError
} from "@demox-labs/aleo-wallet-adapter-base";
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import { AleoNetworkClient } from '@aleohq/sdk';


async function callProgram(program, function_name, inputs, fee) {
    const { publicKey, requestTransaction } = useWallet();
    if (!publicKey) throw new WalletNotConnectedError();
    const aleoTransaction = Transaction.createTransaction(
        publicKey,
        WalletAdapterNetwork.Testnet,
        'liquidity_pool.aleo', // TODO need to change this to the correct program file 
        'add_liquidity',
        inputs,
        fee
    );

    if (requestTransaction) {
        // Returns a transaction Id, that can be used to check the status. Note this is not the on-chain transaction id
        await requestTransaction(aleoTransaction).then((resp) => {
            console.log(resp);
        });
    }
}

export async function addLiquidity(token_record: string, amount: number) {
    const inputs = [JSON.parse(token_record), `${amount}u64`, '0u64'];
    const fee = 35_000; // This will fail if fee is not set high enough

    await callProgram('liquidity_pool.aleo', 'add_liquidity', inputs, fee);
};

export async function removeLiquidity(token_record: string, amount: number) {
    const inputs = [JSON.parse(token_record), `${amount}u64`, '0u64'];
    const fee = 35_000; // This will fail if fee is not set high enough

    await callProgram('liquidity_pool.aleo', 'remove_liquidity', inputs, fee);
};

export async function getLoan() {
    const inputs = [];
}

export async function repayLoan(token_record: string, amount: number) {
    const inputs = [JSON.parse(token_record), `${amount}u64`];
    const fee = 35_000;

    await callProgram('liquidity_pool.aleo', 'repay_bid', inputs, fee);
}

export async function placeBid(amount: number, loan_id: string) {
    const inputs = [`${amount}u64`, `${loan_id}u128`]
    const fee = 35_000;

    await callProgram('zkid_auction_001.aleo', 'place_bid', inputs, fee);
}

export async function payBid(Bid_record: string, Aleo_record: string) {
    const inputs = [JSON.parse(Bid_record), JSON.parse(Aleo_record)];
    const fee = 35_000;

    await callProgram('zkid_auction_001.aleo', 'pay_bid', inputs, fee);
}

// get list of loans
export async function get_loan_list() {
    let public_connection = new AleoNetworkClient("https://vm.aleo.org/api");
    const { publicKey, requestTransaction } = useWallet();
    public_connection.setAccount(publicKey);
    let connection = public_connection.connect();
    let mappingValue = connection.getMappingValue("liquidity_pool.aleo", "account", "aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px");


}