import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";

export function ShowBalance() {
  const { connection } = useConnection(); // ✅ call hook
  const { publicKey } = useWallet();      // ✅ call hook
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const getMeUserBalance = async () => {
      if (!connection || !publicKey) return;

      try {
        const lamports = await connection.getBalance(publicKey);
        setBalance(lamports / LAMPORTS_PER_SOL);
      } catch (err) {
        console.error("Failed to fetch balance:", err);
      }
    };

    getMeUserBalance();
  }, [connection, publicKey]); // ✅ refetch when wallet/connection changes

  return (
    <div className="balance-display">
      Balance:{" "}
      {publicKey ? (
        balance !== null ? `${balance} SOL` : "Loading..."
      ) : (
        "Wallet not connected"
      )}
    </div>
  );
}
