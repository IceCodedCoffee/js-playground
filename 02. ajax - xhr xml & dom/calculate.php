<?php
    header("Content-Type: text/xml");
    $meter = $_REQUEST['meter'];
    $meilen = $meter * 0.0006213711922373339;
    $yard = $meter * 1.0936133;
    echo "<?xml version=\"1.0\" encoding=\"utf-8\"?>";
?>

<umwandlung>
    <meter><?php echo $meter; ?></meter>
    <meilen><?php echo $meilen; ?></meilen>
    <yard><?php echo $yard; ?></yard>
</umwandlung>