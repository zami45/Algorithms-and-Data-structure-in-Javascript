class SinglyLinkedList{
    
    constructor(value){
        this.head = null;       
        this.length = 0;
        this.insertNodeAtTheBottom(value)
    }

    insertNodeAtTheBottom(value){
        const newNode = {value : value,next : null}
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
            str += current.value+'->'
            current = current.next
        }

        console.log(str.substr(0,str.length-2))
    }
}

let sll = new SinglyLinkedList(1)
sll.insertNodeAtTheBottom(2)
sll.insertNodeAtTheBottom(3)
