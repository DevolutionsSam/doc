---
eleventyComputed:
  title: Launcher and {{ en.RDMS }} Synchronization
  order: 20
---
{{ en.LAUNCHER }} and {{ en.RDMS }} must be configured together to work. Launch connections can be set for all users in ***{{ en.RDMS }} Server Settings*** or individually in ***Account Settings*** .  

{% snippet icon.badgeInfo %} 
You need to at least log in once to {{ en.LAUNCHER }} for the companion tool to launch your sessions from {{ en.RDMS }} . 
{% endsnippet %}
 
### Server Settings 

This method sets how all users launch remote connections.  

In ***Administration - Server Settings - Advanced*** , select ***Devolutions Launcher*** in the ***Launch connection with*** drop-down menu. 
![!!ServerOp4043.png](/img/en/server/ServerOp4043.png) 

### Account Settings 

This method sets how individual users open remote connections.  

1. Click the ***User avatar*** . 
1. Click ***Settings*** . 
![!!ServerOp4044.png](/img/en/server/ServerOp4044.png) 
1. Choose ***{{ en.LAUNCHER }}*** from the drop-down menu ***Launch connection with*** and ***Save*** . 
![!!ServerOp4045.png](/img/en/server/ServerOp4045.png) 

