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
function pickUpItem(heroLikeObj, obj) {
    //console.log(heroLikeObj);
    heroLikeObj.inventory.push(obj);
};


document.getElementById('dagger').addEventListener('click', function(weaponLikeObj) {
    weaponLikeObj = {
        type: 'dagger',
        damage: 2
    }
    hero.inventory.push(weaponLikeObj);
})

//---Equiping weapon---//
function equipWeapon(heroLikeObj) {
    if(heroLikeObj.inventory.length === 0) {
    } else {
    heroLikeObj.weapon = heroLikeObj.inventory[0];}
};

document.getElementById('bag').addEventListener('click', function(heroLikeObj) {
    equipWeapon(hero);   
})

