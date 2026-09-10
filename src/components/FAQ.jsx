import { useState } from 'react'
import useReveal from '../hooks/useReveal.js'
import './FAQ.css'

const FAQS = [
  {
    q: 'Is there a minimum guest count?',
    a: 'Boards & Platters have no minimum. Grazing Tables require a minimum of 15 guests, and Full Catering or the Mobile Cart require a minimum of 20 guests.',
  },
  {
    q: 'Do you deliver and set up, or is it self-serve?',
    a: "It depends on the format. Boards & Platters are delivered fully assembled — just unwrap and serve. Grazing Tables and Full Catering include on-site delivery and setup. The Mobile Cart comes staffed for the full duration you book.",
  },
  {
    q: 'Can you accommodate dietary restrictions?',
    a: 'Yes. Peanut-free and shellfish-free options are available on any menu, and we offer halal and kosher-friendly substitutions on request — just let us know when you inquire.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'We recommend booking as early as possible, especially for weekend dates. Your date is confirmed once your quote is approved and the deposit is received.',
  },
  {
    q: 'Do you offer bar or beverage service too?',
    a: 'Yes. We offer self-serve pre-batched drinks starting at $3.50/drink, and full staffed bar service through our partnership with North Spirit Distillery — one booking, one point of contact.',
  },
  {
    q: 'How does the deposit and booking process work?',
    a: "Select your service and menu, receive a personalized quote, approve it, and secure your date with a deposit. We'll send an agreement to sign, and you're all set.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const { ref, visible } = useReveal()

  return (
    <section className={`section reveal ${visible ? 'reveal--visible' : ''}`} id="faq" ref={ref}>
      <div className="faq__panel">
        <h2>Frequently Asked Questions</h2>
        <div className="faq__list">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div className="faq__item" key={item.q}>
                <button
                  className="faq__question"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="faq__icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                <div className={`faq__answer-wrap ${isOpen ? 'faq__answer-wrap--open' : ''}`}>
                  <p className="faq__answer" aria-hidden={!isOpen}>{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
