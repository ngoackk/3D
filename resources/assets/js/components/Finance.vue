<template>
  <div>
    <div class="col-md-12 fullwidth">
                <div class="news">
                    <div class="row" style="margin-top:20px">
                        <div class="form-group">
                            <label class="col-sm-2 control-label" style="vertical-align:middle">Tổng số tiền phải nộp:</label>
                            <label class="col-sm-2 control-label" style="vertical-align:middle;color:red;">25.994.216,00 ₫</label>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">Tổng số tiền đã nộp: </label>
                            <label class="col-sm-2 control-label" style="vertical-align:middle;color:red;">25.994.216,00 ₫</label>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">Số tiền thừa/thiếu: </label>
                            <label class="col-sm-2 control-label" style="vertical-align:middle;color:red;">0,00 ₫</label>
                        </div>
                    </div>
                    <div style="margin-top:20px">
                        <table class="table table-bordered table-hover table-striped table-condensed" cellspacing="0" rules="all" border="1" id="gvTaiChinh" style="width:100%;border-collapse:collapse;">
                            <tbody>
                                <tr class="table-header">
                                    <th scope="col">Học kỳ</th>
                                    <th scope="col">Năm học</th>
                                    <th scope="col">Mực học phí</th>
                                    <th scope="col">Miễn giảm</th>
                                    <th scope="col">Số tiền phải nộp</th>
                                    <th scope="col">Số tiền đã nộp</th>
                                    <th scope="col">Thừa thiếu</th>
                                </tr>
                    <tr>
                        <td align="center" style="width:5%;">1</td>
                        <td align="center" style="width:10%;">2016-2017</td>
                    <td align="center" style="width:15%;">3.746.890,00 ₫</td>
                    <td align="left" style="width:15%;">0,00 ₫</td>
                    <td align="center" style="width:20%;">3.746.890,00 ₫</td>
                    <td align="center" style="width:20%;">4.446.000,00 ₫</td>
                    <td align="center" style="width:15%;">-699.110,00 ₫</td>

                    </tr>
                    <tr>
                        <td align="center" style="width:5%;">2</td>
                        <td align="center" style="width:10%;">2016-2017</td>
                    <td align="center" style="width:15%;">4.693.000,00 ₫</td>
                    <td align="left" style="width:15%;">0,00 ₫</td>
                    <td align="center" style="width:20%;">4.693.000,00 ₫</td>
                    <td align="center" style="width:20%;">3.993.890,00 ₫</td>
                    <td align="center" style="width:15%;">699.110,00 ₫</td>

                    </tr>
                    <tr>
                        <td align="center" style="width:5%;">1</td>
                        <td align="center" style="width:10%;">2017-2018</td>
                    <td align="center" style="width:15%;">5.482.206,00 ₫</td>
                    <td align="left" style="width:15%;">0,00 ₫</td>
                    <td align="center" style="width:20%;">5.482.206,00 ₫</td>
                    <td align="center" style="width:20%;">5.482.206,00 ₫</td>
                    <td align="center" style="width:15%;">0,00 ₫</td>

                    </tr>
                    <tr>
                        <td align="center" style="width:5%;">2</td>
                        <td align="center" style="width:10%;">2017-2018</td>
                    <td align="center" style="width:15%;">5.001.120,00 ₫</td>
                    <td align="left" style="width:15%;">0,00 ₫</td>
                    <td align="center" style="width:20%;">5.001.120,00 ₫</td>
                    <td align="center" style="width:20%;">5.001.120,00 ₫</td>
                    <td align="center" style="width:15%;">0,00 ₫</td>

                    </tr>
                    <tr>
                        <td align="center" style="width:5%;">1</td>
                        <td align="center" style="width:10%;">2018-2019</td>
                    <td align="center" style="width:15%;">7.071.000,00 ₫</td>
                    <td align="left" style="width:15%;">0,00 ₫</td>
                    <td align="center" style="width:20%;">7.071.000,00 ₫</td>
                    <td align="center" style="width:20%;">7.071.000,00 ₫</td>
                    <td align="center" style="width:15%;">0,00 ₫</td>

                    </tr>
                    <tr>
                        <td align="center" style="width:5%;">2</td>
                        <td align="center" style="width:10%;">2018-2019</td>
                    <td align="center" style="width:15%;">0,00 ₫</td>
                    <td align="left" style="width:15%;">0,00 ₫</td>
                    <td align="center" style="width:20%;">0,00 ₫</td>
                    <td align="center" style="width:20%;">0,00 ₫</td>
                    <td align="center" style="width:15%;">0,00 ₫</td>

                    </tr>

                            </tbody>
                        </table>
                    </div>
                </div>


        
        <div class="news">
            <div class="row">
                <div class="col-md-6"><label class="form-control-lable" style="color:green">Chi tiết các khoản đã nộp</label></div>
            </div>
            <div class="row news-listing" style="margin-top:10px">
                <div class="col-md-12">

