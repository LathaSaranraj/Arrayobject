const people=[
    {
        id:0,
        hero:'Spider-Man',
    },
    {
        id:1,
        hero:'Thor',
    },
    {
        id:2,
        hero:'Black Panther',
    },
    {
        id:3,
        hero:'Captain Marvel',
    },
    {
        id:4,
        hero:'Silver Surfer',
    },
    ];
    console.log("List of objects in an array is",people);
                                              //to find index of id 4 
var index=people.findIndex(function(identity){         //passing function in findIndex
    return identity.id==4;
});
console.log("The index of id 4 is "+index);
console.log("Details of id 4 is ",people[index]);

// remove black panther using splice method
//people.splice(2,1);
//console.log("After removing black panther is ",people);



var afterRemove=people.filter(function(heroname){
    return heroname.hero.trim().toLowerCase()!=='BLACK PANTHER'.trim().toLowerCase();
});
console.log("After removing black panther in an array is",afterRemove);  


//using filter function to display the  hero name that starts with s
const nameStartS=people.filter(function(name){
    return name.hero.toLowerCase().slice(0,1)=='s';
}
);
console.log("Heroname starts with s are ",nameStartS);