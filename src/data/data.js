import cedarImage from '../assets/stays/cedar.jpg'
import sierraImage from '../assets/stays/sierra.jpg'
import coastalImage from '../assets/stays/coastal.jpg'
import aspenImage from '../assets/stays/aspen.jpg'
import desertImage from '../assets/stays/desert.jpg'
import lakeImage from '../assets/stays/lake.jpg'

export const stays = [
  {
    id: 'cedar-glass-house',
    name: 'Cedar Glass House',
    location: 'Hood River, Oregon',
    category: 'Cabin',
    price: 248,
    rating: 4.9,
    guests: 4,
    bedrooms: 2,
    image: cedarImage,
    gallery: [
      cedarImage,
      sierraImage,
      coastalImage
    ],
    description: 'A thoughtfully crafted cedar retreat with wall-to-wall forest views, a wood-burning fireplace, and easy access to mountain trails.'
  },
  {
    id: 'sierra-stone-cottage',
    name: 'Sierra Stone Cottage',
    location: 'Lake Tahoe, California',
    category: 'Cottage',
    price: 315,
    rating: 4.8,
    guests: 6,
    bedrooms: 3,
    image: sierraImage,
    gallery: [
      sierraImage,
      cedarImage,
      lakeImage
    ],
    description: 'A secluded stone cottage beside alpine forest, made for slow mornings, family dinners, and stargazing from the private deck.'
  },
  {
    id: 'coastal-dune-loft',
    name: 'Coastal Dune Loft',
    location: 'Mendocino, California',
    category: 'Coastal',
    price: 284,
    rating: 4.9,
    guests: 3,
    bedrooms: 1,
    image: coastalImage,
    gallery: [
      coastalImage,
      desertImage,
      lakeImage
    ],
    description: 'An airy coastal loft above the dunes with a private path to the beach, warm interiors, and uninterrupted ocean sunsets.'
  },
  {
    id: 'aspen-ridge-chalet',
    name: 'Aspen Ridge Chalet',
    location: 'Aspen, Colorado',
    category: 'Chalet',
    price: 420,
    rating: 5.0,
    guests: 8,
    bedrooms: 4,
    image: aspenImage,
    gallery: [
      aspenImage,
      cedarImage,
      sierraImage
    ],
    description: 'A modern mountain chalet with expansive windows, a private sauna, and panoramic views across the Aspen valley.'
  },
  {
    id: 'desert-sol-house',
    name: 'Desert Sol House',
    location: 'Joshua Tree, California',
    category: 'Desert',
    price: 196,
    rating: 4.7,
    guests: 4,
    bedrooms: 2,
    image: desertImage,
    gallery: [
      desertImage,
      coastalImage,
      cedarImage
    ],
    description: 'A sun-washed desert hideaway with sculptural interiors, an open fire pit, and the silence of protected open land.'
  },
  {
    id: 'lakeview-pine-camp',
    name: 'Lakeview Pine Camp',
    location: 'Lake Placid, New York',
    category: 'Lodge',
    price: 265,
    rating: 4.8,
    guests: 5,
    bedrooms: 3,
    image: lakeImage,
    gallery: [
      lakeImage,
      aspenImage,
      sierraImage
    ],
    description: 'A restored lakeside lodge with a private dock, cedar sauna, and quiet porches framed by old-growth pine.'
  }
]
