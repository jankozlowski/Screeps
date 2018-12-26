var roleExplorer = {
  /** @param {Creep} creep **/
  run: function(creep) {
    if (creep.room["N47E33"]) {
      if (creep.room.controller) {
        if (creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
          creep.moveTo(creep.room.controller);
        }
      }
    } else {
      creep.moveTo(new RoomPosition(10, 30, "E47N33"));
    }
  }
};

module.exports = roleExplorer;
