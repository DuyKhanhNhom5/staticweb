$().ready(function(){
    LoadChart();
    function LoadChart(){

        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['d1', 'd2', 'd3', 'd4'],
                datasets: [{
                    label: '#Data 1',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: 
                        'rgba(255, 99, 132, 0.2)'
                    ,
                    borderColor: 
                        'rgba(255, 99, 132, 1)'
                    ,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
function addData(chart, label, color, data) {
		chart.data.datasets.push({
	    label: label,
      backgroundColor: color,
      data: data
    });
    chart.update();
}setTimeout(function() {
	addData(myChart, '# of Votes 2017', '#ff0000', [16, 14, 8,4]);
}, 100);   
    }
    $("#btn").click(function(){
        $.ajax({
                url: "vd.php",
                type: "post",
                dataType:"text",
                data:"id="+$("#txt").val(),
                success:function(val){alert(val)},
                error:function(){alert("Error")}
            });
    });
    $("#btnvd2").click(function(){
        $.ajax({
                url: "vd2.php",
                type: "post",
                dataType:"text",
                data:"id="+$("#txt").val(),
                success:function(val){$('#val').html(val)},
                error:function(){alert("Error")}
            });
    });

    $("#btnvd4").click(function(){
        $.ajax({
                url: "vd4.php",
                type: "post",
                dataType:"json",
                data:"id="+$("#txt").val(),
                success:function(val){
                  //  $('#val').html(val)
               
                $.each(val,function(key,value){
                    tam = "<div>"+value.book_id+":"+value.book_name+"</div>";
                    if(value.book_name=='T')
                        {
                            $('#rs').append(tam);
                        }
                        else{
                            $('#rs1').append(tam);
                        }
                });
            },
                error:function(){alert("Error")}
            });
    });

    //json
    x={'x1':1,'x2':'Noi dung x2'};;
    y={
        'y1':'Gtri y1',
        'y2':{
                'y21':11,
                'y22':'Noi dung y22'
            }
    };
    z={
        'z1':1,
        'z2':[
                {'z21':1, 'z22':2}
                ,{'z21':11, 'z22':22}
        ]
    };
    var g=" ";
    //Lấy ptu json.
   // alert(z.z2[1].z22);
    $.each(z.z2,function(key,val){
        g+=val.z21;
    });
    alert(g);


});