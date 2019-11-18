<template>
        <div class="container">
            <div>
                <h1>Chi tiết nhân viên</h1>
                <h2>{{id}}</h2>
                <h3>{{dataEmployee}}</h3>
            </div>
        </div>
</template>
<script>
export default {

     data() {
    return {
      props: {  
       id: Number,
       
      }
      
    
    };
  }

}
console.log(this.DataEmployee)
</script>
<style>
    
</style>