import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function RequestAirdrop() {
  const { publicKey } = useWallet();       // ✅ hook at top level
  const { connection } = useConnection();  // ✅ hook at top level

  const handleAirdrop = async () => {
    if (!publicKey) {
      alert("Wallet not connected!");
      return;
    }

    const amount = document.getElementById("amt").value;
    try {
      const sig = await connection.requestAirdrop(
        publicKey,
        amount * LAMPORTS_PER_SOL
      );
      console.log("Airdrop requested, tx signature:", sig);
    } catch (err) {
      console.error("Airdrop failed:", err);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <input
        id="amt"
        style={{ padding: 18, marginLeft: 35 }}
        type="text"
        placeholder="Amount..."
      />
      <button style={{ padding: 18, marginRight: 25 }} onClick={handleAirdrop}>
        Request Airdrop
      </button>
    </div>
  );
}
