
    /*start declaring global variables*/
		    var dotCount = false;//decimal counter
        var opCount = false;//operands counter
        var eqCount = false;//equals counter
        var negCount = false;//negative counter
        var PmemoryCount = false;//memroy add counter
        var SmemoryCount = false;//memory subtract counter
        var num1, num2, operand;
        var memory = 0;
		/*end declaring global varilbles*/

        function mc() {
            memory = 0;
            document.getElementById("result").value;
            document.getElementById("memory").value = "";
        }
        function mr() {
            if(memory != 0){
				num1 = memory
				PmemoryCount = true;
				SmemoryCount = true;
			}
			
			document.getElementById("result").value = memory;
			opCount = true;
        }
        function ms() {
            memory = document.getElementById("result").value;
            document.getElementById("memory").value = "M";
			opCount = true;
        }
        function mp() {
            if (!PmemoryCount) {
                num1 = document.getElementById("result").value;
                memory = num1;
                opCount = true;
                operand = "mp";
                PmemoryCount = true;
                document.getElementById("memory").value = "M";
            }
            else {
                num2 = document.getElementById("result").value;
                operand = "mp";
				SetOperators(operand);
				eqCount = true;
                PmemoryCount = false;
            }
            
        }
        function msu() {
			
            if(!SmemoryCount){
				num1 = "-" + document.getElementById("result").value;
				memory = num1;
				opCount = true;
				operand = "msu";
				SmemoryCount = true;
				document.getElementById("memory").value = "M";
				console.log(num1);
			}
			else{
				num2 = document.getElementById("result").value;
				operand = "msu";
				SetOperators(operand);
				opCount = true;
				SmemoryCount = false;
				console.log(num2);
			}
        }
        function back() {
            document.getElementById("result").value = document.getElementById("result").value.slice(0, -1);
			if(document.getElementById("result").value == "")
				document.getElementById("result").value = "0";
        }
        function ce() {
            document.getElementById("result").value = "0";
        }
        function c() {
            document.getElementById("result").value = "0";
        }
        function ne() {
            var input = document.getElementById("result").value;
            if (!negCount){
                document.getElementById("result").value = "-" + input;
                negCount = true;
                dotCount = false;
            }
            else {
                document.getElementById("result").value = input.replace("-","");
                negCount = false;
                dotCount = false;
            }
        }
        function sq() {
            num1 = document.getElementById("result").value;
            document.getElementById("result").value = Math.sqrt(num1);
            opCount = true;
            eqCount = true;
            dotCount = false;
        }
        function seven(id) {
            txtResultFilter(id);

        }
        function eight(id) {
            txtResultFilter(id);
        }
        function nine(id) {
            txtResultFilter(id);
        }
        function divide() {
            num1 = document.getElementById("result").value;
            opCount = true;
            dotCount = false;
            operand = "/";
        }
        function mod() {
            num1 = document.getElementById("result").value;
            opCount = true;
            dotCount = false;
            operand = "%";
        }
        function four(id) {
            txtResultFilter(id);
        }
        function five(id) {
            txtResultFilter(id);;
        }
        function six(id) {
            txtResultFilter(id);
        }
        function multiply() {
            num1 = document.getElementById("result").value;
            opCount = true;
            dotCount = false;
            operand = "*";
        }
        function reciprocal() {
            var input = document.getElementById("result").value;
            document.getElementById("result").value = eval(1 / input);
            opCount = true;
            eqCount = true;
            dotCount = false;
        }
        function one(id) {
            txtResultFilter(id);
        }
        function two(id) {
            txtResultFilter(id);
        }
        function three(id) {
            txtResultFilter(id);
        }
        function sub() {
            num1 = document.getElementById("result").value;
            opCount = true;
            dotCount = false;
            operand = "-";
        }
        function zero(id) {
            txtResultFilter(id);
        }
        function dot() {
            if (document.getElementById("result").value == "0"){
                document.getElementById("result").value = "0.";
                dotCount = true;

            }else{
                if(!dotCount){
                    document.getElementById("result").value += ".";
                    dotCount = true;
                }
                else
                    document.getElementById("result").value;
            }
        }
        function add() {
            num1 = document.getElementById("result").value;
            opCount = true;
            dotCount = false;
            operand = "+";
        }
        function equals() {
            num2 = document.getElementById("result").value;
            SetOperators(operand);
            eqCount = true;
        }
        function txtResultFilter(id)
        {
            //perform when operand buttons were not clicked
            if (!opCount) {
                if (document.getElementById("result").value == "0")
                    document.getElementById("result").value = id;
                else
                    document.getElementById("result").value += id;
            }
            //when operands button were clicked
            else{
                if(eqCount){
                    document.getElementById("result").value = id;
                    //setting to default when equals cutton was clicked.
                    opCount = false;
                }
                else{
                    document.getElementById("result").value = id;
                    opCount  = false
                }
			}
        }
		
		//main process method
        function SetOperators(ops)
        {
            switch(ops)
            {
                case "+":
                    {
                        document.getElementById("result").value = parseFloat(num1) + parseFloat(num2);
                        break;
                    }
                case "-":
                    {
                        document.getElementById("result").value = parseFloat(num1) - parseFloat(num2);
                        break;
                    }
                case "/":
                    {
                        document.getElementById("result").value = parseFloat(num1) / parseFloat(num2);
                        break;
                    }
                case "*":
                    {
                        document.getElementById("result").value = parseFloat(num1) * parseFloat(num2);
                        break;
                    }
                case "%":
                    {
                        document.getElementById("result").value = parseFloat(num1) % parseFloat(num2);
                        break;
                    }
                case "mp":
                    {
                        memory = parseFloat(num1) + parseFloat(num2);
                        break;
                    }
                case "msu":
                    {
                        memory = parseFloat(num1) - parseFloat(num2);
                        break;
                    }
                default:
                    {
                        break;
                    }
            }
        }
