"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface HeroBannerProps {
  images: string[]
  title: React.ReactNode
  subtitle?: React.ReactNode
  primaryCta?: { label: React.ReactNode; href: string }
  secondaryCta?: { label: React.ReactNode; href: string }
  height?: string // altezza personalizzabile
}

export default function HeroBanner({
  images,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  height = "h-[40vh] md:h-[55vh]" // default più compatto
}: HeroBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className={cn("relative flex items-center justify-center overflow-hidden", height)}>
      {/* Background slideshow */}
      <div className="absolute inset-0 z-0">
        {images.map((img, i) => (
          <div
            key={i}
            className={cn(
              "absolute inset-0 bg-cover bg-center transition-opacity duration-1000",
              images.length === 1 || i === currentIndex
                ? "opacity-100"
                : "opacity-0"
            )}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-base md:text-xl text-gray-200 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded-xl font-bold shadow-md"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="bg-white text-green-700 hover:bg-gray-200 px-6 py-3 rounded-xl font-bold shadow-md"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
