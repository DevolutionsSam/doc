---
title: Custom Installer Service
---

![!!CustomInstallerServiceIcon.png](https://webdevolutions.blob.core.windows.net/images/projects/custom-installer/logos/custom-installer-white-shadow.svg) 

* Generate and download custom installation packages for {{ en.RDM }} . 
* Include preconfigured data sources in the package for quick enterprise wide deployment. 
* Download the installer as a Windows Installer (.msi file). 


The {{ en.CI }} offered through our Devolutions Customer Portal services replicates the configuration from a {{ en.RDM }} instance. This configuration is used to create an installer file (*.rdi), which will be used to create the installation package intended for distribution. The configuration can contain data sources, credentials, database templates, and more. It is best practice to have a {{ en.RDM }} installation used specifically to create the installation package.  

{% snippet icon.shieldWarning %} 
The {{ en.CI }} uploads a configuration file to our online services. You should not use the service to redistribute passwords for data sources. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
You must create an installer file using {{ en.RDM }} before creating the installer on the Web portal. This is described in the [Installer File Generator](/rdm/windows/installation/client/custom-installer-service/installer-file-generator/) topic. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
You can store and create up to six ***Custom Installer*** configuration file packages in your {{ en.DA }} . 
{% endsnippet %}
 
The {{ en.CI }} can be found in with the {{ en.DA }} tools, located in ***File –*** ***{{ en.DA }}*** ***– Tools*** . You must be signed in to access it.  
![File – Devolutions Account – Tools](/img/en/rdm/windows/clip11245.png) 

The following topics will help you get started to set up your customized installers with {{ en.RDM }} .  

* [Create an Installation Package](/rdm/windows/installation/client/custom-installer-service/custom-installer-manager/) 
* [Installer File Generator](/rdm/windows/installation/client/custom-installer-service/installer-file-generator/) 
* [Option Selection Dialog](/rdm/windows/installation/client/custom-installer-service/installer-file-generator/option-selection/) 


