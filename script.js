

document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const updateMembershipBtn = document.getElementById('updateMembershipBtn');
    const addWorkoutBtn = document.getElementById('addWorkoutBtn');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const dashboard = document.getElementById('dashboard');
    const userDisplayName = document.getElementById('userDisplayName');
    const membershipInfo = document.getElementById('membershipInfo');
    const workoutSchedule = document.getElementById('workoutSchedule');
    const membershipType = document.getElementById('membershipType');
    const workoutName = document.getElementById('workoutName');
    let currentUser = null;

    loginBtn.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        const user = findUser(username, password);
        if (user) {
            currentUser = user;
            displayDashboard(user);
        } else {
            alert('Invalid username or password');
        }
    });

    logoutBtn.addEventListener('click', () => {
        currentUser = null;
        dashboard.classList.add('hidden');
        usernameInput.value = '';
        passwordInput.value = '';
    });

    updateMembershipBtn.addEventListener('click', () => {
        if (!currentUser) return;

        const membership = membershipType.value;
        const result = updateMembership(currentUser.username, membership);
        alert(result);

        if (result === 'Membership updated successfully') {
            displayMembership(currentUser);
        }
    });

    addWorkoutBtn.addEventListener('click', () => {
        if (!currentUser) return;

        const workout = workoutName.value.trim();
        if (workout) {
            const result = addWorkout(currentUser.username, workout);
            alert(result);

            if (result === 'Workout added successfully') {
                displayWorkoutSchedule(currentUser);
            }
        } else {
            alert('Please enter a workout name');
        }
    });

    function displayDashboard(user) {
        userDisplayName.textContent = user.displayName;
        displayMembership(user);
        displayWorkoutSchedule(user);
        dashboard.classList.remove('hidden');
    }

    function displayMembership(user) {
        membershipInfo.textContent = `You are currently on the ${user.membership.charAt(0).toUpperCase() + user.membership.slice(1)} membership plan.`;
        membershipType.value = user.membership;
    }

    function displayWorkoutSchedule(user) {
        workoutSchedule.innerHTML = '';
        user.workoutSchedule.forEach(workout => {
            const li = document.createElement('li');
            li.textContent = `${workout.name} (${workout.day})`;
            workoutSchedule.appendChild(li);
        });
    }
});
