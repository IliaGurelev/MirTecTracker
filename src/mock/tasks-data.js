const tasksData = [
  {
    id: 1,
    name: 'Верстка главной страницы',
    description: 'Создай полную верстку по макету главной страницы',
    status: 'open',
    createdAt: '2024-05-05T15:00:00',
    dueDate: '2024-06-05T15:00:00',
    briefcase: {
      name: 'Разработка',
      color: 'purple'
    },
    workers: [
      {
        id: 1,
        name: 'Alice',
        avatar: ''
      },
      {
        id: 2,
        name: 'Bob',
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
      }
    ],
    dashboardId: 1
  },
  {
    id: 4,
    name: 'Починить зум',
    description: 'На странице товара не работает зум',
    status: 'work',
    createdAt: '2024-04-25T15:00:00',
    dueDate: '2024-07-05T15:00:00',
    briefcase: {
      name: 'Продажи',
      color: 'green'
    },
    workers: [
      {
        id: 1,
        name: 'Alice',
        avatar: ''
      },
      {
        id: 2,
        name: 'Bob',
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
      },
      {
        id: 3,
        name: 'Charlie',
        avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
      }
    ],
    dashboardId: 2
  },
  {
    id: 3,
    name: 'Вынести dashboard в компонент',
    description: '',
    status: 'close',
    createdAt: '2024-05-20T15:00:00',
    dueDate: '2024-05-30T17:00:00',
    briefcase: {
      name: 'Разработка',
      color: 'purple'
    },
    workers: [
      {
        id: 1,
        name: 'Alice',
        avatar: ''
      },
      {
        id: 2,
        name: 'Bob',
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
      },
      {
        id: 3,
        name: 'Charlie',
        avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
      }
    ],
    dashboardId: 3
  },
  {
    id: 2,
    name: 'Создать дизайн робота',
    description: 'Нужен дизайн главного босса для игры в виде робота',
    status: 'work',
    createdAt: '2024-05-30T15:00:00',
    dueDate: '2024-05-30T17:00:00',
    briefcase: {
      name: 'Разработка',
      color: 'purple'
    },
    workers: [
      {
        id: 1,
        name: 'Alice',
        avatar: ''
      },
      {
        id: 3,
        name: 'Charlie',
        avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
      }
    ],
    dashboardId: 4
  }
]

export default tasksData
