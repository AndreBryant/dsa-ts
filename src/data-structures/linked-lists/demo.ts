import { SinglyLinkedList, DoublyLinkedList } from './index';

const dll_demo = () => {
  const ds = new DoublyLinkedList(1);
  ds.insert(2);
  ds.insert(3);
  ds.insert(4);
  ds.traverse();

  ds.remove(3);
  ds.reverseTraversal();

  const found = ds.contains(2);
  const notFound = ds.contains(5);

  console.log(`Searching for values {2,5} = {${found}, ${notFound}}`);
};

const sll_demo = () => {
  const ds = new SinglyLinkedList(1);

  ds.insert(2);
  ds.insert(3);
  ds.insert(4);
  ds.traverse();

  ds.remove(3);
  ds.reverseTraversal();

  const found = ds.contains(2);
  const notFound = ds.contains(5);

  console.log(`Searching for values {2,5} = {${found}, ${notFound}}`);
};

export { dll_demo, sll_demo };
