import { motion } from "framer-motion";

export default function Animate ({delay,children}){
    return(
        <motion.div
         initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" ,delay:delay}}
        viewport={{ once: true }}
      >

{children}

        </motion.div>
    )
}

export function AnimateAbout({delay,children,direction}){
    return(
        <motion.div
         initial={{ opacity: 0,y:20, x: direction }}
        whileInView={{ opacity: 1,y:0, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" ,delay:delay}}
        viewport={{ once: true }}
      >

{children}

        </motion.div>
    )
}

export function AnimateSkillBar({delay,children}){
    return(
        <motion.div
         initial={{ opacity:0  }}
        whileInView={{ opacity:1 }}
        transition={{ duration: 1, ease: "easeOut" ,delay:delay}}
        viewport={{ once: true }}
      >

{children}

        </motion.div>
    )
}

export function AnimateContact({delay,children}){
    return(
        <motion.div
         initial={{ opacity:0,x:-20  }}
        whileInView={{ opacity:1,x:0 }}
        transition={{ duration: 1, ease: "easeOut" ,delay:delay}}
        viewport={{ once: true }}
      >

{children}

        </motion.div>
    )
}