module.exports = function getZerosCount(number, base) {
  // your implementation
  let count=0;
  const DEBUG=false;

  if (DEBUG)
    console.log("base = "+base);

  for(let simple=2; simple<=base; simple++) {
    if (base%simple==0){
      let degree=0;
      while(base%simple==0) {
        degree++;
        base=base/simple;
      }

      if (DEBUG)
        console.log("simple - "+simple+"^"+degree);

      let sum=0;
      let temp=number;
      while(temp/simple>0) {
        sum+=Math.floor(temp/simple);
        temp=Math.floor(temp/simple);
      }

      if (DEBUG)
        console.log("sum - "+sum+"["+Math.floor(sum/degree)+"]");

      if (count>0)
        count=Math.floor(Math.min(count, sum/degree));
      else 
        count=Math.floor(sum/degree);
    }
  }

  if (DEBUG)
    console.log("Result = "+count);

  return count;
}
