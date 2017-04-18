$(function(){
  var peerReviewCanvas =$('#peer-review')[0];
  var peerReviewCtx=peerReviewCanvas.getContext('2d');
//draw peer review chart
  var colors={
    'yellow',
    'purple',
    'silver',
    'green',
    'red',
    'cyan',

  }
  peerReviewCtx.fillText("Peer Review",90,10);
  for(i=0;i<10;i++){
    peerReviewCtx.fillText(10-i , 10 ,30 + i * 30)
    peerReviewCtx.moveTo(25, 30 + i * 20);
    peerReviewCtx.lineTo(200, 30 + i * 20);

  }
  peerReviewCtx.stroke();
  $.ajax({
      url:'/peerReviews.json',
      dataType:'json'
      success:function(data){
          var catagories=Object.keys(data);
          catagories.forEach(function(category,index){
          var value=data[category];
          var x=30 + index * 10;
          var y=30+(10-value) * 20;
          var height=value *20;
          peerReviewCtx.fillStyle=colors[index];
          peerReviewCtx.fillRect(x,y,5,height);
          peerReviewCtx,fillRect(100,80+20*index,10,10);
          peerReviewCtx.strokeText(category,100,30+20,index)
          });

        }
  })
  var pointDistirbutionCanvas=$('#porint-distirbution')[0];
  var pointDistirbutionCtx=pointDistirbution.getContext('2d');
$.ajax({
  url:'/point-distirbution',
  dataType'json';
  success:function(data){
    var people=Object.keys(data);
    var total =Object.values(data).reduce(function(acc,value){
      return acc+value;
    },0);
    var angle=0;
    people.foreach(function(person){
      var percent=data[person] /total;
      var end=start+percent*2*Math.PI;
      pointDistirbutionCtx.beginPath();
      pointDistirbutionCtx.arc(100,100,80,start,end);
      start=end;
      pointDistirbutionCtx.fillStyle=colors[index];
      pointDistirbutionCtx.fill();
    });
  }
})

});
