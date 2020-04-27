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
                    <?php include "tab_2020bc.php";?>
                    <?php include "tab_links.php";?>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
     <div class="col-md-12">
        <h4 class="TKFont TKFooterText">Crafted by dataKnut</h4>
     </div>
    </div>

<script>
    //var converter = new showdown.Converter(),
    //text      = '# hello, markdown!',
    //html      = converter.makeHtml(text);
    //console.log(html);
</script>
</body>

<script>
    // make the menu collaps after selecting a menu item.
    $(document).on('click','.navbar-collapse.in',function(e) {
        if( $(e.target).is('a') ) {
            $(this).collapse('hide');
        }
    });
</script>

<script src="js/app.js"></script>

</html>
