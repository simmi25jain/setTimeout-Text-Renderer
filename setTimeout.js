const btn=document.querySelector("button");
const what=document.querySelector("#what");
const how=document.querySelector("#how");
const wrapper=document.querySelector("#wrapper"); // output will be displayed

btn.addEventListener("click",(e)=>{
    e.preventDefault(); //Prevents the form from refreshing the page when submitting.
    const text = what.value;
    const count = how.value;

    const output=document.createElement("div"); //Creates a new <div> element to hold the output.
    wrapper.append(output); //Adds this <div> inside the #wrapper in the HTML.

    for(let i=0; i<count; i++){
        setTimeout(()=>{
            const p=document.createElement("p");
            p.innerText=text; //Sets the paragraph text to the user input
            output.append(p); //Adds the <p> inside the output <div>
        },i*2000);
    }
});