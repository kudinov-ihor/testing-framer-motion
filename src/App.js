import "./App.css";
import { blogList } from "./blog-list.js";
import { motion, Variants } from "framer-motion";

/* Variant for motion animation */


const imageAnimate = {
  offscreen:{x:-100, opacity: 0},
  onscreen:{
    x:0, 
    opacity: 1,
    rotate: [0, 10, 0],
    transition: {
      type: 'spring',
      bounce: 0.3,
      duration: 1
    }
  }
}


const textAnimate = {
  offscreen:{y:100, opacity: 0},
  onscreen:{
    y:0,
    opacity: 1, 
    transition: {
      type: 'spring',
      bounce: 0.3,
      duration: 3
    }
  }
}

function Card({ image, h2, p,id }) {
  return (
    <motion.div 
      className="card" 
      id={id}
      initial={"offscreen"}
      whileInView={"onscreen"} /*WhileInView дає можливість відтворювати анімацію при скролі */
      viewport={{once: true, amount: 0.5}} /* Додаємо повторення до анімації */
      transition={{staggerChildren:0.5}} /* Додаємо значення staggerChildren до батьківського блоку для почергової анімації */
    >
      <motion.div
        variants={imageAnimate}
        className="image-container"
      >
        {image}
      </motion.div>
      <motion.h2
        variants={textAnimate}
      >
        {h2}
      </motion.h2>
      <motion.p

        variants={textAnimate}        
      >
        {p}
      </motion.p>
    </motion.div>
  );
}

export default function App() {
  return blogList.map((item, index) => (
      <div className="card-wrapper" key={index}>
          <Card image={item.image} h2={item.h2} p={item.p}  />
      </div>
  ));
}