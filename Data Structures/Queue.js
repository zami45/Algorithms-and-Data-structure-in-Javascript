/** 
* Create a Queue data structure
*
* @constructor 
* initialize a storage for storing data for the queue
**/
class Queue{
    constructor(){
        this.storage = []
    }

    /**
     * insert element in the queue
     * 
     * @param {any data type} node A node to add
     */
    enQueue(node){
        this.storage.push(node)
    }

    /**
     * remove element from the queue
     * 
     */
    deQueue(){
        this.storage.shift()
    }

    /**
     * print all the elements of the queue
     */
    print(){
        let str = ''
        for(let i of this.storage){
            str += i
        }
        console.log(str)
    }
}

/*
var q = new Queue()
q.enQueue(1)
q.enQueue(2)
q.enQueue(3)
q.enQueue(4)
q.enQueue(5)

q.print()

q.deQueue()
q.deQueue()

q.print()
*/