/*****************************************************************************************************		
If current time isn't desired, change start austDay variable to desired date/time
*****************************************************************************************************/			
	$(function () {
	var austDay = new Date();
/*****************************************************************************************************
Define the whether to count up (since: time-variable) or countdown (until: time-variable)
Define the format (layout) of the counter
*****************************************************************************************************/
	$('#defaultCountdown').countdown({since: austDay, format: 'yodhmS', layout: '{d<}{dn} {dl}, {d>}{h<}{hn} {hl}, {h>}{m<}{mn} {ml}, {m>}{sn} {sl}'});

	});
		
/*By George Chiang. (JK's ultimate JavaScript tutorial and free JavaScripts site!)
http://www.javascriptkit.com
Credit MUST stay intact for use*/
	var milisec=0
	var seconds=0
	document.d.d2.value='0'

	function display(){
		if (milisec>=9){
			milisec=0
			seconds+=1
		}
		else
			milisec+=1

		Number.prototype.insertComma = function(){
			var s = this.toString();
			var temp = '';
			for (var i=s.length-1;i>=0;i-=3){
				if ((i-3)>=0) temp = "," + s.substr(i-2, 3) + temp;
				else temp = s.substring(0, i+1) + temp;
			}
			return temp;
		}

		document.d.d2.value = seconds.insertComma() 
/*****************************************************************************************************
Define the death rate
*****************************************************************************************************/
		setTimeout("display()",69.3598) 
	}

	display()