// Define all game problem data

const problems = {
    beginner: [
        {
            question: "You bought apples for $5. To balance your purchase, how much money should you give to the cashier?",
            image: "apple.jpg",
            hint: "Balance equation: Money spent = Money given",
            answer: 5,
            unit: "$",
            explanation: "To balance a purchase, you must pay exactly what you owe."
        },
        {
            question: "Your rectangular garden is 5m by 3m. How many square meters of soil do you need to cover it to create a balanced planting surface?",
            image: "apple.jpg",
            hint: "Balance equation: Area = Length × Width",
            answer: 15,
            unit: "m²",
            explanation: "To balance the garden coverage, you need soil for the entire area of 5m × 3m = 15m²."
        },
        {
            question: "Your $20 shirt is on sale with 25% off. To balance what you get with what you pay, how much will you pay?",
            image: "apple.jpg",
            hint: "Balance equation: Original price × (1 - discount percentage) = Final price",
            answer: 15,
            unit: "$",
            explanation: "To balance the transaction, you pay $20 × (1 - 0.25) = $20 × 0.75 = $15."
        }
    ],
    
    easy: [
        {
            question: "You have $50 and spend $12.75 on lunch and $8.50 on a movie ticket. To balance your spending, how much money should you have left?",
            image: "https://via.placeholder.com/400x200?text=Money+Balance",
            hint: "Balance equation: Initial amount - (Lunch + Movie) = Remaining",
            answer: 28.75,
            unit: "$",
            explanation: "To maintain financial balance, your remaining money must be $50 - $12.75 - $8.50 = $28.75."
        },
        {
            question: "Your backyard is a 10m by 8m rectangle. How many meters of fencing do you need to create a balanced boundary around it?",
            image: "https://via.placeholder.com/400x200?text=Backyard+Fencing",
            hint: "Balance equation: Perimeter = 2 × (Length + Width)",
            answer: 36,
            unit: "m",
            explanation: "To balance the enclosure, you need perimeter fencing of 2 × (10m + 8m) = 2 × 18m = 36m."
        },
        {
            question: "After a 30% discount and then an additional 15% off, what is the final balanced price of a $80 jacket?",
            image: "https://via.placeholder.com/400x200?text=Compound+Discount",
            hint: "Balance equation: Original × (1 - first discount) × (1 - second discount) = Final",
            answer: 47.6,
            unit: "$",
            explanation: "To balance the transaction with compound discounts: $80 × (1 - 0.3) × (1 - 0.15) = $80 × 0.7 × 0.85 = $47.60."
        }
    ],
    
    medium: [
        {
            question: "A cylindrical water tank has radius 1.2m and height 3m. How many liters of water can it hold when balanced to full capacity?",
            image: "https://via.placeholder.com/400x200?text=Cylindrical+Tank",
            hint: "Balance equation: Volume in liters = π × r² × h × 1000",
            answer: 13571,
            unit: "L",
            explanation: "To balance the tank capacity: π × (1.2m)² × 3m × 1000 = 3.14159 × 1.44 × 3 × 1000 = 13,571 liters (rounded)."
        },
        {
            question: "A ladder needs to reach a window 12m above ground. If the ladder's base is 5m from the building, how long must the ladder be to balance safely?",
            image: "https://via.placeholder.com/400x200?text=Ladder+Problem",
            hint: "Balance equation: Ladder length² = Height² + Distance²",
            answer: 13,
            unit: "m",
            explanation: "For the ladder to be balanced between ground and window: √(12² + 5²) = √(144 + 25) = √169 = 13m."
        },
        {
            question: "You push a 50kg box 15m with a force of 100N. How much work in joules did you do to balance the force and distance?",
            image: "https://via.placeholder.com/400x200?text=Work+Force",
            hint: "Balance equation: Work = Force × Distance",
            answer: 1500,
            unit: "J",
            explanation: "To balance the work equation: Work = 100N × 15m = 1500 joules."
        }
    ],
    
    worldHero: [
        {
            question: "A cone-shaped water tank with radius 1.5m and height 3m is 2/3 full. If water is leaking at 20 liters per hour, how many hours until empty to restore balance?",
            image: "https://via.placeholder.com/400x200?text=Leaking+Tank",
            hint: "Balance equation: Time = (⅔ × π × r² × h × 1000) ÷ Leak rate",
            answer: 117.8,
            unit: "hrs",
            explanation: "For time balance: (⅔ × π × 1.5² × 3 × 1000) ÷ 20 ≈ 117.8 hours."
        },
        {
            question: "A 1200kg car moving at 90 km/h needs to stop. If the coefficient of friction is 0.6, what distance in meters is required to balance the forces and stop safely?",
            image: "https://via.placeholder.com/400x200?text=Car+Braking",
            hint: "Balance equation: Distance = v² ÷ (2 × μ × g), where v is in m/s",
            answer: 52.1,
            unit: "m",
            explanation: "For balanced deceleration: (25 m/s)² ÷ (2 × 0.6 × 9.8) ≈ 52.1 meters."
        },
        {
            question: "You need to balance the pH of a swimming pool from 8.2 to 7.4. If each 100g of acid reducer decreases pH by 0.1 in your 50,000L pool, how many grams do you need?",
            image: "https://via.placeholder.com/400x200?text=pH+Balance",
            hint: "Balance equation: Acid needed = (Current pH - Target pH) × (Amount needed per 0.1 pH)",
            answer: 800,
            unit: "g",
            explanation: "To balance pH: (8.2 - 7.4) × 100 = 0.8 × 10 × 100 = 800 grams."
        }
    ]
};

// Define badges that can be earned
const badges = {
    speedster: {
        id: "speedster",
        name: "Speedster",
        description: "Solved a problem in under 15 seconds",
        icon: "fa-bolt"
    },
    perfectScore: {
        id: "perfectScore",
        name: "Perfect Score",
        description: "Got 100% correct answers in a level",
        icon: "fa-star"
    },
    noHints: {
        id: "noHints",
        name: "Self-Reliant",
        description: "Completed a level without using hints",
        icon: "fa-lightbulb"
    },
    mathWhiz: {
        id: "mathWhiz",
        name: "Math Whiz",
        description: "Completed world hero level",
        icon: "fa-brain"
    },
    balanceMaster: {
        id: "balanceMaster",
        name: "Balance Master",
        description: "Achieved perfect balance in all equations",
        icon: "fa-balance-scale"
    }
};