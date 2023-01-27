/**
 ** A queue is a special kind of data in which the first item comes out first and a newly added item occupies the last index i.e FIFO
 ** A queue usually has the following methods enqueue, dequeue and peek
 ** enqueue method is used to add records to the data
 ** dequeue remove records from the data
 ** peek check the last record in the data 
*/
class Queue {
    constructor() {
        this.data = [];
    }

    // add items to data 
    enqueue(item){
        this.data.push(item);
    }

    //remove items from data 
    dequeue(){
        this.data.shift();
    }

    //peek to see last element of the array
    peek(){
        //return the last index
        return this.data[this.data.length - 1];
    }

    getQueue(){
        return this.data;
    }
}

let queue0 = new Queue();

queue0.enqueue('Mark');
queue0.enqueue('Steve');
console.log(queue0.getQueue());


console.log(queue0.peek());
queue0.dequeue();
console.log(queue0.getQueue());

