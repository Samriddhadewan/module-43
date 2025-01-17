import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {


    const gymPackages = [
        {
          id: 1,
          name: "Standard Membership",
          features: [
            "Unlimited access to gym facilities",
            "Use of free weights and cardio machines",
            "Locker facility",
            "Access during operational hours"
          ],
          price: 60
        },
        {
          id: 2,
          name: "Premium Membership",
          features: [
            "Everything in Standard Membership",
            "24/7 gym access",
            "Access to sauna and steam room",
            "Discounts on personal training"
          ],
          price: 100
        },
        {
          id: 3,
          name: "Family Package",
          features: [
            "Unlimited access for up to 4 family members",
            "Kids' fitness program",
            "Group classes included",
            "Access to swimming pool"
          ],
          price: 150
        },
        {
          id: 4,
          name: "Personal Training Package",
          features: [
            "10 one-on-one training sessions",
            "Customized workout plans",
            "Progress tracking and reports",
            "Free diet consultation"
          ],
          price: 300
        },
        {
          id: 5,
          name: "Luxury Wellness Plan",
          features: [
            "Everything in Premium Membership",
            "Professional massage therapy sessions",
            "Access to indoor sports courts",
            "Monthly progress reviews with a trainer"
          ],
          price: 200
        }
      ];
      
  return (
    <div>

      <h1>This the best deals of the town</h1>
        {
            gymPackages.map(option => <PriceOption 
            key={option.id}
            option={option}
            ></PriceOption>)
        }

    </div>
  ) 
}

export default PriceOptions