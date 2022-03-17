import { createSafe } from "../src/safes/createSafe"
import { getAllUserSafes } from "../src/safes/getUserSafes"
import { getAllSafes } from "../src/safes/getAllSafes"
import { getSafesInfo } from "../src/safes/getSafeInfo"
import { JsonRpcProvider, Web3Provider } from "@ethersproject/providers";
import { Wallet } from "ethers";

export const alchemyURL = `https://eth-mainnet.alchemyapi.io/v2/2Mt-6brbJvTA4w9cpiDtnbTo6qOoySnN`;
export const localURL = `http://127.0.0.1:8545/`;

const TRIBE = "0xc7283b66eb1eb5fb86327f08e1b5816b0720212b"

const provider = new JsonRpcProvider(localURL)

const createSigner = () => {
    const wallet = new Wallet("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80", provider)
    return wallet
}

async function main() {
    const signer = createSigner()
    const tx = await createSafe(signer, TRIBE)
    console.log({ tx })
    try {
        const result = await tx.wait(1)
        console.log({ result })
    } catch (err) {
    }
}

async function _getAllSafes() {
    const signer = createSigner()

    let safes = []
    try {
        const res = await getAllSafes(provider)
        console.log({ res })
    } catch (err) {
    }

    try {
        const res2 = await getSafesInfo(provider, safes)
        console.log({ res2 })
    } catch (err) {
        console.log(err)
    }

}

_getAllSafes()
