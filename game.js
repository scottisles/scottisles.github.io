/* Variables declared using the elements from the HTML id's */
const story = document.getElementById('storyboard'); 
const choiceElement = document.getElementById('choice');
const helmutScore = document.getElementById('helmut');
const armourScore = document.getElementById('armour');
const shieldScore = document.getElementById('shield');
const weaponScore = document.getElementById('weapon');
var x = document.getElementById("myAudio"); 

//console.log('helmutScore');
//console.log('armourScore');

let state = {}

function startGame () {
    state = {}
    showStoryNode(1)
}

// Function to play and pause audio
function playAudio() { 
    x.play();
} 
  
function pauseAudio() { 
    x.pause(); 
} 

// Function to populate the story board using the id="storyboard"
function showStoryNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    story.innerText = textNode.text
    while (choiceElement.firstChild) {
      choiceElement.removeChild(choiceElement.firstChild)  
}

//Function to present the options for the player
textNode.options.forEach(option => {
 {
    const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => chooseOption(option))
      choice.appendChild(button)
  }
  console.log(helmutScore)
})
}


//function to rise the armour levels
function chooseOption(option) {
  showStoryNode(option.storypart);
  helmutScore.innerHTML = option.helmutScore;
  armourScore.innerHTML = option.armourScore;
  shieldScore.innerHTML = option.shieldScore;
  weaponScore.innerHTML = option.weaponScore;
}
  

