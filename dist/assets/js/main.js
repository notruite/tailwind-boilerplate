// SCROLL TO
$("#productButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#productSection").offset().top -50
    }, 500);
});

$("#pricingButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#pricingSection").offset().top -50
    }, 500);
});

// CARROUSEL
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

// DYNAMIC PRICING
$("input:radio[name='pricebracketstarter']").click(function(){
    $('span.startervalue').html(this.value);
})

$("input:radio[name='pricebracketadvanced']").click(function(){
    $('span.advancedvalue').html(this.value);
})