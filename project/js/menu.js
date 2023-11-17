var usAirForceJets = [
  {
    name: "F-22 Raptor",
    role: "Air Superiority Fighter",
    maxSpeed: "Mach 2.25",
    range: "1,600 nautical miles",
    payload: "Internal weapons bays",
  },
  {
    name: "F-35 Lightning II",
    role: "Multirole Fighter",
    maxSpeed: "Mach 1.6",
    range: "1,200 nautical miles",
    payload: "Variety of weapons, stealth capabilities",
  },
  {
    name: "F-16 Fighting Falcon",
    role: "Multirole Fighter",
    maxSpeed: "Mach 2",
    range: "2,620 nautical miles",
    payload: "Versatile, widely used",
  },
  {
    name: "A-10 Thunderbolt II",
    role: "Attack Aircraft",
    maxSpeed: "439 mph",
    range: "800 nautical miles",
    payload: "30mm GAU-8 Avenger rotary cannon, ground-attack capability",
  },
  {
    name: "B-2 Spirit",
    role: "Strategic Bomber",
    maxSpeed: "Mach 0.95",
    range: "6,000 nautical miles",
    payload: "Stealth bomber, nuclear capability",
  },
  {
    name: "C-17 Globemaster III",
    role: "Transport Aircraft",
    maxSpeed: "Mach 0.77",
    range: "2,400 nautical miles",
    payload: "Large cargo capacity, versatile airlifter",
  },
];

usAirForceJets.forEach((jet) => {
  console.log(`
          Name: ${jet.name}
          Role: ${jet.role}
          Max Speed: ${jet.maxSpeed}
          Range: ${jet.range}
          Payload: ${jet.payload}
          ============================
        `);
});


export { usAirForceJets };



