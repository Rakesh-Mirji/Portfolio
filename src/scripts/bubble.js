window.onload=function(){
    const MAX_BUBBLES=20;
const colors=['red','blue','green','orange','purple']
const Box=document.querySelector('.box');
let bubbles=[];


function makeBubble(){
    
    //pick random radius
    let radius = Math.floor(Math.random()*100);
    //pick a random color
    let color = Math.floor(Math.random()*10)%colors.length;
    //pick x & y axis
    let x= Math.floor(Math.random()*100)%550+Math.floor(Math.random()*900);
    let y= Math.floor(Math.random()*100)%550+Math.floor(Math.random()*500);
    // Create Bubble div
    let div=document.createElement("div");
    div.classList.add("bubble");
    div.style.left=`${x-radius}px`;
    div.style.top=`${y-radius}px`;
    div.style.height=`${radius*2}px`;
    div.style.width=`${radius*2}px`;
    div.style.background=colors[color];
    
    return{x,y,radius,color:colors[color],div,maxRaidus:radius+Math.floor(Math.random()*100),draw(){
        // this.div.style.left=`${x-this.radius}px`;
        // this.div.style.top=`${y-this.radius}px`;
        this.div.style.height=`${this.radius*2}px`;
        this.div.style.width=`${this.radius*2}px`;
        // if (this.radius>this.maxRaidus)
        // Box.removeChild(this.div)
    }}
}
//init function only runs once after execution
function init(){
    for(let i=0;i<MAX_BUBBLES;i++){
        const bubble=makeBubble()
        bubbles.push(bubble)
        Box.appendChild(bubble.div)
    }
}
function growBubbles(){
    bubbles.forEach(bubble=>{bubble.radius+=2;
        bubble.draw()})
    }
    
    function mainloop(){
        growBubbles()
        let remainingBubbles=bubbles.filter(b => b.radius < b.maxRaidus)
        let removedBubbles=bubbles.filter(b => !remainingBubbles.includes(b))
        
        removedBubbles.forEach(b => Box.removeChild(b.div))
        bubbles = remainingBubbles
        setTimeout(mainloop,1000)
    }
    
    init()
    mainloop()
    console.log(bubbles);
    Box.addEventListener("click",function (e){
        console.log('clicked');
        const elem =e.target
        if(elem.classList.contains("bubble")){
            Box.removeChild(elem)
            const bubble=bubbles.filter(b=>b.div==elem)[0];
            bubbles=bubbles.filter(b=>b.div!=elem)
            console.log(bubble);
            if(bubble.color == "red")
            alert('Red Clicked')
    }
}
) 
}