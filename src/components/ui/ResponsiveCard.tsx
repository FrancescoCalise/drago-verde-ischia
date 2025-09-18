"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ResponsiveCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function ResponsiveCard({ children, className, ...props }: ResponsiveCardProps) {
  const defaultClassName = "w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl shadow-lg border rounded-2xl"
  return (
    
      <div className="flex justify-center items-start w-full px-4 py-12">
        <Card
        className={cn(className ?? defaultClassName)}
        {...props}
      >
        {children}
      </Card>
    </div>
  )
}

// Re-export subcomponents per compatibilità
ResponsiveCard.Header = CardHeader
ResponsiveCard.Title = CardTitle
ResponsiveCard.Description = CardDescription
ResponsiveCard.Content = CardContent
ResponsiveCard.Footer = CardFooter
