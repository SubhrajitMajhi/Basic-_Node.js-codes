class node 
{
    constructor(data)
    {
        this.data = data  //store the value
        this.next = null  //store the address of the next node
    }

}

//creating nodes 
const node1 = new node(10)
const node2 = new node(20)
const node3 = new node(30)

//linking nodes 
node1.next = node2
node2.next = node3

//printing the linked list
console.log(node1.data)
console.log(node1.next.data)
