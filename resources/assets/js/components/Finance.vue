<template>
  <div>
    <div>
      <span class="title">THÔNG TIN TÀI CHÍNH</span>
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
  },

  mounted() {
    Users.callServer("Finance")
      .then(points => {
        this.bangdiem = points;
        this.rowData = points;
      })
      .catch(err => {
        console.error(err)
        //alert(err);
      });
  },
  computed: {
    user() {
      return this.currentUser();
    }
  }
};
</script>