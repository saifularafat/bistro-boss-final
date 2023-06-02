/**
 * ---------------
 *     ! BASIC
 * ---------------
 * 01. do not show the link  to them who should not see it.
 * 02. only show the person/types of user who should see it.
 * 03. Do not allow to visit the link by typing on the url..
 * ^ use AdminRoute that will check whether the user is admin or not 
 * ~ if not admin then redirect to any other page. You could logOut user and 
 * * send them to the login page as well..
 * 
 * 
 * -------------------------
 *      ? TO SEND DATA
 * -------------------------
 * 01. verify jwt token( send Authorization token in the header to the server).
 * & If possible use axios to send jwt token by intercepting the request 
 * 02. if it is an admin activity. Make sure only admin user is posting data
 * by using verifyAdmin function.
 * 
*/