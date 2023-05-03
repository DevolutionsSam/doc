---
eleventyComputed:
  title: Configure a Custom Download Path for Devolutions Updater
  description: Since {{ en.RDM }} version 2023.1.7, it is possible to set a custom download path for Devolutions Updater instead of downloading in %TEMP%.
  keywords:
  - update
---
Since {{ en.RDM }} version 2023.1.7, it is possible to set a custom download path for Devolutions Updater instead of downloading in %TEMP%. 

It can be configured in two ways:
* In ***File – Options – Paths – Custom download path***.
  ![File – Options – Paths – Custom download path](/img/en/kb/KB2238.png)
* Directly in the updater.  
    1. In the ***Help*** tab, click on ***Check for Updates***.
    ![Help – Check for Updates](/img/en/kb/KB2239.png)
    1. If {{ en.RDM }} can be updated, the ***Update Available*** pane will open. From there, click on ***Download***, then select one of these options:
        * ***Download this version and install now***: Devolutions Updater will open right now.
        * ***Download this version and install when application is closed***: Devolutions Updater will open after closing {{ en.RDM }}.  

        ![Download](/img/en/kb/KB2240.png)
    1. When the Devolutions Updater window appears, click on ***Options***.
    ![Options](/img/en/kb/KB2241.png)
    1. Enter the ***Custom download path*** of your choice, then click ***Close***.
    ![Custom download path](/img/en/kb/KB2242.png)
    1. Click on ***Update*** and follow the standard update process.
