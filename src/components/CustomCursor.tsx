'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const [isEnabled, setIsEnabled] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Enable only on devices with fine pointer (desktops/laptops)
    useEffect(() => {
        const evaluate = () => {
            const supportsFinePointer = window.matchMedia('(pointer: fine)').matches && window.matchMedia('(hover: hover)').matches;
            const isDesktopWidth = window.innerWidth >= 1024; // enable only on laptops/desktops
            setIsEnabled(supportsFinePointer && isDesktopWidth);
        };
        evaluate();

        const handleChange = () => evaluate();
        const handleResize = () => evaluate();

        // Listen for media query changes (rare but future-proof)
        const mq1 = window.matchMedia('(pointer: fine)');
        const mq2 = window.matchMedia('(hover: hover)');
        mq1.addEventListener?.('change', handleChange);
        mq2.addEventListener?.('change', handleChange);
        window.addEventListener('resize', handleResize);

        return () => {
            mq1.removeEventListener?.('change', handleChange);
            mq2.removeEventListener?.('change', handleChange);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (!isEnabled) return;

        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener('mousemove', updateMousePosition);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isHoverable = target.matches('button, a, [role="button"], input, textarea, select') ||
                target.closest('button, a, [role="button"], input, textarea, select');
            setIsHovering(!!isHoverable);
        };

        const handleMouseOut = () => setIsHovering(false);

        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, [isEnabled]);

    if (!isEnabled || !isVisible) return null;

    return (
        <>
            {/* Custom Cursor Container */}
            <div className="fixed top-0 left-0 pointer-events-none z-[9999]">
                {/* Main cursor container - positioned at mouse */}
                <div
                    className="absolute"
                    style={{
                        left: mousePosition.x,
                        top: mousePosition.y,
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    {/* Inner Circle */}
                    <motion.div
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                        animate={{
                            scale: isHovering ? 0.8 : 1,
                            opacity: isHovering ? 1 : 0.9,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 28,
                        }}
                    >
                        <div className="w-12 h-12 border border-[var(--primary-accent)] rounded-full" />
                    </motion.div>

                    {/* Center Dot */}
                    <motion.div
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                        animate={{
                            scale: isHovering ? 1.2 : 1,
                            opacity: isHovering ? 1 : 0.9,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 28,
                        }}
                    >
                        <div className="w-2.5 h-2.5 bg-[var(--secondary-accent)] rounded-full" />
                    </motion.div>

                    {/* Click indicator - appears on hover */}
                    {isHovering && (
                        <motion.div
                            className="absolute -translate-x-1/2 -translate-y-1/2"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 25,
                            }}
                        >
                            <div className="w-3 h-3 bg-[var(--secondary-accent)] rounded-full" />
                        </motion.div>
                    )}
                </div>
            </div>
        </>
    );
}
