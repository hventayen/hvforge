
import { useState } from "react";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import { useGLTF, PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion-3d"
import model from './assets/harroldventayen-transformed.glb'
import model1 from './assets/viv.glb'

export function Harrold({isOpen,...props}) {
    const { nodes, materials } = useGLTF(model)
    const variants = {
      rotate: {rotateZ:(180 * Math.PI) / 180,
              x:0,
              y:0,
              z:0
              },
      closed: {rotateZ:(0 * Math.PI) / 180,
              x:0,
              y:0,
              z:0,
              }
    }
    return (
      <motion.group {...props} dispose={null}
                  position={[-0.03, 111.69, 2.84]}
                  rotation={[4.3, 0.05, 6.2]}
                  initial={"closed"}
                  animate={isOpen?"rotate":"closed"}
                  transition={{
                    delay:0,
                  duration:1
                }}
                variants={variants}
      >
        <mesh geometry={nodes.Node1.geometry} material={materials.x1} />
      </motion.group>
    )
  }

  export function Viv({isOpen,...props}) {
    const { nodes, materials } = useGLTF(model1)
    const variants = {
      rotate: {rotateZ:(180 * Math.PI) / 180,
              x:0,
              y:0,
              z:0
              },
      closed: {rotateZ:(0 * Math.PI) / 180,
              x:0,
              y:0,
              z:0,
              }
    }
    return (
      <motion.group {...props} dispose={null}
                  position={[-0.03, 111.69, 2.84]}
                  rotation={[4.3, 0.05, 6.2]}
                  initial={"closed"}
                  animate={isOpen?"rotate":"closed"}
                  transition={{
                    delay:0,
                  duration:1
                }}
                variants={variants}
      >
        <mesh geometry={nodes.Node1.geometry} material={materials.x1} />
      </motion.group>
    )
  }

export default function Home() {
    const [isOpen, setIsOpen] = useState(false)
    console.log(isOpen)
    return (
    <div className="container">
        <h1>Welcome!</h1>
        
    <header>
        <div class="header-container">
            
        <p1>My name is Harrold Ventayen, a graduate from California State University Fullerton with a bachelor's degree in Computer Science. I have experience in software development, web technologies, and mobile development, with a focus on using React.js to power my websites. I’ve contributed to a wide range of projects, from coding python programs to developing frontend solutions for businesses. My key strengths include leadership in technical education, process optimization, and utilizing emerging technologies to expand my knowledge to keep myself current in the industry.</p1>
        </div>
    </header>

    <section class="intro">
        <div class="intro-content">
            <div class="intro-text">
                <h2>About Me</h2>
                <p1>I invite anyone looking to discuss collaboration within their company, willing to nurture my passion for innovative thinking. As one who thrives from new thoughts and ideas, I plan to use my past experience to adapt my learning style in any situation I come across. Learning from peers just as much as they learn from me, and I use any opportunity to advance my knowledge further, keeping up with an industry that will revolutionize the future.</p1>
            </div>
            <div class="intro-image">
            <div className="preview">
        <Canvas>
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 50]} />
        <Harrold isOpen={isOpen}/>
        <directionalLight />
        <PerspectiveCamera makeDefault position={[-100, 400, 1000]}/>
        <OrbitControls />
      </Canvas>
        </div>
            </div>
        </div>
    </section>

    <section class="current-work">
        <h2>What I'm Working on Right Now</h2>
        <div class="work-content">
            
            <div class="text-content">

                <p>I'm currently learning to use three.js with my current skills in react. Some things to note about this:</p>
                <br/>
                <p>- 3D models created using a 3D Sense Scanner to make .glb files</p> 
                <br/>
                <p>- Orbit Controls allowed by dragging the model using drei API</p>
                <br/>
                <p>- Button animates models using 3D Framer Motion API.</p>
            </div>
      <div class="viv">
        <Canvas>
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 50]} />
        <Viv isOpen={isOpen}/>
        <directionalLight />
        <PerspectiveCamera makeDefault position={[-100, 400, 1000]}/>
        <OrbitControls />
      </Canvas>
      
      <div className="footer">
          <label className="switch">
            <input
              type="checkbox"
              checked={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
            <span className="slider"></span>
          </label>
        </div>
        </div>
        </div>
    </section>

    <section class="social-links">
        <h2>Connect with Me</h2>
        <div class="social-icons">
            <a href="https://www.linkedin.com/in/harroldventayen/"><img src="https://c0.klipartz.com/pngpicture/556/54/gratis-png-iconos-de-la-computadora-linkedin-linkedin.png" alt="LinkedIn"/></a>
            <a href="https://github.com/hventayen"><img src="https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png" alt="GitHub"/></a>
            <a href="mailto:harrold@la-tech.org"><img src="https://static.vecteezy.com/system/resources/previews/020/009/614/non_2x/email-and-mail-icon-black-free-png.png" alt="mailto"/></a>
        </div>
    </section>
    
    </div>
    )
}