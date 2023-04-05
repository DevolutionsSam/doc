---
title: Batch Edit
---
Use the Edit - Batch Edit or the Batch Edit option in the context menu to change the settings of multiple sessions in one operation. It can be used for example to remove or update all of the credentials of a group of sessions.  
![Batch Edit](/img/en/rdm/mac/clip10346.png) 

You could also change:  

* Host Name 
* Credentials 
* Passwords 
* General Settings 
* Session Type Settings 
* User Specific Settings 
* Security Group 

## Advanced Search 

You can select multiple entries by using Command and mouse click. For a method with a little more power, use our [Advanced Search](/rdm/mac/commands/view/advanced-search/) dialog, accessible from View - Advanced Search . The Advanced Search allows you to select multiple criteria at once.  
![Advanced Search](/img/en/rdm/mac/clip10605.png) 

After you&apos;ve tweaked your criteria to get the results you want, press on Select in Navigation Pane and then Action - Batch Edit . 

## Settings 

### Change Saved Host Name 

![Change Saved Host Name](/img/en/rdm/mac/clip10031.png) 

You can change multiple host name at the same time. 

### Change Saved Credentials 

You can change the configured credentials for multiple sessions in a batch.  
![Change Saved credentials](/img/en/rdm/mac/clip10606.png) 

<table>
	<tr>
		<th>
OPTION 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Use specified credentials 
		</td>
		<td>
Use a specific username, password and domain. 
		</td>
	</tr>
	<tr>
		<td>
Use credential repository 
		</td>
		<td>
Use a Credential entry linked entry which can can be external credentials like KeePass for example. This is very useful for sharing or reusing existing credentials among entries. 
		</td>
	</tr>
	<tr>
		<td>
Use inherited 
		</td>
		<td>
Use the credentials of it&apos;s parent entry or group. 
		</td>
	</tr>
	<tr>
		<td>
Use my personal credentials 
		</td>
		<td>
This allows you to use one set of credentials to replace or emulate the ones from your Windows session. See My Personal Credentials topic. 
		</td>
	</tr>
	<tr>
		<td>
Use {{ en.PVLT }} search 
		</td>
		<td>

Use credentials stored in your [{{ en.PVLT }}](Navigation_PrivateVault) . 
		</td>
	</tr>
	<tr>
		<td>
None 
		</td>
		<td>
Do not use any credentials. 
		</td>
	</tr>
</table>

### Reset All Saved Credentials 

Clear all existing credentials for the selected sessions. 

### Reset All Saved Passwords 

Clear all existing passwords for the selected sessions. 

### Edit Sessions (General Settings) 

![Batch Edit - General Settings](/img/en/rdm/mac/clip10348.png) 

Edit Sessions (General Settings) allows you to change common sessions settings simultaneously. The session can be of any type, because a common set of options are shared among sessions. The following common general settings can be changed:  

* Group/Folder 
* Display 
* Allow show credentials (everybody) 
* Image 
* Description 
* Keywords/Tags 
* VPN 
* Events 
* Logs 
* Advanced Settings tab 

### Edit Sessions (Session Type Settings) 

{% snippet icon.badgeInfo %} 
Edit Sessions Session Type Settings is only available for specific session types like RDP. 
{% endsnippet %}
 
![Batch Edit - Session Type](/img/en/rdm/mac/clip10347.png) 

### Edit Sessions (User Specific Settings) 

User Specific Settings can be modified in a batch if they&apos;re supported by the session type.  
![Batch Edit - User Specific settings](/img/en/rdm/mac/clip10349.png) 

### Edit Sessions (Security Group) 

Use the Edit Sessions (Security Group) option to apply a new security group on multiple sessions.  
![Batch Edit - Security Group](/img/en/rdm/mac/clip10032.png) 


