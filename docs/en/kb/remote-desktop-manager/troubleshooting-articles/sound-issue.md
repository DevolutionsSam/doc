---
eleventyComputed:
  title: RDM {{ en.MAC }} Sound Issue
---
When launching an RDP entry, who is set up with approval for sound, {{ en.RDM }} macOS users cannot hear on the remote even though Windows detects remote audio.
### Solution
A computer policy setting in Windows needs to be changed.  

1. Open the Windows ***Local Group Policy Editor***
1. Go to ***Computer Configuration - Administrative Templates - Windows Components - App Privacy***
1. Enable ***Let Windows apps make phone calls***
1. Set it to ***User is in control*** and save.  

{% snippet icon.badgeCaution %}
The ***Force Allow*** setting will not work.
{% endsnippet %}  

![!!KB4941.png](/img/en/kb/KB4941.png)
