let wid=screen.width
let op=0;
let bo=true;
let alrt="Please wait, some algorithm is already running or else 'Refresh the page'";
console.log(1)
let arr=[]
let len=document.getElementById("slider1").value;
let speed=document.getElementById("slider2").value;
for(let i=1;i<=len;i++)
arr.push(i);
let hi=350;
let te=100;
create(arr);
unsort(document.getElementsByClassName("block"));

// funtion that unsort when we press refresh

function unsort(arr)
{
 for(var i=0;i<len*2;i++)
 {
  let ran1=Math.floor(Math.random()*len);
  let ran2=Math.floor(Math.random()*len);
  let v1=arr[ran1].clientHeight,v2=arr[ran2].clientHeight;
  arr[ran1].style.height=`${v2}px`
  arr[ran2].style.height=`${v1}px`
 }
}
let maindiv=document.getElementById("animation")
maindiv.style.height=`${(hi)}px`

// condition for different device sizes

if((screen.width<screen.height)&&(screen.width<(screen.height/2)))
{
    maindiv.style.marginLeft=`0px`;
    maindiv.style.width=`${wid}px`;
}
else
maindiv.style.width=`${(wid*0.64)}px`
let boxle=document.getElementById("buttons")
boxle.style.width=`${372}px`
maindiv.style.padding="10px 5px 10px 10px";
let but=document.getElementById("button1");

//six onclick funtions for refresh and five sorts

but.onclick=function(){
    if(bo)
    {
        document.getElementById("timebox").innerHTML=`<span> TIME TAKEN : _______ms </span>`;
        document.getElementById("opbox").innerHTML=`<span> OPERATIONS TAKEN : _______ </span>`;
        len=document.getElementById("slider1").value;
        let arr=[]
        for(let i=1;i<=len;i++)
        arr.push(i);
    document.getElementById("animation").innerHTML="";
    create(arr);
    let ar=document.getElementsByClassName("block");
    unsort(ar)
    }
    // else
    // alert(`${alrt}`);
};
let bon1=document.getElementById("button2");
bon1.onclick=async function()
{
    if(bo)
    {
        bo=false;
        op=0;
        let ar=document.getElementsByClassName("block");
        let arr=new Array(ar.length)
        for(let i=0;i<ar.length;i++)
        arr[i]=ar[i].clientHeight;
    let start=new Date();
    await bubbleSort(ar);
    let end=new Date();
    document.getElementById("timebox").innerHTML=`<span> TIME TAKEN : ${parseFloat(end-start)}ms </span>`;
    document.getElementById("opbox").innerHTML=`<span> OPERAATIONS TAKEN : ${op} </span>`;
    await finishSort(ar);
    bo=true;
    }
    // else
    // alert(`${alrt}`);
}
let bon2=document.getElementById("button3");
bon2.onclick=async function()
{
    if(bo)
    {
        bo=false;
    op=0;
    let ar=document.getElementsByClassName("block");
    let arr=new Array(ar.length)
    for(let i=0;i<ar.length;i++)
    arr[i]=ar[i].clientHeight;
    let start=new Date();
     await selectionSort(ar);
    let end=new Date();
document.getElementById("timebox").innerHTML=`<span> TIME TAKEN : ${parseFloat(end-start)}ms </span>`;
document.getElementById("opbox").innerHTML=`<span> OPERAATIONS TAKEN : ${op} </span>`;
await finishSort(ar);
bo=true;
    }
    // else
    // alert(`${alrt}`);
}
let bon3=document.getElementById("button4");
bon3.onclick=async function()
{
    if(bo)
    {
        bo=false;
    op=0;
    let ar=document.getElementsByClassName("block");
    let arr=new Array(ar.length)
    for(let i=0;i<ar.length;i++)
    arr[i]=ar[i].clientHeight;
    let start=new Date();
     await  insertionSort(ar);
    let end=new Date();
document.getElementById("timebox").innerHTML=`<span> TIME TAKEN : ${parseFloat(end-start)}ms </span>`;
document.getElementById("opbox").innerHTML=`<span> OPERAATIONS TAKEN : ${op} </span>`;
await finishSort(ar);
bo=true;
    }
    // else
    // alert(`${alrt}`);
}
let bon4=document.getElementById("button5");
bon4.onclick=async function()
{
    if(bo)
    {
        bo=false;
    op=0;
    let ar=document.getElementsByClassName("block");
    let arr=new Array(ar.length)
    for(let i=0;i<ar.length;i++)
    arr[i]=ar[i].clientHeight;
    let start=new Date();
    await mergeSort(ar,arr,0,(arr.length-1));
    let end=new Date();
    document.getElementById("timebox").innerHTML=`<span> TIME TAKEN : ${parseFloat(end-start)}ms </span>`;
    document.getElementById("opbox").innerHTML=`<span> OPERAATIONS TAKEN : ${op} </span>`;
    await finishSort(ar);
    bo=true;
    }
    // else
    // alert(`${alrt}`);
}
let bon5=document.getElementById("button6");
bon5.onclick= async function()
{
    if(bo)
    {
        bo=false;
    op=0;
    let ar=document.getElementsByClassName("block");
    let arr=new Array(ar.length)
    for(let i=0;i<ar.length;i++)
    arr[i]=ar[i].clientHeight;
let start=new Date();
await quickSort(arr,ar,0,(arr.length-1));
let end=new Date();
document.getElementById("timebox").innerHTML=`<span> TIME TAKEN : ${parseFloat(end-start)}ms </span>`;
document.getElementById("opbox").innerHTML=`<span> OPERAATIONS TAKEN : ${op} </span>`;
await finishSort(ar);
bo=true;
    }
    // else
    // alert(`${alrt}`);
}

