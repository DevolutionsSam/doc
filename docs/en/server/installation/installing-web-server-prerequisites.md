---
title: Installing Web Server Prerequisites
keywords:
- Roles
---
{% snippet icon.badgeInfo %} 
The installation of the {{ en.RDMS }} is supported by Windows 10, Windows 11, Windows Server 2012R2, 2016, 2019 and 2022. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
As a web application, {{ en.RDMS }} requires the IIS Manager, the [URL Rewrite Module](https://api.devolutions.net/redirection/3cb42413-5dfd-4b1b-bd20-4e5968274ed0) , the [Application Request Routing](https://api.devolutions.net/redirection/52ba9ac0-fb5f-44c1-9521-972caf763b1a) , the [ASP.Net 6.0](https://api.devolutions.net/redirection/2f1f6a33-20c5-4d84-947b-90ff3cdd7492) and specific Web Server Roles on the machine on which it will be hosted. 
{% endsnippet %}
 
It is possible to install these prerequisites, the IIS Manager and the URL Rewrite Module are included in the {{ en.RDMSCONSOLE }} or through an existing PowerShell script provided with {{ en.RDMCLIENT }} .  

![Web Roles needed for Devolutions Server](/img/en/server/clip10313.png) 

{% snippet icon.badgeInfo %} 
Installing prerequisites from [{{ en.RDMSCONSOLE }}](/server/management/devolutions-server-console/) or from the PowerShell script require internet access to download [URL Rewrite Module](https://api.devolutions.net/redirection/3cb42413-5dfd-4b1b-bd20-4e5968274ed0) , the [Application Request Routing](https://api.devolutions.net/redirection/52ba9ac0-fb5f-44c1-9521-972caf763b1a) and [ASP.Net 6.0](https://api.devolutions.net/redirection/2f1f6a33-20c5-4d84-947b-90ff3cdd7492) . 
{% endsnippet %}
 
### Steps 

Here are the two different methods available to install the prerequisites:  

1. {{ en.RDMSCONSOLE }} . 
    1. Open the [{{ en.RDMSCONSOLE }}](/server/management/devolutions-server-console/) . 
    1. Go in the Support tab and click on the IIS Diagnostic button.  
![ServerOp8162.png](/img/en/server/ServerOp8162.png)  
    3. Click on the Install Prerequisites button to run the PowerShell script.  

{% snippet icon.badgeInfo %} 
This window will only appear if a prerequisite is missing during a new installation or an update. 
{% endsnippet %}
 
![ServerOp8171.png](/img/en/server/ServerOp8171.png)  

2. PowerShell command line 
    1. Run Windows PowerShell with elevated privileges. 
    1. Change the current path to the sub-folder Scripts that is located in the current installation folder of {{ en.RDMSCONSOLE }} . ( C:\Program Files (x86)\Devolutions\Devolutions Server Console\Scripts ) 
    ![Location of PowerShell script](/img/en/server/clip10311.png)  
    1. Run the script DVLS-Prerequisites.ps1. 
    1. The script will install the missing web roles and these components : IIS URL Rewrite Module, IIS Application Request Routing Module and IIS [APS.Net](http://aps.net/) Core Module (.Net 6.0). 
    ![ServerOp4020.png](/img/en/server/ServerOp4020.png) 

