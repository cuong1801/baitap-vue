<template>
  <div>
    <a v-on:click="isEdit = true">
      <i class="fas fa-user-edit"></i>
    </a>
    <EditEmp>
      <ShadeEditEmp class="shade" v-if="isEdit">
        <ModalEditEmp class="modal"></ModalEditEmp>
        <div class="modal-dialog">
          <div class="modal-content">
            <infoHeader class="modal-header">
              <h1>Do you want to edit?</h1>
            </infoHeader>
            <InfoEmployee class="modal-body">
              <table class="table table-sm table-light">
                <thead></thead>
                <tbody>
                  <tr>
                    <th scope="row">Name</th>
                    <input v-model="employeeInput.name" placeholder="sds" />
                  </tr>
                  <tr>
                    <th scope="row">Age</th>
                    <input v-model="employeeInput.age" />
                  </tr>
                  <tr>
                    <th scope="row">Address</th>
                    <input v-model="employeeInput.address" />
                  </tr>
                  <tr>
                    <th scope="row">Company</th>
                    <input v-model="employeeInput.company" />
                  </tr>
                  <tr>
                    <th scope="row">Avartar</th>
                    <div class="custom-file" style="    width: 55%;">
                      <input type="file" class="custom-file-input" id="inputGroupFile04" />
                      <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
                    </div>
                  </tr>
                </tbody>
              </table>
            </InfoEmployee>
            <infoFooter class="modal-footer">
              <button @click="isEdit=false" class="btn btn-info">Close</button>
              <button class="btn btn-info" @click="EditEmp(employeeInput, index), isEdit=false">save</button>
            </infoFooter>
          </div>
        </div>
      </ShadeEditEmp>
    </EditEmp>
  </div>
</template>
<script>
import posed2, { EditEmp } from "vue-pose";

export default {
  props: {
    isEdit: Boolean,
    index: Number,
    employeeInput: Object
  },
  components: {
    EditEmp,
    ShadeEditEmp: posed2.div({
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

    ModalEditEmp: posed2.div({
      enter: { opacity: 1, z: 0 },
      exit: { opacity: 0, z: -150 }
    }),
    infoHeader: posed2.div({}),
    InfoEmployee: posed2.div({}),
    infoFooter: posed2.div({})
  },
  methods: {
    EditEmp: function(employeeInput, index) {
      this.$emit("editEmployee",employeeInput, index);
    }
  }
};
</script>
<style scope>
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
</style>