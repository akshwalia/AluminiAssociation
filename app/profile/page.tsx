import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { GraduationCap, Briefcase, Mail, Phone, MapPin, Linkedin, Github, Globe, Edit, Calendar, BookOpen, Award, Gift, Users, Settings } from 'lucide-react'

export default function AlumniProfilePage() {
  const alumniData = {
    name: "Priya Sharma",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&auto=format",
    tagline: "Software Engineer | AI Enthusiast | Class of 2018",
    email: "priya.sharma@email.com",
    phone: "+91 98765 43210",
    location: "Bangalore, India",
    linkedin: "https://www.linkedin.com/in/priyasharma",
    github: "https://github.com/priyasharma",
    website: "https://priyasharma.com",
    bio: "Passionate software engineer with 5 years of experience in AI and machine learning. Always eager to learn and contribute to cutting-edge technologies.",
    education: [
      { degree: "B.Tech in Computer Science", institution: "Indian Institute of Technology, Delhi", year: "2014 - 2018" },
      { degree: "M.S. in Artificial Intelligence", institution: "Stanford University", year: "2019 - 2021" }
    ],
    experience: [
      { title: "Senior Software Engineer", company: "TechCorp India", duration: "2021 - Present" },
      { title: "Machine Learning Engineer", company: "AI Innovations", duration: "2018 - 2021" }
    ],
    skills: ["Python", "TensorFlow", "PyTorch", "Java", "React", "Node.js", "SQL", "Git"],
    achievements: [
      "Published 3 research papers in top AI conferences",
      "Awarded 'Best Graduate Thesis' at Stanford University",
      "Winner of National Coding Championship 2017"
    ],
    volunteerWork: [
      { role: "Mentor", organization: "Women in Tech India", duration: "2019 - Present" },
      { role: "Code Instructor", organization: "CoderDojo Bangalore", duration: "2018 - 2020" }
    ]
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-red-700 text-white shadow-md">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center space-x-2">
              <GraduationCap size={32} />
              <span className="text-2xl font-bold">Alumni Association</span>
            </Link>
            <ul className="flex space-x-4 items-center">
              <li><Link href="#" className="hover:underline">Home</Link></li>
              <li><Link href="#" className="hover:underline">Events</Link></li>
              <li><Link href="#" className="hover:underline">Jobs</Link></li>
              <li><Link href="#" className="font-semibold">Profile</Link></li>
              <li>
                <Button variant="ghost" size="icon" className="text-white hover:bg-red-600">
                  <Settings size={20} />
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <img
                src={alumniData.image}
                alt={alumniData.name}
                width={200}
                height={200}
                className="rounded-full"
              />
              <div className="flex-grow text-center md:text-left">
                <h1 className="text-3xl font-bold mb-2">{alumniData.name}</h1>
                <p className="text-gray-600 mb-4">{alumniData.tagline}</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Mail size={16} />
                    {alumniData.email}
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Phone size={16} />
                    {alumniData.phone}
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <MapPin size={16} />
                    {alumniData.location}
                  </Badge>
                </div>
                <div className="flex justify-center md:justify-start gap-4">
                  <Link href={alumniData.linkedin} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Linkedin size={20} />
                    </Button>
                  </Link>
                  <Link href={alumniData.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Github size={20} />
                    </Button>
                  </Link>
                  <Link href={alumniData.website} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Globe size={20} />
                    </Button>
                  </Link>
                  <Button variant="outline" size="icon">
                    <Edit size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="about" className="space-y-4">
          <TabsList>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{alumniData.bio}</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="education">
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {alumniData.education.map((edu, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <BookOpen size={24} className="text-red-700 mt-1" />
                      <div>
                        <h3 className="font-semibold">{edu.degree}</h3>
                        <p className="text-gray-600">{edu.institution}</p>
                        <p className="text-sm text-gray-500">{edu.year}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="experience">
            <Card>
              <CardHeader>
                <CardTitle>Work Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {alumniData.experience.map((exp, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <Briefcase size={24} className="text-red-700 mt-1" />
                      <div>
                        <h3 className="font-semibold">{exp.title}</h3>
                        <p className="text-gray-600">{exp.company}</p>
                        <p className="text-sm text-gray-500">{exp.duration}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {alumniData.skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span>{skill}</span>
                        <span className="text-gray-500">{Math.floor(Math.random() * 41) + 60}%</span>
                      </div>
                      <Progress value={Math.floor(Math.random() * 41) + 60} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="achievements">
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {alumniData.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <Award size={24} className="text-red-700 mt-1" />
                      <p>{achievement}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gift size={24} className="text-red-700" />
                Volunteer Work
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {alumniData.volunteerWork.map((work, index) => (
                  <li key={index}>
                    <h3 className="font-semibold">{work.role}</h3>
                    <p className="text-gray-600">{work.organization}</p>
                    <p className="text-sm text-gray-500">{work.duration}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users size={24} className="text-red-700" />
                Alumni Network
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Stay connected with your fellow alumni and expand your professional network.</p>
              <Button className="w-full bg-red-700 text-white hover:bg-red-800">Connect with Alumni</Button>
            </CardContent>
          </Card>
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