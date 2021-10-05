// xây dựng hàm kiểm tra một số là số nguyên tố nhập từ bàn phím
function isPrime(x){
    if(x == 1 || x == 2) return true;

    for (let i = 2; i<= Math.sqrt(x); i++){  
        if (x % i ==0) return false;
    }
    return true;
  }
  var value = parseInt(prompt("Nhập vào số muốn kiểm tra là số nguyên tố:"));
  if (isPrime(value)){
      document.write("Số " +value+ " là số nguyên tố");
  }else{
      document.write("Số "+value+ " không phải là số nguyên tố");
  }
isPrime()