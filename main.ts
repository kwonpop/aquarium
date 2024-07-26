player.onChat("run", function () {
	
})
player.onItemInteracted(BOW, function () {
    for (let index = 0; index < 4; index++) {
        mobs.spawn(TROPICAL_FISH, randpos(
        pos(6, 1, -9),
        pos(11, 6, 9)
        ))
        blocks.place(FIRE_CORAL_FAN, randpos(
        pos(6, 1, -9),
        pos(11, 0, 9)
        ))
    }
    blocks.fill(
    GLASS,
    pos(5, 0, -10),
    pos(12, 7, 10),
    FillOperation.Replace
    )
    blocks.fill(
    WATER,
    pos(6, 1, -9),
    pos(11, 6, 9),
    FillOperation.Replace
    )
})
