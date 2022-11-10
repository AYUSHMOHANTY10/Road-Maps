# AVL Trees

AVL trees are a type of self-balancing binary search tree. They are named after their inventors, Adelson-Velskii and Landis. AVL trees are the most popular self-balancing binary search tree.

In practice: From what I can tell, these aren't used much in practice, but I could see where they would be: The AVL tree is another structure supporting O(log n) search, insertion, and removal. It is more rigidly balanced than red–black trees, leading to slower insertion and removal but faster retrieval. This makes it attractive for data structures that may be built once and loaded without reconstruction, such as language dictionaries (or program dictionaries, such as the opcodes of an assembler or interpreter)

{% resources %}
  {% Blog "https://www.youtube.com/watch?v=FNeL18KsWPc&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb&index=6", "MIT AVL Trees / AVL Sort" %}
  {% Blog "https://www.coursera.org/learn/data-structures/lecture/Qq5E0/avl-trees", "AVL Trees" %}
  {% Blog "https://www.coursera.org/learn/data-structures/lecture/PKEBC/avl-tree-implementation", "AVL Tree Implementation" %}
  {% Blog "https://www.coursera.org/learn/data-structures/lecture/22BgE/split-and-merge", "Split And Merge" %}
{% endresources %}
