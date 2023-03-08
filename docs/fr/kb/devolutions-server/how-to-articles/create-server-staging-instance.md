---
title: Créer une instance de test
---
Afin de pouvoir effectuer des essais sur une instance de {{ fr.DPS }} sans altérer les données en production, il devient utile de déployer une instance de test basé sur une copie de l&apos;instance en production.  

Les étapes suivantes décrivent comment créer une instance de test hébergée sur la même machine que l&apos;instance de production. 

## Étapes 

1. Effectuer une sauvegarde complète de la base de données de production. 
1. Restaurer la base de données sous un nouveau nom. 
1. [Exporter les clés de chiffrement](/kb/devolutions-server/how-to-articles/manage-encryption-keys/) de l&apos;instance {{ fr.DPS }} de production si cette étape n&apos;a pas déjà été exécuté. 
1. [Créer une nouvelle instance](https://helpserver.devolutions.net/fr/install_createrdmsinstance.html) dans la console de {{ fr.DPS }}. Nous recommendons de créer l&apos;instance de test à la même version que l&apos;instance de production. 
1. Lors de l&apos;étape concernant la base de données, inscrire les informations en lien avec la copie de base de données créée au point 2. 
1. Fournir, au moment prévu à cet effet, le fichier des clés de chiffrement exportées au point 3.  
![Clés de chiffrement pour base de données existante.png](/img/fr/kb/KB8113.png)
1. Lorsque la création est terminée, faites une copie de sauvegarde de la base de données de test.
1. Enfin, installez toutes les fonctionnalités supplémentaires pour les tester comme le service Scheduler, le Recording Server et le Devolutions Gateway.  

À partir de ce moment, vous pouvez effectuer la mise à jour de la console de {{ fr.DPS }} et mettre à jour l&apos;instance de test. La console est conçue pour supporter les anciennes versions de {{ fr.DPS }}.

## Déplacer {{ fr.DPS }} sur un autre serveur

{% snippet icon.badgeNotice %}
Les instructions ci-haut servent aussi à déplacer l'instance {{ fr.DPS }} sur un autre serveur.
{% endsnippet %}  
{% snippet icon.badgeInfo %}
Il est possible de déconnecter l'ancienne machine de votre domaine et de renommer la nouvelle pour avoir exactement le même nom de machine. Dans ce cas, il n'est pas nécessaire de mettre à jour l'URI d'accès et la source de données {{ fr.DPS }} dans {{ fr.RDM }}
{% endsnippet %}  
{% snippet icon.badgeInfo %}
Si vous prévoyez de migrer la base de données SQL sur un nouveau serveur, cela pourrait être effectué une fois la migration {{ fr.DPS }} terminée. Une fois fait, mettez à jour la configuration de la base de données à partir du {{ fr.DVLSCONSOLE }}.
{% endsnippet %}