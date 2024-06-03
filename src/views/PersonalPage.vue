  <template>
  <main class="user-page">
    <Sidebar/>
    <PersonalTasks 
      :currentUser="currentUser"
      :tasksUser="tasks"
      class="user-page__tasks"
    />
    <PersonalDiary
      :currentUser="currentUser"
      :tasks="diary"
      class="user-page__diary"
    />
  </main>
</template>

<script setup>
  import { onMounted, computed } from 'vue';
  import { useMainStore } from '@/store.js';
  import { storeToRefs } from 'pinia';
  import Sidebar from '@/components/Sidebar/Sidebar.vue';
  import PersonalDiary from '@/components/Personal/PersonalDiary.vue'
  import PersonalTasks from '@/components/Personal/PersonalTasks.vue'

  const store = useMainStore();

  const {diary, tasks, currentUser} = storeToRefs(store);

  onMounted(() => {
    store.fetchTasks();
    store.fetchDiary();
    store.loginCurrentUser(0);
  }) 
</script>

<style lang="scss" scoped>
  .user-page {
    display: flex;
    margin-top: 80px;
    margin-left: 120px;

    &__tasks {
      margin-right: 50px;
    }

    @media (max-width: 600px) {
      margin-left: 10px;
      margin-right: 10px;
    }

    @media (max-width: 750px) {
      flex-direction: column-reverse;

      &__tasks {
        margin-right: 0;
      } 

      &__diary {
        margin-bottom: 20px;
      }
    }
  }
</style>
