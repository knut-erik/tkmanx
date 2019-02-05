<div id="2019" class="tab-pane fade TKPanel">
    <div class="panel panel-default TKPanel">
        <div class="panel-body TKPanel">
            <?php echo $Parsedown->text(file_get_contents('./md/2019hr.md'));  ?>
        </div>
    </div>
    <div class="panel panel-default TKPanel">
        <div class="panel-body TKPanel">
            <?php echo $Parsedown->text(file_get_contents('./md/2019_betingelser.md'));  ?>
        </div>
    </div>
    <div class="panel panel-default TKPanel">
        <div class="panel-body TKPanel">
            <?php echo $Parsedown->text(file_get_contents('./md/2019_paamelding.md'));  ?>
        </div>
    </div>
    <div class="panel panel-default TKPanel">
        <div class="panel-body TKPanel">
            <?php echo $Parsedown->text(file_get_contents('./md/2019_map.md'));  ?>
        </div>
    </div>
</div>