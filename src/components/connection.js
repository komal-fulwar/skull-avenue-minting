import { clusterApiUrl, Connection } from "@solana/web3.js";

// export const connectionString = 'devnet';
export const COMMITMENT = "singleGossip";

export const connection = new Connection(
  clusterApiUrl("mainnet-beta"),
  "confirmed"
);

// import { clusterApiUrl, Connection } from '@solana/web3.js';
// // export const connectionString = 'devnet';
// export const COMMITMENT = "singleGossip";
// // export const connection = new Connection(
// //     clusterApiUrl(connectionString),
// //     'confirmed'
// // )
// const networks = {
//     mainnet: {
//         // url: "https://solana-api.projectserum.com",
//         url: 'https://api.mainnet-beta.solana.com',
//         // url: "https://api.mainnet-beta.solana.com",
//         displayName: "Mainnet Beta",
//     },
//     devnet: { url: clusterApiUrl("devnet"), displayName: "Devnet" },
//     testnet: { url: clusterApiUrl("testnet"), displayName: "Testnet" },
// };
// const solanaNetwork = networks.mainnet;
// export const connection = new Connection(solanaNetwork.url);
