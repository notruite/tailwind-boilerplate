tailwind.config = {
    theme: {
        extend: {
            animation: {
                'infinite-scroll': 'infinite-scroll 80s linear infinite',
            },
            keyframes: {
                'infinite-scroll': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                }
            }                    
        },
    },
};


$("input:radio[name='pricebracketstarter']").click(function(){
    $('span.startervalue').html(this.value);
})

$("input:radio[name='pricebracketadvanced']").click(function(){
    $('span.advancedvalue').html(this.value);
})

