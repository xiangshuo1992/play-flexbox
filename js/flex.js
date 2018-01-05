var typeSelect = new Vue({
  	el: '#app',
  	data: {
  		selected:{
  			selected1: 'horizontal',
		    selected2: 'center',
		    selected3: 'center',
		    selected4: '0',
  		},

  		flexClass:{
  			flexDirection: '',
  			justifyContent: '',
  			alignItems: '',
  			flexGrow: '',
  		},
	    
	    cssText:{
	    	'flex--row' : '\n\r  -webkit-box-orient: vertical;\n\r  -webkit-box-direction: normal;\n\r  -webkit-flex-direction: column;\n\r  flex-direction: column;',
	    	
	    	'flex--justify-content--space-between' : '\n\r  -webkit-box-pack: justify;\n\r  -webkit-justify-content: space-between;\n\r  justify-content: space-between;',
	    	'flex--justify-content--space-around' : '\n\r  -webkit-box-pack: justify;\n\r  -webkit-justify-content: space-around;\n\r  justify-content: space-around;',
	    	'flex--justify-content--center' : '\n\r  -webkit-box-pack: center;\n\r  -webkit-justify-content: center;\n\r  justify-content: center;',
	    	'flex--justify-content--start' : '\n\r  -webkit-box-pack: start;\n\r  -webkit-justify-content: start;\n\r  justify-content: start;',
	    	'flex--justify-content--end' : '\n\r  -webkit-box-pack: end;\n\r  -webkit-justify-content: end;\n\r  justify-content: end;','flex--justify-content--space-around' : '\n\r  -webkit-box-pack: justify;\n\r  -webkit-justify-content: space-around;\n\r  justify-content: space-around;',
	    	
	    	'flex--align-items--center' : '\n\r  -webkit-box-align: center;\n\r  -webkit-align-items: center;\n\r  align-items: center;',
	    	'flex--align-items--start' : '\n\r  -webkit-box-align: start;\n\r  -webkit-align-items: start;\n\r  align-items: start;',
	    	'flex--align-items--end' : '\n\r  -webkit-box-align: end;\n\r  -webkit-align-items: end;\n\r  align-items: end;',
	    	'flex--align-items--baseline' : '\n\r  -webkit-box-align: baseline;\n\r  -webkit-align-items: baseline;\n\r  align-items: baseline;',
	    	'flex--align-items--stretch' : '\n\r  -webkit-box-align: stretch;\n\r  -webkit-align-items: stretch;\n\r  align-items: stretch;',
	    	
	    	'flex--flex-grow-all' : '\n\r  width: 100%;\n\r  -webkit-box-flex: 1;\n\r  -webkit-flex-grow: 1;\n\r  flex-grow: 1;',
	    },

	    //主轴方向
		options1:[
			{text:'水平方向', value:'horizontal'},
			{text:'垂直方向', value:'vertical'},
		],

		//主轴对齐
		options2:[
			{text:'center', value:'center'},
			{text:'start', value:'start'},
			{text:'end', value:'end'},
			{text:'space-between', value:'space-between'},
			{text:'space-around', value:'space-around'},
		],

		//侧轴对齐
		options3:[
			{text:'center', value:'center'},
			{text:'start', value:'start'},
			{text:'end', value:'end'},
			{text:'baseline', value:'baseline'},
			{text:'stretch', value:'stretch'},
		],

		//项目宽度
		options4:[
			{text:'auto', value:'0'},
			{text:'等分', value:'1'},
		],
    },

    computed:{
    	classObject:function(){
    		if (this.selected.selected1 == 'horizontal') {
    			this.flexClass.flexDirection = '';
    		}else{
    			this.flexClass.flexDirection = 'flex--row';
    		}

    		this.flexClass.justifyContent = 'flex--justify-content--' + this.selected.selected2;
    		this.flexClass.alignItems = 'flex--align-items--' + this.selected.selected3;

    		if (this.selected.selected4 == '0') {
    			this.flexClass.flexGrow = '';
    		}else{
    			this.flexClass.flexGrow = 'flex--flex-grow-all';
    		}

    		return [
					this.flexClass.flexDirection,
					this.flexClass.justifyContent,
					this.flexClass.alignItems,
					this.flexClass.flexGrow,
				]
    	},

    	cssMsg:function(){
    		var cssStyle = {
		  			'flexWrap': '',
		  			'item': ''
		  		};
    		this.cssText[''] = '';

    		cssStyle.flexWrap = 
			    				this.cssText[this.flexClass.flexDirection]+
			    				this.cssText[this.flexClass.justifyContent]+
			    				this.cssText[this.flexClass.alignItems];

			if(this.flexClass.flexGrow){
				cssStyle.item = this.cssText[this.flexClass.flexGrow];
			}
			return cssStyle;
    	}
    }
})

