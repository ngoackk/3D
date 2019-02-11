<template>
  <div>
    <div>
      <span class="title">THÔNG TIN TÀI CHÍNH</span>
    </div>
    <div>
      <span class="title">Sinh viên: {{currentName.name}}</span>
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
        headerName: "Môn học",
        field: "Ten_mon",
        sortable: true,
        filter: true,
        suppressSizeToFit: true
      },
      {
        headerName: "Năm học",
        field: "nam_hoc",
        sortable: true,
        filter: true,
        suppressSizeToFit: true,
        width: 300
      },

      {
        headerName: "Học kỳ",
        field: "Hoc_ky",
        sortable: true,
        filter: true,
        suppressSizeToFit: true
      },
      {
        headerName: "Số tiền phải nộp",
        field: "So_tien_phai_nop",
        sortable: true,
        filter: true,
        suppressSizeToFit: true
      },

      {
        headerName: "Số tiền đã nộp",
        field: "So_tien_da_nop",
        sortable: true,
        filter: true,
        suppressSizeToFit: true
      },
      {
        headerName: "Còn thiếu",
        field: "Thieu_thua",
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

  mounted() {
    Users.callServer("Finance")
      .then(points => {
        this.bangdiem = points;
        this.rowData = points;
      })
      .catch(err => {
        alert(err);
      });
  },
  computed: {
    currentName() {
      return { name: Users.getCurrent().Ho_ten };
    }
  }
};
</script>