"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Mic, Volume2, BarChart2, RefreshCw } from "lucide-react";

// Định nghĩa kiểu cho chi tiết kết quả
interface SpeechDetail {
  label: string;
  score: number;
}

// Định nghĩa kiểu cho kết quả nhận diện giọng nói
interface SpeechResults {
  accuracy: number;
  toneAccuracy: number[];
  feedback: string;
  details: SpeechDetail[];
}

// Định nghĩa kiểu cho câu thực hành
interface PracticePhrase {
  chinese: string;
  pinyin: string;
  english: string;
  difficulty: string;
}

export default function SpeechPracticePage() {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordingTime, setRecordingTime] = useState<number>(0);
  const [results, setResults] = useState<SpeechResults | null>(null);
  const [selectedPhrase, setSelectedPhrase] = useState<number>(0);

  const phrases: PracticePhrase[] = [
    {
      chinese: "你好",
      pinyin: "Nǐ hǎo",
      english: "Hello",
      difficulty: "Beginner",
    },
    {
      chinese: "谢谢",
      pinyin: "Xièxiè",
      english: "Thank you",
      difficulty: "Beginner",
    },
    {
      chinese: "我喜欢学习中文",
      pinyin: "Wǒ xǐhuān xuéxí zhōngwén",
      english: "I like learning Chinese",
      difficulty: "Intermediate",
    },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingTime((prev) => {
          if (prev >= 100) {
            setIsRecording(false);
            if (interval) clearInterval(interval);
            generateResults();
            return 0;
          }
          return prev + 2;
        });
      }, 50);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRecording]);  

  const startRecording = () => {
    setIsRecording(true);
    setResults(null);
    setRecordingTime(0);
  };

  const stopRecording = () => {
    setIsRecording(false);
    generateResults();
  };

  const generateResults = () => {
    // Giả lập kết quả nhận diện giọng nói
    const accuracy = Math.floor(Math.random() * 30) + 70; // 70-99%
    const toneAccuracy = [
      Math.floor(Math.random() * 20) + 80,
      Math.floor(Math.random() * 30) + 70,
      Math.floor(Math.random() * 40) + 60,
      Math.floor(Math.random() * 25) + 75,
    ];

    const feedback =
      accuracy > 90
        ? "Excellent pronunciation! Your tones are very accurate."
        : accuracy > 80
        ? "Good job! Your pronunciation is clear, but some tones could be improved."
        : "Keep practicing! Focus on the tone changes and rhythm.";

    setResults({
      accuracy,
      toneAccuracy,
      feedback,
      details: [
        { label: "Pronunciation", score: Math.floor(Math.random() * 20) + 80 },
        { label: "Tone Accuracy", score: Math.floor(Math.random() * 30) + 70 },
        { label: "Rhythm", score: Math.floor(Math.random() * 25) + 75 },
        { label: "Fluency", score: Math.floor(Math.random() * 35) + 65 },
      ],
    });
  };

  return (
    <div className="container py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Speech Recognition Practice</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Pronunciation Practice</CardTitle>
              <CardDescription>
                Practice your pronunciation with real-time feedback
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center py-6">
                <div className="text-4xl font-bold mb-2">
                  {phrases[selectedPhrase].chinese}
                </div>
                <div className="text-xl text-muted-foreground mb-1">
                  {phrases[selectedPhrase].pinyin}
                </div>
                <div className="text-muted-foreground">
                  {phrases[selectedPhrase].english}
                </div>
                <div className="mt-4 text-sm bg-muted inline-block px-3 py-1 rounded-full">
                  {phrases[selectedPhrase].difficulty}
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <Button variant="outline" size="lg" className="w-40">
                  <Volume2 className="mr-2 h-4 w-4" />
                  Listen
                </Button>
                <Button
                  size="lg"
                  className={`w-40 ${
                    isRecording ? "bg-red-500 hover:bg-red-600" : ""
                  }`}
                  onClick={isRecording ? stopRecording : startRecording}
                >
                  <Mic className="mr-2 h-4 w-4" />
                  {isRecording ? "Stop" : "Record"}
                </Button>
              </div>

              {isRecording && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Recording...</span>
                    <span>{Math.floor(recordingTime / 20)} seconds</span>
                  </div>
                  <Progress value={recordingTime} className="h-2" />
                </div>
              )}

              {results && (
                <div className="mt-8 space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold">Results</h3>
                    <Button variant="ghost" size="sm" onClick={startRecording}>
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Try Again
                    </Button>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center justify-center">
                      <div className="relative w-32 h-32">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-3xl font-bold">
                            {results.accuracy}%
                          </span>
                        </div>
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <circle
                            className="text-muted stroke-current"
                            strokeWidth="10"
                            fill="transparent"
                            r="40"
                            cx="50"
                            cy="50"
                          />
                          <circle
                            className="text-primary stroke-current"
                            strokeWidth="10"
                            strokeLinecap="round"
                            fill="transparent"
                            r="40"
                            cx="50"
                            cy="50"
                            strokeDasharray={`${results.accuracy * 2.51} 251`}
                            strokeDashoffset="0"
                            transform="rotate(-90 50 50)"
                          />
                        </svg>
                      </div>
                    </div>

                    <p className="mt-4 text-muted-foreground">
                      {results.feedback}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">Detailed Analysis:</h4>
                    <div className="space-y-3">
                      {results.details.map((detail, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>{detail.label}</span>
                            <span>{detail.score}%</span>
                          </div>
                          <Progress value={detail.score} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Tone Accuracy:</h4>
                    <div className="grid grid-cols-4 gap-3">
                      {results.toneAccuracy.map((score, index) => (
                        <div key={index} className="text-center space-y-1">
                          <div className="text-sm">Tone {index + 1}</div>
                          <div className="relative pt-1">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-muted">
                              <div
                                style={{ width: `${score}%` }}
                                className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                                  score > 85
                                    ? "bg-green-500"
                                    : score > 70
                                    ? "bg-yellow-500"
                                    : "bg-red-500"
                                }`}
                              ></div>
                            </div>
                          </div>
                          <div className="text-xs">{score}%</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Practice Phrases</CardTitle>
              <CardDescription>Select a phrase to practice</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {phrases.map((phrase, index) => (
                  <Button
                    key={index}
                    variant={selectedPhrase === index ? "default" : "outline"}
                    className="w-full justify-start text-left h-auto py-3"
                    onClick={() => {
                      setSelectedPhrase(index);
                      setResults(null);
                    }}
                  >
                    <div>
                      <div className="font-medium">{phrase.chinese}</div>
                      <div className="text-sm text-muted-foreground">
                        {phrase.pinyin}
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Progress Stats</CardTitle>
              <CardDescription>Your pronunciation improvement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
                <BarChart2 className="h-12 w-12 text-muted-foreground" />
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Today's Practice</span>
                  <span>12 phrases</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Average Accuracy</span>
                  <span>84%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Most Difficult Tone</span>
                  <span>Third Tone</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
