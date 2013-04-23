/* parser generated by jison 0.4.2 */
var formula = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"expression":4,"EOF":5,"variableSequence":6,"TIME_AMPM":7,"TIME_24":8,"number":9,"STRING":10,"=":11,"+":12,"(":13,")":14,"<":15,">":16,"NOT":17,"-":18,"*":19,"/":20,"^":21,"E":22,"FUNCTION":23,"expseq":24,"cell":25,"FIXEDCELL":26,":":27,"CELL":28,"SHEET":29,"!":30,";":31,",":32,"VARIABLE":33,"DECIMAL":34,"NUMBER":35,"%":36,"#":37,"$accept":0,"$end":1},
terminals_: {5:"EOF",7:"TIME_AMPM",8:"TIME_24",10:"STRING",11:"=",12:"+",13:"(",14:")",15:"<",16:">",17:"NOT",18:"-",19:"*",20:"/",21:"^",22:"E",23:"FUNCTION",26:"FIXEDCELL",27:":",28:"CELL",29:"SHEET",30:"!",31:";",32:",",33:"VARIABLE",34:"DECIMAL",35:"NUMBER",36:"%",37:"#"},
productions_: [0,[3,2],[4,1],[4,1],[4,1],[4,1],[4,1],[4,3],[4,3],[4,3],[4,4],[4,4],[4,4],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,2],[4,2],[4,1],[4,3],[4,4],[4,1],[4,1],[4,2],[25,1],[25,3],[25,1],[25,3],[25,3],[25,5],[24,1],[24,3],[24,3],[6,1],[6,3],[9,1],[9,3],[9,2],[2,3],[2,4]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1:return $$[$0-1];
break;
case 2:
			//js
			this.$ = yy.handler.variable.apply(yy.obj, $$[$0]);
            
			//php this.$ = this->variable($$[$0]);
		
break;
case 3:
			//js
			this.$ = yy.handler.time.apply(yy.obj, [$$[$0], true]);
			//
		
break;
case 4:
			//js
			this.$ = yy.handler.time.apply(yy.obj, [$$[$0]]);
			//
		
break;
case 5:
			//js
			this.$ = yy.handler.number.apply(yy.obj, [$$[$0]]);
			
			//php this.$ = $$[$0] * 1;
		
break;
case 6:
			//js
			this.$ = $$[$0].substring(1, $$[$0].length - 1);
			
			//php this.$ = substr($$[$0], 1, -1);
		
break;
case 7:
			//js
			yy.obj.html.pop();
			this.$ = yy.handler.callFunction.apply(yy.obj, ['EQUAL', [$$[$0-2], $$[$0]]]);
			
			//php this.$ = $$[$0-2] == $$[$0];
		
break;
case 8:
			//js
			this.$ = yy.handler.performMath.apply(yy.obj, ['+', $$[$0-2], $$[$0]]);
			yy.obj.html.pop();
			yy.obj.html.pop();
			yy.obj.html.push(null);

			/*php
				if (is_numeric($$[$0-2]) && is_numeric($$[$0])) {
					this.$ = $$[$0-2] + $$[$0];
				} else {
					this.$ = $$[$0-2] . $$[$0];
				}
			*/
		
break;
case 9:
			//js
			this.$ = yy.handler.number.apply(yy.obj, [$$[$0-1]]);
			//
		
break;
case 10:
			//js
			this.$ = yy.handler.callFunction.apply(yy.obj, ['LESS_EQUAL', [$$[$0-3], $$[$0-1]]]);
			
			//php this.$ = ($$[$0-3] * 1) <= ($$[$0] * 1);
		
break;
case 11:
			//js
			this.$ = yy.handler.callFunction.apply(yy.obj, ['GREATER_EQUAL', [$$[$0-3], $$[$0-1]]]);
			
			//php this.$ = ($$[$0-3] * 1) >= ($$[$0] * 1);
		
break;
case 12:
			//js|php
			this.$ = ($$[$0-3] * 1) != ($$[$0] * 1);
			
			//js
			if (isNaN(this.$)) this.$ = 0;
			yy.obj.html.pop();
			yy.obj.html.pop();
			yy.obj.html.push(null);
			//
		
