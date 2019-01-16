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
            <option value="2011">2011-2012</option>
            <option value="2012">2012-2013</option>
            <option value="2013">2013-2014</option>
            <option value="2014">2014-2015</option>
            <option value="2015">2015-2016</option>
            <option value="2016">2016-2017</option>
            <option value="2017">2017-2018</option>
            <option value="2018" selected="selected">2018-2019</option>
            <option value="2019">2019-2020</option>
            <option value="2020">2020-2021</option>
            <option value="2021">2021-2022</option>
            <option value="2022">2022-2023</option>
            <option value="2023">2023-2024</option>
            <option value="2024">2024-2025</option>

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
<table class="table table-bordered  table-condensed" cellspacing="1" cellpadding="1" rules="all" border="1" id="" style="width:100%;">
    
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

    </tbody>
</table>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
const items = [
  
];
export default {
    data() {
    return {
      items: items
    };
  }
}
</script>
