
var membercard = {
    tier: 'bronze'
}

function gettotal(price,membercard) {
    var discountRate;
    // if (membercard.tier === 'bronze') {
    //     discountRate = 0.02;
    // }
    // else if (membercard.tier === 'sliver') {
    //     discountRate = 0.05;
    // }
    // else if (membercard.tier === 'gold') {
    //     discountRate = 0.08;
    // }
    // else {
    //     discountRate = 0.1;
    // }
    switch (membercard.tier) {
        case 'bronze':
            discountRate = 0.02;
            break;
        case 'sliver':
            discountRate = 0.05;
            break;
        case 'gold':
            discountRate = 0.08;
            break;
        default:
            discountRate = 0.1;    
            break;
    }
    return price * (1 - discountRate);
}
var s = gettotal(50000,membercard);
console.log(s);