$(function(){
	var imgsrc             = '"images/spark'; // it will automaticaly add 1.png,2.png etc
	var particle_number    = 1; //how many particles to be launched at every mouse move
	var particle_variation = 10; //randomness of the starting position
	var delay              = 20; //delay bewteen mousemove // default: 1
	var spark_types        = 3; //how many types of spark images do we use
	var particle_life      = 700; //how long the particle lasts before gone
	var death_rand         = 100; //how much to spread the particles
	var particle_min_size  = 5; // minimum particle starting size
	var particle_max_size  = 15; //maximum particle starting size
	var last_moved         = 0, now, rand, myim; //nothing to change here

    $('.sparkling').mousemove(function(pos){
        now = pos.timeStamp;
        if(now - last_moved > delay) {
            for(var i = 1; i <= particle_number; ++i) {
                rand = particle_min_size + Math.floor(Math.random() * (particle_max_size-particle_min_size));
                $('body').append('<img class="particle" src=' + imgsrc + (1+Math.floor(Math.random() * (spark_types-1))) + '.png"' + "/>");
                myim = $('.particle:last');
                var vari = -Math.floor(particle_variation/5) + Math.floor(Math.random() * particle_variation);
                myim.css('top',pos.pageY + vari).css('left',pos.pageX + vari).css('width',rand).css('height',rand);
                randt = $('.particle:last').offset().top -(death_rand/2) + Math.floor(Math.random() * death_rand);
                randl = $('.particle:last').offset().left -(death_rand/2) + Math.floor(Math.random() * death_rand);
                myim.animate({
                    left:   randl,
                    top:    randt,
                    height: 'toggle',
                    width:  'toggle'
                }, particle_life, function(){
                    $(this).remove();
                });
            }
            last_moved = now;
        }
    });
});
