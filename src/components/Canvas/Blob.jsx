import {useFrame} from '@react-three/fiber';
import React, {useMemo, useRef} from 'react';
import {MathUtils} from 'three';
import fragmentShader from './Shaders/fragmentShader';
import vertexShader from './Shaders/vertexShader';
const Blob = () => {
	const mesh = useRef();
	const hover = useRef(false);
	const uniforms = useMemo(() => {
		return {
			u_time: {value: 0},
			u_intensity: {value: 0.2},
		};
	});

	useFrame((state) => {
		const {clock} = state;
		if (mesh.current) {
			mesh.current.material.uniforms.u_time.value = 0.2 * clock.getElapsedTime();

			mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
				mesh.current.material.uniforms.u_intensity.value,
				hover.current ? 0.9 : 0.15,
				0.02
			);
		}
	});

	return (
		<mesh
			ref={mesh}
			scale={0.4}
			onPointerOver={() => (hover.current = true)}
			onPointerOut={() => (hover.current = false)}
			position={[0, 0, 0]}
		>
			<icosahedronGeometry attach="geometry" args={[1, 16, 20]} />
			<shaderMaterial
				vertexShader={vertexShader}
				fragmentShader={fragmentShader}
				uniforms={uniforms}
			/>
		</mesh>
	);
};

export default Blob;
