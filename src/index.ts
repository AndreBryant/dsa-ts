import { SinglyLinkedList } from './data-structures/linked-list';

const singlyLinkedList = new SinglyLinkedList(1);

singlyLinkedList.insert(2);
singlyLinkedList.insert(3);
singlyLinkedList.insert(4);
singlyLinkedList.traverse();

singlyLinkedList.remove(3);
singlyLinkedList.reverseTraversal();
