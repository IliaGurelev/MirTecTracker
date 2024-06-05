  <template>
<aside class='task-details'>
	<h2>Статус задач по портфелям</h2>
    <div v-for="(barData, index) in progressBarsData" :key="index" class="tag-progress">
		<div class='tag-progress'>
			<p>{{ barData.label }} <span>{{barData.completedCount}} / {{barData.openCount  }}</span></p>
      <div class="progress-bar__progress" :style="{width: 100 + '%', backgroundColor: barData.color}">
		<div class="progress" :style="{width: barData.progress + '%', backgroundColor: barData.bcolor}"></div>
	</div> 
	</div>
	</div>
  </aside>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  items: {
    type: Object,
    required: true
  },
  colors: {
    type: Object,
    default: () => ({
      "Разработка": "#f2dcf5",
      "Маркетинг": "#ceecfd",
      "Продажи": "#d6ede2",
      "Финансы": "#fde3ce",
    })
  },
  backcolor: {
    type: Object,
    default: () => ({
      "Разработка": "#a734ba",
      "Маркетинг": "#2d86ba",
      "Продажи": "#13854e",
      "Финансы": "#ba662e",
    })
  }
});

const progressBarsData = computed(() => {
  const uniqueTags = new Set(props.items.map(item => item.briefcase.name));
  const data = [];

  uniqueTags.forEach(name => {
    const totalTasks = props.items.filter(item => item.briefcase.name === name).length;
    const completedTasks = props.items.filter(item => item.briefcase.name === name && item.status === "close" ).length;
    const progress = (completedTasks / totalTasks) * 100;

    data.push({
      label: name,
      progress,
      color: props.colors[name] || "#9E9E9E", 
	    bcolor: props.backcolor[name] || "#9E9E9E", 
      openCount: props.items.filter(item => item.briefcase.name === name && item.status === "open" ||  item.briefcase.name === name &&   item.status === "work" ||  item.briefcase.name=== name && item.status === "close").length,
      completedCount: completedTasks
    });
  });

  return data;
});


</script>


  
  <style scoped>
  .progress{
	width: 100%;
	border: none;
	border-radius: 10px;
	height: 10px;

  }
  .task-details {
    position: fixed;
    top: 20px;
	margin-top: 1rem;
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
	font-weight: 600;
	margin-bottom: 0.5rem
  }
  .tag-progress p span {
	color: #b4b4b4;
	font-weight: 700;
  }
  .progress-bar__label {
	display: flex;
	width: 100%;
	justify-content: space-between;
	font-weight: 500;
  }
  .progress-bar__stats-item {
	color: #b4b4b4;
	font-weight: 700;
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

  
  .progress-bar__progress {
	width: 100%;
	border: none;
	border-radius: 10px;
	height: 10px;
	z-index: 200;
  }
  

  

  </style>