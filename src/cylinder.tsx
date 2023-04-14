// import { Cylinder } from './types' // <= breaks
import type { Cylinder } from './types' // <= works

const Cylinder = ({ position }: { position?: [number, number, number] }) => {
  return (
    <mesh castShadow receiveShadow position={position}>
      <cylinderGeometry args={[1, 1, 2, 10, 1]} />
      <meshStandardMaterial color="#eac7c7" />
    </mesh>
  )
}

export default Cylinder
