const app = {
    data() {
        return {
            firstname: 'Warathaya',
            lastname: 'Rattachai',
            location: 'Ladprao',
            imageUpper: 'images/upper.jpg',
            imageProfile: 'images/profile.jpg',
            followers: '500',
            projects: '20',
            ranks: '5',
            fname: null,
            lname: null,
            gender: null,
            chosengroup: null,
            group_lists: [
                { gruop_num: 1, instructor: 'Aj.Umaporn' },
                { gruop_num: 2, instructor: 'Aj.Kriengkrai' },
                { gruop_num: 3, instructor: 'Aj.Sanit' },
                { gruop_num: 4, instructor: 'Aj.Pichet' },
                { gruop_num: 5, instructor: 'P.Toei' },
            ]

        }
    }

}
Vue.createApp(app).mount('#app')