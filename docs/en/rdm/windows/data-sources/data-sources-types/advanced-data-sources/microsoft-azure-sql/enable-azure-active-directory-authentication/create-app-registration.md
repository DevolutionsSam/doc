---
title: Create an Azure Active Directory App Registration
keywords:
- Active Directory admin
---
{% snippet icon.badgeInfo %} 
This step is optional and not required if your {{ en.RDM }} version is 2022.1 and higher. 
{% endsnippet %}
 
To be able to use the Active Directory Interactive (with MFA Support) authentication method in {{ en.RDM }} , a new app registration needs to be registered in the Microsoft Azure SQL console (Azure Active Directory) with the appropriate API permissions. 

## Settings 

1. Login on [Azure Portal](https://portal.azure.com/) . 
1. In the Azure Active Directory section, select ***App registrations*** and then ***New registration*** .  
![App Registration](/img/en/rdm/windows/clip5011.png) 
1. Configure the ***Name*** .  
![!!RdmWin4051.png](/img/en/rdm/windows/RdmWin4051.png) 
1. Select the ***Supported account types*** .  
![!!RdmWin4052.png](/img/en/rdm/windows/RdmWin4052.png) 
1. Configure the ***Redirect URI*** as indicated below and click ***Register*** . 
{% snippet icon.badgeInfo %} 
The ***Redirect URI***   setting   MUST be configured ***Public client/native (mobile & desktop)*** . 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
In our example the ***Redirect URI***   is set to https<area>://mycompany.com, but we suggest you personalize it to the domain of your company home page. This will be necessary in the authentication step of the topic [Configure RDM Active Directory Interactive (with MFA)](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/enable-azure-active-directory-authentication/configure-rdm-older-version-ad-interactive-mfa/) . 
{% endsnippet %}
 
![!!RdmWin4053.png](/img/en/rdm/windows/RdmWin4053.png) 

6.   Select ***APIs my organization uses*** , then type Azure and select ***Azure SQL Database*** .  
![APIs my organization uses](/img/en/rdm/windows/clip5017.png) 
1. Select Delegated permissions – user_impersonation and click ***Add permissions*** .  
![user_impersonation](/img/en/rdm/windows/clip5018.png) 
1. The ***API permissions*** should look like this. You will see the new permission we just added and the preexisting Microsoft Graph.  
![API / Permissions Name](/img/en/rdm/windows/clip5019.png) 
1. Optional step : Click on the ***Authentication*** section and switch to ***Yes*** , if you desire the ***Integrated Windows Authentification (IWA)*** option.  
![Authentication](/img/en/rdm/windows/clip5013.png) 
1. Your Azure Active Directory App Registration is now completed. 
1. Copy the ***App Registration's Application (client) ID*** needed in {{ en.RDM }} in the next step.  
![Application (client) ID](/img/en/rdm/windows/clip5020.png) 

