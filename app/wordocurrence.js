

	let words =(sentence)=>
	{
		let sentence2= sentence.replace(/[ ][ ]*/g, ' '); //this is an expresion that changes any instance of [ ][ ]*/ to space 
		let string_array = sentence2.split(" ");  //split the sentence returning an array
	
		let obj ={};
		
		for(let i=0; i < string_array.length; i++)
		{
			
			
			if( obj[string_array[i]]) // if its undefined, that means it has no value, it goes to the else block and 1 is added as the value
			{
				obj[string_array[i]]++;  //increase the value by 1
					
			}
			else
			{
				obj[string_array[i]] = 1
			}
		}
		return obj; // returns the object
	}
	
	console.log(words('My name is is Habib Habib'));
	export default words;  // export words


	
	
	