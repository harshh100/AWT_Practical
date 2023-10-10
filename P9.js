async function loadModule(choice) {
    // based on condition it will load the module
    if (choice === "cars") {
      const module1 = await import("./P9_cars.cjs");
      console.log(module1);
    } else if (choice === "city") {
      const module2 = await import("./P9_city.cjs");
      console.log(module2);
    }
  }
  
  console.log("For choice of cars : ");
  loadModule("cars");
  
  console.log("For choice of cities : ");
  loadModule("city");
  