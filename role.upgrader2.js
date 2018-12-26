var roleUpgrader2 = {
  /** @param {Creep} creep **/
  run: function(creep) {
    console.log("room" + creep.room.name);
    var myroom = "l";

    console.log("room" + myroom);
    console.log(creep.room == myroom);
    if (creep.room.name == "E48N33") {
      creep.moveTo(new RoomPosition(10, 30, "E47N33"));
    } else {
      if (creep.memory.upgrading && creep.carry.energy == 0) {
        creep.memory.upgrading = false;
        creep.say("đź”„ harvest");
      }
      if (
        !creep.memory.upgrading &&
        creep.carry.energy == creep.carryCapacity
      ) {
        creep.memory.upgrading = true;
        creep.say("âšˇ upgrade");
      }

      if (creep.memory.upgrading) {
        if (
          creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE
        ) {
          creep.moveTo(creep.room.controller, {
            visualizePathStyle: { stroke: "#ffffff" }
          });
        }
      } else {
        var sources = creep.room.find(FIND_SOURCES);
        if (creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
          creep.moveTo(sources[1], {
            visualizePathStyle: { stroke: "#ffaa00" }
          });
        }
      }
    }
  }
};

module.exports = roleUpgrader2;
