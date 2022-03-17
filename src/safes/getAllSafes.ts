import { createTurboLens, createTurboMaster } from "../utils"

export const getAllSafes = async (provider: any) => {
    let master = createTurboMaster(provider)
    console.log({master: master.callStatic})
    try {
        const result = await master.callStatic.getAllSafes({ gasLimit: 12000000 })
        return result
    } catch (err) {
        console.log(err)
    }
}


