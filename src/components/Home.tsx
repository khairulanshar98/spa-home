import React, { useEffect } from 'react'
// @ts-ignore
import { Hooks, Reducers } from "@khairul/api"
import Table from "./Table"
import { getStarlink } from '../services/starlink'

export default function Home(props) {
    const hooks = Hooks.useHooks()
    const dispatch = hooks.getDispatch()
    const [localStore, setLocalStore] = React.useState({ data: [] })

    React.useEffect(() => {
        hooks.subscribe(
            props.name,
            () => {
                const store = hooks.getStore()
                setLocalStore(store)
            })
        return () => {
            console.log('unSubscribe')
            // Clean up the subscription
            hooks.unSubscribe(props.name)
        };
    }, [])

    const updateData = function (i) {
        const temp = [...localStore.data]
        temp[i].time = new Date().getTime()
        dispatch({ type: Reducers.ActionType.SET_DATA, data: temp })
        getStarlink(temp[i].id)
    }

    /*
    useEffect(() => {
        console.log('Home store', localStore)
    }, [localStore])
    */

    return (
        <>
            {
                localStore && localStore.data && localStore.data.length &&
                localStore.data.sort((a: any, b: any) => { return new Date(a.spaceTrack.LAUNCH_DATE).getTime() - new Date(b.spaceTrack.LAUNCH_DATE).getTime() })
                    .map(function (item, i) {
                        return (
                            <Table key={'divspaceTrack' + i} item={item} i={i} updateData={updateData} />
                        )
                    })
            }
        </>
    );
}
