var roleUpgrader = {
  /** @param {Creep} creep **/
  run: function(creep) {
    if (creep.memory.upgrading && creep.carry.energy == 0) {
      creep.memory.upgrading = false;
      creep.say("đź”„ harvest");
    }
    if (!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
      creep.memory.upgrading = true;
      creep.say("âšˇ upgrade");
    }

    if (creep.memory.upgrading) {
      if (
        (creep.pos.y == 28 && creep.pos.x == 12) ||
        creep.pos.x == 11 ||
        creep.pos.x == 10 ||
        creep.pos.y == 27 ||
        creep.posx == 9
      ) {
        var random = Math.random() * (29 - 27) + 27;
        console.log("random " + random);
        creep.moveTo(8, random);
      }
      if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.room.controller, {
          visualizePathStyle: { stroke: "#ffffff" }
        });
      }
    } else {
      var sources = creep.room.find(FIND_SOURCES);
      if (creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
        creep.moveTo(sources[1], { visualizePathStyle: { stroke: "#ffaa00" } });
      }
    }
  }
};

module.exports = roleUpgrader;
