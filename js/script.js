// event pada saat link di klik
$('.page-scroll').on('click', function(e) {

    // ambil isi href
    var tujuan = $(this).attr('href'); // (this) akan mengambil a yang di klik saja, dan mengambil isi dari attribut href
    // tangkap elemen yang bersangkutan
    var elemenTujuan = $(tujuan);

    // pindahkan scroll
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top-51 // -50 sama seperti margin-top
    }, 1300, 'easeInOutCubic'); // 1200 merpakan waktu scrollnya satuannya ms dan 'easeInOutCubic' adalah efek scrollnya

    e.preventDefault();
});



// parallax

// about
$(window).on('load', function() {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
})

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    // jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    })

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    })

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll +'%)'
    });


    // portfolio
    if( wScroll > $('.portfolio').offset().top -51.5) {
        $('.portfolio .thumbnail').each(function(i) {
            setTimeout(function() {
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 200 * (i + 1));
        });
    }
});