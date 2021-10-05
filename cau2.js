// xây dựng hàm giải phương trình bậc 2
function giai_pt(){
    if(a == 0) {
        if(b == 0) {
            if (c == 0) {
                alert('Phương trình vô số nghiệm')
                
            } else {
                alert('Phương trình vô nghiệm')
            }
        } else {
            alert('Phương trình có 1 nghiệm: '+(-c/b))
        } 
    } else {
        var delta = b*b - 4*a*c;
        if(delta > 0) {
            var x1 = (-b+Math.sqrt(delta))/(2*a);
            var x2 = (-b-Math.sqrt(delta))/(2*a);
            alert('x1 = '+ x1 + '\n x2 = '+ x2)
        } else if ( delta == 0) {
            var sum = -b/2*a
            alert('Phương trình có nghiệm kép: x1 = x2 = '+sum)
        } else {
            alert('Phương trình vô nghiệm')
        }
    }
}

var a = prompt('Nhập giá trị của a')
var b = prompt('Nhập giá trị của b')
var c = prompt('Nhập giá trị của c')
giai_pt()
    