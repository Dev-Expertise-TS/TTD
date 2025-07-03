"use client"

import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { MapPin, Star, Filter, X } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const tours = [
  {
    id: 1,
    title: "Surfing at Sundak Beach",
    description: "Experience stunning sunsets, white-washed buildings, and crystal-clear waters",
    price: 250,
    originalPrice: 300,
    image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Yogyakarta",
    category: "Adventure",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    title: "Rafting at Progo",
    description: "Adventure through rapids and scenic landscapes",
    price: 125,
    originalPrice: 180,
    image: "https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Magelang",
    category: "Adventure",
    rating: 4.7,
    reviews: 89,
  },
  {
    id: 3,
    title: "Baturaden Bobocabin",
    description: "Experience stunning sunsets, white-washed buildings",
    price: 150,
    originalPrice: 200,
    image: "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Purwokerto",
    category: "Nature",
    rating: 4.6,
    reviews: 156,
  },
  {
    id: 4,
    title: "Dieng Villa View",
    description: "Experience stunning sunsets, white-washed buildings",
    price: 750,
    originalPrice: 900,
    image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Wonosobo",
    category: "Nature",
    rating: 4.9,
    reviews: 203,
  },
  {
    id: 5,
    title: "Jomblang Cave Adventure",
    description: "Explore the mystical underground cave with heavenly light",
    price: 180,
    originalPrice: 220,
    image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Gunungkidul",
    category: "Adventure",
    rating: 4.8,
    reviews: 167,
  },
  {
    id: 6,
    title: "Borobudur Temple Tour",
    description: "Visit the magnificent Buddhist temple at sunrise",
    price: 95,
    originalPrice: 120,
    image: "https://images.pexels.com/photos/2832432/pexels-photo-2832432.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Magelang",
    category: "Cultural",
    rating: 4.9,
    reviews: 298,
  },
  {
    id: 7,
    title: "Prambanan Temple Complex",
    description: "Explore the largest Hindu temple complex in Indonesia",
    price: 85,
    originalPrice: 110,
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Yogyakarta",
    category: "Cultural",
    rating: 4.7,
    reviews: 234,
  },
  {
    id: 8,
    title: "Sultan Palace Tour",
    description: "Discover the royal heritage of Yogyakarta",
    price: 65,
    originalPrice: 85,
    image: "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Yogyakarta",
    category: "Cultural",
    rating: 4.5,
    reviews: 145,
  },
  {
    id: 9,
    title: "Tumpak Sewu Waterfall",
    description: "Marvel at the thousand waterfalls of East Java",
    price: 280,
    originalPrice: 350,
    image: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "East Java",
    category: "Nature",
    rating: 4.8,
    reviews: 189,
  },
  {
    id: 10,
    title: "Mount Merapi Jeep Tour",
    description: "Adventure tour around the active volcano",
    price: 220,
    originalPrice: 280,
    image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Yogyakarta",
    category: "Adventure",
    rating: 4.6,
    reviews: 178,
  },
  {
    id: 11,
    title: "Kawah Ijen Blue Fire",
    description: "Witness the magical blue flames at night",
    price: 450,
    originalPrice: 550,
    image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "East Java",
    category: "Adventure",
    rating: 4.9,
    reviews: 267,
  },
  {
    id: 12,
    title: "Yogya Food Street Tour",
    description: "Taste the authentic flavors of Yogyakarta",
    price: 45,
    originalPrice: 60,
    image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Yogyakarta",
    category: "Cultural",
    rating: 4.7,
    reviews: 312,
  },
  {
    id: 13,
    title: "Parangtritis Beach Sunset",
    description: "Enjoy stunning sunset views at the mystical beach",
    price: 75,
    originalPrice: 95,
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Yogyakarta",
    category: "Nature",
    rating: 4.5,
    reviews: 198,
  },
  {
    id: 14,
    title: "Timang Beach Adventure",
    description: "Cross the traditional rope bridge to the rocky island",
    price: 120,
    originalPrice: 150,
    image: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Gunungkidul",
    category: "Adventure",
    rating: 4.6,
    reviews: 134,
  },
  {
    id: 15,
    title: "Siung Beach Rock Climbing",
    description: "Challenge yourself with cliff climbing by the sea",
    price: 200,
    originalPrice: 250,
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Gunungkidul",
    category: "Adventure",
    rating: 4.8,
    reviews: 87,
  },
  {
    id: 16,
    title: "Indrayanti Beach Relaxation",
    description: "Relax at the pristine white sand beach",
    price: 55,
    originalPrice: 75,
    image: "https://images.pexels.com/photos/2832432/pexels-photo-2832432.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Gunungkidul",
    category: "Nature",
    rating: 4.4,
    reviews: 156,
  },
  {
    id: 17,
    title: "Goa Pindul Cave Tubing",
    description: "Float through the underground river cave",
    price: 90,
    originalPrice: 115,
    image: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Gunungkidul",
    category: "Adventure",
    rating: 4.7,
    reviews: 223,
  },
  {
    id: 18,
    title: "Malioboro Street Walking Tour",
    description: "Explore the heart of Yogyakarta's cultural district",
    price: 35,
    originalPrice: 50,
    image: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Yogyakarta",
    category: "Cultural",
    rating: 4.3,
    reviews: 289,
  },
  {
    id: 19,
    title: "Yogya Batik Workshop",
    description: "Learn the traditional art of batik making",
    price: 80,
    originalPrice: 100,
    image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Yogyakarta",
    category: "Cultural",
    rating: 4.6,
    reviews: 167,
  },
  {
    id: 20,
    title: "Taman Sari Water Castle",
    description: "Explore the royal water garden complex",
    price: 50,
    originalPrice: 70,
    image: "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Yogyakarta",
    category: "Cultural",
    rating: 4.4,
    reviews: 198,
  },
  {
    id: 21,
    title: "Sekumpul Waterfall Trek",
    description: "Hike to the most beautiful waterfall in Bali",
    price: 160,
    originalPrice: 200,
    image: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "East Java",
    category: "Nature",
    rating: 4.8,
    reviews: 145,
  },
  {
    id: 22,
    title: "Kalibiru Treetop Adventure",
    description: "Experience the canopy walk and zipline",
    price: 110,
    originalPrice: 140,
    image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Yogyakarta",
    category: "Adventure",
    rating: 4.5,
    reviews: 178,
  },
  {
    id: 23,
    title: "Kaliurang Highland Tour",
    description: "Enjoy the cool mountain air and scenic views",
    price: 85,
    originalPrice: 110,
    image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Yogyakarta",
    category: "Nature",
    rating: 4.3,
    reviews: 134,
  },
  {
    id: 24,
    title: "Plaosan Temple Discovery",
    description: "Visit the twin Buddhist temples",
    price: 70,
    originalPrice: 90,
    image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Yogyakarta",
    category: "Cultural",
    rating: 4.6,
    reviews: 112,
  },
  {
    id: 25,
    title: "Ratu Boko Palace Sunset",
    description: "Watch sunset from the ancient palace ruins",
    price: 95,
    originalPrice: 120,
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Yogyakarta",
    category: "Cultural",
    rating: 4.7,
    reviews: 189,
  },
  {
    id: 26,
    title: "Telaga Warna Color Lake",
    description: "Marvel at the changing colors of the crater lake",
    price: 130,
    originalPrice: 165,
    image: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Wonosobo",
    category: "Nature",
    rating: 4.8,
    reviews: 156,
  },
  {
    id: 27,
    title: "Arjuna Temple Complex",
    description: "Explore the ancient Hindu temples on the plateau",
    price: 75,
    originalPrice: 95,
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Wonosobo",
    category: "Cultural",
    rating: 4.5,
    reviews: 123,
  },
  {
    id: 28,
    title: "Sikidang Crater Tour",
    description: "Witness the active volcanic crater and hot springs",
    price: 105,
    originalPrice: 135,
    image: "https://images.pexels.com/photos/2832432/pexels-photo-2832432.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Wonosobo",
    category: "Nature",
    rating: 4.6,
    reviews: 167,
  },
]

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Adventure":
      return "bg-orange-100 text-orange-800"
    case "Cultural":
      return "bg-purple-100 text-purple-800"
    case "Nature":
      return "bg-green-100 text-green-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function ToursPage() {
  const [selectedLocation, setSelectedLocation] = useState<string>("")
  const [selectedCategory, setSelectedCategory] = useState<string>("")

  // Get unique locations and categories
  const locations = Array.from(new Set(tours.map((tour) => tour.location)))
  const categories = Array.from(new Set(tours.map((tour) => tour.category)))

  // Filter tours based on selected filters
  const filteredTours = tours.filter((tour) => {
    const locationMatch = !selectedLocation || tour.location === selectedLocation
    const categoryMatch = !selectedCategory || tour.category === selectedCategory
    return locationMatch && categoryMatch
  })

  const clearFilters = () => {
    setSelectedLocation("")
    setSelectedCategory("")
  }

  const removeLocationFilter = () => {
    setSelectedLocation("")
  }

  const removeCategoryFilter = () => {
    setSelectedCategory("")
  }

  const hasActiveFilters = selectedLocation || selectedCategory

  return (
    <div className="min-h-screen">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              TOURVIS
            </Link>
            <div className="flex space-x-6">
              <Link href="/tours" className="text-gray-700 hover:text-blue-600 font-medium">
                Tour List
              </Link>
              <Link href="/inquiry" className="text-gray-700 hover:text-blue-600 font-medium">
                Inquiry
              </Link>
              <Link href="/booking-lookup" className="text-gray-700 hover:text-blue-600 font-medium">
                Booking
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Discover Amazing Tours</h1>
            <p className="text-xl text-gray-600">Explore our collection of unforgettable experiences</p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <span className="font-medium text-gray-700">Filters:</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <div className="flex-1">
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex-1">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {hasActiveFilters && (
                <Button variant="outline" onClick={clearFilters} className="whitespace-nowrap bg-transparent">
                  Clear All
                </Button>
              )}
            </div>

            {/* Active Filters */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
                {selectedLocation && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Location: {selectedLocation}
                    <X className="h-3 w-3 cursor-pointer hover:text-red-500" onClick={removeLocationFilter} />
                  </Badge>
                )}
                {selectedCategory && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Category: {selectedCategory}
                    <X className="h-3 w-3 cursor-pointer hover:text-red-500" onClick={removeCategoryFilter} />
                  </Badge>
                )}
              </div>
            )}
          </Card>
        </div>
      </section>

      {/* Results */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">{filteredTours.length} Tours Found</h2>
          </div>

          {filteredTours.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">No tours found matching your criteria.</p>
              <Button onClick={clearFilters} variant="outline">
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredTours.map((tour) => (
                <Link key={tour.id} href={`/product/${tour.id}`}>
                  <Card className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={tour.image || "/placeholder.svg"}
                        alt={tour.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <Badge className={getCategoryColor(tour.category)}>{tour.category}</Badge>
                      </div>
                    </div>

                    <div className="p-4 space-y-3 flex-1 flex flex-col">
                      {/* Location */}
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{tour.location}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 flex-1">
                        {tour.title}
                      </h3>

                      {/* Reviews */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(tour.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">({tour.reviews} reviews)</span>
                      </div>

                      {/* Pricing */}
                      <div className="space-y-1 mt-auto">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500 line-through">${tour.originalPrice}</span>
                          <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-semibold">
                            {Math.round(((tour.originalPrice - tour.price) / tour.originalPrice) * 100)}% OFF
                          </span>
                        </div>
                        <div className="text-2xl font-bold text-blue-600">${tour.price}</div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
