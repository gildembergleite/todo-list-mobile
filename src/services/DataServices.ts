import tasks, { Task } from '../../data'

export default class DataServices {
  private tasks: Task[] = []

  constructor() { this.tasks = tasks }

  async listTasks() { return this.tasks }

  async addTask(description: string) {
    if (description !== '') {
      const newTask: Task = {
        id: this.tasks.length + 1,
        description,
        isCompleted: false,
      }
    
      this.tasks.unshift(newTask)
    }
  }

  async deleteTask(taskId: number) {
    const taskIndex = this.tasks.findIndex((t) => t.id === taskId)
    if (taskIndex !== -1) { this.tasks.splice(taskIndex, 1) }
  }

  async markTaskAsCompleted(taskId: number) {
    const task = this.tasks.find((t) => t.id === taskId)
    if (task) { task.isCompleted = !task.isCompleted }
  }
}