import { useState } from 'react'
import { ArrowUpRight, Heart, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Card({ stay }) {
  const [favorite, setFavorite] = useState(false)

  return (
    <article className="stay-card">
      <div className="card-image">
        <img src={stay.image} alt={`${stay.name} in ${stay.location}`} />
        <button className={`favorite-button ${favorite ? 'active' : ''}`} type="button" aria-label={favorite ? `Remove ${stay.name} from favourites` : `Add ${stay.name} to favourites`} aria-pressed={favorite} onClick={() => setFavorite((value) => !value)}>
          <Heart size={18} fill={favorite ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div className="card-body">
        <div className="card-meta"><span>{stay.location}</span><span><Star size={13} fill="currentColor" /> {stay.rating}</span></div>
        <h3>{stay.name}</h3>
        <div className="card-footer">
          <div className="price">${stay.price} <span>/ night</span></div>
          <Link className="text-link" to={`/stays/${stay.id}`}>View <ArrowUpRight size={16} /></Link>
        </div>
      </div>
    </article>
  )
}
