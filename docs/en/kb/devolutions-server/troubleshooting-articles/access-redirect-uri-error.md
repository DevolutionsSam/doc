---
title: The specified 'redirect_uri' is not valid for this client application.
---
The following error is displayed when you try to login on the {{ en.DPS }} web page.  
![!!KB8060.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8060.png)

## Solution

{% snippet icon.badgeNotice %}
The Access URI is case sensitive and must respect the certificate host name.
{% endsnippet %}

To solve this issue, verify that the Access URI is properly set in the IIS tab of the {{ en.DPS }} settings. Please see [Access URI](/kb/devolutions-server/knowledge-base/access-uri/) for more information.  
![!!KB8061.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8061.png)
