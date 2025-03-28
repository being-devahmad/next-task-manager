import { RegisterForm } from "@/components/forms/RegisterForm"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Register - TaskMaster",
    description: "Create a new TaskMaster account",
}

export default function RegisterPage() {
    return (
        <div className="container flex h-screen w-screen flex-col items-center justify-center">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
                    <p className="text-sm text-muted-foreground">Enter your details to create a new account</p>
                </div>
                <RegisterForm />
                <p className="px-8 text-center text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Link href="/signin" className="underline underline-offset-4 hover:text-primary">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    )
}

