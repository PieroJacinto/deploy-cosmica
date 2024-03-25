'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("products_features",[
      {
        idProductFK:1,
        idFeatureFK:1

      },{
        idProductFK:1,
        idFeatureFK:2
      },
      {
        idProductFK:1,
        idFeatureFK:3
      },
      {
        idProductFK:1,
        idFeatureFK:4
      },
      {
        idProductFK:2,
        idFeatureFK:5
      },
      {
        idProductFK:2,
        idFeatureFK:6
      },
      {
        idProductFK:2,
        idFeatureFK:7
      },
      {
        idProductFK:2,
        idFeatureFK:8
      },
      {
        idProductFK:3,
        idFeatureFK:9
      },
      {
        idProductFK:3,
        idFeatureFK:10
      },
      {
        idProductFK:3,
        idFeatureFK:11
      },
      {
        idProductFK:3,
        idFeatureFK:12
      },
      {
        idProductFK:4,
        idFeatureFK:13
      },
      {
        idProductFK:4,
        idFeatureFK:14
      },
      {
        idProductFK:4,
        idFeatureFK:6
      },
      {
        idProductFK:4,
        idFeatureFK:15
      },
      {
        idProductFK:5,
        idFeatureFK:16
      },
      {
        idProductFK:5,
        idFeatureFK:17
      },
      {
        idProductFK:5,
        idFeatureFK:18
      },
      {
        idProductFK:5,
        idFeatureFK:4
      },
      {
        idProductFK:6,
        idFeatureFK:19
      },
      {
        idProductFK:6,
        idFeatureFK:9
      },
      {
        idProductFK:6,
        idFeatureFK:20
      },
      {
        idProductFK:6,
        idFeatureFK:10
      },
      {
        idProductFK:7,
        idFeatureFK:13
      },
      {
        idProductFK:7,
        idFeatureFK:6
      },
      {
        idProductFK:7,
        idFeatureFK:2
      },
      {
        idProductFK:7,
        idFeatureFK:4
      },
      {
        idProductFK:8,
        idFeatureFK:17
      },
      {
        idProductFK:8,
        idFeatureFK:6
      },
      {
        idProductFK:8,
        idFeatureFK:4
      },
      {
        idProductFK:8,
        idFeatureFK:16
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products_features", null, {});
  }
};