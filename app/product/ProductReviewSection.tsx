"use client"

import { useState } from "react"

interface Review {
  name: string
  rating: number
  content: string
  date: string
}

function maskName(name: string) {
  if (name.length <= 2) return name[0] + "*"
  return name[0] + "*".repeat(name.length - 2) + name[name.length - 1]
}

const reviews: Review[] = [
  {
    name: "홍길동",
    rating: 5,
    content: "가이드님이 친절하고 일정이 알찼어요. 와이너리 점심도 기대 이상이었습니다.",
    date: "2025-07-01",
  },
  {
    name: "이영희",
    rating: 4,
    content: "피사와 시에나 모두 만족! 조금 더 여유 있었으면 좋겠지만 전반적으로 훌륭.",
    date: "2025-06-29",
  },
  {
    name: "박철수",
    rating: 5,
    content: "풍경이 정말 아름다웠고, 투어가 체계적이었습니다. 추천합니다.",
    date: "2025-06-25",
  },
  {
    name: "최민정",
    rating: 4,
    content: "점심 와인도 맛있고, 사진 찍기 좋은 곳이 많았어요. 다시 가고 싶네요.",
    date: "2025-06-20",
  },
]

export default function ProductReviewSection() {
  const [currentPage, setCurrentPage] = useState(1)
  const REVIEWS_PER_PAGE = 2

  const sortedReviews = [...reviews].sort((a, b) => b.date.localeCompare(a.date))
  const totalPages = Math.ceil(sortedReviews.length / REVIEWS_PER_PAGE)
  const pagedReviews = sortedReviews.slice(
    (currentPage - 1) * REVIEWS_PER_PAGE,
    currentPage * REVIEWS_PER_PAGE
  )

  return (
    <section className="max-w-2xl mx-auto mt-12 mb-16">
      <h2 className="text-2xl font-bold mb-6">후기</h2>
      <ul className="space-y-6">
        {pagedReviews.map((review, idx) => (
          <li key={idx} className="border-b pb-5">
            <div className="flex items-center gap-3 mb-1">
              <span className="font-semibold text-gray-800">{maskName(review.name)}</span>
              <span className="flex items-center text-yellow-500 text-base">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </span>
              <span className="text-xs text-gray-500">{review.date}</span>
            </div>
            <div className="text-gray-700">{review.content}</div>
          </li>
        ))}
      </ul>
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded border ${currentPage === 1 ? "text-gray-400 border-gray-200" : "text-blue-600 border-blue-200 hover:bg-blue-50"}`}
          >
            이전
          </button>
          <span className="px-2 text-sm text-gray-600">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded border ${currentPage === totalPages ? "text-gray-400 border-gray-200" : "text-blue-600 border-blue-200 hover:bg-blue-50"}`}
          >
            다음
          </button>
        </div>
      )}
    </section>
  )
}
