const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'assets/images/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'assets/images/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'assets/images/featured3.png',
      category: 'Swearshirts',
      quantity: 20
    }
  ]
  //CARGA DE DOM
    document.addEventListener("DOMContentLoaded",()=>{
      loadCarga()
     showproducts()
      if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})
  

//CIERRE

//carga de load
const loadCarga=()=>{
const loadsito=document.getElementById("logocitoe")
setTimeout(()=>{
  loadsito.classList.add("hide")
},2000)
}




//MODO OSCURO DE LA PAG
  const darkmode=document.getElementById("darkmode")
//elemento.classList.toggle("clase")
//si la clase no existe la agg
//Si existe la elimina //metodo TOGGLE

  darkmode.addEventListener("click",()=>{
    if(darkmode.classList.contains("bx-moon")){
     darkmode.classList.replace("bx-moon","bx-sun")
    }else{
      darkmode.classList.replace("bx-sun","bx-moon")
    }
    document.body.classList.toggle("darktheme")

//guardar en localstorage
if(document.body.classList.contains("darktheme")){
  localStorage.setItem("dark-mode",JSON.stringify(true))
}else{
  localStorage.setItem("dark-mode",JSON.stringify(false))
}
  })
  //obtendremos el modo actual de donde estemos
  if(JSON.parse(localStorage.getItem("dark-mode"))===true){
    document.body.classList.add("darktheme")
  }else{
    document.body.classList.remove("darktheme")
  }



//CIERRE
const carritocajafUll=document.getElementById("cartPadreSeccion22")
const carritoContenedor=document.getElementById("cartPadredeS")
const preciototaldetodo=document.getElementById("preciototal")


let carrito=[]

//SECCION DE PRODUCTOS
 
 const productosPadre=document.getElementById("cajapadre-productos")
  
 function showproducts(){
  let item=``
   items.forEach(producto=>{
      item+=`<div class="product-card">
      <img src=${producto.image} alt="">
      <div class="info-product">
      <p>$${producto.price}.00</p>
      <p>STONKS |${producto.quantity}</p>
      </div>
      <p>${producto.name}</p>
      <span class="btn-add" id="${producto.id}">+</span>
      </div>
      `

    })
    productosPadre.innerHTML=item
    const boton=document.querySelectorAll('.btn-add')
  
    const filtradoss=document.querySelector(".full")
filtradoss.addEventListener("click",()=>{
    let item=``
    items.forEach(prod=>{
        item+=`<div class="product-card">
        <img src=${prod.image} alt="">
        <div class="info-product">
        <p>$${prod.price}.00</p>
        <p>STONKS |${prod.quantity}</p>
        </div>
        <p>${prod.name}</p>
        <span class="btn-add" id="${prod.id}">+</span>
        </div>
        `
      }
    ) 
    productosPadre.innerHTML=item
})



    boton.forEach(btn =>{
      btn.addEventListener("click",()=>{
        agregarAlcarrito(parseInt(btn.id))
      })
    })
  }
//filtrado aqui muy pronto...
const filtrado1=document.querySelector(".productosFiltrado1")
filtrado1.addEventListener("click",()=>{
    let itemz=``
    items.forEach(prod=>{
      if(prod.category==='hoodies'){
        itemz+=`<div class="product-card">
        <img src=${prod.image} alt="">
        <div class="info-product">
        <p>$${prod.price}.00</p>
        <p>STONKS |${prod.quantity}</p>
        </div>
        <p>${prod.name}</p>
        <span class="btn-add" id="${prod.id}">+</span>
        </div>
        `
      }
    }) 
    productosPadre.innerHTML=itemz
})

const filtrado2=document.querySelector(".productosFiltrado2")
filtrado2.addEventListener("click",()=>{
    let item=``
    items.forEach(prod=>{
      if(prod.category==='shirts'){
        item+=`<div class="product-card">
        <img src=${prod.image} alt="">
        <div class="info-product">
        <p>$${prod.price}.00</p>
        <p>STONKS |${prod.quantity}</p>
        </div>
        <p>${prod.name}</p>
        <span class="btn-add" id="${prod.id}">+</span>
        </div>
        `
      }
    }) 
    productosPadre.innerHTML=item
})

