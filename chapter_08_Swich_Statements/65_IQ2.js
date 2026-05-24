let testscore = 85;
switch (true) {
    case (testscore >= 95):
        console.log(" Outstanding Perfoormance");
        break;
    case (testscore >= 85):
        console.log(" Excellent Performance");
        break;
    case (testscore >= 75):
        console.log(" Good Performance");
        break;
    case (testscore >= 65):
        console.log(" Average Performance");
        break;
    case (testscore >= 50):
        console.log(" Pass");
        break;
    default:
        console.log(" Fail");
}