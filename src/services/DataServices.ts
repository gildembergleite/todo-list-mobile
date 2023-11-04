import tasks, { Task } from '../../data'

export default class DataServices {
  private tasks: Task[] = []

  constructor() { this.tasks = tasks }

  async addTask(description: string) {
    const newTask: Task = {
      id: this.tasks.length + 1,
      description,
      isCompleted: false,
    }
    this.tasks.push(newTask)
  }

  async listTasks() { return this.tasks }

  async markTaskAsCompleted(taskId: number) {
    const task = this.tasks.find((t) => t.id === taskId)
    if (task) { task.isCompleted = !task.isCompleted }
  }
}