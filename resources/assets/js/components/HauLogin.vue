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
        headerName: "Mã sinh viên",
        field: "Ma_sv",
        sortable: true,
        filter: true
      },
      {
        headerName: "Tên sinh viên",
        field: "ho_ten",
        sortable: true,
        filter: true
      },
      { headerName: "Địa chỉ", field: "Dia_chi", sortable: true, filter: true }
    ];

    fetch("http://103.28.37.34:98/api/huyen")
      .then(result => result.json())
      .then(rowData => (this.rowData = rowData));

    // fetch("http://103.28.37.34:806/api/login", {
    //   method: "POST",
    //   headers: {
    //     auth: "Sinh viên"
    //   },
    //   body: JSON.stringify({
    //     userName: "60.58.01.02",
    //     password: "mhl9QmgbrLq8W8pV5u/lpQ==",
    //     deviceid: "ggsgfdgdg"
    //   })
    // })
    //   .then(function(data) {
    //     console.log("Đăng nhập thành công: ", data);
    //   })
    //   .catch(function(error) {
    //     console.log("Đăng nhập thất bại: ", error);
    //   });
  }
};
</script>