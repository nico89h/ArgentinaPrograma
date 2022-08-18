//funciona el programa
//console.log("hola mudo");
//inicio de el algoritmo para generar 3 numeros aleatorios
class Todo{
    //uno es el usuario y dos la maquina
    yo(jugador:string,maquina:string):boolean{
        if (jugador=="piedra") {
            switch (maquina) {
                case "papel":
                    return true;
                    break;
            
                default:
                    return false;
                    break;
            }
        }else if(jugador=="papel"){
            switch (maquina) {
                case "tijera":
                    return true;
                    break;
            
                default:
                    return false;
                    break;
            }
        }else{
            switch (maquina) {
                case "piedra":
                    return true;
                    break;
            
                default:
                    return false;
                    break;
            }
        }
    }
}
class casiTodo extends Todo{
    igualdad(resultado:string,contra:string):boolean{
        if (resultado==contra) {
            return true;
        }else{
            return false;
        }
    }
    //voy a indicar si la maquina gana es true, sino es false
    ganador(contra:string,nose:string):boolean{
        let control:boolean;
        control=this.yo(contra,nose);
        return(control);
    }
}
class JUEGO extends casiTodo{
    numero:number;
    contrincante:string;
    resultado:string;
    constructor(azar:number, contra:string) {
        super();
        this.numero=azar;
        this.contrincante=contra;
        if (azar==1) {
            this.resultado="piedra";
        }else if(azar==2){
            this.resultado="papel";
        }else{
            this.resultado="tijera";
        }
    }
    public set (v : number) {
        let resultado:string;
        if (v==1) {
            resultado="piedra";
        }else if(v==2){
            resultado="papel";
        }else{
            resultado="tijera";
        }
        this.resultado = resultado;
    }
    indicador(azar:number):string{
        let resultado:string;
        if (azar==1) {
            resultado="piedra";
        }else if(azar==2){
            resultado="papel";
        }else{
            resultado="tijera";
        }
        return(resultado);
    }
};
function numeroAzar(max:number,min:number):number{
    let numero:number;
    numero=Math.floor(Math.random()*(max-min)+1);
    return numero;
}
function Asignar(nose:string):void {
    let numeroJuego:number;
    numeroJuego=numeroAzar(4,1);
    let objetoJuego=new JUEGO(numeroJuego,nose);
    if (!objetoJuego.igualdad(objetoJuego.resultado,objetoJuego.contrincante)) { // controlo que sean distintos los valores
        if (objetoJuego.ganador(objetoJuego.contrincante,objetoJuego.resultado)) { //controlo quien gano
            document.write("Gano la maquina");
        }else{
            document.write("Felicidades, eres el ganador");
        }
    }else{
        document.write("El resultado es el mismo, inicia de nuevo");
    }
}
function ola():void {
    document.getElementById('random')?.addEventListener('click',function(){Asignar("tijera")});
}
function buenas():void{
    document.getElementById('random')?.addEventListener('click',function(){Asignar("piedra")});
}
function vamoQsepuede():void{
    document.getElementById('random')?.addEventListener('click',function(){Asignar("papel")});
}
//ya esta dividido el problema ahora se necesita llamar a cada uno
window.document.getElementById('jose')?.addEventListener('click',ola);
window.document.getElementById('pedro')?.addEventListener('click',vamoQsepuede);
window.document.getElementById('juan')?.addEventListener('click',buenas);