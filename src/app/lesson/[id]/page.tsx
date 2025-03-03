"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight, Volume2, Mic, Check, X } from "lucide-react"

interface LessonPageProps {
  params: {
    id: string
  }
}

interface PronunciationResult {
  accuracy: number
  feedback: string
  tones: number[]
}

export default function LessonPage({ params }: LessonPageProps) {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [isRecording, setIsRecording] = useState<boolean>(false)
  const [pronunciationResult, setPronunciationResult] = useState<PronunciationResult | null>(null)
  const totalSteps = 5

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
      setPronunciationResult(null)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      setPronunciationResult(null)
    }
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)

    if (!isRecording) {
      // Giả lập quá trình ghi âm trong 3 giây rồi hiển thị kết quả
      setTimeout(() => {
        setIsRecording(false)
        setPronunciationResult({
          accuracy: 85,
          feedback: "Good job! Your third tone needs a bit more practice.",
          tones: [90, 80, 70, 95],
        })
      }, 3000)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <Button variant="ghost" size="icon" onClick={() => window.history.back()}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-xl font-bold ml-2">Basic Greetings - Lesson {params.id}</h1>
          <div className="ml-auto flex items-center space-x-4">
            <div className="text-sm text-muted-foreground">
              Step {currentStep} of {totalSteps}
            </div>
            <Progress value={(currentStep / totalSteps) * 100} className="w-32 h-2" />
          </div>
        </div>
      </header>

      <main className="flex-1 py-8">
        <div className="container px-4">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <Tabs defaultValue="learn" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="learn">Learn</TabsTrigger>
                  <TabsTrigger value="practice">Practice</TabsTrigger>
                  <TabsTrigger value="quiz">Quiz</TabsTrigger>
                </TabsList>

                <TabsContent value="learn" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">你好 (Nǐ hǎo)</h2>
                      <p className="mb-4">This is the most common way to say "hello" in Chinese.</p>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-medium">你</span>
                          <span className="text-muted-foreground">nǐ</span>
                          <span className="text-muted-foreground ml-2">you</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-medium">好</span>
                          <span className="text-muted-foreground">hǎo</span>
                          <span className="text-muted-foreground ml-2">good</span>
                        </div>
                      </div>
                      <div className="mt-6">
                        <h3 className="font-medium mb-2">When to use:</h3>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          <li>Greeting friends</li>
                          <li>Greeting colleagues</li>
                          <li>General everyday situations</li>
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                        <span className="text-4xl">你好</span>
                      </div>
                      <Button className="w-full" onClick={() => {}}>
                        <Volume2 className="mr-2 h-4 w-4" />
                        Listen to Pronunciation
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="practice" className="space-y-6">
                  <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold">你好 (Nǐ hǎo)</h2>
                    <p>Try to pronounce this greeting. Click the microphone to start recording.</p>

                    <div className="flex justify-center my-8">
                      <Button
                        size="lg"
                        className={`rounded-full p-8 ${isRecording ? "bg-red-500 animate-pulse" : ""}`}
                        onClick={toggleRecording}
                      >
                        <Mic className="h-8 w-8" />
                      </Button>
                    </div>

                    {pronunciationResult && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-xl font-medium">Accuracy:</span>
                          <span className="text-2xl font-bold">{pronunciationResult.accuracy}%</span>
                          {pronunciationResult.accuracy >= 80 ? (
                            <Check className="h-6 w-6 text-green-500" />
                          ) : (
                            <X className="h-6 w-6 text-red-500" />
                          )}
                        </div>

                        <div className="bg-muted p-4 rounded-lg">
                          <p className="mb-4">{pronunciationResult.feedback}</p>
                          <div className="space-y-2">
                            <h4 className="font-medium">Tone Accuracy:</h4>
                            <div className="grid grid-cols-4 gap-2">
                              {pronunciationResult.tones.map((tone, index) => (
                                <div key={index} className="space-y-1">
                                  <div className="text-center text-sm">Tone {index + 1}</div>
                                  <Progress value={tone} className="h-2" />
                                  <div className="text-center text-xs">{tone}%</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <Button onClick={toggleRecording}>Try Again</Button>
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="quiz" className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold">Quick Quiz</h2>
                    <p>Test your understanding of this greeting.</p>

                    <div className="space-y-4 mt-6">
                      <div className="p-4 border rounded-lg">
                        <h3 className="font-medium mb-2">What does "你好" mean?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                          <Button variant="outline">Good morning</Button>
                          <Button variant="outline">Hello</Button>
                          <Button variant="outline">Thank you</Button>
                          <Button variant="outline">Goodbye</Button>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h3 className="font-medium mb-2">Which tone is used for "nǐ"?</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
                          <Button variant="outline">First tone</Button>
                          <Button variant="outline">Second tone</Button>
                          <Button variant="outline">Third tone</Button>
                          <Button variant="outline">Fourth tone</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <div className="flex justify-between max-w-4xl mx-auto mt-6">
            <Button variant="outline" onClick={handlePrevStep} disabled={currentStep === 1}>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            <Button onClick={handleNextStep} disabled={currentStep === totalSteps}>
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
