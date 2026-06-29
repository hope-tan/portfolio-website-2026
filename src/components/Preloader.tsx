import { motion, useAnimate } from "motion/react"
import { useEffect, useState } from "react";

export const Preloader = () => {
    const [scope, animate] = useAnimate();
    const [imageIndex, setImageIndex] = useState(0);

    const imageList = [
        "/projects/surprised-pikachu.jpg",
        "/projects/Hide_the_Pain_Harold.jpg",
        "/projects/surprised-pikachu.jpg",
        "/projects/Hide_the_Pain_Harold.jpg"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex(prev => (prev + 1) % imageList.length);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    async function animatePreloader() {
        await animate("#image", {
            opacity: 1
        }, {
            delay: 0.45,
            duration: 0.4,
            ease: "easeInOut",
        });
    }

    useEffect(() => {
        animatePreloader();
    }, []);

    const move = {
        hidden:(i:number[]) => ({
            y:"100%",
            x:i[0],
        }),
        moveUp:(i:number[]) =>({
            y:0,
            transition:{
                delay:i[1],
                duration:0.4,
                ease:"easeInOut",
            },
        }),
        moveRight:{
            x:"2px",
            transition:{
                delay:0.8,
                duration:0.4,
                ease:"easeInOut",
            },
        },
        moveLeft:{
            x:"2px",
            transition:{
                delay:0.8,
                duration:0.4,
                ease:"easeInOut",
            },
        },
    };

    const imgChange = {
        hidden: {
            opacity: 1,
            pointerEvents: "auto",
        },
        show: (i: number) => ({
            opacity: 0,
            pointerEvents: "none",
            transition: {
                delay: i,
                duration: 0.6,
                ease: "easeInOut",
            },
        }),
    };

    const containerUp = {
        hidden: {
            opacity: 1,
        },
        show: {
            opacity: 0,
            pointerEvents: "none",
            transition: {
                delay: 4,
                duration: 0.6,
                ease: "easeInOut",
            }
        }
    };

    return (
        <motion.div
            className="bg-[hsl(222_47%_4%)] h-screen w-screen absolute inset-0 overflow-hidden z-50"
            variants={containerUp}
            initial="hidden"
            animate="show"
            ref={scope}
        >
            <motion.section className="flex justify-center items-center h-full w-full">
                <div className="overflow-y-clip">
                    <motion.h1
                        className="text-[hsl(208_54%_80%)] font-bold text-[60px] font-mono"
                        variants={move}
                        initial="hidden"
                        animate={["moveUp", "moveRight"]}
                        custom={[-100, 0.1]}
                    >
                        HOPE
                    </motion.h1>
                </div>
                <motion.div
                    id="image"
                    className="w-[200px] h-[200px] relative overflow-hidden"
                >
                    <motion.img
                        key={imageList[imageIndex]}
                        src={imageList[imageIndex]}
                        alt="Preloader"
                        className="object-cover w-full h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                    />
                </motion.div>
                <div className="overflow-y-clip">
                    <motion.h1
                        className="text-[hsl(208_54%_80%)] font-bold text-[60px] font-mono"
                        variants={move}
                        initial="hidden"
                        animate={["moveUp", "moveLeft"]}
                        custom={[100, 0.1]}
                    >
                        TAN
                    </motion.h1>
                </div>
            </motion.section>
        </motion.div>
    );
};
