import type React from "react"
import { UserNav } from "./UserNav"

interface DashboardShellProps {
    children: React.ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-40 border-b bg-background">
                <div className="container flex h-16 items-center justify-between py-4">
                    <div className="flex items-center gap-2 font-semibold">
                        <span className="text-primary text-xl">TaskMaster</span>
                    </div>
                    <UserNav />
                </div>
            </header>
            <main className="flex-1 container py-8">{children}</main>
        </div>
    )
}

