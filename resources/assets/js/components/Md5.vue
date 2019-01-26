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
        headerName: "Tên sinh viên",
        field: "Ho_ten",
        sortable: true,
        filter: true
      },
      { headerName: "Địa chỉ", field: "Dia_chi", sortable: true, filter: true }
    ];

    // fetch("http://103.28.37.34:98/api/huyen")
    //   .then(result => result.json())
    //   .then(rowData => (this.rowData = rowData));
    let token = localStrage.getItem("access_token")
    fetch("http://103.28.37.34:806/api/Profile?accessToken="+ token, {
      method: "POST",
      headers: {
       'Accept': 'application/json',
      'Content-Type': 'application/json'
      }
       
    })
      .then(function(data) {
        console.log("Lấy dữ liệu thành công: ", data);
      })
      .catch(function(error) {
        console.log("Lấy dữ liệu thất bại: ", error);
      });
  }
};
</script>
