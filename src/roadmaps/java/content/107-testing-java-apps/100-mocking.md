# Mocking

Mocking removes external dependencies from a unit test to create a sense of an entire controlled environment. The traditional method of mocks involves mocking all other classes that interact with the class we want to test. The common targets for mocking are:

- Database connections
- Web services
- Slow Classes
- Classes with side effects
- Classes with non-deterministic behavior

{% resources %}
  {% Blog "https://site.mockito.org/", "Mockito - Mocking Framework for Java" %}
{% endresources %}
