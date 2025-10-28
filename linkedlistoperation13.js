class node 
{
    constructor()
    {
        this.head = null;  // Initialize the head of the linked list
        this.size = 0
    }
}

isEmpty( )
{return this.head === null}
getSize()
{return this.size}


//prepend
Prepend(data)
{
    const newNode = new node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
}



//append
append(data)
const node  = new node(data)
{
    if(this.isempty())
    {
        this.head = node
    }
    else
    {
        let curr = this.head
        while(curr.next) curr = curr.next
        curr.next = node
    }
    this.size++
}

print()
{
    let curr  = this.head, str = ""
    while(curr)
    {
        str += curr.data + '->'
        curr = curr.next
    }
    console.log(str + 'null')
}

//usage
const list = new linkedlist()
list.append(1);
list.append(2);
list.append(3);
list.print();