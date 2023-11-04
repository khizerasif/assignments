
const currentUsers: string[] = ['Ali', 'Fatima', 'Omar', 'Zainab', 'Aisha'];


const newUsers: string[] = ['Khadija', 'Ahmed', 'Aisha', 'OMAR', 'Zara'];


const currentUsersLower: string[] = currentUsers.map(user => user.toLowerCase());


for (const user of newUsers) {
    if (currentUsersLower.includes(user.toLowerCase())) {
        console.log(`The username '${user}' is not available. Please enter a new username.`);
    } else {
        console.log(`The username '${user}' is available.`);
    }
}
