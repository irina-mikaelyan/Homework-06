//Problem 1:  Get array of node ids from tree (keys).
function getKeys(obj){
    let keyArray = Object.keys(obj)
    let resultKeys = []
    
    for(let i=0; i<keyArray.length; i++){
        
        let childKey = keyArray[i]//obj[i]
        let child = obj[childKey]
        
        resultKeys = resultKeys.concat(getKeys(child))
    }
    resultKeys = resultKeys.concat(keyArray)
    
    return resultKeys
}
//Problem 2:Get array of nodes from tree.

function describeTree(obj){
    
    let keyArray = Object.keys(obj)
    let output=[]
   
    for(let i=0;i<keyArray.length;i++){
        let nestedObject={}
        let childKey = keyArray[i]
        let child = obj[childKey]
        nestedObject.id=keyArray[i]
        nestedObject.children = Object.keys(child)
        output.push(nestedObject)
        output=output.concat(describeTree(child)) 
     
    }
       
return output
}