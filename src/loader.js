import { useState, useEffect } from "react";
import {motion} from "framer-motion";
import {slideUp,opacity} from "./anim"
import './App.css'

export default function Preloader (){ 
    
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({width: 0, height:0});
    const words =  ["Hello","नमस्ते","Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"];

    useEffect(() => {
        if(index===words.length-1) return;
        setTimeout(() => {
            setIndex(index + 1);
        },index == 0 ? 1000: 150);
    }, [index]);

    useEffect( () => {

        setDimension({width: window.innerWidth, height: window.innerHeight})

    }, [])


    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`

    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`

    const curve = {

        initial: {

            d: initialPath,

            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}

        },

        exit: {

            d: targetPath,

            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3}

        }

    }

    return (
        <>
        <motion.div
        variants={slideUp}
        initial="initial"
        exit="exit"
         className=" h-screen bg-black text-white flex justify-center items-center preloader">
            <motion.div
            variants={opacity}
            initial="initial"
            animate="enter"
             className="text-4xl font-bold">
                {words[index]}
                
                </motion.div>
        </motion.div>
        </>
    );
}