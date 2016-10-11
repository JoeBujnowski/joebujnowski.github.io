var halofighters=['drone','covDestroyer','jackalsniper','grunt','jackalShield','spartanCharge','spartan','spartan2','spartanLocke'];
document.addEventListener("DOMContentLoaded", function(event) {
  for(var i=0; i<halofighters.length; i++)
  {
    document.getElementById(halofighters[i]).addEventListener("click", function(event) {
      event.target.parentNode.style.display='none';
      var beenShot=0;
      for(var i=0; i<halofighters.length; i++)
      {
        if(document.getElementById(halofighters[i]).style.display=='none')
        {
          beenShot++;
        }
      }
      if(beenShot==9)
      {
        document.getElementById("eliteassassin").className='eliteassassinBig';
      }
    }, false);
  }
});
