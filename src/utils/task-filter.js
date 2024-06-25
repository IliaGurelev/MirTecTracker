import { isAfter, isSameDay, addHours, compareDesc, compareAsc } from 'date-fns'
import parseTime from './parse-time'

const taskFilter = (filter, tasks, today = new Date()) => {
  switch (filter) {
    case 'new':
      return [...tasks]
        .sort((a, b) => compareDesc(new Date(b.createdAt), new Date(a.createdAt)))
        .filter((task) => addHours(new Date(task.createdAt), 24) >= today)
    case 'today':
      return tasks.filter((task) => isSameDay(task.dueDate, today))
    case 'upcoming':
      return tasks.filter((task) => isAfter(task.dueDate, today) && task.status !== 'close')
    case 'closed':
      return tasks.filter((task) => task.status === 'close')
    case 'desc':
      return [...tasks].sort((a, b) => compareDesc(new Date(b.createdAt), new Date(a.createdAt)))
    case 'asc-diary':
      return tasks.sort((a, b) => compareAsc(parseTime(a.timeStart), parseTime(b.timeStart)))
    default:
      return tasks
  }
}

export default taskFilter