const textNodes = [
  {
    id: 1,
    text: 'You awaken in a prison cell dazed and unaware of your surroundings, all you can see is the light coming into your cell from the middle of the room and a couple of guards outside looking in and they say “so I see you’re finally awake”',
      options: [
      {text: 'You decide to say nothing',
      helmutScore: '0',
      armourScore: '0',
      shieldScore: '0',
      weaponScore: '0',
      storypart: 10},

      {text: 'You laugh out loud',
      helmutScore: '0',
      armourScore: '0',
      shieldScore: '0',
      weaponScore: '0',
      storypart: 21},

      {text: 'You ask the guards "How did I get here?"',
      helmutScore: '0',
      armourScore: '0',
      shieldScore: '0',
      weaponScore: '0',
      storypart: 21}
    ]
  },
  {
    id: 10,
    text: 'As you didn’t respond, the guards rattles the prison bars with a piece of wood and says “Hoi! I can see you moving, get up before I make you...."',
    options: [
      {text: "Yeah I'm awake, How did I get here?",
      helmutScore: '0',
      armourScore: '0',
      shieldScore: '0',
      weaponScore: '0',
      storypart: 22},

      {text: 'Okay you got me, what is this place?',
      helmutScore: '0',
      armourScore: '0',
      shieldScore: '0',
      weaponScore: '0',
      storypart: 21}
    ]
  },
    {
    id: 21,
    text: '“This is the prison of Donmore, the capital in the kingdom of Didsmore” says the guard on the right while the guard on the left is looking through what appears to be your clothes',
    options: [
      {text: '"Guard, What are you looking for?',
      helmutScore: '0',
      armourScore: '0',
      shieldScore: '0',
      weaponScore: '0',
      storypart: 22},
      {text: "'What have I done, i'm innocent?'",
      helmutScore: '0',
      armourScore: '0',
      shieldScore: '0',
      weaponScore: '0',
      storypart: 22},
      {text: 'Leave my clothes alone!',
      helmutScore: '0',
      armourScore: '0',
      shieldScore: '0',
      weaponScore: '0',
      storypart: 24}
    ]
  },
  {
    id: 22,
    text: '"so, you don’t remember eh?.... robbing those poor helpless people of the city? Well, you are going to be in here for a long time. We might let you go if you can answer my riddle, deal?” the guard on the right says this while smirking and looking you dead in the eyes',
    options: [
      {text: 'Okay then, whats the riddle?',
      helmutScore: '0',
      armourScore: '0',
      shieldScore: '0',
      weaponScore: '0',
      storypart: 23},
      {text: "You think I'm that silly to be tricked into a riddle for freedom, I'd rather die!", 
      helmutScore: '0',
      armourScore: '0',
      shieldScore: '0',
      weaponScore: '0',
      storypart: 150}
    ]
  },
  {
    id: 23,
    text: "'Here goes, you have me today, tomorrow you will have more; As your time passes, I'm not easy to store; I don't take up space, But I'm only in one place; I am what you saw, but not what you see. What am I?'",
    options: [
      {text: 'The Sun',
      helmutScore: '0',
      armourScore: '0',
      shieldScore: '0',
      weaponScore: '0',
      storypart: 151},
      {text: 'Memories',
      helmutScore: '50/100',
      armourScore: '50/100',
       shieldScore: '0/100',
      weaponScore: '50/100',
      storypart: 39},
      {text: 'Time',
      helmutScore: '0',
      armourScore: '0',
      shieldScore: '0',
      weaponScore: '0',
      storypart: 151}
    ]
  },

  {
    id: 24,
    text: '"The guard walks over to you and smacks you with a club ad says "if you ask anymore questions ill kill you"',
    options: [
      {text: 'Stay quiet',
      helmutScore: '0',
      armourScore: '0',
      shieldScore: '0',
      weaponScore: '0',
      storypart: 25},
      {text: 'Ask again',
      helmutScore: '0',
      armourScore: '0',
      shieldScore: '0',
      weaponScore: '0',
      storypart: 155},
    ]
  },

  {
    id: 25,
    text: '"We might let you go if you can answer my riddle, deal?” the guard on the right says this while smirking and looking you dead in the eyes"',
    options: [
      {text: 'Sure, give me the riddle',
      helmutScore: '0',
      armourScore: '0',
      shieldScore: '0',
      weaponScore: '0',
      storypart: 23},
      {text: 'Stay quiet',
      helmutScore: '0',
      armourScore: '0',
      shieldScore: '0',
      weaponScore: '0',
      storypart: 151},
    ]
  },

  {
    id: 39,
    text: "'Well done, Your Helmut, Armour and Weapon have been upgraded to 50% \r\rWhat will you do with your newfound freedom?'",
    options: [
      {text: 'I guess ill find the exit…where is it?',
      helmutScore: '50/100',
      armourScore: '50/100',
      shieldScore: '0/100',
      weaponScore: '50/100',
      storypart: 40},
      {text: 'Well I’m just going to go back to the streets',
      helmutScore: '50/100',
      armourScore: '50/100',
      shieldScore: '0/100',
      weaponScore: '50/100',
      storypart: 41}
      ]
    },
  {
    id: 40,
    text: "'The guard kindly shows you to the exit, as soon as the doors open your run, but where too? '",
    options: [
      {text: "'You head to the local Didsmore Inn for a pint or lager'",
      helmutScore: '50/100',
      armourScore: '75/100',
       shieldScore: '0/100',
      weaponScore: '50/100',
      storypart: 42},
      {text: 'You head to the Town Hall to enquire about the robbery you committed',
      helmutScore: '50/100',
      armourScore: '75/100',
       shieldScore: '0/100',
      weaponScore: '50/100',
      storypart: 42},
    ]
  },

  {
    id: 41,
    text: "'Do whatever you want but if you end up back in here it wont end so well for you'",
    options: [
      {text: "'Leave'",
      helmutScore: '0',
      armourScore: '0',
      shieldScore: '0',
      weaponScore: '0',
      storypart: 40},
    ]
  },

  {
    id: 42,
    text: 'Armour - Upgraded to 75%\r\rOn route, a courier aproaches with a letter. "pppppp-please take this its u-urgent" as he stutters his words out noticabley getting more anxious as he trembles',
    options: [
      {text: 'take the Letter',
      helmutScore: '50/100',
      armourScore: '75/100',
       shieldScore: '0/100',
      weaponScore: '50/100',
      storypart: 44},
    ]
  },

  {
    id: 44,
    text: 'As you take the letter from the courier, he runs away as fast as he could looking over his shoulder as if he was being followed, You read the letter. \r Dear sir/maam\rThe King has formally requested your presence, please make your way to the castle with much haste as he requires your help',
    options: [
      {text: 'You decide to head to the Castle to follow up on this important message',
      helmutScore: '75/100',
      armourScore: '75/100',
       shieldScore: '0/100',
      weaponScore: '75/100',
      storypart: 45},
      {text: 'You decide to ignore and go about your day as normal', 
      helmutScore: 'D',
      armourScore: 'E',
      shieldScore: 'A',
      weaponScore: 'D',
      storypart: 154}
    ]
  },

  {
    id: 45,
    text: 'Your Helmut and Weapon are upgraded to 75%.\r\rOn your journey to the castle you meet a band of raiders running from a small hamlet which you can see in the distance. There houses on fire and people screaming for help',
    options: [
      {text: 'Talk to the bandits',
      helmutScore: '75/100',
      armourScore: '75/100',
       shieldScore: '0/100',
      weaponScore: '75/100',
      storypart: 46},
      {text: 'fight the bandits',
      helmutScore: '75/100',
      armourScore: '75/100',
       shieldScore: '0/100',
      weaponScore: '75/100',
      storypart: 47},
      {text: 'Help the towns people',
      helmutScore: '75/100',
      armourScore: '75/100',
       shieldScore: '0/100',
      weaponScore: '75/100',
      storypart: 57}
    ]
  },

  {
    id: 46,
    text: 'What do you want to say to them?',
    options: [
      {text: 'You shout asking them to stop or there will be trouble', 
      helmutScore: '75/100',
      armourScore: '75/100',
       shieldScore: '0/100',
      weaponScore: '75/100',
      storypart: 49},
      {text: 'Ask them to come to some sort of agreement', 
      helmutScore: '75/100',
      armourScore: '75/100',
       shieldScore: '0/100',
      weaponScore: '75/100',
      storypart: 50}
      ]
  },


  {
    id: 47,
    text: 'You aproach the bandits, what weapon do you use',
    options: [
      {text: 'Sword', 
      helmutScore: '100/100',
      armourScore: '100/100',
      shieldScore: '0/100',
      weaponScore: '75/100',
      storypart: 51},
      {text: 'Axe',
      helmutScore: '100/100',
      armourScore: '100/100',
       shieldScore: '0/100',
      weaponScore: '75/100',
      storypart: 51},
      {text: 'Dagger', 
      helmutScore: '100/100',
      armourScore: '100/100',
       shieldScore: '0/100',
      weaponScore: '75/100',
      storypart: 51}
    ]
  },

  {
    id: 48,
    text: 'Text',
    options: [
      {text: 'option',      
      helmutScore: '75/100',
      armourScore: '75/100',
       shieldScore: '0/100',
      weaponScore: '75/100',
      storypart: 1},
      {text: 'option', 
      helmutScore: '75/100',
      armourScore: '75/100',
       shieldScore: '0/100',
      weaponScore: '75/100',
      storypart: 55}
    ]
  },

  {
    id: 49,
    text: '"Stop or else.... What!" shouts the middle of three bandits, he looks to be thier leader',
    options: [
      {text: 'If you dont stop ill just have to kill you',
      helmutScore: '75/100',
      armourScore: '75/100',
       shieldScore: '0/100',
      weaponScore: '75/100',
       storypart: 51},
      {text: 'Im sure we can come to an agreement', 
      helmutScore: '75/100',
      armourScore: '75/100',
       shieldScore: '0/100',
      weaponScore: '75/100',
      storypart: 52}
    ]
  },

  {
    id: 50,
    text: 'Text',
    options: [
      {text: 'option', 
      helmutScore: '75/100',
      armourScore: '75/100',
       shieldScore: '0/100',
      weaponScore: '75/100',
      storypart: 1},
      {text: 'option', 
      helmutScore: '75/100',
      armourScore: '75/100',
       shieldScore: '0/100',
      weaponScore: '75/100',
      storypart: 55}
    ]
  },

  {
    id: 51,
    text: 'Helmut and Armour upgrade to 100%\r\rNo i dont think we can, you can either walk on and mind your own buisness or you can die" says the bandit who looks to be thier leader',
    options: [
      {text: 'You shout back "if you dont, ill just have to kill you', 
      helmutScore: '100/100',
      armourScore: '100/100',
       shieldScore: '0/100',
      weaponScore: '75/100',
      storypart: 53},
      {text: 'You reply "what if i dont?"', 
      helmutScore: '100/100',
      armourScore: '100/100',
       shieldScore: '0/100',
      weaponScore: '75/100',
      storypart: 53}
    ]
  },

  {
    id: 52,
    text: 'Helmut and armour upgraded to 100% \r\rlooks like you will die then" says one of the bandits',
    options: [
      {text: 'Fight the Bandits', 
      helmutScore: '100/100',
      armourScore: '100/100',
       shieldScore: '0/100',
      weaponScore: '75/100',
      storypart: 47},
    ]
  },



  {
    id: 53,
    text: 'After unsheathing your weapon the bandits ready thier rapiers, which bandit do you attack?',
    options: [
      {text: 'Left Bandit', 
      helmutScore: '100/100',
      armourScore: '100/100',
      shieldScore: '0/100',
      weaponScore: '100/100',
      storypart: 54},
      {text: 'Middle Bandit', 
      helmutScore: '100/100',
      armourScore: '100/100',
      shieldScore: '0/100',
      weaponScore: '100/100',
      storypart: 55},
      {text: 'Right Bandit', 
      helmutScore: '100/100',
      armourScore: '100/100',
      shieldScore: '0/100',
      weaponScore: '100/100',
      storypart: 54}
    ]
  },


  {
    id: 54,
    text: 'You attack the bandit and your blade gets stuck in his armour, the bandit leader thrusts his great sword through your upper arm which leaves you helpless whilst the 3rd bandit swings for your head and decapitates you.',
    options: [
      {text: 'Its Game over',
      helmutScore: '100/100',
      armourScore: '100/100',
      shieldScore: '0/100',
      weaponScore: '100/100',
      storypart: 151}
    ]
  },

  {
    id: 55,
    text: 'Helmut Armour and Weapon are at 100%\rYou swing your weapon at the bandit leader and feel it slices through his neck followed, this was followed by a large thud on the floor. You look down and smile realiosing his head came clean off. The other 2 bandits see this and decide to make a run for it shouting between each other "what the hell was that, im not sticking around for it to happen to me"',
       options: [
      {text: 'Loot the bandit leader', 
      helmutScore: '100/100',
      armourScore: '100/100',
      shieldScore: '0/100',
      weaponScore: '100/100',
      storypart: 56},
      {text: 'Help the halfling town folks', 
      helmutScore: '100/100',
      armourScore: '100/100',
      shieldScore: '0/100',
      weaponScore: '100/100',
      storypart: 57}
    ]
  },

  {
    id: 56,
    text: 'You find a shiny new sheild completley un-damaged, do you take it?',
    options: [
      {text: 'Yes', 
      helmutScore: '100/100',
      armourScore: '100/100',
      shieldScore: '100/100',
      weaponScore: '100/100',
      storypart: 58},
      {text: 'No', 
      helmutScore: '100/100',
      armourScore: '100/100',
      shieldScore: '0/100',
      weaponScore: '100/100',
      storypart: 57}
    ]
  },

  {
    id: 57,
    text: 'You help the Halfling town folks, What do you do first',
    options: [
      {text: 'Ask for directions to the castle', 
      helmutScore: '100/100',
      armourScore: '100/100',
      shieldScore: '100/100',
      weaponScore: '100/100',
      storypart: 59},
      {text: 'Ask what they need help with', 
      helmutScore: '100/100',
      armourScore: '100/100',
      shieldScore: '100/100',
      weaponScore: '100/100',
      storypart: 60}
    ]
  },

  {
    id: 58,
    text: 'you now have a new sheild that will block the first hit you take when you enter combat',
    options: [
      {text: 'Help the halfling town folks', 
      helmutScore: '100/100',
      armourScore: '100/100',
      shieldScore: '100/100',
      weaponScore: '100/100',
      storypart: 57}
    ]
  },

  {
    id: 59,
    text: "'one of the villagers aproaches and she taps you on the knee, as you are 5'10 and she is 3'0 and she point and says in a shaky voice go that way that will take you straight to the castle gates in the city of vermouth'",
    options: [
      {text: 'Go that way -->', 
      helmutScore: '100/100',
      armourScore: '100/100',
      shieldScore: '100/100',
      weaponScore: '100/100',
      storypart: 62},
      ]
  },

  {
    id: 60,
    text: 'You speak with an old woman who says "oh we dont need help with anything kind sir but is there anything i can help you with?"',
    options: [
      {text: 'ask for directions to the castle', 
      helmutScore: '100/100',
      armourScore: '100/100',
      shieldScore: '100/100',
      weaponScore: '100/100',
      storypart: 59},
    ]
  },


  {
    id: 61,
    text: '',
    options: [
      {text: '', storypart: 54},
      {text: '', storypart: 55}
    ]
  },

  {
    id: 62,
    text: 'After walking for 3 hours without a break you see a wandering traveller',
    options: [
      {text: 'Approach her', 
      helmutScore: '100/100',
      armourScore: '100/100',
      shieldScore: '100/100',
      weaponScore: '100/100',
      storypart: 200},
      {text: 'Walk past', 
      helmutScore: '100/100',
      armourScore: '100/100',
      shieldScore: '100/100',
      weaponScore: '100/100',
      storypart: 64}
    ]
  },

  {
    id: 64,
    text: 'you walk past her without even looking in her direction and you suddenly appear at the castle as if you were knocked unconconcious',
    options: [
      {text: 'Go into the Castle', 
      helmutScore: '100/100',
      armourScore: '100/100',
      shieldScore: '100/100',
      weaponScore: '100/100',
      storypart: 65},
      {text: 'ask a local what just happened', 
      helmutScore: '100/100',
      armourScore: '100/100',
      shieldScore: '100/100',
      weaponScore: '100/100',
      storypart: 200}
    ]
  },

  {
    id: 65,
    text: "'As you enter the castle the king is already there waiting for you, i-i've been waiting for you, what took you so long he exclaims'",
    options: [
      {text: 'it was a long journey', 
      helmutScore: '100/100',
      armourScore: '100/100',
      shieldScore: '100/100',
      weaponScore: '100/100',
      storypart: 66},
      {text: 'say about the traveller', 
      helmutScore: '100/100',
      armourScore: '100/100',
      shieldScore: '100/100',
      weaponScore: '100/100',
      storypart: 200}
    ]
  },

  {
    id: 66,
    text: 'well ofc how silly of me haha, i have a gift for you" he exclaims and he hands you a map',
    options: [
      {text: 'take the map', 
      helmutScore: '100/100',
      armourScore: '100/100',
      shieldScore: '0/100',
      weaponScore: '100/100',
      storypart: 200},
    ]
  },

  {
    id: 67,
    text: '',
    options: [
      {text: '', storypart: 54},
      {text: '', storypart: 55}
    ]
  },
  

/////// GAME OVER SCENES /////////////


{
  id: 150,
  text: 'Your are clubbed to death \r \r GAME OVER',
  options: [
    {text: 'Restart the game?',
    helmutScore: '0',
    armourScore: '0',
    shieldScore: '0',
    weaponScore: '0',
    storypart: 1}
  ]
},

{
  id: 151,
  text: 'You are left to die \r \r GAME OVER',
  options: [
    {text: 'Restart the game?', 
    helmutScore: '0',
    armourScore: '0',
    shieldScore: '0',
    weaponScore: '0',
    storypart: 1}
  ]
},

{
  id: 152,
  text: 'You are scorched by the sun and have water to hydrate yourself. \r \r GAME OVER',
  options: [
    {text: 'Restart the game?', 
    helmutScore: '0',
    armourScore: '0',
    shieldScore: '0',
    weaponScore: '0',
    storypart: 1}
  ]
},

{
  id: 153,
  text: 'The Dragon consumes you! \r \r GAME OVER',
  options: [
    {text: 'Restart the game?', 
    helmutScore: '0',
    armourScore: '0',
    shieldScore: '0',
    weaponScore: '0',
    storypart: 1}
  ]
},

{
  id: 154,
  text: 'The group of Bandits beat you to death and steal all your coin and armour \r \r GAME OVER',
  options: [
    {text: 'Restart the game?', 
    helmutScore: '0',
    armourScore: '0',
    shieldScore: '0',
    weaponScore: '0',
    storypart: 1}
  ]
},
{
  id: 155,
  text: '"the guard grabs you by the throat through the cell door and slices your neck with a dagger"',
  options: [
    {text: 'You slowly die as the blood trickles out your neck',
    helmutScore: '0',
    armourScore: '0',
    shieldScore: '0',
    weaponScore: '0',
    storypart: 1},
  ]
},


{
  id: 160,
  text: 'CONGRATULATION \R you have completed the Chaos Dungeon \r \r Well Done!',
  options: [
    {text: 'Restart the game?', 
    helmutScore: '0',
    armourScore: '0',
    shieldScore: '0',
    weaponScore: '0',
    storypart: 1},
    {text: 'Celebrate?', 
    helmutScore: '0',
    armourScore: '0',
    shieldScore: '0',
    weaponScore: '0',
    storypart: 161}
  ]
},
  
{
  id: 161,
  text: 'Here have a virtual drink on me! cheers :D',
  options: [
    {
      text: 'Start again?',
      helmutScore: 'B',
      armourScore: 'O',
      shieldScore: 'O',
      weaponScore: 'M',
      storypart: 1}
  ]
},

{
  id: 200,
  text: 'TO BE CONTINUED......Thanks for playing',
  options: [
    {text: 'Click to restart', storypart: 1},

  ]
},


  {
    id: 99,
    text: 'You have been killed',
    options: [
      {
        text: 'Restart the game?',
        helmutScore: 'D',
        armourScore: 'E',
        shieldScore: 'A',
        weaponScore: 'D',
        storypart: 1}
    ]
  },
]
startGame()