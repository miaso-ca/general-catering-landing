import './Hero.css'
import heroPhoto from '../assets/photos/hero-table.jpg'
import useReveal from '../hooks/useReveal.js'

// ponytail: client's real video is still being edited (Olya, 2026-09-15) -
// hide the watch button on both sites until it's ready. Flip to true then.
const VIDEO_READY = false

export default function Hero({ onWatchVideo, onRequestQuote }) {
  // Above-the-fold: reveal on mount rather than waiting for scroll, staggered
  // so the eyebrow settles first, then the headline, then the card — a small
  // choreography instead of one flat fade.
  const eyebrow = useReveal({ immediate: true, delay: 100 })
  const headline = useReveal({ immediate: true, delay: 280 })
  const card = useReveal({ immediate: true, delay: 520 })

  return (
    <section className="hero" id="top">
      <div className="hero__frame">
        <div className="hero__photo">
          <img
            src={heroPhoto}
            alt="MIASO catering spread, styled table"
            className="hero__photo-img"
          />
          <div className="hero__gradient" />
          <div className="hero__photo-content">
            <div className="hero__text-group">
              <span
                className={`pill pill--on-photo reveal reveal--fast ${
                  eyebrow.visible ? 'reveal--visible' : ''
                }`}
                ref={eyebrow.ref}
              >
                Catering in Toronto &amp;&nbsp;GTA
              </span>
              <h1
                className={`hero__title reveal reveal--rise ${
                  headline.visible ? 'reveal--visible' : ''
                }`}
                ref={headline.ref}
              >
                Beautiful Hosting, Made&nbsp;Effortless
              </h1>
            </div>

            <div
              className={`hero__card reveal ${card.visible ? 'reveal--visible' : ''}`}
              ref={card.ref}
            >
              <p className="hero__desc">
                From grazing tables and charcuterie boards to full-service catering, MIASO
                brings fresh, beautifully styled food to your celebration — weddings,
                showers, birthdays and every gathering in between across Toronto and
                the GTA.
              </p>
              <div className="hero__actions">
                <button className="btn" type="button" onClick={onRequestQuote}>
                  Request a&nbsp;Quote
                </button>
                {VIDEO_READY && (
                  <button className="hero__watch" onClick={onWatchVideo} type="button">
                    <span className="hero__play">▶</span>
                    Watch 45&nbsp;sec
                  </button>
                )}
              </div>
              <div className="hero__trust">
                Made fresh to order · Flexible dietary options · Halal &amp; kosher-friendly
                substitutions available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
