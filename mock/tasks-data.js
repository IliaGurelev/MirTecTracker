const tasksData = [
  {
    "id": 1,
    "name": "Верстка главной страницы",
    "description": "Создай полную верстку по макету главной страницы",
    "status": "open",
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
    "status": "work",
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