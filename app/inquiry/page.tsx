"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"

export default function InquiryPage() {
  const [author, setAuthor] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-2">Customer Inquiry</h1>
        <p className="text-gray-600 text-center mb-8">
          Search for your existing inquiries or create a new one
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Find My Inquiries */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Search className="h-5 w-5" />
                <h2 className="text-xl font-bold">Fin\
