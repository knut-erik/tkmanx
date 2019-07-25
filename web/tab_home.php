<div id="home" class="tab-pane fade in active TKPanel">
    <div class="panel panel-default TKPanel">
        <div class="panel-body TKPanel">
            <?php echo $Parsedown->text(file_get_contents('./md/2020_paamelding.md'));  ?>   
            <?php echo $Parsedown->text(file_get_contents('./md/home.md'));  ?>
        </div>
    </div>
</div>
