<?php



//* recupero l'indice della task da modificare
$task_index = (int) $_POST['index'];
   
//* recupero il contenuto JSON del DATA e lo trasformo in array

        //come farlo su due righe
// $json_tasklist = file_get_contents('../data/tasklist.json');
//$tasklist = json_decode($json_tasklist);


        //come farlo unendo le due righe
$tasklist = json_decode(file_get_contents('../data/tasklist.json'),true);



//* cancello la task
unset($tasklist[$task_index]);

//* riordiniamo gli indici dell'array 
$tasklist = array_values($tasklist);



//*  ritrasformo l'array in json 
$json_tasklist = json_encode($tasklist);

file_put_contents('../data/tasklist.json', $json_tasklist);


//* avviso il browser che invierò il JSON 
header('Content-Type: application/json');


//* stampo la lista aggiornata 

echo $json_tasklist;