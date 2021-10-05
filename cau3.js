// xây dựng hàm kiểm tra số thuận nghịch
function isPolinom(n){
    var rv, temp, mod;
    temp = n; rv = 0;
    while (n > 0)
    {
        mod = n % 10;
        n = math.round(n / 10);
        rv = rv * 10 + mod;
    }
    if (temp == rv) return true;
    return false;
}
var n = parseInt(promt("Nhập số cần kiểm tra: "))
isPolinom(n)