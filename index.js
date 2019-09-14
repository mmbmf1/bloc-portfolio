//function for home click
function homeClick () {
    $('.home-link').on('click', function () {
       history.go(0);
    });
}

//function for projects click
function clickProjects () {
    $('#project-button').on('click', function () {
        $('.coding-reason').css('display', 'none');
        $('.about-me').css('display', 'none');
        $('.bloc-projects').css('display','block');
        $('.main-wrap').css('top', 0);
    });
}

// //function for learn more click
function clickLearnMore () {
    $('#learn-more').on('click', function () {
        let windowWidth = $(window).width();
        if (windowWidth > 768) {
            $('.coding-reason').css('display', 'none'); 
            $('.bloc-projects').css('display', 'none');
            $('.about-me').css('display', 'block');
            $('button').css('width', 'auto');
        }
    });
}

//run all portfolio functions
function createPortfolio () {
    clickProjects ();
    clickLearnMore ();
    homeClick();
};

$(createPortfolio);