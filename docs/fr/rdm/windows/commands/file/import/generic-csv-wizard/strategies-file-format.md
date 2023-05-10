---
title: Stratégies d'importation de CSV et format de fichier
---
Lors de l'importation de fichiers CSV dans {{ fr.RDM }} , vous devez prendre certaines décisions concernant les stratégies à utiliser et le format du contenu. 

## Modèles 

La décision la plus importante est de savoir si et comment appliquer un modèle dans le cadre du processus.  

Les deux méthodes d'importation à partir de CSV vous permettent de choisir un modèle pour les entrées nouvellement créées. Si vous choisissez un modèle dans le cadre du processus, il s'appliquera à toutes les entrées créées à partir de ce lot. Parfois, il peut être judicieux de fractionner les entrées dans différents fichiers CSV en les regroupant par type d'entrées que vous souhaitez créer.  

Si vous avez besoin d'un contrôle plus précis, vous pouvez spécifier le modèle à utiliser dans une colonne ***Modèle*** du fichier CSV, mais, comme vous pouvez spécifier le type d'entrée dans le fichier CSV, cela pourrait ne pas être nécessaire.  

{% snippet icon.badgeNotice %} 
Dans ***Fichier – Importer*** , nous vous recommandons d'utiliser d'abord l'option ***Assistant d'importation de Csv générique*** . Vous pouvez modifier au besoin l' ***Instruction du format en-tête*** .  
![Assistant d'importation de CSV](/img/fr/rdm/windows/RdmWin4042.png) 
{% endsnippet %}
 

## Contenu du fichier 

{% snippet icon.badgeCaution %} 
Certaines validations sur les paramètres d'entrée ne se trouvent pas dans la couche de gestion, mais plutôt dans les boîtes de dialogue de propriétés. Cela signifie que l'utilisation du processus d'importation peut entraîner des entrées non valides qui déclencheront des erreurs. Veuillez valider soigneusement les entrées résultantes. 
{% endsnippet %}
 
Dans le fichier CSV, les champs ***Host***   et   ***Name*** sont obligatoires. Si aucun modèle n'est spécifié, le type RDP sera utilisé comme type de secours.  

Nous ne pouvons pas fournir la liste de tous les champs pris en charge pour tous les types d'entrées, car {{ fr.RDM }} utilise une architecture ouverte et n'est donc pas au courant de tous les champs des types d'entrées fournis par notre gestionnaire de modules. Une bonne méthode pour découvrir la structure du champ consiste à créer une entrée du type souhaité, faire un clic droit sur l'entrée et sélectionner ***Presse-papiers – Copier*** , puis coller le contenu dans votre éditeur préféré. Vous verrez la structure et les noms des champs. 

{% snippet icon.badgeInfo %} 
Les valeurs par défaut des champs ne sont pas sérialisées. Cela signifie qu'elles sont simplement exclues de la structure sérialisée. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
La mise en œuvre du support pour tous les domaines a un coût. Le processus d'importation prend du temps en raison de tous les accès dynamiques aux champs qui ont lieu. Une importation initiale massive d'entrées doit être séparée en lots de tailles gérables. Veuillez effectuer des essais et régler le nombre d'entrées pour obtenir des performances acceptables. 
{% endsnippet %}
 

Toutes nos entrées partagent un ensemble de champs de base; les autres sont liées à la technologie spécifique avec laquelle elles sont interfacées (RDP, SSH, etc.). Certains champs sont regroupés dans des structures, comme l'onglet Informations. Cela signifie que ces champs sont accessibles uniquement lorsque vous fournissez le nom de la structure en tant que préfixe, par exemple, " MetaInformation\OS " ou " MetaInformation\PurchaseDate ". 

{% snippet icon.badgeInfo %} 
Notez que le contenu du fichier CSV peut contenir nos variables : elles seront résolues lors de l'enregistrement. Par exemple, vous pouvez utiliser la variable $HOST$ dans des champs tels que Description , URL , Putty\CustomSessionName , etc. Elle sera remplacée par la valeur correspondante. 
{% endsnippet %}
 
Voici une liste non exhaustive de quelques champs pertinents : 

<table>
	<tr>
		<th>
		
CHAMP 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Host 
		</td>
		<td>
Nom d'hôte de l'appareil, le champ est obligatoire . 
		</td>
	</tr>
	<tr>
		<td>
Name 
		</td>
		<td>
Nom de l'entrée, le champ est obligatoire . 
		</td>
	</tr>
	<tr>
		<td>
ConnectionType 
		</td>
		<td>
Jeton représentant le type de connexion. Il est préférable d'utiliser la méthode ***Presse-papiers - Copier*** pour obtenir les valeurs acceptables. Si auncun type de connexion n'est spécifié, RDP sera utilisé par défaut. 
		</td>
	</tr>
	<tr>
		<td>
Group 
		</td>
		<td>
Dossier de destination. Notez que si le processus d'importation lui-même défini un dossier de destination, le dossier répertorié ici serait créé sous celui du processus. 
		</td>
	</tr>
	<tr>
		<td>
Description 
		</td>
		<td>
Description de l'entrée. 
		</td>
	</tr>
	<tr>
		<td>
Open (Embedded) 
		</td>
		<td>
Valeur booléenne ( true ou false ) qui indique d'ouvrir la session intégrée. La valeur par défaut est false, ce qui signifie que le client natif sera utilisé en fonction de la technologie (MSTSC.EXE, par exemple). 
		</td>
	</tr>
	<tr>
		<td>
Username 
		</td>
		<td>
Nom d'utilisateur utilisé pour ouvrir une session sur l'appareil. 
		</td>
	</tr>
	<tr>
		<td>
Domain 
		</td>
		<td>
Domaine utilisé pour ouvrir une session sur l'appareil. 
		</td>
	</tr>
	<tr>
		<td>
Password 
		</td>
		<td>
Mot de passe utilisé pour ouvrir une session sur l'appareil. Veuillez noter que ce champ est chiffré et stocké dans un autre champ lors de son importation. 
		</td>
	</tr>
	<tr>
		<td>
MetaInformation\SerialNumber 
		</td>
		<td>
Numéro de série de l'appareil. 
		</td>
	</tr>
	<tr>
		<td>
MetaInformation\ServiceTag 
		</td>
		<td>
Numéro de service de l'appareil. 
		</td>
	</tr>
	<tr>
		<td>
MetaInformation\PurchaseDate 
		</td>
		<td>
Date d'achat en format ISO8601 (c'est-à-dire aaaa-mm-jj). 
		</td>
	</tr>
</table>


