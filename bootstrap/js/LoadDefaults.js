<script>
$(document).ready(function() {
	$("#Dispatcher").val(load("loginData/login.txt"));
	$("#IncidentAddress").val(load("callData/IncidentAddress.txt");
	$("#City").val(load("callData/City.txt");
	$("#State").val(load("callData/State.txt");
	$("#Zip").val(load("callData/Zip.txt");
	$("#County").val(load("callData/County.txt");
	$("#NotifiedBy").val(load("callData/Notifier.txt");
	$("NotificationTimestamp").val(load("callData/Timestamp.txt");
	$("IncidentTimestamp").val(load("callData/IncTime.txt");
	$("DisasterType").val(load("callData/Disaster.txt");
	$("Disaster_num").val(genDisNum()); <!-- this should probably by tracked by a variable on login then incremented for each call, then saved back on logout-->
	
});
</script>

<script>

function genDisNum() {
    // Check to see if the counter has been initialized
    if ( typeof genDisNum.counter == 'undefined' ) {
        // It has not... perform the initilization
        genDisNum.counter = 981;
    }
	var d = new date();
	var year = d.getYear();
	var DispatchNumber = ++genDisNum.counter + "-" +year;
    // Do something stupid to indicate the value
    return DispatchNumber;
}
</script>