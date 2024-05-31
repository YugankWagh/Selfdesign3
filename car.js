AFRAME.registerComponent('drive',{
  init:function(){
  this.drivecar()
  },
  isvelocityactive:function(){
    return Math.random() < 0.25
  },

  drivecar:function(){
    var multiply=10
    var carrotation=0
    window.addEventListener('keydown',function(e){
    var car=document.querySelector('#control-car')
    if(e.code=="ArrowRight" && carrotation>=40){
      carrotation -=5
      car.setAttribute('rotation',{x:0,y:0,z:carrotation})
    }
    })
  }


})