break;
case 13:
			//js|php
			this.$ = $$[$0-2] != $$[$0];

			//js
			yy.obj.html.pop();
			yy.obj.html.pop();
			yy.obj.html.push(null);
			//
		
break;
case 14:
			//js
			this.$ = yy.handler.callFunction.apply(yy.obj, ['GREATER', [$$[$0-2], $$[$0]]]);
			
			//php this.$ = ($$[$0-2] * 1) > ($$[$0] * 1);
		
break;
case 15:
			//js
			this.$ = yy.handler.callFunction.apply(yy.obj, ['LESS', [$$[$0-2], $$[$0]]]);
			
			//php this.$ = ($$[$0-2] * 1) < ($$[$0] * 1);
		
break;
case 16:
			//js|php
			this.$ = ($$[$0-2] * 1) - ($$[$0] * 1);

			//js
			this.$ = yy.handler.performMath.apply(yy.obj, ['-', $$[$0-2], $$[$0]]);
			yy.obj.html.pop();
			yy.obj.html.pop();
			yy.obj.html.push(null);
		
break;
case 17:
			//js
			this.$ = yy.handler.performMath.apply(yy.obj, ['*', $$[$0-2], $$[$0]]);
			yy.obj.html.pop();
			yy.obj.html.pop();
			yy.obj.html.push(null);
			
			//php this.$ = ($$[$0-2] * 1) * ($$[$0] * 1);
		
break;
case 18:
			//js
			this.$ = yy.handler.performMath.apply(yy.obj, ['/', $$[$0-2], $$[$0]]);
			yy.obj.html.pop();
			yy.obj.html.pop();
			yy.obj.html.push(null);
			
			//php this.$ = ($$[$0-2] * 1) / ($$[$0] * 1);
		
break;
case 19:
			//js
			var n1 = yy.handler.number.apply(yy.obj, [$$[$0-2]]),
				n2 = yy.handler.number.apply(yy.obj, [$$[$0]]);

			this.$ = yy.handler.performMath.apply(yy.obj, ['^', $$[$0-2], $$[$0]]);
			yy.obj.html.pop();
			yy.obj.html.pop();
			yy.obj.html.push(null);

			//php this.$ = pow(($$[$0-2] * 1), ($$[$0] * 1));
		
break;
case 20:
			//js
			var n1 = yy.handler.number.apply(yy.obj, [$$[$0]]);
			this.$ = n1 * -1;
			if (isNaN(this.$)) this.$ = 0;

			//php this.$ = $$[$0-1] * 1;
		
break;
case 21:
			//js
			var n1 = yy.handler.number.apply(yy.obj, [$$[$0]]);
			this.$ = n1 * 1;
			if (isNaN(this.$)) this.$ = 0;

			//php this.$ = $$[$0-1] * 1;
		
break;
case 22:/*this.$ = Math.E;*/;
break;
case 23:
			//js
			this.$ = yy.handler.callFunction.apply(yy.obj, [$$[$0-2], '']);
			
			//php this.$ = this->callFunction($$[$0-2]);
		
break;
case 24:
			//js
			this.$ = yy.handler.callFunction.apply(yy.obj, [$$[$0-3], $$[$0-1]]);
			
			//php this.$ = this->callFunction($$[$0-3], $$[$0-1]);
		
break;
case 28:
			//js
			this.$ = yy.handler.fixedCellValue.apply(yy.obj, [$$[$0]]);
			
			//php this.$ = this->fixedCellValue($$[$0]);
		
break;
case 29:
			//js
			this.$ = yy.handler.fixedCellRangeValue.apply(yy.obj, [$$[$0-2], $$[$0]]);
			
			//php this.$ = this->fixedCellRangeValue($$[$0-2], $$[$0]);
		
break;
case 30:
			//js
			this.$ = yy.handler.cellValue.apply(yy.obj, [$$[$0]]);
			
			//php this.$ = this->cellValue($$[$0]);
			
			/*cs
				$$[$0].ToDecimal();
				this.$ = $$[$0];
			*/
		
break;
case 31:
			//js
			this.$ = yy.handler.cellRangeValue.apply(yy.obj, [$$[$0-2], $$[$0]]);
			
			//php this.$ = this->cellRangeValue($$[$0-2], $$[$0]);
		
