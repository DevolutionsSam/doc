---
title: Unable to Uninstall
---
You seem unable to uninstall {{ en.RDM }} from Programs and Features in Windows.  

In the Event log, you see the following error message:  
![KB4091.png](/img/en/kb/KB4091.png)
### Solution
Try the suggested fix by Microsoft:  

[https://support.microsoft.com/en-us/help/17588/fix-problems-that-block-programs-from-being-installed-or-removed](https://support.microsoft.com/en-us/help/17588/fix-problems-that-block-programs-from-being-installed-or-removed)  
{% snippet icon.badgeInfo %}
Your settings and local data for RDM are by default under %LOCALAPPDATA%\Devolutions\RemoteDesktopManager, our installer doesn’t touch this at all. You must keep this folder in its current state.
{% endsnippet %}  

When done, contact [service@devolutions.net](mailto:service@devolutions.net) for further assistance.
