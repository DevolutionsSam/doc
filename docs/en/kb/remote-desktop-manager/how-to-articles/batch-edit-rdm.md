---
eleventyComputed:
  title: Batch Edit in {{ en.RDM }}
---
In {{ en.RDM }} , you can edit the properties of multiple entries or folders at once using the ***[Batch Edit](https://helprdm.devolutions.net/commands_batchedit.html)*** or ***Edit (Special Actions)*** features.  

![Edit (Special Actions) and Batch Edit.png](/img/en/kb/KB2104.png)

## Entry/Folder Selection 

Entries and folders to be edited can be selected using the methods below. Choose the one that best suits your needs.

{% snippet icon.badgeNotice %}
Best practice suggests using the ***[Advanced Search](#advanced)*** or ***[Multi Vault Search](#multi)*** methods, as selecting them manually in the ***{{ en.NPANE }}*** is more time consuming and carries the risk of forgetting some entries/folders. This last method can only be recommended if you have only a few selected entries to edit.

Regardless of the method used, it is recommended that only one entry type be selected for each batch edit action.
{% endsnippet %}

{% snippet icon.badgeCaution %}
To edit the information of folders, you MUST go through the ***[Advanced Search](#advanced)*** or ***[Multi Vault Search](#multi)*** methods to select the folders. If you select the folders manually in the ***{{ en.NPANE }}***, you will be editing the information in the child entries of the folders, NOT the information in the folders themselves.
{% endsnippet %}

- [Manual selection](#manual)
- [Advanced Search](#advanced)
- [Multi Vault Search](#multi)

### Manual selection 
<a name="manual"></a>

In {{ en.RDM }}, select all entries/folders manually in the ***{{ en.NPANE }}***. Use **Ctrl+Left-Click** to select them one by one or **Shift+Left-Click** to select a bunch of them at the same time. Note that by selecting a folder, you are editing the information of its child entries and not the information of the folder.

Proceed to the [Batch Edit Actions](#edit) section for the next steps or continue to read about the other selection methods.

### Advanced Search
<a name="advanced"></a>

The ***[Advanced Search](https://helprdm.devolutions.net/advanced_search.html)*** feature allows you to search the currently selected vault.  
![Advanced Search.png](/img/en/kb/KB2108.png) 
1. In {{ en.RDM }}, go to ***View – Search – Advanced Search*** or press the F11 key shortcut. 
1. In the ***Search*** tab of the ***Advanced Search*** window, select and specify criteria to filter your search. Other search parameters are also available in the ***Settings*** tab. When done, click ***Search***. 
{% snippet icon.badgeInfo %}
To filter your search by folder type, you must use the ***Advanced Search*** feature as it is not available in ***Multi Vault Search***. Search by ***Connection type*** and select the folder type in the drop-down list next to it. 
{% endsnippet %}  
 
3. Select the entries/folders you want to edit. To select all of them, click anywhere in the results field and use the Ctrl+A keyboard shortcut. 
1. When your selection is complete, click the ***Select in*** ***{{ en.NPANE }}*** button in the bottom right corner of the window.  

Proceed to the [Batch Edit Actions](#edit) section for the next steps or continue to read about the other selection methods.

### Multi Vault Search
<a name="multi"></a>

![Multi Vault Search.png](/img/en/kb/KB2109.png)  
The [***Multi Vault Search***](https://helprdm.devolutions.net/multi_vault_search.html) feature allows you to search in all the vaults of the selected database at once.

1. In {{ en.RDM }} , go to ***View – Search – Multi Vault Search*** or press the F12 key shortcut. 
1. Select and specify criteria to filter your search, then click ***Search***. 
{% snippet icon.badgeInfo %} 
To filter your search by folder type, you must use the ***[Advanced Search](#advanced)*** feature. 
{% endsnippet %}  
 
3. Select the entries/folders you want to edit. To select all of them, click anywhere in the results field and use the Ctrl+A keyboard shortcut. 
1. When your selection is complete, click the ***Select in {{ en.NPANE }}*** button in the bottom right corner of the window.  

Proceed to the [Batch Edit Actions](#edit) section for the next steps.

## Batch Edit Actions
<a name="edit"></a>

The ***Batch Edit*** feature allows you to perform the following actions:

- Change Saved Host Name / Credentials 
- Reset All Saved Credentials / Passwords 
- Edit Entries (General Settings / Session Type Settings / Security Group Legacy / Asset / User Specific Settings / Local Specific Settings)  

Continue to the [following section](#batchedit) if the ***Batch Edit*** options cover your needs. If not, you can go to [this section](#editspecialactions) to use a custom PowerShell command in ***Edit (Special Actions)***.

### Batch Edit
<a name="batchedit"></a>

1. With your entries selected, go to ***Edit – Batch – Batch Edit*** in the ribbon. Alternatively, you can right-click your entry selection and go to ***Edit – Batch Edit***. 
1. Select one of the editing options from the list for a window to pop up. Note that only options that are relevant to your entry types will be available.  
![Batch Edit Options.png](/img/en/kb/KB2103.png)  
1. In the window, edit the information and parameters of your choice, than save. 
{% snippet icon.badgeInfo %} 
Each editing option displays different information and parameters that can be edited. For a preview of each of them, see our [Batch Edit](https://helprdm.devolutions.net/commands_batchedit.html) topic.
{% endsnippet %}  
 
Your entries/folders have now been modified.

### Edit (Special Actions)
<a name="editspecialactions"></a>

1. With your entries selected, go to ***Home – Clipboard – Copy*** in the ribbon. Alternatively, you can right-click your entry selection and select ***Clipboard – Copy***.  
![Home – Clipboard – Copy.png](/img/en/kb/KB2105.png) 
1. In the ***Copy Options*** window, go to the ***Preview*** tab. 
1. Select all the content of the box, then copy and paste it in a text editor to retrieve the name of the field(s) that you would like to edit in a subsequent step. 
1. In {{ en.RDM }} , close the ***Copy Options*** window, but make sure that you keep your entries selected in the ***{{ en.NPANE }}***. 
1. With your entries still selected, go to ***Edit – Batch – Edit (Special Actions)*** in the ribbon. Alternatively, you can right-click your entry selection and select ***Edit – Edit (Special Actions)***. 
1. In the ***General*** section, select ***Custom PowerShell Command***, then click ***OK***.  
![Special Action Selection.png](/img/en/kb/KB2106.png) 
1. In the box, using the information that you copied in step 3, write your custom PowerShell script. You can use one of these [samples](https://helprdm.devolutions.net/powershell_batchactionssamples.html). 
1. Click ***OK***.  

Your entries/folders have now been modified. 