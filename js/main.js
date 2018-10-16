(function($) {

    $('.datepicker').datepicker('setStartDate', '2000-01-01');

    $('#submit').on('click tap', function (e) {
        e.preventDefault();
        //
        // const motherday = $('#motherDay').val().substring($('#motherDay').val().lastIndexOf("/")+1);
        // const fatherday = $('#fatherDay').val().substring($('#fatherDay').val().lastIndexOf("/")+1);
        // const sexday = $('#sexDay').val().substring($('#sexDay').val().lastIndexOf("/")+1);


        const motherday = parseInt(moment($('#motherDay').val()).fromNow());
        const fatherday = parseInt(moment($('#fatherDay').val()).fromNow());

        const sexday = parseInt(moment($('#sexDay').val()).format('MM'));


        console.log(motherday, fatherday,sexday);

        function firstMethod(a, b) {
            if (a+b & 1) {
                alert('boy')
            } else {
                alert('girl');
            }
        }

        firstMethod(motherday, sexday);
    })
    
    



})(jQuery);