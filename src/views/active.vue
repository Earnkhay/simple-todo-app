<template>
    <div class="container mt-3">
        <div class="row justify-content-center">
            <div class="col-md-12">

    <h5>Active Todos</h5>                   
                <div class="row justify-content-center">
                    <div class="card row m-2 col-md-7 todocard" v-for="(activetask, index) in activetasks" :key="index" :class="[activetask.done ? 'success' : 'bg-light' ]">
                        <div class="card-body d-flex justify-content-between">
                            <div class="fw-bold text-wrap text-break" :class=" [activetask.done ?  'text-decoration-line-through' : 'text-dark']">{{ activetask.title }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  <router-view/>
</template>

<script>
import { Vue } from 'vue-class-component';

export default class activeView extends Vue {
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