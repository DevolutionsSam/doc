---
eleventyComputed:
    title: Inviter des utilisateurs pour SSO dans {{ fr.PHUB }} Business
description: Une fois l'authentification unique (SSO) confighurée et activée, invitez vos utilisateurs dans votre Hub en suivant ces étapes.
keywords:
- SSO
- inviter des utilisateurs
- organisation
- authentification
---
Une fois l'authentification unique (SSO) [configurée et activée](HUB_Connect_AzureAD_Office365_Authentification), vous pouvez désormais utiliser cette invitation spécifique pour tous vos utilisateurs.  

Cette méthode enverra un courriel préformaté à tous les destinataires. Il fournira votre URL de {{ fr.PHUB }} Business avec un ID d'invitation et une clé à utiliser.  
{% snippet icon.badgeCaution %} 
L'ID d'invitation et la clé servent à préapprouver l'accès à {{ fr.PHUB }} Business. Ils expirent 7 jours après la date d'envoi. 
{% endsnippet %}  
 
{% snippet icon.badgeInfo %} 
Dans le cadre du processus de création, un {{ fr.DA }} sera créé, car il est obligatoire pour accéder à {{ fr.PHUB }}, mais il ne sera pas nécessaire de définir un mot de passe puisque vos utilisateurs s'authentifieront via Azure AD. 
{% endsnippet %}  
 
## Inviter des utilisateurs de l'organisation 

1. Accéder à ***Administration – Utilisateurs***. Si de nouveaux utilisateurs sont synchronisés depuis le fournisseur, ils seront prêts à être invités. Leur nombre est affiché dans le widget ***Invitations nécessaires***. Cliquer sur ce widget.  
![Invitations nécessaires](/img/fr/hub/Hub4164.png)
*Invitations nécessaires*{.caption}  
2. ***Étape 1 - À partir de l'organisation*** : Sélectionner parmi les utilisateurs suggérés, le cas échéant, puis cliquer sur ***Suivant***.  
![Étape 1 - À partir de l'organisation](/img/fr/hub/Hub2058.png) 
*Étape 1 - À partir de l'organisation*{.caption}  
3. ***Étape 2 - Par courriels*** : Il est possible d'inviter d'autres utilisateurs qui ne sont pas synchronisés, mais qui appartiennent au même fournisseur. Saisir une adresse électronique individuelle ou de groupe, puis cliquer sur ***Suivant***.  

{% snippet icon.badgeInfo %} 
Cela est possible uniquement si l'application d'entreprise dans Azure a l'***Assignation requise*** définie sur ***Non***. Ce paramètre se trouve dans les ***Propriétés*** de l'application d'entreprise. 
{% endsnippet %}  
 
![Étape 2 - Par courriels](/img/fr/hub/Hub2059.png) 
*Étape 2 - Par courriels*{.caption}  
4. ***Étape 3 - Options*** : Sélectionner des ***Options*** pour les utilisateurs, puis cliquer sur ***Suivant***.  
![Étape 3 - Options](/img/fr/hub/Hub2060.png) 
*Étape 3 - Options*{.caption}  
5. ***Étape 4 - Groupes d'utilisateurs*** : Les utilisateurs synchronisés n'ont pas besoin d'être assignés aux ***Groupes d'utilisateurs*** synchronisés. Ils seront ajoutés automatiquement lors de leur connexion. Si vous avez des ***Groupes d'utilisateurs*** personnalisés, vous pouvez leur assigner des utilisateurs.  
{% snippet icon.badgeInfo %} 
Les ***Groupes d'utilisateurs*** personnalisés doivent être définis au préalable dans {{ fr.PHUB }} Business. Pour plus d'informations, voir [Groupes d'utilisateurs](/fr/hub/web-interface/hub-overview/administration/management/user-groups/). 
{% endsnippet %}  
 
![Étape 4 - Groupes d'utilisateurs](/img/fr/hub/Hub2061.png) 
*Étape 4 - Groupes d'utilisateurs*{.caption}  

6. Cliquer sur ***Envoyer une invitation*** au bas de la fenêtre.  

{{ fr.PHUB }} Business enverra un courriel contenant les informations essentielles aux destinataires, incluant l'URL du {{ fr.PHUB }} Business, l'ID d'invitation et la clé.  
{% snippet icon.badgeCaution %} 
Les utilisateurs devront remplir une configuration de {{ fr.DA }}. Consultez notre rubrique [Expérience d'invitation de l'utilisateur final pour SSO dans Hub Business](/fr/hub/getting-started/get-started-sso-hub-business/invite-users-SSO-hub-business/end-user-experience/). 
{% endsnippet %}  
 
{% snippet icon.badgeInfo %} 
Le destinataire fera seulement partie de votre {{ fr.PHUB }} lorsqu'il s'y connectera pour la première fois. Ce n'est qu'alors que vous pourrez le voir dans ***Administration – Utilisateurs***.
{% endsnippet %}  
 
{% snippet icon.badgeInfo %} 
Tout utilisateur qui essaie d'accéder à votre {{ fr.PHUB }} Business avec son URL pour la première fois sans recevoir d'invitation déclenchera une demande d'approbation, seulement s'il est dans le même fournisseur d'identité.  

Un courriel sera envoyé à tous les administrateurs. Il peut être approuvé ou refusé dans ***Administration – Utilisateurs***. 
{% endsnippet %}  
 
## Inviter des utilisateurs ne faisant pas partie du fournisseur d'authentification

Il est possible d'ajouter des utilisateurs à votre Hub Business qui sont hors de votre fournisseur d'authentification.  

{% snippet icon.badgeInfo %} 
Cette option est possible seulement si vous n'activez pas ***Forcer l'authentification unique à tous les utilisateurs***, puisque ces utilisateurs ne font pas partie de votre fournisseur d'authentification.

Suivez les étapes de la rubrique [Créer et inviter des utilisateurs](/fr/hub/web-interface/hub-overview/administration/management/users/create-invite-users/index).
{% endsnippet %} 

