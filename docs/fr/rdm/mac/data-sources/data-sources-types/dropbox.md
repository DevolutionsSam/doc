---
title: Dropbox
---

<table>
	<tr>
		<td>

![DataSourceDropBoxLarge.png](/img/common/DataSourceDropBoxLarge.png) 
		</td>
		<td>
{{ fr.RDM }} utilise l&apos;API Dropbox pour récupérer un fichier XML à partir du coffre configuré. Il n&apos;est pas nécessaire d&apos;installer le client Dropbox sur la machine pour ouvrir la source de données. Il est également possible de configurer plusieurs comptes Dropbox sur la même machine. 
		</td>
	</tr>
</table>

{% snippet icon.badgeWarning %} 
L&apos;intégration Dropbox utilise le SDK Dropbox, donc toutes les fonctionnalités exclusives aux éditions Business ou Enterprise ne sont PAS prises en charge. 
{% endsnippet %}
 
## Points forts 

* Cette source de données peut être partagée sur Internet entre plusieurs emplacements 
* La source de données prend en charge l&apos;actualisation automatique 
* Il s&apos;agit d&apos;une source de données basée sur des fichiers, basée sur la source de données XML 
* Pour éviter la corruption des données, la liste des sessions doit être modifiée dans un seul endroit à la fois 
* Pas besoin d&apos;installer le client Dropbox pour utiliser la source de données Dropbox 
* Chaque source de données Dropbox peut utiliser un compte Dropbox différent 

{% snippet icon.badgeCaution %} 
Bien qu&apos;il puisse être partagé entre plusieurs emplacements, il n&apos;y a pas de gestion des conflits pour la configuration. Si vous partagez avec d&apos;autres utilisateurs, vous pouvez obtenir des conflits de mise à jour et rencontrer des problèmes. Ce type de source de données est destiné à un seul utilisateur utilisant plusieurs ordinateurs, et non plusieurs utilisateurs . 
{% endsnippet %}
 
## Paramètres 

### Général 

![Dropbox - Général](/img/fr/rdm/mac/clip0322.png) 

{% snippet icon.badgeInfo %} 
{{ fr.RDM }} prend en charge l&apos;authentification à 2 facteurs de Dropbox. Lorsque le bouton ***Valider Dropbox*** est enfoncé et que l&apos;authentification à 2 facteurs est activée dans Dropbox, une première boîte s&apos;ouvre et demande le mot de passe du compte Dropbox. Après, une deuxième boîte s&apos;ouvrira pour entrer le code de sécurité. Le code de sécurité peut être reçu par SMS ou généré par Google Authenticator. 
{% endsnippet %}
 
<table>
	<tr>
		<td>
Option 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Nom 
		</td>
		<td>
Nom de la source de données. 
		</td>
	</tr>
	<tr>
		<td>
Courriel 
		</td>
		<td>
Contiens l&apos;adresse courriel associée au compte Dropbox. 
		</td>
	</tr>
	<tr>
		<td>
Valider Dropbox 
		</td>
		<td>
Valider l&apos;adresse courriel avec le compte Dropbox. 
		</td>
	</tr>
	<tr>
		<td>
Répertoire Dropbox 
		</td>
		<td>
Indique le dossier dans Dropbox. Il ne doit contenir aucun lecteur, car il est stocké en ligne. Laissez-le vide pour utiliser la racine Dropbox par défaut. 
		</td>
	</tr>
	<tr>
		<td>
Nom du fichier 
		</td>
		<td>
Indique le nom de fichier utilisé pour stocker les données sur la source de données. 
		</td>
	</tr>
</table>

### Avancée 

![Dropbox - Avancée](/img/fr/rdm/mac/clip0323.png) 

<table>
	<tr>
		<td>
Option 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Toujours demander le mot de passe 
		</td>
		<td>
Toujours demander le mot de passe lors de la connexion à la source de données. 
		</td>
	</tr>
	<tr>
		<td>
Désactiver l&apos;affichage du mot de passe 
		</td>
		<td>
Désactiver la fonctionnalité de révélation du mot de passe lorsqu&apos;un utilisateur accède à cette source de données. 
		</td>
	</tr>
	<tr>
		<td>
Autoriser le mode déconnecté 
		</td>
		<td>
Autoriser la source de données à être utilisée en mode hors ligne . 
		</td>
	</tr>
	<tr>
		<td>
Actualisation automatique 
		</td>
		<td>
Définir l&apos;intervalle d&apos;actualisation automatique. 
		</td>
	</tr>
	<tr>
		<td>
Gérer la cache 
		</td>
		<td>
Gérer votre cache sur votre ordinateur pour l&apos;analyser, le vider, le réparer ou le supprimer. Cela peut être très utile lorsque vous rencontrez des problèmes hors ligne. Pour plus d&apos;informations, veuillez suivre ce [lien](Manage-Cache) . 
		</td>
	</tr>
</table>


