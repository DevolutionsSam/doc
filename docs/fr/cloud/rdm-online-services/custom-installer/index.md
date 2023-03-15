---
title: Installateur personnalisé
order: 10
---
Le ***Gestionnaire d'installation personnalisé*** permettra de générer et de télécharger des paquets d'installation personnalisés pour {{ fr.RDM }} Windows. 
{% snippet icon.shieldWarning %} 
Le ***Gestionnaire d'installation personnalisé*** téléverse un fichier de configuration vers nos services en ligne. Vous ne devez pas utiliser ce service à des fins de redistribution de mots de passe de vos sources de données. 
{% endsnippet %}
 
{% snippet icon.badgeNotice %} 
Pour des raisons de stabilité, dans les grandes bases d'installation, la dernière version officielle n'est pas disponible pour le service d'installateur personnalisé pendant une période indéterminée, le temps que nous nous assurions qu'aucun problème majeur n'est présent. Nous vous recommandons d'utiliser cette période avec votre organisation pour effectuer des tests d'intégration sur quelques postes de travail avant de mettre à niveau l'ensemble de votre équipe. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Vous pouvez stocker et créer jusqu'à six paquets de fichiers de configuration d' ***Installateur personnalisé*** dans votre {{ fr.DA }} . 
{% endsnippet %}
 
### Paramètres 

Le ***Gestionnaire d'installation personnalisé*** réplique les paramètres l'instance de {{ fr.RDM }} utilisée pour créer le paquet et les stocke dans le paquet pour la distribution. Vous avez le contrôle sur les catégories de paramètres que vous redistribuez, mais pas sur les paramètres discrets. Il peut être souhaitable de disposer d'une installation de {{ fr.RDM }} utilisée spécifiquement pour créer le paquet d'installation.  

Vous pouvez aller dans ***Fichier –*** ***{{ fr.DA }}*** ***– Outils*** pour accéder au ***Gestionnaire de paquets d’installation personnalisés*** .  
![Fichier – Compte Devolutions – Gestionnaire de paquets d'installation personnalisés.png](/img/fr/cloud/Cloud4060.png)  
Veuillez consulter notre [guide de création d'un paquet d'installation](https://helprdm.devolutions.net/fr/installation_custominstallerservice.html) .  

Si le paquet a déjà été généré, vous pouvez le télécharger directement depuis le portail comme décrit dans [Télécharger le paquet de l'installateur personnalisé](/fr/cloud/rdm-online-services/custom-installer/download-custom-installer/) . 

