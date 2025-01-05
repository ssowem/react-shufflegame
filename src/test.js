// 피셔 예이츠 셔플 알고리즘
const arr = ["a","b","c","d","e"]

const shuffleArray = () => {
  for (let i = arr.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }

  console.log(arr);
  
};


shuffleArray();

// i는 4이다
// randomIndex는 0부터 4까지이다.
// 나올수있는 배열은 ["a","b","c","d","e"]
// 예를 들어 이번에 randomIndex가 2가 나왔다. 
// arr[i] = e , arr[randomIndex] = c 
//["e", "c"] = ["c", "e"]
// const arr = ["a","b","e","d","c"]



// i가 3이다
// randomIndex는 0부터 3까지이다
// 나올수있는 배열은  ["a","b","c","d"]
// 예를들어 이번에 randexindex가 2가 나왔다.
// arr[i]= "d" , arr[randomIndex] = "c"
// ["d","c"] = ["c", "d"]
// const arr = [a,b,d,c]




// i가 0이다
// randomindex는 0부터 4까지이다.
// 나올수있는 배열은 ["a","b","c","d","e"]이다.
// 예를 들어 이번에 randomindex가 2가 나왔다.
// arr[i]= "a", arr[randomindex] = "c"
// ["a", "c"] = ["c", "a"]
// const arr = ["c","b","a","d","e"]

// i가 1이다
// 나올수있는 배열은 ["c","b","a","d","e"]이다.
// 예를 들어 이번에 randomindex는 0이 나왔다.
// arr[i] = "b", arr[randomindex] = "c"
// ["b","c"] = ["c","b"]
// const arr = [ b, c , a , d, e]

// i가 2이다
// 나올수있는 배열은 [ b, c , a , d, e]이다.
// 예를 들어 이번에 randomindex는 0이 나왔다.
// arr[i] = "a", arr[randomindex] = "b"
// ["a","b"] = ["b","a"]
// const arr = [ a, c , b , d, e]

// i가 3이다
// 나올수있는 배열은 [ a, c , b , d, e]이다.
// 예를 들어 이번에 randomindex는 0이 나왔다.
// arr[i] = "d", arr[randomindex] = "a"
// ["d","a"] = ["a","d"]
// const arr = [ d, c , b , a, e]

// i가 4이다.
// 나올수있는 배열은 [ d, c , b , a, e]이다.
// 예를 들어 이번에 randomindex는 0 이 나왔다.
// arr[i] = "e", arr[randomindex] = "d"
// ["e","d"] = ["d","e"]
// const arr = [ e, c , b , a, d]








