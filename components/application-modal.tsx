"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { submitApplication } from "@/lib/actions"
import { useServerAction } from "@/hooks/use-server-action"

interface ApplicationModalProps {
  motorcycleType: string
  monthlyPayment: string
}

export function ApplicationModal({ motorcycleType, monthlyPayment }: ApplicationModalProps) {
  const [open, setOpen] = useState(false)
  const [employmentStatus, setEmploymentStatus] = useState("")
  const [state, executeAction, isPending] = useServerAction(submitApplication, null)

  // Close modal on success
  if (state?.success && open) {
    setTimeout(() => setOpen(false), 3000)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    executeAction(formData)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full bg-green-600 hover:bg-green-700">Apply for {motorcycleType}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Apply for {motorcycleType}</DialogTitle>
          <p className="text-sm text-gray-600">Monthly Payment: {monthlyPayment}</p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="motorcycleType" value={motorcycleType} />

          <div className="grid grid-cols-2 gap-4">
            <Input name="fullName" placeholder="Full name *" required />
            <Input name="phone" placeholder="Phone number *" required />
          </div>

          <Input name="email" type="email" placeholder="Email address *" required />

          <Input name="idNumber" placeholder="National ID number *" required />

          <Textarea name="address" placeholder="Full address *" rows={2} required />

          <div className="grid grid-cols-2 gap-4">
            <Input name="monthlyIncome" type="number" placeholder="Monthly income (RWF) *" required />
            <Select name="employmentStatus" value={employmentStatus} onValueChange={setEmploymentStatus} required>
              <SelectTrigger>
                <SelectValue placeholder="Employment status *" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="employed">Employed</SelectItem>
                <SelectItem value="self-employed">Self-employed</SelectItem>
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="unemployed">Unemployed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Textarea name="references" placeholder="References (2 people with phone numbers)" rows={3} />

          <div className="text-xs text-gray-500">
            * Required fields. We'll review your application within 24-48 hours.
          </div>

          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isPending}>
            {isPending ? "Submitting..." : "Submit Application"}
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
