class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  append(value) {
    const newElement = { value: value, next: null }

    if (this.tail) {
      this.tail.next = newElement
    }
    this.tail = newElement

    if (!this.head) {
      this.head = newElement
    }
  }

  toArray() {
    const elements = []

    let curElement = this.head

    while (curElement) {
      elements.push(curElement)
      curElement = curElement.next
    }

    return elements
  }
}

const linkedlist = new LinkedList()

linkedlist.append(2)
linkedlist.append('s')
linkedlist.append('s')
linkedlist.append(true)

console.log(linkedlist.toArray())
