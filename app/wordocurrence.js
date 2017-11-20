

	let words =(sentence)=>
	{
		let sentence2= sentence.replace(/[ ][ ]*/g, ' ');
		let string_array = sentence2.split(" ");
	
		let obj ={};
		
		for(let i=0; i < string_array.length; i++)
		{
			
			
			if( obj[string_array[i]])
			{
				obj[string_array[i]]++;
					
			}
			else
			{
				obj[string_array[i]] = 1
			}
		}
		return obj;
	}
	
	console.log(words('My name is is Habib Habib'));
	export default words;


	
	
	