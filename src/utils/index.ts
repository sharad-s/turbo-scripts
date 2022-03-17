import { Contract, Signer } from "ethers"
import { JsonRpcProvider, Web3Provider } from "@ethersproject/providers";

import TurboLensABI from "../../abis/TurboLens.json"
import TurboMasterABI from "../../abis/TurboMaster.json"
import TurboRouterABI from "../../abis/TurboRouter.json"
import { Interface } from "ethers/lib/utils";

// DEVNET ONLY
const master = "0x7a43aa0d3e4e58f5fba0ef75f8f1e25c6312a76d"
const router = "0x8bb7019a0b080fd73dd736190526412555af6738"
export const lens = "0x594b96440fbdd8d01c52b47d938c10c0aac567c6"
const strategy = "0xffc7882f1bf5d0e5fab86bd9b701a7eaf5a8be59"
const booster = "0x79eedc4fda56e9ced9277ca50ab370f4eda024f7 "
const clerk = "0x70ef7eed160dcd6afeaebb73561db7bb71c3dcea"
const comptroller = "0xd05225ae7df7b4128af35f1f99d5c9e3832c18f8"

export const createTurboLens = (provider: JsonRpcProvider | Web3Provider) => new Contract(lens, JSON.stringify(TurboLensABI), provider)
export const createTurboMaster = (provider: JsonRpcProvider | Web3Provider) => new Contract(master, JSON.stringify(TurboMasterABI), provider.getSigner())
export const createTurboRouter = (signer: JsonRpcProvider | Web3Provider | Signer) => new Contract(router, JSON.stringify(TurboRouterABI), signer)

export const ITurboLens = new Interface(JSON.stringify(TurboLensABI))
export const ITurboMaster = new Interface(JSON.stringify(TurboMasterABI))
export const ITurboRouter = new Interface(JSON.stringify(TurboRouterABI))

