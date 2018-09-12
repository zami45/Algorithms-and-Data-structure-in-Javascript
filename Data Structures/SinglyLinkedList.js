class SinglyLinkedList{
    
    constructor(value){
        this.head = null;       
        this.length = 0;
        this.insertNodeAtTheBottom(value)
    }

    insertNodeAtTheBottom(value, dest=null,weight = 0){
        const newNode = {parentVertice : value, destinationVertice : dest, weight : weight,  next : null}
        if(this.head == null){
            this.head = newNode    
            this.length++    
        }else{
            let current = this.head;
            let previous
            while(current != null){
                previous = current
                current = current.next
            }

            previous.next = newNode
            this.length++
        }
    }

    print(){
        let current = this.head
        let str = ''
        while(current != null){
            str += current.parentVertice+'->'
            current = current.next
        }

        console.log(str.substr(0,str.length-2))
    }

    getListElements(list){
        let current = list.head
        let arr = []
        while(current != null){
            arr.push(current)
            current = current.next
        }
        return arr
    }
}


