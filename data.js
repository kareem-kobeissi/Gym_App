const users = [
    {
        username: 'kareem',
        password: '123',
        displayName: 'kareem kob',
        membership: 'basic',
        workoutSchedule: [
            { name: 'Cardio', day: 'Monday' },
            { name: 'Weight Lifting', day: 'Wednesday' },
            { name: 'Yoga', day: 'Friday' },
        ]
    },
    // Add more users as needed
];

function findUser(username, password) {
    return users.find(user => user.username === username && user.password === password);
}

function updateMembership(username, membershipType) {
    const user = users.find(user => user.username === username);
    if (user) {
        user.membership = membershipType;
        return 'Membership updated successfully';
    }
    return 'User not found';
}

function addWorkout(username, workoutName) {
    const user = users.find(user => user.username === username);
    if (user) {
        user.workoutSchedule.push({ name: workoutName, day: 'Custom' });
        return 'Workout added successfully';
    }
    return 'User not found';
}

function getWorkoutSchedule(username) {
    const user = users.find(user => user.username === username);
    return user ? user.workoutSchedule : [];
}
