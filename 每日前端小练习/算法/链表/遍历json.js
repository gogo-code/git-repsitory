const json = {
  a: { b: { c: {} } },
  d: { e: 2 },
};
const path = ['d', 'e'];
let p = json;
path.forEach((k) => {
  console.log(p)

  p = p[k];
});
