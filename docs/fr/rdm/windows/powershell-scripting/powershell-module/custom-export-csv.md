---
title: Export personnalisé en format CSV
---
De nombreux clients demandent un export personnalisé qui contiendrait des champs spécifiques. 

## Paramètres 

Voici un script qui peut être utilisé pour générer des URL pour notre nouveau gestionnaire de protocole Web. Nous générons un fichier csv qui contient le nom et l&apos;URL.  

```powershell
## get the data source ID, note that the "Create Web Url" button generates a different ID, but both are accepted
$dsid = Get-RDM-DataSource | where {$_.IsCurrent -eq "X"} | select -expand "ID"
## get the RDP sessions, create a new object with the desired fields.
## Simply append "add-member" commands to include a new field
$s = Get-RDM-Session | 
 where {$_.Session.Kind -eq "RDPConfigured"} |
 foreach {
  new-Object Object |
          Add-Member NoteProperty Name $_.Name –PassThru |
 Add-Member NoteProperty URL "rdm://open?DataSource=$dsid&Session=$($_.ID)" –PassThru 
 }; 
## save to csv, the field names are used as column headers.
$s | export-csv c:\temp\sessions.csv -notypeinformation;
```