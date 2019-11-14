var total_score = 0;
var total_cards = 0;
var  index = 0;
var atr = 1;
var cards = [
   {
       img : ['4.45.png'],
       a : ['A. 4:45' , 'true'],
       b : ['B. 2:15', 'false'],
       c : ['C. 10:03', 'false']
   },
   {
       img : ['9.25.png'],
       a : ['A. 8:15','false'],
       b : ['B. 9:35','false'],
       c : ['C. 9:25', 'true']
   }
]
// const master = () => {
//     {
//         ValidityState ();
//     }
//         document.getElementById('frm').setAttribute('action','scorepage5.html');
//     }
// }
var score = 0
//Value Validation funtion
const validateForm = (fmr) => {
   if (index < 4) {
   try{
       for (var i = 0; i < 3; i++) {
           if (fmr[i].value == 'true') {
               if (fmr[i].checked == true) {
                  score++;
               }
           }
       }
   }
   catch(e){
       console.log('error in checking', e);
   }
   new_card(index);
   index++;
   total_score = score;
   alert(total_score);
   return false;
   }
   alert(total_score);
}
const new_card = (index) => {
   document.getElementById('1').nextSibling.nodeValue = cards[index]['a'][0];
   console.log(document.getElementById('1').nextSibling.nodeValue);
   document.getElementById('2').nextSibling.nodeValue = cards[index]['b'][0];
   document.getElementById('3').nextSibling.nodeValue = cards[index]['c'][0];
   document.getElementById('myimage').setAttribute('src',cards[index]['img'][0]);
   document.getElementById('1').setAttribute('value',cards[index]['a'][atr]);
   console.log (document.getElementById(1).value);
   document.getElementById('2').setAttribute('value',cards[index]['b'][atr]);
   document.getElementById('3').setAttribute('value',cards[index]['c'][atr]);;
}
