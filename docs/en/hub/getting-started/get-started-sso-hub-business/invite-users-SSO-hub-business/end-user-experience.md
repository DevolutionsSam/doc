---
eleventyComputed:
  title: End User Invitation Experience for SSO in {{ en.PHUB }} Business
description: Users that are invited to join Hub Business receive an email from their administrator.
keywords:
- Office 365
- Office365
- Microsoft
- authentication
- private key
---
{% youtube 'EJgx-xLMNc0' %}  

Users that are invited to join {{ en.PHUB }} Business receive this email from their administrator.  
![Invitation Email](/img/en/hub/Hub4146.png)
*Invitation Email*{.caption}  
1. Access the {{ en.PHUB }} Business URL link. 
1. Log in using the ***Sign in with Microsoft*** button.  
![Sign in with Microsoft](/img/en/hub/Hub4147.png) 
*Sign in with Microsoft*{.caption}  

{% snippet icon.badgeInfo %} 
New users accessing {{ en.PHUB }} Business through Azure AD sign in will go through this configuration if they do not have a {{ en.DA }}. Since you do not want the user to define a password for this account, you need to have a way to store the ***Private Key***. It is usually kept with the password account. This special and unique key for each user is needed when the user changes device or browser. On a daily basis, the device and browser recognize the current user, but not a new one.  

This is why the user needs to store this ***Private Key*** on the mobile application ***Devolutions Workspace***. It will be much more convenient for the user to do a push notification to accept the new device or browser. 
{% endsnippet %}
 
![Store Your Private Key](/img/en/hub/Hub4148.png)
*Store Your Private Key*{.caption}  

* We strongly recommend the first method with the mobile application ***Devolutions Workspace*** . Follow the steps [here](#devolutions-workspace-method).  
* The second best option is to download and print the ***Private Key*** as a ***QR Code*** . For this method, continue [here](#qr-code-method).  
* As a last resort and if the user does not have a mobile device, a password can be created to add the ***Private Key*** to the {{ en.DA }}.   

## Devolutions Workspace Method 

1. Download on a mobile device the ***Devolutions Workspace*** application. 
1. Click ***Continue***.  
![Download Devolutions Workspace](/img/en/hub/Hub4150.png)
*Download Devolutions Workspace*{.caption} 
3. In the ***Devolutions Workspace*** application, access the ***Authenticarot*** space, then click ***Add***. 
1. Back on the browser page, click on ***Mobile App***. 
1. Scan the QR code in ***Devolutions Workspace***.  
![Scan this QR code in Devolutions Workspace](/img/en/hub/Hub4151.png)
*Scan this QR code in Devolutions Workspace*{.caption}  
6. Wait for the account and the authenticator to pair. Once this setup is completed, it will provide access to the {{ en.PHUB }}.   
![Pairing](/img/en/hub/Hub4152.png)
*Pairing*{.caption}  

You can now skip to the [First Access to {{ en.PHUB }}](#first-access-to--enphub) section. 

## QR Code Method 

1. Select the ***QR Code*** option. 
1. Click ***Download*** to save the ***Private Key*** as a QR code document on your computer. You can also ***Print*** a copy.  
![Download or Print your Private Key as a QR Code](/img/en/hub/Hub4155.png)
*Download or Print your Private Key as a QR Code*{.caption}  
3. Click ***Continue***.  

Here is an example of the content of the PDF file. It will be named *devolutions-qr-code.pdf*. Please make sure to keep it in a safe place.  
![QR Code Example](/img/en/hub/Hub4162.png)
*QR Code Example*{.caption}  

You are now ready to continue to the next section. 

## First Access to {{ en.PHUB }} 

1. Since the user was invited with an invitation ID and key, click ***Yes***.  
![Approval required](/img/en/hub/Hub4153.png)
*Approval required*{.caption}  
2. Since the {{ en.PHUB }} was opened from your email, ***Invitation id*** and ***Invitation key*** should be autofilled. If that is not the case, copy the code and paste it in the appropriate fields.
![Invitation id and Invitation key](/img/en/hub/Hub4154.png) 
*Invitation id and Invitation key*{.caption}  
3. Click ***Unlock***.  

The user in now connected and is ready to use {{ en.PHUB }} Business. 
