---
title: Groupes de sécurité (Ancien)
---
La gestion des ***Groupes de sécurité (Ancien)*** est disponible dans le menu ***Administration - Groupes de sécurité (Ancien)*** .  

Les groupes de sécurité sont utilisés pour protéger les sessions contre un sous-ensemble d&apos;utilisateurs du système. Attribuez des sessions aux groupes de sécurité, puis contrôlez qui a accès et quel contrôle ils ont sur chaque groupe de sécurité.  

Les groupes de sécurité sont utilisés pour classer les sessions et restreindre l&apos;accès à certains utilisateurs. Il n&apos;y a pas de relation directe entre Active Directory et les groupes de sécurité. Par défaut, chaque session est créée sans groupe de sécurité et est donc visible pour tous les utilisateurs connectés.  

Chaque entrée du volet de navigation peut être assignée à un seul groupe de sécurité. Les meilleures pratiques exigent que vous affectiez des groupes de sécurité à des dossiers de manière à ce que toutes les entrées qu&apos;ils contiennent héritent du même groupe de sécurité.  
![Administration - Groupes de sécurité (Ancien)](/img/fr/rdm/mac/clip4124.png) 

{% snippet icon.badgeInfo %} 
Cette fonctionnalité nécessite une [Source de données avancées](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/) . 
{% endsnippet %}
 
{% snippet icon.shieldWarning %} 
***Toutes les sessions sans groupes de sécurité sont considérées comme publiques, ce qui signifie que toute personne ayant accès à la source de données pourra voir toutes vos entrées.*** 
{% endsnippet %}
 
## Paramètres 

### Créer un groupe de sécurité 

Les groupes de sécurité sont créés à partir du menu ***Administration - Groupe de sécurité*** .  

Les groupes de sécurité de {{ fr.RDM }} sont des conteneurs pour les sessions, pas pour les utilisateurs. Les dossiers sont étroitement liés aux groupes de sécurité, il y a donc un chevauchement d&apos;utilisation. Les points clés sont:  

* La sécurité est héritée: les dossiers et les éléments enfants sont couverts par le groupe de sécurité d&apos;un dossier parent. 
* La sécurité est additive: un groupe de sécurité ajouté à un sous-dossier ne remplace pas le parent, il y ajoute. 
* Un dossier a un seul groupe de sécurité: utiliser des raccourcis pour contourner cette limitation. 

1. Cliquer sur le signe plus pour créer un nouveau groupe de sécurité.  
![Gestion des usagers et de la sécurité - Créer](/img/fr/rdm/mac/clip4125.png) 
1. Une boîte de dialogue de gestion de la sécurité apparaît. Saisir un nom et une brève description de votre nouveau groupe de sécurité.  
![Gestion de la sécurité](/img/fr/rdm/mac/clip4126.png) 
1. Attribuer les autorisations appropriées à chaque utilisateur pour votre groupe de sécurité nouvellement créé.  
![Droits de groupe de sécurité](/img/fr/rdm/mac/clip4127.png) 
1. Les groupes de sécurité peuvent ensuite être attribués aux entrées à l&apos;aide de la fenêtre de propriétés. Chaque entrée peut avoir qu&apos;un seul groupe de sécurité affecté. Pour une maintenance facile, nous vous recommandons d&apos;affecter des groupes de sécurité à des groupes/dossiers, ce qui entraînera les entrées enfants à hériter du groupe de sécurité.  
![Session - Permissions - Groupe de sécurité](/img/fr/rdm/mac/clip4206.png) 

