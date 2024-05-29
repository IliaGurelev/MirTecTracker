<script setup>

</script>

<template >
			<aside class='task-details'>
		<div class='tag-progress'>
			<h2>Статус задач по портфелям</h2>
			<div class='tag-progress'>
				<p>Финансы <span>2/2</span></p>
				<progress class="progress progress--orаnge" max="2" value="2"> 0 </progress>
			</div>
			<div class='tag-progress'>
				<p>Разработка <span>0/4</span></p>
				<progress class="progress progress--pink" max="4" value="0"> 0 </progress>
			</div>
			<div class='tag-progress'>
				<p>Маркетинг <span>1/4</span></p>
				<progress class="progress progress--blue" max="4" value="1"> 1 </progress>
			</div>
			<div class='tag-progress'>
				<p>Продажи <span>0/1</span></p>
				<progress class="progress progress--green" max="1" value="0"> 0 </progress>
			</div>
		</div>
		</aside>
</template>

<style lang="scss" scoped>

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