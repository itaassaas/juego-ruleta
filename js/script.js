const ruleta = document.querySelector('#ruleta');


document.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
    girar();

  }
});

ruleta.addEventListener('click', girar);
giros = 0;

function girar(){
  if (giros < 1000) {

    let rand = Math.random() * 7200;
    console.log("el numero principal es:",rand);
    calcular(rand);
    giros++;
    var sonido = document.querySelector('#audio');
    sonido.setAttribute('src', 'sonido/ruleta.mp3');
    document.querySelector('.contador').innerHTML = 'Premios Entregados: ' + giros; 
  }else{
    Swal.fire({
      icon: 'success',
      title: 'VUELVA PRONTO EL JUEGO TERMINO!!',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false
    }).then((result)=>{
      if (result.value == true) {
        giros = 0;
         document.querySelector('.elije').innerHTML = 'TE GANASTE: ';
         document.querySelector('.contador').innerHTML = 'Premios Entregados: ' + giros;        
      }
    })
  }




}
function premio(premios){

  document.querySelector('.elije').innerHTML = 'TE GANASTE: ' + premios;

  if (premios !== "") {
    Swal.fire({
      icon: 'success',
      title: '¡Felicidades!',
      text: 'Has ganado '+ premios + ' como premio',
      timer: 5000,
      timerProgressBar: true,
      showConfirmButton: false
    });
  
  } 
  confetic();
}
function calcular(rand) {


  valor = rand / 360;
  console.log("el numero 1 es:",valor);
  valor = (valor - parseInt(valor.toString().split(".")[0]))* 360;
  console.log("el numero 2 es:",valor);
  ruleta.style.transform = "rotate("+rand+"deg)";

  setTimeout(() => {
  switch (true) {
    case valor > 0 && valor <= 45:
     premio("1 Domiiclio Gratis");
     break;
     case valor > 45 && valor <= 90:
     premio("1 Llavero");
     break;
     case valor > 90 && valor <= 135:
     premio("1 Esfero"); 
     break; 
     case valor > 135 && valor <= 180:
     premio("5 Domicilios gratis");
     break;
     case valor > 180 && valor <= 225:
     premio("1 Esfero");
     break; 
     case valor > 225 && valor <= 270:
     premio("1 Domiiclio Gratis");
     break;
     case valor > 270 && valor <= 315:
     premio("10 Domicilios Gratis");
     break;
     case valor > 315 && valor <= 360:
     premio("1 Botella de agua"); 
     break;
  }

 }, 5000);

}

function confetic(){

  const end = Date.now() + 6 * 1000;

  // go Buckeyes!
  const colors = ["#bb0000", "#ffffff"];
  
  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });
  
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });
  
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();


}

