import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { GraduationCap, BookOpen, Home, Coffee, Laptop, BriefcaseMedical, ChevronRight } from 'lucide-react'

export default function DonationPage() {
  const currentRequirements = [
    { 
      id: 'beds', 
      label: 'New Beds for Hostels', 
      icon: Home,
      description: 'Upgrade dormitory accommodations with modern, comfortable beds for students.',
      budget: '$50,000',
      quantity: '200 beds'
    },
    { 
      id: 'computers', 
      label: 'Computer Lab Upgrade', 
      icon: Laptop,
      description: 'Equip our computer labs with the latest technology to enhance learning experiences.',
      budget: '$75,000',
      quantity: '50 high-performance computers'
    },
    { 
      id: 'cafeteria', 
      label: 'Cafeteria Renovation', 
      icon: Coffee,
      description: 'Modernize our cafeteria to provide a better dining experience for students and staff.',
      budget: '$100,000',
      quantity: 'Complete renovation'
    },
  ]

  const donationAreas = [
    { 
      title: 'Student Aid Fund', 
      description: 'Support students facing financial hardships to continue their education.',
      icon: BookOpen,
      image: "https://plus.unsplash.com/premium_photo-1679515470684-1f6af2858b67?w=500&h=300&fit=crop"
    },
    { 
      title: 'Emergency Fund', 
      description: 'Help the university respond quickly to unexpected challenges and crises.',
      icon: BriefcaseMedical,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=300&fit=crop"
    },
    { 
      title: 'Research Grants', 
      description: 'Fuel groundbreaking research across various disciplines.',
      icon: Laptop,
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&h=300&fit=crop"
    },
    { 
      title: 'Campus Improvement', 
      description: 'Enhance facilities and create a better learning environment for students.',
      icon: Home,
      image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=500&h=300&fit=crop"
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
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

      <main className="flex-grow">
        <section className="py-12 bg-gray-100 relative">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&h=400&fit=crop"
            alt="University campus"
            width={1600}
            height={400}
            className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
          />
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl font-bold text-red-700 mb-6 text-center">Gurudakshina: Our Donation Program</h1>
            <p className="text-lg text-center max-w-3xl mx-auto mb-8">
              Gurudakshina is our way of giving back to the institution that has shaped our lives and careers. 
              Your generous contributions help us maintain excellence in education, support students in need, 
              and continually improve our campus facilities.
            </p>
            <div className="text-center">
              <Button className="bg-red-700 text-white hover:bg-red-800 text-lg py-2 px-6">
                <Link href={'/donate/make-donation'}>Make a General Donation</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-red-700 mb-6 text-center">Current University Requirements</h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-8">
              Select specific items you'd like to donate to directly support our university's immediate needs:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {currentRequirements.map((item) => (
                <Card key={item.id} className="flex justify-between flex-col">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <item.icon className="h-6 w-6 text-red-700" />
                      <span>{item.label}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2">{item.description}</p>
                    <p className="font-semibold">Budget: {item.budget}</p>
                    <p className="font-semibold">Quantity: {item.quantity}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                   
                    <Link href={`/donate/${item.id}`}>
                      <Button variant="outline" className="text-red-700 border-red-700 hover:bg-red-50">
                        More Details
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          
          </div>
        </section>

        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-red-700 mb-6 text-center">Areas You Can Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {donationAreas.map((area, index) => (
                <Card key={index} className="flex flex-col h-full overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <area.icon className="h-6 w-6 text-red-700" />
                      <span>{area.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-red-700 text-white relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&h=400&fit=crop"
            alt="Graduation ceremony"
            width={1600}
            height={400}
            className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
          />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl font-bold mb-6">Every Contribution Matters</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Whether big or small, your donation makes a significant impact on the lives of our students and the future of our university.
            </p>
            <Button className="bg-white text-red-700 hover:bg-gray-100 text-lg py-2 px-6">
             <Link href={'/donate/make-donation'

             }> Make Your Donation Now</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-red-700 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">About Gurudakshina</Link></li>
                <li><Link href="#" className="hover:underline">Donation FAQ</Link></li>
                <li><Link href="#" className="hover:underline">Tax Benefits</Link></li>
                <li><Link href="#" className="hover:underline">Contact Development Office</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>Development Office</p>
              <p>123 University Ave</p>
              <p>Collegetown, ST 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: donate@university.edu</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-red-200">Facebook</Link>
                <Link href="#" className="hover:text-red-200">Twitter</Link>
                <Link href="#" className="hover:text-red-200">LinkedIn</Link>
                <Link href="#" className="hover:text-red-200">Instagram</Link>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; {new Date().getFullYear()} University Alumni Association. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}