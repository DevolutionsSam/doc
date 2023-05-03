---
title: Gestionnaire RDP/RemoteApp local
---
Les paramètres RDP locaux et les paramètres RemoteApp sont disponibles dans ***Outils - Plus d&apos;outils - Local*** RDP/RemoteApp Manager .  

Si vous exécutez {{ fr.RDM }} sur une machine Windows Server 2008, la console TS RemoteApp MMC sera lancée.  

Si vous exécutez sous Windows Vista, la console RemoteApp intégrée à {{ fr.RDM }} sera lancée, car la fonctionnalité RemoteApp est disponible dans Windows 7, mais pas la console MMC. Par conséquent, au lieu d&apos;avoir à modifier les entrées de registre requises, vous pouvez utiliser {{ fr.RDM }} RemoteApp Manager. 

## Paramètres 

![Local RDP/RemoteApp Manager](/img/fr/rdm/windows/clip11350.png) 

### Paramètres du remote desktop 

Autorisez ou interdisez les connexions à distance à votre ordinateur.  
![Propriétés système](/img/fr/rdm/windows/clip10418.png) 

### Bureau à distance 

Vous permet de modifier le port RDP local. 

{% snippet icon.badgeInfo %} 
{{ fr.RDM }} doit être exécuté en tant qu&apos;administrateur pour modifier les paramètres de Bureau à distance. 
{% endsnippet %}
 
![Paramètres de Bureau à distance](/img/fr/rdm/windows/clip10419.png) 

### Paramètres de RemoteApp 

Vous devez activer RemoteApp pour pouvoir créer un nouveau paramètre RemoteApp. 

{% snippet icon.badgeInfo %} 
{{ fr.RDM }} doit être exécuté en tant qu&apos;administrateur pour modifier les paramètres de RemoteApp. 
{% endsnippet %}
 
![Paramètres RemoteApp Manager](/img/fr/rdm/windows/clip10420.png) 

### Paramètres UDP 

Activer ou désactiver UDP (User Datagram Protocol) localement sur votre ordinateur. UDP est un protocole de communication qui offre une quantité limitée de services lorsque des messages sont échangés entre des ordinateurs d&apos;un réseau qui utilise le protocole Internet (IP).  
![Paramètres UDP est désactivé](/img/fr/rdm/windows/clip11351.png) 


## Utilisation 

1. Cliquer sur ***Déployer un nouveau RemoteApp*** .  
![Déployer un nouveau RemoteApp](/img/fr/rdm/windows/clip10422.png) 
1. Configurer le RemoteApp.  
![!!clip10423.png](/img/fr/rdm/windows/clip10423.png) 
1. Créer une nouvelle session RDP et sélectionner l&apos;onglet ***Programmes*** . Activer l&apos;option ***Utiliser RemoteApp*** , puis entrer le nom du programme RemoteApp et enregistrer la session. Lorsque la session est lancée, la RemoteApp s&apos;exécute localement.  
![RDP  - Général - Programmes](/img/fr/rdm/windows/clip10812.png) 

