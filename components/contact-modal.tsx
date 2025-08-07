"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { sendContactMessage } from "@/lib/actions"
import { useServerAction } from "@/hooks/use-server-action"

export function ContactModal() {
  const [open, setOpen] = useState(false)
  const [state, executeAction, isPending] = useServerAction(sendContactMessage, null)

  // Close modal on success
  if (state?.success && open) {
    setTimeout(() => setOpen(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    executeAction(formData)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Contact Us
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact MotoLease</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input name="name" placeholder="Your full name" required />
          </div>
          <div>
            <Input name="email" type="email" placeholder="Your email address" required />
          </div>
          <div>
            <Textarea name="message" placeholder="Your message..." rows={4} required />
          </div>
          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isPending}>
            {isPending ? "Sending..." : "Send Message"}
          </Button>
          {state && (
            <div className={`text-center text-sm ${state.success ? "text-green-600" : "text-red-600"}`}>
              {state.message}
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  )
}
