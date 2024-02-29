<?php


//* PRENDO IL CONTENUTO DAL FILE JSON (SOTTO FORMA DI ARREY)
$json_list_content = file_get_contents('../data/tasklist.json');


//* APPLICO FILTRI PER LA DIFFERENZA DI STATE TRUE OR FALSE 
// $json_list_content_true = array_filter($json_list_content, fn($task) => $task);


//* AVVISO IL BROWSER CHE INVIERO' DEI DATI JSON
header('Content-Type: application/json');


//* STAMPO I DATI (LA STRINGA JSON) DA VISUALIZZARE
echo $json_list_content;