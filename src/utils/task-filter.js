import {isAfter, isSameDay, addHours} from 'date-fns';

const taskFilter = (filter, tasks, today = new Date()) => {
  switch (filter) {
    case 'new':
      return [...tasks].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .filter(task => 
          addHours(new Date(task.createdAt), 24) 
          >= today);
    case 'today':
      return tasks.filter(task => isSameDay(task.dueDate, today));
    case 'upcoming':
      return tasks.filter(task => isAfter(task.dueDate, today) && task.status !== 'close');
    case 'closed':
      return tasks.filter(task => task.status === 'close')
    default:
      return tasks;
  }
};

export default taskFilter;