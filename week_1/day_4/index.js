let usernames = [
    "test_123", "jack_456"
]
console.log(usernames[1]) // returns "jack_456"

let profile = {
	first_name: "Johnny",
	last_name: "Depp",
}
console.log(profile.first_name + " " + profile.last_name )

let profiles = [
    {
        name: "Tom",
        job: "Engineer",
        friendsList: [
            {
                name: "Mary",
                job: "Artist"
            },
            {
                name: "Don",
                job: "Teacher"
            }
        ]
    }
]

// print out the occupation of Tom's last entry to his friends list
console.log(profiles[0].friendsList[1].job)

document.write('Hello World!')
console.log('Hello world from Console!')