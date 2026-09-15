import './CateringOptions.css'
import QuickCaptureForm from './QuickCaptureForm.jsx'
import useReveal from '../hooks/useReveal.js'
import boardsPhoto from '../assets/photos/catering-cups-lineup.jpg'
import grazingPhoto from '../assets/photos/catering-platter-spread.jpg'
import fullCateringPhoto from '../assets/photos/catering-fullservice-tablewide.jpg'
import cartPhoto from '../assets/photos/catering-cart-wide.jpg'

// ponytail: 4 single-span cards + the full-width bar banner = 2 even rows
// then the banner alone in row 3 - no stranded card, so no `wide` needed
// here (unlike corporate's 5-card version this was forked from).
const OPTIONS = [
  {
    title: 'Boards, Cups & Platters',
    description:
      'Delivered fully assembled, no setup needed — perfect for drop-off gifting, small gatherings and grab-and-go serving.',
    bestFor: 'gifting, small gatherings, drop-off orders',
    price: 'From $16.25/guest',
    photo: boardsPhoto,
    photoPosition: '50% 50%',
    alt: 'MIASO charcuterie cups and boards, individually portioned and ready to serve',
  },
  {
    title: 'Grazing Tables',
    description:
      'An artfully styled, self-serve spread built directly on your table — the visual centrepiece of any celebration.',
    bestFor: 'showers, brunches, home parties',
    price: 'From $38/guest',
    photo: grazingPhoto,
    photoPosition: '50% 50%',
    alt: 'A beautifully styled MIASO grazing table spread',
  },
  {
    title: 'Full Catering',
    description:
      'A structured, plated menu across salads, sandwiches, hot bites and dessert — with delivery, setup and cleanup included.',
    bestFor: 'weddings, private dinners, formal events',
    price: 'From $60/guest',
    photo: fullCateringPhoto,
    photoPosition: '50% 50%',
    alt: 'MIASO full-service catering table set for a formal event',
  },
  {
    title: 'Mobile Charcuterie Cart',
    description:
      'An interactive, staffed food station — charcuterie, salad or sandwich bar — that becomes the highlight of your event.',
    bestFor: 'showers, weddings, large celebrations',
    price: 'From $350 + $22/guest',
    photo: cartPhoto,
    photoPosition: '50% 52%',
    alt: 'MIASO mobile catering cart, staffed and styled at an outdoor event',
  },
]

function BarCard({ delay }) {
  const { ref, visible } = useReveal({ delay })
  return (
    <div className={`catering-options__bar-card reveal ${visible ? 'reveal--visible' : ''}`} ref={ref}>
      <span className="pill pill--on-photo">Need Bar Service&nbsp;Too?</span>
      <p>
        We&rsquo;ve partnered with North Spirit Distillery for years to offer full bar
        service — bartenders, mixers and glassware — alongside MIASO catering. One
        booking, one point of contact — no juggling two vendors. Just mention it in
        the quote form below.
      </p>
    </div>
  )
}

function CateringCard({ option, delay }) {
  const { ref, visible } = useReveal({ delay })
  return (
    <div
      className={`catering-card ${option.wide ? 'catering-card--wide' : ''} reveal ${visible ? 'reveal--visible' : ''}`}
      ref={ref}
    >
      <div className="catering-card__photo">
        <img
          src={option.photo}
          alt={option.alt}
          loading="lazy"
          style={option.photoPosition ? { objectPosition: option.photoPosition } : undefined}
        />
      </div>
      <div className="catering-card__body">
        <h3 className="catering-card__title">{option.title}</h3>
        <p className="catering-card__desc">{option.description}</p>
        {option.price && <p className="catering-card__price">{option.price}</p>}
        <span className="pill pill--on-light catering-card__best-for">Best for: {option.bestFor}</span>
      </div>
    </div>
  )
}

export default function CateringOptions() {
  const { ref, visible } = useReveal()
  return (
    <section
      className={`section reveal ${visible ? 'reveal--visible' : ''}`}
      id="catering-options"
      ref={ref}
    >
      <h2>Every Way to Host, Beautifully Catered</h2>
      <p className="catering-options__intro">
        Whether you are planning a wedding, a baby shower, a brunch or a big
        celebration at home, MIASO can tailor the menu, presentation and level
        of service to your event.
      </p>

      <div className="catering-options__grid">
        {OPTIONS.map((option, i) => (
          <CateringCard option={option} delay={i * 80} key={option.title} />
        ))}
        <BarCard delay={OPTIONS.length * 80} />
      </div>

      <div className="catering-options__quote">
        <h3>Let&rsquo;s Get You a Quote</h3>
        <p className="catering-options__quote-intro">
          Share your details and we&rsquo;ll follow up within 1 business day. Have your guest
          count, budget or venue ready? <a href="#quote">Use the full quote form</a> instead.
        </p>
        <QuickCaptureForm source="block-3" />
      </div>
    </section>
  )
}
