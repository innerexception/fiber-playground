import * as React from 'react'
import { bgTile } from '../assets/Assets'
import Viewscreen from '../webgl/Viewscreen'

export default class ViewscreenFrame extends React.Component {
    render(){
        return (
            <div style={{position:'relative', display:'flex', justifyContent:'center', backgroundImage:'url('+bgTile+')', backgroundSize:'16px', borderRadius:'5px', margin:'1px', width:'100%', height:'100%'}}>
                <div style={{height:'100%', width:'100%', position:'relative'}}>
                    <Viewscreen/>
                </div>
            </div>
        )
    }
}