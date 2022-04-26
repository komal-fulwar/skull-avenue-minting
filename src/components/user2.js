import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { connection } from "./connection";
import {
  PublicKey,
  TransactionInstruction,
} from "@solana/web3.js";

import {
  ESCROW_ACCOUNT_DATA_LAYOUT,
} from "./utils";
import { sendTxUsingExternalSignature } from './externalwallet';
const BN = require("bn.js");

const getStates = async (programId) => {
  let accountsInited = [];
  const accounts = await connection.getProgramAccounts(programId);
  console.log("accounts", accounts[0].pubkey.toString(), accounts[1].pubkey.toString());
  if (accounts.length > 0) {
    for (let i = 0; i < accounts.length; i++) {
      const escrowAccount = await connection.getAccountInfo(
        accounts[i].pubkey
      );

      if (escrowAccount === null) {
        console.log("Could not find escrow at given address!");
      }
      console.log(escrowAccount, "*****escrow Account ..");
      const encodedEscrowState = escrowAccount && escrowAccount.data;
      const decodedEscrowLayout = ESCROW_ACCOUNT_DATA_LAYOUT.decode(
        encodedEscrowState
      );
      const mint = new PublicKey(decodedEscrowLayout.mintKey);
      console.log(mint.toBase58(), "****Mint key****")

      const escrowState = {
        escrowAccountPubkey: accounts[i].pubkey,
        isInitialized: !!decodedEscrowLayout.isInitialized,
        initializerAccountPubkey: new PublicKey(
          decodedEscrowLayout.sellerPubkey
        ),
        XTokenTempAccountPubkey: new PublicKey(
          decodedEscrowLayout.tokenAccountPubkey
        ),
        TokenMintKey: new PublicKey(
          decodedEscrowLayout.mintKey
        ),
        expectedAmount: new BN(decodedEscrowLayout.expectedAmount, 10, "le"),
      };

      if (escrowState.isInitialized == true) {
        accountsInited.push(escrowState);
        console.log("11111111", escrowState.escrowAccountPubkey.toString())
      }
    }
    return accountsInited[Math.floor(Math.random() * accountsInited.length)]
  } else {
    console.log("No accounts");
    process.exit()
  }
}

export const user2 = async (user) => {
  console.log(user, "chceck user");

  const systemProgramId = new PublicKey("11111111111111111111111111111111")
  const buyer = new PublicKey(user);

  const escrowProgramId = new PublicKey("7i45KBxfnHrTRUDs1uoFLHadk1y3HS2Y12H9pouLVEz8")

  const escrowState = await getStates(escrowProgramId);
  let escrowAccount = escrowState.escrowAccountPubkey;

  console.log("State-------------------", escrowAccount.toString());


  const PDA = await PublicKey.findProgramAddress(
    [
      Buffer.from("valhalla"),
      escrowAccount.toBuffer()
    ],
    escrowProgramId
  );

  const keystest = [
    { pubkey: buyer, isSigner: true, isWritable: false },
    //{ pubkey: bobXAccountPub, isSigner: false, isWritable: true },
    {
      pubkey: escrowState.XTokenTempAccountPubkey,
      isSigner: false,
      isWritable: true,
    },
    {
      pubkey: escrowState.initializerAccountPubkey,
      isSigner: false,
      isWritable: true,
    },
    {
      pubkey: escrowState.TokenMintKey,
      isSigner: false,
      isWritable: true,
    },
    { pubkey: escrowAccount, isSigner: false, isWritable: true },
    { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
    { pubkey: systemProgramId, isSigner: false, isWritable: false },
    { pubkey: PDA[0], isSigner: false, isWritable: false }
  ]


  // sending transaction

  const exchangeInstruction = new TransactionInstruction({
    programId: escrowProgramId,
    data: Buffer.from(
      Uint8Array.of(1, ...new BN(1).toArray("le", 8))
    ),
    keys: keystest,
  });


  console.log("Sending Bob's transaction...");
  await sendTxUsingExternalSignature(
    [exchangeInstruction],
    connection,
    null,
    [],
    buyer,
  );

  // sleep to allow time to update
  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log(
    "✨Trade successfully executed. All temporary accounts closed✨\n"
  );
}