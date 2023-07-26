console.log('Regular Expressions VS Arrow Functions')

const nitin = {
    firstName: 'nitin',
    year: 1998,
    calcAge: function () {
        console.log(2023 - this.year)

        // Solution 1:
        /*    
        const self = this; // self or that
        const isMillion = function () {
           console.log(self)
           console.log(self.year >= 1998 && self.year <= 1994)
         //   console.log(this.year >= 1998 && this.year <= 1994)
         };
         */
        // Solution 2:
        const isMillion = () => {
            console.log(this)
            console.log(this.year >= 1994 && this.year <= 1998)
        };
        isMillion()
    },
    greet: () => {
        // console.log(this)
        console.log(`Hi ${this.firstName}`);
    },
};
nitin.greet()
nitin.calcAge()