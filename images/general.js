//page display after page load start here
$(window).load(function() {
 $("body").css('opacity','1');
});


//accordian start here
$(document).ready(function() {
   $("#top-accordian").accordion({ firstactive:true });
   
   $(function() {
	     $("#top-accordian").accordion({
            autoHeight: false,
            collapsible: true,
            heightStyle: "content",
            active: 0,
            animate: 600 // collapse will take 300ms
        });
  });
});
