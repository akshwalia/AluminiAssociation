'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, GraduationCap, Calendar, Users, Heart, BookOpen } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const carouselItems = [
    { image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=400&fit=crop", alt: "University Campus", caption: "Our Beautiful Campus" },
    { image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=400&fit=crop", alt: "Alumni Event", caption: "Annual Alumni Gathering" },
    { image: "https://images.unsplash.com/photo-1620458738323-4148c6093433?w=800&h=400&fit=crop", alt: "Graduation Ceremony", caption: "Celebrating Our Graduates" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + carouselItems.length) % carouselItems.length)
  }

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
              <li><Link href="#" className="hover:underline">Donate</Link></li>
              <li><Link href="#" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section>
        <Carousel className=" mx-auto  ">
      <CarouselContent>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="w-full p-6">
                 {
                    <div>
                      <img src={item.image} className='h-[500px] object-cover w-full ' alt={item.alt} />
                      <div className=" bg-black bg-opacity-50 text-white p-4">
                   <p className="text-xl font-semibold">{item.caption}</p>
                     </div>
                    </div>
                 }
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
     
    </Carousel>
        </section>

        <section className=" bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-red-700 mb-6 text-center">Welcome, Alumni!</h2>
            <p className="text-lg text-center max-w-2xl mx-auto mb-8">
              Stay connected with your alma mater and fellow graduates. Explore upcoming events, 
              opportunities to give back, and ways to engage with our vibrant alumni community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { icon: Calendar, title: "Events", description: "Join us for exciting alumni gatherings" },
                { icon: Users, title: "Network", description: "Connect with fellow alumni" },
                { icon: Heart, title: "Give Back", description: "Support the next generation" },
                { icon: BookOpen, title: "Learn", description: "Access lifelong learning opportunities" },
              ].map((item, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <item.icon className="h-12 w-12 mx-auto mb-4 text-red-700" />
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-red-700 mb-6 text-center">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Homecoming Weekend", date: "October 15-17, 2023", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop" },
                { title: "Alumni Career Fair", date: "November 5, 2023", image: "https://images.unsplash.com/photo-1560523160-754a9e25c68f?w=300&h=200&fit=crop" },
                { title: "Annual Gala Dinner", date: "December 3, 2023", image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&h=200&fit=crop" },
              ].map((event, index) => (
                <Card key={index} className="overflow-hidden">
                  <img src={event.image} alt={event.title} width={300} height={200} className="w-full" />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.date}</p>
                    <Button className="mt-4 bg-red-700 text-white hover:bg-red-800">Learn More</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-red-700 mb-6 text-center">Notable Alumni</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { name: "Jane Doe", achievement: "CEO of Tech Giant", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop" },
                { name: "John Smith", achievement: "Nobel Prize Winner", image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&h=150&fit=crop" },
                { name: "Emily Brown", achievement: "Renowned Author", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop" },
                { name: "Michael Lee", achievement: "Olympic Gold Medalist", image: "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=150&h=150&fit=crop" },
              ].map((alumni, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-4">
                    <img src={alumni.image} alt={alumni.name} width={150} height={150} className="rounded-full mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{alumni.name}</h3>
                    <p className="text-gray-600">{alumni.achievement}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-red-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Give Back to Your Alma Mater</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Your support helps us provide scholarships, improve facilities, and enhance the educational experience for current students.
            </p>
            <Button className="bg-white text-red-700 hover:bg-gray-100 text-lg py-2 px-6">
              <Link href={'/donate'}>
              Donate Now</Link>
            </Button>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-red-700 mb-6 text-center">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "New Research Center Opens", excerpt: "State-of-the-art facility to advance scientific research", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=300&h=200&fit=crop" },
                { title: "Alumni Mentorship Program Launches", excerpt: "Connect with current students and share your expertise", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=200&fit=crop" },
                { title: "University Ranks in Top 10", excerpt: "Recognized for excellence in education and research", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=200&fit=crop" },
              ].map((news, index) => (
                <Card key={index} className="overflow-hidden">
                  <img src={news.image} alt={news.title} width={300} height={200} className="w-full" />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
                    <p className="text-gray-600 mb-4">{news.excerpt}</p>
                    <Link href="#" className="text-red-700 hover:underline">Read more</Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-red-700 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">About Us</Link></li>
                <li><Link href="#" className="hover:underline">News & Updates</Link></li>
                <li><Link href="#" className="hover:underline">Career Services</Link></li>
                <li><Link href="#" className="hover:underline">Alumni Directory</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>123 University Ave</p>
              <p>Collegetown, ST 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: alumni@university.edu</p>
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