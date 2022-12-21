
let ElementArray = ["Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", "Sodium", "Magnesium", "Aluminum", "Silicon", 
"Phosphorus", "Sulphur", "Chlorine", "Argon", "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", 
"Copper", "Zinc", "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium", "Molybdenum",
"Technetium","Ruthenium","Rhodium","Palladium","Silver","Cadmium","Indium","Tin","Antimony","Tellurium","Iodine","Xenon","Caesium","Barium","Lanthanum",
"Cerium","Praseodymium","Neodymium","Promethium","Samarium","Europium","Gadolinium","Terbium","Dysprosium","Holmium","Erbium","Thulium","Ytterbium",
"Lutetium","Hafnium","Tantalum","Tungsten","Rhenium","Osmium","Iridium","Platinum","Gold","Mercury","Thallium","Lead","Bismuth","Polonium","Astatine",
"Radon","Francium","Radium","Actinium","Thorium","Protactinium","Uranium","Neptunium","Plutonium","Americium","Curium","Berkelium","Californium","Einsteinium",
"Fermium","Mendelevium","Nobelium","Lawrencium","Rutherfordium","Dubnium","Seaborgium","Bohrium","Hassium","Meitnerium","Darmstadtium","Roentgenium","Copernicium",
"Nihonium","Flerovium", "Moscovium","Livermorium","Tennessine","Oganesson"]

var AtomicArray = [];
var totalNumberOfElements = 119

for (var i = 1; i <= totalNumberOfElements; i++) {
    AtomicArray.push(i);
    }

function myFunction() {
    var atom = document.getElementById("atomicNumber").value;
        if (atom === ""){
             document.getElementById("demo").innerHTML = "Atomic Number cannot be a blank. Try again";
        }
        else{
            var index = AtomicArray.indexOf(+atom);
            var element = ElementArray[index];

            var group = groupFinder(index);
            var state = stateFinder(index);

            if (+atom <= 118){
                document.getElementById("demo").innerHTML = "The element with atomic number " + atom + " is " + element;
                document.getElementById("group").innerHTML = group;
                document.getElementById("state").innerHTML = state;
            }
            else{
                document.getElementById("demo").innerHTML = "Element with that atomic number does not exist yet. You could be the one to discover it :)";  
                document.getElementById("group").innerHTML = "";
                document.getElementById("state").innerHTML = "";
            }
        }
}

function elementFinder() {
    var elem = document.getElementById("elementName").value;
    if (elem === ""){
        document.getElementById("demo").innerHTML = "Element cannot be a blank. Try again";
    }
    else{
        var index = ElementArray.indexOf(elem);
        var atom = AtomicArray[index];

        var group = groupFinder(index);
        var state = stateFinder(index);

        if(elem = ElementArray[index]){
            document.getElementById("demo").innerHTML = elem + "'s atomic number is " + atom;
            document.getElementById("group").innerHTML = group;
            document.getElementById("state").innerHTML = state;
        }
    else{
        document.getElementById("demo").innerHTML = " That element does not exist yet. You could be the one to discover it :)";
        document.getElementById("group").innerHTML = "";
        document.getElementById("state").innerHTML = "";
        }
    }
}

function groupFinder(index) {
    var group = "";
    if(index >= 56 && index <= 70){
        group = "Lanthanoids";
    }
    else if(index >= 88 && index <= 102){
        group = "It belongs to the group Actinoids";
    }
    else if(index == 2 || index == 10 || index== 18 || index == 36 || index == 54 || index == 86){
        group = "It belongs to the group Alkali Metals";
    }
    else if((index >= 20 && index <= 29) ||  (index >= 38 && index <= 47) || (index >= 71 && index <= 79) || (index >= 103 && index <= 108)){
        group = "It belongs to the group Transition Metals";
    }
    else if(index == 3 || index == 11 || index== 19 || index == 37 || index == 55 || index == 87){
        group = "It belongs to the group Alkaline Earth Metals";
    }
    else if(index == 12 || index == 30 || index== 48 || index == 49 || (index >= 80 && index <= 83) ){
        group = "It belongs to the group Post - Transition Metals";
    }
    else if(index == 13 || index == 31 || index== 32 || index == 50 || index == 51 || index == 84){
        group = "It belongs to the group Metalloids";
    }
    else if(index == 1 || index == 9 || index== 17 || index == 35 || index == 53 || index == 85){
        group = "It belongs to the group Noble Gases";
    }
    else if((index >= 5 && index <= 8) ||  (index >= 14 && index <= 16) || index == 33 || index == 34 || index == 52 || index == 0){
        group = "It belongs to the group Reactive Metals";
    }
    else{
        group = "No group";
    }
    return group;
}

function stateFinder(index){
    var state = " ";
    if(index == 34 || index == 79){
        state = "It occurs in a Liquid State";
    }
    else if ((index >= 6 && index <= 9) || index == 16 || index == 17 || index == 35 || index == 53 || index == 85 || index == 0 || index == 1){
        state = "It occurs in a Gaseous State";
    }
    else if (index >= 103 && index <= 117){
        state = "No Known State (Unknown)";
    }
    else if (index < 119){
        state = "It occurs in a Solid State";
    }
    return state;
}
