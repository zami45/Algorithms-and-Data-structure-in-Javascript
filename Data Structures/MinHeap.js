class MinHeapNode {
    constructor(vertex,key){
        this.vertex = vertex;
        this.key = key
    }
}

class MinHeap{
    constructor (heapArr){
        this.heapStorage = heapArr
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
        let left,right,smallest;
        left = this.leftChildIndex(parent_index)
        right = this.rightChildIndex(parent_index)

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
        console.log(this.heapStorage)
    }
}

let heapArr = [null]
var key = [null,2,4,8,1,0]
var vertex = [null,'a','b','c','d','e']
for(i=1;i<=5;i++){
    let minHeapNode = new MinHeapNode(vertex[i],key[i]);
    heapArr.push(minHeapNode)

}

var minHeap = new MinHeap(heapArr)

minHeap.buildMinHeap(heapArr.length-1)

minHeap.printHeap()