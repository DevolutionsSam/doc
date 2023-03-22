---
title: Create and Invite Users
---
Create and invite ***Users*** to your {{ en.PHUB }} Business with their email address.  

{% snippet icon.badgeCaution %} 
If your {{ en.PHUB }} Business is configured with SSO Authentication Azure AD Office 365 credentials, follow the specific process for inviting ***Users*** in [this topic](HUB_Invite_Users_Groups_SSO) . 
{% endsnippet %}
 
{% snippet icon.badgeCaution %} 
We strongly recommend that you invite at least one other administrator. Learn how in [this topic](/hub/web-interface/hub-overview/administration/management/users/administrator-invite/) . 
{% endsnippet %}
 
### Invite users 
1. Go to ***Administration – Users*** . 
1. Click ***Add Users*** .  
![Hub4181.png](/img/en/hub/Hub4181.png) 
1. Type the ***User*** &apos;s email address. 
{% snippet icon.badgeInfo %} 
It is possible to paste a list of email addresses of ***Users*** that will be part of the same [User Groups](/hub/web-interface/hub-overview/administration/management/user-groups/) . Each email address is required to be separated by a semicolon (;) or a comma (,). 
{% endsnippet %}
 
4. Press ***Enter*** . 
{% snippet icon.badgeInfo %} 
This step will validate if the user has a {{ en.DA }} .  

* If yes, it will link the account to {{ en.PHUB }} Business and the user will receive an invitation email. 
* If not, it will automatically create a {{ en.DA }} with a ***Temporary Password*** , which you can choose how to handle. You can manage how ***Temporary Passwords*** are handled in ***Administration – System Settings – General*** . 
{% endsnippet %}
 

![Hub4182.png](/img/en/hub/Hub4182.png)  

5. Click ***Next*** . 
1. Select additional ***Options*** .  
![Hub4183.png](/img/en/hub/Hub4183.png) 
1. Click ***Next*** . 
1. Assign ***User Groups*** . 
{% snippet icon.badgeInfo %} 
***User Groups*** need to be defined beforehand as a custom group in {{ en.PHUB }} . For more information, see [User Groups](/hub/web-interface/hub-overview/administration/management/user-groups/) . 
{% endsnippet %}
 

![Hub4184.png](/img/en/hub/Hub4184.png)  

9. Click ***Send Invite*** .  

{{ en.PHUB }} will send an email with essential information to the invited users; the link to access the {{ en.PHUB }} Business, the invitation ID, and the key. 

