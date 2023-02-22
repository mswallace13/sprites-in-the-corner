game.showLongText("Our journey begins as our hero wakes up in what he thinks would be a normal day,but as he wakes up he realizes something is wrong,the world he once knew was destroyed by these horryfying creatures,he knows what he must do,save the world.", DialogLayout.Bottom)
let hero_sprite = sprites.create(assets.image`hero`, SpriteKind.Player)
hero_sprite.setPosition(21, 26)
let enemy_sprite = sprites.create(assets.image`ghost`, SpriteKind.Enemy)
enemy_sprite.setPosition(125, 24)
let food_sprite = sprites.create(img`
    . . 2 2 b b b b b . . . . . . . 
    . 2 b 4 4 4 4 4 4 b . . . . . . 
    2 2 4 4 4 4 d d 4 4 b . . . . . 
    2 b 4 4 4 4 4 4 d 4 b . . . . . 
    2 b 4 4 4 4 4 4 4 d 4 b . . . . 
    2 b 4 4 4 4 4 4 4 4 4 b . . . . 
    2 b 4 4 4 4 4 4 4 4 4 e . . . . 
    2 2 b 4 4 4 4 4 4 4 b e . . . . 
    . 2 b b b 4 4 4 b b b e . . . . 
    . . e b b b b b b b e e . . . . 
    . . . e e b 4 4 b e e e b . . . 
    . . . . . e e e e e e b d b b . 
    . . . . . . . . . . . b 1 1 1 b 
    . . . . . . . . . . . c 1 d d b 
    . . . . . . . . . . . c 1 b c . 
    . . . . . . . . . . . . c c . . 
    `, SpriteKind.Food)
food_sprite.setPosition(18, 96)
let projectile_sprite = sprites.create(assets.image`ghost projectile`, SpriteKind.Food)
projectile_sprite.setPosition(125, 94)
