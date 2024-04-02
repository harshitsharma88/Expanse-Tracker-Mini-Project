const arr= Object.keys(localStorage);

window.onload=getAll(arr);

arr.sort();
let id=0;
if(arr.length>0){

id=parseInt(arr[arr.length-1])+1;
}

const sbbtn=document.querySelector('#btn');
sbbtn.addEventListener('click',add);


function getAll(arr){
    arr.forEach(element => {
        show(element);
    });

}


function add(event){
    event.preventDefault();
    const valam=document.querySelector("#amount").value+"-"+
    document.querySelector('#desc').value+"-"+
    document.querySelector('#category').value;
    localStorage.setItem(id,valam);

    show(id);
    id++;

    document.querySelector("#amount").value="";
    document.querySelector('#desc').value="";
    document.querySelector('#category').value="";

}

function show(id){
    let ul=document.querySelector('ul');

    const li=document.createElement('li');
    const value= localStorage.getItem(id)+" ";
    li.innerText=value;
    li.setAttribute('id',id);

    const dltbtn= document.createElement('button');
    dltbtn.innerText='Delete';

    const editbtn=document.createElement('button');
    editbtn.innerText='Edit';

    li.appendChild(dltbtn);
    li.appendChild(editbtn);

    ul.appendChild(li);

    dltbtn.addEventListener('click',(event)=>{
        const toRemove=event.target.parentNode.getAttribute('id');
        localStorage.removeItem(toRemove);
        
        ul.removeChild(event.target.parentNode);
    })

    editbtn.addEventListener('click',(event)=>{
        event.preventDefault();
        const toRemove=event.target.parentNode.getAttribute('id');
        console.log(toRemove);
        
        let val=localStorage.getItem(toRemove);
        let arritem=val.split("-");
        document.querySelector("#amount").value=parseInt(arritem[0]);
        document.querySelector("#desc").value=arritem[1];
        document.querySelector("#category").value=arritem[2];
        localStorage.removeItem(toRemove);

        ul.removeChild(event.target.parentNode);
    })



}

