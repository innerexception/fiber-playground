import * as React from 'react'
import { Canvas } from '@react-three/fiber'
import { useSelector } from 'react-redux'
import Box from './Box'
import { Vector3 } from 'three'
import { MapControls, OrthographicCamera } from '@react-three/drei'

export default () => {

    const tiles = useSelector((state:RState)=>state.region.tiles)
    let aspect = window.innerWidth / window.innerHeight
	let d = 10
    return (
        <Canvas>
            <OrthographicCamera 
                makeDefault 
                left={-d*aspect} 
                right={d*aspect}
                top={d}
                bottom={-d}
                near={1}
                far={2000}
                position={[20, 20, 20]} />
            <MapControls/>
            <ambientLight />
            <pointLight position={[0, 10, 10]} intensity={1.5} />
            {tiles.map((b,i)=><Box position={new Vector3(i*1.5, 0, 0)}/>)}
        </Canvas>
    )
}