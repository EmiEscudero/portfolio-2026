import { useEffect, useRef } from 'react'

const MIN_RAIL_WIDTH = 64
const FRAME_INTERVAL = 1000 / 30
const FONT_SIZE = 12
const ROW_GAP = 17
const STREAM_SPACING = 48
const MAX_STREAMS_PER_RAIL = 7
const MIN_FALL_SPEED = 78
const MAX_FALL_SPEED = 124
const MAX_PIXEL_RATIO = 1.5
const DESKTOP_QUERY = '(min-width: 1360px)'
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'
const FORCED_COLORS_QUERY = '(forced-colors: active)'
const WHITE = [255, 255, 255]
const ENTRY_TRANSITION_END = 0.32
const EXIT_TRANSITION_START = 0.7

const palettes = {
  light: {
    green: [20, 122, 61],
  },
  dark: {
    green: [57, 255, 114],
  },
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min)
}

function getNextWordIndex(currentIndex, wordCount) {
  if (wordCount <= 1) return 0
  return (currentIndex + 1 + Math.floor(Math.random() * (wordCount - 1))) % wordCount
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

function smoothstep(value) {
  return value * value * (3 - 2 * value)
}

function mixColor(from, to, amount) {
  const progress = smoothstep(clamp(amount, 0, 1))
  const channels = from.map((channel, index) => (
    Math.round(channel + (to[index] - channel) * progress)
  ))
  return 'rgb(' + channels.join(', ') + ')'
}

function getStreamAppearance(progress, green) {
  if (progress < ENTRY_TRANSITION_END) {
    const transition = progress / ENTRY_TRANSITION_END
    return {
      color: mixColor(WHITE, green, transition),
      opacity: 0.72 + transition * 0.28,
    }
  }

  if (progress <= EXIT_TRANSITION_START) {
    return {
      color: mixColor(green, green, 1),
      opacity: 1,
    }
  }

  const transition = (progress - EXIT_TRANSITION_START) / (1 - EXIT_TRANSITION_START)
  return {
    color: mixColor(green, WHITE, transition),
    opacity: 1 - smoothstep(clamp(transition, 0, 1)),
  }
}

function createStreams(width, height, words) {
  const streamCount = Math.max(
    1,
    Math.min(MAX_STREAMS_PER_RAIL, Math.floor(width / STREAM_SPACING)),
  )
  const longerWords = words.filter((word) => Array.from(word).length >= 5)
  const availableWords = longerWords.length ? longerWords : words

  return Array.from({ length: streamCount }, (_, index) => {
    const wordIndex = Math.floor(Math.random() * availableWords.length)
    const letters = Array.from(availableWords[wordIndex])
    const leadingLetterY = (
      ((index + 0.5) / streamCount) * height
      + randomBetween(-height * 0.1, height * 0.1)
    )

    return {
      x: ((index + 0.5) / streamCount) * width + randomBetween(-8, 8),
      y: leadingLetterY - (letters.length - 1) * ROW_GAP,
      speed: randomBetween(MIN_FALL_SPEED, MAX_FALL_SPEED),
      letters,
      wordIndex,
      words: availableWords,
    }
  })
}

function resetStream(stream) {
  stream.speed = randomBetween(MIN_FALL_SPEED, MAX_FALL_SPEED)
  stream.wordIndex = getNextWordIndex(stream.wordIndex, stream.words.length)
  stream.letters = Array.from(stream.words[stream.wordIndex])
  stream.y = -(stream.letters.length - 1) * ROW_GAP - randomBetween(0, ROW_GAP * 2)
}

function AmbientWordRain({ theme, words }) {
  const leftCanvasRef = useRef(null)
  const rightCanvasRef = useRef(null)

  useEffect(() => {
    const canvases = [leftCanvasRef.current, rightCanvasRef.current].filter(Boolean)
    const desktopMedia = window.matchMedia(DESKTOP_QUERY)
    const reducedMotionMedia = window.matchMedia(REDUCED_MOTION_QUERY)
    const forcedColorsMedia = window.matchMedia(FORCED_COLORS_QUERY)
    const palette = palettes[theme]
    let animationFrame = 0
    let resizeFrame = 0
    let previousTime = 0
    let elapsedSinceDraw = FRAME_INTERVAL
    let canvasStates = []

    const clearCanvases = () => {
      canvasStates.forEach(({ context, width, height }) => context.clearRect(0, 0, width, height))
    }

    const prepareCanvases = () => {
      canvasStates = canvases.flatMap((canvas) => {
        const { width, height } = canvas.getBoundingClientRect()

        if (width < MIN_RAIL_WIDTH || height <= 0) {
          canvas.width = 0
          canvas.height = 0
          return []
        }

        const pixelRatio = Math.min(window.devicePixelRatio || 1, MAX_PIXEL_RATIO)
        canvas.width = Math.round(width * pixelRatio)
        canvas.height = Math.round(height * pixelRatio)

        const context = canvas.getContext('2d')
        context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
        context.font = '650 ' + FONT_SIZE + 'px "Cascadia Code", Consolas, monospace'
        context.textAlign = 'center'
        context.textBaseline = 'middle'

        return [{
          canvas,
          context,
          height,
          streams: createStreams(width, height, words),
          width,
        }]
      })
    }

    const draw = (deltaSeconds = 0) => {
      canvasStates.forEach(({ context, height, streams, width }) => {
        context.clearRect(0, 0, width, height)

        streams.forEach((stream) => {
          stream.y += stream.speed * deltaSeconds
          const leadingLetterY = stream.y + (stream.letters.length - 1) * ROW_GAP
          const progress = clamp(leadingLetterY / height, 0, 1)
          const appearance = getStreamAppearance(progress, palette.green)

          stream.letters.forEach((letter, letterIndex) => {
            const y = stream.y + letterIndex * ROW_GAP
            if (y < -ROW_GAP || y > height + ROW_GAP) return

            context.fillStyle = appearance.color
            context.globalAlpha = appearance.opacity
            context.shadowBlur = 4
            context.shadowColor = appearance.color
            context.fillText(letter, stream.x, y)
          })

          if (leadingLetterY > height + ROW_GAP) {
            resetStream(stream)
          }
        })

        context.globalAlpha = 1
        context.shadowBlur = 0
      })
    }

    const shouldAnimate = () => (
      desktopMedia.matches
      && !reducedMotionMedia.matches
      && !forcedColorsMedia.matches
      && !document.hidden
    )

    const stopAnimation = () => {
      if (!animationFrame) return
      window.cancelAnimationFrame(animationFrame)
      animationFrame = 0
    }

    const tick = (time) => {
      if (!shouldAnimate()) {
        stopAnimation()
        return
      }

      const delta = previousTime ? Math.min(time - previousTime, 100) : 0
      previousTime = time
      elapsedSinceDraw += delta

      if (elapsedSinceDraw >= FRAME_INTERVAL) {
        const drawDelta = elapsedSinceDraw / 1000
        elapsedSinceDraw %= FRAME_INTERVAL
        draw(drawDelta)
      }

      animationFrame = window.requestAnimationFrame(tick)
    }

    const startAnimation = () => {
      if (animationFrame || !shouldAnimate() || canvasStates.length === 0) return
      previousTime = 0
      elapsedSinceDraw = 0
      animationFrame = window.requestAnimationFrame(tick)
    }

    const rebuild = () => {
      window.cancelAnimationFrame(resizeFrame)
      resizeFrame = window.requestAnimationFrame(() => {
        stopAnimation()
        prepareCanvases()

        if (shouldAnimate()) {
          draw()
          startAnimation()
        } else {
          clearCanvases()
        }
      })
    }

    const handlePreferenceChange = () => rebuild()
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAnimation()
      } else {
        startAnimation()
      }
    }

    rebuild()
    window.addEventListener('resize', rebuild)
    document.addEventListener('visibilitychange', handleVisibilityChange)
    desktopMedia.addEventListener('change', handlePreferenceChange)
    reducedMotionMedia.addEventListener('change', handlePreferenceChange)
    forcedColorsMedia.addEventListener('change', handlePreferenceChange)

    return () => {
      stopAnimation()
      window.cancelAnimationFrame(resizeFrame)
      window.removeEventListener('resize', rebuild)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      desktopMedia.removeEventListener('change', handlePreferenceChange)
      reducedMotionMedia.removeEventListener('change', handlePreferenceChange)
      forcedColorsMedia.removeEventListener('change', handlePreferenceChange)
      canvases.forEach((canvas) => {
        const context = canvas.getContext('2d')
        context?.clearRect(0, 0, canvas.width, canvas.height)
      })
    }
  }, [theme, words])

  return (
    <div className="matrix-rain" aria-hidden="true">
      <div className="matrix-rain-rail matrix-rain-rail-left">
        <canvas ref={leftCanvasRef} />
      </div>
      <div className="matrix-rain-rail matrix-rain-rail-right">
        <canvas ref={rightCanvasRef} />
      </div>
    </div>
  )
}

export default AmbientWordRain
