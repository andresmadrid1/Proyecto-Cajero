var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
var resultado = document.getElementById("resultado");
var separador = document.getElementById("separador");
var b = 0;
var c = 0;
var a = 0;
dineroCajeroATM();
var dineroCajero = document.getElementById("dineroATM").value = b;
var entregado = [];
var dinero;
var div = 0;
var papeles = 0;
var imagenes = [];
imagenes[100] = "billete100pesos.png";
imagenes[50] = "billete50pesos.png";
imagenes[20] = "billete20pesos.png";
imagenes[10] = "billete10pesos.png";
imagenes[5] = "billete5pesos.png";


function entregarDinero()
{
    resultado.innerHTML = " ";
    var t = document.getElementById("dinero");
    dinero = t.value;
    contarDinero();
    t = document.getElementById("dinero");
    dinero = t.value;
    console.log("cantidad de dinero recibida es " + dinero);
    b = 0;
    c = 0;
    a = 0;
    dineroRestanteATM();
    b = dineroCajero - b;
    var dineroRestante = document.getElementById("dineroATM").value = b;
    console.log("cantidad de dinero solicitado " + dinero);
    console.log("cantidad de dinero restante en cajero  " + dineroRestante);
    if (dineroRestante < 0 || dinero > dineroCajero) 
    {
        resultado.innerHTML = "Lo siento la cantidad de fondos del cajero no es suficiente" ;
        dineroRestante = document.getElementById("dineroATM").value = 0;
    }
    else
    {
        for (var eAntiguo of entregado) 
        {
            console.log('valor antiguo: ' + eAntiguo.valor);
            if (eAntiguo.valor != 0) 
            {
                for (var e of entregado) 
                {
                    if (e.cantidad != 0 && e.valor == eAntiguo.valor) 
                    {
                            e.imagen = new Image(); 
                            e.imagen.src = imagenes[e.valor];
                            resultado.appendChild(e.imagen);
                            resultado.innerHTML +="<br/>" +  e.cantidad +  " billetes de $" + e.valor + "<br/>" + "<pre>" + "_______________" +  "<pre/>";
                            dineroCajero = document.getElementById("dineroATM").value = b;
                            dineroRestante = document.getElementById("dineroATM").value = b;
                            eAntiguo.valor = 0;
                            e.cantidad = 0;
                    }
                }
            }
        }
    }
}
    

function contarDinero()
{
    console.log("cantidad de dinero recibida es " + dinero);
    for (var bi of caja) 
    {
        if (dinero > 0) 
        {
            div = Math.floor(dinero/bi.valor);
            if (div > bi.cantidad) 
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }
                entregado.push(new Billete(bi.valor,papeles));
                dinero = dinero - (bi.valor * papeles);
        }
    }
}

function dineroCajeroATM()
{
    for (var i of caja) 
    {
        a = i.valor*i.cantidad;
        b = a + c;
        c = b;
    }
    console.log(b);
    return b;
}

function dineroRestanteATM()
{
    for (var i of entregado) 
    {
        a = i.valor*i.cantidad;
        b = a + c;
        c = b;
    }
    console.log(b);
    return b;
}


