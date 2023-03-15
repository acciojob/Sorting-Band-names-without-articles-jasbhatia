//your code here

function strip(Spot)
{
	return Spot.replace(/^(a| the|an)/i,'').trim();
	
}
const sorted=Spot.sort((a,b)=>{
	return strip(a)>strip(b)?1:-1;
});
document.querySelector('#bands').innerHTML= sorted.map(band=>`<li>{band}<li>`);
console.log(sorted);