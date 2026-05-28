import { useEffect, useRef } from 'react'

export default function CursorFollower() {
  const cursorRef = useRef(null)
  const cursorDotRef = useRef(null)
  const trailRefs = useRef([])
  const coords = useRef({ x: 0, y: 0 })
  const trailPositions = useRef([{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }])

  useEffect(() => {
    const handleMouseMove = (e) => {
      coords.current.x = e.clientX
      coords.current.y = e.clientY
    }

    const handleMouseEnter = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '1'
      if (cursorDotRef.current) cursorDotRef.current.style.opacity = '1'
      trailRefs.current.forEach((trail, i) => {
        if (trail) trail.style.opacity = `${0.2 - i * 0.04}`
      })
    }

    const handleMouseLeave = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '0'
      if (cursorDotRef.current) cursorDotRef.current.style.opacity = '0'
      trailRefs.current.forEach(trail => trail && (trail.style.opacity = '0'))
    }

    const getInteractiveElements = () => {
      return document.querySelectorAll('a, button, [role="button"], .magnetic-hover')
    }

    let cursorX = 0
    let cursorY = 0

    const animate = () => {
      const x = coords.current.x
      const y = coords.current.y

      // Smooth follow for outer circle
      cursorX += (x - cursorX) * 0.2
      cursorY += (y - cursorY) * 0.2

      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorX}px`
        cursorRef.current.style.top = `${cursorY}px`
      }

      // Dot follows exactly
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${x}px`
        cursorDotRef.current.style.top = `${y}px`
      }

      // Trail circles with staggered delay
      trailPositions.current.forEach((trail, i) => {
        trail.x += (i === 0 ? x : trailPositions.current[i - 1].x - trail.x) * (0.25 - i * 0.05)
        trail.y += (i === 0 ? y : trailPositions.current[i - 1].y - trail.y) * (0.25 - i * 0.05)
      })

      trailRefs.current.forEach((trail, i) => {
        if (trail && trailPositions.current[i]) {
          const pos = trailPositions.current[i]
          trail.style.left = `${pos.x}px`
          trail.style.top = `${pos.y}px`
        }
      })

      // Magnetic effect on interactive elements
      const elements = getInteractiveElements()
      elements.forEach(el => {
        const rect = el.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2))
        
        if (distance < 80) {
          const force = (80 - distance) / 80
          const angle = Math.atan2(y - centerY, x - centerX)
          const moveX = Math.cos(angle) * force * 20
          const moveY = Math.sin(angle) * force * 20
          el.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + force * 0.05})`
        } else {
          el.style.transform = ''
        }
      })

      requestAnimationFrame(animate)
    }

    const handleMouseDown = () => {
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = 'translate(-50%, -50%) scale(0.5)'
      }
      if (cursorRef.current) {
        cursorRef.current.style.transform = 'translate(-50%, -50%) scale(0.8)'
      }
    }

    const handleMouseUp = () => {
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = 'translate(-50%, -50%) scale(1)'
      }
      if (cursorRef.current) {
        cursorRef.current.style.transform = 'translate(-50%, -50%) scale(1)'
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <>
      {/* Trail Circles */}
      {[...Array(4)].map((_, i) => (
        <div
          key={`trail-${i}`}
          ref={el => trailRefs.current[i] = el}
          className="fixed rounded-full pointer-events-none z-40"
          style={{
            width: `${4 + i * 2}px`,
            height: `${4 + i * 2}px`,
            border: `1px solid ${i === 0 ? 'rgba(236, 72, 153, 0.4)' : 'rgba(6, 182, 212, 0.3)'}`,
            transform: 'translate(-50%, -50%)',
            opacity: 0,
          }}
        />
      ))}

      {/* Outer Circle */}
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 rounded-full pointer-events-none z-50"
        style={{
          border: '2px solid rgba(59, 130, 246, 0.5)',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.4), inset 0 0 15px rgba(59, 130, 246, 0.2)',
          opacity: 0,
        }}
      />

      {/* Inner Dot */}
      <div
        ref={cursorDotRef}
        className="fixed w-2 h-2 rounded-full pointer-events-none z-50 mix-blend-screen"
        style={{
          backgroundColor: '#0ea5e9',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 8px rgba(14, 165, 233, 0.8)',
          opacity: 0,
        }}
      />

      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
        a, button, [role="button"], .magnetic-hover {
          cursor: none !important;
        }
      `}</style>
    </>
  )
}