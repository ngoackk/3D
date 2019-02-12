<template>
  <div>
    <div>
      <span class="title">LỊCH HỌC</span>
    </div>
    <div>
      <span class="title">Sinh viên: {{user.Ho_ten}}</span>
    </div>
    <ag-grid-vue
      style="width: 100%; height: 100%;"
      class="ag-theme-balham"
      :columnDefs="columnDefs"
      :rowData="rowData"
    ></ag-grid-vue>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";
import { Users, Data } from "../apis/api";

export default {
  name: "App",

  inject: ["currentUser"],
  data() {
    return {
      columnDefs: null,
      rowData: null,
      bangdiem: []
    };
  },
  components: {
    AgGridVue
  },
  beforeMount() {
    this.columnDefs = [
      {
        headerName: "Tên học phần",
        field: "TenMonTC",
        sortable: true,
        filter: true,
        suppressSizeToFit: true,
        width: 300
      },
      {
        headerName: "Tín chỉ",
        field: "So_tin_chi",
        sortable: true,
        filter: true,
        width: 100,
        suppressSizeToFit: true
      },
      {
        headerName: "Lớp",
        field: "Ky_hieu_lop_tc",
        sortable: true,
        filter: true,
        suppressSizeToFit: true
      },
      {
        headerName: "Thứ",
        field: "Thu",
        sortable: true,
        filter: true,
        width: 70
      },
      {
        headerName: "Phòng",
        field: "Phong",
        sortable: true,
        filter: true,
        suppressSizeToFit: true
      },
      {
        headerName: "Tiết",
        field: "Tiet",
        sortable: true,
        filter: true,
        suppressSizeToFit: true
      }
    ];

    // this.rowData = [
    //   { make: "Toyota", model: "Celica", price: 35000 },
    //   { make: "Ford", model: "Mondeo", price: 32000 },
    //   { make: "Porsche", model: "Boxter", price: 72000 }
    // ];

    // fetch("http://103.28.37.34:98/api/huyen")
    //   .then(result => result.json())
    //   .then(rowData => (this.rowData = rowData));
  },

  computed: {
    user() {
      return this.currentUser();
    }
  },
  mounted() {
    Users.callServer("StudySchedule")
      .then(points => {
        this.bangdiem = points;
        this.rowData = points;
      })
      .catch(err => {
        alert(err);
      });
  }
};
</script>