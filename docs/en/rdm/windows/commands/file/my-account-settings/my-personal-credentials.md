---
title: My Personal Credentials
keywords:
- Terminal Service
---
The ***My Personal Credentials*** feature is a single credential entry which is locally stored on your computer in your Windows profile.  

It is typically used to hold the Windows credentials for your running sessions because {{ en.RDM }} can't access them. If you can't use integrated security then you must store your credentials in ***My Personal Credentials*** .  

This allows you to centralize one special credential to replace or emulate the ones for your Windows session. When a password change is needed you simply need to change it once in ***My Personal Credentials*** . 

{% snippet icon.badgeInfo %} 
If you want to change the credential type, go in   %LOCALAPPDATA% (Default) or %APPDATA% (Remote Desktop Services) 
\Devolutions\RemoteDesktopManager and delete the Credentials.rdt file to reset it. 
{% endsnippet %}
 
![My Personal Credentials](/img/en/rdm/windows/clip10269.png) 

My Personal Credentials can be selected in your entries under Credentials .  
![Credentials - My personal credentials](/img/en/rdm/windows/clip11293.png) 

