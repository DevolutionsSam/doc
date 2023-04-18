---
eleventyComputed:
  title: Devolutions.PowerShell Core Module
  description: The PowerShell module now needs to be downloaded from the PowerShell Gallery. It is no longer included in the {{ en.RDM }} installation package.
  keywords:
  - PowerShell
---
The PowerShell module now needs to be downloaded from the [PowerShell Gallery](https://www.powershellgallery.com/packages/Devolutions.PowerShell/). It is no longer included in the {{ en.RDM }} installation package. This also means that there is no need to install {{ en.RDM }} on a machine to run PowerShell scripts: the module is now sufficient.

{% snippet icon.badgeInfo %}
To connect to an [Advanced Data Source](https://helprdm.devolutions.net/datasources_advanced.html), the account used to connect to the data source must have an assigned {{ en.RDM }} license. The use of an [application key](/server/web-interface/administration/security-management/applications/) with a {{ en.DVLS }} data source does not require a license.
{% endsnippet %}  

## How to Install
* {{ en.RDM }} versions **2023.1 and later**:  
`Install-Module -Name Devolutions.PowerShell`
* {{ en.RDM }} versions **before 2023.1**:  
`Install-Module -Name RemoteDesktopManager`

## Manual Installation
On some machines, it may be required to install the PowerShell module manually. Here are the steps to complete this process:  
* {{ en.RDM }} versions **2023.1 and later**: 
  1. Download the [Devolutions.PowerShell module NUPKG file](https://www.powershellgallery.com/packages/Devolutions.PowerShell/) from the PowerShell Gallery.
  1. Change the file extension to .zip.
  1. Extract the file in C:\Program Files\WindowsPowerShell\Modules\devolutions.powershell\ &lt;version>.
  1. Unblock all newly extracted files.
  ```
  cd c:\program files\WindowsPowerShell\modules\devolutions.powershell\<version>  
  dir * | unblock-file -verbose  
  ```
* {{ en.RDM }} versions **before 2023.1**:  
  1. Download the [RemoteDesktopManager module NUPKG file](https://www.powershellgallery.com/packages/RemoteDesktopManager) from the PowerShell Gallery.
  1. Change the file extension to .zip.
  1. Extract the file in C:\Program Files\WindowsPowerShell\Modules\remotedesktopmanager\ &lt;version>.
  1. Unblock all newly extracted files.
  ```
  cd c:\program files\WindowsPowerShell\modules\remotedesktopmanager\<version>  
  dir * | unblock-file -verbose  
  ```

## Migration of Your Scripts
Once installed, the only required modification is to remove the `Import-Module` command from the scripts used with the old {{ en.RDM }} PowerShell module. As the module is now part of the PowerShell modules installed on the computer, it is no longer necessary to import it into the scripts.  

## Use an Override Configuration (Portable)
By using the cmdlets `Get-RDMPowerShellOverride` and `Set-RDMPowerShellOverride`, it is possible to use another configuration file and an alternate {{ en.RDM }} installation.  

Both properties are optional, and their default values are applied when left empty.  

* OptionFilePath: the full path to the RemoteDesktopManager.cfg file  

Default: %LOCALAPPDATA\Devolutions\RemoteDesktopManager%  

* RemoteDesktopManagerExecutablePath: for the use of `Start-RDMSession` or `Start-RDMProcess`  

Default: %ProgramFiles(x86)%\Devolutions\Remote Desktop Manager\RemoteDesktopManager64.exe  
```
$override = Get-RDMPowerShellOverride  
$override.OptionFilePath = "PathToCfg" # C:\RemoteDesktopManager\2023.1\config\RemoteDesktopManager.cfg  
$override.RemoteDesktopManagerExecutablePath = "Path to desired RDM version" # C:\RemoteDesktopManager\2023.1\Devolutions.RemoteDesktopManager.Bin.2023.1.11.0\RemoteDesktopManager64.exe  
Set-RDMPowerShellOverride  
# Restart Powershell  
```

## Basic Troubleshooting
Sometimes, several versions of the PowerShell module may appear to be in use. By typing `$env:PSModulePath`, you can then browse to these locations to delete the files RemoteDesktopManager and RemoteDesktopManager.PowershellModule to reinstall from fresh (renaming does not prevent the system from scanning and finding the modules in them).  
```
$env:PSModulePath  

C:\Users\admin\Documents\WindowsPowerShell\Modules;  
C:\Program Files\WindowsPowerShell\Modules;  
C:\windows\system32\WindowsPowerShell\v1.0\Modules  
```

## Query PowerShell Version and the Configuration File in Use
```
Get-RDMInstance  
PS C:\RemoteDesktopManager\2023.1\Devolutions.RemoteDesktopManager.Bin.2023.1.11.0> Get-RDMInstance  
ApplicationVersion OptionFilename  
2023.1.0.14        C:\RemoteDesktopManager\2023.1\config\RemoteDesktopManager.cfg  
```
