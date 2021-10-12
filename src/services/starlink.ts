// @ts-ignore
import { Services, Hooks, Reducers } from "@khairul/api"

export const getStarlink = (id) => {
    const hooks = Hooks.useHooks()
    Services.get(`https://api.spacexdata.com/v4/starlink/${id}`)
        .then((res) => {
            console.log(res)
            //hooks.getDispatch()({ type: Reducers.ActionType.SET_DATA, data: res.data })
        })
}