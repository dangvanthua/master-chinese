import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, Mic, BarChart2, Users, Settings, LogOut, Menu } from "lucide-react"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Chinese Language Learning Platform",
  description: "Master Chinese with interactive lessons and speech recognition",
}

const theme = "light";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={theme} style={{ colorScheme: theme }}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen">
            {/* Sidebar - Hidden on mobile */}
            <div className="hidden md:flex w-64 flex-col fixed inset-y-0 z-50 border-r bg-background">
              <div className="flex h-14 items-center border-b px-4">
                <Link href="/" className="flex items-center font-bold text-xl">
                  <span className="text-red-500">汉语</span>
                  <span className="ml-2">Master</span>
                </Link>
              </div>
              <div className="flex-1 overflow-auto py-2">
                <nav className="grid items-start px-2 text-sm font-medium">
                  <Link href="/dashboard" className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-accent">
                    <BookOpen className="h-4 w-4" />
                    Lessons
                  </Link>
                  <Link
                    href="/speech-practice"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-accent"
                  >
                    <Mic className="h-4 w-4" />
                    Speech Practice
                  </Link>
                  <Link href="/progress" className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-accent">
                    <BarChart2 className="h-4 w-4" />
                    Progress
                  </Link>
                  <Link href="/community" className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-accent">
                    <Users className="h-4 w-4" />
                    Community
                  </Link>
                  <Link href="/settings" className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-accent">
                    <Settings className="h-4 w-4" />
                    Settings
                  </Link>
                </nav>
              </div>
              <div className="mt-auto p-4 border-t">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">John Doe</span>
                    <span className="text-xs text-muted-foreground">Intermediate</span>
                  </div>
                  <Button variant="ghost" size="icon" className="ml-auto">
                    <LogOut className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Mobile header */}
            <div className="md:hidden flex items-center justify-between h-14 border-b px-4 w-full fixed top-0 z-50 bg-background">
              <Link href="/" className="flex items-center font-bold text-lg">
                <span className="text-red-500">汉语</span>
                <span className="ml-1">Master</span>
              </Link>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </div>

            {/* Main content */}
            <div className="flex-1 md:pl-64">
              <div className="md:pt-0 pt-14">{children}</div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

