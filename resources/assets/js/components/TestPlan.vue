<template>
  <div>
    <div>
      <span class="title">LỊCH THI</span>
    </div>
    <div>
      <span class="title">{{user.Ho_ten}}</span>
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
      schoolyear: { schoolyear: "2017-2018" },
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
        headerName: "Tên môn học",
        field: "Ten_mon",
        sortable: true,
        filter: true,
        suppressSizeToFit: true,
        width: 300
      },

      {
        headerName: "Ngày thi",
        field: "Ngay_thi",
        sortable: true,
        filter: true,
        suppressSizeToFit: true
      },
      {
        headerName: "Giờ thi",
        field: "Gio_thi",
        sortable: true,
        filter: true,
        suppressSizeToFit: true
      },
      {
        headerName: "Phòng",
        field: "Ten_phong",
        sortable: true,
        filter: true,
        suppressSizeToFit: true
      }
    ];
  },

  mounted() {
    Users.callServerApi("ExamSchedule",this.schoolyear)
      .then(points => {
        this.bangdiem = points;
        this.rowData = points;
      })
      .catch(err => {
        console.error(err);
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