//create funtion create the animation of blocks when we press refresh 

function create(arr)
{
    let val=0;
    if((screen.width<screen.height)&&(screen.width<(screen.height/2)))
     val=((wid-21)/len);
    else
    val=((wid*0.65-21)/len);
    let maindiv=document.getElementById("animation")
    for(var i=0;i<len;i++)
    {
        let div=document.createElement('div')
        div.className="block"
        div.id=`${i}`
        maindiv.append(div)
        document.getElementById(`${i}`).style.margin="0px"
        document.getElementById(`${i}`).style.width=`${val}px`
        document.getElementById(`${i}`).style.height=`${arr[i]*(hi/len)}px`
        document.getElementById(`${i}`).style.padding="0px"
        document.getElementById(`${i}`).style.backgroundColor="#ffd93b"
        document.getElementById(`${i}`).style.borderBlockStyle="solid";
        document.getElementById(`${i}`).style.borderBlockWidth="1px";
        document.getElementById(`${i}`).style.borderBlockColor="black";
        document.getElementById(`${i}`).style.borderRightWidth="1px";
        document.getElementById(`${i}`).style.borderRightStyle="solid"
        document.getElementById(`${i}`).style.borderLeftWidth="1px";
        document.getElementById(`${i}`).style.borderLeftStyle="solid"
       
    }
}

// promise funtion used to show delay 

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

// finishsort funton gives finish animation(all tiles become purple)

async function finishSort(arr)
{
  
        for(let i=0;i<arr.length;i++)
        {
            arr[i].style.backgroundColor="#a64ac9"
            await sleep(10);

        }
    for(let i=0;i<arr.length;i++)
    arr[i].style.backgroundColor="#ffd93b"

}

// next five funtions are five different soring algorithms

