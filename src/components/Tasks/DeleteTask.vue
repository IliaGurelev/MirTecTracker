

<template>
<div class="delete__tusk">
      <div
        class="button__delete"
        :class="{ over: overTrash }"
        @dragstart="startDrags($event)"
        @drop="onDrops($event)"
        @dragover.prevent="overTrash = true"
        @dragleave.prevent="overTrash = false"
        @dragenter.prevent
      >      <h3>Удалить задачу</h3>
      </div>
    </div>
</template>
<script setup>
	import {ref } from 'vue'
  const { items, sort } = defineProps({
	items: {
	  type: Array,
	  required: true
	},
	sort: {
	  type: Boolean,
	  default: false
	},
  })

  const getList = list => (items ? items.filter(item => item.list == list) : [])
  
  const overTrash = ref(false)

const startDrags = (event, item) => {
  event.dataTransfer.dropEffect = 'copy'
  event.dataTransfer.effectAllowed = 'copy'
  event.dataTransfer.setData('itemId', item.id)
}



const onDrops = event => {
  overTrash.value = false
  const itemId = event.dataTransfer.getData('itemId')
  const itemPosition = items.findIndex(item => item.id == itemId)
  items.splice(itemPosition, 1)
}

  
  
  
  </script>
  
<style lang="scss" scoped>
.button__delete {
  background-color: var(--c-border, var(--color-text-important));
  height: 50px;
  max-width: 100%;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
  transition:  transform 0.2s, background 0.2s, color 0.2s;
  margin: 20px auto;
  padding: 20px;
   h3{
	font-size: 20px;
	color:white;
  }
  &:hover {
    background-color: var(--bg);
	border:3px dashed var(--color-text-important);
	color: black;
		transform: scale(1.05);
  }

  &.over {
	background-color: var(--bg);
	border:3px dashed var(--color-text-important);
	color: black;
		transform: scale(1.05);
  }
}

@media (max-width: 800px){
	.delete__tusk{
		display:none;
	}
}
</style>