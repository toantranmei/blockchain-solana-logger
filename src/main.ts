import "./style.css";
import {
  Keypair,
  SystemProgram,
  Transaction,
  PublicKey,
  LAMPORTS_PER_SOL,
} from "./solana-web3/src";

const init = () => {
  const account = Keypair.generate();

  const recentBlockhash = account.publicKey.toBase58(); // Fake recentBlockhash

  const transfer = SystemProgram.transfer({
    fromPubkey: account.publicKey,
    toPubkey: new PublicKey("FF9V79SRhzzqDQcSF4LU2VWyzcMZFb7WRvNimGeB8FMy"),
    lamports: 1 * LAMPORTS_PER_SOL,
  });

  const orgTransaction = new Transaction({ recentBlockhash }).add(transfer);

  orgTransaction.sign(account);
  console.log(
    "🚀 ~ file: main.ts ~ line 23 ~ init ~ orgTransaction",
    orgTransaction
  );

  console.log(
    "🚀 ~ file: main.ts ~ line 22 ~ orgTransaction",
    orgTransaction.instructions[0].programId.toString()
  );

  const orgTransactionSel = orgTransaction.serialize();
  console.log(
    "🚀 ~ file: main.ts ~ line 25 ~ orgTransactionSel",
    orgTransactionSel
  );
};

// const newTransaction = new Transaction({
//   recentBlockhash: orgTransaction.recentBlockhash,
//   signatures: orgTransaction.signatures,
// }).add(transfer);
init();
const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
