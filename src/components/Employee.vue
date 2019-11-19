<template>
  <div class="container">
    <div class="row">
      <table class="table table-striped border-0">
        <thead>
          <tr v-for="(item,index) in header" :key="index" class="bg-danger">
            <th>
              <span>{{item.name}}</span>
              <br />
            </th>

            <th>
              <span>{{item.address}}</span>
              <br />
            </th>

            <th>
              <span>{{item.age}}</span>
              <br />
            </th>

            <th>
              <span>{{item.company}}</span>
              <br />
            </th>
            <th>
              <br />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in employees" :key="index">
            <td> 
              <router-link 
              tag="a"
              class="nav-link"
               :to=" { name: 'DetailPage', params: { id: index, obj: employees[index]  }}"
              >{{item.name}}</router-link>
            </td>

            <td>{{ item.address }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.company }}</td>
            <td>
              <ButtonDelete
                :isDelete="isDelete"
                :index="index"
                @deleteEmployee="deleteEmployee"
              ></ButtonDelete>
              <ButtonEdit
                :isEdit="isEdit"
                :index="index"
                :employeeEdit ="employees[index]"
                @editEmployee="editEmployee"
              ></ButtonEdit>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="menu" class="row">
      <ButtonAdd
        :isVisible="isVisible"
        :employee="employeeInput"
        :employees="employees"
        @addEmployees="addNewEmployee"
      ></ButtonAdd>
    </div>


  </div>
</template>

<script>
import posed, { AddEmp } from "vue-pose";
import posed1, { DeleteEmp } from "vue-pose";
import posed2, { EditEmp } from "vue-pose";
import ButtonAdd from "./ButtonAdd.vue";
import ButtonDelete from "./ButtonDelete.vue";
import ButtonEdit from "./ButtonEdit.vue";
import DetailPage from "./DetailPage.vue";
import Data from "./data.json";
export default {
  name: "HelloWorld",
  data() {
    return {
      isVisible: false,
      isDelete: false,
      isEdit: false,
      employeeInput: 
        {
          name: "",
          address: "",
          age: "",
          company: "",
          avatar: ""
        }
      ,
      header: [
        {
          name: "Name",
          address: "Address",
          age: "Age",
          company: "Company",
          avatar: ""
        }
      ],
      employees: Data.employees
    
    };
  },
  components: {
     ButtonAdd,
    ButtonDelete,
    ButtonEdit,
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
    addNewEmployee: function(employeeInput) {
      let employeetmp = {
        id: Math.round(Math.random() * 10000),
        name: this.employeeInput.name,
        address: this.employeeInput.address,
        age: this.employeeInput.age,
        company: this.employeeInput.company,
        avatar: this.employeeInput.avatar
      };
      this.employees.push(employeetmp);
      this.employeeInput.name = "";
      this.employeeInput.address = "";
      this.employeeInput.age = "";
      this.employeeInput.company = "";
      this.employeeInput.avatar = "";
    },
    deleteEmployee: function(index) {
      this.employees.splice(index, 1);
    },
    editEmployee: function( employeeEdit, index) {
      let employeetmp = {

        name: this.employeeEdit.name,
        address: this.employeeEdit.address,
        age: this.employeeEdit.age,
        company: this.employeeEdit.company,
        avatar: this.employeeEdit.avatar
      };
      employees[index]=employeetmp
    }
    
  }
};
</script>

<style scoped>
body {
  display: flex;
  height: 100vh;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(-180deg, #a5ff36 0%, #09ca92 96%);
}

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
