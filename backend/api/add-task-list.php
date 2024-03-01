<?php




//* ricostruisco la task da aggiungere
$new_task = [
    'name' => $_POST['name'],
    'state' => $_POST['state'] === 'true',
];
    
   
//* recupero il contenuto JSON del DATA e lo trasformo in array

        //come farlo su due righe
// $json_tasklist = file_get_contents('../data/tasklist.json');
//$tasklist = json_decode($json_tasklist);


        //come farlo unendo le due righe
$tasklist = json_decode(file_get_contents('../data/tasklist.json'),true);



//* aggiungo la nuova task all tasklist
$tasklist[] = $new_task;


//*  ritrasformo l'array in json 
$json_tasklist = json_encode($tasklist);

file_put_contents('../data/tasklist.json', $json_tasklist);


//* avviso il browser che invierò il JSON 
header('Content-Type: application/json');


//* stampo la lista aggiornata 

echo $json_tasklist;