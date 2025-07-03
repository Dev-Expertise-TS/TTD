"use client"

import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { ArrowRight, MapPin, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { useEffect, useState } from "react"

const tourPackages = [
  {
    id: 1,
    title: "Surfing at Sundak Beach",
    description: "Experience stunning sunsets, white-washed buildings, and crystal-clear waters",
    price: 250,
    image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    title: "Rafting at Progo",
    description: "Adventure through rapids and scenic landscapes",
    price: 125,
    image: "https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    title: "Baturaden Bobocabin",
    description: "Experience stunning sunsets, white-washed",
    price: 150,
    image: "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    title: "Dieng Villa View",
    description: "Experience stunning sunsets, white-washed",
    price: 750,
    image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 5,
    title: "Mount Bromo Adventure",
    description: "Experience stunning sunsets, white-washed",
    price: 320,
    image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
]

const lodges = [
  {
    id: 1,
    title: "Villa Pondok Indah",
    description: "A spacious home with three cozy bedrooms and two bathrooms, ideal for families",
    priceRange: "$640-$950",
    price: 640,
    originalPrice: 800,
    image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Bali, Indonesia",
    rating: 4.8,
    reviews: 156,
  },
  {
    id: 2,
    title: "Villa Pondok Tanjung",
    description: "A spacious home with three cozy bedrooms and two bathrooms, ideal for couples",
    priceRange: "$840-$950",
    price: 840,
    originalPrice: 1050,
    image: "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Lombok, Indonesia",
    rating: 4.7,
    reviews: 203,
  },
  {
    id: 3,
    title: "Bali Patriot Residence",
    description: "A spacious home with three cozy bedrooms and two bathrooms, ideal for groups",
    priceRange: "$840-$990",
    price: 840,
    originalPrice: 1000,
    image: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Ubud, Indonesia",
    rating: 4.9,
    reviews: 124,
  },
  {
    id: 4,
    title: "Uluwatu Cliff Residence",
    description: "A spacious home with three cozy bedrooms and two bathrooms, ideal for luxury stays",
    priceRange: "$790-$800",
    price: 790,
    originalPrice: 950,
    image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Uluwatu, Indonesia",
    rating: 4.6,
    reviews: 89,
  },
  {
    id: 5,
    title: "Seminyak Beach Villa",
    description: "Modern beachfront villa with stunning ocean views and private pool",
    priceRange: "$920-$1200",
    price: 920,
    originalPrice: 1150,
    image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Seminyak, Bali",
    rating: 4.9,
    reviews: 278,
  },
  {
    id: 6,
    title: "Gili Trawangan Paradise",
    description: "Tropical paradise villa steps away from pristine beaches",
    priceRange: "$680-$850",
    price: 680,
    originalPrice: 820,
    image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Gili Trawangan",
    rating: 4.8,
    reviews: 192,
  },
  {
    id: 7,
    title: "Canggu Surf Lodge",
    description: "Perfect for surfers with direct beach access and modern amenities",
    priceRange: "$580-$720",
    price: 580,
    originalPrice: 700,
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Canggu, Bali",
    rating: 4.7,
    reviews: 165,
  },
  {
    id: 8,
    title: "Nusa Dua Luxury Resort",
    description: "Five-star luxury with world-class spa and golf course access",
    priceRange: "$1200-$1500",
    price: 1200,
    originalPrice: 1450,
    image: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Nusa Dua, Bali",
    rating: 4.9,
    reviews: 342,
  },
  {
    id: 9,
    title: "Yogyakarta Heritage House",
    description: "Traditional Javanese architecture with modern comfort and cultural charm",
    priceRange: "$420-$580",
    price: 420,
    originalPrice: 520,
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Yogyakarta",
    rating: 4.6,
    reviews: 98,
  },
  {
    id: 10,
    title: "Borobudur View Villa",
    description: "Wake up to stunning views of the ancient Borobudur temple",
    priceRange: "$650-$800",
    price: 650,
    originalPrice: 780,
    image: "https://images.pexels.com/photos/2832432/pexels-photo-2832432.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Magelang",
    rating: 4.8,
    reviews: 156,
  },
  {
    id: 11,
    title: "Bandung Mountain Retreat",
    description: "Cool mountain air and tea plantation views in West Java",
    priceRange: "$380-$480",
    price: 380,
    originalPrice: 450,
    image: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Bandung",
    rating: 4.5,
    reviews: 87,
  },
  {
    id: 12,
    title: "Jakarta City Penthouse",
    description: "Modern penthouse in the heart of Indonesia's capital city",
    priceRange: "$750-$950",
    price: 750,
    originalPrice: 900,
    image: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Jakarta",
    rating: 4.7,
    reviews: 234,
  },
]

export default function HomePage() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const scrollPrev = () => {
    api?.scrollPrev()
  }

  const scrollNext = () => {
    api?.scrollNext()
  }

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

      {/* Hero Banner */}
      <section className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
        <div className="absolute inset-0 rounded-lg mx-2 sm:mx-4 mt-2 sm:mt-4 overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/416676/pexels-photo-416676.jpeg"
            alt="Travel destination"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-4 leading-tight">
                Experience the World's Best Tours
                <br className="hidden sm:block" />
                Easy, Fast, Secure
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Packages Slider */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 max-w-7xl mx-auto">
        <div className="flex items-stretch gap-8">
          {/* Left Main Image */}
          <div className="hidden lg:block flex-shrink-0 w-96">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/2105937/pexels-photo-2105937.jpeg"
                alt="Cool Summer Vacation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <div className="mb-4">
                </div>
                <h3 className="text-3xl font-bold mb-4">Cool Summer Vacation</h3>
                <div className="flex items-center text-sm text-gray-300">
                  <span>#Tours #SummerFun</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Carousel Section */}
          <div className="flex-1 flex flex-col h-[500px]">
            {/* Carousel */}
            <div className="flex-1">
              <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full h-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4 h-full">
                  {tourPackages.map((tour) => (
                    <CarouselItem key={tour.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 h-full">
                      <Link href={`/product/${tour.id}`} className="h-full block">
                        <div className="relative overflow-hidden rounded-2xl group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-[400px]">
                          <Image
                            src={tour.image || "/placeholder.svg"}
                            alt={tour.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                          {/* Price Badge */}
                          <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg">
                            <span className="text-lg font-bold text-gray-900">${tour.price}.00</span>
                          </div>

                          {/* Content */}
                                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <div className="mb-3">
                              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                Featured Experience
                              </span>
                            </div>


                            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors duration-300">
                              {tour.title}
                            </h3>
                            <p className="text-gray-200 text-sm leading-relaxed line-clamp-1 mb-2">
                              {tour.description}
                            </p>
                            <div className="flex items-center text-xs text-gray-300">
                              <span>#Adventure #Travel</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-start gap-4 mt-6 pl-2 md:pl-4">
              <button
                onClick={scrollPrev}
                className="bg-gray-400 hover:bg-gray-500 text-white border-0 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-colors duration-200"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={scrollNext}
                className="bg-blue-600 hover:bg-blue-700 text-white border-0 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-colors duration-200"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Lodges */}
      <section className="py-16 px-4 max-w-7xl mx-auto bg-gray-50">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Most Popular Lodges Around the World</h2>
            <p className="text-gray-600">Explore our travel packages this month, with options for every traveler</p>
          </div>
          <Link href="/tours" className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
            See All <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {lodges.map((lodge) => (
            <Link key={lodge.id} href={`/product/${lodge.id}`}>
              <Card className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={lodge.image || "/placeholder.svg"}
                    alt={lodge.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>

                <div className="p-4 space-y-3">
                  {/* Location */}
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{lodge.location}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {lodge.title}
                  </h3>

                  {/* Reviews */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(lodge.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({lodge.reviews} reviews)</span>
                  </div>

                  {/* Pricing */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500 line-through">${lodge.originalPrice}</span>
                      <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-semibold">
                        {Math.round(((lodge.originalPrice - lodge.price) / lodge.originalPrice) * 100)}% OFF
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">${lodge.price}</div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-4">TOURVIS</div>
          <p className="text-gray-400 mb-8">Experience the World's Best Tours</p>
          <div className="flex justify-center space-x-8">
            <Link href="/tours" className="hover:text-blue-400">
              Tours
            </Link>
            <Link href="/inquiry" className="hover:text-blue-400">
              Inquiry
            </Link>
            <Link href="/booking-lookup" className="hover:text-blue-400">
              Booking Lookup
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
