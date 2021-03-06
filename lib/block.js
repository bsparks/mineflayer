var Biome = require('./biome')
  , blocks = require('./enums/blocks')

module.exports = Block;

function Block(type, biomeId) {
  this.type = type;
  this.meta = 0;
  this.light = 0;
  this.skyLight = 0;
  this.add = 0;
  this.biome = new Biome(biomeId);

  var blockEnum = blocks[type];
  if (blockEnum) {
    this.name = blockEnum.name;
    this.hardness = blockEnum.hardness;
    this.displayName = blockEnum.displayName;
  } else {
    this.name = "";
    this.displayName = "";
    this.hardness = 0;
  }
}

