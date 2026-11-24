# Hearth & Hollow

Hearth & Hollow is a polished React.js travel website for discovering distinctive cabins, cottages, chalets, coastal homes, lodges, and desert stays across North America.

## Student Details

- Student name: [INSERT YOUR NAME]
- Student ID: [INSERT YOUR STUDENT ID]

## Technologies

- React 19
- Vite
- React Router DOM
- React-Bootstrap and Bootstrap 5
- JavaScript (JSX)
- Lucide React icons

## Website Pages

- `/` — Discover page with hero, featured stays, and brand values
- `/stays` — Searchable, filterable, sortable stay collection
- `/stays/:id` — Stay details with guest and night controls
- `/plan` — Controlled, validated trip planning form
- `*` — Custom 404 Not Found page

## Implemented Interactions

- Dynamic search across stay names, locations, and categories
- Category filtering and multiple sort options
- Clear filters and a designed empty state
- Favourite toggles on cards and the details page
- Guest quantity controls with limits based on the selected stay
- Night quantity controls from 1 to 14 nights
- Automatically calculated estimated booking totals
- Controlled trip form inputs
- Required-field and Gmail-only validation ending in `@gmail.com`
- Inline success confirmation after valid submission
- Responsive mobile navigation menu

## Project Structure

```text
src/
  assets/
  components/
    Navbar.jsx
    Footer.jsx
    Card.jsx
  data/
    data.js
  pages/
    Home.jsx
    Listing.jsx
    Details.jsx
    FormPage.jsx
    NotFound.jsx
  App.jsx
  main.jsx
  index.css
```

The reusable `Navbar`, `Footer`, and `Card` components keep the design consistent. Stay data is stored in `src/data/data.js` and rendered with `map()`. Search, filtering, sorting, favourites, booking quantities, and form validation use React `useState`, props, controlled inputs, and event handlers.

React Router uses `BrowserRouter`, `Routes`, and `Route` in `App.jsx`. `NavLink` highlights active navigation, `Link` enables client-side navigation, dynamic detail routes use `useParams`, and the catch-all route renders the custom 404 page.

## Installation

```bash
npm install
```

## Run the Development Server

```bash
npm run dev
```

Open the local URL shown by Vite.

## Production Build

```bash
npm run build
npm run preview
```

## Screenshots

The `screenshots/` folder is prepared for actual application captures. It can contain captures of the home page, listing page, listing interactions, details page, form validation/success, mobile navigation, and 404 page.
