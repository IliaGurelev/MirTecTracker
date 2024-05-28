<script setup>


</script>

<template>
			<div :class="$attrs.class">
				<div class='project-column-heading'>
				<h2 class='project-column-heading__title'>Открыт</h2>
				</div>			

				<div
      v-for="item in items"
      :key="item.id"
      class="task"
      @dragstart="handleDragStart"
      @dragenter="handleDragEnter"
      @dragover="handleDragOver"
      @dragleave="handleDragLeave"
      @drop="handleDrop"
      @dragend="handleDragEnd"
      :draggable="true"
    >
	<div class='task__tags'><span class='task__tag task__tag--pink'>Разработка</span></div>
				<p>Cоздание Миртек Трекер</p>
				<div class='task__stats'>
					<span><time datetime='2023-05-20T15:00:00'><i class='fa-regular fa-calendar-days'></i> 20.05.2024</time></span>
					<div class='status__owners'><span class='status__owner status--open'><i class='fa-solid fa-circle-notch'></i> Открыт</span></div>
				</div>
    </div>
	<div
      v-for="item in items"
      :key="item.id"
      class="task"
      @dragstart="handleDragStart"
      @dragenter="handleDragEnter"
      @dragover="handleDragOver"
      @dragleave="handleDragLeave"
      @drop="handleDrop"
      @dragend="handleDragEnd"
      :draggable="true"
    >
	<div class='task__tags'><span class='task__tag task__tag--blue'>Маркетинг</span></div>
				<p>Пропиарить Трекер</p>
				<div class='task__stats'>
					<span><time datetime='2023-05-20T15:00:00'><i class='fa-regular fa-calendar-days'></i> 20.05.2024</time></span>
					<div class='status__owners'><span class='status__owner status--open'><i class='fa-solid fa-circle-notch'></i> Открыт</span></div>
				</div>
    </div>
				<div  class="task" draggable='true'>
				<div class='task__tags'><span class='task__tag task__tag--pink'>Разработка</span></div>
				<p>Cоздание Миртек Трекер</p>
				<div class='task__stats'>
					<span><time datetime='2023-05-20T15:00:00'><i class='fa-regular fa-calendar-days'></i> 20.05.2024</time></span>
					<div class='status__owners'><span class='status__owner status--open'><i class='fa-solid fa-circle-notch'></i> Открыт</span></div>
				</div>
				</div>

				<div  class="task" draggable='true'>
				<div class='task__tags'><span class='task__tag task__tag--blue'>Маркетинг</span></div>
				<p>Пропиарить Трекер</p>
				<div class='task__stats'>
					<span><time datetime='2023-05-20T15:00:00'><i class='fa-regular fa-calendar-days'></i> 20.05.2024</time></span>
					<div class='status__owners'><span class='status__owner status--open'><i class='fa-solid fa-circle-notch'></i> Открыт</span></div>
				</div>
				</div>
				
				<div class='task' draggable='true'>
					<div class='task__tags'><span class='task__tag task__tag--green'>Продажи</span></div>
					<p>Продать подписку Трекера</p>
					<div class='task__stats'>
					<span><time datetime='2023-05-20T15:00:00'><i class='fa-regular fa-calendar-days'></i> 20.05.2024</time></span>
					<div class='status__owners'><span class='status__owner status--open'><i class='fa-solid fa-circle-notch'></i> Открыт</span></div>
					</div>
				</div>
			</div>
			<div :class="$attrs.class"><div class='project-column-heading'>
				<h2 class='project-column-heading__title'>В работе</h2>
				</div>
				
				<div class='task' draggable='true'>
				<div class='task__tags'><span class='task__tag task__tag--pink'>Разработка</span></div>
				<p>Сделать верстку главной страницы Трекера</p>
				<div class='task__stats'>
					<span><time datetime='2023-05-20T15:00:00'><i class='fa-regular fa-calendar-days'></i> 20.05.2024</time></span>
					<div class='status__owners'><span class='status__owner status--inwork'><i class='fa-regular fa-circle-play'></i> В работе</span></div>
				</div>
				</div>
				<div class='task' draggable='true'>
					<div class='task__tags'><span class='task__tag task__tag--pink'>Разработка</span></div>
					<p>Верстка - личная страница</p>
					<div class='task__stats'>
					<span><time datetime='2023-05-20T15:00:00'><i class='fa-regular fa-calendar-days'></i> 20.05.2024</time></span>
					<div class='status__owners'><span class='status__owner status--inwork'><i class='fa-regular fa-circle-play'></i> В работе</span></div>
					</div>
				</div>
				<div class='task' draggable='true'>
				<div class='task__tags'><span class='task__tag task__tag--blue'>Маркетинг</span></div>
				<p>Анализ рекламы и прихода</p>
				<div class='task__stats'>
					<span><time datetime='2023-05-20T15:00:00'><i class='fa-regular fa-calendar-days'></i> 20.05.2024</time></span>
					<span class='task__owner'></span>
					<div class='status__owners'><span class='status__owner status--inwork'><i class='fa-regular fa-circle-play'></i> В работе</span></div>
				</div>
				</div>
				
				<div class='task' draggable='true'>
				<div class='task__tags'><span class='task__tag task__tag--pink'>Разработка</span></div>
				<p>Верстка - общей доски</p>
				<div class='task__stats'>
					<span><time datetime='2023-05-20T15:00:00'><i class='fa-regular fa-calendar-days'></i> 20.05.2024</time></span>
					<div class='status__owners'><span class='status__owner status--inwork'><i class='fa-regular fa-circle-play'></i> В работе</span></div>
				</div>
				</div>
				
				<div class='task' draggable='true'>
				<div class='task__tags'><span class='task__tag task__tag--blue'>Маркетинг</span></div>
				<p>Придумать контент для продвижения Трекера</p>
				<div class='task__stats'>
					<span><time datetime='2023-05-20T15:00:00'><i class='fa-regular fa-calendar-days'></i> 20.05.2024</time></span>
					<div class='status__owners'><span class='status__owner status--inwork'><i class='fa-regular fa-circle-play'></i> В работе</span></div>
				</div>
				</div>
				
				</div>
				<div :class="$attrs.class">
					<div class='project-column-heading'>
					<h2 class='project-column-heading__title'>Закрыт</h2>
				</div>
				
					<div class='task' draggable='true'>
					<div class='task__tags'><span class='task__tag task__tag--orange'>Финансы</span></div>
					<p>Расчёт зарплаты сотрудникам</p>
					<div class='task__stats'>
					<span><time datetime='2023-05-20T15:00:00'><i class='fa-regular fa-calendar-days'></i> 20.05.2024</time></span>
					<div class='status__owners'><span class='status__owner status--close'><i class='fa-regular fa-circle-check'></i> Закрыт</span></div>
					</div>
				</div>
				
					<div class='task' draggable='true'>
					<div class='task__tags'><span class='task__tag task__tag--blue'>Маркетинг</span></div>
					<p>Придумать новую пиар-акцию</p>
					<div class='task__stats'>
					<span><time datetime='2023-05-20T15:00:00'><i class='fa-regular fa-calendar-days'></i> 20.05.2024</time></span>
		
					<div class='status__owners'><span class='status__owner status--close'><i class='fa-regular fa-circle-check'></i> Закрыт</span></div>
					</div>
				</div>
				
					<div class='task' draggable='true'>
					<div class='task__tags'><span class='task__tag task__tag--orange'>Финансы</span></div>
					<p>Отчёт по продажам подписки</p>
					<div class='task__stats'>
					<span><time datetime='2023-05-20T15:00:00'><i class='fa-regular fa-calendar-days'></i> 20.05.2024</time></span>
		
					<div class='status__owners'><span class='status__owner status--close'><i class='fa-regular fa-circle-check'></i> Закрыт</span></div>
					</div>
				</div>
				
				</div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const dragSrcEl = ref(null);
    const items = ref([{ id: 1, text: 'Task 1' }]);

    function handleDragStart(e) {
      e.target.style.opacity = '0.1';
      e.target.style.border = '3px dashed #c4cad3';

      dragSrcEl.value = e.target;

      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', e.target.innerHTML);
    }

    function handleDragOver(e) {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      return false;
    }

    function handleDragEnter(e) {
      e.target.classList.add('task-hover');
    }

    function handleDragLeave(e) {
      e.target.classList.remove('task-hover');
    }

    function handleDrop(e) {
      e.stopPropagation();

      if (dragSrcEl.value !== e.target) {
        dragSrcEl.value.innerHTML = e.target.innerHTML;
        e.target.innerHTML = e.dataTransfer.getData('text/html');
      }

      return false;
    }

    function handleDragEnd(e) {
      e.target.style.opacity = '1';
      e.target.style.border = 0;

      items.value.forEach((item) => {
        document.querySelector('.task').classList.remove('task-hover');
      });
    }

    return { items, handleDragStart, handleDragEnter, handleDragOver, handleDragLeave, handleDrop, handleDragEnd };
  },
};
</script>


