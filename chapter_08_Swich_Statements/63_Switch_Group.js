let browser = 'Edge';

switch (browser) {
    case 'Edge':
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
        console.log(`You are using ${browser} browser!`);
        break;
    default:
        console.log('Unknown browser!');
}   