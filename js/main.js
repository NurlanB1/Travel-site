document.addEventListener('DOMContentLoaded', function (e) {

  let menu = document.querySelector('#mobile-menu');
  let burger = document.querySelector('#burger-menu');
  burger.addEventListener('click', function (e) {
    menu.classList.toggle('show_mobile_menu')
    burger.classList.toggle('active')
  })

  butter.init({ cancelOnTouch: true });

  var lazyLoadInstance = new LazyLoad({
    // Your custom settings go here
  });

  //carousel 
  let siemaOptions = {
    duration: 400,
    easing: 'ease-out',
    perPage: 2,
  }
  let mySiema = new Siema(siemaOptions);
  let mySiema2 = new Siema({
    selector: '.siema2',
    duration: 400,
    easing: 'ease-out',
    perPage: 2,
  });

  let media = window.matchMedia('(max-width: 600px)');
  let media2 = window.matchMedia('(min-width: 601px) and (max-width: 767px)');
  let media3 = window.matchMedia('(min-width: 768px)');

  function handle3(e, g = mySiema, z = mySiema2) {
    if (e.matches) {
      g.destroy(true);
      z.destroy(true);
    }
  }
  function handle2(e, g = mySiema, z = mySiema2) {
    if (e.matches) {
      g.destroy(true);
      g = new Siema(siemaOptions);
      mySiema = g;
      z.destroy(true);
      z = new Siema({
        selector: '.siema2',
        duration: 400,
        easing: 'ease-out',
        perPage: 2,
      });
      mySiema2 = z;
    }
  }
  function handleTabletChange(e, g = mySiema, z = mySiema2) {
    if (e.matches) {
      g.destroy(true);
      g = new Siema({ ...siemaOptions, perPage: 1 });
      mySiema = g;
      z.destroy(true);
      z = new Siema({
        selector: '.siema2',
        duration: 400,
        easing: 'ease-out',
        perPage: 1,
      });
      mySiema2 = z;
    }
  }
  handleTabletChange(media, mySiema, mySiema2);
  media.addEventListener('change', handleTabletChange);
  handle2(media2, mySiema, mySiema2);
  media2.addEventListener('change', handle2);
  handle3(media3, mySiema, mySiema2);
  media3.addEventListener('change', handle3);
  console.log(mySiema);
})