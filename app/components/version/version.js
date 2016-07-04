'use strict';

angular.module('monsterMasher.version', [
  'monsterMasher.version.interpolate-filter',
  'monsterMasher.version.version-directive'
])

.value('version', '0.1');
