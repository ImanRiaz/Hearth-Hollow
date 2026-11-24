import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import Card from '../components/Card'
import { stays } from '../data/data'

export default function Listing() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('featured')

  const categories = ['All', ...new Set(stays.map((stay) => stay.category))]
  const results = useMemo(() => {
    const term = search.trim().toLowerCase()
    let filtered = stays.filter((stay) =>
      (category === 'All' || stay.category === category) &&
      (`${stay.name} ${stay.location} ${stay.category}`.toLowerCase().includes(term))
    )
    if (sort === 'price-low') filtered = [...filtered].sort((a, b) => a.price - b.price)
    if (sort === 'price-high') filtered = [...filtered].sort((a, b) => b.price - a.price)
    if (sort === 'rating') filtered = [...filtered].sort((a, b) => b.rating - a.rating)
    return filtered
  }, [search, category, sort])

  const clearFilters = () => {
    setSearch('')
    setCategory('All')
    setSort('featured')
  }

  return (
    <>
      <header className="page-hero">
        <div className="container-custom">
          <div className="eyebrow">The collection</div>
          <h1>Find your place to pause</h1>
          <p>Search distinctive stays by name, destination, or atmosphere.</p>
        </div>
      </header>
      <section className="section">
        <div className="container-custom">
          <div className="toolbar" role="search">
            <div className="search-box">
              <Search size={18} />
              <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search destination or stay" aria-label="Search stays" />
            </div>
            <select value={category} onChange={(event) => setCategory(event.target.value)} aria-label="Filter by category">
              {categories.map((item) => <option key={item} value={item}>{item === 'All' ? 'All stay types' : item}</option>)}
            </select>
            <select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Sort stays">
              <option value="featured">Featured</option>
              <option value="price-low">Price: low to high</option>
              <option value="price-high">Price: high to low</option>
              <option value="rating">Highest rated</option>
            </select>
          </div>
          <div className="results-count">{results.length} {results.length === 1 ? 'stay' : 'stays'} found</div>
          {results.length ? (
            <div className="stay-grid">{results.map((stay) => <Card key={stay.id} stay={stay} />)}</div>
          ) : (
            <div className="empty-state">
              <Search size={28} color="#245b45" />
              <h3>No stays match those filters</h3>
              <p>Try another destination or clear your current filters.</p>
              <button className="btn-primary-custom mt-3" type="button" onClick={clearFilters}>Clear filters</button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
