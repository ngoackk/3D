<template>
  <div>
    <div>
      <span class="title">THÔNG TIN TÀI CHÍNH</span>
    </div>
    <div>
      <span class="title">Sinh viên: {{user.Ho_ten}}</span>
    </div>
    <div>
      <b-table
        id="table-transition-example"
        :items="finance_sort"
        :fields="fields"
        striped
        small
        :primary-key="id_sv"
      />
    </div>
    <ag-grid-vue
      style="width: 100%; height: 100%;"
      class="ag-theme-balham"
      :columnDefs="columnDefs"
      :rowData="rowData"
      rowSelection="multiple"
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
     // columnDefs: null,
     // rowData: null,
      finance_sort: [],
      finance_detail: [],
      fields: []
    };
  },
  components: {
   // AgGridVue
  },
  beforeMount() {
    (this.fields = [
      { key: "nam_hoc", label: "Năm học" },
      { key: "Hoc_ky", label: "Học kỳ" },
      { key: "So_tien_da_nop", label: "Đã nộp" },
      { key: "So_tien_nop", label: "Phải nộp" },
      { key: "Thieu_thua", label: "Thừa thiếu" }
     ])
     //,
    //   (this.columnDefs = [
    //     {
    //       headerName: "Năm học",
    //       field: "nam_hoc",
    //       sortable: true,
    //       filter: true,
    //       suppressSizeToFit: false
    //     },

    //     {
    //       headerName: "Học kỳ",
    //       field: "Hoc_ky",
    //       sortable: true,
    //       filter: true,
    //       suppressSizeToFit: false
    //     },
    //     {
    //       headerName: "Số tiền đã nộp",
    //       field: "So_tien_da_nop",
    //       sortable: true,
    //       filter: true,
    //       suppressSizeToFit: true
    //     },
    //     {
    //       headerName: "Số tiền miễn giảm",
    //       field: "So_tien_mien_giam",
    //       sortable: true,
    //       filter: true,
    //       suppressSizeToFit: true
    //     },

    //     {
    //       headerName: "Số tiền nộp",
    //       field: "So_tien_nop",
    //       sortable: true,
    //       filter: true,
    //       suppressSizeToFit: true
    //     },
    //     {
    //       headerName: "Số tiền trả lại",
    //       field: "So_tien_tra_lai",
    //       sortable: true,
    //       filter: true,
    //       suppressSizeToFit: true
    //     },
    //     {
    //       headerName: "Số tiền thừa / thiếu",
    //       field: "Thieu_thua",
    //       sortable: true,
    //       filter: true,
    //       suppressSizeToFit: true
    //     }
    //   ]);
  },

  mounted() {
    Users.callServerApi("Finance")
      .then(points => {
        if (points.length > 0) this.finance_sort = points[0];
        if (points.length > 1) this.finance_detail = points[1];

        this.rowData = this.finance_sort;
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