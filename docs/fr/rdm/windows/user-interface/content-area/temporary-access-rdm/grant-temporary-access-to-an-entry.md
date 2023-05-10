---
eleventyComputed:
  title: Accorder un accès temporaire à une entrée dans {{ fr.RDM }}
---
{% snippet icon.badgeInfo %} 
Si une demande d'accès temporaire a été faite dans {{ fr.RDM }} à partir d'une base de données {{ fr.PHUB }} , le processus d'autorisation doit être effectué dans {{ fr.PHUB }} . Consultez notre rubrique [Accorder un accès temporaire à une entrée dans {{ fr.PHUB }} Business](/fr/hub/web-interface/hub-overview/temporary-access-hub-business/grant-temporary-access-to-an-entry/) . 
{% endsnippet %}
 
La fonction d' ***Accès temporaire*** permet aux utilisateurs de demander une élévation temporaire de leurs permissions pour une entrée spécifique. L'autorisateur doit alors approuver ou refuser la demande. 

{% snippet icon.badgeInfo %} 
Lorsque vous utilisez une source de données {{ fr.RDMS }} , Microsoft SQL Server ou Microsoft Azure SQL, vous devez d'abord [Activer l'accès temporaire](/fr/kb/remote-desktop-manager/how-to-articles/enable-temporary-access/) dans {{ fr.RDM }} . 
{% endsnippet %}
 
Pour apprendre comment afficher les demandes en attente, consultez la section [Afficher les demandes d'accès temporaire](#afficher-les-demandes-daccès-temporaire) . 

Pour apprendre comment répondre à une demande, consultez la section [Approuver/refuser les demandes d'accès temporaire](#approuverrefuser-les-demandes-daccès-temporaire) . 

### Afficher les demandes d'accès temporaire 

Pour afficher toutes vos demandes passées et actuelles, vous devez utiliser la boîte ***Demandes d'accès en attente*** dans le ***Tableau de bord*** pour ouvrir la fenêtre ***Demandes d'accès temporaire*** .  
![Tableau de bord – Demandes d'accès en attente](/img/fr/rdm/windows/RDMWin2124.png) 

Dans la fenêtre ***Demandes d'accès temporaire*** , vous pouvez voir toutes les demandes d'accès temporaire et les trier par ***Statut*** , ***Nom d'utilisateur*** , ***Source de données de l'utilisateur*** , ***Entrée*** , ***Action*** , ***Date*** , ***Durée demandée*** , ***Durée de l'autorisation*** , ***Nom d'utilisateur de l'autorisateur*** ou ***Compte utilisateur connecté de l'autorisateur*** .  
![Afficher les demandes d'accès temporaire](/img/fr/rdm/windows/RDMWin2125.png) 

Il est également possible d'afficher uniquement certaines demandes en utilisant le menu déroulant ***Statut*** ou avec la barre de filtre au haut de la fenêtre.  

Le bouton ***Afficher les messages*** vous permet de visualiser le ***Message de la demande*** et le ***Message d'autorisation*** d'une demande spécifique.  
![Messages des demandes](/img/fr/rdm/windows/RDMWin2127.png) 

Enfin, en cliquant sur les boutons ***Approuver*** et ***Refuser*** , vous ouvrez la fenêtre ***Réponse à la demande d'accès temporaire*** qui est décrite dans la [section suivante](#approuverrefuser-les-demandes-daccès-temporaire) . 

### Approuver/refuser les demandes d'accès temporaire 

{% snippet icon.badgeInfo %} 
Lorsque vous utilisez des sources de données Microsoft SQL Server ou Microsoft Azure SQL, si vous voulez que les utilisateurs reçoivent automatiquement un courriel les informant de votre réponse, vous devez d'abord [Activer les notifications d'accès temporaire](/fr/kb/remote-desktop-manager/how-to-articles/enable-temporary-access/) dans {{ fr.RDM }} . 
{% endsnippet %}
 
Pour répondre à une demande, vous devez ouvrir la fenêtre ***Réponse à la demande d'accès temporaire*** . Il y a deux façons d'y accéder.  

La première option consiste à utiliser la boîte ***Demandes d'accès en attente*** (voir image ci-dessous) dans l'onglet ***Aperçu*** de votre ***Tableau de bord*** . En cliquant sur la coche verte (approuver la demande) ou le "X" rouge (refuser la demande) à côté d'une demande, vous ouvrirez la fenêtre ***Réponse à la demande d'accès temporaire*** .  
![Demandes d'accès en attente](/img/fr/rdm/windows/RDMWin2128.png) 

La deuxième option vous demande de passer par la boîte ***Demandes d'accès en attente*** décrite dans la [section précédente](#afficher-les-demandes-daccès-temporaire) . Quelle que soit la façon dont vous choisissez d'accéder à la fenêtre de réponse, le résultat sera le même.  
![Réponse à la demande d'accès temporaire](/img/fr/rdm/windows/RDMWin2126.png) 

Cette vue est divisée en deux sections :  

* La section ***Demander des infos*** contient les informations à propos de la demande de l'utilisateur. Puisque cela a été fait du côté de l'utilisateur, les champs de cette section ne peuvent pas être modifiés. 
* La section ***Paramètres de la réponse*** vous permet de modifier la durée de l'accès temporaire spécifiée par l'utilisateur. Il est également possible de rédiger un court message à l'intention de l'utilisateur pour leur expliquer votre décisions, mais cela reste facultatif. 

Cliquer sur le bouton ***Envoyer la réponse*** permet d'approuver ou de refuser la demande, en fonction de ce que vous avez sélectionné précédemment. Une fenêtre de confirmation s'affiche, que vous pouvez faire disparaître en cliquant sur ***OK*** . 

{% snippet icon.badgeInfo %} 
Pour en apprendre davantage sur l'expérience de l'utilisateur final dans {{ fr.RDM }} , consultez notre rubrique [Demander un accès temporaire à une entrée dans {{ fr.RDM }}](/fr/rdm/windows/user-interface/content-area/temporary-access-rdm/request-temporary-access-to-an-entry/) . 
{% endsnippet %}
 

