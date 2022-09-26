# Startup Management (init.d)

`init.d` is a daemon which is the **first process** (PID = 1) of the Linux system. Then other processes, services, daemons, and threads are started by init. One can write their own scripts in *'/etc/init.d'* location to start services automatically on system boot. Services can be started and stopped manually by using `service` command.

It has following syntax: `$ service [service_name] [action]` e.g. `$ service ssh start`

{% resources %}
  {% Blog "https://www.freecodecamp.org/news/the-linux-booting-process-6-steps-described-in-detail/", "Linux Booting Process" %}
  {% Blog "https://www.geeksforgeeks.org/what-is-init-d-in-linux-service-management/", "What is init.d?" %}
  {% Blog "https://itsfoss.com/linux-daemons/", "What are Daemons in Linux?" %}
{% endresources %}