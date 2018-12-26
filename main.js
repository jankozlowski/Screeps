var roleHarvester = require("role.harvester");
var roleUpgrader = require("role.upgrader");
var roleUpgrader2 = require("role.upgrader2");
var roleBuilder = require("role.builder");
var roleRepairer = require("role.repairer");
var roleExplorer = require("role.explorer");

module.exports.loop = function() {
  for (var name in Memory.creeps) {
    if (!Game.creeps[name]) {
      delete Memory.creeps[name];
      console.log("Clearing non-existing creep memory:", name);
    }
  }

  for (var name in Game.creeps) {
    var creep = Game.creeps[name];
    if (creep.memory.role == "harvester") {
      roleHarvester.run(creep);
    }
    if (creep.memory.role == "upgrader") {
      roleUpgrader.run(creep);
    }
    if (creep.memory.role == "upgrader2") {
      roleUpgrader2.run(creep);
    }
    if (creep.memory.role == "builder") {
      roleBuilder.run(creep);
    }

    if (creep.memory.role == "repairer") {
      roleBuilder.run(creep);
    }
    if (creep.memory.role == "explorer") {
      roleExplorer.run(creep);
    }
  }

  var harvesters = Game.creeps;

  //   console.log(harvesters.length)

  for (var creeper in harvesters) {
    var simplecreep = Game.creeps[name];
    //    console.log(creeper);

    //    console.log(simplecreep.pos);
  }

  // console.log(harvesters.length)

  var harvesters = _.filter(
    Game.creeps,
    creep => creep.memory.role == "harvester"
  );
  var upgraders = _.filter(
    Game.creeps,
    creep => creep.memory.role == "upgrader"
  );
  var upgraders2 = _.filter(
    Game.creeps,
    creep => creep.memory.role == "upgrader2"
  );
  var builders = _.filter(Game.creeps, creep => creep.memory.role == "builder");
  var repairers = _.filter(
    Game.creeps,
    creep => creep.memory.role == "repairer"
  );
  var explorers = _.filter(
    Game.creeps,
    creep => creep.memory.role == "explorer"
  );

  if (harvesters.length < 6 && Game.rooms["E48N33"].energyAvailable >= 300) {
    var newName = "Harvester" + Game.time;
    console.log("Spawning new harvester: " + Game.time);
    Game.spawns["EmperorOfMankind"].spawnCreep([WORK, CARRY, MOVE], newName, {
      memory: { role: "harvester" }
    });
  } else if (

  /*  else if(explorers.length < 2 && Game.rooms['E48N33'].energyAvailable>=300) {
        var newName = 'explorer' + Game.time;
        console.log('Spawning new explorer: ' + Game.time);
        Game.spawns['EmperorOfMankind'].spawnCreep([CLAIM,CARRY,MOVE], newName,
            {memory: {role: 'explorer'}});
    }*/
    upgraders.length < 9 &&
    Game.rooms["E48N33"].energyAvailable >= 300
  ) {
    var newName = "Upgrader" + Game.time;
    console.log("Spawning new upgrader: " + Game.time);
    Game.spawns["EmperorOfMankind"].spawnCreep([WORK, CARRY, MOVE], newName, {
      memory: { role: "upgrader" }
    });
  } else if (
    upgraders2.length < 6 &&
    Game.rooms["E48N33"].energyAvailable >= 300
  ) {
    var newName = "Upgrader2" + Game.time;
    console.log("Spawning new upgrader2: " + Game.time);
    Game.spawns["EmperorOfMankind"].spawnCreep([WORK, CARRY, MOVE], newName, {
      memory: { role: "upgrader2" }
    });
  } else if (
    builders.length < 3 &&
    Game.rooms["E48N33"].energyAvailable >= 300
  ) {
    var newName = "builder" + Game.time;
    console.log("Spawning new builder: " + Game.time);
    Game.spawns["EmperorOfMankind"].spawnCreep([WORK, CARRY, MOVE], newName, {
      memory: { role: "builder" }
    });
  } else if (
    repairers.length < 2 &&
    Game.rooms["E48N33"].energyAvailable >= 300
  ) {
    var newName = "repairer" + Game.time;
    console.log("Spawning new repairer: " + Game.time);
    Game.spawns["EmperorOfMankind"].spawnCreep([WORK, CARRY, MOVE], newName, {
      memory: { role: "repairer" }
    });
  }
};
