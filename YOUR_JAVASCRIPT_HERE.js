// Write your JS here

const hero = {
    name: '',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: '',
        damage: 2
    }
};

function rest(obj) {
    obj.health = 10;
    return obj;
};

document.getElementById('inn').addEventListener('click', function() {
    rest(hero);
})

function pickUpItem() {};
function equipWeapon() {};