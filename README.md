### What
This application allows the user to upload and analyze an SQL execution plan as output to xml by SQL Server.

### Why
Motivation for this project comes from the fact that, in many cases, we are looking for operation nodes with specific properties that set them apart from the others.
One common example would be that a sysop wants to find the node that has the highest CPU cost. In a large, multi-statement query, these execution plans can become
cumbersome to navigate - they are big, they have many nodes, and the navigation interface is not exactly user-friendly for this use-case.

### Solve It For Me
A solution to this is to simply output the execution plan as xml from the sql server instance (click the ... icon in the top right of the execution plan)
and upload it to this application. The following things happen when you upload an execution plan:
* The execution plan is split into each individual statement
* Each statement is displayed, sorted by Relative Sub Tree Cost Descending, and some metadata about that query is available for viewing.
* Clicking the "Preview Query" button on each statement will display the underlying sql statement, in an easy-to-read format
* Clicking the statement row itself will take the user to an Analysis Page, where various types of analysis are displayed for the selected sql statement
 * Query Statement - simply displays the SQL statement that is being analyzed in an easy-to-read format
 * Query Information - contains all attributes of the SQL Statement from the execution plan xml node
 * Operation Statistics - contains a sortable table of children nodes with tag name "RelOp" of the statement that is being analyzed. All attributes of the RelOp tags are displayed

### Okay, Let's Do It
Created with Create-React-App. This app requires all the things that Create-React-App requires to run locally (node >= 14, yarn / npm)

To get started, simply pull this repo and then run locally:
`git clone https://github.com/olgn/sqlexecutioninvestigator.git`
`cd sqlexecutioninvestigator`
`yarn`
`yarn start`

You should see the application running locally at `localhost:3000`.

Upload an SQL execution plan (in `xml`) and enjoy!

### U Shoulda Done This
This is just a couple-day pet project that solves the majority of the problems that I personally have when trying to diagnose big execution plans. You want something else? PR's welcome :upside-down-face: