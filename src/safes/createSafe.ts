import { createTurboRouter } from "../utils"

export const createSafe = async (provider: any, token: string) => {
    let router = createTurboRouter(provider)
    console.log({router})
    try {
        const result = await router.createSafe(token, { gasLimit: 12000000})
        return result
    } catch (err) {
        console.log(err)
    }
}
