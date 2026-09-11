import useReveal from '../hooks/useReveal.js'
import './HowItWorks.css'

const STEPS = [
  {
    number: '01',
    title: 'Select Your Service & Menu',
    description: 'Choose your format — boards, grazing table, full catering or the mobile cart — and pick your menu, or ask us to build one for you.',
  },
  {
    number: '02',
    title: 'Receive a Personalized Quote',
    description: "We'll prepare a detailed quote and, on request, a printed menu card tailored to your event.",
  },
  {
    number: '03',
    title: 'Confirm with a Deposit',
    description: 'Approve your quote and secure your date with a deposit — your booking is confirmed once it is received.',
  },
  {
    number: '04',
    title: 'Enjoy Your Event, Stress-Free',
    description: 'We deliver, style and (depending on your package) serve and clean up — you just enjoy the day.',
  },
]

export default function HowItWorks({ onRequestQuote }) {
  const { ref, visible } = useReveal()

  return (
    <section
      className={`section reveal ${visible ? 'reveal--visible' : ''}`}
      id="how-it-works"
      ref={ref}
    >
      <div className="how-it-works__panel">
        <h2>From Your Brief to a Beautifully Served Event</h2>
        <p className="how-it-works__intro">
          Every MIASO event runs on the same process, from your first message to the
          last tray cleared — no guesswork, no surprises on the day:
        </p>

        <div className="how-it-works__steps">
          {STEPS.map((step, i) => (
            <div className="how-it-works__step" key={step.title}>
              <span className="how-it-works__number">{step.number}</span>
              <div className="how-it-works__copy">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="btn how-it-works__cta" type="button" onClick={onRequestQuote}>
          Request a Quote
        </button>
      </div>
    </section>
  )
}
