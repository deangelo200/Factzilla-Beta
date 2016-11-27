// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

var mySwiper = myApp.swiper('.swiper-container', {
  pagination: '.swiper-pagination',
  paginationHide: false,
  paginationClickable: true,
  nextButton: '.fa-forward',
  prevButton: '.swiper-button-prev',
  effect:"slide"
}); 
// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('animal', function (page) {
    
    $.get('fact-data/animal.txt',function(data){
    var lines = data.split("~");
    var arraytest = data.split("~").length; 
  
   for(var i = arraytest-1  ; i >=0  ; i--){
       
      
        var example = 
                    `<div class='swiper-slide' id="${'animal_'+i}" data-idnum ="${'af_'+i}"  data-favorite="false">` +
                            "<span>"+lines[i]+"</span>"+
                        "</div>";
 
       $(".swiper-wrapper").prepend(example); 
       //mySwiper.appendSlide(example);
   }
     mySwiper.updateContainerSize() 
     mySwiper.updateSlidesSize()
      
    
});

   
    
    //opening the panels
 $$('.open-left-panel').on('click', function (e) {
        // 'left' position to open Left panel
        myApp.openPanel('left');
        mySwiper.lockSwipes();
    });

// closing the panels
  $$('.panel-close').on('click', function (e) {
    myApp.closePanel();
    mySwiper.unlockSwipes();
    });
    
    $(".picture-background").css({
        'background-image':'linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url("img/animals-img/animal.jpeg")',
        'background-position':"center",
        'background-size':"cover"
    })
    
    $(".main-home-nav").css({
         'background-color': "rgba(39, 174, 96, 0.50)",
            
    })
    
    $("head").append("<style>.main-home-nav:before,.main-home-nav:after{background-color:rgba(39, 174, 96, 0.50)}")
    

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;
/// add global javascript code here 

    
    if (page.name === 'africa') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
        
    }
})





// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="africa"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})


///////////////////////////////////////******* global function for the app ****////////////////////////////////////////

//// swiper 


    //opening the panels
 $$('.open-left-panel').on('click', function (e) {
        // 'left' position to open Left panel
        myApp.openPanel('left');
        mySwiper.lockSwipes();
    });

// closing the panels
  $$('.panel-close').on('click', function (e) {
    myApp.closePanel();
    mySwiper.unlockSwipes();
    });

    $.get('fact-data/africa.txt',function(data){
    var lines = data.split("~");
    var arraytest = data.split("~").length; 
  
   for(var i = arraytest-1  ; i >=0  ; i--){
       
      
        var example = 
                   `<div class='swiper-slide' id="${i}">` +
                            "<span>"+lines[i]+"</span>"+
                        "</div>";
 
       $(".swiper-wrapper").prepend(example); 
       //mySwiper.appendSlide(example);
   }
     mySwiper.updateContainerSize() 
     mySwiper.updateSlidesSize()
      
    
});
