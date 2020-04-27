<!DOCTYPE html>
<html lang="en">
    <?php include 'header.php';?>
    
    <body class="TKBackground" id="home-page">
    
    <?php include "menu.php";?>
    <?php include "banner.php";?>

    <div class="container-fluid TKContainerFluid">
        <div class="row">
            <div class="col-sm-12 TKContainerFluid">
                <div class="tab-content">
                  
                    <!-- MAIN CONTENT TAB -->
                    <div class="tab-pane fade in active TKPanel">
                      <div class="panel panel-default TKPanel">
                          <div id="main-content" class="panel-body TKPanel"></div>
                      </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </div>

    <div class="row">
     <div class="col-md-12">
        <h4 class="TKFont TKFooterText">Crafted by dataKnut</h4>
     </div>
    </div>

</body>


<script>
 populateHome();
</script>

<script>
    // make the menu collaps after selecting a menu item.
    $(document).on('click','.navbar-collapse.in',function(e) {
        if( $(e.target).is('a') ) {
            $(this).collapse('hide');
        }
    });
</script>



</html>
