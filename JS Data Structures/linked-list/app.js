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

  prepend(value) {
    const newElement = { value: value, next: this.head }

    this.head = newElement

    if (!this.tail) {
      this.tail = newElement
    }
  }

  delete(value) {
    if (!this.head) {
      return
    }

    while (this.head && this.head.value === value) {
      this.head = this.head.next
    }

    let curElement = this.head

    while (curElement.next) {
      if (curElement.next.value === value) {
        curElement.next = curElement.next.next
      } else {
        curElement = curElement.next
      }
    }

    if (this.tail.value === value) {
      this.tail = curElement
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
linkedlist.prepend('First Value')
linkedlist.delete('s')

console.log(linkedlist.toArray())