<style scoped>

  * {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: "Raleway", sans-serif;
  }
  
  .app {
	background-color: var(--bg);
	width: 100%;
	min-height: 100vh;
  }
  
  
  .project {
	padding: 2rem;
	max-width: 75%;
	width: 100%;
	display: inline-block;
  }
  .project-info {
	padding: 2rem 0;
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
  }

  .project-tasks {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	width: 100%;
	grid-column-gap: 1.5rem;
  }
  .project-column{
	background: #e6e6e670;
	padding: 5px 10px;
	border-radius: 8px;
	
  }
  .project-column-heading {
	margin-bottom: 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
  }
  .project-column-heading__title {
	font-size: 20px;
  }

  .task {
	cursor: move;
	background-color: var(--white);
	padding: 1rem;
	border-radius: 8px;
	width: 100%;
	box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
	margin-bottom: 1rem;
	border: 3px dashed transparent;
	
  }
  .task:hover {
	box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
	border-color: rgba(162, 179, 207, 0.2) !important;
  }
  .task p {
	font-size: 15px;
	margin: 1.2rem 0;
	font-weight: 500;
  }
  .task__tag {
	border-radius: 100px;
	padding: 2px 13px;
	font-size: 12px;
	font-weight: 700;
  }
  .task__tag--pink {
	color: var(--tag-4-text);
	background-color: var(--tag-4);
  }
  .task__tag--blue {
	color: var(--tag-3-text);
	background-color: var(--tag-3);
  }
  .task__tag--green {
	color: var(--tag-2-text);
	background-color: var(--tag-2);
  }
  .task__tag--orange {
	color: var(--tag-5-text);
	background-color: var(--tag-5);
  }

  .status--open {
	color: var(--status-open-text);
	background-color: var(--status-open);
  }
  .status--inwork {
	color: var(--status-inwork-text);
	background-color: var(--status-inwork);
  }
  .status--close {
	color: var(--status-close-text);
	background-color: var(--status-close);
  }

  .task__tags {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
  }
  .task__options {
	background: transparent;
	border: 0;
	color: var(--light-grey);
	font-size: 17px;
  }
  .task__stats {
	position: relative;
	width: 100%;
	color: var(--light-grey);
	font-size: 12px;
	font-weight: 700;
  }
  
  .status__owners {
	position: absolute;
  right: 0;
  bottom: 0;
  }
  .status__owner{
	border-radius: 100px;
	padding: 2px 13px;
	font-size: 12px;
	font-weight: 700;
  }
  .task-hover {
	border: 3px dashed var(--light-grey) !important;
  }
  .task:focus, .task:hover {
	transform: scale(1.040);
  }
  .task-details {
	width: 24%;
	border-left: 1px solid #d9e0e9;
	display: inline-block;
	flex-direction: column;
	height: 100vh;
	vertical-align: top;
	padding: 3rem 2rem;
  }
  .tag-progress {
	margin: 1.5rem 0;
  }
  .tag-progress h2 {
	font-size: 16px;
	margin-bottom: 1rem;

  }
  .tag-progress p {
	display: flex;
	width: 100%;
	justify-content: space-between;
	font-weight: 500;
  }
  .tag-progress p span {
	color: #b4b4b4;
	font-weight: 700;
  }
  .tag-progress .progress {
	width: 100%;
	-webkit-appearance: none;
	-moz-appearance: none;
		 appearance: none;
	border: none;
	border-radius: 10px;
	height: 10px;
  }
  .tag-progress .progress::-webkit-progress-bar, .tag-progress .progress::-webkit-progress-value {
	border-radius:5px;
  }
  .tag-progress .progress--orаnge::-webkit-progress-bar {
	background-color: var(--tag-5-text);
  }
  .tag-progress .progress--orаnge::-webkit-progress-value {
	background: var(---tag-5);
  }
  .tag-progress .progress--orаnge::-moz-progress-bar {
	background-color: var(--tag-5-text);
  }
  .tag-progress .progress--pink::-webkit-progress-bar {
	background-color: var(--tag-4);
  }
  .tag-progress .progress--pink::-webkit-progress-value {
	background: var(--tag-4-text);
  }
  .tag-progress .progress--pink::-moz-progress-bar {
	background-color: var(--tag-4-text);
  }
  .tag-progress .progress--blue::-webkit-progress-bar {
	background-color: var(--tag-3);
  }
  .tag-progress .progress--blue::-webkit-progress-value {
	background: var(--tag-3-text);
  }
  .tag-progress .progress--blue::-moz-progress-bar {
	background-color: var(--tag-3-text);
  }
  .tag-progress .progress--green::-webkit-progress-bar {
	background-color: var(--tag-2);
  }
  .tag-progress .progress--green::-webkit-progress-value {
	background: var(--tag-2-text);
  }
  .tag-progress .progress--green::-moz-progress-bar {
	background-color: var(--tag-2-text);
  }
</style>

