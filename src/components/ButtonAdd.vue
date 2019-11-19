<template>
  <div id="menu" class="row">
    <div class="mt-3" style=" left: 50%;">
      <button v-on:click="isVisibleAdd = true">
        <i class="fas fa-user-plus"></i>
      </button>
      <AddEmp>
        <ShadeAddEmp class="shade" v-if="isVisibleAdd">
          <ModalAddEmp class="modal"></ModalAddEmp>
          <div class="modal-dialog">
            <div class="modal-content">
              <infoHeader class="modal-header">
                <h1 class="container">Add New Employee</h1>
              </infoHeader>
              <InfoEmployee class="modal-body">
                <table class="table table-sm table-light">
                  <thead></thead>
                  <tbody>
                    <tr>
                      <th scope="row">Name</th>
                      <input class="w3-input" v-model="employee.name" />
                    </tr>
                    <tr>
                      <th scope="row">Age</th>
                      <input class="w3-input" v-model="employee.age" />
                    </tr>
                    <tr>
                      <th scope="row">Address</th>
                      <input class="w3-input" v-model="employee.address" />
                    </tr>
                    <tr>
                      <th scope="row">Company</th>
                      <input class="w3-input" v-model="employee.company" />
                    </tr>
                    <tr>
                      <th scope="row">Avartar</th>
                      <div class="custom-file w3-input" style="    width: 55%;">
                        <input type="file" class="custom-file-input" id="inputGroupFile04" />
                        <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
                      </div>
                    </tr>
                  </tbody>
                </table>
              </InfoEmployee>
              <infoFooter class="modal-footer">
                <button @click="isVisibleAdd=false" class="btn btn-info">Close</button>
                <button class="btn btn-info" @click="addEmploy(employee), isVisibleAdd=false">save</button>
              </infoFooter>
            </div>
          </div>
        </ShadeAddEmp>
      </AddEmp>
    </div>
  </div>
</template>

<script>

import posed, { AddEmp } from "vue-pose";

export default {
  props:{
      isVisibleAdd: Boolean,
      employee: Object,
      employees:  Object
  },
  components: {
    AddEmp,
    ShadeAddEmp: posed.div({
      enter: {
        opacity: 1,
        beforeChildren: true,
        transition: { duration: 200, ease: "linear" }
      },
      exit: {
        opacity: 0,
        afterChildren: true,
        transition: { duration: 200, ease: "linear" }
      }
    }),

    ModalAddEmp: posed.div({
      enter: { opacity: 1, z: 0 },
      exit: { opacity: 0, z: -150 }
    }),
    infoHeader: posed.div({}),
    InfoEmployee: posed.div({}),
    infoFooter: posed.div({})
  },
  methods: {
    addEmploy: function(employeeInput) {
     this.$emit("addEmployees", employeeInput)
    },
  }
};
</script>
<style scoped>
@import "https://github.com/htactive-cuongdq/baitap-vue/blob/task/node_modules/w3.css";

button {
  border: none;
  border-radius: 300px;
  color: #000;
  font-size: 18px;
  letter-spacing: -0.2px;
  cursor: pointer;
  padding: 10px 30px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}

.shade {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  perspective: 500px;
  transform: translateZ(0);
}

.modal {
  width: 400px;
  height: 250px;
  background: white;
  border-radius: 10px;
}
.modal-dialog {
  width: 2000px;
}
</style>>
  
</style>