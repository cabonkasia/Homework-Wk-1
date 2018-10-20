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

//---Resting---//
function rest(obj) {
    obj.health = 10;
    return obj;
};

document.getElementById('inn').addEventListener('click', function() {
    rest(hero);
})

//---Picking up items---//
///////////////////////
function pickUpItem(heroLikeObj, obj) {
    // obj = {};
    // heroLikeObj.inventory.push(obj);
    // console.log('hellooo')
};

// weapon = {};
// pickUpItem(hero, weapon)


document.getElementById('dagger').addEventListener('click', function(weaponLikeObj) {
    weaponLikeObj = {
        type: 'dagger',
        damage: 2
    }
    hero.inventory.push(weaponLikeObj)
})

//---Equiping weapon---//
function equipWeapon(heroLikeObj) {
    heroLikeObj.inventory.unshift(heroLikeObj.weapon)
};

document.getElementById('bag').addEventListener('click', function(heroLikeObj) {
    heroLikeObj.inventory    
})