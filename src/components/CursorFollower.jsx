import { useEffect, useState, useCallback } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'

function Ripple({ x, y }) {
  return (
    <motion.div
      className="fixed rounded-full pointer-events-none z-[9999]"
      style={{
        left: x,
        top: y,
        width: 4,
        height: 4,
        translateX: '-50%',
        translateY: '-50%',
        border: '1.5px solid rgba(6, 182, 212, 0.8)',
      }}
      initial={{ width: 4, height: 4, opacity: 1 }}
      animate={{ width: 50, height: 50, opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    />
  )
}

export default function CursorFollower() {
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [ripples, setRipples] = useState([])

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const ringX = useSpring(cursorX, { damping: 18, stiffness: 300, mass: 0.4 })
  const ringY = useSpring(cursorY, { damping: 18, stiffness: 300, mass: 0.4 })

  const orbitX = useSpring(cursorX, { damping: 40, stiffness: 120, mass: 0.8 })
  const orbitY = useSpring(cursorY, { damping: 40, stiffness: 120, mass: 0.8 })

  const particleX = useSpring(cursorX, { damping: 50, stiffness: 80, mass: 1.2 })
  const particleY = useSpring(cursorY, { damping: 50, stiffness: 80, mass: 1.2 })

  const addRipple = useCallback((x, y) => {
    const id = Date.now() + Math.random()
    setRipples((prev) => [...prev, { id, x, y }])
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id))
    }, 800)
  }, [])

  useEffect(() => {
    if ('ontouchstart' in window) return

    const move = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const over = (e) => {
      const el = e.target
      if (
        el.tagName === 'A' ||
        el.tagName === 'BUTTON' ||
        el.tagName === 'INPUT' ||
        el.tagName === 'TEXTAREA' ||
        el.tagName === 'SELECT' ||
        el.closest('a') ||
        el.closest('button') ||
        el.getAttribute('role') === 'button' ||
        el.classList.contains('magnetic-hover')
      ) {
        setIsPointer(true)
      }
    }

    const out = (e) => {
      const el = e.target
      if (
        el.tagName === 'A' ||
        el.tagName === 'BUTTON' ||
        el.tagName === 'INPUT' ||
        el.tagName === 'TEXTAREA' ||
        el.tagName === 'SELECT' ||
        el.closest('a') ||
        el.closest('button') ||
        el.getAttribute('role') === 'button' ||
        el.classList.contains('magnetic-hover')
      ) {
        setIsPointer(false)
      }
    }

    const leave = () => setIsVisible(false)
    const enter = () => setIsVisible(true)

    const click = (e) => {
      addRipple(e.clientX, e.clientY)
    }

    window.addEventListener('mousemove', move, { passive: true })
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    document.addEventListener('mouseleave', leave)
    document.addEventListener('mouseenter', enter)
    window.addEventListener('click', click)

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
      document.removeEventListener('mouseleave', leave)
      document.removeEventListener('mouseenter', enter)
      window.removeEventListener('click', click)
    }
  }, [addRipple])

  return (
    <>
      {/* Ripples on click */}
      <AnimatePresence>
        {ripples.map((r) => (
          <Ripple key={r.id} x={r.x} y={r.y} />
        ))}
      </AnimatePresence>

      {/* Trailing particle */}
      <motion.div
        className="fixed rounded-full pointer-events-none z-[9996]"
        style={{
          width: 3,
          height: 3,
          x: particleX,
          y: particleY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 0.7 : 0,
          boxShadow: '0 0 6px rgba(6, 182, 212, 0.5), 0 0 12px rgba(6, 182, 212, 0.25)',
          backgroundColor: '#22d3ee',
        }}
      />

      {/* Orbiting dot */}
      <motion.div
        className="fixed rounded-full pointer-events-none z-[9997]"
        style={{ x: orbitX, y: orbitY, translateX: '-50%', translateY: '-50%' }}
        animate={{ opacity: isVisible ? 0.9 : 0 }}
      >
        <motion.div
          style={{ width: 5, height: 5 }}
          animate={{
            rotate: [0, 360],
            x: [0, 8, 0, -8, 0],
            y: [0, -8, 0, 8, 0],
          }}
          transition={{
            rotate: { repeat: Infinity, duration: 3, ease: 'linear' },
            x: { repeat: Infinity, duration: 3, ease: 'easeInOut' },
            y: { repeat: Infinity, duration: 3, ease: 'easeInOut' },
          }}
        >
          <div
            className="rounded-full"
            style={{
              width: 5,
              height: 5,
              backgroundColor: '#f472b6',
              boxShadow: '0 0 8px rgba(244, 114, 182, 0.6)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed pointer-events-none z-[9998] mix-blend-screen"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.15 }}
      >
        <motion.div
          className="rounded-full border-2 border-solid"
          style={{
            width: isPointer ? 56 : 36,
            height: isPointer ? 56 : 36,
            borderRadius: '50%',
            borderColor: 'rgba(6, 182, 212, 0.45)',
            boxShadow:
              '0 0 12px rgba(6, 182, 212, 0.2), inset 0 0 12px rgba(6, 182, 212, 0.08)',
          }}
          animate={{
            width: isPointer ? 56 : 36,
            height: isPointer ? 56 : 36,
            borderColor: isPointer
              ? 'rgba(244, 114, 182, 0.7)'
              : 'rgba(6, 182, 212, 0.45)',
            boxShadow: isPointer
              ? '0 0 20px rgba(244, 114, 182, 0.3), inset 0 0 20px rgba(244, 114, 182, 0.1)'
              : '0 0 12px rgba(6, 182, 212, 0.2), inset 0 0 12px rgba(6, 182, 212, 0.08)',
            rotate: [0, 360],
          }}
          transition={{
            width: { type: 'spring', stiffness: 300, damping: 20 },
            height: { type: 'spring', stiffness: 300, damping: 20 },
            borderColor: { duration: 0.2 },
            boxShadow: { duration: 0.2 },
            rotate: { repeat: Infinity, duration: 6, ease: 'linear' },
          }}
        >
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 5,
              height: 5,
              top: '50%',
              left: '50%',
              translateX: '-50%',
              translateY: '-50%',
              backgroundColor: '#22d3ee',
              boxShadow: '0 0 6px rgba(34, 211, 238, 0.7)',
            }}
            animate={{
              scale: [1, 1.6, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>

      {/* Core dot */}
      <motion.div
        className="fixed rounded-full pointer-events-none z-[9999]"
        style={{
          width: 4,
          height: 4,
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: '#ffffff',
          boxShadow: isVisible
            ? '0 0 10px rgba(255, 255, 255, 0.9), 0 0 25px rgba(6, 182, 212, 0.6), 0 0 40px rgba(6, 182, 212, 0.3)'
            : 'none',
        }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0 }}
      />

      <style>{`
        @media (pointer: fine) {
          *, a, button, [role="button"], .magnetic-hover {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  )
}