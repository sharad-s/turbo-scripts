import { createTurboLens } from "../utils"

export const getAllUserSafes = async (provider: any, user: string) => {
    let lens = createTurboLens(provider)
    console.log({ lens: lens.callStatic, user })
    try {
        const result = await lens.callStatic.getAllUserSafes(user)
        console.log({ result })
        return result
    } catch (err) {
        console.log(err)
    }
}


