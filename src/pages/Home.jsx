import { ArrowRight, Compass, Leaf, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import { stays } from '../data/data'
import heroImage from '../assets/stays/hero.jpg'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">Curated nature stays</div>
          <h1>Find your way <em>back outside.</em></h1>
          <p className="hero-copy">Distinctive cabins, cottages, and retreats chosen for their setting, story, and thoughtful hospitality.</p>
          <div className="hero-actions">
            <Link className="btn-primary-custom" to="/stays">Explore stays <ArrowRight size={18} /></Link>
            <Link className="btn-secondary-custom" to="/plan">Plan a weekend</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Sunlight filtering through a peaceful forest" />
          <div className="floating-note"><Compass size={22} color="#245b45" /><div><strong>46 wild places</strong><br /><small>Across North America</small></div></div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="section-header">
            <div><div className="eyebrow">Guest favourites</div><h2>Stays worth travelling for</h2></div>
            <Link className="text-link" to="/stays">View all stays <ArrowRight size={17} /></Link>
          </div>
          <div className="stay-grid">{stays.slice(0, 3).map((stay) => <Card key={stay.id} stay={stay} />)}</div>
        </div>
      </section>

      <section className="promise-strip" id="nature">
        <div className="container-custom promise-grid">
          <div className="promise"><Leaf /><div><h3>Nature-led places</h3><p>Handpicked settings that make the landscape the main event.</p></div></div>
          <div className="promise" id="hosts"><Sparkles /><div><h3>Thoughtfully hosted</h3><p>Personal touches and genuine hospitality, never a standard script.</p></div></div>
          <div className="promise"><Compass /><div><h3>Clear, simple booking</h3><p>Know where you are going and what is included before you arrive.</p></div></div>
        </div>
      </section>
    </>
  )
}
