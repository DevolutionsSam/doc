---
eleventyComputed:
  title: Launch an RDP Session in a Web Client
  description: Since version 2023.1.3.0 of {{ en.DVLS }}, it is possible to launch RDP connections directly from the browser.
  keywords:
  - RDP
  - web client
---
Since version 2023.1.3.0 of {{ en.DVLS }}, it is possible to launch RDP connections directly from the browser.

{% snippet icon.badgeInfo %}
Based on [IronRDP](https://github.com/Devolutions/IronRDP) (Rust implementation of the RDP protocol) and its web assembly component, the web client, passing through a Devolutions Gateway, ensures a secure communication using the protocol directly. No conversion of packages or images takes place, which ensures very good performance.
{% endsnippet %} 

{% snippet icon.badgeCaution %}
This feature is still under development. Thus, it is only possible to see a preview of the RDP session for the moment: you cannot interact with it. The clipboard is not supported and it is not yet possible to send files to the server. Rest assured that this is a temporary situation and that we are working towards a fully functional web RDP client. Learn about the <a href="#currently-supported-features">currently supported features</a>.
{% endsnippet %}

## Requirements

In order to use this feature, certain requirements must be met, namely:  
* Have a [{{ en.DGW }}](/server/dgw/server-configuration/) version 2023.1 or later.
* Have a [{{ en.DVLS }}](/server/installation/upgrade-server/) version 2023.1.3 or later.
* Have an <a href="#rdp-session-configuration">RDP type connection</a> with:
  * a Gateway type VPN configured.
  * no mandatory session recording.
* Have the ***View password*** permission if you are the one to use the session.

### RDP Session Configuration

Follow the steps below to properly configure your RDP session to launch it in a browser:

{% snippet icon.badgeInfo %}
The steps below assume that you already have an RDP session entry. If you have not yet created it and want to learn how, see [Create Entries Manually](/server/web-interface/vault/entries/create-entries-manually/).
{% endsnippet %} 

1. In the {{ en.DVLS }} web interface, go to the ***Properties*** of your RDP entry.
1. In the ***VPN/SSH/Gateway*** section, select ***{{ en.DGW }}*** in the ***VPN type*** drop-down list.
![VPN/SSH/Gateway – VPN type – {{ en.DGW }}](/img/en/kb/KB2220.png)
1. In the ***Connect*** drop-down list, select ***Connect if unable to pin/port scan***.
![VPN/SSH/Gateway – Connect – Connect if unable to pin/port scan](/img/en/kb/KB2221.png)
1. Under ***Settings***, select the ***{{ en.DGW }}*** to use for this connection, then click on ***Check Health*** to make sure the Gateway is functional. Its version must be 2023.1 or later.
![VPN/SSH/Gateway – Settings – {{ en.DGW }}](/img/en/kb/KB2222.png)
1. In the ***Session Recording*** section, make sure the ***Mode*** is **not** set to ***Required***.
![Session Recording – Mode](/img/en/kb/KB2223.png)
{% snippet icon.badgeInfo %}
At the moment, the web client does not support session recording. However, we are working on adding this feature in a future version.
{% endsnippet %}  

6. Click ***Update*** to save your changes.

## Launching the Connection

Once all the conditions are met, you can press the ***Open in Web Client (Preview)*** button to launch the connection from the web client.

![Open in Web Client (Preview)](/img/en/kb/KB2163.png)

A new browser tab should open and your session should start.

![RDP Session Opened in a Web Client](/img/en/kb/KB2224.png)

{% snippet icon.badgeHelp %}
If the connection does not work, check the <a href="#requirements">Requirements</a> again or visit [RDP Web Client Not Showing](/kb/devolutions-server/troubleshooting-articles/rdp-web-client-not-showing/).
{% endsnippet %}

### Currently Supported Features

This feature is still under development. The tools menu in the RDP web interface contains what is currently supported.

![Currently Supported Features](/img/en/kb/KB2225.png)

<table>
	<tr>
		<th>
Icon
		</th>
		<th>
Option 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
<img src="/img/en/kb/Icons/fullscreen.png" alt="!!fullscreen.png">
		</td>
		<td>
Full screen 
		</td>
		<td>
Displays the content of the session making sure to always occupy the maximum space on the screen. 
		</td>
	</tr>
	<tr>
		<td>
<img src="/img/en/kb/Icons/smallscreen.png" alt="!!smallscreen.png">
		</td>
		<td>
Fit to screen (default) 
		</td>
		<td>
Adapts the size to best fit the available space so that the entire session is always visible. 
		</td>
	</tr>
	<tr>
		<td>
<img src="/img/en/kb/Icons/screen.png" alt="!!screen.png">
		</td>
		<td>
Real size 
		</td>
		<td>
Conforms to the resolution of the target host. 
		</td>
	</tr>
	<tr>
		<td>
<img src="/img/en/kb/Icons/windows.png" alt="!!windows.png">
		</td>
		<td>
Windows key 
		</td>
		<td>
Sends the signal of the Windows key (however, the key must also work). 
		</td>
	</tr>
	<tr>
		<td>
<img src="/img/en/kb/Icons/gear.png" alt="!!gear.png">
		</td>
		<td>
Ctrl+Alt+Del 
		</td>
		<td>
Sends the command to the host system. 
		</td>
	</tr>
</table>

For the moment, the following features are not supported:
* Copy/Paste
* Lock keys like Caps Lock and Num Lock (synchronized between the client and the host)
* Basic keyboard support
* Basic mouse support (4 buttons and scroll)
