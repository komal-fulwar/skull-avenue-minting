import * as BufferLayout from "buffer-layout";

/**
* Layout for a public key
*/
const publicKey = (property = "publicKey") => {
return BufferLayout.blob(32, property);
}
/**
* Layout for a 64bit unsigned value
*/
const uint64 = (property = "uint64") => {
return BufferLayout.blob(8, property);
};

export const ESCROW_ACCOUNT_DATA_LAYOUT = BufferLayout.struct([

BufferLayout.u8("isInitialized"),
publicKey("sellerPubkey"),
publicKey("tokenAccountPubkey"),
publicKey("mintKey"),
uint64("expectedAmount"),
]);

export const VALHALLA_ACCOUNT_DATA_LAYOUT = BufferLayout.struct([

BufferLayout.u8("isInitialized"),
publicKey("valhallaTreasury"),
publicKey("valhallaTeam"),
uint64("basePercentage"),
uint64("treasuryShare"),
uint64("teamShare"),
uint64("precision"),
]);