import React, { useEffect } from 'react'

function Table({ item, i, updateData }) {
    useEffect(function () {
        console.log('item.time', item.spaceTrack.OBJECT_ID, item.time)
    }, [item.time, item.spaceTrack.OBJECT_ID])

    return (
        <div onClick={() => updateData(i)}>
            <span style={{ padding: '10px' }}>{item.time ? item.time : 'Empty'}</span>
            <span style={{ padding: '10px' }}>{item.spaceTrack.LAUNCH_DATE}</span>
            <span style={{ padding: '10px' }}>{item.spaceTrack.OBJECT_ID}</span>
            <span style={{ padding: '10px' }}>{item.spaceTrack.OBJECT_NAME}</span>
        </div>
    )
}

export default Table