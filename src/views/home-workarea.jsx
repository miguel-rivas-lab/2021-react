import { useRef, Suspense } from "react";
import { useSelector } from 'react-redux';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(`3d/${props.name}.glb`);
  // const polygons = props.polygons.forEach(item => {
  //   console.log(item);
  //   return (
  //     <mesh
  //       geometry={nodes.polySurface.geometry}
  //       material={materials.lambert1}
  //       position={[0, 0, 1]}
  //       rotation={[Math.PI / 2, 0, 0]}
  //       scale={item.scale}
  //     />
  //   );
  // });
  return (
    <group ref={group} {...props} dispose={null}>
      {/* {polygons} */}
      {console.log(props.polygons[0].scale)}
      <mesh
        geometry={nodes.polySurface.geometry}
        material={materials.lambert1}
        position={[0, 0, 1]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={props.polygons[0].scale}
      />
    </group>
  );
};

function Scene({ states, currentModel }) {
  const scene = useRef();

  useFrame(() => {
    if (!states.pause) {
      scene.current.rotation.y += states.y * 0.01;
      scene.current.rotation.x += states.x * 0.01;
      scene.current.rotation.z += states.z * 0.01;
    }
  });
  return (
    <scene ref={scene} rotation={[Math.PI / 8, 0, 0]}>
      <OrbitControls />
      <ambientLight
        color="#404040"
        intensity={1}
      />
      <directionalLight
        color="#fff"
        intensity={2}
        castShadow
        position={[0, 1, 0]}
      />
      <pointLight
        color="#c4c4c4"
        intensity={1}
        position={[0, 300, 500]}
      />
      <pointLight
        color="#c4c4c4"
        intensity={1}
        position={[500, 100, 0]}
      />
      <pointLight
        color="#c4c4c4"
        intensity={1}
        position={[0, 100, -500]}
      />
      <pointLight
        color="#c4c4c4"
        intensity={1}
        position={[-540, 300, 0]}
      />
      <Suspense fallback={null}>
        <Model name={currentModel.name} polygons={currentModel.polygons} />
      </Suspense>
      <gridHelper args={[60, 25]} position={[0, 0, 0]} />
    </scene>
  );
};

function HomeWorkarea() {
  const { home } = useSelector((state) => state.home);
  const { users } = useSelector((state) => state.users);
  const { currentModel } = useSelector((state) => state.currentModel);
  return (
    <>
      <Canvas className="three-scene">
        <Scene states={home} currentModel={currentModel} />
      </Canvas>
      {
        home.cover && <>
          <div className="cover">
            {users &&
              <>
                <h1>
                  {users.middleName} {users.lastName}
                </h1>
                <h2>
                  {users.title}
                </h2>
              </>
            }
          </div>
        </>
      }

    </>
  );
};

export default HomeWorkarea;