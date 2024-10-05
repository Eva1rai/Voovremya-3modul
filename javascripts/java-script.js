$(document).ready(function () {
    $('.perehod').click(function () {
        $('.perviiecran').css({ display: 'none' });
        $('.dva').css({ display: 'block' });
    });

    $(document).ready(function () {
        $(function () {
            let rot = 90;
            $('.kva1').click(function () {
                rot += 90;
                $(this).css({
                    '-webkit-transform': 'rotate(' + rot + 'deg)',
                    '-moz-transform': 'rotate(' + rot + 'deg)',
                    '-ms-transform': 'rotate(' + rot + 'deg)',
                    transform: 'rotate(' + rot + 'deg)',
                });
            });
        });

        $(function () {
            let rot = 90;
            $('.kva2').click(function () {
                rot += 90;
                $(this).css({
                    '-webkit-transform': 'rotate(' + rot + 'deg)',
                    '-moz-transform': 'rotate(' + rot + 'deg)',
                    '-ms-transform': 'rotate(' + rot + 'deg)',
                    transform: 'rotate(' + rot + 'deg)',
                });
            });
        });
        $(function () {
            let rot = 90;
            $('.kva3').click(function () {
                rot += 90;
                $(this).css({
                    '-webkit-transform': 'rotate(' + rot + 'deg)',
                    '-moz-transform': 'rotate(' + rot + 'deg)',
                    '-ms-transform': 'rotate(' + rot + 'deg)',
                    transform: 'rotate(' + rot + 'deg)',
                });
            });
        });
        $(function () {
            let rot = 90;
            $('.kva4').click(function () {
                rot += 90;
                $(this).css({
                    '-webkit-transform': 'rotate(' + rot + 'deg)',
                    '-moz-transform': 'rotate(' + rot + 'deg)',
                    '-ms-transform': 'rotate(' + rot + 'deg)',
                    transform: 'rotate(' + rot + 'deg)',
                });
            });
        });
        $(function () {
            let rot = 90;
            $('.kva5').click(function () {
                rot += 90;
                $(this).css({
                    '-webkit-transform': 'rotate(' + rot + 'deg)',
                    '-moz-transform': 'rotate(' + rot + 'deg)',
                    '-ms-transform': 'rotate(' + rot + 'deg)',
                    transform: 'rotate(' + rot + 'deg)',
                });
            });
        });

        $(function () {
            let rot = 90;
            $('.kva6').click(function () {
                rot += 90;
                $(this).css({
                    '-webkit-transform': 'rotate(' + rot + 'deg)',
                    '-moz-transform': 'rotate(' + rot + 'deg)',
                    '-ms-transform': 'rotate(' + rot + 'deg)',
                    transform: 'rotate(' + rot + 'deg)',
                });
            });
        });
    });


    $('.char1').click(function () {
        $(this).css({ display: 'none' });
    });

    $('.char2').click(function () {
        $(this).css({ display: 'none' });
    });

    $('.char3').click(function () {
        $(this).css({ display: 'none' });
    });

    $('.char4').click(function () {
        $(this).css({ display: 'none' });
    });

    $('.char5').click(function () {
        $(this).css({ display: 'none' });
    });

    $('.char6').click(function () {
        $(this).css({ display: 'none' });
    });

    $('.char7').click(function () {
        $(this).css({ display: 'none' });
    });

    $('.char8').click(function () {
        $(this).css({ display: 'none' });
    });

    $('.char9').click(function () {
        $(this).css({ display: 'none' });
    });

    $('.char10').click(function () {
        $(this).css({ display: 'none' });
    });

    $('.char11').click(function () {
        $(this).css({ display: 'none' });
    });

    $('.char12').click(function () {
        $(this).css({ display: 'none' });
    });

    $('.char13').click(function () {
        $(this).css({ display: 'none' });
    });

    $('.char14').click(function () {
        $(this).css({ display: 'none' });
    });

    $('.char15').click(function () {
        $(this).css({ display: 'none' });
    });

    $('.char16').click(function () {
        $(this).css({ display: 'none' });
    });

    $('.char17').click(function () {
        $(this).css({ display: 'none' });
    });

    $('.char18').click(function () {
        $(this).css({ display: 'none' });
    });

    $('.char19').click(function () {
        $(this).css({ display: 'none' });
    });

    $('.char20').click(function () {
        $(this).css({ display: 'none' });
    });

    $('.char21').click(function () {
        $(this).css({ display: 'none' });
    });

    $('.char22').click(function () {
        $(this).css({ display: 'none' });
    });

    $('.char23').click(function () {
        $(this).css({ display: 'none' });
    });
});
var lenivkaPosition = 0;

const btn = document.getElementById('btn-tik');
btn.addEventListener('click', () => {
    lenivkaPosition += 1;
    let lenivka = document.getElementById('lenivka');
    switch (lenivkaPosition) {
        case 1:
            lenivka.style.marginTop = '37vw';
            break;
        case 2:
            lenivka.style.marginLeft = '55vw';
            break;
        case 3:
            lenivka.style.marginTop = '24vw';
            break;
        case 4:
            lenivka.style.marginLeft = '88vw';
            break;
        case 5:
            lenivka.style.marginTop = '14.5vw';
            let section = document.querySelector('.thirlock');
            let congratsImage = document.createElement('img');
            congratsImage.src = '../images/lenivec.png';
            congratsImage.style.zIndex = '4';
            section.appendChild(congratsImage);
        case 6: 
            let pozdrav = document.getElementById('pozdravil');
            pozdrav.style.position = 'fixed';
            // pozdrav.style.top = '4.26vw';
            pozdrav.style.left = '-1vw';
            pozdrav.style.width = '91.87vw';
            pozdrav.style.height = '52.4vw';
            pozdrav.style.zIndex = '20';
            pozdrav.style.display = 'flex';
            pozdrav.style.bottom = "0";
        default:
            break;
    }
    if (lenivkaPosition === 1) {
        lenivka.style.marginTop = '37vw';
    }
});