async function bubbleSort(arr)
{
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < (arr.length - i - 1); j++) {
            let v1=arr[j].clientHeight,v2=arr[j+1].clientHeight;
            if (v1>v2) {
                arr[j].style.backgroundColor="#a64ac9"
                arr[j+1].style.backgroundColor="#a64ac9"
                arr[j].style.height=`${v2}px`
                arr[j+1].style.height=`${v1}px`
              
                await sleep(parseInt(document.getElementById("slider2").value)/2.0);
                arr[j].style.backgroundColor="#ffd93b"
                arr[j+1].style.backgroundColor="#ffd93b"
            }
            op++;
           // console.log(parseInt(document.getElementById("slider2").value)/2.0);
        }
    }

}
async function selectionSort(arr)
{
    var i, j, min_idx,n=arr.length;
    for (i = 0; i < n-1; i++)
    {
        min_idx =i;
        arr[min_idx].style.backgroundColor="#f79e02"
        for (j = i + 1; j < n; j++)
        {
            let bool=false;
            arr[j].style.backgroundColor="#a64ac9"
            if (arr[j].clientHeight < arr[min_idx].clientHeight)
            {
                arr[min_idx].style.backgroundColor="#ffd93b"
                min_idx = j;
                arr[min_idx].style.backgroundColor="#f79e02"
                await sleep(document.getElementById("slider2").value/10.0)
                bool =true;
            }
            await sleep(document.getElementById("slider2").value/10.0)
            if(!bool)
            arr[j].style.backgroundColor="#ffd93b"
            op++;
       
        }
            if (min_idx != i) {
                let v1=arr[i].clientHeight,v2=arr[min_idx].clientHeight;
                arr[i].style.height=`${v2}px`
                arr[min_idx].style.height=`${v1}px`
           }
           arr[min_idx].style.backgroundColor="#ffd93b"
    }
}
async function insertionSort(arr) 
{ 
    let i, key, j,n=arr.length; 
    for (i = 1; i < n; i++)
    { 
        key = arr[i].clientHeight; 
        j = i - 1;
        arr[i].style.backgroundColor="#a64ac9"
        while (j >= 0 &&arr[j].clientHeight> key)
        { 
            let v1=arr[j].clientHeight;
            arr[j+1].style.height=`${v1}px`
            j = j - 1; 
            arr[j+1].style.backgroundColor="#a64ac9"
        await sleep(document.getElementById("slider2").value/5.0)
        arr[j+1].style.backgroundColor="#ffd93b"
            op++;
        } 
        arr[j+1].style.height=`${key}px`
        await sleep(document.getElementById("slider2").value/5.0)
        arr[i].style.backgroundColor="#ffd93b"
    } 
} 

async function merge(arr,ar, l, m, r)
{
    let a=new Array(r-l+1);
    let i=l,j=m+1,k=0;
    while(i<=m&&j<=r)
    {
        if(arr[i]<=arr[j])
        a[k++]=arr[i++];
        else
        a[k++]=arr[j++];
    op++;
    }
    while(i<=m)
    {
        a[k++]=arr[i++];
        op++;
    }
    while(j<=r)
    {
        a[k++]=arr[j++];
        op++;
    }
    ar[m].style.backgroundColor="#f79e02"
    ar[l].style.backgroundColor="#a64ac9"
    ar[r].style.backgroundColor="#a64ac9"
    for(let g=l;g<=r;g++)
    {
        let i=g;
        arr[g]=a[g-l];
        ar[i].style.height=`${arr[i]}px`
        await sleep(document.getElementById("slider2").value/10.0)
    }
    ar[l].style.backgroundColor="#ffd93b"
    ar[m].style.backgroundColor="#ffd93b"
    ar[r].style.backgroundColor="#ffd93b"
}
async function mergeSort(ar,arr,l,r){
    if(l<r){
        let m =parseInt((l+r)/2);
      await mergeSort(ar,arr,l,m);
      await mergeSort(ar,arr,(m+1),r);
       await merge(arr,ar,l,m,r);
    }
}
async function partition(arr,ar, low, high) {
    let pivot = arr[high];
    ar[high].style.backgroundColor="#f79e02"
    let i = low - 1; 
    // ar[low].style.backgroundColor="#a64ac9"
    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            ar[j].style.backgroundColor="#a64ac9";
            [arr[i], arr[j]] = [arr[j], arr[i]]; 
            ar[i].style.height=`${arr[i]}px`;
            ar[j].style.height=`${arr[j]}px`;
            await sleep(document.getElementById("slider2").value/20.0);
            ar[j].style.backgroundColor="#ffd93b"
        }
        op++;
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    ar[i+1].style.height=`${arr[i+1]}px`
    ar[high].style.height=`${arr[high]}px`
    await sleep(document.getElementById("slider2").value/20.0)
    ar[high].style.backgroundColor="#ffd93b"
    return i + 1;
}
async function quickSort(arr,ar, low, high) {
    if (low < high) {
        let pi = await partition(arr,ar, low, high);
         await quickSort(arr,ar, low, pi - 1);
         await quickSort(arr,ar, pi + 1, high);
    }
}
let boom=true;

