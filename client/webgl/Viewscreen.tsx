import * as React from 'react'
import { Canvas } from '@react-three/fiber'
import { useSelector } from 'react-redux'
import Box from './Box'
import { Vector3 } from 'three'
import { MapControls, PerspectiveCamera } from '@react-three/drei'

export default () => {

    const tiles = useSelector((state:RState)=>state.region.tiles)

    return (
        <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
            <MapControls/>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            {tiles.map((b,i)=><Box position={new Vector3(i, i, i)}/>)}
        </Canvas>
    )
}