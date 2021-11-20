import * as React from 'react'
import { Canvas } from '@react-three/fiber'
import { useSelector } from 'react-redux'
import Box from './Box'
import { Vector3 } from 'three'
import { MapControls, OrbitControls, PerspectiveCamera } from '@react-three/drei'

export default () => {

    const boxes = useSelector((state:RState)=>state.boxes)

    return (
        <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
            <MapControls/>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            {new Array(boxes).fill({}).map((b,i)=><Box position={new Vector3(i, i, i)}/>)}
        </Canvas>
    )
}