const subjects = [
    'unknown',
    'User',
    'Users',
    'Staff',
    'Rides',
    'Clubs',
    'Tags',
    'Notifications',
    'Badges',
    'Groups',
    'email',
    'sms',
    'Test',
    'all'
] as const;

type Subjects = typeof subjects[number]

/**
 * Define a custom type guard to assert whether an unknown object is a Subjects.
 */
function isSubjects(maybeSubjects: any): maybeSubjects is Subjects {
    return subjects.includes(maybeSubjects);
}

console.log(isSubjects('Groups1'))
