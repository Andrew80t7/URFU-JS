const fs = require('fs');
let ram = [];

let progText = fs.readFileSync(process.argv[2]).toString();

ram = progText.split(/\s+/);

for (
	let index_ram = 0;
	index_ram < ram.length;
	index_ram++
	)
{
	switch (ram[index_ram])
	{

	case 'new':

		index_ram++;
		break;

	case 'output_str':

		index_ram++;
		console.log(ram[index_ram]);
		break;

	case 'output_per':

		index_ram++;
		console.log(ram[ram[index_ram]]);
		break;

	case 'input_per':

		if (Number(process.argv[3]) > 0)
		{
			index_ram++;
			ram[ram[index_ram]] = process.argv[3];
			console.log(ram[ram[index_ram]]);
		}
		else
		{
			index_ram = ram.indexOf('error');
		}
		break;

	case 'input_per2':

		if (Number(process.argv[4]) > 0)
		{
			index_ram++;
			ram[ram[index_ram]] = process.argv[4];
			console.log(ram[ram[index_ram]]);
		}
		else
		{
			index_ram = ram.indexOf('error');
		}
		break;


	case 'jump':

		index_ram = ram.indexOf(`:${ram[index_ram + 1]}`);
        break;

	case 'poka<':

    	if (
    		Number(ram[ram[index_ram + 1]]) >=
    		(Number(ram[ram[index_ram + 2]]) - 2)
    		)
    		{ index_ram = ram.indexOf(`:result`); }
    	else
    		{ index_ram = index_ram + 2; }

    	break;

    case 'put_sum':

    	ram[ram[index_ram + 1]] =
    		Number(ram[ram[index_ram + 2]]) +
    		Number(ram[ram[index_ram + 3]]);
    	index_ram = index_ram + 3;
    	break;

    case 'put':

    	ram[ram[index_ram + 1]] =
    		ram[ram[index_ram + 2]];
    	index_ram = index_ram + 2;
    	break;

    case 'add1':

    	ram[ram[index_ram + 1]] =
    		Number(ram[ram[index_ram + 1]]) + 1;
    	index_ram++;
    	break;

    case 'error':

    	index_ram = index_ram + 2;
    	break;

    case 'poka_&_>0':

   		if ((Number(ram[ram[index_ram + 1]]) === 0) ||
   			(Number(ram[ram[index_ram + 2]]) === 0))
   			{ index_ram = ram.indexOf(`:result`); }
   		else
   			{ index_ram = index_ram + 2; }
   		break;

   	case 'body_of_poka_&_>0':

   		if  (Number(ram[ram[index_ram + 1]]) >
   			Number(ram[ram[index_ram + 2]]))
   			{ index_ram = index_ram + 2; }
   		else
   			{ index_ram = index_ram + 5; }
		break;

   	case 'bop_&_>0_true':

   		ram[ram[index_ram + 1]] =
   			Number(ram[ram[index_ram + 1]]) -
   			(
   				Math.floor(
   					Number(ram[ram[index_ram + 1]]) /
   					Number(ram[ram[index_ram + 2]])
   					) *
   				Number(ram[ram[index_ram + 2]])
   				);
   		index_ram = index_ram + 5;
   		break;

   	case 'bop_&_>0_false':

   		ram[ram[index_ram + 2]] =
   			Number(ram[ram[index_ram + 2]]) -
   				(
   					Math.floor(
   						Number(ram[ram[index_ram + 2]]) /
   						Number(ram[ram[index_ram + 1]])
   						) *
   					Number(ram[ram[index_ram + 1]])
   					);
   		index_ram = index_ram + 2;
   		break;

   	case 'summa':

   		ram[ram[index_ram + 1]] =
   			Number(ram[ram[index_ram + 2]]) +
   			Number(ram[ram[index_ram + 3]]);
   		index_ram = index_ram + 3;
   		break;

	}
}