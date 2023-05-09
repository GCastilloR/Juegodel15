document.getElementById("start").addEventListener("click",start);
let array= document.getElementsByClassName("cuadro");

function start(){
    for (let i = 0; i < array.length; i++) {
        array[i].value=i+1;
        if(i==15){
            array[i].value="";
        }
    }
    randomize();
}

function randomize(){
    let pos=15
    for (let i = 0; i < 100; i++) {
        let move=Math.floor((Math.random()*4)+1)
        if(move==1 && canMove(pos-4).value){
            array[pos].value=array[pos-4].value
            array[pos-4].value=""
            pos=pos-4
        }
        if(move==2 && canMove(pos+4).value){
            array[pos].value=array[pos+4].value
            array[pos+4].value=""
            pos=pos+4
        }
        if(move==3 && canMove(pos+1).value){
            array[pos].value=array[pos+1].value
            array[pos+1].value=""
            pos=pos+1
        }
        if(move==4 && canMove(pos-1).value){
            array[pos].value=array[pos-1].value
            array[pos-1].value=""
            pos=pos-1
        }
    }

}

function canMove(pos){
return (pos>=0 && pos<=15)
}

function Move(i){
    if(canMove(i+4) && array[i+4].value==""){
        array[i+4].value = array[i].value;
        array[i].value = "";
    }
    
    if(canMove(i-4) && array[i-4].value==""){
        array[i-4].value = array[i].value;
        array[i].value = "";
    }
   
    if(canMove(i+1) && array[i+1].value==""){
        array[i+1].value = array[i].value;
        array[i].value = "";
    }
    
    if(canMove(i-1) && array[i-1].value==""){
        array[i-1].value = array[i].value;
        array[i].value = "";
    }
    check();
}

function check(){
    let flag=true;
		for (let i=0;i<15;i++) {
			if(array[i].value!=i+1){
				flag=false;
				break;
			}
		}
		if(flag==true){
			alert("Felicidades ganaste :D")
		}
}