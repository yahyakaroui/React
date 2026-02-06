import React from 'react'



export  function Component2() {
  return (
    <div> component2 </div>
  )
}


export  function Component1() {
    const arr=[1,3,4,5]
    arr.map((item)=>{
        if(item%2==0){
            return item;
        }else{
            console.log("pair");
        }
    })

    const obj=['Doe', 'John'];
    

    const [ nom, prenom ] = obj; //tetsama destructuration 
    console.log(nom); //Doe
    console.log(prenom); //John

    const newObj={
        ...obj, //ma3neha jibli les proprietes mte3 obj lkol
        age:30
    };
    console.log(newObj);

    //atelier 0
    //question1
    const findLongestWord = (words) => {
  // décomposition
  let [...list] = words;

  // map : { mot, longueur }
  const mapped = list.map(mot => ({
    mot,
    longueur: mot.length
  }));

  // reduce : mot le plus long
  const longest = mapped.reduce((max, current) =>
    current.longueur > max.longueur ? current : max
  );

  return longest;
};

// Test
console.log(findLongestWord(["react", "javascript", "spring", "frontend"]));

//question2
const input=[
    [1, 2, 3],
    [4, 2, 6],
    [3, 2, 1]
  ];
const result = input
  .flat() // flat pour faire 
  .reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});

console.log(result);

//question3
let students = [
  { name: 'John', id: 123, marks: 98 },
  { name: 'Baba', id: 101, marks: 23 },
  { name: 'John', id: 200, marks: 45 },
  { name: 'Wick', id: 115, marks: 75 },
];

const total = students
  // ajouter bonus de 15 si marks < 50
  .map(student => ({
    ...student,
    marks: student.marks < 50 ? student.marks + 15 : student.marks
  }))
  // garder seulement les notes > 50
  .filter(student => student.marks > 50)
  // calculer le total
  .reduce((sum, student) => sum + student.marks, 0);

console.log(total);

  return (
    <> 
    <div>hello</div>
     <Component2/>
    
    </>
  )
}

export  function Component3(title1, title2,title3) {
  return (
    <> 
    <h1>{title1}</h1>
    <h1>{title2}</h1>
    <h1>{title3}</h1>
    </>
  )
}