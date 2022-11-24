<template>
    <div class="container mt-5">
  <div class="row justify-content-center">
  <div class="col-md-12">

    <!-- Button trigger modal -->
      <!-- <button type="button" class="btn fw-bold" id="new" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <span class="ps-3 pe-1"><i class="fa-solid fa-circle-plus"></i></span>Create New
      </button> -->

      <!-- Modal -->
      <!-- <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
          <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Create New Task</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form action="" >
          <div class="modal-body">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">New Task</label>
                    <input @keydown.prevent.enter="addTask" class="form-control" type="text" placeholder="Input new Task" v-model="title">
                  </div>
          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click.prevent="addTask">Add</button>
          </div>
          </form>
          </div>
      </div>
      </div> -->

    <h5>Recent Tasks</h5>                   
            <div class="row justify-content-center">
              <div class="card row m-2 col-md-7 todocard" v-for="(activetask, index) in activetasks" :key="index" :class="[activetask.done ? 'success' : 'bg-light' ]">
                  <div class="card-body d-flex justify-content-between">
                      <!-- <div class="form-check pt-0 ps-4">
                        <input class="form-check-input" type="checkbox" value="" v-model="activetask.done" @click="check(activetask)" id="flexCheckDefault">
                      </div> -->
                      <div class="fw-bold text-wrap text-break" :class="[activetask.done ?  'text-decoration-line-through' : 'text-dark']">{{ activetask.title }}</div>
                      <!-- <div class="flexbtn">
                          <button class="bg-info border-info editbtn" v-if="activetask.done == false" data-bs-toggle="modal" data-bs-target="#exampleModal1" @click.prevent="editTask(activetask)"><i class="fa-solid fa-pen-to-square text-light"></i></button>
                          <button class="bg-danger border-danger mx-1 delbtn" @click="removeTask(activetask)"><i class="fa-solid fa-trash text-light" ></i></button>
                      </div> -->
                  </div>
            </div>
          </div>
  </div>
  
    <!-- Edit Modal -->
    <!-- <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
          <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Edit current Task</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form action="" >
          <div class="modal-body">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Edit Task</label>
                    <input @keydown.prevent.enter="updateTask(currentTask)" class="form-control" type="text" placeholder="Input new Task" v-model="editTitle">
                  </div>
          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click.prevent="updateTask(currentTask)"> Save Changes</button>
          </div>
          </form>
          </div>
      </div>
      </div> -->
  </div>
  </div>
  <router-view/>
</template>

<script>
import { Options, Vue } from 'vue-class-component';

@Options({
components: {
},
})
export default class activeView extends Vue {
  tasks = []
  currentTask = '' 
  title = ''
  done = false
  editTitle = ''
  activetasks = []
  mounted (){
    this.activetasks = JSON.parse(localStorage.getItem("tasks"));
    this.activetasks = this.activetasks.filter((t) => {
            if (t.done == false) {
                return t
            }
        })

      
      console.log('hello', this.activetasks);
  }
  addTask(){
      if(this.title != '') {
          this.tasks = this.tasks || []
          this.tasks.unshift(
              {
              title: this.title,
              id: Date.now(),
              done: false,
            }
          );
          localStorage.setItem("tasks", JSON.stringify(this.tasks));
          this.title = ''
      }
  }

  check(task){
      const taskToUpdate = this.activetasks.find((t) => {
        if(t === task){
          task.done = !task.done
        }
        })
      localStorage.setItem("tasks", JSON.stringify(this.activetasks));
  }
  removeTask(task){
      this.activetasks = this.activetasks.filter((data) => {
        if (data != task) {
          return task
        }
      })
      localStorage.setItem("tasks", JSON.stringify(this.activetasks));
  }
  editTask(task){
      const itemToBeEdited = this.activetasks.find((data) => data === task);
      this.editTitle = itemToBeEdited.title
      this.currentTask = task
  }
  updateTask(currentTask){
      currentTask.title = this.editTitle
      const result = this.activetasks.filter((data) => {
          if (data.id !== currentTask.id) {
              return data
          }
      })

      result.unshift(currentTask)
      console.log(result);

      localStorage.setItem('tasks', JSON.stringify(result));
  }    
}
</script>

<style scoped>
  #new{
      background-color: rgb(68, 68, 170);
      border-color:  rgb(68, 68, 170);
      color: white;
  }
  #new:hover{
      color: black;
  }
  #dashboard:hover{
      background-color: rgb(68, 68, 170);
      color: white;
  }

  h5{
      border-bottom: 1px groove;
      padding: 20px;
      font-weight: bold;
      text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
  }

  li{
      padding-bottom: 15px;
      list-style: none;
  }

  img{
      max-width: 100%;
      height: auto;
  }

  .success{
      background-color: rgb(164, 243, 164);
  }
  .through{
      text-decoration: line-through;
  }

  .flexbtn{
      display: block !important;
  }

  .editbtn{
      margin-bottom: 5px;
      margin-left: 3px !important;
  }

@media (min-width: 295px) and (max-width: 575px) {
  .todocard{
      width: 90%;
  }
}

@media screen and (max-width: 294px) {
  .todocard{
      padding: 1px !important;
      width: 95%
  }

}
</style>