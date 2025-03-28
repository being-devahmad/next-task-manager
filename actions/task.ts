"use server";

import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";

export async function createTask(title: string, userId: string) {
  try {
    await db.task.create({
      data: {
        title,
        userId,
      },
    });

    revalidatePath("/dashboard");
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}

export async function deleteTask(id: string) {
  try {
    await db.task.delete({
      where: {
        id,
      },
    });

    revalidatePath("/dashboard");
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}

export async function updateTask(id: string, title: string) {
  try {
    await db.task.update({
      where: {
        id,
      },
      data: {
        title,
      },
    });

    revalidatePath("/dashboard");
    revalidatePath(`/tasks/${id}/edit`);
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}

export async function toggleTaskCompletion(id: string, completed: boolean) {
  try {
    await db.task.update({
      where: {
        id,
      },
      data: {
        completed,
      },
    });

    revalidatePath("/dashboard");
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}
