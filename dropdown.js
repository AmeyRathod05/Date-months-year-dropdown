//Date method
function dates(tags)
{

		if(tags == '')
	
		{
			var dates = "";
			var i;
			for (i = 1; i < 32;  i++ )
			{
				dates += i;
			}
		}
		else
	
		{
			var dates = "";
			var i;
			for (i = 1; i < 32;  i++ )
			{
				dates += "<" + tags +">" + i +"</" + tags +">";
			}	
		}
			
    var multiple_list = document.getElementsByClassName("bear-dates");
    for (i = 0; i < multiple_list.length; i++)
	{
    	multiple_list[i].innerHTML = dates;
    }	
}




//Days method
function days(tags)
{
	
	var list_days = [
						'Monday', 
						'Tuesday', 
						'Wednesday', 
						'Thursday', 
						'Friday', 
						'Saturday', 
						'Sunday'
					];

		if(tags == '')
		
		{
			var i;
			for (i = 0, l = list_days.length, days = ""; i < l; i++)
			{
				days += list_days[i];
			}
		}
		else
		
		{
			for (i = 0, l = list_days.length, days = ""; i < l; i++)
			{
				days += "<" + tags +">" + list_days[i] + "</" + tags +">";
			}	
		}
		
						
    var multiple_list = document.getElementsByClassName("bear-days");
    for (i = 0; i < multiple_list.length; i++)
	{
    	multiple_list[i].innerHTML = days;
    }	
}



//Short Days method
function short_days(tags)
{

	var list_days = [
						'Mon', 
						'Tue', 
						'Wed', 
						'Thu', 
						'Fri', 
						'Sat', 
						'Sun'
					];

		if(tags == '')
	
		{
			var i;
			for (i = 0, l = list_days.length, days = ""; i < l; i++)
			{
				days += list_days[i];
			}
		}
		else
	
		{
			for (i = 0, l = list_days.length, days = ""; i < l; i++)
			{
				days += "<" + tags +">" + list_days[i] + "</" + tags +">";
			}	
		}
		
					
    var multiple_list = document.getElementsByClassName("bear-short-days");
    for (i = 0; i < multiple_list.length; i++)
	{
    	multiple_list[i].innerHTML = days;
    }	
}



//Months method
function months(tags)
{
	
	var list_months = [
                        'January',
                        'Febuary',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December'
					];

		if(tags == '')
		
		{
			var i;
			for (i = 0, l = list_months.length, months = ""; i < l; i++)
			{
				months += list_months[i];
			}
		}
		else
		
		{
			for (i = 0, l = list_months.length, months = ""; i < l; i++)
			{
				months += "<" + tags +">" + list_months[i] + "</" + tags +">";
			}	
		}
		
					
    var multiple_list = document.getElementsByClassName("bear-months");
    for (i = 0; i < multiple_list.length; i++)
	{
    	multiple_list[i].innerHTML = months;
    }	
}



//Short Months method
function short_months(tags)
{

	var list_months = [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec'
					];

		if(tags == '')
		
		{
			var i;
			for (i = 0, l = list_months.length, months = ""; i < l; i++)
			{
				months += list_months[i];
			}
		}
		else

		{
			for (i = 0, l = list_months.length, months = ""; i < l; i++)
			{
				months += "<" + tags +">" + list_months[i] + "</" + tags +">";
			}	
		}
		
					
    var multiple_list = document.getElementsByClassName("bear-short-months");
    for (i = 0; i < multiple_list.length; i++)
	{
    	multiple_list[i].innerHTML = months;
    }	
}




//Year method
function years(tags, startY, endY)
{

		if(tags == '')
	
		{
			var years = "";
			for (i = startY; i < endY + 1;  i++ )
			{
				years += i;
			}
		}
		else
		
		{
			var years = "";
			for (i = startY; i < endY + 1;  i++ )
			{
				years += "<" + tags +">" + i +"</" + tags +">";
			}	
		}
		
						
    var multiple_list = document.getElementsByClassName("bear-years");
    for (i = 0; i < multiple_list.length; i++)
	{
    	multiple_list[i].innerHTML = years;
    }	
}