//this onclick is used to animate the title 

document.getElementById("text").onclick=async function()
{
    if(boom)
    {
        boom=false;
        let s=['S','O','R','T','I','N','G','.','.'];
        let arr=[0,1,2,3,4,5,6,7,8];
        console.log(arr);
        for(let i=0;i<90;i++)
        {
            let ran1=Math.floor(Math.random()*9);
            let ran2=Math.floor(Math.random()*9);
        [s[ran1],s[ran2]]=[s[ran2],s[ran1]];
        [arr[ran1],arr[ran2]]=[arr[ran2],arr[ran1]];
    }
    let obj=document.getElementsByClassName("text");
    for(let i=0;i<obj.length;i++)
    obj[i].innerHTML=`${s[i]}`;
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < (arr.length - i - 1); j++) {
        if (arr[j]>arr[j+1]) {
            [s[j],s[j+1]]=[s[j+1],s[j]];
            [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            for(let i=0;i<obj.length;i++)
            obj[i].innerHTML=`${s[i]}`;
        await sleep(250);
    }
}
}
boom=true;
}
}


//styling elements using js 

document.getElementById("sliderbox").style.width=`372px`
document.getElementById("topbuttons").style.width=`372px`
document.getElementById("slidebox").style.width=`${372*0.56}px`
document.getElementById("slidebox").style.height=`${hi*0.5}px`
document.getElementById("buttonr").style.width=`${372*0.4}px`
document.getElementById("button2").style.width=`${372*0.31}px`
document.getElementById("button3").style.width=`${372*0.3}px`
document.getElementById("button4").style.width=`${372*0.309}px`
document.getElementById("button5").style.width=`${372*0.47}px`
document.getElementById("button6").style.width=`${372*0.47}px`
document.getElementById("buttonr").style.height=`${hi*0.4}px`
document.getElementById("timebox").style.width=`${372}px`
document.getElementById("timebox").style.height=`${hi*0.2}px`
document.getElementById("opbox").style.width=`${372}px`
document.getElementById("opbox").style.height=`${hi*0.2}px`
if((screen.width<screen.height)&&(screen.width<(screen.height/2)))
{
    document.getElementById("foot").style.position="relative";
    document.getElementById("foot").style.bottom="-400px";
    document.getElementById("fo1").style.paddingLeft=(`${screen.width*0.125}px`);
    document.getElementById("fo2").style.paddingLeft=(`${screen.width*0.13}px`);
    document.getElementById("fo3").style.paddingLeft=(`${screen.width*0.13}px`);
}
else if((screen.width>screen.height)&&(screen.width<1000))
{
    document.getElementById("foot").style.visibility="hidden";
}
else if(Math.abs(screen.width-screen.height)<300)
{
    document.getElementById("foot").style.visibility="hidden";
}
else
{
    document.getElementById("foot").style.position="relative";
    document.getElementById("foot").style.bottom="-50px";
}
document.getElementById("foot").style.width=(`${screen.width}px`);
document.getElementById("fo1").style.width=(`${screen.width}px`);
document.getElementById("fo2").style.width=(`${screen.width}px`);
document.getElementById("fo3").style.width=(`${screen.width}px`);
document.getElementById("foot").style.height=(`100px`);
