scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleSwitchDown, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level1`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.chestOpen)
    music.powerDown.play()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleSwitchUp, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level1`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.chestOpen)
    music.powerUp.play()
})
let mySprite: Sprite = null
game.splash("Get to the closed chest ", "to win")
mySprite = sprites.create(img`
    . . . 6 6 . . . . 
    . . . . 6 . . . . 
    . . . 9 8 9 . . . 
    . . 9 8 8 8 9 . . 
    . 9 6 6 8 8 8 9 . 
    . 9 6 6 6 8 8 9 . 
    . 9 6 6 6 8 8 9 . 
    . . 9 6 6 6 9 . . 
    . . . 9 9 9 . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.chestOpen)
scene.cameraFollowSprite(mySprite)
