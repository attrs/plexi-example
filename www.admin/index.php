<?php
	session_start();
	
	if( !isset($_SESSION['test']) ) {
		$_SESSION['test'] = 'session-' + mt_rand();
	}
	
	echo $_SESSION['test'];
	echo '한글';
	
	phpinfo();
?>