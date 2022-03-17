import { BigNumber } from "ethers"
import { callInterfaceWithMulticall, encodeCall } from "../utils/multicall"
import { createTurboLens, ITurboLens, lens } from "../utils"


type SafeInfo = {
    collateralAsset: string;
    collateralAmount: BigNumber;
    collateralValue: BigNumber;
    debtAmount: BigNumber;
    debtValue: BigNumber;
    boostedAmount: BigNumber;
    feiAmount: BigNumber;
    tribeDAOFee: BigNumber;
}

export const getSafeInfo = async (provider: any, safe: string) => {
    let lens = createTurboLens(provider)
    try {
        const result: SafeInfo = await lens.getSafeInfo(safe, { gasLimit: 12000000 })
        return result
    } catch (err) {
        console.log(err)
    }
}

export const getSafesInfo = async (provider: any, safes: string[]) => {

    let encodedCalls = safes.map(safe => {
        encodeCall(ITurboLens, lens, "getSafeInfo", [safe])
    })

    console.log({ ITurboLens })

    try {
        const safeInfos = await callInterfaceWithMulticall(provider, ITurboLens, lens, ["getSafeInfo"], [safes])
        console.log({ safeInfos })
        return safeInfos
    } catch (err) {
        console.log(err)
    }

    // try {
    //     const result: SafeInfo = await lens.getSafeInfo(safe, { gasLimit: 12000000 })
    //     return result
    // } catch (err) {
    //     console.log(err)
    // }
}
