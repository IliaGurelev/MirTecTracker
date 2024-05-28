const tasksData = [
  {
    "id": 1,
    "name": "Верстка главной страницы",
    "description": "Создай полную верстку по макету главной страницы",
    "status": "open",
    "createdAt": "2024-05-05T15:00:00",
    "briefcase": {
      name: "Разработка",
      color: "purple",
    },
    "workers": [
      {
        "id": 1,
        "name": "Alice",
        "avatar": "https://randomuser.me/api/portraits/women/1.jpg"
      },
      {
        "id": 2,
        "name": "Bob",
        "avatar": "https://randomuser.me/api/portraits/men/2.jpg"
      },
    ],
  },
  {
    "id": 2,
    "name": "Починить зум",
    "description": "На странице товара не работает зум",
    "status": "work",
    "createdAt": "2024-04-25T15:00:00",
    "briefcase": {
      name: "Продажи",
      color: "green",
    },
    "workers": [
      {
        "id": 1,
        "name": "Alice",
        "avatar": "https://randomuser.me/api/portraits/women/1.jpg"
      },
      {
        "id": 2,
        "name": "Bob",
        "avatar": "https://randomuser.me/api/portraits/men/2.jpg"
      },
      {
        "id": 3,
        "name": "Charlie",
        "avatar": "https://randomuser.me/api/portraits/men/3.jpg"
      }
    ],
  },
  {
    "id": 3,
    "name": "Вынести dashboard в компонент",
    "description": "",
    "status": "close",
    "createdAt": "2024-05-20T15:00:00",
    "briefcase": {
      name: "Разработка",
      color: "purple",
    },
    "workers": [
      {
        "id": 1,
        "name": "Alice",
        "avatar": "https://randomuser.me/api/portraits/women/1.jpg"
      },
      {
        "id": 2,
        "name": "Bob",
        "avatar": "https://randomuser.me/api/portraits/men/2.jpg"
      },
      {
        "id": 3,
        "name": "Charlie",
        "avatar": "https://randomuser.me/api/portraits/men/3.jpg"
      }
    ],
  },
]

export default tasksData