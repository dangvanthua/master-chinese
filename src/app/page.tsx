"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Mic, BarChart2, Users, Globe, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-amber-500 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="absolute text-white text-opacity-20 animate-float"
                style={{
                  fontSize: `${Math.random() * 4 + 1}rem`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDuration: `${Math.random() * 10 + 15}s`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              >
                {["你", "好", "学", "中", "文", "汉", "语", "字", "说", "写"][Math.floor(Math.random() * 10)]}
              </div>
            ))}
          </div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2 max-w-3xl mx-auto">
              <div className="inline-block animate-bounce-slow">
                <span className="text-lg md:text-xl bg-white bg-opacity-20 px-4 py-1 rounded-full text-white font-medium">
                  全新的学习体验 • New Learning Experience
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none lg:text-7xl text-white drop-shadow-md">
                <span className="block">掌握中文</span>
                <span className="block mt-2">Master Chinese Language</span>
              </h1>
              <p className="mx-auto max-w-[800px] text-white md:text-xl lg:text-2xl mt-6 drop-shadow">
                Interactive lessons, real-time speech recognition, and a supportive community to help you become fluent
                in Chinese.
              </p>
            </div>
            <div className="space-x-4 mt-8">
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105"
              >
                开始学习 Start Free
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/20 text-lg px-8 py-6 rounded-full"
              >
                了解更多 Learn More
              </Button>
            </div>

            {/* Floating cards */}
            <div className="w-full max-w-5xl mx-auto mt-16 relative h-[300px] hidden md:block">
              <div className="absolute left-0 top-0 w-64 animate-float" style={{ animationDelay: "0s" }}>
                <Card className="bg-white/90 backdrop-blur border-0 shadow-xl">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                        <Mic className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Speech Recognition</h3>
                        <p className="text-sm text-muted-foreground">Perfect your pronunciation</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="absolute right-0 top-10 w-64 animate-float" style={{ animationDelay: "1s" }}>
                <Card className="bg-white/90 backdrop-blur border-0 shadow-xl">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                        <BookOpen className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Interactive Lessons</h3>
                        <p className="text-sm text-muted-foreground">Learn at your own pace</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="absolute left-1/4 bottom-0 w-64 animate-float" style={{ animationDelay: "0.5s" }}>
                <Card className="bg-white/90 backdrop-blur border-0 shadow-xl">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <Users className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Community Support</h3>
                        <p className="text-sm text-muted-foreground">Learn with others</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="absolute right-1/4 bottom-20 w-64 animate-float" style={{ animationDelay: "1.5s" }}>
                <Card className="bg-white/90 backdrop-blur border-0 shadow-xl">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <BarChart2 className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Progress Tracking</h3>
                        <p className="text-sm text-muted-foreground">Monitor your growth</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Features Section with Chinese design elements */}
      <section className="w-full py-16 md:py-24 relative">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full text-red-600">
            <path fill="currentColor" d="M50,0 L100,50 L50,100 L0,50 Z" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-48 h-48 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full text-amber-600">
            <circle cx="50" cy="50" r="50" fill="currentColor" />
          </svg>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-block">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                  核心功能 • Key Features
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary relative inline-block">
                <span className="relative z-10">Everything You Need</span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-red-100 z-0"></span>
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
                Our comprehensive platform provides all the tools you need to master Chinese effectively
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <FeatureCard
              icon={<BookOpen className="h-10 w-10 text-red-500" />}
              title="Interactive Lessons"
              description="Engaging multimedia content with progressive difficulty levels designed to keep you motivated"
              color="red"
              number="01"
            />
            <FeatureCard
              icon={<Mic className="h-10 w-10 text-amber-500" />}
              title="Speech Recognition"
              description="Real-time pronunciation feedback with tone analysis to perfect your speaking skills"
              color="amber"
              number="02"
            />
            <FeatureCard
              icon={<BarChart2 className="h-10 w-10 text-green-500" />}
              title="Progress Tracking"
              description="Detailed analytics and personalized learning paths to optimize your study time"
              color="green"
              number="03"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <FeatureCard
              icon={<Users className="h-10 w-10 text-blue-500" />}
              title="Community"
              description="Connect with fellow learners and native speakers to practice in a supportive environment"
              color="blue"
              number="04"
            />
            <FeatureCard
              icon={<Globe className="h-10 w-10 text-purple-500" />}
              title="Cultural Context"
              description="Learn language within authentic cultural frameworks to truly understand Chinese"
              color="purple"
              number="05"
            />
          </div>

          <div className="flex justify-center mt-16">
            <Link
              href="/features"
              className="group inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors"
            >
              <span>Explore all features</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Path Preview with Chinese paper cut style */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-red-50 relative">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -right-24 top-0 w-96 h-96">
            <svg viewBox="0 0 100 100" className="w-full h-full text-red-600">
              <path
                fill="currentColor"
                d="M50,0 C77.6,0 100,22.4 100,50 C100,77.6 77.6,100 50,100 C22.4,100 0,77.6 0,50 C0,22.4 22.4,0 50,0 Z M50,20 C33.4,20 20,33.4 20,50 C20,66.6 33.4,80 50,80 C66.6,80 80,66.6 80,50 C80,33.4 66.6,20 50,20 Z"
              />
            </svg>
          </div>
          <div className="absolute -left-24 bottom-0 w-96 h-96">
            <svg viewBox="0 0 100 100" className="w-full h-full text-amber-600">
              <path fill="currentColor" d="M0,0 L100,0 L100,100 L0,100 Z M20,20 L20,80 L80,80 L80,20 Z" />
            </svg>
          </div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
                  学习之旅 • Learning Journey
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary relative inline-block">
                <span className="relative z-10">Your Path to Fluency</span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-amber-100 z-0"></span>
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
                From beginner to fluent, we guide you every step of the way with a structured approach
              </p>
            </div>
          </div>

          <div className="mt-16 relative">
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-red-200 transform -translate-x-1/2 z-0"></div>
            <div className="grid grid-cols-1 gap-16 relative z-10">
              <LearningPathStep
                number="1"
                title="基础 Foundation"
                description="Master basic characters, pronunciation, and everyday phrases to build a solid foundation"
                position="left"
                color="red"
                icon="你"
              />
              <LearningPathStep
                number="2"
                title="会话 Conversation"
                description="Build vocabulary and practice real-world dialogues to gain confidence in speaking"
                position="right"
                color="amber"
                icon="说"
              />
              <LearningPathStep
                number="3"
                title="沉浸 Immersion"
                description="Engage with authentic content and cultural contexts to deepen your understanding"
                position="left"
                color="green"
                icon="读"
              />
              <LearningPathStep
                number="4"
                title="流利 Fluency"
                description="Refine your skills and express yourself confidently in any situation"
                position="right"
                color="blue"
                icon="写"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  学生反馈 • Testimonials
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary relative inline-block">
                <span className="relative z-10">Success Stories</span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-green-100 z-0"></span>
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
                Hear from our students who have transformed their Chinese language skills
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <TestimonialCard
              quote="After just 3 months, I was able to have basic conversations with my Chinese colleagues. The speech recognition feature was a game-changer!"
              name="Sarah Johnson"
              title="Marketing Executive"
              image="/placeholder.svg?height=80&width=80"
            />
            <TestimonialCard
              quote="The cultural context provided alongside language lessons helped me understand not just the words, but the meaning behind them."
              name="David Chen"
              title="Graduate Student"
              image="/placeholder.svg?height=80&width=80"
            />
            <TestimonialCard
              quote="I tried many apps before, but this platform's structured approach and community support made all the difference in my learning journey."
              name="Maria Rodriguez"
              title="Software Engineer"
              image="/placeholder.svg?height=80&width=80"
            />
          </div>
        </div>
      </section>

      {/* Call to Action with Chinese paper cut style */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-red-600 to-amber-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full text-white">
              <circle cx="50" cy="50" r="50" fill="currentColor" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-96 h-96 opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full text-white">
              <path fill="currentColor" d="M0,100 L100,0 L100,100 Z" />
            </svg>
          </div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center max-w-3xl mx-auto">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl drop-shadow-md">
                开始您的中文学习之旅
              </h2>
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl drop-shadow-md">
                Start Your Chinese Learning Journey Today
              </h3>
              <p className="mx-auto max-w-[700px] md:text-xl mt-6">
                Join thousands of learners mastering Chinese with our proven methodology and supportive community
              </p>
            </div>
            <div className="space-x-4 mt-8">
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105"
              >
                立即注册 Sign Up Free
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/20 text-lg px-8 py-6 rounded-full"
              >
                查看课程 View Courses
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description, color, number }: any) {
  const colorClasses: any = {
    red: "bg-red-50 border-red-100 hover:border-red-200",
    amber: "bg-amber-50 border-amber-100 hover:border-amber-200",
    green: "bg-green-50 border-green-100 hover:border-green-200",
    blue: "bg-blue-50 border-blue-100 hover:border-blue-200",
    purple: "bg-purple-50 border-purple-100 hover:border-purple-200",
  }

  return (
    <Card className={cn("h-full transition-all duration-300 hover:shadow-md", colorClasses[color])}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex justify-center mb-2">{icon}</div>
          <span className="text-3xl font-bold text-muted-foreground opacity-20">{number}</span>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

function LearningPathStep({ number, title, description, position, color, icon }: any) {
  const colorClasses: any = {
    red: "bg-red-500",
    amber: "bg-amber-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
  }

  const iconColorClasses: any = {
    red: "bg-red-50 text-red-500",
    amber: "bg-amber-50 text-amber-500",
    green: "bg-green-50 text-green-500",
    blue: "bg-blue-50 text-blue-500",
  }

  return (
    <div className={`flex ${position === "left" ? "justify-end md:justify-start" : "justify-end"} relative`}>
      <div className="w-full md:w-1/2 flex items-center">
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 z-20 
                        w-12 h-12 rounded-full ${colorClasses[color]} text-white flex items-center justify-center font-bold`}
        >
          {number}
        </div>
        <Card
          className={`w-full ${position === "left" ? "mr-6 md:mr-0" : "ml-6 md:ml-0"} 
                         transition-all duration-300 hover:shadow-lg border-2 hover:border-${color}-200`}
        >
          <CardHeader className="pb-2">
            <div className="flex items-center space-x-3">
              <div
                className={`w-12 h-12 rounded-full ${iconColorClasses[color]} flex items-center justify-center text-xl font-bold`}
              >
                {icon}
              </div>
              <CardTitle>{title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p>{description}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function TestimonialCard({ quote, name, title, image }: any) {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-md bg-gray-50 border-gray-100 hover:border-gray-200">
      <CardContent className="p-6">
        <div className="mb-4">
          <svg className="h-8 w-8 text-red-400" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
        </div>
        <p className="text-lg mb-6">{quote}</p>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="font-medium">{name}</h4>
            <p className="text-sm text-muted-foreground">{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

