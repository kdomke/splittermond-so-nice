Hooks.on('diceSoNiceReady', (dice3d) => {
  console.log("Initialize Splittermond dice so nice");



  /**
   * Register a new system
   * The id is to be used with addDicePreset method
   * The name can be a localized string
   * @param {Object} system {id, name}
   * @param {String} mode "force", "exclusive", "default". Force will prevent any other systems from being enabled. exclusive will list only "exclusive" systems in the dropdown. 
   * Default will add the system as a choice left to each user.
   */

  dice3d.addSystem({ id: "SM", name: "Splittermond" }, "default");

  /**
   * Register a new dice preset
   * @param {Object} data: The informations on the new dice preset (see below)
   * @param {String} (Optional) shape: should be explicit when using a custom die term. 
   *                                   Supported shapes are d2,d4,d6,d8,d10,d12,d20
   */

   dice3d.addDicePreset({
    type: "d10",
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "modules/splittermond-so-nice/graphics/splittermond_d10.png"],
    bumpMaps: [,,,,,,,,,"modules/splittermond-so-nice/graphics/splittermond_d10_bump.png"],
    font: "Didot",
    system: "SM"
  });

  dice3d.addDicePreset({
    type: "d6",
    labels: ["1", "2", "3", "4", "5", "modules/splittermond-so-nice/graphics/splittermond_d6.png"],
    bumpMaps: [,,,,,"modules/splittermond-so-nice/graphics/splittermond_d6_bump.png"],
    font: "Didot",
    system: "SM"
  });

});