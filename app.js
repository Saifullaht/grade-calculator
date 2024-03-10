function Calculate(){
    let p = document.getElementById("p").value;
    let c = document.getElementById("c").value;
    let d = document.getElementById("d").value;
    let f = document.getElementById("f").value;

    let total = parseFloat(p) + parseFloat(c) + parseFloat(d) + parseFloat(f);
    document.getElementById("demo").innerHTML = `Your Total Number is  ${total}`;

    const per =(total/400)*100;
    document.getElementById("demo1").innerHTML = `Your Total percentage is  ${per}`;


// if (per>100){
//     document.getElementById("demo2").innerHTML = `your grade is a++`;
// }
// if (per>90){
//     document.getElementById("demo2").innerHTML = `your grade is a++`;
// }
// if (per>80){
//     document.getElementById("demo2").innerHTML = `your grade is b++`;
// }
//  else if (per>70){
//     document.getElementById("demo2").innerHTML = `your grade is b++`;
// }
// if (per>60){
//     document.getElementById("demo2").innerHTML = `your grade is c++`;
// }
// if (per>50){
//     document.getElementById("demo2").innerHTML = `your grade is c++`;
// }
// if (per>40){
//     document.getElementById("demo2").innerHTML = `your grade is d++`;
// }
// if (per>35){
//     document.getElementById("demo2").innerHTML = `your are failed`;

}



