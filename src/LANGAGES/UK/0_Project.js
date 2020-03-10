jQuery(function()
{

    $(function ()
    {
        $(window).scroll(function () /*Fonction appelée quand on descend la page*/
        {
            if ($(this).scrollTop() > 400 ) /*Si on est à 400pixels du haut de page*/
            {
                $('#backtotop').css('right','10px'); /*Replace à 10pixels de la droite l'image*/
            }
            else
            {
                $('#backtotop').removeAttr( 'style' ); /*Enlève les attributs CSS affectés par javascript*/
            }
        });
    });

});
