function delayedResultPromise(n1, n2, delayTime) {
  const resultPromise = new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove(n1 + n2);
    }, delayTime);
  });
  return resultPromise;
}
delayedResultPromise(4, 5, 3000).then(console.log);
