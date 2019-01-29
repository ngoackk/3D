<template>
  <div class="col-md-12 fullwidth">
    <div class="news" id="dvData">
      <div class="row" style="height:25px;margin-top:15px;margin-left:30px">
        <div class="col-md-2">
          <span class="NoiDungHoSo">Mã sinh viên:</span>
          <span class="NoiDungHoSo2" id="lblMaSinhVien" style="color:red;font-weight:bold">123456789</span>
        </div>
        <!-- <div class="col-md-10 fullwidth form-group">
                    <a class="btn btn-danger btn-md" href="#" style="float:right;margin-right:15px" onclick="DoiMatKhau()">Đổi mật khẩu</a>
                    <a class="btn btn-warning btn-md" href="#" style="float:right;margin-right:15px" onclick="KiemTraThoiGian()">Sửa thông tin</a>
        </div>-->
      </div>
      <div class="row" style="text-align:center;">
        <h3
          style="width: 100%; font-family: 'Times New Roman'; font-size: 22px; font-weight: normal; color: black;"
          class="TitleHoSo"
        >SƠ YẾU LÝ LỊCH SINH VIÊN</h3>
      </div>
      <br>
      <br>
      <div class="row">
        <div class="col-md-2">
          <img
            style="margin-left: 45px;width: 120px; height: 150px; border: 1px solid #ff6a00;"
            src
          >
        </div>
        <div class="col-md-10 fullwidth">
          <div style="float: left; width: 30%;">
            <span class="NoiDungHoSo">Họ và tên:</span>
            <span
              class="NoiDungHoSo2 label"
              id="lblHoTen"
              style="margin-left:10px"
            >{{currentUser.Ho_ten}}</span>
          </div>
          <div style="float: left; width: 20%; ">
            <span class="NoiDungHoSo">Ngày sinh:</span>
            <span class="NoiDungHoSo2 label" id="lblNgaySinh">15/02/1998</span>
          </div>
          <div style="float: left; width: 20%; ">
            <span class="NoiDungHoSo">Giới tính:</span>
            <span class="NoiDungHoSo2 label" id="lblGioiTinh" style="margin-left:4px">Nam</span>
          </div>
          <div style="float: left;width:25%;">
            <span class="NoiDungHoSo">Quốc tịch:</span>
            <span class="NoiDungHoSo2 label" id="lblQuocTich">Việt Nam</span>
          </div>
        </div>

        <div class="col-md-10 fullwidth" style="height:20px"></div>
        <div class="col-md-10 fullwidth">
          <div style="float: left; width: 50%; ">
            <span class="NoiDungHoSo">Quê quán:</span>
            <span class="NoiDungHoSo2 label" id>Hà Hội - Hải Phòng</span>
          </div>
          <div style="float: left; width: 50%; ">
            <span class="NoiDungHoSo">Nơi sinh:</span>
            <span class="NoiDungHoSo2 label" id="lblNoiSinh" style="margin-left:15px">TP Hải Phòng</span>
          </div>
        </div>

        <div class="col-md-10 fullwidth" style="height:20px"></div>
        <div class="col-md-10 fullwidth">
          <div style="float: left; width: 30%; ">
            <span class="NoiDungHoSo">Dân tộc:</span>
            <span class="NoiDungHoSo2 label" id style="margin-left:20px"></span>
          </div>
          <div style="float: left; width: 20%; ">
            <span class="NoiDungHoSo">Tôn giáo:</span>
            <span class="NoiDungHoSo2 label" style="margin-left:8px"></span>
          </div>
          <div style="float: left; width: 20%; ">
            <span class="NoiDungHoSo">CMND:</span>
            <span class="NoiDungHoSo2 label" style="margin-left:18px">122323223</span>
          </div>
          <div style="float: left; width: 30%; ">
            <span class="NoiDungHoSo">Email:</span>
            <span class="NoiDungHoSo2 label" id></span>
          </div>
        </div>

        <div class="col-md-10 fullwidth" style="height:20px"></div>
        <div class="col-md-10 fullwidth">
          <div style="float: left; width: 30%; ">
            <span class="NoiDungHoSo">Hệ đào tạo:</span>
            <span class="NoiDungHoSo2 label" id style="color:red">Đại học - Chính quy</span>
          </div>
          <div style="float: left; width: 35%; ">
            <span class="NoiDungHoSo">Chuyên ngành:</span>
            <span class="NoiDungHoSo2 label" id style="color:red">Kiến trúc</span>
          </div>
          <div style="float: left; width: 20%; ">
            <span class="NoiDungHoSo">Niên khóa:</span>
            <span class="NoiDungHoSo2 label" id style="color:red">2016-2020</span>
          </div>
          <div style="float: left; width: 15%; ">
            <span class="NoiDungHoSo">Khóa học:</span>
            <span class="NoiDungHoSo2 label" id style="color:red">2016</span>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-10 fullwidth" style="height:20px"></div>
        <div class="fullwidth form-group" style="margin-left:60px">
          <div style="float: left; width: 25%;">
            <span class="NoiDungHoSo">ĐT nhà riêng:</span>
            <input
              id="txtDien_thoai_NREdit"
              type="text"
              class="form-control"
              style="width:250px"
              value
            >
          </div>
          <div style="float: left; width: 25%;">
            <span class="NoiDungHoSo">ĐT cá nhân:</span>
            <input
              id="txtDienthoai_canhanEdit"
              type="text"
              class="form-control"
              style="width:250px"
              value
            >
          </div>
          <div style="float: left; width: 25%;">
            <span class="NoiDungHoSo">Quận/Huyện:</span>
            <select id="cbbQuanHuyenEdit" class="form-control" style="width:250px">
              <option value="0200">Sở Giáo dục và Đào tạo</option>
              <option value="0201">Quận Một</option>
              <option value="0202">Quận Hai</option>
              <option value="0203">Quận Ba</option>
              <option value="0204">Quận Bốn</option>
              <option value="0205">Quận Năm</option>
              <option value="0206">Quận Sáu</option>
              <option value="0207">Quận Bảy</option>
              <option value="0208">Quận Tám</option>
              <option value="0209">Quận Chín</option>
              <option value="0210">Quận Mười</option>
              <option value="0211">Quận Mười một</option>
              <option value="0212">Quận Mười hai</option>
              <option value="0213">Quận Gò Vấp</option>
              <option value="0214">Quận Tân Bình</option>
              <option value="0215">Quận Tân Phú</option>
              <option value="0216">Quận Bình Thạnh</option>
              <option value="0217">Quận Phú Nhuận</option>
              <option value="0218">Quận Thủ Đức</option>
              <option value="0219">Quận Bình Tân</option>
              <option value="0220">Huyện Bình Chánh</option>
              <option value="0221">Huyện Củ Chi</option>
              <option value="0222">Huyện Hóc Môn</option>
              <option value="0223">Huyện Nhà Bè</option>
              <option value="0224">Huyện Cần Giờ</option>
              <option value="0300">Sở Giáo dục và Đào tạo</option>
              <option value="0301">Quận Hồng Bàng</option>
              <option value="0302">Quận Lê Chân</option>
              <option value="0303">Quận Ngô Quyền</option>
              <option value="0304">Quận Kiến An</option>
              <option value="0305">Quận Hải An</option>
              <option value="0306">Quận Đồ Sơn</option>
              <option value="0307">Huyện An Lão</option>
              <option value="0308">Huyện Kiến Thuỵ</option>
              <option value="0309">Huyện Thủy Nguyên</option>
              <option value="0310">Huyện An Dương</option>
              <option value="0311">Huyện Tiên Lãng</option>
              <option value="0312">Huyện Vĩnh Bảo</option>
              <option value="0313">Huyện Cát Hải</option>
              <option value="0314">Huyện Bạch Long Vĩ</option>
              <option value="0315">Quận Dương Kinh</option>
              <option value="0400">Sở Giáo dục và Đào tạo</option>
              <option value="0401">Quận Hải Châu</option>
              <option value="0402">Quận Thanh Khê</option>
              <option value="0403">Quận Sơn Trà</option>
              <option value="0404">Quận Ngũ Hành Sơn</option>
              <option value="0405">Quận Liên Chiểu</option>
              <option value="0406">Huyện Hoà Vang</option>
              <option value="0407">Quận Cẩm Lệ</option>
              <option value="0500">Sở Giáo dục và Đào tạo</option>
              <option value="0501">Thị xã Hà Giang</option>
              <option value="0502">Huyện Đồng Văn</option>
              <option value="0503">Huyện Mèo Vạc</option>
              <option value="0504">Huyện Yên Minh</option>
              <option value="0505">Huyện Quản Bạ</option>
              <option value="0506">Huyện Vị Xuyên</option>
              <option value="0507">Huyện Bắc Mê</option>
              <option value="0508">Huyện Hoàng Su Phì</option>
              <option value="0509">Huyện Xín Mần</option>
              <option value="0510">Huyện Bắc Quang</option>
              <option value="0511">Huyện Quang Bình</option>
              <option value="0600">Sở Giáo dục và Đào tạo</option>
              <option value="0601">Thị xã Cao Bằng</option>
              <option value="0602">Huyện Bảo Lạc</option>
              <option value="0603">Huyện Thông Nông</option>
              <option value="0604">Huyện Hà Quảng</option>
              <option value="0605">Huyện Trà Lĩnh</option>
              <option value="0606">Huyện Trùng Khánh</option>
              <option value="0607">Huyện Nguyên Bình</option>
              <option value="0608">Huyện Hoà An</option>
              <option value="0609">Huyện Quảng Uyên</option>
              <option value="0610">Huyện Thạch An</option>
              <option value="0611">Huyện Hạ Lang</option>
              <option value="0612">Huyện Bảo Lâm</option>
              <option value="0613">Huyện Phục Hoà</option>
              <option value="0700">Sở Giáo dục và Đào tạo</option>
              <option value="0701">Thị xã Lai Châu</option>
              <option value="0702">Huyện Tam Đường</option>
              <option value="0703">Huyện Phong Thổ</option>
              <option value="0704">Huyện Sìn Hồ</option>
              <option value="0705">Huyện Mường Tè</option>
              <option value="0706">Huyện Than Uyên</option>
              <option value="0800">Sở Giáo dục và Đào tạo</option>
              <option value="0801">Thành phố Lào Cai</option>
              <option value="0802">Huyện Xi Ma Cai</option>
              <option value="0803">Huyện Bát Xát</option>
              <option value="0804">Huyện Bảo Thắng</option>
              <option value="0805">Huyện Sa Pa</option>
              <option value="0806">Huyện Văn Bàn</option>
              <option value="0807">Huyện Bảo Yên</option>
              <option value="0808">Huyện Bắc Hà</option>
              <option value="0809">Huyện Mường Khương</option>
              <option value="0900">Sở Giáo dục và Đào tạo</option>
              <option value="0901">Thị xã Tuyên Quang</option>
              <option value="0902">Huyện Na Hang</option>
              <option value="0903">Huyện Chiêm Hoá</option>
              <option value="0904">Huyện Hàm Yên</option>
              <option value="0905">Huyện Yên Sơn</option>
              <option value="0906">Huyện Sơn Dương</option>
              <option value="1000">Sở Giáo dục và Đào tạo</option>
              <option value="1001">Thành phố Lạng Sơn</option>
              <option value="1002">Huyện Tràng Định</option>
              <option value="1003">Huyện Bình Gia</option>
              <option value="1004">Huyện Văn Lãng</option>
              <option value="1005">Huyện Bắc Sơn</option>
              <option value="1006">Huyện Văn Quan</option>
              <option value="1007">Huyện Cao Lộc</option>
              <option value="1008">Huyện Lộc Bình</option>
              <option value="1009">Huyện Chi Lăng</option>
              <option value="1010">Huyện Đình Lập</option>
              <option value="1011">Huyện Hữu Lũng</option>
              <option value="1100">Sở Giáo dục và Đào tạo</option>
              <option value="1101">Thị xã Bắc Kạn</option>
              <option value="1102">Huyện Chợ Đồn</option>
              <option value="1103">Huyện Bạch Thông</option>
              <option value="1104">Huyện Na Rì</option>
              <option value="1105">Huyện Ngân Sơn</option>
              <option value="1106">Huyện Ba Bể</option>
              <option value="1107">Huyện Chợ Mới</option>
              <option value="1108">Huyện Pác Nặm</option>
              <option value="1200">Sở Giáo dục và Đào tạo</option>
              <option value="1201">TP.Thái Nguyên</option>
              <option value="1202">Thị xã Sông Công</option>
              <option value="1203">Huyện Định Hoá</option>
              <option value="1204">Huyện Phú Lương</option>
              <option value="1205">Huyện Võ Nhai</option>
              <option value="1206">Huyện Đại Từ</option>
              <option value="1207">Huyện Đồng Hỷ</option>
              <option value="1208">Huyện Phú Bình</option>
              <option value="1209">Huyện Phổ Yên</option>
              <option value="1300">Sở Giáo dục và Đào tạo</option>
              <option value="1301">Thành phố Yên Bái</option>
              <option value="1302">Thị xã Nghĩa Lộ</option>
              <option value="1303">Huyện Văn Yên</option>
              <option value="1304">Huyện Yên Bình</option>
              <option value="1305">Huyện Mù Cang Chải</option>
              <option value="1306">Huyện Văn Chấn</option>
              <option value="1307">Huyện Trấn Yên</option>
              <option value="1308">Huyện Trạm Tấu</option>
              <option value="1309">Huyện Lục Yên</option>
              <option value="1400">Sở Giáo dục và Đào tạo</option>
              <option value="1401">Thị xã Sơn La</option>
              <option value="1402">Huyện Quỳnh Nhai</option>
              <option value="1403">Huyện Mường La</option>
              <option value="1404">Huyện Thuận Châu</option>
              <option value="1405">Huyện Bắc Yên</option>
              <option value="1406">Huyện Phù Yên</option>
              <option value="1407">Huyện Mai Sơn</option>
              <option value="1408">Huyện Yên Châu</option>
              <option value="1409">Huyện Sông Mã</option>
              <option value="1410">Huyện Mộc Châu</option>
              <option value="1411">Huyện Sốp Cộp</option>
              <option value="1500">Sở Giáo dục và Đào tạo</option>
              <option value="1501">TP. Việt Trì</option>
              <option value="1502">Thị xã Phú Thọ</option>
              <option value="1503">Huyện Đoan Hùng</option>
              <option value="1504">Huyện Thanh Ba</option>
              <option value="1505">Huyện Hạ Hoà</option>
              <option value="1506">Huyện Cẩm Khê</option>
              <option value="1507">Huyện Yên Lập</option>
              <option value="1508">Huyện Thanh Sơn</option>
              <option value="1509">Huyện Phù Ninh</option>
              <option value="1510">Huyện Lâm Thao</option>
              <option value="1511">Huyện Tam Nông</option>
              <option value="1512">Huyện Thanh Thủy</option>
              <option value="1513">Huyện Tân Sơn</option>
              <option value="1600">Sở Giáo dục và Đào tạo</option>
              <option value="1601">Thành phố Vĩnh Yên</option>
              <option value="1602">Huyện Tam Dương</option>
              <option value="1603">Huyện Lập Thạch</option>
              <option value="1604">Huyện Vĩnh Tường</option>
              <option value="1605">Huyện Yên Lạc</option>
              <option value="1606">Huyện Bình Xuyên</option>
              <option value="1607">Huyện Mê Linh</option>
              <option value="1608">Thị xã Phúc Yên</option>
              <option value="1609">Huyện Tam Đảo</option>
              <option value="1700">Sở Giáo dục và Đào tạo</option>
              <option value="1701">TP. Hạ Long</option>
              <option value="1702">Thị xã Cẩm Phả</option>
              <option value="1703">Thị xã Uông Bí</option>
              <option value="1704">Thị xã Móng Cái</option>
              <option value="1705">Huyện Bình Liêu</option>
              <option value="1706">Huyện Đầm Hà</option>
              <option value="1707">Huyện Hải Hà</option>
              <option value="1708">Huyện Tiên Yên</option>
              <option value="1709">Huyện Ba Chẽ</option>
              <option value="1710">Huyện Đông Triều</option>
              <option value="1711">Huyện Yên Hưng</option>
              <option value="1712">Huyện Hoành Bồ</option>
              <option value="1713">Huyện Vân Đồn</option>
              <option value="1714">Huyện Cô Tô</option>
              <option value="1800">Sở Giáo dục và Đào tạo</option>
              <option value="1801">Thành phố Bắc Giang</option>
              <option value="1802">Huyện Yên Thế</option>
              <option value="1803">Huyện Lục Ngạn</option>
              <option value="1804">Huyện Sơn Động</option>
              <option value="1805">Huyện Lục Nam</option>
              <option value="1806">Huyện Tân Yên</option>
              <option value="1807">Huyện Hiệp Hoà</option>
              <option value="1808">Huyện Lạng Giang</option>
              <option value="1809">Huyện Việt Yên</option>
              <option value="1810">Huyện Yên Dũng</option>
              <option value="1900">Sở Giáo dục và Đào tạo</option>
              <option value="1901">Thành phố Bắc Ninh</option>
              <option value="1902">Huyện Yên Phong</option>
              <option value="1903">Huyện Quế Võ.</option>
              <option value="1904">Huyện Tiên Du</option>
              <option value="1905">Huyện Từ Sơn</option>
              <option value="1906">Huyện Thuận Thành</option>
              <option value="1907">Huyện Gia Bình</option>
              <option value="1908">Huyện Lương Tài</option>
              <option value="1A00">Sở Giáo dục và Đào tạo</option>
              <option value="1A01">Quận Ba Đình</option>
              <option value="1A02">Quận Hoàn Kiếm</option>
              <option value="1A03">Quận Hai Bà Trưng</option>
              <option value="1A04">Quận Đống Đa</option>
              <option value="1A05">Quận Tây Hồ</option>
              <option value="1A06">Quận Cầu Giấy</option>
              <option value="1A07">Quận Thanh Xuân</option>
              <option value="1A08">Quận Hoàng Mai</option>
              <option value="1A09">Quận Long Biên</option>
              <option value="1A10">Huyện Từ Liêm</option>
              <option value="1A11">Huyện Thanh Trì</option>
              <option value="1A12">Huyện Gia Lâm</option>
              <option value="1A13">Huyện Đông Anh</option>
              <option value="1A14">Huyện Sóc Sơn</option>
              <option value="1B00">Sở Giáo dục và Đào tạo</option>
              <option value="1B15">Thành phố Hà Đông</option>
              <option value="1B16">Thành phố Sơn Tây</option>
              <option value="1B17">Huyện Ba Vì</option>
              <option value="1B18">Huyện Phúc Thọ</option>
              <option value="1B19">Huyện Thạch Thất</option>
              <option value="1B20">Huyện Quốc Oai</option>
              <option value="1B21">Huyện Chương Mỹ</option>
              <option value="1B22">Huyện Đan Phượng</option>
              <option value="1B23">Huyện Hoài Đức</option>
              <option value="1B24">Huyện Thanh Oai</option>
              <option value="1B25">Huyện Mỹ Đức</option>
              <option value="1B26">Huyện ứng Hoà</option>
              <option value="1B27">Huyện Thường Tín</option>
              <option value="1B28">Huyện Phú Xuyên</option>
              <option value="1B29">Huyện Mê Linh</option>
              <option value="2100">Sở Giáo dục và Đào tạo</option>
              <option value="2101">Thành phố Hải Dương</option>
              <option value="2102">Huyện Chí Linh</option>
              <option value="2103">Huyện Nam Sách</option>
              <option value="2104">Huyện Kinh Môn</option>
              <option value="2105">Huyện Gia Lộc</option>
              <option value="2106">Huyện Tứ Kỳ</option>
              <option value="2107">Huyện Thanh Miện</option>
              <option value="2108">Huyện Ninh Giang</option>
              <option value="2109">Huyện Cẩm Giàng</option>
              <option value="2110">Huyện Thanh Hà</option>
              <option value="2111">Huyện Kim Thành</option>
              <option value="2112">Huyện Bình Giang</option>
              <option value="2200">Sở Giáo dục và Đào tạo</option>
              <option value="2201">Thị xã Hưng Yên</option>
              <option value="2202">Huyện Kim Động</option>
              <option value="2203">Huyện Ân Thi</option>
              <option value="2204">Huyện Khoái Châu</option>
              <option value="2205">Huyện Yên Mỹ</option>
              <option value="2206">Huyện Tiên Lữ</option>
              <option value="2207">Huyện Phù Cừ</option>
              <option value="2208">Huyện Mỹ Hào</option>
              <option value="2209">Huyện Văn Lâm</option>
              <option value="2210">Huyện Văn Giang</option>
              <option value="2300">Sở Giáo dục và Đào tạo</option>
              <option value="2301">Thành phố Hoà Bình</option>
              <option value="2302">Huyện Đà Bắc</option>
              <option value="2303">Huyện Mai Châu</option>
              <option value="2304">Huyện Tân Lạc</option>
              <option value="2305">Huyện Lạc Sơn</option>
              <option value="2306">Huyện Kỳ Sơn</option>
              <option value="2307">Huyện Lưương Sơn</option>
              <option value="2308">Huyện Kim Bôi</option>
              <option value="2309">Huyện Lạc Thuỷ</option>
              <option value="2310">Huyện Yên Thuỷ</option>
              <option value="2311">Huyện Cao Phong</option>
              <option value="2400">Sở Giáo dục và Đào tạo</option>
              <option value="2401">Thị xã Phủ Lý</option>
              <option value="2402">Huyện Duy Tiên</option>
              <option value="2403">Huyện Kim Bảng</option>
              <option value="2404">Huyện Lý Nhân</option>
              <option value="2405">Huỵện Thanh Liêm</option>
              <option value="2406">Huyện Bình Lục</option>
              <option value="2500">Sở Giáo dục và Đào tạo</option>
              <option value="2501">TP. Nam Định</option>
              <option value="2502">Huyện Mỹ Lộc</option>
              <option value="2503">Huyện Xuân Trường</option>
              <option value="2504">Huyện Giao Thủy</option>
              <option value="2505">Huyện ý Yên</option>
              <option value="2506">Huyện Vụ Bản</option>
              <option value="2507">Huyện Nam Trực</option>
              <option value="2508">Huyện Trực Ninh</option>
              <option value="2509">Huyện Nghĩa Hưng</option>
              <option value="2510">Huyện Hải Hậu</option>
              <option value="2600">Sở Giáo dục và Đào tạo</option>
              <option value="2601">Thành phố Thái Bình</option>
              <option value="2602">Huyện Quỳnh Phụ</option>
              <option value="2603">Huyện Hưng Hà</option>
              <option value="2604">Huyện Đông Hưng</option>
              <option value="2605">Huyện Vũ Thư</option>
              <option value="2606">Huyện Kiến Xương</option>
              <option value="2607">Huyện Tiền Hải</option>
              <option value="2608">Huyện Thái Thuỵ</option>
              <option value="2700">Sở Giáo dục và Đào tạo</option>
              <option value="2701">Thành phố Ninh Bình</option>
              <option value="2702">Thị xã Tam Điệp</option>
              <option value="2703">Huyện Nho Quan</option>
              <option value="2704">Huyện Gia Viễn</option>
              <option value="2705">Huyện Hoa Lư</option>
              <option value="2706">Huyện Yên Mô</option>
              <option value="2707">Huyện Kim Sơn</option>
              <option value="2708">Huyện Yên Khánh</option>
              <option value="2800">Sở Giáo dục và Đào tạo</option>
              <option value="2801">Thành phố Thanh Hoá</option>
              <option value="2802">Thị xã Bỉm Sơn</option>
              <option value="2803">Thị xã Sầm Sơn</option>
              <option value="2804">Huyện Quan Hoá</option>
              <option value="2805">Huyện Quan Sơn</option>
              <option value="2806">Huyện Mường Lát</option>
              <option value="2807">Huyện Bá Thước</option>
              <option value="2808">Huyện Thường Xuân</option>
              <option value="2809">Huyện Như Xuân</option>
              <option value="2810">Huyện Như Thanh</option>
              <option value="2811">Huyện Lang Chánh</option>
              <option value="2812">Huyện Ngọc Lặc</option>
              <option value="2813">Huyện Thạch Thành</option>
              <option value="2814">Huyện Cẩm Thủy</option>
              <option value="2815">Huyện Thọ Xuân</option>
              <option value="2816">Huyện Vĩnh Lộc</option>
              <option value="2817">Huyện Thiệu Hoá</option>
              <option value="2818">Huyện Triệu Sơn</option>
              <option value="2819">Huyện Nông Cống</option>
              <option value="2820">Huyện Đông Sơn</option>
              <option value="2821">Huyện Hà Trung</option>
              <option value="2822">Huyện Hoằng Hoá</option>
              <option value="2823">Huyện Nga Sơn</option>
              <option value="2824">Huyện Hậu Lộc</option>
              <option value="2825">Huyện Quảng Xương</option>
              <option value="2826">Huyện Tĩnh Gia</option>
              <option value="2827">Huyện Yên Định</option>
              <option value="2900">Sở Giáo dục và Đào tạo</option>
              <option value="2901">Thành phố Vinh</option>
              <option value="2902">Thị xã Cửa Lò</option>
              <option value="2903">Huyện Quỳ Châu</option>
              <option value="2904">Huyện Quỳ Hợp</option>
              <option value="2905">Huyện Nghĩa Đàn</option>
              <option value="2906">Huyện Quỳnh Lưu</option>
              <option value="2907">Huyện Kỳ Sơn</option>
              <option value="2908">Huyện Tương Dương</option>
              <option value="2909">Huyện Con Cuông</option>
              <option value="2910">Huyện Tân Kỳ</option>
              <option value="2911">Huyện Yên Thành</option>
              <option value="2912">Huyện Diễn Châu</option>
              <option value="2913">Huyện Anh Sơn</option>
              <option value="2914">Huyện Đô Lương</option>
              <option value="2915">Huyện Thanh Chương</option>
              <option value="2916">Huyện Nghi Lộc</option>
              <option value="2917">Huyện Nam Đàn</option>
              <option value="2918">Huyện Hưng Nguyên</option>
              <option value="2919">Huyện Quế Phong</option>
              <option value="2920">Huyện Thái Hoà</option>
              <option value="3000">Sở Giáo dục và Đào tạo</option>
              <option value="3001">Thành phố Hà Tĩnh</option>
              <option value="3002">Thị xã Hồng Lĩnh</option>
              <option value="3003">Huyện Hương Sơn</option>
              <option value="3004">Huyện Đức Thọ</option>
              <option value="3005">Huyện Nghi Xuân</option>
              <option value="3006">Huyện Can Lộc</option>
              <option value="3007">Huyện Hương Khê</option>
              <option value="3008">Huyện Thạch Hà</option>
              <option value="3009">Huyện Cẩm Xuyên</option>
              <option value="3010">Huyện Kỳ Anh</option>
              <option value="3011">Huyện Vũ Quang</option>
              <option value="3012">Huyện Lộc Hà</option>
              <option value="3100">Sở Giáo dục và Đào tạo</option>
              <option value="3101">Thành phố Đồng Hới</option>
              <option value="3102">Huyện Tuyên Hoá</option>
              <option value="3103">Huyện Minh Hoá</option>
              <option value="3104">Huyện Quảng Trạch</option>
              <option value="3105">Huyện Bố Trạch</option>
              <option value="3106">Huyện Quảng Ninh</option>
              <option value="3107">Huyện Lệ Thuỷ</option>
              <option value="3200">Sở Giáo dục và Đào tạo</option>
              <option value="3201">Thị xã Đông Hà</option>
              <option value="3202">Thị xã Quảng Trị</option>
              <option value="3203">Huyện Vĩnh Linh</option>
              <option value="3204">Huyện Gio Linh</option>
              <option value="3205">Huyện Cam Lộ</option>
              <option value="3206">Huyện Triệu Phong</option>
              <option value="3207">Huyện Hải Lăng</option>
              <option value="3208">Huyện Hướng Hoá</option>
              <option value="3209">Huyện Đăk Rông</option>
              <option value="3210">Huyện đảo Cồn cỏ</option>
              <option value="3300">Sở Giáo dục và Đào tạo</option>
              <option value="3301">TP. Huế</option>
              <option value="3302">Huyện Phong Điền</option>
              <option value="3303">Huyện Quảng Điền</option>
              <option value="3304">Huyện Hương Trà</option>
              <option value="3305">Huyện Phú Vang</option>
              <option value="3306">Huyện Hương Thuỷ</option>
              <option value="3307">Huyện Phú Lộc</option>
              <option value="3308">Huyện Nam Đông</option>
              <option value="3309">Huyện A Lưới</option>
              <option value="3400">Sở Giáo dục và Đào tạo</option>
              <option value="3401">Thành phố Tam Kỳ</option>
              <option value="3402">Thị xã Hội An</option>
              <option value="3403">Huyện Duy Xuyên</option>
              <option value="3404">Huyện Điện Bàn</option>
              <option value="3405">Huyện Đại Lộc</option>
              <option value="3406">Huyện Quế Sơn</option>
              <option value="3407">Huyện Hiệp Đức</option>
              <option value="3408">Huyện Thăng Bình</option>
              <option value="3409">Huyện Núi Thành</option>
              <option value="3410">Huyện Tiên Phước</option>
              <option value="3411">Huyện Bắc Trà My</option>
              <option value="3412">Huyện Đông Giang</option>
              <option value="3413">Huyện Nam Giang</option>
              <option value="3414">Huyện Phước Sơn</option>
              <option value="3415">Huyện Nam Trà My</option>
              <option value="3416">Huyện Tây Giang</option>
              <option value="3417">Huyện Phú Ninh</option>
              <option value="3500">Sở Giáo dục và Đào tạo</option>
              <option value="3501">Thành phố Quảng Ngãi</option>
              <option value="3502">Huyện Lý Sơn</option>
              <option value="3503">Huyện Bình Sơn</option>
              <option value="3504">Huyện Trà Bồng</option>
              <option value="3505">Huyện Sơn Tịnh</option>
              <option value="3506">Huyện Sơn Hà</option>
              <option value="3507">Huyện Tư Nghĩa</option>
              <option value="3508">Huyện Nghĩa Hành</option>
              <option value="3509">Huyện Minh Long</option>
              <option value="3510">Huyện Mộ Đức</option>
              <option value="3511">Huyện Đức Phổ</option>
              <option value="3512">Huyện Ba Tơ</option>
              <option value="3513">Huyện Sơn Tây</option>
              <option value="3514">Huyện Tây Trà</option>
              <option value="3600">Sở Giáo dục và Đào tạo</option>
              <option value="3601">Thị xã KonTum</option>
              <option value="3602">Huyện Đăk Glei</option>
              <option value="3603">Huyện Ngọc Hồi</option>
              <option value="3604">Huyện Đăk Tô</option>
              <option value="3605">Huyện Sa Thầy</option>
              <option value="3606">Huyện Kon Plong</option>
              <option value="3607">Huyện Đăk Hà</option>
              <option value="3608">Huyện Kon Rộy</option>
              <option value="3609">Huyện Tu Mơ Rông</option>
              <option value="3700">Sở Giáo dục và Đào tạo</option>
              <option value="3701">Thành phố Quy Nhơn</option>
              <option value="3702">Huyện An Lão</option>
              <option value="3703">Huyện Hoài Ân</option>
              <option value="3704">Huyện Hoài Nhơn</option>
              <option value="3705">Huyện Phù Mỹ</option>
              <option value="3706">Huyện Phù Cát</option>
              <option value="3707">Huyện Vĩnh Thạnh</option>
              <option value="3708">Huyện Tây Sơn</option>
              <option value="3709">Huyện Vân Canh</option>
              <option value="3710">Huyện An Nhơn</option>
              <option value="3711">Huyện Tuy Phước</option>
              <option value="3800">Sở Giáo dục và Đào tạo</option>
              <option value="3801">Thành phố Pleiku</option>
              <option value="3802">Huyện Chư Păh</option>
              <option value="3803">Huyện Mang Yang</option>
              <option value="3804">Huyện Kbang</option>
              <option value="3805">Thị xã An Khê</option>
              <option value="3806">Huyện Kông Chro</option>
              <option value="3807">Huyện Đức Cơ</option>
              <option value="3808">Huyện Chưprông</option>
              <option value="3809">Huyện Chư Sê</option>
              <option value="3810">Huyện Ayunpa</option>
              <option value="3811">Huyện Krông Pa</option>
              <option value="3812">Huyện Ia Grai</option>
              <option value="3813">Huyện Đăk Đoa</option>
              <option value="3814">Huyện Ia Pa</option>
              <option value="3815">Huyện Đăk Pơ</option>
              <option value="3816">Huyện Phú Thiện</option>
              <option value="3900">Sở Giáo dục và Đào tạo</option>
              <option value="3901">Thị xã Tuy Hoà</option>
              <option value="3902">Huyện Đồng Xuân</option>
              <option value="3903">Huyện Sông Cầu</option>
              <option value="3904">Huyện Tuy An</option>
              <option value="3905">Huyện Sơn Hoà</option>
              <option value="3906">Huyện Sông Hinh</option>
              <option value="3907">Huyện Đông Hoà</option>
              <option value="3908">Huyện Phú Hoà</option>
              <option value="3909">Huyện Tây Hoà</option>
              <option value="4000">Sở Giáo dục và Đào tạo</option>
              <option value="4001">Thành phố Buôn Ma Thuột</option>
              <option value="4002">Huyện Ea H Leo</option>
              <option value="4003">Huyện Krông Buk</option>
              <option value="4004">Huyện Krông Năng</option>
              <option value="4005">Huyện Ea Súp</option>
              <option value="4006">Huyện Cư M gar</option>
              <option value="4007">Huyện Krông Pắc</option>
              <option value="4008">Huyện Ea Kar</option>
              <option value="4009">Huyện M'Đrăk</option>
              <option value="4010">Huyện Krông Ana</option>
              <option value="4011">Huyện Krông Bông</option>
              <option value="4012">Huyện Lăk</option>
              <option value="4013">Huyện Buôn Đôn</option>
              <option value="4014">Huyện Cư Kuin</option>
              <option value="4100">Sở Giáo dục và Đào tạo</option>
              <option value="4101">Thành phố Nha Trang</option>
              <option value="4102">Huyện Vạn Ninh</option>
              <option value="4103">Huyện Ninh Hoà</option>
              <option value="4104">Huyện Diên Khánh</option>
              <option value="4105">Huyện Khánh Vĩnh</option>
              <option value="4106">Thị xã Cam Ranh</option>
              <option value="4107">Huyện Khánh Sơn</option>
              <option value="4108">Huyện Trường Sa</option>
              <option value="4109">Huyện Cam Lâm</option>
              <option value="4200">Sở Giáo dục và Đào tạo</option>
              <option value="4201">Thành phố Đà Lạt</option>
              <option value="4202">Thị xã. Bảo Lộc</option>
              <option value="4203">Huyện Đức Trọng</option>
              <option value="4204">Huyện Di Linh</option>
              <option value="4205">Huyện Đơn Dương</option>
              <option value="4206">Huyện Lạc Dương</option>
              <option value="4207">Huyện Đạ Huoai</option>
              <option value="4208">Huyện Đạ Tẻh</option>
              <option value="4209">Huyện Cát Tiên</option>
              <option value="4210">Huyện Lâm Hà</option>
              <option value="4211">Huyện Bảo Lâm</option>
              <option value="4212">Huyện Đam Rông</option>
              <option value="4300">Sở Giáo dục và Đào tạo</option>
              <option value="4301">Thị xã Đồng Xoài</option>
              <option value="4302">Huyện Đồng Phú</option>
              <option value="4303">Huyện Chơn Thành</option>
              <option value="4304">Huyện Bình Long</option>
              <option value="4305">Huyện Lộc Ninh</option>
              <option value="4306">Huyện Bù Đốp</option>
              <option value="4307">Huyện Phước Long</option>
              <option value="4308">Huyện Bù Đăng</option>
              <option value="4400">Sở Giáo dục và Đào tạo</option>
              <option value="4401">Thị xã Thủ Dầu Một</option>
              <option value="4402">Huyện Bến Cát</option>
              <option value="4403">Huyện Tân Uyên</option>
              <option value="4404">Huyện Thuận An</option>
              <option value="4405">Huyện Dĩ An</option>
              <option value="4406">Huyện Phú Giáo</option>
              <option value="4407">Huyện Dầu Tiếng</option>
              <option value="4500">Sở Giáo dục và Đào tạo</option>
              <option value="4501">Thành phố Phan Rang-Tháp Chàm</option>
              <option value="4502">Huyện Ninh Sơn</option>
              <option value="4504">Huyện Ninh Phước</option>
              <option value="4505">Huyện Bác ái</option>
              <option value="4506">Huyện Thuận Bắc</option>
              <option value="4550">Huyện Ninh Hải</option>
              <option value="4600">Sở Giáo dục và Đào tạo</option>
              <option value="4601">Thị xã Tây Ninh</option>
              <option value="4602">Huyện Tân Biên</option>
              <option value="4603">Huyện Tân Châu</option>
              <option value="4604">Huyện Dương Minh Châu</option>
              <option value="4605">Huyện Châu Thành</option>
              <option value="4606">Huyện Hoà Thành</option>
              <option value="4607">Huyện Bến Cầu</option>
              <option value="4608">Huyện Gò Dầu</option>
              <option value="4609">Huyện Trảng Bàng</option>
              <option value="4700">Sở Giáo dục và Đào tạo</option>
              <option value="4701">Thành phố Phan Thiết</option>
              <option value="4702">Huyện Tuy Phong</option>
              <option value="4703">Huyện Bắc Bình</option>
              <option value="4704">Huyện Hàm Thuận Bắc</option>
              <option value="4705">Huyện Hàm Thuận Nam</option>
              <option value="4706">Huyện Hàm Tân</option>
              <option value="4707">Huyện Đức Linh</option>
              <option value="4708">Huyện Tánh Linh</option>
              <option value="4709">Huyện đảo Phú Quý</option>
              <option value="4710">Thị xã LaGi</option>
              <option value="4800">Sở Giáo dục và Đào tạo</option>
              <option value="4801">Thành phố Biên Hoà</option>
              <option value="4802">Huyện Vĩnh Cửu</option>
              <option value="4803">Huyện Tân Phú</option>
              <option value="4804">Huyện Định Quán</option>
              <option value="4805">Huyện Thống Nhất</option>
              <option value="4806">Thị xã Long Khánh</option>
              <option value="4807">Huyện Xuân Lộc</option>
              <option value="4808">Huyện Long Thành</option>
              <option value="4809">Huyện Nhơn Trạch</option>
              <option value="4810">Huyện Trảng Bom</option>
              <option value="4811">Huyện Cẩm Mỹ</option>
              <option value="4900">Sở Giáo dục và Đào tạo</option>
              <option value="4901">Thị xã Tân An</option>
              <option value="4902">Huyện Vĩnh Hưng</option>
              <option value="4903">Huyện Mộc Hoá</option>
              <option value="4904">Huyện Tân Thạnh</option>
              <option value="4905">Huyện Thạnh Hoá</option>
              <option value="4906">Huyện Đức Huệ</option>
              <option value="4907">Huyện Đức Hoà</option>
              <option value="4908">Huyện Bến Lức</option>
              <option value="4909">Huyện Thủ Thừa</option>
              <option value="4910">Huyện Châu Thành</option>
              <option value="4911">Huyện Tân Trụ</option>
              <option value="4912">Huyện Cần Đước</option>
              <option value="4913">Huyện Cần Giuộc</option>
              <option value="4914">Huyện Tân Hưng</option>
              <option value="5000">Sở Giáo dục và Đào tạo</option>
              <option value="5001">Thành phố Cao Lãnh</option>
              <option value="5002">Thị xã Sa Đéc</option>
              <option value="5003">Huyện Tân Hồng</option>
              <option value="5004">Huyện Hồng Ngự</option>
              <option value="5005">Huyện Tam Nông</option>
              <option value="5006">Huyện Thanh Bình</option>
              <option value="5007">Huyện Cao Lãnh</option>
              <option value="5008">Huyện Lấp Vò</option>
              <option value="5009">Huyện Tháp Mười</option>
              <option value="5010">Huyện Lai Vung</option>
              <option value="5011">Huyện Châu Thành</option>
              <option value="5100">Sở Giáo dục và Đào tạo</option>
              <option value="5101">Thành phố Long Xuyên</option>
              <option value="5102">Thị xã Châu Đốc</option>
              <option value="5103">Huyện An Phú</option>
              <option value="5104">Huyện Tân Châu</option>
              <option value="5105">Huyện Phú Tân</option>
              <option value="5106">Huyện Tịnh Biên</option>
              <option value="5107">Huyện Tri Tôn</option>
              <option value="5108">Huyện Châu Phú</option>
              <option value="5109">Huyện Chợ Mới</option>
              <option value="5110">Huyện Châu Thành</option>
              <option value="5111">Huyện Thoại Sơn</option>
              <option value="5200">Sở Giáo dục và Đào tạo</option>
              <option value="5201">Thành phố Vũng Tàu</option>
              <option value="5202">Thị xã Bà Rịa</option>
              <option value="5203">Huyện Xuyên Mộc</option>
              <option value="5204">Huyện Long Điền</option>
              <option value="5205">Huyện Côn Đảo</option>
              <option value="5206">Huyện Tân Thành</option>
              <option value="5207">Huyện Châu Đức</option>
              <option value="5208">Huyện Đất Đỏ</option>
              <option value="5300">Sở Giáo dục và Đào tạo</option>
              <option value="5301">Thành phố Mỹ Tho</option>
              <option value="5302">Thị xã Gò Công</option>
              <option value="5303">Huyện Cái Bè</option>
              <option value="5304">Huyện Cai Lậy</option>
              <option value="5305">Huyện Châu Thành</option>
              <option value="5306">Huyện Chợ Gạo</option>
              <option value="5307">Huyện Gò Công Tây</option>
              <option value="5308">Huyện Gò Công Đông</option>
              <option value="5309">Huyện Tân Phước</option>
              <option value="5400">Sở Giáo dục và Đào tạo</option>
              <option value="5401">Thành phố Rạch Giá</option>
              <option value="5402">Thị xã Hà Tiên</option>
              <option value="5403">Huyện Kiên Lương</option>
              <option value="5404">Huyện Hòn Đất</option>
              <option value="5405">Huyện Tân Hiệp</option>
              <option value="5406">Huyện Châu Thành</option>
              <option value="5407">Huyện Giồng Riềng</option>
              <option value="5408">Huyện Gò Quao</option>
              <option value="5409">Huyện An Biên</option>
              <option value="5410">Huyện An Minh</option>
              <option value="5411">Huyện Vĩnh Thuận</option>
              <option value="5412">Huyện Phú Quốc</option>
              <option value="5413">Huyện Kiên Hải</option>
              <option value="5414">Huyện U minh Thượng</option>
              <option value="5500">Sở Giáo dục và Đào tạo</option>
              <option value="5501">Quận Ninh Kiều</option>
              <option value="5502">Quận Bình Thuỷ</option>
              <option value="5503">Quận Cái Răng</option>
              <option value="5504">Quận Ô Môn</option>
              <option value="5505">Huyện Phong Điền</option>
              <option value="5506">Huyện Cờ Đỏ</option>
              <option value="5507">Huyện Vĩnh Thạnh</option>
              <option value="5508">Huỵện Thốt Nốt</option>
              <option value="5600">Sở Giáo dục và Đào tạo</option>
              <option value="5601">Thị xã Bến Tre</option>
              <option value="5602">Huyện Châu Thành</option>
              <option value="5603">Huyện Chợ Lách</option>
              <option value="5604">Huyện Mỏ Cày</option>
              <option value="5605">Huyện Giồng Trôm</option>
              <option value="5606">Huyện Bình Đại</option>
              <option value="5607">Huyện Ba Tri</option>
              <option value="5608">Huyện Thạnh Phú</option>
              <option value="5700">Sở Giáo dục và Đào tạo</option>
              <option value="5701">Thị xã Vĩnh Long</option>
              <option value="5702">Huyện Long Hồ</option>
              <option value="5703">Huyện Mang Thít</option>
              <option value="5704">Huyện Bình Minh</option>
              <option value="5705">Huyện Tam Bình</option>
              <option value="5706">Huyện Trà Ôn</option>
              <option value="5707">Huyện Vũng Liêm</option>
              <option value="5708">huyện Bình Tân</option>
              <option value="5800">Sở Giáo dục và Đào tạo</option>
              <option value="5801">Thị xã Trà Vinh</option>
              <option value="5802">Huyện Càng Long</option>
              <option value="5803">Huyện Cầu Kè</option>
              <option value="5804">Huyện Tiểu Cần</option>
              <option value="5805">Huyện Châu Thành</option>
              <option value="5806">Huyện Trà Cú</option>
              <option value="5807">Huyện Cầu Ngang</option>
              <option value="5808">Huyện Duyên Hải</option>
              <option value="5900">Sở Giáo dục và Đào tạo</option>
              <option value="5901">Thành phố Sóc Trăng</option>
              <option value="5902">Huyện Kế Sách</option>
              <option value="5903">Huyện Mỹ Tú</option>
              <option value="5904">Huyện Mỹ Xuyên</option>
              <option value="5905">Huyện Thạnh Trị</option>
              <option value="5906">Huyện Long Phú</option>
              <option value="5907">Huyện Vĩnh Châu</option>
              <option value="5908">Huyện Cù Lao Dung</option>
              <option value="5909">Huyện Ngã Năm</option>
              <option value="6000">Sở Giáo dục và Đào tạo</option>
              <option value="6001">Thị xã Bạc Liêu</option>
              <option value="6002">Huyện Vĩnh Lợi</option>
              <option value="6003">Huyện Hồng Dân</option>
              <option value="6004">Huyện Giá Rai</option>
              <option value="6005">Huyện Phước Long</option>
              <option value="6006">Huyện Đông Hải</option>
              <option value="6007">Huyện Hoà Bình</option>
              <option value="6100">Sở Giáo dục và Đào tạo</option>
              <option value="6101">Thành phố Cà Mau</option>
              <option value="6102">Huyện Thới Bình</option>
              <option value="6103">Huyện U Minh</option>
              <option value="6104">Huyện Trần Văn Thời</option>
              <option value="6105">Huyện Cái Nước</option>
              <option value="6106">Huyện Đầm Dơi</option>
              <option value="6107">Huyện Ngọc Hiển</option>
              <option value="6108">Huyện Năm Căn</option>
              <option value="6109">Huyện Phú Tân</option>
              <option value="6200">Sở Giáo dục và Đào tạo</option>
              <option value="6201">TP. Điện Biên Phủ</option>
              <option value="6202">Thị xã Mường Lay</option>
              <option value="6203">Huyện Điện Biên</option>
              <option value="6204">Huyện Tuần Giáo</option>
              <option value="6205">Huyện Mường Chà</option>
              <option value="6206">Huyện Tủa Chùa</option>
              <option value="6207">Huyện Điện Biên Đông</option>
              <option value="6208">Huyện Mường Nhé</option>
              <option value="6209">Huyện Mường ảng</option>
              <option value="6300">Sở Giáo dục và Đào tạo</option>
              <option value="6301">Thị xã Gia Nghĩa</option>
              <option value="6302">Huyện Dăk RLấp</option>
              <option value="6303">Huyện Dăk Mil</option>
              <option value="6304">Huyện Cư Jút</option>
              <option value="6305">Huyện Dăk Song</option>
              <option value="6306">Huyện Krông Nô</option>
              <option value="6307">Huyện Dăk GLong</option>
              <option value="6308">Huyện Tuy Đức</option>
              <option value="6400">Sở Giáo dục và Đào tạo</option>
              <option value="6401">Thị xã Vị Thanh</option>
              <option value="6402">Huyện Vị Thuỷ</option>
              <option value="6403">Huyện Long Mỹ</option>
              <option value="6404">Huyện Phụng Hiệp</option>
              <option value="6405">Huyện Châu Thành</option>
              <option value="6406">Huyện Châu Thành A</option>
              <option value="6407">Thị xã Ngã Bảy</option>
              <option value="6410">TX Thái Hoa</option>
            </select>
          </div>
          <div style="float: left; width: 25%;">
            <span class="NoiDungHoSo">Tỉnh/Thành phố:</span>
            <select id="cbbTinhThanhPhoEdit" class="form-control" style="width:250px">
              <option value="2">TP Hồ Chí Minh</option>
              <option value="3">TP Hải Phòng</option>
              <option value="4">TP Đà Nẵng</option>
              <option value="5">Tỉnh Hà Giang</option>
              <option value="6">Tỉnh Cao Bằng</option>
              <option value="7">Tỉnh Lai Châu</option>
              <option value="8">Tỉnh Lào Cai</option>
              <option value="9">Tỉnh Tuyên Quang</option>
              <option value="10">Tỉnh Lạng Sơn</option>
              <option value="11">Tỉnh Bắc Cạn</option>
              <option value="12">Tỉnh Thái Nguyên</option>
              <option value="13">Tỉnh Yên Bái</option>
              <option value="14">Tỉnh Sơn La</option>
              <option value="15">Tỉnh Phú Thọ</option>
              <option value="16">Tỉnh Vĩnh Phúc</option>
              <option value="17">Tỉnh Quảng Ninh</option>
              <option value="18">Tỉnh Bắc Giang</option>
              <option value="19">Tỉnh Bắc Ninh</option>
              <option value="21">Tỉnh Hải Dương</option>
              <option value="22">Tỉnh Hưng Yên</option>
              <option value="23">Tỉnh Hòa Bình</option>
              <option value="24">Tỉnh Hà Nam</option>
              <option value="25">Tỉnh Nam Định</option>
              <option value="26">Tỉnh Thái Bình</option>
              <option value="27">Tỉnh Ninh Bình</option>
              <option value="28">Tỉnh Thanh Hóa</option>
              <option value="29">Tỉnh Nghệ An</option>
              <option value="30">Tỉnh Hà Tĩnh</option>
              <option value="31">Tỉnh Quảng Bình</option>
              <option value="32">Tỉnh Quảng Trị</option>
              <option value="33">Tỉnh Thừa thiên-Huế</option>
              <option value="34">Tỉnh Quảng Nam</option>
              <option value="35">Tỉnh Quảng Ngãi</option>
              <option value="36">Tỉnh KonTum</option>
              <option value="37">Tỉnh Bình Định</option>
              <option value="38">Tỉnh Gia Lai</option>
              <option value="39">Tỉnh Phú Yên</option>
              <option value="40">Tỉnh Đắc Lắc</option>
              <option value="41">Tỉnh Khánh Hòa</option>
              <option value="42">Tỉnh Lâm Đồng</option>
              <option value="43">Tỉnh Bình Phước</option>
              <option value="44">Tỉnh Bình Dương</option>
              <option value="45">Tỉnh Ninh Thuận</option>
              <option value="46">Tỉnh Tây Ninh</option>
              <option value="47">Tỉnh Bình Thuận</option>
              <option value="48">Tỉnh Đồng Nai</option>
              <option value="49">Tỉnh Long An</option>
              <option value="50">Tỉnh Đồng Tháp</option>
              <option value="51">Tỉnh An Giang</option>
              <option value="52">Tỉnh BàRịa-VT</option>
              <option value="53">Tỉnh Tiền Giang</option>
              <option value="54">Tỉnh Kiên Giang</option>
              <option value="55">TP Cần Thơ</option>
              <option value="56">Tỉnh Bến Tre</option>
              <option value="57">Tỉnh Vĩnh Long</option>
              <option value="58">Tỉnh Trà Vinh</option>
              <option value="59">Tỉnh Sóc Trăng</option>
              <option value="60">Tỉnh Bạc Liêu</option>
              <option value="61">Tỉnh Cà Mau</option>
              <option value="62">Tỉnh Điện Biên</option>
              <option value="63">Tỉnh Đăk Nông</option>
              <option value="64">Tỉnh Hậu Giang</option>
              <option value="70">Tỉnh Hoàng Liên Sơn</option>
              <option value="71">Tỉnh Vĩnh Phú</option>
              <option value="72">Tỉnh Hà Nam Ninh</option>
              <option value="73">Tỉnh Hà Sơn Bình</option>
              <option value="74">Tỉnh Nam Hà</option>
              <option value="75">Tỉnh Hà Bắc</option>
              <option value="76">Tỉnh Hải Hưng</option>
              <option value="77">Tỉnh Bắc Thái</option>
              <option value="78">Tỉnh Hà Tuyên</option>
              <option value="79">Quảng Nam Đà Nẵng</option>
              <option value="80">Nghệ Tĩnh</option>
              <option value="81">Bình Trị Thiên</option>
              <option value="82">Vương quốc Campuchia</option>
              <option value="83">Cộng hoà dân chủ Lào</option>
              <option value="84">Cộng hòa Liên Bang Đức</option>
              <option value="85">Liên Xô</option>
              <option value="86">Sông Bé</option>
              <option value="87">Palestin</option>
              <option value="100">TP Hà Nội (Hà tây cũ)</option>
              <option value="101">TP Hà nội</option>
            </select>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-10 fullwidth" style="height:20px"></div>
        <div class="fullwidth" style="margin-left:60px">
          <div style="float: left; width: 50%;">
            <span class="NoiDungHoSo">HK thường trú:</span>
            <input
              id="txtDia_chi_ttEdit"
              type="text"
              class="form-control"
              style="width:560px"
              value
            >
          </div>
          <div style="float: left; width: 20%;">
            <span class="NoiDungHoSo">Xã/Phường:</span>
            <input id="txtXa_phuong_tt" type="text" class="form-control" style="width:560px" value>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-10 fullwidth" style="height:20px"></div>
        <div class="fullwidth" style="margin-left:60px">
          <div style="float: left; width: 50%;">
            <span class="NoiDungHoSo">Nơi ở hiện nay:</span>
            <span class="NoiDungHoSo2 label" style="margin-left:18px"></span>
          </div>
          <div style="float: left; width: 50%;">
            <span class="NoiDungHoSo">Địa chỉ báo tin:</span>
            <span class="NoiDungHoSo2 label" style="margin-left:39px"></span>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-10 fullwidth" style="height:20px"></div>
        <div class="fullwidth" style="margin-left:60px">
          <div style="float: left; width: 50%;">
            <span class="NoiDungHoSo">Đối tượng ưu tiên:</span>
            <span class="NoiDungHoSo2 label" id></span>
          </div>
          <div style="float: left; width: 50%;">
            <span class="NoiDungHoSo">Đối tượng miễn giảm:</span>
            <span class="NoiDungHoSo2 label" id></span>
          </div>
        </div>
      </div>
      <div class="row" style="margin-top:20px">
        <div class="fullwidth" style="margin-left:60px">
          <div class="panel panel-default" style="width:95%">
            <div class="panel-heading">
              <span class="NoiDungHoSo">QUAN HỆ GIA ĐÌNH</span>
            </div>
            <div class="panel-body">
              <div class="fullwidth">
                <div style="float: left; width: 30%;">
                  <span class="NoiDungHoSo">Họ tên cha:</span>
                  <span class="NoiDungHoSo2 label" id></span>
                </div>
                <div style="float: left; width: 70%;">
                  <span class="NoiDungHoSo">Hộ khẩu thường trú:</span>
                  <span class="NoiDungHoSo2 label" id></span>
                </div>
              </div>
              <div class="fullwidth" style="margin-top:20px;height:20px"></div>

              <div class="fullwidth">
                <div style="float: left; width: 25%;">
                  <span class="NoiDungHoSo">Năm sinh:</span>
                  <span class="NoiDungHoSo2 label" style="margin-left:8px"></span>
                </div>
                <div style="float: left; width: 25%;">
                  <span class="NoiDungHoSo">Quốc tịch:</span>
                  <span class="NoiDungHoSo2 label" id>Việt Nam</span>
                </div>
                <div style="float: left; width: 25%;">
                  <span class="NoiDungHoSo">Dân tộc:</span>
                  <span class="NoiDungHoSo2 label" id></span>
                </div>
                <div style="float: left; width: 25%;">
                  <span class="NoiDungHoSo">Tôn Giáo:</span>
                  <span class="NoiDungHoSo2 label" id></span>
                </div>
              </div>
              <div class="fullwidth" style="margin-top:20px;height:20px"></div>
              <div class="fullwidth">
                <div style="float: left; width: 100%;">
                  <span class="NoiDungHoSo">Nghề nghiệp cha:</span>
                  <span class="NoiDungHoSo2 label" id></span>
                </div>
              </div>

              <div class="fullwidth" style="margin-top:20px;height:20px;">
                <hr>
              </div>
              <div class="fullwidth">
                <div style="float: left; width: 30%;">
                  <span class="NoiDungHoSo">Họ tên Mẹ:</span>
                  <span class="NoiDungHoSo2 label" id></span>
                </div>
                <div style="float: left; width: 70%;">
                  <span class="NoiDungHoSo">Hộ khẩu thường trú:</span>
                  <span class="NoiDungHoSo2 label" id></span>
                </div>
              </div>

              <div class="fullwidth" style="margin-top:20px;height:20px"></div>
              <div class="fullwidth">
                <div style="float: left; width: 25%;">
                  <span class="NoiDungHoSo">Năm sinh:</span>
                  <span class="NoiDungHoSo2 label" style="margin-left:8px"></span>
                </div>
                <div style="float: left; width: 25%;">
                  <span class="NoiDungHoSo">Quốc tịch:</span>
                  <span class="NoiDungHoSo2 label" id>Việt Nam</span>
                </div>
                <div style="float: left; width: 25%;">
                  <span class="NoiDungHoSo">Dân tộc:</span>
                  <span class="NoiDungHoSo2 label" id></span>
                </div>
                <div style="float: left; width: 25%;">
                  <span class="NoiDungHoSo">Tôn Giáo:</span>
                  <span class="NoiDungHoSo2 label" id></span>
                </div>
              </div>
              <div class="fullwidth" style="margin-top:20px;height:20px"></div>
              <div class="fullwidth">
                <div style="float: left; width: 100%;">
                  <span class="NoiDungHoSo">Nghề nghiệp mẹ:</span>
                  <span class="NoiDungHoSo2 label" id></span>
                </div>
              </div>

              <div class="fullwidth" style="margin-top:20px;height:20px;">
                <hr>
              </div>
              <div class="fullwidth">
                <div style="float: left; width: 30%;">
                  <span class="NoiDungHoSo">Họ tên vợ/chồng:</span>
                  <span class="NoiDungHoSo2 label" id></span>
                </div>
                <div style="float: left; width: 70%;">
                  <span class="NoiDungHoSo">Hộ khẩu thường trú:</span>
                  <span class="NoiDungHoSo2 label" id></span>
                </div>
              </div>

              <div class="fullwidth" style="margin-top:20px;height:20px"></div>
              <div class="fullwidth">
                <div style="float: left; width: 25%;">
                  <span class="NoiDungHoSo">Quốc tịch:</span>
                  <span class="NoiDungHoSo2 label" id>Việt Nam</span>
                </div>
                <div style="float: left; width: 25%;">
                  <span class="NoiDungHoSo">Dân tộc:</span>
                  <span class="NoiDungHoSo2 label" id></span>
                </div>
                <div style="float: left; width: 25%;">
                  <span class="NoiDungHoSo">Tôn Giáo:</span>
                  <span class="NoiDungHoSo2 label" id></span>
                </div>
              </div>
              <div class="fullwidth" style="margin-top:20px;height:20px"></div>
              <div class="fullwidth">
                <div style="float: left; width: 100%;">
                  <span class="NoiDungHoSo">Nghề nghiệp vợ/chồng:</span>
                  <span class="NoiDungHoSo2 label" id></span>
                </div>
              </div>

              <div class="fullwidth" style="margin-top:20px;height:20px">
                <hr>
              </div>
              <div class="fullwidth">
                <div style="float: left; width: 55%;">
                  <span class="NoiDungHoSo">Số lượng Anh/Chị/Em:</span>
                  <span class="NoiDungHoSo2 label" id></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br>
    </div>
  </div>
</template>
<script>
export default {
  inject: ["currentUser"],
  data() {
    return {};
  },
  computed: {
    Name() {
      return this.currentUser["Ho_ten"];
    }
  }
};
</script>
