<template>
  <ag-grid-vue
    style="width: 100%; height: 100%;"
    class="ag-theme-balham"
    :columnDefs="columnDefs"
    :rowData="rowData"
  ></ag-grid-vue>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";

export default {
  name: "App",
  data() {
    return {
      columnDefs: null,
      rowData: null
    };
  },
  components: {
    AgGridVue
  },
  beforeMount() {
    this.columnDefs = [
      {
        headerName: "Mã bản ghi",
        field: "ID",
        sortable: true,
        filter: true
      },
      {
        headerName: "Mã tỉnh",
        field: "DM_tinh_ID",
        sortable: true,
        filter: true
      },
      { headerName: "Huyện", field: "Ten_huyen", sortable: true, filter: true }
    ];

    // this.rowData = [
    //   { make: "Toyota", model: "Celica", price: 35000 },
    //   { make: "Ford", model: "Mondeo", price: 32000 },
    //   { make: "Porsche", model: "Boxter", price: 72000 }
    // ];

    fetch("http://103.28.37.34:98/api/huyen")
      .then(result => result.json())
      .then(rowData => (this.rowData = rowData));
  }
};
</script>