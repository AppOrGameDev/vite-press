# Java集合框架

## 类图

![](img/Collection类图.jpg)

![](img/Collection类图02.jpg)

## Java集合框架

### 补充每个类的特性以及常用api

- Collection
  - List
    - ArrayList
    - Vector `类似ArrayList` `线程(相对)安全;加入async` `允许添加null元素`
      - Stack <strong style="color:red;">栈;后进先出（LIFO，Last In First Out）</strong>
        - `boolean empty()` <strong style="color:green;">测试栈是否为空</strong>
        - `Object peek()` <strong style="color:green;">查看栈顶部的对象，但不从栈中移除它</strong>
        - `Object pop()` <strong style="color:green;">移除栈顶部的对象，并作为此函数的值返回该对象</strong>
        - `Object push(Object element)` <strong style="color:green;">把对象压入栈顶部</strong>
        - `int search(Object element)` <strong style="color:green;">返回对象在栈中的位置，以 1 为基数</strong>
    - LinkedList
  - Set
    - HashSet
      - LinkedHashSet
    - TreeSet
    - CopyOnWriteArraySet
  - Queue
    - ArrayDeque
    - PriorityQueue
- Map
  - HashMap
    - LinkedHashMap
  - WeakHashMap
  - IdentityHashMap
  - TreeMap
  - ConcurrentHashMap
  - HashTable

## 基于上面的整理,归纳成表格

