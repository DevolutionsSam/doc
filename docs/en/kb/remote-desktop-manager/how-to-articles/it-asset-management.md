---
eleventyComputed:
  title: Using the IT Asset Management feature in {{ en.RDM }}
  description: The IT Asset Management feature can be used to link an asset manager through an entry's properties
  keywords: 
  - inventory
  - asset
---
The IT Asset Management feature can be used to link an asset manager (e.g., BlueTally) through an entry's properties.  
{% snippet icon.badgeInfo %}
Only the ***Session***, ***Remote Management***, ***Miscellaneous***, ***VPN***, ***Synchronizer*** and ***Template*** entry types support this feature for now. The ***IT Asset Management*** entries work differently from the feature.
{% endsnippet %}

## Steps
1. Right-click on an entry and select ***Properties***.
1. Go to ***View*** – ***IT Asset Management***.
1. Select a ***Service type*** in the dropdown.
1. Input the URL to that specific asset.  
![IT Asset Management](/img/en/kb/KB0058.png)
1. Click ***OK*** to save the changes and close the window.
1. In the ***Dashboard***, select the ***IT Asset Management*** tab.
{% snippet icon.badgeInfo %}
The tab will be named according to what was written in the ***IT asset management title field***. If the field is left empty ***BlueTally*** will show (if this service was chosen), or show as ***IT Asset Management***.
{% endsnippet %}  

![IT Asset Management tab](/img/en/kb/KB0059.png)
7. Log in to that service.
