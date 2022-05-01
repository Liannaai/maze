scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenSwitchUp, function (sprite, location) {
    tiles.setTilemap(tilemap`層級1`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.chestOpen)
    music.powerUp.play()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenSwitchDown, function (sprite, location) {
    tiles.setTilemap(tilemap`層級2`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.chestOpen)
    music.powerDown.play()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.over(false)
})
let mySprite: Sprite = null
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
tiles.setTilemap(tilemap`層級3`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.chestOpen)
scene.cameraFollowSprite(mySprite)
