# Packages

A package is a namespace that mainly contains classes and interfaces. For instance, the standard class `ArrayList` is in the package `java.util`. For this class, `java.util.ArrayList` is called its fully qualified name because this syntax has no ambiguity. Classes in different packages can have the same name. For example, you have the two classes `java.util.Date` and `java.sql.Date`, which are different. If no package is declared in a class, its package is the default package.

To create package use this command -> javac -d directory javafilename

{% resources %}
  {% Official "https://docs.oracle.com/javase/8/docs/api/java/lang/Package.html", "Packages in Java" %}
  {% Blog "https://www.javatpoint.com/package", "Java Package" %}
  {% Blog "https://www.geeksforgeeks.org/packages-in-java/", "Packages In Java" %}
{% endresources %}
