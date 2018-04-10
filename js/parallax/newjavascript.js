if($(window).width()>960)
    {
    $('body').parallax({
        'elements':[
            {
                'selector': '.move',
                'properties':{
                    'x':{
                        'right':{
                            'initial':500,
                            'multiplier':0.04,
                            'unit':'px',
                            'invert':false
                        }
                    },
                    'y':{
                        'initial':100,
                        'multiplier':0.1,
                        'unit':'px',
                        'invert':true
                    }
                }
            }
        ]
    });
}

