"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Search, Plus, MessageSquare } from "lucide-react"

export default function InquiryPage() {
  const [searchData, setSearchData] = useState({
    author: "",
    password: "",
  })

  const handleSearch = () => {
    if (searchData.author && searchData.password) {
      // Navigate to inquiry list with author and password
      window.location.href = `/inquiry-list?author=${encodeURIComponent(searchData.author)}&password=${encodeURIComponent(searchData.password)}`
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b shadow-sm">
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

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Customer Inquiry</h1>
          <p className="text-xl text-gray-600">Search for your existing inquiries or create a new one</p>
        </div>

        {/* Main Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Find My Inquiries */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-blue-50">
              <CardTitle className="flex items-center gap-3 text-blue-900">
                <Search className="h-6 w-6" />
                Find My Inquiries
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="author">
                    Author <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="author"
                    placeholder="Enter your username"
                    value={searchData.author}
                    onChange={(e) => setSearchData((prev) => ({ ...prev, author: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="password">
                    Password <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    value={searchData.password}
                    onChange={(e) => setSearchData((prev) => ({ ...prev, password: e.target.value }))}
                  />
                </div>
                <Button
                  onClick={handleSearch}
                  className="w-full bg-[#01c5fd] hover:bg-[#00b4e6]"
                  disabled={!searchData.author || !searchData.password}
                >
                  <Search className="h-4 w-4 mr-2" />
                  Search Inquiries
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* New Inquiry */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center gap-3 text-green-900">
                <Plus className="h-6 w-6" />
                New Inquiry
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-600 mb-6">
                Have a question or need assistance? Create a new inquiry and we'll get back to you within 24 hours.
              </p>

              {/* Business Hours */}
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-blue-900 mb-2">Business Hours</h3>
                <p className="text-blue-800 text-sm">
                  Weekdays: 09:00 AM - 06:00 PM
                  <br />
                  (Korea Standard Time)
                </p>
              </div>

              <div className="mt-6">
                <Link href="/inquiry-create">
                  <Button className="w-full bg-[#01c5fd] hover:bg-[#00b4e6]">
                    <Plus className="h-4 w-4 mr-2" />
                    Create New Inquiry
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <Card className="shadow-lg mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <MessageSquare className="h-6 w-6 text-blue-600" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Business Hours</h3>
                <p className="text-gray-600">Weekdays 09:00 AM - 06:00 PM (Korea Standard Time)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="text-center">
          <Link href="/" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
            <span className="mr-2">←</span>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
