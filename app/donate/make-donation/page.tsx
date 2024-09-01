import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { GraduationCap, User, Mail, Phone, CreditCard, IndianRupee, Gift, Heart, BookOpen, Home, Users, Lightbulb } from 'lucide-react'

export default function DonationForm() {
  const donationAreas = [
    { icon: BookOpen, label: "Scholarships", description: "Support students in need" },
    { icon: Lightbulb, label: "Research", description: "Fund innovative projects" },
    { icon: Home, label: "Infrastructure", description: "Improve campus facilities" },
    { icon: Users, label: "Alumni Programs", description: "Enhance alumni engagement" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-red-700 text-white shadow-md">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center space-x-2">
              <GraduationCap size={32} />
              <span className="text-2xl font-bold">Alumni Association</span>
            </Link>
            <ul className="flex space-x-4">
              <li><Link href="#" className="hover:underline">Home</Link></li>
              <li><Link href="#" className="hover:underline">Events</Link></li>
              <li><Link href="#" className="font-semibold">Donate</Link></li>
              <li><Link href="#" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-red-700">Make a Donation</CardTitle>
            <CardDescription className="text-center">Your support helps shape the future of our university</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700">Your Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <div className="relative">
                      <User className="absolute left-2 top-2.5 h-5 w-5 text-gray-500" />
                      <Input id="fullName" placeholder="John Doe" className="pl-9" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <div className="relative">
                      <Mail className="absolute left-2 top-2.5 h-5 w-5 text-gray-500" />
                      <Input id="email" type="email" placeholder="johndoe@example.com" className="pl-9" required />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-2 top-2.5 h-5 w-5 text-gray-500" />
                      <Input id="phone" type="tel" placeholder="+91 98765 43210" className="pl-9" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="graduationYear">Graduation Year</Label>
                    <Select>
                      <SelectTrigger id="graduationYear">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        {[...Array(50)].map((_, i) => (
                          <SelectItem key={i} value={(new Date().getFullYear() - i).toString()}>
                            {new Date().getFullYear() - i}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700">Donation Details</h3>
                <div className="space-y-2">
                  <Label>Donation Amount (₹) *</Label>
                  <RadioGroup defaultValue="1000" className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1000, 5000, 10000, 25000].map((amount) => (
                      <div key={amount} className="flex items-center space-x-2">
                        <RadioGroupItem value={amount.toString()} id={`amount-${amount}`} />
                        <Label htmlFor={`amount-${amount}`}>₹{amount.toLocaleString()}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                  <div className="relative mt-2">
                    <IndianRupee className="absolute left-2 top-2.5 h-5 w-5 text-gray-500" />
                    <Input placeholder="Other amount" className="pl-9" />
                  </div>
                </div>
                {/* <div className="space-y-2">
                  <Label>Donation Frequency</Label>
                  <RadioGroup defaultValue="oneTime">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="oneTime" id="oneTime" />
                      <Label htmlFor="oneTime">One-time</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="monthly" id="monthly" />
                      <Label htmlFor="monthly">Monthly</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="annually" id="annually" />
                      <Label htmlFor="annually">Annually</Label>
                    </div>
                  </RadioGroup>
                </div> */}
                <div className="space-y-2">
                  <Label>Donation Areas</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {donationAreas.map((area) => (
                      <Card key={area.label} className="flex items-center space-x-4 p-4">
                        <Checkbox id={area.label.toLowerCase()} />
                        <Label htmlFor={area.label.toLowerCase()} className="flex items-center space-x-2 cursor-pointer">
                          <area.icon className="h-5 w-5 text-red-700" />
                          <div>
                            <p className="font-semibold">{area.label}</p>
                            <p className="text-sm text-gray-500">{area.description}</p>
                          </div>
                        </Label>
                      </Card>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Personal Message (Optional)</Label>
                  <Textarea id="message" placeholder="Share why you're making this donation..." className="min-h-[100px]" />
                </div>
              </div>

              {/* <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700">Payment Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardName">Name on Card *</Label>
                    <Input id="cardName" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number *</Label>
                    <div className="relative">
                      <CreditCard className="absolute left-2 top-2.5 h-5 w-5 text-gray-500" />
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="pl-9" required />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="space-y-2 col-span-1">
                    <Label htmlFor="expiryMonth">Expiry Month *</Label>
                    <Select required>
                      <SelectTrigger id="expiryMonth">
                        <SelectValue placeholder="MM" />
                      </SelectTrigger>
                      <SelectContent>
                        {[...Array(12)].map((_, i) => (
                          <SelectItem key={i} value={(i + 1).toString().padStart(2, '0')}>
                            {(i + 1).toString().padStart(2, '0')}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 col-span-1">
                    <Label htmlFor="expiryYear">Expiry Year *</Label>
                    <Select required>
                      <SelectTrigger id="expiryYear">
                        <SelectValue placeholder="YYYY" />
                      </SelectTrigger>
                      <SelectContent>
                        {[...Array(10)].map((_, i) => (
                          <SelectItem key={i} value={(new Date().getFullYear() + i).toString()}>
                            {new Date().getFullYear() + i}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 col-span-2">
                    <Label htmlFor="cvv">CVV *</Label>
                    <Input id="cvv" type="password" placeholder="123" maxLength={4} required />
                  </div>
                </div>
              </div> */}

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" required />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the terms and conditions and privacy policy
                </Label>
              </div>

              <div className="flex justify-end">
                <Button className="bg-red-700 text-white hover:bg-red-800">
                  <Heart className="mr-2 h-4 w-4" /> Make Donation
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-red-700 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} University Alumni Association. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}