<template>
    <div class="container">
        <div>
        <router-link 
              tag="button"
              class="btn btn-primary"
               :to=" { path:'/'}"
        >Back sử dụng router-link</router-link>
        <button 
            class="btn btn-primary"
            @click="backHome()">Back sử dụng router.push</button>
        </div>
      <img style="width: 126px;" :src="obj.avatar" alt="">
      <div>
          <h2>{{obj.name}}</h2>
      </div>
      <div>
          <span>Tuổi: {{obj.age}}</span>
          <span>Địa Chỉ: {{obj.address}}</span>
      </div>
          <span>Company: {{obj.company}}</span>

  
    </div>
</template>

<script>
export default {
    props:{
        id: Number,
        obj: Object
    },
    methods: {
        backHome(){
            this.$router.push({name: 'Employee'})
        }
    },
}
</script>
