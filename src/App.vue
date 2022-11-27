<template>
  <div class="container p-3 fw-bold mt-3">
    <h2 class="fw-bold">Good {{ greet() }}</h2>
    <h4>Welcome to your todo app, create new todo below</h4>
  </div>

  <div class="container btngroup">
        <div class="row justify-content-center">
            <div class="btn-group col-md-4">
                <router-link :to="{name: 'home'}" class="btn btn-info allbtn shadow" active-class="text-dark fw-bold sh">All</router-link>
                <router-link :to="{name: 'active'}" class="btn btn-danger undonebtn shadow" active-class="text-dark fw-bold sh">Active</router-link>
                <router-link :to="{name: 'completed'}" class="btn btn-success donebtn shadow" active-class="text-dark fw-bold sh">Completed</router-link>
            </div>
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
export default class HomeView extends Vue {
  d = new Date()
  hour = this.d.getHours()
   greet(){
        if (this.hour >= 0 && this.hour <= 11) {
            return "morning"            
        } else if(this.hour >= 12 && this.hour <= 17) {
            return "afternoon"
        }else{
            return "evening"
        }
    }
}    
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.allbtn:hover, .undonebtn:hover, .donebtn:hover{
        background-color: transparent !important;
        color: black !important;
        font-weight: bolder;
        font-size: 17px;
        text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
    }

    h2{
      text-shadow: 1px 2px rgba(0, 0, 0, 0.25);
    }

    .sh{
        text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
    }

    @media (min-width: 322px) and (max-width:767px) {
        .btngroup{
            width: 70%;
        }
    }
</style>
