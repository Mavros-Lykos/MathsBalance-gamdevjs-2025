// Define all game problem data

const problems = {
    beginner: [
        {
            question: "You bought apples for $5. To BALANCE your purchase, how much money should you give to the cashier?",
            image: "../images/beginner/1_apple.jpg",
            hint: "Balance equation: Money spent = Money given",
            answer: 5,
            unit: "$",
            explanation: "To balance a purchase, you must pay exactly what you owe."
        },
        {
            question: "Your rectangular garden is 5m by 3m. How many square meters of soil do you need to cover it to create a BALANCED planting surface?",
            image: "../images/beginner/2_square_meter.jpg",
            hint: "Balance equation: Area = Length × Width",
            answer: 15,
            unit: "m²",
            explanation: "To balance the garden coverage, you need soil for the entire area of 5m × 3m = 15m²."
        },
        {
            question: "Your $20 shirt is on sale with 25% off. To BALANCE what you get with what you pay, how much will you pay?",
            image: "../images/beginner/3_shirt.jpg",
            hint: "Balance equation: Original price × (1 - discount percentage) = Final price",
            answer: 15,
            unit: "$",
            explanation: "To balance the transaction, you pay $20 × (1 - 0.25) = $20 × 0.75 = $15."
        },{
            question: "You bought a book for $12. To BALANCE your purchase, how much money should you give to the cashier?",
            image: "../images/beginner/book_store.jpg",
            hint: "Balance equation: Money spent = Money given",
            answer: 12,
            unit: "$",
            explanation: "To balance a purchase, you must pay exactly what you owe ($12)."
        },
        {
            question: "Your piggy bank has $15. After buying a toy for $8, how much money will remain to keep your savings BALANCED?",
            image: "../images/beginner/piggy_bank.jpg",
            hint: "Balance equation: Initial money - Money spent = Remaining money",
            answer: 7,
            unit: "$",
            explanation: "To maintain balance in your savings: $15 - $8 = $7."
        },
        {
            question: "A seesaw has a 30kg child on one end. How many kilograms should be placed on the other end for perfect BALANCE?",
            image: "../images/beginner/seesaw.jpg",
            hint: "Balance equation: Weight on left = Weight on right",
            answer: 30,
            unit: "kg",
            explanation: "For a balanced seesaw, both sides must have equal weight (30kg)."
        },
        {
            question: "You need to share 24 candies equally among 8 friends. How many candies should each friend get for a fair BALANCE?",
            image: "../images/beginner/candies.jpg",
            hint: "Balance equation: Total candies ÷ Number of friends = Candies per friend",
            answer: 3,
            unit: "candies",
            explanation: "For balanced sharing: 24 ÷ 8 = 3 candies per friend."
        },
        {
            question: "A recipe needs 2 cups of flour for 1 loaf of bread. How many cups do you need for 3 loaves to maintain the proper BALANCE?",
            image: "../images/beginner/baking.jpg",
            hint: "Balance equation: Cups per loaf × Number of loaves = Total cups needed",
            answer: 6,
            unit: "cups",
            explanation: "To maintain the recipe's balance: 2 cups × 3 loaves = 6 cups of flour."
        },
        {
            question: "If your daily water intake should be 2 liters, how many 250ml bottles must you drink for a BALANCED hydration?",
            image: "../images/beginner/water_bottles.jpg",
            hint: "Balance equation: Total needed ÷ Size of bottle = Number of bottles",
            answer: 8,
            unit: "bottles",
            explanation: "For balanced hydration: 2000ml ÷ 250ml = 8 bottles."
        },
        {
            question: "You've been running for 15 minutes. If your BALANCED exercise routine requires 45 minutes, how many more minutes should you run?",
            image: "../images/beginner/running.jpg",
            hint: "Balance equation: Total needed - Time completed = Time remaining",
            answer: 30,
            unit: "minutes",
            explanation: "To balance your exercise routine: 45 - 15 = 30 minutes remaining."
        },
        {
            question: "A BALANCED meal needs 25% protein. If your plate has 400 grams of food, how many grams should be protein?",
            image: "../images/beginner/balanced_meal.jpg",
            hint: "Balance equation: Total food × Protein percentage = Protein amount",
            answer: 100,
            unit: "grams",
            explanation: "For a balanced meal: 400 × 0.25 = 100 grams of protein."
        },
        {
            question: "If a car travels 12 km per liter of fuel, how many liters are needed to BALANCE a 60 km journey?",
            image: "../images/beginner/car_journey.jpg",
            hint: "Balance equation: Distance ÷ Efficiency = Fuel needed",
            answer: 5,
            unit: "liters",
            explanation: "For a balanced fuel calculation: 60 ÷ 12 = 5 liters."
        },
        {
            question: "A scale has 300 grams on the left side. How many grams should be placed on the right side to BALANCE it?",
            image: "../images/beginner/scale.jpg",
            hint: "Balance equation: Weight on left = Weight on right",
            answer: 300,
            unit: "grams",
            explanation: "For a balanced scale, both sides must have the same weight (300g)."
        },
        {
            question: "Your weekly allowance is $20. If you spend $8 on Monday and $5 on Tuesday, how much remains to maintain BALANCED spending?",
            image: "../images/beginner/allowance.jpg",
            hint: "Balance equation: Starting amount - Spent amount = Remaining amount",
            answer: 7,
            unit: "$",
            explanation: "To maintain balanced finances: $20 - $8 - $5 = $7."
        },
        {
            question: "An aquarium has a pH of 6.8 but needs 7.0 for BALANCED water. If each neutralizer tablet raises pH by 0.1, how many tablets are needed?",
            image: "../images/beginner/aquarium.jpg",
            hint: "Balance equation: (Target pH - Current pH) ÷ Effect per tablet = Tablets needed",
            answer: 2,
            unit: "tablets",
            explanation: "For balanced water: (7.0 - 6.8) ÷ 0.1 = 2 tablets."
        },
        {
            question: "A recipe calls for a 2:1 ratio of flour to sugar. If you use 3 cups of sugar, how many cups of flour do you need for BALANCE?",
            image: "../images/beginner/baking_ingredients.jpg",
            hint: "Balance equation: Sugar amount × Ratio = Flour amount",
            answer: 6,
            unit: "cups",
            explanation: "For a balanced recipe with 2:1 ratio: 3 × 2 = 6 cups of flour."
        },
        {
            question: "To maintain BALANCE in your sleep cycle, you need 8 hours of sleep. If you went to bed at 10 PM, when should you wake up?",
            image: "../images/beginner/sleep_cycle.jpg",
            hint: "Balance equation: Start time + Sleep duration = Wake time",
            answer: 6,
            unit: "AM",
            explanation: "For a balanced sleep cycle: 10 PM + 8 hours = 6 AM."
        },
        {
            question: "A BALANCED garden needs 1 plant per 0.5 square meters. How many plants do you need for a 5 square meter garden?",
            image: "../images/beginner/garden.jpeg",
            hint: "Balance equation: Area ÷ Area per plant = Number of plants",
            answer: 10,
            unit: "plants",
            explanation: "For a balanced garden: 5 ÷ 0.5 = 10 plants."
        }

    ],
    
    easy: [
        {
            question: "You have $50 and spend $12.75 on lunch and $8.50 on a movie ticket. To BALANCE your spending, how much money should you have left?",
            image: "../images/easy/1_balance_after_lunch_and_movie_ticket.jpg",
            hint: "Balance equation: Initial amount - (Lunch + Movie) = Remaining",
            answer: 28.75,
            unit: "$",
            explanation: "To maintain financial balance, your remaining money must be $50 - $12.75 - $8.50 = $28.75."
        },
        {
            question: "Your backyard is a 10m by 8m rectangle. How many meters of fencing do you need to create a BALANCED boundary around it?",
            image: "../images/easy/2_fence.jpg",
            hint: "Balance equation: Perimeter = 2 × (Length + Width)",
            answer: 36,
            unit: "m",
            explanation: "To balance the enclosure, you need perimeter fencing of 2 × (10m + 8m) = 2 × 18m = 36m."
        },
        {
            question: "After a 30% discount and then an additional 15% off, what is the final BALANCED price of a $80 jacket?",
            image: "../images/easy/3_jacket.jpg",
            hint: "Balance equation: Original × (1 - first discount) × (1 - second discount) = Final",
            answer: 47.6,
            unit: "$",
            explanation: "To balance the transaction with compound discounts: $80 × (1 - 0.3) × (1 - 0.15) = $80 × 0.7 × 0.85 = $47.60."
        },
        {
            question: "A seesaw has a 40kg child sitting 2m from the fulcrum. How far from the fulcrum should a 20kg child sit on the opposite side to BALANCE?",
            image: "../images/easy/seesaw_balance.jpeg",
            hint: "Balance equation: Weight₁ × Distance₁ = Weight₂ × Distance₂",
            answer: 4,
            unit: "m",
            explanation: "For torque balance: 40kg × 2m = 20kg × Distance₂; Distance₂ = (40 × 2) ÷ 20 = 4m"
        },
        {
            question: "You have a monthly budget of $1200. If you've spent $450 on rent, $280 on groceries, and $170 on utilities, how much remains to maintain BALANCED finances?",
            image: "../images/easy/budget.jpeg",
            hint: "Balance equation: Total budget - All expenses = Remaining balance",
            answer: 300,
            unit: "$",
            explanation: "For budget balance: $1200 - $450 - $280 - $170 = $300"
        },
        {
            question: "A chemical reaction requires a 3:2:1 ratio of elements A, B, and C. If you have 18g of A and 12g of B, how many grams of C are needed for BALANCE?",
            image: "../images/easy/chemistry.jpg",
            hint: "Balance equation: Compare with ratio - Element C = Element A ÷ 3",
            answer: 6,
            unit: "g",
            explanation: "With ratio 3:2:1, if A = 18g and B = 12g, then C = 18g ÷ 3 = 6g for balance."
        },
        {
            question: "Your car gets 35 miles per gallon. For a 420-mile round trip, how many gallons of fuel do you need for BALANCED planning?",
            image: "../images/easy/road_trip.jpg",
            hint: "Balance equation: Total distance ÷ Fuel efficiency = Fuel needed",
            answer: 12,
            unit: "gallons",
            explanation: "For trip balance: 420 miles ÷ 35 miles per gallon = 12 gallons."
        },
        {
            question: "A BALANCED diet requires 2000 calories daily. If breakfast is 500 calories and dinner is 700 calories, how many calories should lunch be?",
            image: "../images/easy/balanced_diet.jpg",
            hint: "Balance equation: Total needed - (Breakfast + Dinner) = Lunch",
            answer: 800,
            unit: "calories",
            explanation: "For dietary balance: 2000 - (500 + 700) = 800 calories for lunch."
        },
        {
            question: "In a BALANCED chemical equation 2H₂ + O₂ → 2H₂O, if you use 10g of H₂, how many grams of O₂ are needed for complete reaction?",
            image: "../images/easy/chemical_reaction.jpg",
            hint: "Balance equation: O₂ mass = H₂ mass × (O₂ molar mass / 2 × H₂ molar mass)",
            answer: 80,
            unit: "g",
            explanation: "For chemical balance: 10g H₂ × (32g/mol O₂ ÷ 4g/mol H₂) = 80g O₂."
        },
        {
            question: "A pulley system is BALANCED when forces on both sides are equal. If one side has 25kg, what weight is needed on the other side for equilibrium?",
            image: "../images/easy/pulley.jpg",
            hint: "Balance equation: Force on side 1 = Force on side 2",
            answer: 25,
            unit: "kg",
            explanation: "For force balance in a simple pulley: 25kg = 25kg."
        },
        {
            question: "Your bank account has $350. After depositing your $1250 paycheck and paying $800 in bills, what's your new BALANCE?",
            image: "../images/easy/banking.jpg",
            hint: "Balance equation: Starting balance + Deposits - Withdrawals = New balance",
            answer: 800,
            unit: "$",
            explanation: "For account balance: $350 + $1250 - $800 = $800."
        },
        {
            question: "A recipe needs to BALANCE wet and dry ingredients in a 1:2 ratio. If you have 150ml of wet ingredients, how many ml of dry ingredients do you need?",
            image: "../images/easy/baking_ratio.jpg",
            hint: "Balance equation: Wet ingredients × Ratio = Dry ingredients",
            answer: 300,
            unit: "ml",
            explanation: "For recipe balance with 1:2 ratio: 150ml × 2 = 300ml dry ingredients."
        },
        {
            question: "For a BALANCED workout, you should burn 300 calories. If you burn 8 calories per minute, how long should you exercise?",
            image: "../images/easy/workout.jpg",
            hint: "Balance equation: Total calories ÷ Calories per minute = Exercise time",
            answer: 37.5,
            unit: "minutes",
            explanation: "For workout balance: 300 ÷ 8 = 37.5 minutes."
        },
        {
            question: "A room is 20°C but needs to be heated to 24°C for comfort. If your heater increases temperature by 2°C per hour, how many hours until BALANCED temperature?",
            image: "../images/easy/room_heating.jpg",
            hint: "Balance equation: (Target temp - Current temp) ÷ Heating rate = Time",
            answer: 2,
            unit: "hours",
            explanation: "For temperature balance: (24 - 20) ÷ 2 = 2 hours."
        },
        {
            question: "A triangle has angles of 45° and 60°. What should the third angle be to maintain BALANCED geometry?",
            image: "../images/easy/triangle.jpg",
            hint: "Balance equation: 180° - Sum of known angles = Third angle",
            answer: 75,
            unit: "degrees",
            explanation: "For angle balance in a triangle: 180° - 45° - 60° = 75°."
        },
        {
            question: "Your garden needs water BALANCED of 1 inch per week. If it rains 0.4 inches, how many more inches should you water?",
            image: "../images/easy/garden_watering.jpg",
            hint: "Balance equation: Total needed - Already received = Amount to add",
            answer: 0.6,
            unit: "inches",
            explanation: "For water balance: 1 - 0.4 = 0.6 inches of additional water."
        },
        {
            question: "A solution is 25% salt. How many grams of pure water must be added to 200g of this solution to create a BALANCED 10% solution?",
            image: "../images/easy/solution_dilution.jpg",
            hint: "Balance equation: (Initial concentration × Initial mass) ÷ Target concentration - Initial mass = Water to add",
            answer: 300,
            unit: "g",
            explanation: "For solution balance: (0.25 × 200) ÷ 0.10 - 200 = 500 - 200 = 300g water."
        },
        {
            question: "In a BALANCED ecosystem, each fox needs 5 rabbits to survive. If a forest has 12 foxes, how many rabbits are needed for ecosystem balance?",
            image: "../images/easy/ecosystem.jpeg",
            hint: "Balance equation: Number of predators × Prey needed per predator = Total prey needed",
            answer: 60,
            unit: "rabbits",
            explanation: "For ecosystem balance: 12 foxes × 5 rabbits per fox = 60 rabbits."
        }
    ],
    
    medium: [
        {
            question: "A cylindrical water tank has radius 1.2m and height 3m. How many liters of water can it hold when BALANCED to full capacity?",
            image: "../images/medium/1_water_tank.jpg",
            hint: "Balance equation: Volume in liters = π × r² × h × 1000",
            answer: 13571,
            unit: "L",
            explanation: "To balance the tank capacity: π × (1.2m)² × 3m × 1000 = 3.14159 × 1.44 × 3 × 1000 = 13,571 liters (rounded)."
        },
        {
            question: "A ladder needs to reach a window 12m above ground. If the ladder's base is 5m from the building, how long must the ladder be to BALANCE safely?",
            image: "../images/medium/1_ladder.jpg",
            hint: "Balance equation: Ladder length² = Height² + Distance²",
            answer: 13,
            unit: "m",
            explanation: "For the ladder to be balanced between ground and window: √(12² + 5²) = √(144 + 25) = √169 = 13m."
        },
        {
            question: "You push a 50kg box 15m with a force of 100N. How much work in joules did you do to BALANCE the force and distance?",
            image: "../images/medium/3_pushing_box.jpeg",
            hint: "Balance equation: Work = Force × Distance",
            answer: 1500,
            unit: "J",
            explanation: "To balance the work equation: Work = 100N × 15m = 1500 joules."
        },
        {
            question: "A seesaw has a 35kg child sitting 3m from the fulcrum. A 42kg child sits on the other side. How far from the fulcrum should the 42kg child sit for perfect BALANCE?",
            image: "../images/medium/advanced_seesaw.jpeg",
            hint: "Balance equation: m₁ × d₁ = m₂ × d₂",
            answer: 2.5,
            unit: "m",
            explanation: "For torque balance: 35kg × 3m = 42kg × d₂; d₂ = (35 × 3) ÷ 42 = 2.5m"
        },
        {
            question: "A company aims for BALANCED inventory with a turnover ratio of 8. If annual sales are $400,000, what should the average inventory value be?",
            image: "../images/medium/inventory.jpeg",
            hint: "Balance equation: Annual sales ÷ Turnover ratio = Average inventory value",
            answer: 50000,
            unit: "$",
            explanation: "For inventory balance: $400,000 ÷ 8 = $50,000."
        },
        {
            question: "A buffer solution maintains pH BALANCE when acid is added. If adding 0.05 mol of acid changes the pH from 7.0 to 6.8, what is the buffer capacity in mol/pH?",
            image: "../images/medium/buffer_solution.jpg",
            hint: "Balance equation: Buffer capacity = Acid added ÷ pH change",
            answer: 0.25,
            unit: "mol/pH",
            explanation: "For pH balance: 0.05 mol ÷ (7.0 - 6.8) = 0.05 ÷ 0.2 = 0.25 mol/pH."
        },
        {
            question: "A rectangular garden with perimeter of 36m needs to be balanced to maximize area. What dimensions create perfect BALANCE between length and width?",
            image: "../images/medium/garden_dimensions.jpg",
            hint: "Balance equation: For maximum area, length = width = Perimeter ÷ 4",
            answer: 9,
            unit: "m",
            explanation: "For area optimization balance: Both length and width should be 36 ÷ 4 = 9m."
        },
        {
            question: "In a chemical equilibrium 2NO₂ ⇌ N₂O₄, the equilibrium constant Kc is 8.8 at 25°C. If [NO₂] = 0.100 mol/L, what is [N₂O₄] for BALANCE?",
            image: "../images/medium/chemical_equilibrium.jpg",
            hint: "Balance equation: Kc = [N₂O₄] ÷ [NO₂]²",
            answer: 0.088,
            unit: "mol/L",
            explanation: "For chemical balance: [N₂O₄] = Kc × [NO₂]² = 8.8 × (0.100)² = 0.088 mol/L."
        },
        {
            question: "A pendulum's period T is balanced by the equation T = 2π√(L/g). If g = 9.8 m/s² and T = 1.5s, what pendulum length L creates BALANCE?",
            image: "../images/medium/pendulum.jpg",
            hint: "Balance equation: L = (T ÷ 2π)² × g",
            answer: 0.56,
            unit: "m",
            explanation: "For pendulum balance: L = (1.5 ÷ 2π)² × 9.8 = 0.56m."
        },
        {
            question: "A balanced investment portfolio has a 60:40 stock:bond ratio. If your portfolio is $120,000, how much should be in bonds for proper BALANCE?",
            image: "../images/medium/investment.jpeg",
            hint: "Balance equation: Total value × Bond percentage = Bond value",
            answer: 48000,
            unit: "$",
            explanation: "For portfolio balance: $120,000 × 0.4 = $48,000 in bonds."
        },
        {
            question: "Your body maintains sodium BALANCE at 135-145 mmol/L. If your blood volume is 5L and sodium level is 130 mmol/L, how many mmol should be added to reach 140 mmol/L?",
            image: "../images/medium/sodium_balance.jpeg",
            hint: "Balance equation: Blood volume × (Target - Current) = Amount to add",
            answer: 50,
            unit: "mmol",
            explanation: "For sodium balance: 5L × (140 - 130) = 50 mmol."
        },
        {
            question: "A car moves with constant acceleration from 0 to 90 km/h in 12 seconds. For BALANCED motion, what constant acceleration is required?",
            image: "../images/medium/car_acceleration.jpg",
            hint: "Balance equation: a = (v - u) ÷ t (where v is final velocity, u is initial velocity)",
            answer: 2.08,
            unit: "m/s²",
            explanation: "For motion balance: a = (25 - 0) ÷ 12 = 2.08 m/s². (90 km/h = 25 m/s)"
        },
        {
            question: "A BALANCED thermal system needs equal heat flow in and out. If a room loses 8500 J of heat per minute, what power heater (in watts) is needed for balance?",
            image: "../images/medium/thermal_balance.jpeg",
            hint: "Balance equation: Power = Energy per time (watts = joules per second)",
            answer: 141.67,
            unit: "W",
            explanation: "For thermal balance: 8500 J ÷ 60 s = 141.67 W."
        },
        {
            question: "A perfectly BALANCED bridge has equal downward and upward forces. If a 1500 kg car is on a 45m bridge supported at both ends, what is the reaction force at each support?",
            image: "../images/medium/bridge_balance.jpeg",
            hint: "Balance equation: Each support force = (Car weight × g) ÷ 2",
            answer: 7350,
            unit: "N",
            explanation: "For force balance: (1500 × 9.8) ÷ 2 = 7350 N at each support."
        },
        {
            question: "A BALANCED diet requires protein intake of 0.8g per kg of body weight. If you weigh 75kg and have consumed 45g of protein, how many more grams do you need?",
            image: "../images/medium/protein_balance.jpeg",
            hint: "Balance equation: Required amount - Consumed amount = Amount needed",
            answer: 15,
            unit: "g",
            explanation: "For protein balance: (75 × 0.8) - 45 = 60 - 45 = 15g."
        },
        {
            question: "In BALANCED finances, your debt-to-income ratio should be below 0.36. If your monthly income is $5200, what's the maximum monthly debt payment for balance?",
            image: "../images/medium/debt_ratio.jpeg",
            hint: "Balance equation: Maximum debt = Income × Maximum ratio",
            answer: 1872,
            unit: "$",
            explanation: "For financial balance: $5200 × 0.36 = $1872."
        },
        {
            question: "A vector force system is balanced when the sum of all forces equals zero. Two forces of 50N at 0° and 70N at 135° are acting. What force magnitude and direction (in degrees) creates BALANCE?",
            image: "../images/medium/force_vectors.jpeg",
            hint: "Balance equation: Third force = -(First force + Second force)",
            answer: 106.3,
            unit: "N",
            explanation: "For vector balance: Horizontal component: 50 - 70cos(135°) = 50 + 49.5 = 99.5N; Vertical component: 0 - 70sin(135°) = -49.5N; Resultant magnitude = √(99.5² + 49.5²) = 106.3N at 333.6°."
        },
        {
            question: "A lake ecosystem maintains balance when algae removal equals algae growth. If algae grows at 15kg/day and each fish consumes 0.3kg/day, how many fish maintain BALANCE?",
            image: "../images/medium/lake_ecosystem.jpeg",
            hint: "Balance equation: Number of fish = Algae growth rate ÷ Consumption per fish",
            answer: 50,
            unit: "fish",
            explanation: "For ecosystem balance: 15 ÷ 0.3 = 50 fish."
        }
        
    ],
    
    worldHero: [
        {
            question: "A cone-shaped water tank with radius 1.5m and height 3m is 2/3 full. If water is leaking at 20 liters per hour, how many hours until empty to restore BALANCE?",
            image: "../images/worldHero/leaking_tank.jpg",
            hint: "Balance equation: Time = (⅔ × π × r² × h × 1000) ÷ Leak rate",
            answer: 117.8,
            unit: "hrs",
            explanation: "For time balance: (⅔ × π × 1.5² × 3 × 1000) ÷ 20 ≈ 117.8 hours."
        },
        {
            question: "A 1200kg car moving at 90 km/h needs to stop. If the coefficient of friction is 0.6, what distance in meters is required to BALANCE the forces and stop safely?",
            image: "../images/worldHero/2_car.jpg",
            hint: "Balance equation: Distance = v² ÷ (2 × μ × g), where v is in m/s",
            answer: 52.1,
            unit: "m",
            explanation: "For balanced deceleration: (25 m/s)² ÷ (2 × 0.6 × 9.8) ≈ 52.1 meters."
        },
        {
            question: "You need to BALANCE the pH of a swimming pool from 8.2 to 7.4. If each 100g of acid reducer decreases pH by 0.1 in your 50,000L pool, how many grams do you need?",
            image: "../images/worldHero/3_swimming_pool.jpg",
            hint: "Balance equation: Acid needed = (Current pH - Target pH) × (Amount needed per 0.1 pH)",
            answer: 800,
            unit: "g",
            explanation: "To balance pH: (8.2 - 7.4) × 100 = 0.8 × 10 × 100 = 800 grams."
        },
        {
            question: "A biochemical reaction maintains BALANCE when forward and reverse rates are equal. If Keq = 4.2, and [A] = 0.8M and [B] = 0.3M in A ⇌ B, what should [B] be to reach equilibrium?",
            image: "../images/worldHero/biochemical_equilibrium.jpg",
            hint: "Balance equation: Keq = [B]equilibrium ÷ [A]equilibrium",
            answer: 3.36,
            unit: "M",
            explanation: "For chemical balance: [B]equilibrium = Keq × [A] = 4.2 × 0.8 = 3.36M."
        },
        {
            question: "A planetary system has BALANCED gravitational forces when F = G(m₁m₂)/r². If a 6.0×10²⁴kg planet orbits a star with mass 2.0×10³⁰kg at distance r, what is r for orbital period of 300 days?",
            image: "../images/worldHero/orbital_mechanics.jpg",
            hint: "Balance equation: r³ = (GM × T²) ÷ 4π²",
            answer: 1.11E11,
            unit: "m",
            explanation: "For orbital balance: r³ = (6.67×10⁻¹¹ × 2.0×10³⁰ × (300×86400)²) ÷ 4π². Solving gives r ≈ 1.11×10¹¹m."
        },
        {
            question: "A building's HVAC system BALANCES thermal load. If outside temperature is 32°C, inside target is 21°C, and thermal resistance is 0.08°C/kW, what cooling capacity in kW creates balance?",
            image: "../images/worldHero/hvac_system.jpg",
            hint: "Balance equation: Cooling capacity = Temperature difference ÷ Thermal resistance",
            answer: 137.5,
            unit: "kW",
            explanation: "For thermal balance: (32 - 21) ÷ 0.08 = 11 ÷ 0.08 = 137.5 kW."
        },
        {
            question: "An RLC circuit achieves resonance BALANCE when inductive and capacitive reactances are equal. If L = 50mH and resonant frequency is 1000Hz, what capacitance C creates balance?",
            image: "../images/worldHero/rlc_circuit.jpg",
            hint: "Balance equation: C = 1 ÷ (4π²f²L)",
            answer: 0.506,
            unit: "µF",
            explanation: "For circuit balance: C = 1 ÷ (4π² × 1000² × 0.050) = 5.06×10⁻⁷F = 0.506µF."
        },
        {
            question: "A national economy BALANCES when GDP equals total expenditure. If consumption is $12 trillion, investment is $3 trillion, and government spending is $4 trillion, what must net exports be for balance?",
            image: "../images/worldHero/economic_balance.jpeg",
            hint: "Balance equation: Net exports = GDP - (Consumption + Investment + Government spending)",
            answer: -19,
            unit: "trillion $",
            explanation: "For economic balance: If C+I+G+NX = GDP and GDP = C+I+G+NX, then NX = GDP-(C+I+G) = 0-(12+3+4) = -19 trillion dollars."
        },
        {
            question: "A wind turbine generates BALANCED output when drag and lift forces are optimized. If air density is 1.2kg/m³, wind speed is 12m/s, and rotor area is 5000m², what's the maximum theoretical power output by Betz's limit?",
            image: "../images/worldHero/wind_turbine.jpg",
            hint: "Balance equation: Pmax = 0.593 × ½ × density × area × velocity³",
            answer: 1530,
            unit: "kW",
            explanation: "For power balance: 0.593 × 0.5 × 1.2 × 5000 × 12³ = 1,530,000W = 1530kW."
        },
        {
            question: "A buffer solution maintains pH balance with equal concentrations of weak acid and its conjugate base. If Ka of acetic acid is 1.8×10⁻⁵, what pH would a BALANCED acetate buffer have?",
            image: "../images/worldHero/buffer_pH.jpeg",
            hint: "Balance equation: pH = pKa + log([Base]÷[Acid])",
            answer: 4.74,
            unit: "",
            explanation: "For pH balance: pH = -log(1.8×10⁻⁵) + log(1) = 4.74 + 0 = 4.74."
        },
        {
            question: "A sustainable fishery maintains population BALANCE when harvest equals growth. If a fish population grows by 8% annually and sustainable yield is 24,000 tons/year, what population size creates balance?",
            image: "../images/worldHero/sustainable_fishery.jpg",
            hint: "Balance equation: Population = Sustainable yield ÷ Annual growth rate",
            answer: 300000,
            unit: "tons",
            explanation: "For population balance: 24,000 ÷ 0.08 = 300,000 tons."
        },
        {
            question: "An entropy BALANCE in a heat engine operating between 800K and 300K reservoirs requires heat transfer. If the engine produces 150kJ of work, what heat must be absorbed from the hot reservoir for balance?",
            image: "../images/worldHero/heat_engine.jpeg",
            hint: "Balance equation: Qh = W ÷ (1 - Tc/Th)",
            answer: 250,
            unit: "kJ",
            explanation: "For entropy balance: Qh = 150 ÷ (1 - 300/800) = 150 ÷ 0.6 = 250kJ."
        },
        {
            question: "A projectile motion has BALANCED horizontal and vertical components. If launched at 60° with initial velocity of 40m/s, how far does it travel horizontally before landing on level ground?",
            image: "../images/worldHero/projectile_motion.jpeg",
            hint: "Balance equation: Range = (v₀² × sin(2θ)) ÷ g",
            answer: 141.4,
            unit: "m",
            explanation: "For motion balance: Range = (40² × sin(120°)) ÷ 9.8 = (1600 × 0.866) ÷ 9.8 = 141.4m."
        },
        {
            question: "In a BALANCED redox reaction, electrons transferred must equal electrons received. Balance this equation: MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺ in acidic solution. How many Fe²⁺ are needed per MnO₄⁻?",
            image: "../images/worldHero/redox_reaction.jpg",
            hint: "Balance equation: Fe²⁺ needed = Electrons required by MnO₄⁻ ÷ Electrons donated per Fe²⁺",
            answer: 5,
            unit: "Fe²⁺",
            explanation: "For electron balance: MnO₄⁻ goes from Mn⁷⁺ to Mn²⁺, gaining 5e⁻. Each Fe²⁺ donates 1e⁻ becoming Fe³⁺. Therefore, 5 Fe²⁺ needed per MnO₄⁻."
        },
        {
            question: "A three-phase AC power system is BALANCED when each phase has equal current and voltage. If a delta-connected load draws 15A per phase with 400V line voltage, what is the total power consumption for balanced operation?",
            image: "../images/worldHero/three_phase_power.png",
            hint: "Balance equation: Total power = √3 × Line voltage × Line current",
            answer: 10.4,
            unit: "kW",
            explanation: "For power balance: P = √3 × 400V × 15A = 10,392W = 10.4kW."
        },
        {
            question: "A nuclear reactor maintains temperature BALANCE when heat generation equals heat removal. If a coolant removes 2.5GW of heat with a temperature rise of 40°C, what coolant flow rate (in kg/s) is needed if its specific heat is 4200 J/kg·°C?",
            image: "../images/worldHero/nuclear_reactor.jpg",
            hint: "Balance equation: Flow rate = Power ÷ (Specific heat × Temperature rise)",
            answer: 14881,
            unit: "kg/s",
            explanation: "For thermal balance: 2.5×10⁹W ÷ (4200 × 40) = 14,881 kg/s."
        },
        {
            question: "A structural beam experiences BALANCED forces when the sum of moments equals zero. A 5m beam supports concentrated loads of 3kN at 1m and 4kN at 4m from the left support. What upward force must the right support exert for balance?",
            image: "../images/worldHero/structural_beam.jpg",
            hint: "Balance equation: Right support force = (Sum of moment forces) ÷ Beam length",
            answer: 3.8,
            unit: "kN",
            explanation: "For moment balance: Taking moments about left support: (3×1 + 4×4) = 5 × Right force; Right force = 19 ÷ 5 = 3.8kN."
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