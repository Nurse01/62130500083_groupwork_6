const constraints = {
    firstname: {
        presence: true
    },
    lastname: {
        presence: true
    },
    email: {
        presence: true,
        email: true
    },
    gender: {
        presence: true

    },
    phone: {
        presence: true,
        length: {
            minimum: 9,
            maximum: 10,
            message: 'Number must between 9-10 digits'
        },


    },
    chosengroup: {
        presence: true
    }
}



const app = {
    data() {
        return {
            firstname: null,
            lastname: null,
            location: 'Ladprao',
            imageUpper: 'images/upper.jpg',
            imageProfile: 'images/profile.jpg',
            followers: '500',
            projects: '20',
            ranks: '5',
            email: null,
            gender: null,
            phone: null,
            chosengroup: null,
            group_lists: [
                { gruop_num: 1, instructor: 'Aj.Umaporn' },
                { gruop_num: 2, instructor: 'Aj.Kriengkrai' },
                { gruop_num: 3, instructor: 'Aj.Sanit' },
                { gruop_num: 4, instructor: 'Aj.Pichet' },
                { gruop_num: 5, instructor: 'P.Toei' },
            ],
            errors: null,

        }
    },
    methods: {
        checkForm() {
            this.errors = validate({
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                gender: this.gender,
                phone: this.phone,
                chosengroup: this.chosengroup
            }, constraints)
            if (this.errors) {
                console.log(this.errors)
            }
            if(!this.errors){
                alert("Your profile is Registered successfully.")
            }

        }

    },
    updated() {
        console.log(this.chosengroup);
    },
}

Vue.createApp(app).mount('#app')