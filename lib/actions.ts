"use server"

import { supabase, isSupabaseConfigured } from "./supabase"

// Waitlist signup action
export async function joinWaitlist(prevState: any, formData: FormData) {
  const fullName = formData.get("fullName") as string
  const phone = formData.get("phone") as string
  const email = formData.get("email") as string

  if (!fullName || !phone || !email) {
    return { success: false, message: "Please fill in all fields" }
  }

  // Check if Supabase is configured
  if (!isSupabaseConfigured() || !supabase) {
    console.log("Demo mode: Waitlist signup", { fullName, phone, email })
    return {
      success: true,
      message: "Demo mode: Successfully joined the waitlist! (Database not connected yet)",
    }
  }

  try {
    const { error } = await supabase.from("waitlist").insert([
      {
        full_name: fullName,
        phone: phone,
        email: email,
      },
    ])

    if (error) {
      console.error("Supabase error:", error)
      return { success: false, message: "Failed to join waitlist. Please try again." }
    }

    return { success: true, message: "Successfully joined the waitlist! We'll notify you when we launch." }
  } catch (error) {
    console.error("Error:", error)
    return { success: false, message: "Something went wrong. Please try again." }
  }
}

// Contact form action
export async function sendContactMessage(prevState: any, formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  if (!name || !email || !message) {
    return { success: false, message: "Please fill in all fields" }
  }

  // Check if Supabase is configured
  if (!isSupabaseConfigured() || !supabase) {
    console.log("Demo mode: Contact message", { name, email, message })
    return {
      success: true,
      message: "Demo mode: Message sent successfully! (Database not connected yet)",
    }
  }

  try {
    const { error } = await supabase.from("contact_messages").insert([
      {
        name: name,
        email: email,
        message: message,
      },
    ])

    if (error) {
      console.error("Supabase error:", error)
      return { success: false, message: "Failed to send message. Please try again." }
    }

    return { success: true, message: "Message sent successfully! We'll get back to you soon." }
  } catch (error) {
    console.error("Error:", error)
    return { success: false, message: "Something went wrong. Please try again." }
  }
}

// Motorcycle application action
export async function submitApplication(prevState: any, formData: FormData) {
  const fullName = formData.get("fullName") as string
  const phone = formData.get("phone") as string
  const email = formData.get("email") as string
  const motorcycleType = formData.get("motorcycleType") as string
  const monthlyIncome = Number.parseInt(formData.get("monthlyIncome") as string)
  const employmentStatus = formData.get("employmentStatus") as string
  const idNumber = formData.get("idNumber") as string
  const address = formData.get("address") as string
  const references = formData.get("references") as string

  if (
    !fullName ||
    !phone ||
    !email ||
    !motorcycleType ||
    !monthlyIncome ||
    !employmentStatus ||
    !idNumber ||
    !address
  ) {
    return { success: false, message: "Please fill in all required fields" }
  }

  // Check if Supabase is configured
  if (!isSupabaseConfigured() || !supabase) {
    console.log("Demo mode: Motorcycle application", {
      fullName,
      phone,
      email,
      motorcycleType,
      monthlyIncome,
      employmentStatus,
    })
    return {
      success: true,
      message: "Demo mode: Application submitted successfully! (Database not connected yet)",
    }
  }

  try {
    const { error } = await supabase.from("motorcycle_applications").insert([
      {
        full_name: fullName,
        phone: phone,
        email: email,
        motorcycle_type: motorcycleType,
        monthly_income: monthlyIncome,
        employment_status: employmentStatus,
        id_number: idNumber,
        address: address,
        references: references,
        status: "pending",
      },
    ])

    if (error) {
      console.error("Supabase error:", error)
      return { success: false, message: "Failed to submit application. Please try again." }
    }

    return { success: true, message: "Application submitted successfully! We'll review it within 24-48 hours." }
  } catch (error) {
    console.error("Error:", error)
    return { success: false, message: "Something went wrong. Please try again." }
  }
}
