let nbtn=document.querySelectorAll('.numbtn')
	let inp=document.querySelector('.display')
	let x;
	
	nbtn.forEach(v=>{
		v.addEventListener('click',()=>{
		 x=`${inp.innerText}${v.innerText}`
		 if(x.indexOf('00')==0)
			 return;
		 inp.innerText=x;
			})})
			
	let acbtn=document.querySelectorAll('.delbtn')
	acbtn[0].addEventListener('click',()=>{
		x='';
		inp.innerText=''
		inpArr=[]
	
	})
	
	acbtn[1].addEventListener('click',()=>{
		x='';
		let arr=[...inp.innerText]
		arr.pop()
		inp.innerText=arr.join('')
	})
	let z;
	let obtn=document.querySelectorAll('.opbtn')
	obtn.forEach(v=>{
		v.addEventListener('click',()=>{
			if(inp.innerText.length==0 && 'x/+.'.indexOf(v.innerText)!=-1)
				return;
			if(('/x'.indexOf(inp.innerText[inp.innerText.length-1])!=-1 && v.innerText=='-') ||
			('+-/x.'.indexOf(inp.innerText[inp.innerText.length-1])==-1))
			inp.innerText+=v.innerText;
			})})
	
		let eqbtn=document.querySelector('#equals')
		let inpArr=[]
		function createArray(){
			let c=0;
			let i;
			let str=inp.innerText;
			for( i=0;i<str.length;i++){
			if(isNaN(str[i]) && str[i]!='.'){
			c++;
			inpArr[c]=str[i];
			}
			else if(isNaN(str[i-1]) && str[i-1]!='.'){
				c++;
			inpArr[c]=str[i];}
			else
				inpArr[c]+=str[i];
			
			}
			}
		
		eqbtn.addEventListener('click',createArray)
		
		
		function calculate(operand, num1, num2)
		{
			if(operand=='/')
				return num1/num2;
			else if(operand=='x')
				return num1*num2;
			else if(operand=='+')
				return num1+num2;
			else
				return num1-num2;
		}
		
		
		function update(result,index){
	inpArr.splice(index-1,3,result)
					console.log(inpArr)
				}
				
		let res;
		function func(sign1,sign2){
			let i=1;
			while(inpArr.indexOf(sign1)!=-1 || inpArr.indexOf(sign2)!=-1){
				
				if(inpArr[i]==sign1 || inpArr[i]==sign2){
					res=calculate(inpArr[i],parseFloat(inpArr[i-1]),parseFloat(inpArr[i+1]))
					update(res,i)
					i=0;
			}
			i++;
		}
		}
		
        eqbtn.addEventListener('click',()=>{
			if(checkZero()){
				 inp.innerText="Cannot divide by zero. Press AC to clear terminal";
				 return;
			 }
			formatNegative();
			func('/','x')
			func('+','-')
			inp.innerText=inpArr[1]
			
		})
		
		function formatNegative(){
			let j=0;
			while(inpArr[j+1]!=undefined){
				if(isNaN(inpArr[j]) && isNaN(inpArr[j+1]))
					inpArr.splice(j+1,2,inpArr[j+1] + inpArr[j+2])
				j++;
			}
		}
		
			function checkZero(){
						for(let j=0;j<inpArr.length;j++){
							if(inpArr[j]=='/')
								if(parseFloat(inpArr[j+1])==0.0)
									return true;
								else
									return false;
						}
			}