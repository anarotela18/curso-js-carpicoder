/*
const sweetAlert = document.querySelector("#sweetAlert");

sweetAlert.addEventListener("click", ()=> {

    Swal.fire({
      title: "Error",
      text: "Do you want to continue",
      icon: "question",
      confirmButtonText: "Accept",
      showCancelButton: true,
      cancelButtonText: "Reject", 
    }).then((result) => {
        if(result.isConfirmed){
            alert("Well done!");
        }else{
            alert("Reject!")
        }
    });

});


const toastify = document.querySelector("#toastify");

toastify.addEventListener("click",()=>{
    Toastify({
      text: "This is a toast",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
});
*/

const DateTime = luxon.DateTime;

const now = DateTime.now();

console.log(now.toLocaleString(DateTime.DATETIME_MED));

