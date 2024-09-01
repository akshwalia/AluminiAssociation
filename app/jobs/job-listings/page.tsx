import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Briefcase, IndianRupee, MapPin, Search, Calendar, BookOpen, Clock } from 'lucide-react'

// Mock data for job listings
const jobListings = [
  { id: 1, title: "Software Engineer", company: "TechCorp India", location: "Bangalore", salary: "₹15,00,000 - ₹25,00,000", jobType: "Full-time", experienceLevel: "Intermediate", educationLevel: "Bachelor's Degree", postedDate: "2023-06-15" },
  { id: 2, title: "Data Analyst", company: "Analytics Pro", location: "Mumbai", salary: "₹8,00,000 - ₹12,00,000", jobType: "Full-time", experienceLevel: "Entry Level", educationLevel: "Bachelor's Degree", postedDate: "2023-06-14" },
  { id: 3, title: "Product Manager", company: "InnovateNow", location: "Delhi", salary: "₹20,00,000 - ₹30,00,000", jobType: "Full-time", experienceLevel: "Senior", educationLevel: "Master's Degree", postedDate: "2023-06-13" },
  { id: 4, title: "Marketing Specialist", company: "BrandBuilders", location: "Hyderabad", salary: "₹6,00,000 - ₹10,00,000", jobType: "Full-time", experienceLevel: "Intermediate", educationLevel: "Bachelor's Degree", postedDate: "2023-06-12" },
  { id: 5, title: "UX Designer", company: "DesignMasters", location: "Pune", salary: "₹12,00,000 - ₹18,00,000", jobType: "Full-time", experienceLevel: "Intermediate", educationLevel: "Bachelor's Degree", postedDate: "2023-06-11" },
  { id: 6, title: "DevOps Engineer", company: "CloudTech Solutions", location: "Chennai", salary: "₹18,00,000 - ₹28,00,000", jobType: "Full-time", experienceLevel: "Senior", educationLevel: "Bachelor's Degree", postedDate: "2023-06-10" },
]

export default function JobListingPage() {
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
              <li><Link href="#" className="hover:underline">Donate</Link></li>
              <li><Link href="#" className="font-semibold">Jobs</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-red-700 mb-8">Job Listings</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Section */}
          <aside className="w-full lg:w-1/4 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="search">Search</Label>
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                    <Input id="search" placeholder="Job title or company" className="pl-8" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="jobType">Job Type</Label>
                  <Select>
                    <SelectTrigger id="jobType">
                      <SelectValue placeholder="Select job type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fullTime">Full-time</SelectItem>
                      <SelectItem value="partTime">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="internship">Internship</SelectItem>
                      <SelectItem value="intern">Intern</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experienceLevel">Experience Level</Label>
                  <Select>
                    <SelectTrigger id="experienceLevel">
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entry">Entry Level</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="senior">Senior</SelectItem>
                      <SelectItem value="executive">Executive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="educationLevel">Education Level</Label>
                  <Select>
                    <SelectTrigger id="educationLevel">
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="highSchool">High School</SelectItem>
                      <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                      <SelectItem value="master">Master's Degree</SelectItem>
                      <SelectItem value="phd">Ph.D.</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Salary Range (in ₹ Lakhs)</Label>
                  <Slider defaultValue={[5, 50]} min={0} max={100} step={1} />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>₹0L</span>
                    <span>₹50L</span>
                    <span>₹1Cr+</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-red-700 text-white hover:bg-red-800">Apply Filters</Button>
              </CardFooter>
            </Card>
          </aside>

          {/* Job Listings */}
          <section className="w-full lg:w-3/4 space-y-6">
            {jobListings.map(job => (
              <Card key={job.id} className="overflow-hidden">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-1">{job.title}</CardTitle>
                      <p className="text-gray-600">{job.company}</p>
                    </div>
                    <Badge variant="outline" className="bg-red-50 text-red-700 border-red-300">
                      {job.jobType}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <IndianRupee className="h-4 w-4 mr-2 text-gray-500" />
                      {job.salary}
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-2 text-gray-500" />
                      {job.experienceLevel}
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-2 text-gray-500" />
                      {job.educationLevel}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    Posted on {new Date(job.postedDate).toLocaleDateString()}
                  </div>
                  <Button variant="outline" className="text-red-700 border-red-700 hover:bg-red-50">View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </section>
        </div>
      </main>

      <footer className="bg-red-700 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} University Alumni Association. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}