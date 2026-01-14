"use client"
import { BookOpen, ChevronDown, Folder, LayoutDashboard, LogOut, Settings } from "lucide-react"
import { Geist, Geist_Mono, Noto_Sans } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

const notoSans = Noto_Sans({ variable: "--font-sans" })

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter();

  const pathname = usePathname();
  const isDashboardPage = pathname === '/dashboard';

  const handleSettingsClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <main className={`${geistSans.variable} ${geistMono.variable} antialiased ${notoSans.variable}`}>
      <div className="flex w-full min-h-screen bg-gray-50">
        {/* SIDEBAR */}
        <aside className="w-20 md:w-64 bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 text-white p-4 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-lg bg-white/6 ring-1 ring-white/10">
              <Image src="/assets/Laravel-Logo.svg" alt="Logo" width={36} height={36} className="object-contain" />
            </div>
            <div className="md:block hidden">
              <p className="text-sm font-semibold">Laravel Starter Kit</p>
              <p className="text-xs text-gray-300">Admin dashboard</p>
            </div>
          </div>
    
          <nav className="flex-1">
            <p className="hidden md:block text-xs font-semibold text-gray-400 mb-2">PLATFORM</p>

            <Link href="/dashboard" className={`w-full flex items-center gap-3 py-2 px-2 rounded-lg ${isDashboardPage ? 'bg-white/6' : ''} hover:bg-white/8 transition-colors}`}>
              <LayoutDashboard color="white" size={20} />
              <span className="hidden md:inline text-sm">Dashboard</span>
            </Link>

            <div className="mt-4 space-y-1">
              <Link href="https://github.com/AungNanda412/mcf2-starterkit-ui/tree/feat/auth" className="w-full flex items-center gap-3 py-2 px-2 rounded-lg hover:bg-white/2 transition-colors">
                <Folder color="#9CA3AF" size={18} />
                <span className="hidden md:inline text-sm text-gray-300">Repository</span>
              </Link>

              <button className="w-full flex items-center gap-3 py-2 px-2 rounded-lg hover:bg-white/2 transition-colors">
                <BookOpen color="#9CA3AF" size={18} />
                <span className="hidden md:inline text-sm text-gray-300">Documentation</span>
              </button>
            </div>
          </nav>

          <div className="mt-4 relative">
            <button
              onClick={handleSettingsClick}
              className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-white/3 transition-all duration-200"
              aria-expanded={isOpen}
              aria-controls="user-menu"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-white/6 rounded-full">
                <p className="text-sm font-medium">MC</p>
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-start">MCF2</p>
                <p className="text-xs text-gray-400">Administrator</p>
              </div>
              <div className={`ml-auto hidden md:flex transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                <ChevronDown color="white" size={18} />
              </div>
            </button>

            {isOpen && (
              <div
                id="user-menu"
                className="absolute left-0 bottom-full mb-3 w-56 bg-gray-900 rounded-lg shadow-lg text-white divide-y divide-gray-700 ring-1 ring-white/10 z-50 animate-in fade-in slide-in-from-bottom-2 duration-200"
                role="menu"
              >
                <div className="flex items-center gap-3 p-4">
                  <div className="flex items-center justify-center w-[50px] h-[50px] bg-white/6 rounded-full">
                    <p className="text-lg">MC</p>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-500">MCF2</div>
                    <div className="text-xs text-gray-500">mcf2@gmail.com</div>
                  </div>
                </div>

                <div className="py-2">
                  <Link 
                    href="/dashboard/profile"
                    className="w-full flex items-center gap-3 py-2 px-4 rounded"
                    role="menuitem"
                  >
                    <Settings/>
                    <span className="text-sm font-medium">Settings</span>
                  </Link>

                  <button onClick={() => router.replace("/login")}
                    className="w-full flex items-center gap-3 py-2 px-4 rounded text-red-600 mt-1"
                    role="menuitem"
                  >
                    <LogOut/>
                    <span className="text-sm font-medium">Log out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </aside>

        <section className="flex-1 bg-linear-to-b from-gray-50 to-gray-100">
          {children}
        </section>
      </div>
    </main>
  )
}

export default DashboardLayout
