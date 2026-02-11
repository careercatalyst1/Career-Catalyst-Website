import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function CareerSymbol({ type, position }: { type: 'briefcase' | 'graduation' | 'chart' | 'target' | 'lightbulb'; position: [number, number, number] }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.01;
        }
    });

    const geometry = () => {
        switch (type) {
            case 'briefcase':
                return <boxGeometry args={[1.2, 0.8, 0.4]} />;
            case 'graduation':
                return <coneGeometry args={[0.6, 1, 6]} />;
            case 'chart':
                return <boxGeometry args={[1, 1, 0.2]} />;
            case 'target':
                return <torusGeometry args={[0.5, 0.15, 16, 32]} />;
            case 'lightbulb':
                return <sphereGeometry args={[0.4, 32, 32]} />;
            default:
                return <boxGeometry args={[1, 1, 1]} />;
        }
    };

    return (
        <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
            <mesh ref={meshRef} position={position}>
                {geometry()}
                <meshStandardMaterial
                    color={type === 'briefcase' ? '#1e3a5f' : type === 'graduation' ? '#0ea5e9' : type === 'chart' ? '#22d3ee' : type === 'target' ? '#f97316' : '#eab308'}
                    metalness={0.9}
                    roughness={0.5}
                    opacity={0.6}
                    transparent
                />
            </mesh>
        </Float>
    );
}

export default function Scene3D() {
    return (
        <>
            <ambientLight intensity={0.15} />
            <directionalLight position={[10, 10, 5]} intensity={0.3} />
            <pointLight position={[-10, -10, -5]} intensity={0.2} color="#0ea5e9" />

            <CareerSymbol type="briefcase" position={[-3, 2, -2]} />
            <CareerSymbol type="graduation" position={[3, 1, -3]} />
            <CareerSymbol type="chart" position={[-2, -1, -1]} />
            <CareerSymbol type="target" position={[2, -2, -2]} />
            <CareerSymbol type="lightbulb" position={[0, 3, -4]} />

            <Sparkles count={60} scale={10} size={1.2} speed={0.3} color="#0ea5e9" opacity={0.4} />

            {/* Manual fill light instead of Environment preset for offline compatibility */}
            <hemisphereLight args={['#0ea5e9', '#1e293b', 0.15]} />
        </>
    );
}
