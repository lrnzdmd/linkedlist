class Node {
    constructor (value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
  constructor() {
    this.list = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.list === null) {
      this.list = newNode;
    } else {
      let linklist = this.list;

      while (linklist.next !== null) {
        linklist = linklist.next;
      }

      linklist.next = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.list === null) {
      this.list = newNode;
    } else {
      let LinkedList = this.list;
      newNode.next = LinkedList;
      this.list = newNode;
    }
  }

  size() {
    if (this.list === null) {
      return 0;
    } else {
      let size = 1;
      let linkList = this.list;
      while (linkList.next !== null) {
        linkList = linkList.next;
        size++;
      }

      return size;
    }
  }

  pop() {
    if (this.list === null) {
        console.log("the list is empty");
        return null;
    }
    let linkList = this.list;
    if (linkList.next === null) {
        const poppedvalue = linkList.value
        this.list = null;
        return poppedvalue;
    } else {
        while (linkList.next.next !== null) {
            linkList = linkList.next;
        }

        const poppedvalue = linkList.next.value; 

        linkList.next = null;

        return poppedvalue;
    }


  }

  head() {
    return this.list;
  }

  tail() {
    let linkList = this.list;
    while (linkList.next !== null) {
      linkList = linkList.next;
    }

    return linkList;
  }

  at(index) {
    let linkList = this.list;

    if (linkList === null) {
      console.log("the list is empty");
    } else {
      let i = 0;
      while (linkList !== null) {
        if (index === i) {
          return linkList;
        } else {
          linkList = linkList.next;
          i++;
        }
      }
      console.log("list does not have index " + index);
    }
  }

  find(value) {
    let linkList = this.list;

    if (linkList === null) {
        console.log("The list is empty");
        return null;
    }

    let i = 0;
    while (linkList !== null) {
        if (value === linkList.value) {
            return i;
        }
        linkList = linkList.next;
        i++;
    }

    console.log("List does not have value " + value);
    return null;
    }

    toString() {
        let linkList = this.list;

        if (linkList === null) {
            console.log("The list is empty");
            return null;
        }

        let string = "";

    while (linkList !== null) {
        string += `( ${linkList.value} ) -> `;
        linkList = linkList.next;
        }
    }

}

const X = new LinkedList();

X.append(1);
X.append(2);
X.append(3);
X.append(4);