<div id="dsHocPhi">
    <table class="table table-bordered table-hover table-striped table-condensed" cellspacing="1" cellpadding="1" border="1" id="ctl00_ContentCP_ctl00_grdViewLopDangKy">
        <tbody>
            <tr class="table-header">
                <th scope="col">Năm học</th>
                <th scope="col">Học kỳ</th>
                <th scope="col">Ngày nộp</th>
                <th scope="col">Loại thu</th>
                <th scope="col">Số tiền nộp</th>
                <th scope="col">Số tiền miễn giảm</th>
                <th scope="col">Số tiền phải nộp</th>
                <th scope="col">Số tiền đã nộp</th>
                <th scope="col">Thừa / thiếu</th>
                <th scope="col">Đã nộp</th>
            </tr>
                <tr>
                        <td rowspan="15" align="center" valign="middle" style="width:90px;vertical-align:middle">2016-2017</td>
                                            <td rowspan="6" align="center" style="width:60px;vertical-align:middle">1</td>
                                            <td rowspan="6" align="center" style="width:100px;vertical-align:middle"></td>
                    

                    <td align="left" style="vertical-align: middle">Học phí : Toán</td>
                <td align="center" style="">494.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">494.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">494.000,00 ₫</td>

                            <td rowspan="6" align="center" style="vertical-align:middle">Chưa nộp</td>
                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Giáo dục quốc phòng</td>
                <td align="center" style="">988.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">988.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">988.000,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Phương pháp thể hiện kiến trúc</td>
                <td align="center" style="">741.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">741.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">741.000,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Hình học hoạ hình và vẽ kĩ thuật</td>
                <td align="center" style="">988.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">988.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">988.000,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Giáo dục thể chất P1</td>
                <td align="center" style="">247.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">247.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">247.000,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Học liệu dịch vụ và thư viện</td>
                <td align="center" style="">288.890,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">288.890,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">288.890,00 ₫</td>

                  
                </tr>
                <tr>
                                            <td rowspan="9" align="center" style="width:60px;vertical-align:middle">2</td>
                                            <td rowspan="9" align="center" style="width:100px;vertical-align:middle">09/03/2017</td>
                    

                    <td align="left" style="vertical-align: middle">Học phí : Nguyên lý (Lý thuyết TK) KT nhà ở</td>
                <td align="center" style="">494.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">494.000,00 ₫</td>
                <td align="center" style="">494.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                            <td rowspan="9" align="center" style="vertical-align:middle">Đã nộp</td>
                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Cơ sở (tạo hình) kiến trúc</td>
                <td align="center" style="">741.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">741.000,00 ₫</td>
                <td align="center" style="">741.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Mĩ thuật P1</td>
                <td align="center" style="">494.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">494.000,00 ₫</td>
                <td align="center" style="">494.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Những NLCB của CN Mác-Lênin P1</td>
                <td align="center" style="">494.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">494.000,00 ₫</td>
                <td align="center" style="">494.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Thiết kế kiến trúc (ĐA K) 1</td>
                <td align="center" style="">741.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">741.000,00 ₫</td>
                <td align="center" style="">741.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Cơ học công trình</td>
                <td align="center" style="">741.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">741.000,00 ₫</td>
                <td align="center" style="">741.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Pháp luật đại cương</td>
                <td align="center" style="">494.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">494.000,00 ₫</td>
                <td align="center" style="">494.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Lịch sử nghệ thuật</td>
                <td align="center" style="">494.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">494.000,00 ₫</td>
                <td align="center" style="">494.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Tiếng Anh P1</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                        <td rowspan="19" align="center" valign="middle" style="width:90px;vertical-align:middle">2017-2018</td>
                                            <td rowspan="10" align="center" style="width:60px;vertical-align:middle">1</td>
                                            <td rowspan="10" align="center" style="width:100px;vertical-align:middle">06/10/2017</td>
                    

                    <td align="left" style="vertical-align: middle">Học phí : Tiếng Anh P2</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                            <td rowspan="10" align="center" style="vertical-align:middle">Đã nộp</td>
                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Kết cấu BTCT - Gạch đá</td>
                <td align="center" style="">543.600,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">543.600,00 ₫</td>
                <td align="center" style="">543.600,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Kĩ năng viết và thuyết trình</td>
                <td align="center" style="">271.800,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">271.800,00 ₫</td>
                <td align="center" style="">271.800,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Những NLCB của CN Mác-Lênin P2</td>
                <td align="center" style="">815.400,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">815.400,00 ₫</td>
                <td align="center" style="">815.400,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Thiết kế Kiến trúc (ĐA K) 2</td>
                <td align="center" style="">815.400,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">815.400,00 ₫</td>
                <td align="center" style="">815.400,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Lịch sử kiến trúc (&amp; QH đô thị) 1</td>
                <td align="center" style="">815.400,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">815.400,00 ₫</td>
                <td align="center" style="">815.400,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Nguyên lý (Lý thuyết) KT nhà công cộng</td>
                <td align="center" style="">543.600,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">543.600,00 ₫</td>
                <td align="center" style="">543.600,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Mĩ thuật P2</td>
                <td align="center" style="">543.600,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">543.600,00 ₫</td>
                <td align="center" style="">543.600,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Cấu tạo kiến trúc</td>
                <td align="center" style="">815.400,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">815.400,00 ₫</td>
                <td align="center" style="">815.400,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Học liệu dịch vụ và thư viện</td>
                <td align="center" style="">318.006,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">318.006,00 ₫</td>
                <td align="center" style="">318.006,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                            <td rowspan="9" align="center" style="width:60px;vertical-align:middle">2</td>
                                            <td rowspan="9" align="center" style="width:100px;vertical-align:middle">02/03/2018</td>
                    

                    <td align="left" style="vertical-align: middle">Học phí : Pháp luật xây dựng</td>
                <td align="center" style="">271.800,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">271.800,00 ₫</td>
                <td align="center" style="">271.800,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                            <td rowspan="9" align="center" style="vertical-align:middle">Đã nộp</td>
                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Kết cấu thép - gỗ</td>
                <td align="center" style="">543.600,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">543.600,00 ₫</td>
                <td align="center" style="">543.600,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Mĩ thuật P3</td>
                <td align="center" style="">543.600,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">543.600,00 ₫</td>
                <td align="center" style="">543.600,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Tiếng Anh chuyên ngành</td>
                <td align="center" style="">652.320,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">652.320,00 ₫</td>
                <td align="center" style="">652.320,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Giáo dục thể chất P2</td>
                <td align="center" style="">271.800,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">271.800,00 ₫</td>
                <td align="center" style="">271.800,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Lịch sử kiến trúc (&amp; QH đô thị) 2</td>
                <td align="center" style="">543.600,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">543.600,00 ₫</td>
                <td align="center" style="">543.600,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Thiết kế kiến trúc (ĐA K) 3</td>
                <td align="center" style="">815.400,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">815.400,00 ₫</td>
                <td align="center" style="">815.400,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Thiết kế Kiến trúc (ĐA K) 4</td>
                <td align="center" style="">815.400,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">815.400,00 ₫</td>
                <td align="center" style="">815.400,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Phương pháp thiết kế kiến trúc</td>
                <td align="center" style="">543.600,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">543.600,00 ₫</td>
                <td align="center" style="">543.600,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                        <td rowspan="20" align="center" valign="middle" style="width:90px;vertical-align:middle">2018-2019</td>
                                            <td rowspan="12" align="center" style="width:60px;vertical-align:middle">1</td>
                                            <td rowspan="12" align="center" style="width:100px;vertical-align:middle">28/09/2018</td>
                    

                    <td align="left" style="vertical-align: middle">Học phí : Giáo dục thể chất P3</td>
                <td align="center" style="">300.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">300.000,00 ₫</td>
                <td align="center" style="">300.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                            <td rowspan="12" align="center" style="vertical-align:middle">Đã nộp</td>
                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Tư tưởng Hồ Chí Minh</td>
                <td align="center" style="">600.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">600.000,00 ₫</td>
                <td align="center" style="">600.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Bảo tồn di sản kiến trúc</td>
                <td align="center" style="">600.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">600.000,00 ₫</td>
                <td align="center" style="">600.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Lý thuyết (Nguyên lý) QH đô thị</td>
                <td align="center" style="">600.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">600.000,00 ₫</td>
                <td align="center" style="">600.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Tin học đại cương</td>
                <td align="center" style="">720.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">720.000,00 ₫</td>
                <td align="center" style="">720.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Thiết kế Kiến trúc (ĐA K) 5</td>
                <td align="center" style="">900.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">900.000,00 ₫</td>
                <td align="center" style="">900.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Nguyên lý (Lý thuyết) kiến trúc nhà CN</td>
                <td align="center" style="">600.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">600.000,00 ₫</td>
                <td align="center" style="">600.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Thiết kế Kiến trúc (ĐA K) 6</td>
                <td align="center" style="">900.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">900.000,00 ₫</td>
                <td align="center" style="">900.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Thực tập công nhân</td>
                <td align="center" style="">300.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">300.000,00 ₫</td>
                <td align="center" style="">300.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Vẽ ghi (kiến trúc)</td>
                <td align="center" style="">600.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">600.000,00 ₫</td>
                <td align="center" style="">600.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Học liệu dịch vụ và thư viện</td>
                <td align="center" style="">351.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">351.000,00 ₫</td>
                <td align="center" style="">351.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Mĩ thuật P5 - Vẽ phong cảnh</td>
                <td align="center" style="">600.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">600.000,00 ₫</td>
                <td align="center" style="">600.000,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                            <td rowspan="8" align="center" style="width:60px;vertical-align:middle">2</td>
                                            <td rowspan="8" align="center" style="width:100px;vertical-align:middle"></td>
                    

                    <td align="left" style="vertical-align: middle">Học phí : Mỹ học (đại cương)</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                            <td rowspan="8" align="center" style="vertical-align:middle">Chưa nộp</td>
                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Đường lối cách mạng của Đảng CSVN</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Tin học ứng dụng</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Kỹ thuật hạ tầng đô thị</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Lập quy hoạch 1 - Quy hoạch nhóm nhà ở </td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Vật lý kiến trúc</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Thiết kế nhanh</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
                <tr>
                                                            

                    <td align="left" style="vertical-align: middle">Học phí : Thiết kế Kiến trúc (ĐA K) 7</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>
                <td align="center" style="">0,00 ₫</td>

                  
                </tr>
        </tbody>
    </table>
</div>

                </div>
            </div>
        </div>
        
    </div>
   
  </div>
</template>
<script>


export default {
  data() {
    return {
       
    };
  }
};
</script>
