<template>
  <div>
    <a href="#" v-on:click="isDelete=true">
      <i class="fas fa-user-times"></i>
    </a>
    <DeleteEmp>
      <ShadeDeleteEmp class="shade" v-if="isDelete">
        <ModalDeleteEmp class="modal"></ModalDeleteEmp>
        <div class="modal-dialog">
          <div class="modal-content">
            <infoHeader class="modal-header">
              <h4>Do you want to Delete???</h4>
            </infoHeader>

            <infoFooter class="modal-footer">
              <button @click="isDelete=false" class="btn btn-info">Close</button>
              <button class="btn btn-info" @click="deleteEmploy(index), isDelete=false">Delete</button>
            </infoFooter>
          </div>
        </div>
      </ShadeDeleteEmp>
    </DeleteEmp>
  </div>
</template>
<script>
import posed1, { DeleteEmp } from "vue-pose";

export default {
  props: {
    isDelete: Boolean,
    index: Number,
    // employeeInput: Object
  },
  components: {
    DeleteEmp,
    ShadeDeleteEmp: posed1.div({
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

    ModalDeleteEmp: posed1.div({
      enter: { opacity: 1, z: 0 },
      exit: { opacity: 0, z: -150 }
    }),
    infoHeader: posed1.div({}),
    InfoEmployee: posed1.div({}),
    infoFooter: posed1.div({})

  },
  methods: {
    deleteEmploy(index) {
      this.$emit("deleteEmployee", index);
    }
  }
};
</script>
<style scope>
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
</style>