<?php




//* ricostruisco la task da aggiungere
$updated_task_index = [
    'name' => $_POST['name'],
    'state' => $_POST['state'] === 'true',
];
    
//* recupero l'indice della task da modificare
$task_index = (int) $_POST['index'];
   
//* recupero il contenuto JSON del DATA e lo trasformo in array

        //come farlo su due righe
// $json_tasklist = file_get_contents('../data/tasklist.json');
//$tasklist = json_decode($json_tasklist);


        //come farlo unendo le due righe
$tasklist = json_decode(file_get_contents('../data/tasklist.json'),true);



//* modifico lo state della task
$tasklist[$task_index] = $updated_task_index;


//*  ritrasformo l'array in json 
$json_tasklist = json_encode($tasklist);

file_put_contents('../data/tasklist.json', $json_tasklist);


//* avviso il browser che invierò il JSON 
header('Content-Type: application/json');


//* stampo la lista aggiornata 

echo $json_tasklist;