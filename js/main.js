//BAI 1

 const khuA = 2 ;
 const khuB = 1 ;
 const khuC = 0.5 ;
 const doiTu1 = 2.5 ;
 const doiTu2 = 1.5 ;
 const doiTu3 = 1 ;
 function main(){
    var diemChuan = document.getElementById("diemChuan").value;
    var thuNhat =  document.getElementById("thuMot").value ;
    var thuHai =  document.getElementById("thuHai").value ;
    var thuBa =  document.getElementById("thuBa").value ;
    var thuHai =  document.getElementById("thuHai").value ;
    var khuVuc = document.getElementById("khuVuc").value ;
    var doiTuong = document.getElementById("doiTuong").value ;
    var resutl = document.getElementById('resutl');
    var total = Number(thuNhat) + Number(thuBa) + Number(thuHai);

    if (khuVuc === "A"){
      total = total + khuA;
    }else if (khuVuc === 'B') {
      total = total + khuB;
    }else if(khuVuc === 'C'){
      let
      total = total + khuC;
    }else{
      total;
    }

    if (doiTuong === "1"){
      total = total + doiTu1;
    }
    else if (doiTuong === '2') {
      total = total + doiTu2;
    }else if(doiTuong === '3'){
      total = total + doiTu3;
    }
    else{
      total;
    }
    
    if (total >= diemChuan && thuNhat > 0 && thuBa > 0 && thuHai > 0){
      resutl.innerHTML ='Đậu '+ total;
    }
    else{
      resutl.innerHTML ='Rớt ' + total;
    }
 }
 document.getElementById("btnTs").onclick = main ;

 //BÀI 2 
 const _50kw_Dau = 500 ;
 const _50kw_Ke = 650 ;
 const _100kw_Ke = 850 ;
 const _150kw_Ke = 1100;
 const conLai = 1300 ;
 var total = 0 ;
 function tienDien() {
   var hoTen = document.getElementById("hoTen").value
   var soKw= Number(document.getElementById("soKw").value);
   if(soKw <= 50 ){
      total = soKw * _50kw_Dau ;
   }else if ( soKw > 50 && soKw <= 100){
      total = 50*500 + ( soKw - 50) * _50kw_Ke ;
   }else if (soKw > 100 && soKw <= 200){
      total = 50*_50kw_Dau + 50*_50kw_Ke + (soKw - 100)*_100kw_Ke;
   }else if(soKw > 200 && soKw <= 350){
      total = 50*_50kw_Dau + 50*_50kw_Ke + 100 * _100kw_Ke + (soKw - 200) * _150kw_Ke;
   }else {
      total = 50*_50kw_Dau + 50*_50kw_Ke + 100 * _100kw_Ke + 150 * _150kw_Ke + (soKw - 350)* conLai;
   }
   document.getElementById("txtResutl").innerHTML = "Họ Và Tên " + hoTen  + " <br> Tiền Điện  " + total.toLocaleString()
   
 }
 document.getElementById("btnKqua").onclick= tienDien ;


 //BAI 3


 const duoi_60 = 0.05 ;
 const tu60_120 = 0.1 ;
 const tu120_210 = 0.15;
 const tu210_384 = 0.2 ;
 const tu384_624 = 0.25;
 const tu624_960 = 0.3 ;
 const tren960 = 0.35 ;
 function tinhThue() {
   var hoTen = document.getElementById("hvTen").value;
   var thuNhap = document.getElementById("thuNhap").value;
   var soNguoi = document.getElementById("soNguoi").value;
   var total =  thuNhap - 4 - (soNguoi * 1.6) ;
   console.log(total)
   if (total <= 60) {
      total = total * duoi_60 ;
   }else if(total > 60 && total <= 120 ){
      total = 60 * duoi_60 + (total - 60)*tu60_120;
   }else if( total > 120 && total <= 210){
      total = 60 * duoi_60 + 60 * tu60_120 + (total - 120 ) * tu120_210;
   }else if (total > 210 && total <= 384){
      total = 60 * duoi_60 + 60 * tu60_120 + 90 * tu120_210 + (total - 210 ) * tu210_384;
   }else if(total > 384 && total <= 624 ){
      total = 60 * duoi_60 + 60 * tu60_120 + 90 * tu120_210 + 174 * tu210_384 + (total - 384) * tu384_624;
   }else if(total > 624 && total <= 960){
      total = 60 * duoi_60 + 60 * tu60_120 + 90 * tu120_210 + 174 * tu210_384 + 240 * tu384_624 + (total - 624 )*tu624_960;
   }else {
      total =60 * duoi_60 + 60 * tu60_120 + 90 * tu120_210 + 174 * tu210_384 + 240 * tu384_624 + 336*tu624_960 + (total-960) * tren960;
   }
   document.getElementById("txtThue").innerHTML = " Họ Và Tên: " + hoTen + "<br> Thuế Thu Nhập Cá Nhân " + total ;

 }

//  BÀI 4

const billNd = 4.5 ;
const servNd = 20.5 ;
const chanNd = 7.5 ;
const billDn = 15 ;
const serv_10_Dn = 75 ;
const serv_Them_Dn = 5 ;
const chanDn = 50 ;
 
 function tienCap() {
   var select = document.getElementById("khaHang").value;
   document.getElementById("ketNoi").style.display = "company" == select ? "block" : "none";
}

function calcExercise4() {
   var select = document.getElementById("khaHang").value;
   var customer =document.getElementById("nhapMaKH").value;
   var channel = document.getElementById("kenhCc").value;
   var numCon = document.getElementById("ketNoi").value;
   var totalCable = 0;
    select == "company" 
       ? (totalCable = calcTotal(billDn,serv_10_Dn,chanDn,channel,numCon,serv_Them_Dn))
       : select == "people" 
           ? (totalCable = calcTotal(billNd, servNd, chanNd,channel,0,0))

           : alert("Vui lòng chọn loại khách hàng"),


       document.getElementById("txtNotify4").innerHTML = "Mã khách hàng: " + customer + "<br> Tiền cáp là: "+ "$" + totalCable;

}


function calcTotal(p1, p2, kcc, channel, skn, mkn) {

/*  p1 : phí xử lý hóa đơn
   p2 : phí dịch vụ cơ bản
   kcc: phí mỗi kênh cao cấp
   skn: số kết nối của khách hàng doanh nghiệp
   mkn: phí tính thêm cho mỗi kết nối kể từ kết nối thứ 11
*/

   var tong = p1 + p2 + kcc * channel;
   return skn > 10 && (tong = tong + ((skn - 10) * mkn)), tong;
}

function getELE(id) {
   return document.getElementById(id);

}

document.getElementById("btnTinhTien").onclick = calcExercise4 ;




    