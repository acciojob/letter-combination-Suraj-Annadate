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

	if(input_digit.length===0)
	{
		return []
	}

	const combi=['']
	for(const digit of input_digit)
		{
			const letters = digToLetter[input_digit]
			const newCombi =[]

			for(const com of combi)
				{
					for(const letter of letters){
						newCombi.push(com+letter)
					}
				}
			combi.length=0
			combi.push(...newCombi)
		}
	return com
}

module.exports = letterCombinations;
