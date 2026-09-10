import { useEffect, useState } from 'react'

const ROTATION_INTERVAL_MS = 4200

function ProfilePhotoRotator({
  children,
  controlsLabel,
  imageLabel,
  images,
  pauseLabel,
  resumeLabel,
  selectLabel,
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hasFocus, setHasFocus] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isUserPaused, setIsUserPaused] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotionPreference = () => setPrefersReducedMotion(motionQuery.matches)

    updateMotionPreference()
    motionQuery.addEventListener('change', updateMotionPreference)

    return () => motionQuery.removeEventListener('change', updateMotionPreference)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion || hasFocus || isHovered || isUserPaused || images.length < 2) {
      return undefined
    }

    const rotationTimer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length)
    }, ROTATION_INTERVAL_MS)

    return () => window.clearInterval(rotationTimer)
  }, [hasFocus, images.length, isHovered, isUserPaused, prefersReducedMotion])

  if (images.length === 0) return null

  return (
    <div
      className="portrait-rotator"
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setHasFocus(false)
      }}
      onFocusCapture={() => setHasFocus(true)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="portrait-stage">
        <div className="portrait-visual" role="img" aria-label={imageLabel}>
          {images.map((image, index) => (
            <img
              key={image.id}
              className={
                'portrait-image' + (index === activeIndex ? ' portrait-image-active' : '')
              }
              src={image.src}
              alt=""
              aria-hidden="true"
              decoding="async"
              draggable="false"
              fetchPriority={index === 0 ? 'high' : 'auto'}
              loading={index === 0 ? 'eager' : 'lazy'}
              style={{ '--portrait-position': image.position }}
            />
          ))}
          <span className="portrait-scan-line" aria-hidden="true" />
        </div>
        {children}
      </div>

      {images.length > 1 && (
        <div className="portrait-controls" role="group" aria-label={controlsLabel}>
          <span className="portrait-counter" aria-hidden="true">
            {String(activeIndex).padStart(2, '0')} /{' '}
            {String(images.length - 1).padStart(2, '0')}
          </span>
          <span className="portrait-control-list">
            <button
              className="portrait-playback-control"
              type="button"
              aria-label={isUserPaused ? resumeLabel : pauseLabel}
              onClick={() => setIsUserPaused((isPaused) => !isPaused)}
            >
              <span aria-hidden="true">{isUserPaused ? '▶' : 'Ⅱ'}</span>
            </button>
            {images.map((image, index) => (
              <button
                key={image.id}
                className={
                  'portrait-control' + (index === activeIndex ? ' portrait-control-active' : '')
                }
                type="button"
                aria-label={selectLabel + ' ' + (index + 1)}
                aria-pressed={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </span>
        </div>
      )}
    </div>
  )
}

export default ProfilePhotoRotator
