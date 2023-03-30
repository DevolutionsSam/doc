---
eleventyComputed:
  title: Ajouter une entrée de site Web dans {{ fr.PHUB }} Business par {{ fr.DWL }}
---
{% snippet icon.badgeInfo %} 
Cette rubrique explique comment créer une entrée à partir de vos identifiants de site Web existants. Si vous n 'avez pas encore créé de compte pour le site Web, consultez plutôt notre rubrique sur la façon de [Créer un compte de site Web avec {{ fr.DWL }}](/fr/hub/dwl/using-devolutions-web-login/using-dwl-with-hub-business/create-account-website-hub-business/) . 
{% endsnippet %}
 
Des entrées de site Web peuvent être créées avec {{ fr.DWL }} dans {{ fr.PHUB }} Business. Ce type d 'entrée est utile pour enregistrer vos identifiants de connexion afin que vous n 'ayez plus à les mémoriser. Ces entrées sont également utilisées par {{ fr.DWL }} pour reconnaître un site Web et [récupérer vos identifiants](/fr/hub/dwl/using-devolutions-web-login/using-dwl-with-hub-business/retrieve-credentials-hub-business/) .  

La principale façon d 'y parvenir est de se connecter avec succès au site Web. {{ fr.DWL }} proposera automatiquement d 'enregistrer vos identifiants dans une nouvelle entrée de site Web dans {{ fr.PHUB }} Business. Il est également possible de créer manuellement l 'entrée de site Web.  

Suivez les instructions dans les sections ci-dessous pour apprendre à ajouter une entrée de site Web :  

* [Ajouter automatiquement une entrée de site Web](#ajouter-automatiquement-une-entrée-de-site-web)  
* [Ajouter manuellement une entrée de site Web](#ajouter-manuellement-une-entrée-de-site-web)  

### Ajouter automatiquement une entrée de site Web 

1. Aller à la page de connexion du site Web. Cette page sera différente pour chaque site Web; cette rubrique utilisera le site Web d 'Atlassian comme exemple.  
![Page de connexion](/img/fr/hub/Hub2109.png) 
1. Les sites Web demandent généralement des informations telles qu 'une adresse courriel / un nom d 'utilisateur et un mot de passe. Suivre le processus de connexion du site Web jusqu 'à la connexion à votre compte. 
1. Une fenêtre ***Ajouter un site Web*** de {{ fr.DWL }} apparaîtra dans le coin du navigateur Web.  
![Ajouter un site Web](/img/fr/hub/Hub2101.png) 
1. Saisir un ***Nom*** pour l 'entrée. Le nom par défaut peut être gardé ou modifié, mais il est recommandé qu 'il reflète le contenu de l 'entrée pour la retrouver plus facilement au besoin. 
1. Sélectionner le ***Coffre*** et le ***Dossier*** dans lesquels sauvegarder l 'entrée de site Web. 
1. Cliquer sur ***Enregistrer*** .  

Vos identifiants sont maintenant stockés sécuritairement dans une nouvelle entrée de site Web dans {{ fr.PHUB }} Business. La prochaine fois que vous vous connecterez à ce compte, {{ fr.DWL }} le détectera et récupérera vos identifiants. Suivez nos instructions étape par étape pour [récupérer vos identifiants](/fr/hub/dwl/using-devolutions-web-login/using-dwl-with-hub-business/retrieve-credentials-hub-business/) .  

### Ajouter manuellement une entrée de site Web 

1. Aller à la page de connexion du site Web. Cette page sera différente pour chaque site Web; cette rubrique utilisera le site Web d 'Atlassian comme exemple.  
![Page de connexion](/img/fr/hub/Hub2109.png) 
1. Cliquer sur l 'extension {{ fr.DWL }} dans la barre d 'outils de votre navigateur, puis, dans l 'onglet ***Correspondant*** , cliquer sur le bouton ***Ajouter un site Web*** .  
![Bouton Ajouter un site Web](/img/fr/hub/Hub2111.png) 
1. L 'onglet ***Nouvelle entrée - Site Web*** de {{ fr.DWL }} s 'ouvrira dans votre navigateur.  
![Nouvelle entrée - Site Web (onglet Général)](/img/fr/hub/Hub2090.png) 
1. Saisir un ***Nom*** pour l 'entrée. Le nom par défaut peut être gardé ou modifié, mais il est recommandé qu 'il reflète le contenu de l 'entrée pour la retrouver plus facilement au besoin. 
1. Sélectionner le ***Coffre*** et le ***Dossier*** dans lesquels sauvegarder l 'entrée de site Web. 
1. La liste déroulante ***Hôte*** est définie à ***Personnalisé*** par défaut. Cela permet à {{ fr.DWL }} de spécifier automatiquement l ' ***URL*** dans le champ suivant avec l 'URL de la page de connexion de l ' [étape 1](#ajouter-manuellement-une-entrée-de-site-web) . 
1. La liste déroulante ***Identifiants*** est définie à ***Personnalisé*** par défaut. Cela permet d 'entrer manuellement le ***Nom d 'utilisateur*** , le ***Domaine*** et le ***Mot de passe*** à l 'étape suivante. 
1. Saisir le ***Nom d 'utilisateur*** , le ***Domaine*** et le ***Mot de passe*** qui sont utilisés pour se connecter à ce site Web. Il est possible qu 'il n 'y ait pas de nom de domaine à spécifier; dans ce cas, laisser le champ vide. Également, dépendamment du site Web, le nom d 'utilisateur pourrait être une adresse courriel. 
1. Le ***Type de correspondance*** devrait être défini à ***Par défaut*** et ***{{ fr.DWL }}*** devrait être ***Activé*** . 
1. Cliquer sur ***Enregistrer*** .  

Vos identifiants sont maintenant stockés sécuritairement dans une nouvelle entrée de site Web dans {{ fr.PHUB }} Business. La prochaine fois que vous vous connecterez à ce compte, {{ fr.DWL }} le détectera et récupérera vos identifiants. Suivez nos instructions étape par étape pour [récupérer vos identifiants](/fr/hub/dwl/using-devolutions-web-login/using-dwl-with-hub-business/retrieve-credentials-hub-business/) . 

