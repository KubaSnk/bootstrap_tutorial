$('accordion').collapse({
    hidden: false
});

$('#toggleAccordion').on('click', function (){
   $('#accordion').collapse('toggle');
});