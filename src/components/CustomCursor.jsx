import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
const CustomCursor = () => {

    // creating ref for cursor 
    const cursorRef = useRef(null);
    const cursorBorderRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false)


    // creating gsap animation for cursor

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)")
        const handleMediaChange = () => setIsMobile(mediaQuery.matches)

        handleMediaChange()
        mediaQuery.addEventListener("change", handleMediaChange)

        return () => {
            mediaQuery.removeEventListener("change", handleMediaChange)
        }
    }, [])

    useEffect(() => {
        if (isMobile) {
            return
        }

        const cursor = cursorRef.current;
        const cursorBorder = cursorBorderRef.current

        if (!cursor || !cursorBorder) {
            return
        }

        gsap.set([cursor, cursorBorder], {
            xPercent: -50,
            yPercent: -50,
        })

        // Variables for cursor position with different speeds
        const xTo = gsap.quickTo(cursor, "x", {
            duration: 0.1, ease: "power3.out" })
        const yTo = gsap.quickTo(cursor, "y", {
            duration: 0.1, ease: "power3.out" })
        const xToBorder = gsap.quickTo(cursorBorder,
            "x", { duration: 0.2, ease: "power3.out" })
        const yToBorder = gsap.quickTo(cursorBorder,
            "y", { duration: 0.2, ease: "power3.out" })
        const handleMouseMove = (e) => {
            xTo(e.clientX)
            yTo(e.clientY)
            xToBorder(e.clientX)
            yToBorder(e.clientY)

        }
        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
   
    }, [isMobile])

    if (isMobile) {
        return null
    }

   

    return (

        <>
        <div ref={cursorRef} className='fixed top-0 left-0 w-[18px] h-[18px]
        rounded-full bg-white pointer-events-none z-[999]
        mix-blend-difference '>

        </div>

        <div ref={cursorBorderRef} className='fixed top-0 left-0 w-[36px] h-[36px]
       border rounded-full  border-white pointer-events-none z-[999]
        mix-blend-difference opacity-50'>

        </div>

        </>
    )
}

export default CustomCursor
