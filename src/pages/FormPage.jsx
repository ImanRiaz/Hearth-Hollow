import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

const initialForm = { name: '', email: '', destination: '', season: '', guests: '2', style: '', notes: '' }

export default function FormPage() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const update = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setSubmitted(false)
    if (errors[name]) setErrors((current) => ({ ...current, [name]: '' }))
  }

  const submit = (event) => {
    event.preventDefault()
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
    const gmailPattern = /^[A-Za-z0-9](?:[A-Za-z0-9._%+-]*[A-Za-z0-9])?@gmail\.com$/i
    if (!gmailPattern.test(form.email) || form.email.includes('..')) {
      nextErrors.email = 'Enter a valid Gmail address ending in @gmail.com.'
    }
    if (!form.destination) nextErrors.destination = 'Choose a destination.'
    if (!form.season) nextErrors.season = 'Choose a season.'
    if (!form.style) nextErrors.style = 'Choose a stay style.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
      setForm(initialForm)
    }
  }

  return (
    <>
      <header className="page-hero"><div className="container-custom"><div className="eyebrow">Trip planning</div><h1>Tell us where you want to go</h1><p>A few details help us shape a getaway around the way you travel.</p></div></header>
      <section className="section">
        <div className="container-custom form-layout">
          <aside className="form-aside"><div className="eyebrow" style={{ color: 'var(--sun)' }}>Personal itinerary</div><h2>Less searching. More being there.</h2><p>Share your travel preferences and your trip brief will be ready to review.</p></aside>
          <form className="form-panel" onSubmit={submit} noValidate>
            {submitted && <div className="success-message" role="status"><CheckCircle2 size={20} /> Thanks! Your trip preferences were submitted successfully.</div>}
            <div className="form-grid">
              <div className="form-group"><label htmlFor="name">Full name *</label><input className="form-control" id="name" name="name" value={form.name} onChange={update} placeholder="Alex Morgan" /><div className="form-error">{errors.name}</div></div>
              <div className="form-group"><label htmlFor="email">Gmail address *</label><input className="form-control" id="email" name="email" type="email" value={form.email} onChange={update} placeholder="abc@gmail.com" aria-describedby="email-format" /><small id="email-format" className="text-muted">Use a Gmail address ending in @gmail.com</small><div className="form-error">{errors.email}</div></div>
            </div>
            <div className="form-grid">
              <div className="form-group"><label htmlFor="destination">Destination *</label><select className="form-select" id="destination" name="destination" value={form.destination} onChange={update}><option value="">Choose a region</option><option>Pacific Northwest</option><option>California Coast</option><option>Colorado Rockies</option><option>Northeast Lakes</option></select><div className="form-error">{errors.destination}</div></div>
              <div className="form-group"><label htmlFor="season">Preferred season *</label><select className="form-select" id="season" name="season" value={form.season} onChange={update}><option value="">Choose a season</option><option>Spring</option><option>Summer</option><option>Autumn</option><option>Winter</option></select><div className="form-error">{errors.season}</div></div>
            </div>
            <div className="form-grid">
              <div className="form-group"><label htmlFor="guests">Number of guests</label><select className="form-select" id="guests" name="guests" value={form.guests} onChange={update}>{[1,2,3,4,5,6,7,8].map((count) => <option key={count} value={count}>{count} {count === 1 ? 'guest' : 'guests'}</option>)}</select></div>
              <div className="form-group"><label htmlFor="style">Stay style *</label><select className="form-select" id="style" name="style" value={form.style} onChange={update}><option value="">Choose a style</option><option>Cabin</option><option>Cottage</option><option>Coastal</option><option>Chalet</option><option>Desert</option><option>Lodge</option></select><div className="form-error">{errors.style}</div></div>
            </div>
            <div className="form-group"><label htmlFor="notes">Anything we should know?</label><textarea className="form-control" id="notes" name="notes" value={form.notes} onChange={update} rows="4" placeholder="Occasion, interests, accessibility needs, or must-have details..." /></div>
            <button className="btn-primary-custom" type="submit">Create trip brief</button>
          </form>
        </div>
      </section>
    </>
  )
}
