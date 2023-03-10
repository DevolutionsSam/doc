---
eleventyComputed:
  title: Upgrading {{ en.RDMS }}
---
{% snippet icon.badgeInfo %} 
Install the proper version of {{ en.RDMSCONSOLE }} before upgrading the {{ en.RDMS }} web application. It is available on the [Download page](https://server.devolutions.net/home/download) . 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Since {{ en.RDMS }} 2019.x, most administrative features can only be managed from the web interface. Please see ***Administration – {{ en.RDMS }} Settings*** . 
{% endsnippet %}
 
It is highly recommended as a best practice to first deploy the new version of {{ en.RDMS }} to a staging instance and verify its stability before deploying it to your whole organization. If you do not have a staging instance we then recommend a limited roll-out to ensure the work flow is supported to your satisfaction prior to impacting your whole team.  

{% snippet icon.badgeNotice %} 
These steps are intended to be achieved on a single server or a basic [topology](/server/overview/topologies/) . If your environment differs from these topologies, please contact us and we will guide you on how to upgrade {{ en.RDMS }} . 
{% endsnippet %}
 
## Workflow 
{% snippet icon.badgeCaution %} 
We highly recommend to test the upgrade process in a staging/test environment before upgrading your production instance. 
{% endsnippet %}
 
{% snippet icon.badgeCaution %} 
The upgrade steps will be performed with {{ en.RDMSCONSOLE }} . You will need to upgrade your copy to the latest version that is matched with the target version of {{ en.RDMS }} that you are preparing to install. Please follow the steps carefully. 
{% endsnippet %}
 
{% snippet icon.badgeCaution %} 
If you have elected to use Integrated Security for connecting to the database, you must perform the upgrade using a Windows user account that has full rights on the database. Ensure that the IIS Application Pool Identity and Scheduler accounts have enough privileges on the database. After an upgrading to a new version, new permissions are possibly required. Please contact us about the new permissions list. 
{% endsnippet %}
 
{% snippet icon.badgeCaution %} 
If you have set the [Security Provider](https://help.remotedesktopmanager.com/administration_securityproviders.htm) on your current {{ en.RDMS }} , specific operations will need to be done before the upgrade. Please contact us for further details. 
{% endsnippet %}
 
{% snippet icon.shieldNotice %} 
We recommend doing a backup of the Encryption Keys before any operation that could modify the information of the database or before the upgrade of {{ en.RDMS }} . Protect the Encryption Key file in a safe to avoid data loss if {{ en.RDMS }} has to be restored. 
{% endsnippet %}
 
### Preparation phase 

* Ensure that the instance users have the offline mode enabled and that they all perform a full refresh of the cache ( Ctrl+F5 ). 
* Have your team switch to the offline mode in {{ en.RDM }} , allowing them to work while the system is down. 
* Update the Maximal version of {{ en.RDM }} in ***Administration – {{ en.SST }} – Version Management – Maximal version*** , if this option was set before the upgrade.  

### Phase 1 

* Perform a full backup of the database, take precautions against that backup file being deleted by a maintenance plan. 
* Archive the content of the web application folder containing the {{ en.RDMS }} instance, move to a safe place. 
* Install the proper version of {{ en.RDMSCONSOLE }} . In each of the sub-topics related to a specific version of {{ en.RDMS }} you will find the version of the client that you need. 
* {{ en.RDMSCONSOLE }} must be run with elevated privileges.  

### Phase 2 

1. Open the [{{ en.RDMS }} Console](/server/management/devolutions-server-console/) . 
1. Select the instance that you wish to upgrade. 
1. Set the instance in ***Offline Mode*** with the ***Go Offline*** button. On a High Availability/Load Balancing topology, all instances must be set to Offline mode before starting the upgrade process. 
1. Click the ***Upgrade Server*** button. 
![Devolutions Server Console](/img/en/server/ServerOp8064.png)  
1. Select the ***Upgrade Source*** . You can either use the latest General Availability release that is available online automatically or specify the path to a zip file that you have downloaded yourself. Use this for beta releases or for earlier versions. 
![Devolutions Server Upgrade Wizard](/img/en/server/ServerOp8066.png)  
1. Press ***Next*** . 
1. BREAKING CHANGE: If you upgrade from version 2021.2.14 or older to version 2022.1 or higher, you will have to provide the [Access URI](/kb/devolutions-server/knowledge-base/access-uri/) to reach the {{ en.DPS }} web page. 
![ServerOp8099.png](/img/en/server/ServerOp8099.png) 
1. Review the summary and press ***Upgrade*** if you are satisfied.  
![Upgrade completed](/img/en/server/ServerOp8067.png) 

### Final phase 

{% snippet icon.shieldNotice %} 
The ***Backup Folder*** contains information about the configuration of the {{ en.RDMS }} instance prior to the upgrade. After a successful upgrade, you must ensure the content is either moved to a safe place, or deleted. 
{% endsnippet %}
 
{% snippet icon.badgeCaution %} 
Our support department gets more and more urgent requests for assistance because of a rogue admin upgrading his own copy of {{ en.RDM }} and introducing a schema update for some new feature. This may prevent other users from using the system. We strongly recommend setting both the Maximal and Minimal versions allowed to connect to your instance. 
{% endsnippet %}
 
{% snippet icon.badgeCaution %} 
If you have elected to use the Integrated Security for connecting to the database in the [Database](/server/management/devolutions-server-console/devolutions-server-settings/database/) tab, ensure that the IIS Application Pool Identity and Scheduler accounts have enough privileges on the database. After an upgrading to a new version, new permissions are possibly required. Please contact us about the new permissions list. 
{% endsnippet %}
 
* Have a user upgrade his workstation with the version of {{ en.RDM }} supported by the {{ en.RDMS }} version and test connectivity with the server instance. 
* When you are satisfied with your tests, have the rest of the staff upgrade to the same version of {{ en.RDM }} . 
* Update the Maximal/Minimal version of {{ en.RDM }} in ***Administration – {{ en.SST }} – Version Management***. 

