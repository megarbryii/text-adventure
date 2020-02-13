const textNodes = [
    {
        id:0,
        name: 'The Grass Menagerie',
        text: 'You are in a room that is decorated in a variety of luscious green colors.  It has an aroma of freshly cut grass.  You see doors to the east and to the south.',
        options: [
            {
                text: 'Go east...',
                nextText: 1
            },
            {
                text: 'Go south...',
                nextText: 3
            }
        ]
    },
    {
        id:1,
        name: 'The Moonlit Walk',
        text: 'You are in a room that seems to be covered with a bluish haze as if everything was coverein pale moonlight.  It smells of rain covered rocks.  You see doors to the west, the south, and to the east.',    
        options: [
            {
                text: 'Go west...',
                nextText: 0
            },
            {
                text: 'Go south...',
                nextText: 4
            },
            {
                text: 'Go east...',
                nextText: 2
            }	
        ]
    },
    {
        id:2,
        name: 'The Solemn Room',
        text: 'You are in a room all decorated in white with floor length black curtains.  You smell a strange incense, and the atmosphere feels quite somber.  You see doors to the west and to the south.',   
        options: [
            {
                text: 'Go west...',
                nextText: 1
            },	
            {
                text: 'Go south...',
                nextText: 5
            }
        ]
    },
    {
        id: 3,
        name: 'Summer Palisade',
        text: 'You are in a room surrounded by radiant sunshine yellow.  The room smell of lemons and reminds you of a nice summer afternoon.  You see doors to the north, to the east, and to the south.',   
        options: [
            {
                text: 'Go north...',
                nextText: 0
            },
            {
                text: 'Go east...',
                nextText: 4
            },
            {
                text: 'Go south...',
                nextText: 6
            }
        ]
    },
    {
        id: 4,
        name: 'Sugar Sweetness',
        text: 'You are in a room that seems to be nothing but fluffy pink clouds that you are able to stand on.  You smell a mixture of cotton candy and bubblegum, and wonder if you will get diabetes just from the scent.  You see doors to the north, the east, the south, and the west.',    
        options: [
            {
                text: 'Go north...',
                nextText: 1
            },
            {
                text: 'Go east...',
                nextText: 5
            },
            {
                text: 'Go south...',
                nextText: 7
            },
            {
                text: 'Go south...',
                requiredState: (currentState) => currentState.paintCan,
                nextText: 8
            },
            {
                text: 'Go west...',
                nextText: 3
            }
        ]
    },
    {
        id: 5,
        name: 'Purple Sky',
        text: 'You are in a room filled with a purple haze.  You feel like you have to constantly rub your eyes in order to adjust your sight.  You see doors to the north, the west, and to the south.',   
        options: [
            {
                text: 'Go north...',
                nextText: 2
            },
            {
                text: 'Go west...',
                nextText: 4
            },
            {
                text: 'Go south...',
                nextText: 9
            }
        ]
    },
    {
        id: 6,
        name: 'Breakfast Nook',
        text: 'You are in a room of highly iridescent orange.  The scent of orange juice triggers a major desire for bacon, eggs, and toast.  You see doors to your north and to your east.',   
        options: [
            {
                text: 'Go north...',
                nextText: 3
            },
            {
                text: 'Go east...',
                nextText: 7
            },
            {
                text: 'Go east...',
                requiredState: (currentState) => currentState.paintCan,
                nextText: 8
            }
        ]
    },
    {
        id: 7,
        name: 'Bleeding Love',
        text: 'You are in a room painted in a scandalous shade of deep scarlet.  The scent of blooming flowers fill your nose.  You also happen to see a can of black paint on the floor.  There are doors to the west, the north, and the east.',   
        options: [
            {
                text: 'Go west...',
                nextText: 6
            },
            {
                text: 'Go north...',
                nextText: 4
            },
            {
                text: 'Go west...',
                nextText: 9
            },
            {
                text: 'Take the can of paint...',
                setState: { name: 'Paint can', paintCan: true },
                nextText: 8
            }
        ]
    },
    {
        id: 8,
        name: 'Bleeding Love',
        text: 'You are in a room painted in a scandalous shade of deep scarlet.  The scent of blooming flowers fill your nose.  There are doors to the west, the north, and the east.',   
        options: [
            {
                text: 'Go west...',
                nextText: 6
            },
            {
                text: 'Go north...',
                nextText: 4
            },
            {
                text: 'Go west...',
                nextText: 9
            }
        ]
    },
    {
        id: 9,
        name: 'Emptiness',
        text: 'You are in a pitch black room.  There are spotlights on doors to the north, the west, and the east; however, the door to the east is colored red.  You try the door, but it seems to be locked shut.',    
        options: [
            {
                text: 'Go north...',
                nextText: 5
            },
            {
                text: 'Go west...',
                nextText: 7
            },
            {
                text: 'Carry the can of paint back...',
                requiredState: (currentState) => currentState.paintCan,
                nextText: 8
            },
            {
                text: 'Use the can of paint on the door...',
                requiredState: (currentState) => currentState.paintCan,
                nextText: 10
            }
        ]
    },
    {
        id: 10,
        name: 'Escape!',
        text: 'After splashing the red door with the black paint, you hear the faint clicking of the door unlocking.  You quickly open the door and sprint out of the room, only to feel your head getting dizzy and light-headed.  You fall to the floor, slowly becoming unconscious.  You  wake up a few minutes later on your couch, realizing that it was all just a really bad dream...',   
        options: [
            {
                text: 'Well played.... Want to do it again?',
                nextText: -1
            }
        ]
    }
]

export default textNodes
