---
eleventyComputed:
  title: Ajouter une entrée de site Web avec {{ fr.DWL }}
---
{% snippet icon.badgeInfo %} 
Cette rubrique explique comment créer une entrée à partir de vos identifiants de site Web existants. Si vous n&apos;avez pas encore créé de compte pour le site Web, consultez plutôt notre rubrique sur la façon de [Créer un compte de site Web avec {{ fr.DWL }}](/fr/server/dwl/using-devolutions-web-login/create-account-website-dwl/) . 
{% endsnippet %}
 
Des entrées de site Web peuvent être créées avec {{ fr.DWL }} dans {{ fr.DPS }} . Ce type d&apos;entrée est utile pour enregistrer vos identifiants de connexion afin que vous n&apos;ayez plus à les mémoriser. Ces entrées sont également utilisées par {{ fr.DWL }} pour reconnaître un site Web et [récupérer vos identifiants](/fr/server/dwl/using-devolutions-web-login/retrieve-credentials-dwl/) .  

La principale façon d&apos;y parvenir est de se connecter avec succès au site Web. {{ fr.DWL }} proposera automatiquement d&apos;enregistrer vos identifiants dans une nouvelle entrée de site Web dans {{ fr.DPS }} . Il est également possible de créer manuellement l&apos;entrée de site Web.  

## Ajouter une entrée de site Web

### Ajouter automatiquement une entrée de site Web 

1. Aller à la page de connexion du site Web. Cette page sera différente pour chaque site Web; cette rubrique utilisera le site Web d&apos;Atlassian comme exemple.  
![Page de connexion](/img/fr/server/ServerOp2031.png)  
1. Les sites Web demandent généralement des informations telles qu&apos;une adresse courriel / un nom d&apos;utilisateur et un mot de passe. Suivre le processus de connexion du site Web jusqu&apos;à la connexion à votre compte. 
1. Une fenêtre ***Ajouter un site Web*** de {{ fr.DWL }} apparaîtra dans le coin du navigateur Web.  
![Ajouter un site Web](/img/fr/server/ServerOp2032.png)  
1. Saisir un ***Nom*** pour l&apos;entrée. Le nom par défaut peut être gardé ou modifié, mais il est recommandé qu&apos;il reflète le contenu de l&apos;entrée pour la retrouver plus facilement au besoin. 
1. Sélectionner le ***Coffre*** dans lequel les identifiants doivent être sauvegardés. 
1. Saisir un ***Dossier de destination*** dans lequel sauvegarder l&apos;entrée de site Web. Si ce champ reste vide, l&apos;entrée sera sauvegardée à la racine du coffre. Si le dossier spécifié n&apos;existe pas, il sera créé en même temps que l&apos;entrée. 
1. Cliquer sur ***Enregistrer*** .  

Vos identifiants sont maintenant stockés sécuritairement dans une nouvelle entrée de site Web dans {{ fr.DPS }} . La prochaine fois que vous vous connecterez à ce compte, {{ fr.DWL }} le détectera et récupérera vos identifiants. Suivez nos instructions étape par étape pour [récupérer vos identifiants](/fr/server/dwl/using-devolutions-web-login/retrieve-credentials-dwl/) .  

### Ajouter manuellement une entrée de site Web 
1. <a name="1"></a>Aller à la page de connexion du site Web. Cette page sera différente pour chaque site Web; cette rubrique utilisera le site Web d&apos;Atlassian comme exemple.  
![Page de connexion](/img/fr/server/ServerOp2031.png)  
1. Cliquer sur l&apos;extension {{ fr.DWL }} dans la barre d&apos;outils de votre navigateur, puis, dans l&apos;onglet ***Correspondant*** , cliquer sur le bouton ***Ajouter un site Web*** .  
![Bouton Ajouter un site Web](/img/fr/server/ServerOp2033.png)  
1. L&apos;onglet ***Ajouter un site Web*** de {{ fr.DWL }} s&apos;ouvrira dans votre navigateur.  
![Ajouter un site Web](/img/fr/server/ServerOp2021.png)  
1. Saisir un ***Nom*** pour l&apos;entrée. Le nom par défaut peut être gardé ou modifié, mais il est recommandé qu&apos;il reflète le contenu de l&apos;entrée pour la retrouver plus facilement au besoin. 
1. Le champ ***URL*** est automatiquement rempli avec l&apos;URL de la page de connexion de l&apos; <a href="#1">étape 1</a>. 
1. La liste déroulante ***Identifiants*** est définie à ***Personnalisé*** par défaut. Cela permet d&apos;entrer manuellement le ***Nom d&apos;utilisateur*** et le ***Mot de passe*** à l&apos;étape suivante. 
1. Saisir le ***Nom d&apos;utilisateur*** et le ***Mot de passe*** qui sont utilisés pour se connecter à ce site Web. Dépendamment du site Web, le nom d&apos;utilisateur pourrait être une adresse courriel. 
1. Si souhaité, entrer une ***Description*** pour l&apos;entrée. 
1. Sélectionner le ***Coffre*** dans lequel les identifiants doivent être sauvegardés. 
1. Saisir un ***Dossier de destination*** dans lequel sauvegarder l&apos;entrée de site Web. Si ce champ reste vide, l&apos;entrée sera sauvegardée à la racine du coffre. Si le dossier spécifié n&apos;existe pas, il sera créé en même temps que l&apos;entrée. 
1. Cliquer sur ***Enregistrer*** .  

Vos identifiants sont maintenant stockés sécuritairement dans une nouvelle entrée de site Web dans {{ fr.DPS }} . La prochaine fois que vous vous connecterez à ce compte, {{ fr.DWL }} le détectera et récupérera vos identifiants. Suivez nos instructions étape par étape pour [récupérer vos identifiants](/fr/server/dwl/using-devolutions-web-login/retrieve-credentials-dwl/) . 

