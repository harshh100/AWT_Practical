function* evenNumGenerator() {
    let n = 0;
    while (true) {
      yield n;
      n += 2;
    }
  }
  function* numGenerator() {
    let n = 0;
    while (true) {
      yield n++;
    }
  }
  const gen = evenNumGenerator();
  for (let i = 0; i < 3; i++) {
    console.log("Generator :");
    // done false means generator function has not finished execution
    console.log(gen.next());
  }
  // generator function
  const itr = numGenerator();
  for (let i = 0; i < 5; i++) {
    console.log("Iterator :");
    console.log(itr.next());
  }
  