---
title: DWL via Native Messaging
---
# {{ en.TOPICTITLE }}
{{ en.DWL }} can work without HTTP(S) by using native messaging. Here are the steps:
1. In your browser, click on the {{ en.DWL }} extension icon and click on the ***Settings*** button.
1. Under the ***Data sources*** section, click ***{{ en.RDM }}***
1. Go to the ***Advanced*** tab and check the ***Enable native messaging*** option.  
![KB4790.png](/img/en/kb/KB4790.png)
1. Click ***Save***
1. In {{ en.RDM }} , go to ***File – Options – Browser Extensions – Advanced***
1. Check the ***Enable native messaging*** option and uncheck the ***Enable Http listener*** option.  
![KB4791.png](/img/en/kb/KB4791.png)
1. Click ***OK*** to save your changes.
1. Go to your {{ en.RDM }} installation folder. It is installed by default in C:\Program Files\Devolutions\Remote Desktop Manager
1. Open the com.devolutions.rdmnativemessaging.json file.
1. Copy the following code in the file and save it:
```
{
&#160;&quot;name&quot;: &quot;com.devolutions.rdmnativemessaging&quot;,
&#160;&quot;description&quot;: &quot;Devolutions Web Login&quot;,
&#160;&quot;path&quot;: &quot;RemoteDesktopManager.NativeMessagingHost.exe&quot;,
&#160;&quot;type&quot;: &quot;stdio&quot;,
&#160;&quot;allowed_origins&quot;: [
&quot;chrome-extension://neimonjjffhehnojilepgfejkneaidmo/&quot;,
&quot;chrome-extension://ddloeodolhdfbohkokiflfbacbfpjahp/&quot;
&#160;]
}
```
11. Open the ***Registry Editor*** of your desktop.
1. Go to HKEY_LOCAL_MACHINE\SOFTWARE\Google\Chrome\NativeMessagingHosts
1. Verify that the com.devolutions.rdmnativemessaging key exists at this location. If not, create one with the same name.
1. Modify the default String Value data with the value being the complete path to the com.devolutions.rdmnativemessaging.json file. By default, it is C:\Program Files\Devolutions\Remote Desktop Manager\com.devolutions.rdmnativemessaging.json
1. Go to HKEY_CURRENT_USER\Software\Google\Chrome\NativeMessagingHosts
1. Verify that the com.devolutions.rdmnativemessaging key exists at this location. If not, create one with the same name.
1. Modify the default String Value data with the value being the complete path to the com.devolutions.rdmnativemessaging.json file. By default, it is C:\Program Files\Devolutions\Remote Desktop Manager\com.devolutions.rdmnativemessaging.json
1. Restart your {{ en.RDM }}
1. Restart {{ en.DWL }} (it can be restarted by deactivating and activing it in the ***Manage extensions*** option of the browser).
