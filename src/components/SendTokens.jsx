import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";

export function SendTokens() {
    const wallet = useWallet();
    const { connection } = useConnection();

    async function sendTokens() {
        let to = document.getElementById("to").value;
        let amount = document.getElementById("amount").value;
        const transaction = new Transaction();
        transaction.add(SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(to),
            lamports: amount * LAMPORTS_PER_SOL
        }))

        await wallet.sendTransaction(transaction, connection);
        alert(`Sent ${amount} SOL to ${to}`)

    }

    return <>
        <span style={{display: "flex", justifyContent: "space-between", margin: 40}}>
            <input style={{padding: 20}} id="to" type="text" placeholder="To" />
            <input style={{padding: 20}} id="amount" type="text" placeholder="Amount"></input>
            <button style={{padding: 20}} onClick={sendTokens}>Send</button>
        </span>
    </>
        
        
}