import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="not-found">
      <div><h1>404</h1><h2>Trail not found</h2><p>The page you are looking for may have moved.</p><Link className="btn-primary-custom mt-3" to="/">Return home</Link></div>
    </section>
  )
}