break;
case 32:
			//js
			this.$ = yy.handler.remoteCellValue.apply(yy.obj, [$$[$0-2], $$[$0]]);
			
			//php this.$ = this->remoteCellValue($$[$0-2], $$[$0]);
		
break;
case 33:
			//js
			this.$ = yy.handler.remoteCellRangeValue.apply(yy.obj, [$$[$0-4], $$[$0-2], $$[$0]]);
			
			//php this.$ = this->remoteCellRangeValue($$[$0-4], $$[$0-2], $$[$0]);
		
break;
case 34:
			//js
			this.$ = [$$[$0]];
			
			//php this.$ = array($$[$0]);
		
break;
case 35:
			//js
	        $$[$0-2].push($$[$0]);
	        this.$ = $$[$0-2];

			/*php
				$$[$0-2][] = $$[$0];
				this.$ = $$[$0-2];
			*/
	    
break;
case 36:
			//js
	        $$[$0-2].push($$[$0]);
	        this.$ = $$[$0-2];

			/*php
				$$[$0-2][] = $$[$0];
				this.$ = $$[$0-2];
			*/
	    
break;
case 37:
			//js
			this.$ = [$$[$0]];
			
			//php this.$ = array($$[$0]);
		
break;
case 38:
			//js
			this.$ = ($.isArray($$[$0-2]) ? $$[$0-2] : [$$[$0-2]]);
            this.$.push($$[$0]);

            /*php
				this.$ = (is_array($$[$0-2]) ? $$[$0-2] : array());
				this.$[] = $$[$0];
			*/
		
break;
case 39:
			//js|php
			this.$ = $$[$0] * 1;
		
break;
case 40:
			//js
			this.$ =($$[$0-2] + '.' + $$[$0]) * 1;
			
			//php this.$ = $$[$0-2] . '.' . $$[$0];
		
break;
case 41:
			//js
			yy.obj.html.push($$[$0-1] + $$[$0]);
			
			//js|php
			this.$ = $$[$0-1] * 0.01;
		
break;
case 42:
			//js
			this.$ = $$[$0-2] + $$[$0-1] + $$[$0];
			
			//php this.$ = $$[$0-2] . $$[$0-1] . $$[$0];
      	
break;
case 43:
			//js
			this.$ = $$[$0-2] + $$[$0-1] + $$[$0];
			
			//php this.$ = $$[$0-2] . $$[$0-1] . $$[$0];
		
