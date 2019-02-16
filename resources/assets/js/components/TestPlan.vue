<template>
  <div>
    <div>
      <span class="title">LỊCH THI</span>
    </div>
    <div>
      <span class="title">{{user.Ho_ten}}</span>
    </div>
    <div>
      <b-form-select
       
        v-model="selected"
        :options="options"
        size="sm"
        class="mt-3"
      />
    </div>
    <div>
      <ag-grid-vue
        style="width: 100%; height: 100%;"
        class="ag-theme-balham"
        :columnDefs="columnDefs"
        :rowData="rowData"
      ></ag-grid-vue>
    </div>
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
      schoolyear: {},
      options: [],
      selected: null,
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
    this.initYears(2000, 2100);
    this.loadDB();
  },
  computed: {
    user() {
      return this.currentUser();
    }
  },
  methods: {
    //Chuẩn bị năm học//
    loadDB() {
      this.schoolyear.schoolyear = this.selected;

      Users.callServerApi("ExamSchedule", this.schoolyear)
        .then(points => {
          this.bangdiem = points;
          this.rowData = points;
        })
        .catch(err => {
          console.error(err);
        });
    },

    //==========Hàm chuẩn bị năm học cho select box================//
    initYears(yearmin, yearmax) {
      this.options = [];

      var tmpYear = new Date().getFullYear();
      this.selected = tmpYear - 1 + "-" + tmpYear;

      this.options.push({ value: null, text: "--Chọn năm học--" });

      for (var i = 0; i < yearmax - yearmin; i++) {
        this.options.push({
          value: yearmin + i + "-" + (yearmin + i + 1),
          text: yearmin + i + "-" + (yearmin + i + 1)
        });
      }

      return this.options;
    }
  }
};
</script>