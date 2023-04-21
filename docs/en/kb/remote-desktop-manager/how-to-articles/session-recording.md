---
title: Session Recording
description: Session recording provides a record of what a user did while a remote connection was opened in Remote Desktop Manager.
keywords:
- Session Recording
---
Session recording provides a record of what a user did while a remote connection was opened in {{ en.RDM }}. It records one frame per second and creates a video in webm format.

{% snippet icon.badgeInfo %}
Session recording is available in {{ en.RDM }} 2019.1.3.0 and above.
{% endsnippet %}
 
You can configure session recording at the vault, folder or entry level and they can be optional or required. 

{% snippet icon.badgeCaution %}
Session recording is only available in embedded mode.
{% endsnippet %}
 
## Supported Sessions

- Apple Remote Desktop
- Azure Blob Storage
- Chrome
- FTP
- Google Drive
- RDP
- S3
- SCP
- SFTP
- SSH Shell
- Telnet
- VNC
- WebDav

## Configure Session Recording 

1. Open ***Vault Settings*** or ***Properties*** at folder or entry level.
1. In the ***Security*** section, click ***Session Recording***.
1. Choose a ***Mode***.
* ***Inherited***: Setting is inherited from parent folder.
* ***Optional***: User is prompted to record when they open the session. If they decline, the session still opens.
* ***Required***: Recording starts automatically. If there is an issue with recording the session does not open.
* ***Required (When Available)***: Recording starts automatically. If there is an issue with the recording, the session will launch and no recording will be available. 
* ***Never***: Session recording is turned off. 
* ***Root (Default)***: Refers to vault. Default on vault means ***Never***. 
4. Choose the ***Recording*** method. 
{% snippet icon.badgeNotice %} 
Some options are only available with a {{ en.DPS }} data source. 
{% endsnippet %}
 
* ***Inherited***: Setting is inherited from parent folder. 
* ***Local***: The recording files will be saved locally according to the ***Destination*** and ***Filename*** parameters below. 
* ***Remote***: The recording sessions will be managed by the ***Recording Server***. All following options will no longer be available. 
* ***Root (Default)***: Refers to root. 
5. Choose the file ***Destination*** . 
{% snippet icon.badgeInfo %} 
By default, the file saves locally, not in the database.  
We recommend choosing a custom file extension, for example on a shared network. 
{% endsnippet %}
 
* ***Inherited***: Setting is inherited from parent folder. 
* ***Custom***: Paste the file destination path in the ***Destination*** box. 
* ***Root (Default)***: Saves in Local App Data or in the data source folder if you are using a zip file of RDM. 
6. Choose a ***Filename template*** or ***Prompt for name*** when user starts recording. 
* ***Inherited***: Setting is inherited from parent folder. 
* ***Connection Log ID***: Uses a multi-digit and letter identification number. 
* ***Entry Name***: Automatically use the entry name. 
* ***Entry Name + Date/Time***: Automatically use the entry name with the date and time of the recording. 
* ***Root (Default)***: Use the entry name and the date and time of the recording. 
* ***Custom***: Customize the file name. 
  * Choose ***Always prompt for name*** to ask users to name the recording. 
  * Use variables to customize the file name. Click the ***Variables*** button to view more information about available variables for this specific entry. 
![Session Recording](/img/en/kb/KB4993.png) 

Two files are saved after the session is closed. The .webm file is the recording and the .dat is for the {{ en.RDM }} player. 

