import React, { useState } from 'react'

export default function Todoinput(props) {
    const [value, poxelValue] = useState("")

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <input type="text" value={value} onChange={(e) => { poxelValue(e.target.value) }} />
            <button onClick={() => { props.onHendlChenge(value) }}>Add</button>
            <button onClick={() => { props.onClearChecet() }}>chect clear</button>
        </div>
    )
}
