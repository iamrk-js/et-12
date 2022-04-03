
// const btn = document.getElementById('btn');
// const demo = document.querySelector('.demo');
// let flag = true;
// btn.addEventListener('click', function(){
//     if(flag == true){
//         demo.style.display = "none";
//         flag = !flag;
//     }else{
//         demo.style.display = "block";
//         flag = !flag;
//     }
// })

$('#btn').click(function(){
    // $('.demo').toggle()
    // $('.demo').fadeToggle(600)
    $('.demo').slideToggle(2000)
})