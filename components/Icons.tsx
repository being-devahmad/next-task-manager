import {
    AlertTriangle,
    ArrowRight,
    Check,
    ChevronLeft,
    ChevronRight,
    Command,
    FileText,
    HelpCircle,
    Laptop,
    Loader2,
    type LightbulbIcon as LucideProps,
    Moon,
    MoreVertical,
    Pizza,
    Plus,
    Settings,
    SunMedium,
    Trash,
    Twitter,
    User,
    X,
    type LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
    logo: Command,
    close: X,
    spinner: Loader2,
    chevronLeft: ChevronLeft,
    chevronRight: ChevronRight,
    trash: Trash,
    settings: Settings,
    user: User,
    arrowRight: ArrowRight,
    help: HelpCircle,
    pizza: Pizza,
    sun: SunMedium,
    moon: Moon,
    laptop: Laptop,
    google: ({ ...props }: LucideProps) => (
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
            {...props}
        >
            <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
        </svg>
    ),
    gitHub: ({ ...props }: LucideProps) => (
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="github"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            {...props}
        >
            <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 3.3 4.3 3.3 2.6 0 5.2-1.3 5.2-3.3-.3-2-2.6-3.3-5.3-3.3-2.6 0-5.2 1.3-4.9 3.3zm-19.7-5.7c-3.6 4.5-11.8 4.5-15.4 0-3.9-4.9-3.9-12.8 0-17.7 3.6-4.5 11.8-4.5 15.4 0 3.9 5 3.9 12.8 0 17.7zm-8.8-25.8c-7.8 0-14.1 6.3-14.1 14.1 0 7.8 6.3 14.1 14.1 14.1 7.8 0 14.1-6.3 14.1-14.1 0-7.8-6.3-14.1-14.1-14.1z"
            ></path>
        </svg>
    ),
    twitter: Twitter,
    check: Check,
    warning: AlertTriangle,
    more: MoreVertical,
    add: Plus,
    edit: FileText,
}

