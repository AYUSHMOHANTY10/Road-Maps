# Promises

A promise is commonly defined as a proxy for a value that will eventually become available
Asynchronous functions use promise behind the scenes, so understanding how promises work is fundamental to understanding how "async" and "await" works.
Once a promise has been called, it will start in a pending state. This means that the calling function continues executing, while the promise is pending until it resolves, giving the calling function whatever data was being requested.

Creating a Promise:
The Promise API exposes a Promise constructor, which you initialize using newPromise().

Using resolve() and reject(), we can communicate back to the caller what the resulting Promise state was, and what to do with it.

{% resources %}
  {% Blog "https://nodejs.dev/en/learn/understanding-javascript-promises/", "Understanding Javascript Promises" %}
  {% Blog "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise", "Promise Methods" %}
  {% Blog "https://www.promisejs.org/", "Official Website" %}
  {% Blog "https://www.freecodecamp.org/news/javascript-promises-for-beginners/", "Official Website" %}
  {% Blog "https://www.youtube.com/watch?v=a_8nrslImo4/", "Asynchronous JavaScript - Promises" %}
{% endresources %}

