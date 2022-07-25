// class Node {
//   constructor(data, next = null) {
//    this.data = data;
//    this.next = next;
//   }
// }class LinkedList {
//   constructor() {
//     this.head = null;
//   }
//   insertFirst(data) {
//     const node = new Node(data, this.head);
//     this.head = node;
//   }
//   insertLast(data) {
//     const last = this.getLast();
//     if (last) {
//      last.next = new Node(data);
//     } else {
//       this.head = new Node(data);
//     }
//    }
  
//   getFirst() {
//     return this.head.data;
//   }
  
//   getLast() {
//     if (!this.head) {
//       return null;
//     }
//     let node = this.head;
//     while (node) {
//      if (!node.next) {
//       return node;
//      }
//      node = node.next;
//     }
//   }

  
//    getAt(index) {
//     let counter = 0;
//     let node = this.head;
//     while (node) {
//      if (counter === index) {
//       return node;
//      }
//      counter++;
//      node = node.next;
//     }
//    return null;
//   }
// }

// const list = new LinkedList();
// list.insertFirst("a");
// list.insertLast("b");
// list.insertLast("c");
// console.log(list.getAt(0))

//3

// let arr = (["Alf", "Alice", "Ben"]);
// //  required for of
// for (let element of arr) {
//     console.log(element.toString())
// }
 
// // required function
// let myFunction = (element) => element.charAt(0);

//  myFunction(arr)
 

// // required charAt
// var str = new String( "This is string" );

        
//          console.log( arr.toString().charAt(0));
//          console.log(  arr.toString().charAt(6));
//          console.log(  arr.toString().charAt(12));
//          console.log(  arr.toString().charAt(17));
//          console.log(  arr.toString().charAt(20));
//          console.log( arr.toString().charAt(23));