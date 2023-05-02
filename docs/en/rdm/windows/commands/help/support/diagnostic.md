---
title: Diagnostic
---
If you encounter a problem with {{ en.RDM }} , you can run a system diagnostic, which is available in Help ***–*** Diagnostic. This could help diagnose or give a pointer to what kind of issues you might be experiencing. 

### System 

The administrator item could be the possible source for security problem. This happen often when a user has the SYSDBA or is DB_OWNER of the SQL Server database.  

Some other issues could be related to the fact that the application is running in Remote Desktop Services. However {{ en.RDM }} is fully compatible with Remote Desktop Services.  

FIPS related issues and solutions can be found in the specific FIPS (Encryption) troubleshooting section. 
If you have a [{{ en.RDMJ }}](/rdm/windows/overview/the-devolutions-platform/rdm-jump/) configured you can run a test of your Jump host by clicking on Jump Test.  
![System Diagnostic – System](/img/en/rdm/windows/clip10814.png) 

{% snippet icon.badgeInfo %} 
Please read the Troubleshooting topic if experiencing issues with {{ en.RDM }} , it lists error messages and could contain the fix/workaround for your problem. 
{% endsnippet %}
 
### Data Source 

The ***&#32;*** ***Data Source*** tab contains information regarding the current data source, such as the number of entries it contains, the size of your data source, the number of custom images and the offline state. 

{% snippet icon.badgeInfo %} 
Too many custom images could dramatically increase the size of the data source and cause load time issue. 
{% endsnippet %}
 
![System Diagnostic - Data Source](/img/en/rdm/windows/clip11353.png) 

### Policy 

The ***Policy*** tab display the list of Group Policy Templates to see if any of them has been applied.  
![System Diagnostic - Policy](/img/en/rdm/windows/clip11354.png) 
