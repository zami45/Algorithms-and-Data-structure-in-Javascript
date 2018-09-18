class GraphUnDirected{
    constructor(noOfVertices){
        this.noOfVertices = noOfVertices;
        this.adjList = new Map();
    }

    addVertice(vertice){
        this.adjList.set(vertice,new SinglyLinkedList(vertice))
    }

    addEdge(srcVertice,destVertice,weight){
            
        this.adjList.get(srcVertice).insertNodeAtTheBottom(srcVertice,destVertice,weight);
        this.adjList.get(destVertice).insertNodeAtTheBottom(destVertice,srcVertice,weight);
    }

    print(){
        return this.adjList
    }

    breadthfirstTravarsal(startingNode){

        let q = new Queue()
        let logStorage = []
        let visited = []
        visited.push(startingNode)
        q.enQueue(startingNode)

        while(!q.isEmpty()){
            let getQElement = q.deQueue()
            logStorage.push(getQElement)
            let getAdjList = this.adjList.get(getQElement)

            let listElements = getAdjList.getListElements(getAdjList) 
            for(let l of listElements){
                let vertice = l.destinationVertice
                if(vertice != null && visited.indexOf(vertice) == -1){
                    visited.push(l.destinationVertice)
                    q.enQueue(l.destinationVertice)
                }
                
            }
            

        }

        return logStorage;


    }

    newFeature(){
        //my new feature
        // this is my new feature
        
    }

 
}
