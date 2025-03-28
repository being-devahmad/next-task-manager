import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center">
            <div className="mx-auto max-w-md text-center">
                <h1 className="text-3xl font-bold">404</h1>
                <h2 className="text-2xl font-semibold">Page Not Found</h2>
                <p className="mt-4 text-muted-foreground">The page you are looking for doesn&apos;t exist or has been moved.</p>
                <div className="mt-8">
                    <Button asChild>
                        <Link href="/">Go back home</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

