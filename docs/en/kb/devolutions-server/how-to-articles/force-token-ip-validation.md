---
title: Prevent RDM from Disconnecting when Switching Network
description: When switching your computer from wired network to wifi, Remote Desktop Manager will be disconnected from Devolutions Server and you will have to reconnect.
keywords:
- Switching Network
- Public IP
- Token
---
## Scenario 1

When switching your computer from a wired network to wifi, {{ en.RDM }} will be disconnected from {{ en.DPS }} and you will have to reconnect.

## Scenario 2

If you have multiple different public IP addresses, {{ en.RDM }} will not be able to connect to {{ en.DPS }}.

## Solution

{% snippet icon.shieldCaution %}
Disabling the option will decrease the security of the {{ en.DPS }} instance.
{% endsnippet %}

To prevent this behaviour, disable the ***Force token public IP validation*** option in ***Administration – Server Settings – Security***.

![Administration – Server Settings – Security](/img/en/kb/KB8094.png)  
