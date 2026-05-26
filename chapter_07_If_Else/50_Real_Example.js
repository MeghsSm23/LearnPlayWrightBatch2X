// let statuscode = 200;

// if (statuscode === 200) {
//     console.log("OK");

// } else if (statuscode === 404) {
//     console.log("Not Found");

// } else if (statuscode === 500) {
//     console.log("Internal Server Error");
// }


//app.vwo.com -->roles-->admin, editor, viewer
//admin --> can do everything
//editor --> can edit but cannot manage users and permissions
//viewer --> can only view the content but cannot edit or manage users and permissions

let isLoggedIn = true;
let userRole = "editor";

if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("Welcome, Admin! You have full access.");
    } else if (userRole === "editor") {
        console.log("Welcome, Editor! You can edit content.");
    } else if (userRole === "viewer") {
        console.log("Welcome, Viewer! You can view content.");
    } else {
        console.log("Welcome! Your role is not recognized.");
    }
} else {
    console.log("Please log in to access the application.");
}