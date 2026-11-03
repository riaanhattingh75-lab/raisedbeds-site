(function(){
  var lb=document.getElementById('lb'),img=document.getElementById('lbImg');
  document.querySelectorAll('.g').forEach(function(b){
    b.addEventListener('click',function(){
      var t=b.querySelector('img');
      img.src=b.dataset.full; img.alt=t.alt;
      if(lb.showModal){lb.showModal()}else{lb.setAttribute('open','')}
    });
  });
  function close(){ if(lb.close){lb.close()}else{lb.removeAttribute('open')} img.removeAttribute('src'); }
  lb.addEventListener('click',close);
  lb.querySelector('.lb-close').addEventListener('click',close);
  lb.addEventListener('close',function(){img.removeAttribute('src')});
  var y=document.getElementById('yr'); if(y){y.textContent=new Date().getFullYear()}
  // sticky WhatsApp: hide while the hero button or contact card is already on screen
  var fab=document.querySelector('.fab'),vis={};
  if('IntersectionObserver' in window&&fab){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){vis[e.target.id||'cta']=e.isIntersecting});
      fab.classList.toggle('hide',Object.keys(vis).some(function(k){return vis[k]}));
    });
    var cta=document.querySelector('.hero .btn-wa'),ct=document.getElementById('contact');
    if(cta){cta.id='cta';io.observe(cta)} if(ct){io.observe(ct)}
  }
})();
