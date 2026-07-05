import { motion } from "framer-motion";
import { lazy, Suspense } from "react";

const Spline = lazy(() => import('@splinetool/react-spline'));

const HeroSection = () => {
    return (

       
        <section className="min-h-screen bg-gradient-to-b
   from-violet-900 to-gray-900 flex lg:flex-row
   flex-col-reverse items-center justify-center lg:justify-between lg:px-14
   px-6 relative overflow-hidden">


{/* left section */}
            <div className="z-40 lg:mb-0 mb-0 mt-32 lg:mt-0">
                <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        damping: 25,
                        stiffness: 40,
                        delay: 0.8,
                        duration: 1
                    }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl
        z-10 mb-6 font-bold text-center lg:text-left">
                    Building Fast <br /> Reliable Results
                </motion.h1>
                <motion.p 
                 initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        damping: 25,
                        stiffness: 40,
                        delay: 1.2,
                        duration: 1
                    }}
                className="text-lg sm:text-xl text-purple-200 max-w-2xl text-center lg:text-left">
                    I deliver robust, production-ready
                    websites and web apps with speed
                    and precision. Every project is
                    backed by
                    clean code, clear communication
                    and a commitment to getting it
                    done, on time, every time.
                </motion.p>
            </div>

            {/* right section */}
            <Suspense fallback={null}>
                <Spline 
                className="absolute xl:right-[-28%] md:right-[-10%] right-[-15%] top-[-4%] scale-50 md:scale-75"
                scene="https://prod.spline.design/T0Ps9izukyjBiS43/scene.splinecode" />
            </Suspense>

        </section>
    )
}

export default HeroSection
