"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import type { Task } from "@prisma/client"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { toast } from "sonner"
import { deleteTask, toggleTaskCompletion } from "@/actions/task"
import { Icons } from "../Icons"


interface TaskListProps {
    tasks: Task[]
}

export function TaskList({ tasks }: TaskListProps) {
    const router = useRouter()
    const [isDeleting, setIsDeleting] = useState<string | null>(null)
    const [isUpdating, setIsUpdating] = useState<string | null>(null)

    async function handleDelete(id: string) {
        setIsDeleting(id)
        try {
            await deleteTask(id)
            toast.success("Your task has been deleted successfully.")
            router.refresh()
        } catch (error: unknown) {
            console.error("Error updating task:", error)
            toast.error("Your task could not be deleted. Please try again.")
        } finally {
            setIsDeleting(null)
        }
    }

    async function handleToggleCompletion(id: string, completed: boolean) {
        setIsUpdating(id)
        try {
            await toggleTaskCompletion(id, !completed)
            router.refresh()
        } catch (error: unknown) {
            console.error("Error updating task:", error)
            toast.error("Your task could not be updated. Please try again.")
        } finally {
            setIsUpdating(null)
        }
    }

    if (tasks.length === 0) {
        return (
            <div className="flex min-h-[200px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50">
                <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
                    <Icons.add className="h-10 w-10 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-semibold">No tasks created</h3>
                    <p className="mt-2 text-sm text-muted-foreground">You don&apos;t have any tasks yet. Add one above.</p>
                </div>
            </div>
        )
    }

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {tasks.map((task) => (
                <Card key={task.id} className="overflow-hidden">
                    <CardHeader className="p-4">
                        <div className="flex items-start gap-4">
                            <Checkbox
                                id={`task-${task.id}`}
                                checked={task.completed}
                                onCheckedChange={() => handleToggleCompletion(task.id, task.completed)}
                                disabled={isUpdating === task.id}
                                className="mt-1"
                            />
                            <div className="grid gap-1">
                                <label
                                    htmlFor={`task-${task.id}`}
                                    className={`font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${task.completed ? "line-through text-muted-foreground" : ""
                                        }`}
                                >
                                    {task.title}
                                </label>
                                <p className="text-sm text-muted-foreground">{new Date(task.createdAt).toLocaleDateString()}</p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0"></CardContent>
                    <CardFooter className="flex justify-between p-4">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => router.push(`/tasks/${task.id}/edit`)}
                            disabled={isDeleting === task.id}
                        >
                            <Icons.edit className="mr-2 h-4 w-4" />
                            Edit
                        </Button>
                        <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDelete(task.id)}
                            disabled={isDeleting === task.id}
                        >
                            {isDeleting === task.id ? (
                                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                            ) : (
                                <Icons.trash className="mr-2 h-4 w-4" />
                            )}
                            Delete
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}

