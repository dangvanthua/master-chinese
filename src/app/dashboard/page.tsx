"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Mic, Award, Clock, Calendar } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              Daily Streak: 7
            </Button>
            <Button variant="outline" size="sm">
              <Award className="mr-2 h-4 w-4" />
              Level: Intermediate
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container grid items-start gap-6 py-8 px-4">
          {/* Overview Section */}
          <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              icon={<BookOpen className="h-5 w-5 text-red-500" />}
              title="Lessons Completed"
              value="24"
              description="+3 this week"
            />
            <StatsCard
              icon={<Clock className="h-5 w-5 text-red-500" />}
              title="Learning Time"
              value="32h 15m"
              description="+5h 20m this week"
            />
            <StatsCard
              icon={<Mic className="h-5 w-5 text-red-500" />}
              title="Pronunciation Score"
              value="87%"
              description="+2% improvement"
            />
            <StatsCard
              icon={<Award className="h-5 w-5 text-red-500" />}
              title="Achievements"
              value="12"
              description="2 new unlocked"
            />
          </section>

          {/* Learning Progress */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle>Learning Progress</CardTitle>
                <CardDescription>Track your progress across different skills</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ProgressItem label="Reading" value={75} description="Advanced Beginner" />
                  <ProgressItem label="Writing" value={60} description="Intermediate" />
                  <ProgressItem label="Listening" value={82} description="Upper Intermediate" />
                  <ProgressItem label="Speaking" value={68} description="Intermediate" />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Learning Content Tabs */}
          <section>
            <Tabs defaultValue="continue">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="continue">Continue Learning</TabsTrigger>
                <TabsTrigger value="recommended">Recommended</TabsTrigger>
                <TabsTrigger value="practice">Practice</TabsTrigger>
              </TabsList>
              <TabsContent value="continue" className="mt-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <LessonCard
                    title="Business Chinese"
                    description="Learn vocabulary for professional settings"
                    progress={45}
                    level="Intermediate"
                    duration="20 min"
                  />
                  <LessonCard
                    title="Tone Practice"
                    description="Master the four tones with audio exercises"
                    progress={68}
                    level="All Levels"
                    duration="15 min"
                  />
                  <LessonCard
                    title="Character Writing"
                    description="Practice writing common characters"
                    progress={30}
                    level="Beginner"
                    duration="25 min"
                  />
                </div>
              </TabsContent>
              <TabsContent value="recommended" className="mt-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <LessonCard
                    title="Travel Phrases"
                    description="Essential phrases for your next trip"
                    progress={0}
                    level="Intermediate"
                    duration="30 min"
                  />
                  <LessonCard
                    title="Food Vocabulary"
                    description="Learn to order and discuss Chinese cuisine"
                    progress={0}
                    level="Beginner"
                    duration="25 min"
                  />
                  <LessonCard
                    title="News Reading"
                    description="Practice with simplified news articles"
                    progress={0}
                    level="Advanced"
                    duration="40 min"
                  />
                </div>
              </TabsContent>
              <TabsContent value="practice" className="mt-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <LessonCard
                    title="Flashcard Review"
                    description="Review vocabulary with spaced repetition"
                    progress={0}
                    level="All Levels"
                    duration="10 min"
                  />
                  <LessonCard
                    title="Listening Comprehension"
                    description="Practice with native speaker dialogues"
                    progress={0}
                    level="Intermediate"
                    duration="20 min"
                  />
                  <LessonCard
                    title="Grammar Quiz"
                    description="Test your understanding of key grammar points"
                    progress={0}
                    level="Beginner"
                    duration="15 min"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </section>
        </div>
      </main>
    </div>
  )
}

function StatsCard({ icon, title, value, description }: any) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

function ProgressItem({ label, value, description }: any) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="font-medium">{label}</div>
        <div className="text-sm text-muted-foreground">{description}</div>
      </div>
      <Progress value={value} className="h-2" />
      <div className="text-xs text-right text-muted-foreground">{value}%</div>
    </div>
  )
}

function LessonCard({ title, description, progress, level, duration }: any) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video bg-muted relative">
        {progress > 0 && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs px-2 py-1">
            {progress}% complete
          </div>
        )}
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <CardDescription>{description}</CardDescription>
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{level}</span>
          <span>{duration}</span>
        </div>
        <Button className="w-full">{progress > 0 ? "Continue" : "Start"} Lesson</Button>
      </CardContent>
    </Card>
  )
}

