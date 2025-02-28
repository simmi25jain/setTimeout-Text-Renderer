const btn=document.querySelector("button");
const what=document.querySelector("#what");
const how=document.querySelector("#how");
const wrapper=document.querySelector("#wrapper");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const text = what.value;
    const count = how.value;
    const output=document.createElement("div");
    wrapper.append(output);

    for(let i=0; i<count; i++){
        setTimeout(()=>{
            const p=document.createElement("p");
            p.innerText=text;
            output.append(p);
        },i*2000);
    }
});