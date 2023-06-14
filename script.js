function letterCombinations(input_digit) {
  //Complete the function
	const mapping = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };

	function combination(index, curr, combi)
		{
			if(index===input_digit.length)
			{
			combi.push(curr)
				return
			}
			const digit = input_digit[index]
			const letters = mapping[input_digit]

			for(let i=0;i<letters.length;i++)
				{
					const letter = letters[i]
					combination(index+1,curr+letter,combi)
				}
		}
	const combinations=[]
	if(input_digit.length>0)
	{
		combination(0,"",combinations)
	}
	return combinations.sort()
}

module.exports = letterCombinations;
