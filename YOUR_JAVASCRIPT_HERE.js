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

//---BONUS---// 
//---displayStats function---//

    function displayStats(heroLikeObj) {
        let name = heroLikeObj.name;
        let health = heroLikeObj.health;
        let weaponType = heroLikeObj.weapon.type;
        let weaponDamage = heroLikeObj.weapon.damage;
        let displayStatsMessage = `Hero\'s name: ${name}, hero\'s health: ${health}, hero\'s weapon: ${weaponType}, hero\'s weapon damage: ${weaponDamage}`

        document.getElementById('displayStats').innerHTML = displayStatsMessage;
   } 

 
 //---change name function---//

 
 function changeName (heroLikeObj) {
        let input = document.querySelector('#inputField');
             document.getElementById('submitBtn').addEventListener('click', function() {
             let newName = input.value;
             console.log(newName);
             heroLikeObj.name = newName;
             displayStats(heroLikeObj);
        });
               
 };
 
 changeName(hero);
 
 //---the end---//
 displayStats(hero);