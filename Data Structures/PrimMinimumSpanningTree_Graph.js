class PrimMSTNode{
    constructor(vertice,parentVertice,weight,isStartingNode){
        this.vertice = vertice; // the vertice itself
        this.parentVertice = parentVertice;  // string : parent vertice of this.vertice
        this.weight = weight; // number : weight from parentVertice to this node
        this.isStartingNode = isStartingNode; // boolean : check if this node is the starting point of our MST
    }
}

class PrimMST{
    constructor(graphDS){
        this.primMSTStorage = []; // array storage for storing our MST
        this.graphDS = graphDS // ths soruce graph from which minimum spanning tree will be constructed    
    }

    constructPrimMST(){

        let noOfVertices = this.graphDS.noOfVertices // also to be used as heap-size for our minHeap DS
        let verticeList = [null,...Array.from(this.graphDS.adjList.keys())] // for construction min heap DS
        let keyList = [null,0]
        
        for (let i = 2; i<= noOfVertices; i++){
            keyList[i] = Infinity
        }

        let minHeapDS = new MinHeap(keyList,verticeList,noOfVertices)
        this.primMSTStorage.push(new PrimMSTNode(minHeapDS.heapStorage[1].vertice, null,0,true))
        
        while(!minHeapDS.isEmpty()){

            let minHeapNode = minHeapDS.extractMinimumNodeFromHeap()

            // the vertice we are working on right now 
            let minHeapNodeVertice = minHeapNode.vertice  

            // adjacent list for that vertice
            let adjListOfCurrentVertice = this.graphDS.adjList.get(minHeapNodeVertice).head.next 
            while(adjListOfCurrentVertice != null){ // run a loop till that adjacent list ends
                let dest = adjListOfCurrentVertice.destinationVertice // node in that adjacent list
                if(minHeapDS.nodeExistInHeap(dest) && minHeapDS.getKeyValue(dest) > adjListOfCurrentVertice.weight ){

                    // if already exists in prim,then update
                    if(this.isVerticeAlreadyExistInPrimMST(adjListOfCurrentVertice.destinationVertice)){ 
                        let getExistedNode = this.getExistedNode(adjListOfCurrentVertice.destinationVertice)
                        getExistedNode.vertice = adjListOfCurrentVertice.destinationVertice // parent vertice is the actual vertice in singlyLinked List
                        getExistedNode.parentVertice = adjListOfCurrentVertice.parentVertice
                        getExistedNode.weight = adjListOfCurrentVertice.weight
                        minHeapDS.updateHeapStorageItemKey(getExistedNode.vertice,getExistedNode.weight)
                        
                    }else{ // else if not already exists, then insert a new PrimMST node in prim storage
                        let primMSTNode = new PrimMSTNode(adjListOfCurrentVertice.destinationVertice,minHeapNodeVertice,adjListOfCurrentVertice.weight,false)
                        this.primMSTStorage.push(primMSTNode)
                        minHeapDS.updateHeapStorageItemKey(primMSTNode.vertice,primMSTNode.weight)
                    }
                }

                adjListOfCurrentVertice = adjListOfCurrentVertice.next
            }
        }
    }
 
    getExistedNode(vertice){
        let index = this.primMSTStorage.findIndex(e=>e.vertice == vertice)
        return this.primMSTStorage[index]
    }
    isVerticeAlreadyExistInPrimMST(vertice){
        return this.primMSTStorage.findIndex(e=>e.vertice == vertice) != -1 ? true : false
    }

    print(){
        return this.primMSTStorage;
    }
}
