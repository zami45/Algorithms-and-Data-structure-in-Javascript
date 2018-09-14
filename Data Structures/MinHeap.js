class MinHeapNode {
    constructor(vertice,key){
        this.vertice = vertice;
        this.key = key
    }
}

class MinHeap{
    constructor (keyList,verticeList,heapSize){
        this.heapStorage = [null];  // initialize heap array with null value 
        this.verticeList = verticeList;
        this.keyList = keyList
        this.heapSize = heapSize;
        this.makeHeapNode(this.keyList,this.verticeList,this.heapSize);
        this.buildMinHeap(this.heapSize);
    }

    leftChildIndex(parent_index){
        return parent_index*2
    }
 
    rightChildIndex(parent_index){
        return parent_index*2+1
    }

    getParentIndex(child_index){
        return (child_index % 2) != 0 ? this.heapStorage[(child_index -1) /2] : this.heapStorage[child_index/2]
    }

    minHeapify(heap,heapSize,parent_index){
        let left,right;
        let smallest; // smallest : keep track of the smallest node among parent,it's left child and right child in terms of key 
        left = this.leftChildIndex(parent_index) // get left child index of parent
        right = this.rightChildIndex(parent_index) // get right child index of parent

        if(left <= heapSize && heap[left].key < heap[parent_index].key){
            smallest = left
        }else{
            smallest = parent_index
        }

        if(right <= heapSize && heap[right].key < heap[smallest].key){
            smallest = right;
        }
        
        if(smallest != parent_index){
            [heap[parent_index],heap[smallest]] = [heap[smallest],heap[parent_index]]
            this.minHeapify(heap,heapSize,smallest)
        }
    }

    buildMinHeap(heapSize){
        for(let i = Math.floor(heapSize/2);i>=1;i--){
            this.minHeapify(this.heapStorage,heapSize,i)
        }
    }

    printHeap(){
        return this.heapStorage
    }

    extractMinimumNodeFromHeap(){
        let min = this.heapStorage[1]
        this.heapStorage.splice(1,1)
        this.heapSize -= 1
        this.heapStorage.splice(1,0,this.heapStorage.pop())    
        this.minHeapify(this.heapStorage,this.heapSize,1)
        return min
    }

    makeHeapNode(keyList,verticeList,heapSize){
        for(let i=1;i<=heapSize;i++){
           let minHeapNode = new MinHeapNode(verticeList[i],keyList[i]);
           this.heapStorage.push(minHeapNode)

        }
    }

    nodeExistInHeap(vertice){
        return this.heapStorage.findIndex(e=>(e!=null) && (e.vertice == vertice)) != -1 ? true : false
    }

    getKeyValue(vertice){
        let index = this.heapStorage.findIndex(e=>(e!=null) && (e.vertice == vertice))
        let key = this.heapStorage[index].key
        return key
    }

    updateHeapStorageItemKey(vertice,key){
        let index = this.heapStorage.findIndex(e=>(e!=null) && (e.vertice == vertice))
        this.heapStorage[index].key = key
        this.buildMinHeap(this.heapSize)
    }
    isEmpty(){
        if(this.heapStorage.length == 0 || this.heapStorage.length == 1){
            return true;
        }
        return false;
    }
}


/* var keyList = [null,2,4,8,1,0]
var verticeList = [null,'a','b','c','d','e']
var minHeap = new MinHeap(keyList,verticeList,5)
console.log(minHeap.printHeap())

var min = minHeap.extractMinimumNodeFromHeap();

console.log(minHeap.printHeap())

console.log(min) */