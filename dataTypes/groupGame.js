let sprite = game.createSprite(2, 4);

let score = 0;

let speed = 500;

let visualScoreX = 0;

let visualScoreY = 0;

input.onButtonPressed(Button.A, function () {
  if (score > 0 && visualScoreX % 5 === 0) {
    visualScoreY++;

    visualScoreX = 0;
  }

  game.createSprite(visualScoreX, visualScoreY);

  if (sprite.get(LedSpriteProperty.X) == 2) {
    //do something

    if (speed > 100) {
      speed -= 50;
    }

    score++;

    visualScoreX++;
  } else {
    // do something else

    basic.showNumber(score);

    basic.showLeds(` 

# # # # # 

# # # # # 

# # # # # 

# # # # # 

# # # # # 

`);

    control.reset();
  }
});

basic.forever(function () {
  sprite.move(1);

  basic.pause(speed);

  sprite.ifOnEdgeBounce();
});

// Scoring

// Create your own score

// Increase the score at the right time

// Show the score when the player loses

// Reset the score after showing the player loss score

// Difficulty

// make the game get more difficult the higher the players score is

// create a max speed so the game is never "impossible"

// Animation

// Flash a solid screen of lights on loss

// Have the dot go across the bottom instead of the middle

// Every time you score a point make another led light up until the end of that game
