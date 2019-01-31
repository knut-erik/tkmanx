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
                    <!-- TABS -->
                    <?php include "tab_home.php";?>
                    <?php include "tab_2019hr.php";?>
                    <?php include "tab_2020bc.php";?>
                    <?php include "tab_links.php";?>
                </div>
            </div>
        </div>
    </div>
    <?php include 'footer.php';?>
    </body>

<script>
    // make the menu collaps after selecting a menu item.
    $(document).on('click','.navbar-collapse.in',function(e) {
        if( $(e.target).is('a') ) {
            $(this).collapse('hide');
        }
    });
</script>

</html>
