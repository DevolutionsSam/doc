---
title: Devolutions Server
---
<table>
	<tr>
		<td>

![dvls-90X90.png](/img/fr/rdm/mac/dvls-90X90.png) 
		</td>
		<td>
{{ fr.RDMS }} est un coffre autohébergé pour stocker et partager vos connexions et identifiants à distance. Vous pouvez trouver plus d'informations sur le site Web du produit [ici](https://devolutions.net/server/fr) . 
		</td>
	</tr>
</table>

### Points forts 

* Serveur de sécurité haut de gamme pour votre entreprise. 
* Prise en charge des facteurs AzureMFA 2 pour {{ fr.RDMS }} . 
* Partager vos sessions avec plusieurs utilisateurs. 
* Peut être déployé en ligne. 
* Prends en charge l'authentification Windows et l'intégration de groupe Active Directory. 
* Optimisation de la mise en cache côté client et serveur. 

{% snippet icon.badgeInfo %} 
À l'heure actuelle, {{ fr.RDMS }} prend uniquement en charge SQL Server et Azure SQL en tant que base de données. 
{% endsnippet %}
 
Pour plus d'informations, veuillez consulter ces rubriques:  

* [Installation de {{ fr.RDMS }}](/fr/server/installation/) 
* [Liste de vérification relative à la sécurité](/fr/server/getting-started/security-checklist/) 

## Configurer la source de données du serveur sur toutes vos machines clientes. 

Entrer le nom de la source de données et l'URL du serveur. Assurez-vous d'utiliser le bon protocole si SSL est requis par le serveur (HTTPS).  

Vous pouvez également exporter les informations sur la source de données, puis importer le fichier dans vos postes de travail clients, comme décrit dans la rubrique [Importer/Exporter](/fr/rdm/mac/data-sources/import-export/) la source de données. 

## Paramètres 

### CONNEXION 

![Devolutions Server - Général](/img/fr/rdm/mac/clip4261.png) 

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
Hôte 
		</td>
		<td>
Nom de l'hôte de {{ fr.RDMS }} . 
		</td>
	</tr>
	<tr>
		<td>
Nom d'utilisateur 
		</td>
		<td>
Nom d'utilisateur pour se connecter à la source de données. 
		</td>
	</tr>
	<tr>
		<td>
Mot de passe 
		</td>
		<td>
Mot de passe pour se connecter à la source de données. 
		</td>
	</tr>
	<tr>
		<td>
Tester connexion 
		</td>
		<td>
Tester la connexion avec {{ fr.RDMS }} pour valider si les informations appropriées ont été fournies. 
		</td>
	</tr>
	<tr>
		<td>
Toujours demander le nom d'utilisateur 
		</td>
		<td>
Toujours demander le nom d'utilisateur lors de la connexion à la source de données. 
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
</table>

### {{ fr.PVLT }} 

![Devolutions Password Server - Coffre de l'utilisateur](/img/fr/rdm/mac/clip4262.png) 

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
Type de connexion 
		</td>
		<td>
Si vous utilisez des {{ fr.PVLT }} , cliquer sur les flèches pour sélectionner votre Coffre.
		</td>
	</tr>
</table>

### Avancée 

![Devolutions Password Server - Avancée](/img/fr/rdm/mac/clip4263.png) 

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
Demander le mode hors-ligne au démarrage 
		</td>
		<td>
Chaque fois que vous vous connecterez à votre source de données, vous serez invité à utiliser la source de données en mode hors ligne. 
		</td>
	</tr>
	<tr>
		<td>
Mode de la cache 
		</td>
		<td>

Détermine comment les entrées seront rechargées dans la source de données. Voir la rubrique [Mode de la cache](/fr/rdm/mac/data-sources/caching/) pour plus d'informations. 
		</td>
	</tr>
	<tr>
		<td>
Mode ping en ligne 
		</td>
		<td>
Indique le mode de ping préféré en ligne. Choisir entre:  

* Aucun 
* Requête web 
		</td>
	</tr>
	<tr>
		<td>
Déconnexion auto 
		</td>
		<td>
Si la méthode ping en ligne ne fonctionne pas, elle se mettra automatiquement hors ligne. 
		</td>
	</tr>
	<tr>
		<td>
Mode d'accès outils à distances 
		</td>
		<td>
Sélectionner votre mode d'accès aux outils à distance entre:  

* Local 
* Via une source de données 
		</td>
	</tr>
	<tr>
		<td>
Gérer la cache 
		</td>
		<td>
Gérer votre cache sur votre ordinateur pour l'analyser, le vider, le réparer ou le supprimer. Cela peut être très utile lorsque vous rencontrez des problèmes hors ligne. Pour plus d'informations, veuillez suivre ce [lien](/fr/rdm/mac/data-sources/manage-cache/) . 
		</td>
	</tr>
</table>


