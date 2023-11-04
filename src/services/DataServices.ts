import tasks, { Task } from '../../data'

export default class DataServices {
  private tasks: Task[] = []

  constructor() { this.tasks = tasks }

  addTask(description: string) {
    const newTask: Task = {
      id: this.tasks.length + 1,
      description,
      isCompleted: false,
    }
    this.tasks.push(newTask)
  }

  listTasks() {
    return this.tasks
  }

  markTaskAsCompleted(taskId: number) {
    const task = this.tasks.find((t) => t.id === taskId)
    if (task) {
      task.isCompleted = true
    }
    return task
  }
}