
function shuffle(array){
    const _array=array.slice(0)
    for (let i = 0; i < array.length -1; i++) {
        let ramdon=Math.floor(Math.random()*(i+1));
        let temp=_array[i];
        _array[i]=_array[ramdon];
        _array[ramdon]=temp
        
    }
    return _array
}
export default function initializeDeck(){
    let id=0
    const cards=['barato','caliente','cariñoso','caro', 'dolor','dulce','enfermo','facil','familia','yo'].reduce((acc,type)=>{
       acc.push({
           id:id++,
           type
       }) 
       acc.push({
        id:id++,
        type
    }) 
        return acc
    }, [])
    return shuffle(cards);
}