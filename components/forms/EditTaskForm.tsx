"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import type { Task } from "@prisma/client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { Icons } from "../Icons"
import { updateTask } from "@/actions/task"

const formSchema = z.object({
    title: z.string().min(1, {
        message: "Task title is required.",
    }),
})

interface TaskEditFormProps {
    task: Task
}

export function TaskEditForm({ task }: TaskEditFormProps) {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: task.title,
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true)

        try {
            await updateTask(task.id, values.title)
            toast.success("Your task has been updated successfully.")
            router.push("/dashboard")
        } catch (error: unknown) {
            console.log("error editing your task", error)
            toast.error("Your task could not be updated. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Task Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter task title..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex gap-4">
                    <Button type="button" variant="outline" onClick={() => router.push("/dashboard")}>
                        Cancel
                    </Button>
                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <Icons.check className="mr-2 h-4 w-4" />
                        )}
                        Update Task
                    </Button>
                </div>
            </form>
        </Form>
    )
}

