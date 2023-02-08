---
eleventyComputed:
  title: Install {{ en.DGW }} side by side Method not found
---
When installing {{ en.DGW }} on the same machine as {{ en.DPS }} (side by side installation), this error can trigger in the installation logs.  

Method not found:'Void System.Management.Automation.Runspaces.InitialSessionState.set_ExecutionPolicy(Microsoft.PowerShell.ExecutionPolicy)'.  

## Solution
As {{ en.DGW }} requires at least PowerShell version 5.1, please update PowerShell to that version to fix the issue. Then start over the {{ en.DGW }} installation.
