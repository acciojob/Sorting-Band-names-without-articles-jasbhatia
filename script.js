//your code here

function strip(Spot)
{
	return touristName.replace(/^(a| the|an)/i,'').trim();
	
}
const sorted=touristSpot.sort((a,b)=>{
	return strip(a)>strip(b)?1:-1;
});