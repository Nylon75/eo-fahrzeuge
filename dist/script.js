const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#navigation');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Menü schließen':'Menü öffnen');nav.classList.toggle('open',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Menü öffnen');nav.classList.remove('open')}));
document.querySelectorAll('dialog').forEach(dialog=>{dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}})});
document.querySelectorAll('[data-product]').forEach(button=>button.addEventListener('click',()=>{const image=document.querySelector('#product-image');image.src='assets/'+button.dataset.product+'.jpg';image.alt=button.dataset.alt;const dark=button.dataset.product==='quad-black';image.style.mixBlendMode=dark?'normal':'multiply';image.parentElement.classList.toggle('dark-product',dark);document.querySelectorAll('[data-product]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button))})}));
const legalContent={
  impressum:[
    ['h3','Anbieter'],
    ['p','EO Fahrzeuge · KFZ-Meisterbetrieb'],
    ['p','Elvir Osmanlic'],
    ['p','Breite Heerstraße 8–10'],
    ['p','75365 Calw'],
    ['h3','Kontakt'],
    ['a','Telefon: 0173 5987568','tel:+491735987568'],
    ['a','E-Mail: eo.fahrzeuge@gmail.com','mailto:eo.fahrzeuge@gmail.com'],
    ['a','Weitere Geschäfts-E-Mail: info@eo-fahrzeuge.go1a.de','mailto:info@eo-fahrzeuge.go1a.de'],
    ['a','Weitere Website: eo-fahrzeuge.go1a.de','https://eo-fahrzeuge.go1a.de/']
  ],
  datenschutz:[
    ['p','Hinweis zur Vorschau: Die vollständigen Datenschutzinformationen werden vor einer öffentlichen Nutzung ergänzt.'],
    ['h3','Kontakt'],
    ['p','EO Fahrzeuge · Elvir Osmanlic · Breite Heerstraße 8–10 · 75365 Calw'],
    ['a','E-Mail: eo.fahrzeuge@gmail.com','mailto:eo.fahrzeuge@gmail.com'],
    ['h3','Externe Angebote'],
    ['p','Diese Seite lädt Schriftarten von Google Fonts. Dabei wird eine Verbindung zu Google hergestellt. Links zu Fahrzeugmodellen führen zu GOES; der Routenlink führt zu Google Maps. Beim Aufruf externer Angebote gelten deren Datenschutzinformationen.'],
    ['h3','Kontaktaufnahme'],
    ['p','Telefon- und E-Mail-Links öffnen die entsprechende Anwendung auf Ihrem Gerät. Diese Website enthält kein Kontaktformular und speichert selbst keine Formulardaten. Wenn Sie uns eine E-Mail senden, wird Ihre Nachricht über Ihren E-Mail-Anbieter übermittelt. Die Seite verwendet selbst keine Analyse- oder Marketingdienste.']
  ]
};
document.querySelectorAll('[data-legal]').forEach(button=>button.addEventListener('click',()=>{
  const key=button.dataset.legal;
  document.querySelector('#legal-title').textContent=key==='datenschutz'?'Datenschutz':'Impressum';
  const body=document.querySelector('#legal-body');
  body.replaceChildren();
  legalContent[key].forEach(([tag,text,href])=>{
    const element=document.createElement(tag);
    element.textContent=text;
    if(href){element.href=href;if(href.startsWith('https:')){element.target='_blank';element.rel='noopener noreferrer'}}
    body.append(element);
  });
  document.querySelector('#legal-dialog').showModal();
}));
document.querySelector('#year').textContent=new Date().getFullYear();
