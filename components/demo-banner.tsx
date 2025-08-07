"use client"

import { useState } from "react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { X, Info } from "lucide-react"
import { isSupabaseConfigured } from "@/lib/supabase"

export function DemoBanner() {
  const [isVisible, setIsVisible] = useState(!isSupabaseConfigured())

  if (!isVisible) return null

  return (
    <Alert className="border-blue-200 bg-blue-50 text-blue-800 mb-4">
      <Info className="h-4 w-4" />
      <AlertDescription className="flex items-center justify-between">
        <span>
          <strong>Demo Mode:</strong> Database not connected. Forms will work but data won't be saved.
          <a href="#setup" className="underline ml-1">
            Set up Supabase to enable full functionality.
          </a>
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsVisible(false)}
          className="h-auto p-1 text-blue-800 hover:bg-blue-100"
        >
          <X className="h-4 w-4" />
        </Button>
      </AlertDescription>
    </Alert>
  )
}
