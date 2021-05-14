/*
* PROJECT: ts-project-14-05-2021
* DESCRIPTION: Recreate the map() function without using map(), forEach() and filter().
* AUTHOR: Vahin Sharma
*/

const solution = <T>(arr: T[], func: (currentValue: T) => T): T[] => {
    let output: T[] = [];
    for (let i: number = 0; i < arr.length; i++) {
        output.push(func(arr[i]));
    }
    return output
}

const questions: Array<Array<any>> = [[[1, 2, 3, 4], (x) => x + 1], [[4, 3, 2, 1], (x) => x - 1], [[5, 4, 2, 1, 3], (x) => x * 2], [[2, 4, 8, 16], (x) => x / 2]]

const answers   = [[2, 3, 4, 5], [3, 2, 1, 0], [10, 8, 4, 2, 6], [1, 2, 4, 8]]

let marks: number = 0;

for (let i = 0; i < questions.length; i++) {
    const answer = solution(questions[i][0], questions[i][1]);

    console.log(`Input: ${questions[i][0]} ${questions[i][1]}`)

    if (JSON.stringify(answer) == JSON.stringify(answers[i])) {
        console.log("Passed");
        ++marks;
    } else {
        console.log(`Expected '${answers[i]}', instead got '${answer}'`);
    }

    console.log()
}

console.log(`Score: ${marks} out of ${questions.length}`);
