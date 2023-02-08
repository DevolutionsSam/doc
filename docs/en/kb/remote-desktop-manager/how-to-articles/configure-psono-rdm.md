---
title: Configure Psono in Remote Desktop Manager
---
Configure and enable users to securely access all of your Psono entries and credentials directly from within {{ en.RDM }}  

{% snippet icon.badgeInfo %}
Psono is integrated in {{ en.RDM }} versions 2022.1 and higher.
{% endsnippet %}  

1. <a href="#psono">Configure Psono</a>
1. <a href="#rdm">Configure Psono in {{ en.RDM }}</a>

### Configure Psono
<a name="psono"></a>

1. Open a web browser and log into your Psono account.
1. Click on your email address and select ***Other***  
![KB4891.png](/img/en/kb/KB4891.png)
1. Click ***Create new API key***  
![KB4892.png](/img/en/kb/KB4892.png)
1. ***Name*** the API key, we suggest {{ en.RDM }}
1. Choose whether to check the ***Secret Restriction?*** box:
* If you check the box, you will need to add a secret to every Psono folder. Follow the topic [Creating secrets](https://doc.psono.com/user/basic/creating-secrets.html#creating-secrets) from Psono for more information.
* If you uncheck the box, you will be provided with an unlimited key that will grant access to all database secrets.  
{% snippet icon.shieldCaution %}
Both options are supported in {{ en.RDM }} ; it all depend on the access level the admin is willing to provide. If you uncheck the secret restriction box, it’s easier to manage but less secure than if you add a secret to every Psono folder.
{% endsnippet %}  

6. Check ***Right to read*** and ***Right to write***
1. Click ***Create***  
![KB4893.png](/img/en/kb/KB4893.png)
1. Click the edit button next to the new API key you created.  
![KB4894.png](/img/en/kb/KB4894.png)
1. You will find in the ***Details*** section the information required for the configuration of {{ en.RDM }}  
![KB4895.png](/img/en/kb/KB4895.png)

### Configure Psono in {{ en.RDM }}
<a name="rdm"></a>

1. In {{ en.RDM }} click ***New entry***
1. Use the search field to locate Psono, click ***OK***  
![KB4899.png](/img/en/kb/KB4899.png)
1. Copy/Paste all the Psono API Key details from your account.
1. Check ***Always prompt with list***  
![KB4896.png](/img/en/kb/KB4896.png)
1. Optional: To allow OTP, click the ***Advanced*** tab and check the ***Allow OPT retrieval*** option.
1. Click ***OK***  

You can now create or edit an entry (e.g., SSH or RDP) and select the Psono entry that was just created. Click ***Select from List*** to choose the actual entry.
