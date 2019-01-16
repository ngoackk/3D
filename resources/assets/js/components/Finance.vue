<template>
  <div>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>
<script>
const items = [
  { isActive: true, age: 23, first_name: "Phạm", last_name: "Quang Vinh" },
  { isActive: false, age: 21, first_name: "Nguyễn", last_name: "Khánh Tùng" },
  { isActive: false, age: 20, first_name: "Tống", last_name: "Văn Vận" },
  { isActive: true, age: 38, first_name: "Trần", last_name: "Văn Nguyễn" }
];

export default {
  data() {
    return {
      items: items
    };
  }
};
</script>
