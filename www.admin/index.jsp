<!DOCTYPE html>
<%
	String test = (String)session.getAttribute("test");
	if( test == null ) {
		session.setAttribute("test", Math.random() + "");
		test = (String)session.getAttribute("test");
	}
	
	response.addHeader("X-Test-Header", "header value");
%>
<html>
<head>
	<meta charset="utf-8" />
	<title>jsp test</title>
</head>
<body>  
	<ul>
		session <%=test%> 한글 <%="한글"%>
	</ul>
</body>
</html>
