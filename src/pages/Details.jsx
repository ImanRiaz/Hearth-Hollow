import { useState } from 'react'
import { ArrowLeft, Heart, Minus, Plus } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { stays } from '../data/data'

export default function Details() {
  const { id } = useParams()
  const stay = stays.find((item) => item.id === id)
  const [guests, setGuests] = useState(2)
  const [nights, setNights] = useState(3)
  const [favorite, setFavorite] = useState(false)
  const [saved, setSaved] = useState(false)

  if (!stay) {
    return (
      <section className="not-found"><div><h1>Stay not found</h1><p>This place is no longer in the collection.</p><Link className="btn-primary-custom" to="/stays">Browse stays</Link></div></section>
    )
  }

  const reserve = () => setSaved(true)

  return (
    <>
      <div className="container-custom detail-layout">
        <div>
          <Link className="text-link mb-3" to="/stays"><ArrowLeft size={17} /> Back to all stays</Link>
          <div className="detail-gallery">
            <img src={stay.gallery[0]} alt={`Exterior of ${stay.name}`} />
            <div className="detail-side">
              <img src={stay.gallery[1]} alt={`Interior of ${stay.name}`} />
              <img src={stay.gallery[2]} alt={`Living space at ${stay.name}`} />
            </div>
          </div>
          <div className="detail-info">
            <h1>{stay.name}</h1>
            <p>{stay.location} · ★ {stay.rating}</p>
            <div className="detail-tags"><span>{stay.category}</span><span>Up to {stay.guests} guests</span><span>{stay.bedrooms} bedrooms</span><span>Self check-in</span></div>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, maxWidth: 690 }}>{stay.description}</p>
            <p style={{ lineHeight: 1.8, maxWidth: 690 }}>The stay includes fast Wi-Fi, a fully equipped kitchen, fresh linens, local coffee, and clear arrival instructions. The surrounding area offers walking trails and independent cafés within a short drive.</p>
          </div>
        </div>
        <aside className="booking-card">
          <h3>${stay.price}<small style={{ color: 'var(--muted)', fontSize: 15 }}> / night</small></h3>
          {saved && <div className="success-message">Your stay request is saved.</div>}
          <div className="guest-control">
            <div><strong>Guests</strong><br /><small>Maximum {stay.guests}</small></div>
            <div className="counter-control">
              <button type="button" aria-label="Decrease guests" disabled={guests === 1} onClick={() => setGuests((value) => Math.max(1, value - 1))}><Minus size={14} /></button>
              <strong>{guests}</strong>
              <button type="button" aria-label="Increase guests" disabled={guests === stay.guests} onClick={() => setGuests((value) => Math.min(stay.guests, value + 1))}><Plus size={14} /></button>
            </div>
          </div>
          <div className="guest-control">
            <div><strong>Nights</strong></div>
            <div className="counter-control">
              <button type="button" aria-label="Decrease nights" disabled={nights === 1} onClick={() => setNights((value) => Math.max(1, value - 1))}><Minus size={14} /></button>
              <strong>{nights}</strong>
              <button type="button" aria-label="Increase nights" disabled={nights === 14} onClick={() => setNights((value) => Math.min(14, value + 1))}><Plus size={14} /></button>
            </div>
          </div>
          <div className="total-row"><strong>Estimated total</strong><strong>${stay.price * nights}</strong></div>
          <button className="btn-primary-custom w-100" type="button" onClick={reserve}>Request this stay</button>
          <button className="btn-secondary-custom w-100 mt-2" type="button" aria-pressed={favorite} onClick={() => setFavorite((value) => !value)}><Heart size={17} fill={favorite ? 'currentColor' : 'none'} />{favorite ? 'Saved to favourites' : 'Save to favourites'}</button>
        </aside>
      </div>
    </>
  )
}
