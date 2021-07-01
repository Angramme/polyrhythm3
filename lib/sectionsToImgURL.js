

export function sectionsToImgURL(sections){
    let canvas = document.createElement('canvas');
    const W = 32;
    const squeeze = .7;
    canvas.width = canvas.height = W;

    let ctx = canvas.getContext('2d');
    ctx.font = `${W/2 |0}px Helvetica, Arial, sans-serif`;
    
    ctx.fillStyle = 'yellow';
    ctx.fillRect(0, 0, W, W);
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle';
    sections.forEach((S, si)=>{
        ctx.fillText(S.ratios.join(':'), W/2, 
        (squeeze*W/sections.length)*(.7+si) + (1-squeeze)*W/2 |0);
    })
    return canvas.toDataURL();
}