(() => {
 const header = document.querySelector('.site-header');
 const toggle = document.querySelector('.menu-toggle');
 const nav = document.getElementById('primary-navigation');
 const closeMenu = () => {
   if (!header || !toggle) return;
   header.classList.remove('menu-open');
   toggle.setAttribute('aria-expanded','false');
   toggle.setAttribute('aria-label','Abrir menú de navegación');
 };
 if (header && toggle && nav) {
   toggle.addEventListener('click', () => {
     const open = header.classList.toggle('menu-open');
     toggle.setAttribute('aria-expanded',String(open));
     toggle.setAttribute('aria-label',open?'Cerrar menú de navegación':'Abrir menú de navegación');
   });
   nav.querySelectorAll('a').forEach(a => a.addEventListener('click',closeMenu));
   document.addEventListener('keydown',e => { if(e.key==='Escape') closeMenu(); });
   window.addEventListener('resize',() => { if(window.innerWidth>760) closeMenu(); });
 }
 const form=document.getElementById('quoteForm');
 if(form) form.addEventListener('submit',e=>{
   e.preventDefault();
   const name=(document.getElementById('name')?.value||'').trim();
   const message=(document.getElementById('message')?.value||'').trim();
   if(!name||!message) return;
   const text='Hola ASRBytes, soy '+name+'. Necesito: '+message;
   window.open('https://wa.me/34601599585?text='+encodeURIComponent(text),'_blank','noopener,noreferrer');
 });
 const year=document.getElementById('year');
 if(year) year.textContent=new Date().getFullYear();
})();