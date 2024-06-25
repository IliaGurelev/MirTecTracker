  <template>
  <main class="user-page">
    <Sidebar/>
    <PersonalTasks 
      :currentUser="currentUser"
      :tasksUser="tasks"
    />
    <PersonalDiary
      :currentUser="currentUser"
      :tasks="diary"
      @clickSettings="switchSettings"
      @addToDiary="addToDiary"
      @compliteTask="compliteTask"
      class="user-page__diary"
    />
    <PersonalSettings v-if="activeSettings"
      :currentUser="currentUser"
      @submitForm="changedUser"
    />
  </main>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useTaskStore } from '@/store/taskStore.js';
  import { useDiaryStore } from '@/store/diaryStore';
  import { useDashboardStore } from '@/store/dashboardStore';
  import { useUserStore } from '@/store/userStore';
  import { uploadImage } from '@/utils/upload-image';

  import Sidebar from '@/components/Sidebar/Sidebar.vue';
  import PersonalDiary from '@/components/Personal/PersonalDiary.vue'
  import PersonalTasks from '@/components/Personal/PersonalTasks.vue'
  import PersonalSettings from '@/components/Personal/PersonalSettings.vue';

  const storeDiary = useDiaryStore();
  const storeTasks = useTaskStore();
  const storeDashboard = useDashboardStore();
  const userStore = useUserStore();
  
  const { tasks } = storeToRefs(storeTasks)
  const { diary } = storeToRefs(storeDiary);
  const { dashboards } = storeToRefs(storeDashboard);

  const currentUser = ref(JSON.parse(localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser')));
  
  const activeSettings = ref(false);
  const currentTask = ref({});
  const isActiveSideBarTask = ref(false);

  const switchSettings = () => {
    activeSettings.value = !activeSettings.value;
  }

  const changedUser = async (user) => {
    user.avatar = await uploadImage(user.avatar);
    await userStore.editCurrentUser(user);
    currentUser.value = JSON.parse(localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser'))
  }

  const addToDiary = (task) => {
    storeDiary.addDiaryTask(currentUser.value.id, task);
  }

  const compliteTask = (id) => {
    storeDiary.removeDiaryTaskById(id);
  }

  onMounted(async () => {
    await storeDashboard.fetchDashboards(currentUser.value.id);
    storeTasks.fetchAllTasks(dashboards.value);
    storeDiary.fetchDiary(currentUser.value.id);
  }) 
</script>

<style lang="scss" scoped>
  .user-page {
    display: flex;
    margin-top: 80px;
    margin-left: 90px;
    column-gap: 60px;

    @media (max-width: 600px) {
      margin-left: 10px;
      margin-right: 10px;
    }

    @media (max-width: 1177px) {
      flex-direction: column-reverse;
      gap: 15px;

      &__diary {
        margin-bottom: 20px;
      }
    }
  }
</style>
