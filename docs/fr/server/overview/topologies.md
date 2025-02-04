---
title: Topologies
keywords:
- high availability
- load balancing
- topology
---
Les instances de {{ fr.RDMS }} peuvent être installées selon différentes topologies. Voici différents exemples de topologie :  

## Topologie de serveur unique  

{{ fr.RDMS }} et le serveur SQL peuvent être installés sur la même machine pour les besoins d'une équipe allant jusqu'à 20 utilisateurs. Avoir {{ fr.RDMS }} et le serveur SQL sur la même machine peut causer des problèmes de performance si l'on dessert plus que 20 utilisateurs.  

![Installation d'un serveur unique](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp4010.png) 

## Topologie de base recommandée  

Une topologie de base recommandée consiste en deux serveurs, un pour {{ fr.RDMS }} et l'autre pour la base de données SQL. En procédant ainsi, les ressources de la machine sont toutes dédiées à l'application. Cela garantit une meilleure performance que l'installation de {{ fr.RDMS }} et le serveur SQL sur la même machine.  

![Topologie de base](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp4011.png) 

## Topologie de haute disponibilité  

### Serveurs SQL seulement  

Pour garder la base de données hautement disponible, la mise en miroir de la base de données, qui consiste à répliquer les données dans un serveur miroir, se révèle utile. Le serveur miroir est toujours prêt à prendre la relève en cas de défaillance du serveur principal. Ceci garantit que {{ fr.RDMS }} accède toujours à la source de données de façon transparente pour les utilisateurs de {{ fr.RDM }} .  

![Topologie de haute disponibilité](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp4012.png) 

## Topologie de type équilibrage de charge  

Pour garantir des performances maximales de {{ fr.RDMS }} , il peut être déployé dans une topologie de type équilibrage de charge telle qu'elle est illustrée dans l'image ci-dessous. Cela peut être autant un système d'équilibrage de charge physique que logiciel.  

![Topologie de type équilibrage de charge](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp4013.png) 

## Basculement manuel d'une instance de ## {{ fr.RDMS }}  

Pour les clients qui ne désirent pas se procurer un équilibreur de charge, il est possible de simplement installer deux instances de {{ fr.RDMS }} sur deux serveurs Web distincts, puis de les rediriger vers la même base de données SQL Server. En enregistrant les deux instances en tant que sources de données séparées dans l'application cliente, les utilisateurs peuvent basculer entre les serveurs en cas de panne. 

![Basculement manuel avec deux {{ fr.DVLS }}](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp4014.png) 
