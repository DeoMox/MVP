"use client"

import { useState, useTransition } from "react"

type ServerAction<T = any> = (prevState: T, formData: FormData) => Promise<T>

export function useServerAction<T>(
  action: ServerAction<T>,
  initialState: T,
): [T, (formData: FormData) => void, boolean] {
  const [state, setState] = useState<T>(initialState)
  const [isPending, startTransition] = useTransition()

  const executeAction = (formData: FormData) => {
    startTransition(async () => {
      try {
        const result = await action(state, formData)
        setState(result)
      } catch (error) {
        console.error("Server action error:", error)
        setState({
          success: false,
          message: "Something went wrong. Please try again.",
        } as T)
      }
    })
  }

  return [state, executeAction, isPending]
}
