# Change detection

Change detection is the process through which Angular checks to see whether your application state has changed, and if any DOM needs to be updated. At a high level, Angular walks your components from top to bottom, looking for changes. Angular runs its change detection mechanism periodically so that changes to the data model are reflected in an application’s view. Change detection can be triggered either manually or through an asynchronous event

{% resources %}
  {% Official "https://angular.io/guide/change-detection", "Understanding Change detection" %}
  {% Blog "https://www.youtube.com/watch?v=f8sA-i6gkGQ", "4 Runtime Performance Optimizations ( Change detection )" %}
{% endresources %}