const filtrado3=document.querySelector(".productosFiltrado3")
filtrado3.addEventListener("click",()=>{
    let itemzz=``
    items.forEach(prod=>{
      if(prod.category==='Swearshirts'){
        itemzz+=`<div class="product-card">
        <img src=${prod.image} alt="">
        <div class="info-product">
        <p>$${prod.price}.00</p>
        <p>STONKS |${prod.quantity}</p>
        </div>
        <p>${prod.name}</p>
        <span class="btn-add" id="${prod.id}">+</span>
        </div>
        `
      }
    }) 
    productosPadre.innerHTML=itemzz
})


//CIERR
const agregarAlcarrito=(proId)=>{
  const existe=carrito.some(prod=>prod.id === proId)

  
  if(existe){
    
    carrito.map((prod)=>{  
      if(prod.id===proId){
      if(prod.quantity>prod.cantidad){
          prod.cantidad++
          if(prod.price===prod.price){
          prod.precio+=prod.price
         }
        }else{
        alert("no hay stock")
        } 
          }
          })
    }else{
      const item=items.find(prod=>prod.id===proId)
      item.cantidad=1
      item.precio=item.price
      carrito.push(item)
      
    }
    
    actualizarCarrito()
}

     
    
  

  


let fragment2=``





const eliminarDelcarrito=(prodId)=>{
const item=carrito.find((prod)=>prod.id===prodId)
const indice=carrito.indexOf(item)
carrito.splice(indice,1)
actualizarCarrito()
}

//boton de vaciar carrito
const botonvaciar=document.getElementById("vaciarcarr")
botonvaciar.addEventListener("click",()=>{
  carrito.length=0
  localStorage.removeItem("carrito")
  actualizarCarrito()
})


const actualizarCarrito=()=>{
  let fragment = ``
  carritoContenedor.innerHTML=""

  carrito.forEach((prod)=>{
    fragment +=`
    <div class="itemsito-cart"> 
      <img src=${prod.image}>
      <p>${prod.name}</p>
      <p>$${prod.precio}</p>
      <p>Cantidad ${prod.cantidad}</p>
      <button onclick="eliminarDelcarrito(${prod.id})" class="boton-eliminar-carrito"><i class='bx bx-trash bx-md'></i></button>
    </div>
    `
  })
  carritocajafUll.innerHTML="La cantidad total de productos es "+carrito.reduce((acc,prod)=>acc+prod.cantidad,0)
  preciototaldetodo.innerHTML="Precio total es "+carrito.reduce((acc,prod)=>acc+prod.precio,0)+"$"
  localStorage.setItem("carrito",JSON.stringify(carrito))
  const sumadecarrito=document.getElementById("sumacarrito")
  sumadecarrito.innerHTML=carrito.length
  carritoContenedor.appendChild
  carritoContenedor.innerHTML=fragment
  console.log(carritoContenedor)
}

//menu hambuerguesa
const menuicon=document.getElementById("menuicono")
const closemenunav=document.getElementById("closemenu-nav")
menuicon.addEventListener("click",()=>{
  document.getElementById("menunav").classList.add("active")
})
closemenunav.addEventListener("click",()=>{
  document.getElementById("menunav").classList.remove("active")
})
//cierre

//para eliminar elementos del carrito








//BOTONES PARA ABRIR CARRITO Y CERRARLO
const shopbag=document.getElementById("shopbag")
const closeshopBag=document.getElementById("closeshopbag")

shopbag.addEventListener("click",()=>{
 document.getElementById("cartPadreSeccion").classList.remove("hide")
})
closeshopBag.addEventListener("click",()=>{
  document.getElementById("cartPadreSeccion").classList.add("hide")
})
//CIERRE




/*
function cartFuncionalidad(){
  const botones=document.querySelectorAll(".btn-add")
  const cart=[]
  botones.forEach(button=>{
    button.addEventListener("click",e=>{
      const id=parseInt(e.target.parentElement.id)
      const productoSeleccionado=items.find(item=>item.id===id)
      let index=cart.indexOf(productoSeleccionado)
      if(index!==1){
        
        if(cart[index].quantity<=cart[index].cantidad){
          alert("no hay stock")
        }else{
          cart[index].cantidad++
        } 
       cart[index].cantidad++
      }else{
          productoSeleccionado.cantidad=1
          cart.push(productoSeleccionado)
      }
    })
  })
  productosSeccion(cart)
}

function showProductsIncart(cart){
  const carrito=document.getElementById("contenido-cartzzz")

}
*/


 