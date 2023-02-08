---
title: OpenVPN Losses Connection at Launch
---
{% snippet icon.badgeCaution %}
Note that for OpenVPN to work properly, you will need version 11.15.0.0 of the OpenVPN GUI.
{% endsnippet %}  

OpenVpn keeps losing the VPN connection when another VPN opens in {{ en.RDM }}
## Solution
In order for this to work, the configuration file path must be the same in {{ en.RDM }} and OpenVPN GUI.  

Also the ***Allow multiple connections*** option must be enabled in ***File - Options - Types - VPN***  
![KB4626.png](/img/en/kb/KB4626.png)
