import { motion } from "motion/react"

const MotionDiv = motion.div;
const MotionSvg = motion.svg;
const MotionCircle = motion.circle;

export const Photo = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <MotionDiv
                initial={{ opacity: 0 }}
                animate={{ 
                    opacity: 1,
                    transition: {delay: 1, duration: 0.4, ease: "easeIn"}
                 }}
            >
                <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute flex justify-center items-center">
                    <img
                        src="/projects/me.jpeg"
                        alt="Profile Picture"
                        className="rounded-full object-contain object-center w-[280px] h-[280px] xl:w-[480px] xl:h-[480px] mix-blend-lighten absolute"
                    />
                </div>           
                <MotionSvg
                    className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <MotionCircle 
                        cx="253" 
                        cy="253" 
                        r="250"
                        stroke="hsl(var(--primary))"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{strokeDasharray: "24 10 0 0"}}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </MotionSvg>
            </MotionDiv>
        </div>
    );
};
