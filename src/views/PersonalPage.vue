  <template>
  <main class="user-page">
    <Sidebar/>
    <PersonalTasks 
      :currentUser="currentUser"
      :tasksUser="tasks"
      @clickTask="openSidebarTask"
    />
    <PersonalDiary
      :currentUser="currentUser"
      :tasks="diary"
      @clickSettings="switchSettings"
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
  import { useMainStore } from '@/store.js';
  import { storeToRefs } from 'pinia';
  import { uploadImage } from '@/utils/upload-image';

  import Sidebar from '@/components/Sidebar/Sidebar.vue';
  import PersonalDiary from '@/components/Personal/PersonalDiary.vue'
  import PersonalTasks from '@/components/Personal/PersonalTasks.vue'
  import PersonalSettings from '@/components/Personal/PersonalSettings.vue';

  const store = useMainStore();

  const {diary, tasks} = storeToRefs(store);

  const currentUser = ref(JSON.parse(localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser')));
  
  const activeSettings = ref(false);
  const currentTask = ref({});
  const isActiveSideBarTask = ref(false);

  const switchSettings = () => {
    activeSettings.value = !activeSettings.value;
  }

  const changedUser = async (user) => {
    user.avatar = await uploadImage(user.avatar);
    await store.editCurrentUser(user);
    currentUser.value = JSON.parse(localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser'))
  }

  const openSidebarTask = (task) => {
    
  }

  onMounted(async () => {
    await store.fetchDashboards();
    store.fetchAllTasks();
    store.fetchDiary();
    //store.loginCurrentUser(0);
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

    @media (max-width: 750px) {
      flex-direction: column-reverse;

      &__diary {
        margin-bottom: 20px;
      }
    }
  }
</style>
