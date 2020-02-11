import React from 'react'
import Tds from './Tds'

export default function Frag() {
    return (
        <div>
        Some text.
        <h2>A heading</h2>
        More text.
        <table>
            <tr>tr1
                <Tds/> 
            </tr>
            <tr>tr2</tr>
        </table>
        <h2>Another heading</h2>
        Even more text.
        </div>
    )
}
