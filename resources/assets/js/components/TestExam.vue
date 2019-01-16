<template>
  <div>
    <div class="col-md-12 fullwidth">
        <div class="news">
            <div class="row fullwidth" style="margin-top:15px">
               
                <div class="col-md-1 fullwidth" style="text-align:center">
                    <label class="control-label NoiDungHoSo" style="padding-top:7px">Học kỳ</label>
                </div>
                <div class="col-md-2">

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
                <div class="col-md-2">
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
            <div class="row" style="margin-top:10px">
                <div id="daTa">
<table class="table table-bordered table-hover table-striped table-condensed" cellspacing="0" rules="all" border="1" id="ctl00_ContentCP_ctl00_gvDiem" style="width:100%;border-collapse:collapse;">
    <tbody>
        <tr class="table-header">
            <th scope="col">STT</th>
            <th scope="col">Mã học phần</th>
            <th scope="col">Tên học phần</th>
            <th scope="col">Số tín chỉ</th>
            <th scope="col">Ngày thi</th>
            <th scope="col">Ca thi</th>
            <th scope="col">Giờ thi</th>
            <th scope="col">Lần thi</th>
            <th scope="col">Đợt thi</th>
            <th scope="col">Số báo danh</th>
            <th scope="col">Phòng thi</th>
            <th scope="col">Hình thức</th>
        </tr>

            <tr>
                <td align="center" style="width:35px;vertical-align:middle">1</td>
                <td align="center" style="width:100px; vertical-align: middle; ">QH1201</td>
                <td align="left" style=" padding-left: 8px; vertical-align: middle">Lý thuyết (Nguyên lý) QH đô thị</td>
                <td align="center" style="width: 80px; vertical-align: middle">2</td>
                <td align="center" style="width: 100px; vertical-align: middle;">10/10/2018</td>
                <td align="center" style="width: 80px; vertical-align: middle">Sáng</td>
                <td align="center" style="width: 100px; vertical-align: middle">12h30  - 14h30</td>
                <td align="center" style="width: 80px; vertical-align: middle;">1</td>
                <td align="center" style="width: 80px; vertical-align: middle;">1</td>
                <td align="center" style="width: 100px; vertical-align: middle">023</td>
                <td align="left" style=" vertical-align: middle"> DHKT<br>H-H 8. 01 (P01)</td>

                    <td align="center" style="width: 90px; vertical-align: middle">Thi viết</td>
            </tr>
            <tr>
                <td align="center" style="width:35px;vertical-align:middle">2</td>
                <td align="center" style="width:100px; vertical-align: middle; ">CT4101</td>
                <td align="left" style=" padding-left: 8px; vertical-align: middle">Tư tưởng Hồ Chí Minh</td>
                <td align="center" style="width: 80px; vertical-align: middle">2</td>
                <td align="center" style="width: 100px; vertical-align: middle;">20/10/2018</td>
                <td align="center" style="width: 80px; vertical-align: middle"></td>
                <td align="center" style="width: 100px; vertical-align: middle">7h30  - 9h30</td>
                <td align="center" style="width: 80px; vertical-align: middle;">1</td>
                <td align="center" style="width: 80px; vertical-align: middle;">1</td>
                <td align="center" style="width: 100px; vertical-align: middle">026</td>
                <td align="left" style=" vertical-align: middle"> DHKT<br>H-H 2. 02 (P01)</td>

                    <td align="center" style="width: 90px; vertical-align: middle">Thi viết</td>
            </tr>
            <tr>
                <td align="center" style="width:35px;vertical-align:middle">3</td>
                <td align="center" style="width:100px; vertical-align: middle; ">TH4301</td>
                <td align="left" style=" padding-left: 8px; vertical-align: middle">Tin học đại cương</td>
                <td align="center" style="width: 80px; vertical-align: middle">2</td>
                <td align="center" style="width: 100px; vertical-align: middle;">19/10/2018</td>
                <td align="center" style="width: 80px; vertical-align: middle"></td>
                <td align="center" style="width: 100px; vertical-align: middle">7h30  - 9h30</td>
                <td align="center" style="width: 80px; vertical-align: middle;">1</td>
                <td align="center" style="width: 80px; vertical-align: middle;">1</td>
                <td align="center" style="width: 100px; vertical-align: middle">006</td>
                <td align="left" style=" vertical-align: middle"> DHKT<br>I-I.701 (P01)</td>

                    <td align="center" style="width: 90px; vertical-align: middle">Thi viết</td>
            </tr>
    </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
