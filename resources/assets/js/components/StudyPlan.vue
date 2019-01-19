<template>
  <div>
    <div class="col-md-12 fullwidth">
      <div class="news">
        <div class="row fullwidth" style="margin-top:15px">
          <div class="col-md-1 fullwidth" style="text-align:center">
            <label class="control-label NoiDungHoSo" style="padding-top:7px">Học kỳ</label>
          </div>
          <div class="col-md-1">
            <select class="form-control combobox" name="cmbHocKy" id="cmbHocKy">
              <option value="-1">--- Chọn học kỳ ---</option>
              <option value="1" selected="selected">Kỳ 1</option>
              <option value="2">Kỳ 2</option>
            </select>
          </div>
          <div class="col-md-1 form-group fullwidth" style="text-align:center">
            <label class="control-label NoiDungHoSo" style="padding-top:7px">Năm học</label>
          </div>
          <div class="col-md-2">
            <select class="form-control combobox" name="cmbNamHoc" id="cmbNamHoc">
              <option value="-1">--- Chọn năm học ---</option>

              <option v-for="item in items" :key="item.id" value="item.year">{{ item.year }}</option>

              <option value="2018" selected="selected">{{items[8].year}}</option>
            </select>
          </div>
          <div class="col-md-1" style="text-align:center">
            <label class="control-label NoiDungHoSo" style="padding-top:7px">Đợt học</label>
          </div>
          <div class="col-md-1">
            <select name="ddlDotHoc" id="ddlDotHoc" class="form-control">
              <option selected="selected" value="0">Chọn đợt</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div class="col-md-1" style="text-align:center">
            <label class="control-label NoiDungHoSo" style="padding-top:7px">Ngành học</label>
          </div>
          <div class="col-md-2">
            <select class="form-control combobox" name="cmbChuyenNganh" id="cmbChuyenNganh">
              <option value="0" selected="selected">Chuyên ngành chính</option>
              <option value="1">Chuyên ngành 2</option>
            </select>
          </div>
        </div>
        <div id="daTa">
          <table
            class="table table-bordered table-condensed"
            cellspacing="1"
            cellpadding="1"
            rules="all"
            border="1"
            id
            style="width:100%;"
          >
            <tbody>
              <tr class="table-header">
                <th scope="col">STT</th>
                <th scope="col">Tên học phần</th>
                <th scope="col">Số tín chỉ</th>
                <th scope="col">Tên lớp tín chỉ</th>
                <th scope="col">Thời gian</th>
                <th scope="col">Thứ</th>
                <th scope="col">Tiết</th>
                <th scope="col">Phòng</th>
                <th scope="col">Giáo viên</th>
              </tr>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Tên học phần</th>
                <th scope="col">Số tín chỉ</th>
                <th scope="col">Tên lớp tín chỉ</th>
                <th scope="col">Thời gian</th>
                <th scope="col">Thứ</th>
                <th scope="col">Tiết</th>
                <th scope="col">Phòng</th>
                <th scope="col">Giáo viên</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const items = [
  { id: 0, year: "2011-2012" },
  { id: 1, year: "2012-2013" },
  { id: 2, year: "2013-2014" },
  { id: 3, year: "2014-2015" },
  { id: 4, year: "2015-2016" },
  { id: 5, year: "2016-2017" },
  { id: 6, year: "2017-2018" },
  { id: 7, year: "2018-2019" },
  { id: 8, year: "2019-2020" }
];

export default {
  data() {
    return {
      items: items
    };
  }
};
</script>