break;
}
},
table: [{2:14,3:1,4:2,6:3,7:[1,4],8:[1,5],9:6,10:[1,7],12:[1,10],13:[1,8],18:[1,9],22:[1,11],23:[1,12],25:13,26:[1,17],28:[1,18],29:[1,19],33:[1,15],35:[1,16],37:[1,20]},{1:[3]},{5:[1,21],11:[1,22],12:[1,23],15:[1,24],16:[1,25],17:[1,26],18:[1,27],19:[1,28],20:[1,29],21:[1,30]},{5:[2,2],11:[2,2],12:[2,2],14:[2,2],15:[2,2],16:[2,2],17:[2,2],18:[2,2],19:[2,2],20:[2,2],21:[2,2],31:[2,2],32:[2,2],34:[1,31]},{5:[2,3],11:[2,3],12:[2,3],14:[2,3],15:[2,3],16:[2,3],17:[2,3],18:[2,3],19:[2,3],20:[2,3],21:[2,3],31:[2,3],32:[2,3]},{5:[2,4],11:[2,4],12:[2,4],14:[2,4],15:[2,4],16:[2,4],17:[2,4],18:[2,4],19:[2,4],20:[2,4],21:[2,4],31:[2,4],32:[2,4]},{5:[2,5],11:[2,5],12:[2,5],14:[2,5],15:[2,5],16:[2,5],17:[2,5],18:[2,5],19:[2,5],20:[2,5],21:[2,5],31:[2,5],32:[2,5],36:[1,32]},{5:[2,6],11:[2,6],12:[2,6],14:[2,6],15:[2,6],16:[2,6],17:[2,6],18:[2,6],19:[2,6],20:[2,6],21:[2,6],31:[2,6],32:[2,6]},{2:14,4:33,6:3,7:[1,4],8:[1,5],9:6,10:[1,7],12:[1,10],13:[1,8],18:[1,9],22:[1,11],23:[1,12],25:13,26:[1,17],28:[1,18],29:[1,19],33:[1,15],35:[1,16],37:[1,20]},{2:14,4:34,6:3,7:[1,4],8:[1,5],9:6,10:[1,7],12:[1,10],13:[1,8],18:[1,9],22:[1,11],23:[1,12],25:13,26:[1,17],28:[1,18],29:[1,19],33:[1,15],35:[1,16],37:[1,20]},{2:14,4:35,6:3,7:[1,4],8:[1,5],9:6,10:[1,7],12:[1,10],13:[1,8],18:[1,9],22:[1,11],23:[1,12],25:13,26:[1,17],28:[1,18],29:[1,19],33:[1,15],35:[1,16],37:[1,20]},{5:[2,22],11:[2,22],12:[2,22],14:[2,22],15:[2,22],16:[2,22],17:[2,22],18:[2,22],19:[2,22],20:[2,22],21:[2,22],31:[2,22],32:[2,22]},{13:[1,36]},{5:[2,25],11:[2,25],12:[2,25],14:[2,25],15:[2,25],16:[2,25],17:[2,25],18:[2,25],19:[2,25],20:[2,25],21:[2,25],31:[2,25],32:[2,25]},{2:37,5:[2,26],11:[2,26],12:[2,26],14:[2,26],15:[2,26],16:[2,26],17:[2,26],18:[2,26],19:[2,26],20:[2,26],21:[2,26],31:[2,26],32:[2,26],33:[1,38],37:[1,20]},{5:[2,37],11:[2,37],12:[2,37],14:[2,37],15:[2,37],16:[2,37],17:[2,37],18:[2,37],19:[2,37],20:[2,37],21:[2,37],31:[2,37],32:[2,37],34:[2,37],37:[1,39]},{5:[2,39],11:[2,39],12:[2,39],14:[2,39],15:[2,39],16:[2,39],17:[2,39],18:[2,39],19:[2,39],20:[2,39],21:[2,39],31:[2,39],32:[2,39],34:[1,40],36:[2,39]},{5:[2,28],11:[2,28],12:[2,28],14:[2,28],15:[2,28],16:[2,28],17:[2,28],18:[2,28],19:[2,28],20:[2,28],21:[2,28],27:[1,41],31:[2,28],32:[2,28]},{5:[2,30],11:[2,30],12:[2,30],14:[2,30],15:[2,30],16:[2,30],17:[2,30],18:[2,30],19:[2,30],20:[2,30],21:[2,30],27:[1,42],31:[2,30],32:[2,30]},{30:[1,43]},{33:[1,44]},{1:[2,1]},{2:14,4:45,6:3,7:[1,4],8:[1,5],9:6,10:[1,7],12:[1,10],13:[1,8],18:[1,9],22:[1,11],23:[1,12],25:13,26:[1,17],28:[1,18],29:[1,19],33:[1,15],35:[1,16],37:[1,20]},{2:14,4:46,6:3,7:[1,4],8:[1,5],9:6,10:[1,7],12:[1,10],13:[1,8],18:[1,9],22:[1,11],23:[1,12],25:13,26:[1,17],28:[1,18],29:[1,19],33:[1,15],35:[1,16],37:[1,20]},{2:14,4:49,6:3,7:[1,4],8:[1,5],9:6,10:[1,7],11:[1,47],12:[1,10],13:[1,8],16:[1,48],18:[1,9],22:[1,11],23:[1,12],25:13,26:[1,17],28:[1,18],29:[1,19],33:[1,15],35:[1,16],37:[1,20]},{2:14,4:51,6:3,7:[1,4],8:[1,5],9:6,10:[1,7],11:[1,50],12:[1,10],13:[1,8],18:[1,9],22:[1,11],23:[1,12],25:13,26:[1,17],28:[1,18],29:[1,19],33:[1,15],35:[1,16],37:[1,20]},{2:14,4:52,6:3,7:[1,4],8:[1,5],9:6,10:[1,7],12:[1,10],13:[1,8],18:[1,9],22:[1,11],23:[1,12],25:13,26:[1,17],28:[1,18],29:[1,19],33:[1,15],35:[1,16],37:[1,20]},{2:14,4:53,6:3,7:[1,4],8:[1,5],9:6,10:[1,7],12:[1,10],13:[1,8],18:[1,9],22:[1,11],23:[1,12],25:13,26:[1,17],28:[1,18],29:[1,19],33:[1,15],35:[1,16],37:[1,20]},{2:14,4:54,6:3,7:[1,4],8:[1,5],9:6,10:[1,7],12:[1,10],13:[1,8],18:[1,9],22:[1,11],23:[1,12],25:13,26:[1,17],28:[1,18],29:[1,19],33:[1,15],35:[1,16],37:[1,20]},{2:14,4:55,6:3,7:[1,4],8:[1,5],9:6,10:[1,7],12:[1,10],13:[1,8],18:[1,9],22:[1,11],23:[1,12],25:13,26:[1,17],28:[1,18],29:[1,19],33:[1,15],35:[1,16],37:[1,20]},{2:14,4:56,6:3,7:[1,4],8:[1,5],9:6,10:[1,7],12:[1,10],13:[1,8],18:[1,9],22:[1,11],23:[1,12],25:13,26:[1,17],28:[1,18],29:[1,19],33:[1,15],35:[1,16],37:[1,20]},{33:[1,57]},{5:[2,41],11:[2,41],12:[2,41],14:[2,41],15:[2,41],16:[2,41],17:[2,41],18:[2,41],19:[2,41],20:[2,41],21:[2,41],31:[2,41],32:[2,41],36:[2,41]},{11:[1,22],12:[1,23],14:[1,58],15:[1,24],16:[1,25],17:[1,26],18:[1,27],19:[1,28],20:[1,29],21:[1,30]},{5:[2,20],11:[2,20],12:[2,20],14:[2,20],15:[2,20],16:[2,20],17:[2,20],18:[2,20],19:[1,28],20:[1,29],21:[1,30],31:[2,20],32:[2,20]},{5:[2,21],11:[2,21],12:[2,21],14:[2,21],15:[2,21],16:[2,21],17:[2,21],18:[2,21],19:[1,28],20:[1,29],21:[1,30],31:[2,21],32:[2,21]},{2:14,4:61,6:3,7:[1,4],8:[1,5],9:6,10:[1,7],12:[1,10],13:[1,8],14:[1,59],18:[1,9],22:[1,11],23:[1,12],24:60,25:13,26:[1,17],28:[1,18],29:[1,19],33:[1,15],35:[1,16],37:[1,20]},{5:[2,27],11:[2,27],12:[2,27],14:[2,27],15:[2,27],16:[2,27],17:[2,27],18:[2,27],19:[2,27],20:[2,27],21:[2,27],31:[2,27],32:[2,27]},{37:[1,39]},{33:[1,62]},{35:[1,63]},{26:[1,64]},{28:[1,65]},{28:[1,66]},{30:[1,67]},{5:[2,7],11:[2,7],12:[1,23],14:[2,7],15:[1,24],16:[1,25],17:[1,26],18:[1,27],19:[1,28],20:[1,29],21:[1,30],31:[2,7],32:[2,7]},{5:[2,8],11:[2,8],12:[2,8],14:[2,8],15:[2,8],16:[2,8],17:[2,8],18:[2,8],19:[1,28],20:[1,29],21:[1,30],31:[2,8],32:[2,8]},{2:14,4:68,6:3,7:[1,4],8:[1,5],9:6,10:[1,7],12:[1,10],13:[1,8],18:[1,9],22:[1,11],23:[1,12],25:13,26:[1,17],28:[1,18],29:[1,19],33:[1,15],35:[1,16],37:[1,20]},{2:14,4:69,6:3,7:[1,4],8:[1,5],9:6,10:[1,7],12:[1,10],13:[1,8],18:[1,9],22:[1,11],23:[1,12],25:13,26:[1,17],28:[1,18],29:[1,19],33:[1,15],35:[1,16],37:[1,20]},{5:[2,15],11:[2,15],12:[1,23],14:[2,15],15:[2,15],16:[2,15],17:[2,15],18:[1,27],19:[1,28],20:[1,29],21:[1,30],31:[2,15],32:[2,15]},{2:14,4:70,6:3,7:[1,4],8:[1,5],9:6,10:[1,7],12:[1,10],13:[1,8],18:[1,9],22:[1,11],23:[1,12],25:13,26:[1,17],28:[1,18],29:[1,19],33:[1,15],35:[1,16],37:[1,20]},{5:[2,14],11:[2,14],12:[1,23],14:[2,14],15:[2,14],16:[2,14],17:[2,14],18:[1,27],19:[1,28],20:[1,29],21:[1,30],31:[2,14],32:[2,14]},{5:[2,13],11:[2,13],12:[1,23],14:[2,13],15:[1,24],16:[1,25],17:[2,13],18:[1,27],19:[1,28],20:[1,29],21:[1,30],31:[2,13],32:[2,13]},{5:[2,16],11:[2,16],12:[2,16],14:[2,16],15:[2,16],16:[2,16],17:[2,16],18:[2,16],19:[1,28],20:[1,29],21:[1,30],31:[2,16],32:[2,16]},{5:[2,17],11:[2,17],12:[2,17],14:[2,17],15:[2,17],16:[2,17],17:[2,17],18:[2,17],19:[2,17],20:[2,17],21:[1,30],31:[2,17],32:[2,17]},{5:[2,18],11:[2,18],12:[2,18],14:[2,18],15:[2,18],16:[2,18],17:[2,18],18:[2,18],19:[2,18],20:[2,18],21:[1,30],31:[2,18],32:[2,18]},{5:[2,19],11:[2,19],12:[2,19],14:[2,19],15:[2,19],16:[2,19],17:[2,19],18:[2,19],19:[2,19],20:[2,19],21:[2,19],31:[2,19],32:[2,19]},{5:[2,38],11:[2,38],12:[2,38],14:[2,38],15:[2,38],16:[2,38],17:[2,38],18:[2,38],19:[2,38],20:[2,38],21:[2,38],31:[2,38],32:[2,38],34:[2,38]},{5:[2,9],11:[2,9],12:[2,9],14:[2,9],15:[2,9],16:[2,9],17:[2,9],18:[2,9],19:[2,9],20:[2,9],21:[2,9],31:[2,9],32:[2,9]},{5:[2,23],11:[2,23],12:[2,23],14:[2,23],15:[2,23],16:[2,23],17:[2,23],18:[2,23],19:[2,23],20:[2,23],21:[2,23],31:[2,23],32:[2,23]},{14:[1,71],31:[1,72],32:[1,73]},{11:[1,22],12:[1,23],14:[2,34],15:[1,24],16:[1,25],17:[1,26],18:[1,27],19:[1,28],20:[1,29],21:[1,30],31:[2,34],32:[2,34]},{30:[1,74]},{5:[2,40],11:[2,40],12:[2,40],14:[2,40],15:[2,40],16:[2,40],17:[2,40],18:[2,40],19:[2,40],20:[2,40],21:[2,40],31:[2,40],32:[2,40],36:[2,40]},{5:[2,29],11:[2,29],12:[2,29],14:[2,29],15:[2,29],16:[2,29],17:[2,29],18:[2,29],19:[2,29],20:[2,29],21:[2,29],31:[2,29],32:[2,29]},{5:[2,31],11:[2,31],12:[2,31],14:[2,31],15:[2,31],16:[2,31],17:[2,31],18:[2,31],19:[2,31],20:[2,31],21:[2,31],31:[2,31],32:[2,31]},{5:[2,32],11:[2,32],12:[2,32],14:[2,32],15:[2,32],16:[2,32],17:[2,32],18:[2,32],19:[2,32],20:[2,32],21:[2,32],27:[1,75],31:[2,32],32:[2,32]},{5:[2,42],11:[2,42],12:[2,42],14:[2,42],15:[2,42],16:[2,42],17:[2,42],18:[2,42],19:[2,42],20:[2,42],21:[2,42],31:[2,42],32:[2,42],33:[2,42],37:[2,42]},{5:[2,10],11:[2,10],12:[1,23],14:[2,10],15:[2,10],16:[2,10],17:[2,10],18:[1,27],19:[1,28],20:[1,29],21:[1,30],31:[2,10],32:[2,10]},{5:[2,12],11:[2,12],12:[1,23],14:[2,12],15:[2,12],16:[2,12],17:[2,12],18:[1,27],19:[1,28],20:[1,29],21:[1,30],31:[2,12],32:[2,12]},{5:[2,11],11:[2,11],12:[1,23],14:[2,11],15:[2,11],16:[2,11],17:[2,11],18:[1,27],19:[1,28],20:[1,29],21:[1,30],31:[2,11],32:[2,11]},{5:[2,24],11:[2,24],12:[2,24],14:[2,24],15:[2,24],16:[2,24],17:[2,24],18:[2,24],19:[2,24],20:[2,24],21:[2,24],31:[2,24],32:[2,24]},{2:14,4:76,6:3,7:[1,4],8:[1,5],9:6,10:[1,7],12:[1,10],13:[1,8],18:[1,9],22:[1,11],23:[1,12],25:13,26:[1,17],28:[1,18],29:[1,19],33:[1,15],35:[1,16],37:[1,20]},{2:14,4:77,6:3,7:[1,4],8:[1,5],9:6,10:[1,7],12:[1,10],13:[1,8],18:[1,9],22:[1,11],23:[1,12],25:13,26:[1,17],28:[1,18],29:[1,19],33:[1,15],35:[1,16],37:[1,20]},{5:[2,43],11:[2,43],12:[2,43],14:[2,43],15:[2,43],16:[2,43],17:[2,43],18:[2,43],19:[2,43],20:[2,43],21:[2,43],31:[2,43],32:[2,43],33:[2,43],37:[2,43]},{28:[1,78]},{11:[1,22],12:[1,23],14:[2,35],15:[1,24],16:[1,25],17:[1,26],18:[1,27],19:[1,28],20:[1,29],21:[1,30],31:[2,35],32:[2,35]},{11:[1,22],12:[1,23],14:[2,36],15:[1,24],16:[1,25],17:[1,26],18:[1,27],19:[1,28],20:[1,29],21:[1,30],31:[2,36],32:[2,36]},{5:[2,33],11:[2,33],12:[2,33],14:[2,33],15:[2,33],16:[2,33],17:[2,33],18:[2,33],19:[2,33],20:[2,33],21:[2,33],31:[2,33],32:[2,33]}],
defaultActions: {21:[2,1]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this,
        stack = [0],
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    //this.reductionCount = this.shiftCount = 0;

    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined')
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);

    var ranges = this.lexer.options && this.lexer.options.ranges;

    if (typeof this.yy.parseError === 'function')
        this.parseError = this.yy.parseError;

    function popStack (n) {
        stack.length = stack.length - 2*n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

    function lex() {
        var token;
        token = self.lexer.lex() || 1; // $end = 1
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval={},p,len,newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length-1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

        // handle parse error
        _handle_error:
        if (typeof action === 'undefined' || !action.length || !action[0]) {

            var errStr = '';
            if (!recovering) {
                // Report error
                expected = [];
                for (p in table[state]) if (this.terminals_[p] && p > 2) {
                    expected.push("'"+this.terminals_[p]+"'");
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == 1 /*EOF*/ ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr,
                    {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol == EOF) {
                    throw new Error(errStr || 'Parsing halted.');
                }

                // discard current lookahead and grab another
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            while (1) {
                // check for error recovery rule in this state
                if ((TERROR.toString()) in table[state]) {
                    break;
                }
                if (state === 0) {
                    throw new Error(errStr || 'Parsing halted.');
                }
                popStack(1);
                state = stack[stack.length-1];
            }

            preErrorSymbol = symbol == 2 ? null : symbol; // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {

            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(this.lexer.yytext);
                lstack.push(this.lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = this.lexer.yyleng;
                    yytext = this.lexer.yytext;
                    yylineno = this.lexer.yylineno;
                    yyloc = this.lexer.yylloc;
                    if (recovering > 0)
                        recovering--;
                } else { // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2: // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3: // accept
                return true;
        }

    }

    return true;
}};

if (typeof(window) !== 'undefined') {
	window.Formula = function(handler) {
		var formulaLexer = function () {};
		formulaLexer.prototype = formula.lexer;

		var formulaParser = function () {
			this.lexer = new formulaLexer();
			this.yy = {};
		};

		formulaParser.prototype = formula;
		var newParser = new formulaParser;
		newParser.setObj = function(obj) {
			newParser.yy.obj = obj;
		};
		newParser.yy.handler = handler;
		return newParser;
	};
}/* generated by jison-lex 0.1.0 */
var lexer = (function(){
var lexer = {
EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        if (this.options.ranges) this.yylloc.range = [0,0];
        this.offset = 0;
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) this.yylloc.range[1]++;

        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length-1);
        this.matched = this.matched.substr(0, this.matched.length-1);

        if (lines.length-1) this.yylineno -= lines.length-1;
        var r = this.yylloc.range;

        this.yylloc = {first_line: this.yylloc.first_line,
          last_line: this.yylineno+1,
          first_column: this.yylloc.first_column,
          last_column: lines ?
              (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
              this.yylloc.first_column - len
          };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
less:function (n) {
        this.unput(this.match.slice(n));
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/(?:\r\n?|\n).*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
            this.yytext += match[0];
            this.match += match[0];
            this.matches = match;
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
                this.yylloc.range = [this.offset, this.offset += this.yyleng];
            }
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (this.done && this._input) this.done = false;
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 10;
break;
case 2:return 10;
break;
case 3:return 23;
break;
case 4:return 7;
break;
case 5:return 8;
break;
case 6:
	//js
	if (yy.obj.type == 'cell') return 29;
	return 'VARIABLE';
	
	/*php
		if ($this->type == 'cell') return 'SHEET';
		return 'VARIABLE';
	*/

break;
case 7:
	//js
	if (yy.obj.type == 'cell') return 26;
	return 'VARIABLE';

	/*php
		if ($this->type == 'cell') return 'FIXEDCELL';
		return 'VARIABLE';
	*/

break;
case 8:
	//js
	if (yy.obj.type == 'cell') return 28;
	return 'VARIABLE';

	/*php
		if ($this->type == 'cell') return 'CELL';
		return 'VARIABLE';
	*/

break;
case 9:return 23;
break;
case 10:return 33;
break;
case 11:return 33;
break;
case 12:return 35;
break;
case 13:/* skip whitespace */
break;
case 14:return ' ';
break;
case 15:return 34;
break;
case 16:return 27;
break;
case 17:return 31;
break;
case 18:return 32;
break;
case 19:return 19;
break;
case 20:return 20;
break;
case 21:return 18;
break;
case 22:return 12;
break;
case 23:return 21;
break;
case 24:return 13;
break;
case 25:return 14;
break;
case 26:return 16;
break;
case 27:return 15;
break;
case 28:return 17;
break;
case 29:return 22;
break;
case 30:return '"';
break;
case 31:return "'";
break;
case 32:return "!";
break;
case 33:return 11;
break;
case 34:return 36;
break;
case 35:return 37;
break;
case 36:return 5;
break;
}
},
rules: [/^(?:\s+)/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:[A-Za-z]{1,}[A-Za-z_0-9]+(?=[(]))/,/^(?:([0]?[1-9]|1[0-2])[:][0-5][0-9]([:][0-5][0-9])?[ ]?(AM|am|aM|Am|PM|pm|pM|Pm))/,/^(?:([0]?[0-9]|1[0-9]|2[0-3])[:][0-5][0-9]([:][0-5][0-9])?)/,/^(?:SHEET[0-9]+)/,/^(?:\$[A-Za-z]+\$[0-9]+)/,/^(?:[A-Za-z]+[0-9]+)/,/^(?:[A-Za-z]+(?=[(]))/,/^(?:[A-Za-z]{1,}[A-Za-z_0-9]+)/,/^(?:[A-Za-z_]+)/,/^(?:[0-9]+)/,/^(?:\$)/,/^(?: )/,/^(?:[.])/,/^(?::)/,/^(?:;)/,/^(?:,)/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:\()/,/^(?:\))/,/^(?:>)/,/^(?:<)/,/^(?:NOT\b)/,/^(?:E\b)/,/^(?:")/,/^(?:')/,/^(?:!)/,/^(?:=)/,/^(?:%)/,/^(?:[#])/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = formula;
exports.Parser = formula.Parser;
exports.parse = function () { return formula.parse.apply(formula, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}