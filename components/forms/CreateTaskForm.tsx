"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { Icons } from "../Icons"
import { createTask } from "@/actions/task"

const formSchema = z.object({
    title: z.string().min(1, {
        message: "Task title is required.",
    }),
})

interface TaskCreateFormProps {
    userId: string
}

export function TaskCreateForm({ userId }: TaskCreateFormProps) {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true)

        try {
            await createTask(values.title, userId)
            form.reset()
            toast.success("Your task has been created successfully.")
            router.refresh()
        } catch (error: unknown) {
            console.log("error creating your task", error)
            toast.error("Your task could not be created. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full items-center space-x-2">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem className="flex-1">
                            <FormControl>
                                <Input placeholder="Add a new task..." {...field} className="h-10" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" size="sm" disabled={isLoading}>
                    {isLoading ? <Icons.spinner className="h-4 w-4 animate-spin" /> : <Icons.add className="h-4 w-4" />}
                    <span className="sr-only">Add task</span>
                </Button>
            </form>
        </Form>
    )
}

