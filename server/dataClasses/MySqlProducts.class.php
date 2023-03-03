<?php 
require('Product.class.php');

class MySqlProducts extends Product {
 public function loadAll() {
    $sql = 'SELECT * FROM products';
    $q = $this->db->query($sql);
    $data = $q->fetchAll(PDO::FETCH_ASSOC);
    $json = json_encode($data);
    return print_r($json);
 }

 public function delete($id) {
  $ids = array($id)[0];
  
    foreach($ids as $id){
      echo($id);
        $sql = "DELETE FROM products WHERE id = ?";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$id]);
        }
 }
    
}