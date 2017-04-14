Simpel project. Neemt data uit Riot Games API over spelers van spel League of Legends. Het krijgt <b>JSON</b> van <b>REST</b> API terug. Dan neem ik alle benodigde data en laat het aan gebruiker zien. Het heeft <b>cache systeem</b>, dus als data van gebruiker niet verandert sinds laatste keer, dan wordt data uit database verzonden. Dat voorkomt overhead in PHP requests.

Dit project is <b>responsive</b> voor <b>kleine en gewone schermen</b>, <b>mobielen op landscape en portrait</b>. Werkt net <b>zonder JavaScript</b> maar heeft wel nuttige <b>progressive enhancement</b> ermee.

Dit is "production result", dus ik heb bestanden niet echt geminimaliseerd (zou alle commentaren verwijderen). Het project is vrijwel klein qua functionaliteit, maar ik zou u liever hebben kijken naar functies die ik gebruik en de manier waarop ik code schrijf. Er is geen "maak dit project, dan vindt elk werkgever goed".

Er is niet zoveel om erover te vertellen, behalve dat als je het wilt opstarten u moet:
- MySQL verbinding informatie veranderen in `__sys/res/dbconn.php`.
- URL veranderen zodat het wijst op `__sys` in `__sys/loader.php`.

Ik kon het niet op hosting zetten voor live demo omdat door nature van dit project, het neemt heftige calculaties en ik kon geen echte hosting vinden dit het zou 30 seconden doorlaten zonder om het direct afkappen. In plaats daarvan heb ik verkende offline voorbeeld en screenshots:

- <a href="https://raw.githubusercontent.com/comeon101/project_0001_rest_json_php_api/master/demo/index%20desktop.png">Start pagina</a>
- <a href="https://raw.githubusercontent.com/comeon101/project_0001_rest_json_php_api/master/demo/player%20desktop.png">Speler pagina met data</a>
- <a href="https://raw.githubusercontent.com/comeon101/project_0001_rest_json_php_api/master/demo/player%20desktop%20loading.png">Transition met JavaScript</a>
- <a href="https://raw.githubusercontent.com/comeon101/project_0001_rest_json_php_api/master/demo/player%20mobile%20horizontal.png">Mobiel horizontal speler data</a>
- <a href="https://raw.githubusercontent.com/comeon101/project_0001_rest_json_php_api/master/demo/player%20mobile%20vertical.png">Mobiel verticaal speler data.</a>

Ik had geen concrete finale product in mijn hoofd, dus waardeer het op code en functies gebruikt. Met gedefineerde project en goede plan zou ik het in iets veel beters kunnen maken. Maar ik weet niet wat mijn toekomstige baas zou fijn vinden.
