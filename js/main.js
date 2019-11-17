$(document).ready(function(){
    
   $('.fixed-menu .fa-angle-left').on('click', function (){
       
       $(this).parent('.fixed-menu').toggleClass('is-visible');       
       
       if( $(this).parent('.fixed-menu').hasClass('is-visible') )
       {
          $(this).parent('.fixed-menu').animate({

              left: '-250px'

          }, 500);
           
           $('body').animate({

              paddingLeft: 0

          }, 500);
           
           $('.fa-angle-left').css("right", "-35px");
           $('.fa-angle-left').css("border-top-left-radius", "0");
           $('.fa-angle-left').css("border-bottom-left-radius", "0");
           $('.fa-angle-left').css("border-top-right-radius", "50px");
           $('.fa-angle-left').css("border-bottom-right-radius", "50px");
           $('.fa-angle-left').css("box-shadow", "7px 2px 9px -3px rgba(0, 0, 0, 0.3)");
           
       }else{
           
          $(this).parent('.fixed-menu').animate({

              left: '0px'

          }, 500);
           
           $('body').animate({

              paddingLeft: '250px'

          }, 500);
           
           $('.fa-angle-left').css("right", "0");
           $('.fa-angle-left').css("border-top-left-radius", "50px");
           $('.fa-angle-left').css("border-bottom-left-radius", "50px");
           $('.fa-angle-left').css("border-top-right-radius", "0px");
           $('.fa-angle-left').css("border-bottom-right-radius", "0px");
           $('.fa-angle-left').css("box-shadow", "7px 2px 9px -3px rgba(0, 0, 0, 0)");
           
       }
   });
    
   $(function() {
        $('.chart').easyPieChart({
            size: 125,
            barColor: '#ce00ff',
            scaleColor:false,
            lineWidth: 9,
            trackWidth: 3,
            lineCap: 'circle'
        });
    });
    
    var pieChartCanvas = $("#mycanvas").get(0).getContext("2d");
    var pieChart = new chart(pieChartCanvvas);
    var PieData = [
      {
          value: 700,
          color: "cornflowerblue",
          highlight: "lightskyblue",
          label: "javaScript"
      },
      {
          value: 500,
          color: "lightgreen",
          highlight: "yellowgreen",
          label: "HTML"    
      },
      {
          value: 400,
          color: "orange",
          highlight: "darkorange",
          label: "css"    
      }
    ];
   
    var pieOptions = {
        segmentShowStroke: true,
        segmentStrokeColor: "#00f",
        segmentStrokeWidth: 2,
        percentageInnerCutout: 50,
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: true,
        animateScale: false,
        responsive: true,
        maintainAspectRatio: true,
        
    };
    pieChart.Doughnut(PieData, pieOptions);
   
});