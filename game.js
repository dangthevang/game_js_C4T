var so_a,so_b,swap,phep_tinh,diem = 0;
var live = 3;
var live_lb = document.getElementById("live");
var kiem_tra = false;
var arr_head_2 = document.getElementsByClassName("l1");  
var countdown = setInterval(time,1000);
var countDownDate = new Date().getTime() + 6000;
//---------------------------------------------------------------------------------------------------
function set_countdown(){
    seconds = 6;
};   
set_countdown();
function time(){
    if (seconds <= 0){
        set_countdown();
        tru_diem();
        hien_bieu_thuc(phep_tinh);
        };
    seconds = seconds - 1;
    arr_head_2[1].innerHTML = "time: " + seconds + "s";
    }
//----------------------------------------------------------------------------------------------------
function hien_bieu_thuc(x){
    var so_a = Math.floor((Math.random()*100));
    var so_b = Math.floor((Math.random()*100));
    var swap = 0;
    if ( so_b > so_a) {
        swap = so_b;
        so_b = so_a;
        so_a = swap;
    };
    var ket_qua_tong = Math.floor(Math.random()*(4) + so_a + so_b - 1);
    var ket_qua_hieu = Math.floor(Math.random()*(4) + so_a - so_b - 1);
    if (x == 0){
        var arr_head_1 = document.getElementsByClassName("l2");
        arr_head_1[0].innerHTML = (so_a).toString() + " + " + (so_b).toString() + " = " + (ket_qua_tong).toString();
        if (so_a + so_b == ket_qua_tong){
            kiem_tra = true;
        }
        else{
            kiem_tra = false;
        }
    }
    else{
        var arr_head_1 = document.getElementsByClassName("l2");
        arr_head_1[0].innerHTML = (so_a).toString() + " - " + (so_b).toString() + " = " + (ket_qua_hieu).toString();
        if (so_a - so_b == ket_qua_hieu){
            kiem_tra = true;
        }
        else{
            kiem_tra = false;
        }
    }
};
//----------------------------------------------------------------------------------------------
function cong_diem(){
    diem += 1;
    arr_head_2[0].innerHTML = "score: " + (diem).toString();
};
function tru_diem(){
    live = live - 1;
    live_lb.innerHTML = "Live: " + (live).toString();
    alert("Đáp án chưa chính xác");
    if (live == 0){
        alert("Thua...");
        location.reload();
    } 
    else{
    if (diem >= 5){
    diem -= 5;
    
    arr_head_2[0].innerHTML = "score: " + (diem).toString();
    }
    else{
        diem = 0;
        arr_head_2[0].innerHTML = "score: " + (diem).toString();
    }
    }
    
    
};
//---------------------------------------------------------------------------------------------------
function btn_True(){
    if (kiem_tra == true){
        phep_tinh = Math.floor(Math.random()*2);
        cong_diem();
        set_countdown();
        hien_bieu_thuc(phep_tinh);
    }
    else{
        tru_diem();
        set_countdown();
    }
}
function btn_False(){
    if (kiem_tra == false){
        phep_tinh = Math.floor(Math.random()*2);
        cong_diem();
        set_countdown();
        hien_bieu_thuc(phep_tinh);
    }
    else{
        tru_diem();
        set_countdown();
    }
}
//-------------------------------------------------------------------------------------------------

