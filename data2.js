const problems = {
    beginner: [
        {
            question: "You bought a book for $12. To balance your purchase, how much money should you give to the cashier?",
            image: "book_store.jpg",
            hint: "Balance equation: Money spent = Money given",
            answer: 12,
            unit: "$",
            explanation: "To balance a purchase, you must pay exactly what you owe ($12)."
        },
        {
            question: "Your piggy bank has $15. After buying a toy for $8, how much money will remain to keep your savings balanced?",
            image: "piggy_bank.jpg",
            hint: "Balance equation: Initial money - Money spent = Remaining money",
            answer: 7,
            unit: "$",
            explanation: "To maintain balance in your savings: $15 - $8 = $7."
        },
        {
            question: "A seesaw has a 30kg child on one end. How many kilograms should be placed on the other end for perfect balance?",
            image: "seesaw.jpg",
            hint: "Balance equation: Weight on left = Weight on right",
            answer: 30,
            unit: "kg",
            explanation: "For a balanced seesaw, both sides must have equal weight (30kg)."
        },
        {
            question: "You need to share 24 candies equally among 8 friends. How many candies should each friend get for a fair balance?",
            image: "candies.jpg",
            hint: "Balance equation: Total candies ÷ Number of friends = Candies per friend",
            answer: 3,
            unit: "candies",
            explanation: "For balanced sharing: 24 ÷ 8 = 3 candies per friend."
        },
        {
            question: "A recipe needs 2 cups of flour for 1 loaf of bread. How many cups do you need for 3 loaves to maintain the proper balance?",
            image: "baking.jpg",
            hint: "Balance equation: Cups per loaf × Number of loaves = Total cups needed",
            answer: 6,
            unit: "cups",
            explanation: "To maintain the recipe's balance: 2 cups × 3 loaves = 6 cups of flour."
        },
        {
            question: "If your daily water intake should be 2 liters, how many 250ml bottles must you drink for a balanced hydration?",
            image: "water_bottles.jpg",
            hint: "Balance equation: Total needed ÷ Size of bottle = Number of bottles",
            answer: 8,
            unit: "bottles",
            explanation: "For balanced hydration: 2000ml ÷ 250ml = 8 bottles."
        },
        {
            question: "You've been running for 15 minutes. If your balanced exercise routine requires 45 minutes, how many more minutes should you run?",
            image: "running.jpg",
            hint: "Balance equation: Total needed - Time completed = Time remaining",
            answer: 30,
            unit: "minutes",
            explanation: "To balance your exercise routine: 45 - 15 = 30 minutes remaining."
        },
        {
            question: "A balanced meal needs 25% protein. If your plate has 400 grams of food, how many grams should be protein?",
            image: "balanced_meal.jpg",
            hint: "Balance equation: Total food × Protein percentage = Protein amount",
            answer: 100,
            unit: "grams",
            explanation: "For a balanced meal: 400 × 0.25 = 100 grams of protein."
        },
        {
            question: "If a car travels 12 km per liter of fuel, how many liters are needed to balance a 60 km journey?",
            image: "car_journey.jpg",
            hint: "Balance equation: Distance ÷ Efficiency = Fuel needed",
            answer: 5,
            unit: "liters",
            explanation: "For a balanced fuel calculation: 60 ÷ 12 = 5 liters."
        },
        {
            question: "A scale has 300 grams on the left side. How many grams should be placed on the right side to balance it?",
            image: "scale.jpg",
            hint: "Balance equation: Weight on left = Weight on right",
            answer: 300,
            unit: "grams",
            explanation: "For a balanced scale, both sides must have the same weight (300g)."
        },
        {
            question: "Your weekly allowance is $20. If you spend $8 on Monday and $5 on Tuesday, how much remains to maintain balanced spending?",
            image: "allowance.jpg",
            hint: "Balance equation: Starting amount - Spent amount = Remaining amount",
            answer: 7,
            unit: "$",
            explanation: "To maintain balanced finances: $20 - $8 - $5 = $7."
        },
        {
            question: "An aquarium has a pH of 6.8 but needs 7.0 for balanced water. If each neutralizer tablet raises pH by 0.1, how many tablets are needed?",
            image: "aquarium.jpg",
            hint: "Balance equation: (Target pH - Current pH) ÷ Effect per tablet = Tablets needed",
            answer: 2,
            unit: "tablets",
            explanation: "For balanced water: (7.0 - 6.8) ÷ 0.1 = 2 tablets."
        },
        {
            question: "A recipe calls for a 2:1 ratio of flour to sugar. If you use 3 cups of sugar, how many cups of flour do you need for balance?",
            image: "baking_ingredients.jpg",
            hint: "Balance equation: Sugar amount × Ratio = Flour amount",
            answer: 6,
            unit: "cups",
            explanation: "For a balanced recipe with 2:1 ratio: 3 × 2 = 6 cups of flour."
        },
        {
            question: "To maintain balance in your sleep cycle, you need 8 hours of sleep. If you went to bed at 10 PM, when should you wake up?",
            image: "sleep_cycle.jpg",
            hint: "Balance equation: Start time + Sleep duration = Wake time",
            answer: 6,
            unit: "AM",
            explanation: "For a balanced sleep cycle: 10 PM + 8 hours = 6 AM."
        },
        {
            question: "A balanced garden needs 1 plant per 0.5 square meters. How many plants do you need for a 5 square meter garden?",
            image: "garden.jpg",
            hint: "Balance equation: Area ÷ Area per plant = Number of plants",
            answer: 10,
            unit: "plants",
            explanation: "For a balanced garden: 5 ÷ 0.5 = 10 plants."
        }
    ],
    medium: [
        {
            question: "A seesaw has a 40kg child sitting 2m from the fulcrum. How far from the fulcrum should a 20kg child sit on the opposite side to balance?",
            image: "seesaw_balance.jpg",
            hint: "Balance equation: Weight₁ × Distance₁ = Weight₂ × Distance₂",
            answer: 4,
            unit: "m",
            explanation: "For torque balance: 40kg × 2m = 20kg × Distance₂; Distance₂ = (40 × 2) ÷ 20 = 4m"
        },
        {
            question: "You have a monthly budget of $1200. If you've spent $450 on rent, $280 on groceries, and $170 on utilities, how much remains to maintain balanced finances?",
            image: "budget.jpg",
            hint: "Balance equation: Total budget - All expenses = Remaining balance",
            answer: 300,
            unit: "$",
            explanation: "For budget balance: $1200 - $450 - $280 - $170 = $300"
        },
        {
            question: "A chemical reaction requires a 3:2:1 ratio of elements A, B, and C. If you have 18g of A and 12g of B, how many grams of C are needed for balance?",
            image: "chemistry.jpg",
            hint: "Balance equation: Compare with ratio - Element C = Element A ÷ 3",
            answer: 6,
            unit: "g",
            explanation: "With ratio 3:2:1, if A = 18g and B = 12g, then C = 18g ÷ 3 = 6g for balance."
        },
        {
            question: "Your car gets 35 miles per gallon. For a 420-mile round trip, how many gallons of fuel do you need for balanced planning?",
            image: "road_trip.jpg",
            hint: "Balance equation: Total distance ÷ Fuel efficiency = Fuel needed",
            answer: 12,
            unit: "gallons",
            explanation: "For trip balance: 420 miles ÷ 35 miles per gallon = 12 gallons."
        },
        {
            question: "A balanced diet requires 2000 calories daily. If breakfast is 500 calories and dinner is 700 calories, how many calories should lunch be?",
            image: "balanced_diet.jpg",
            hint: "Balance equation: Total needed - (Breakfast + Dinner) = Lunch",
            answer: 800,
            unit: "calories",
            explanation: "For dietary balance: 2000 - (500 + 700) = 800 calories for lunch."
        },
        {
            question: "In a balanced chemical equation 2H₂ + O₂ → 2H₂O, if you use 10g of H₂, how many grams of O₂ are needed for complete reaction?",
            image: "chemical_reaction.jpg",
            hint: "Balance equation: O₂ mass = H₂ mass × (O₂ molar mass / 2 × H₂ molar mass)",
            answer: 80,
            unit: "g",
            explanation: "For chemical balance: 10g H₂ × (32g/mol O₂ ÷ 4g/mol H₂) = 80g O₂."
        },
        {
            question: "A pulley system is balanced when forces on both sides are equal. If one side has 25kg, what weight is needed on the other side for equilibrium?",
            image: "pulley.jpg",
            hint: "Balance equation: Force on side 1 = Force on side 2",
            answer: 25,
            unit: "kg",
            explanation: "For force balance in a simple pulley: 25kg = 25kg."
        },
        {
            question: "Your bank account has $350. After depositing your $1250 paycheck and paying $800 in bills, what's your new balance?",
            image: "banking.jpg",
            hint: "Balance equation: Starting balance + Deposits - Withdrawals = New balance",
            answer: 800,
            unit: "$",
            explanation: "For account balance: $350 + $1250 - $800 = $800."
        },
        {
            question: "A recipe needs to balance wet and dry ingredients in a 1:2 ratio. If you have 150ml of wet ingredients, how many ml of dry ingredients do you need?",
            image: "baking_ratio.jpg",
            hint: "Balance equation: Wet ingredients × Ratio = Dry ingredients",
            answer: 300,
            unit: "ml",
            explanation: "For recipe balance with 1:2 ratio: 150ml × 2 = 300ml dry ingredients."
        },
        {
            question: "For a balanced workout, you should burn 300 calories. If you burn 8 calories per minute, how long should you exercise?",
            image: "workout.jpg",
            hint: "Balance equation: Total calories ÷ Calories per minute = Exercise time",
            answer: 37.5,
            unit: "minutes",
            explanation: "For workout balance: 300 ÷ 8 = 37.5 minutes."
        },
        {
            question: "A room is 20°C but needs to be heated to 24°C for comfort. If your heater increases temperature by 2°C per hour, how many hours until balanced temperature?",
            image: "room_heating.jpg",
            hint: "Balance equation: (Target temp - Current temp) ÷ Heating rate = Time",
            answer: 2,
            unit: "hours",
            explanation: "For temperature balance: (24 - 20) ÷ 2 = 2 hours."
        },
        {
            question: "A triangle has angles of 45° and 60°. What should the third angle be to maintain balanced geometry?",
            image: "triangle.jpg",
            hint: "Balance equation: 180° - Sum of known angles = Third angle",
            answer: 75,
            unit: "degrees",
            explanation: "For angle balance in a triangle: 180° - 45° - 60° = 75°."
        },
        {
            question: "Your garden needs water balance of 1 inch per week. If it rains 0.4 inches, how many more inches should you water?",
            image: "garden_watering.jpg",
            hint: "Balance equation: Total needed - Already received = Amount to add",
            answer: 0.6,
            unit: "inches",
            explanation: "For water balance: 1 - 0.4 = 0.6 inches of additional water."
        },
        {
            question: "A solution is 25% salt. How many grams of pure water must be added to 200g of this solution to create a balanced 10% solution?",
            image: "solution_dilution.jpg",
            hint: "Balance equation: (Initial concentration × Initial mass) ÷ Target concentration - Initial mass = Water to add",
            answer: 300,
            unit: "g",
            explanation: "For solution balance: (0.25 × 200) ÷ 0.10 - 200 = 500 - 200 = 300g water."
        },
        {
            question: "In a balanced ecosystem, each fox needs 5 rabbits to survive. If a forest has 12 foxes, how many rabbits are needed for ecosystem balance?",
            image: "ecosystem.jpg",
            hint: "Balance equation: Number of predators × Prey needed per predator = Total prey needed",
            answer: 60,
            unit: "rabbits",
            explanation: "For ecosystem balance: 12 foxes × 5 rabbits per fox = 60 rabbits."
        }
    ],
    hard: [
        {
            question: "A seesaw has a 35kg child sitting 3m from the fulcrum. A 42kg child sits on the other side. How far from the fulcrum should the 42kg child sit for perfect balance?",
            image: "advanced_seesaw.jpg",
            hint: "Balance equation: m₁ × d₁ = m₂ × d₂",
            answer: 2.5,
            unit: "m",
            explanation: "For torque balance: 35kg × 3m = 42kg × d₂; d₂ = (35 × 3) ÷ 42 = 2.5m"
        },
        {
            question: "A company aims for balanced inventory with a turnover ratio of 8. If annual sales are $400,000, what should the average inventory value be?",
            image: "inventory.jpg",
            hint: "Balance equation: Annual sales ÷ Turnover ratio = Average inventory value",
            answer: 50000,
            unit: "$",
            explanation: "For inventory balance: $400,000 ÷ 8 = $50,000."
        },
        {
            question: "A buffer solution maintains pH balance when acid is added. If adding 0.05 mol of acid changes the pH from 7.0 to 6.8, what is the buffer capacity in mol/pH?",
            image: "buffer_solution.jpg",
            hint: "Balance equation: Buffer capacity = Acid added ÷ pH change",
            answer: 0.25,
            unit: "mol/pH",
            explanation: "For pH balance: 0.05 mol ÷ (7.0 - 6.8) = 0.05 ÷ 0.2 = 0.25 mol/pH."
        },
        {
            question: "A rectangular garden with perimeter of 36m needs to be balanced to maximize area. What dimensions create perfect balance between length and width?",
            image: "garden_dimensions.jpg",
            hint: "Balance equation: For maximum area, length = width = Perimeter ÷ 4",
            answer: 9,
            unit: "m",
            explanation: "For area optimization balance: Both length and width should be 36 ÷ 4 = 9m."
        },
        {
            question: "In a chemical equilibrium 2NO₂ ⇌ N₂O₄, the equilibrium constant Kc is 8.8 at 25°C. If [NO₂] = 0.100 mol/L, what is [N₂O₄] for balance?",
            image: "chemical_equilibrium.jpg",
            hint: "Balance equation: Kc = [N₂O₄] ÷ [NO₂]²",
            answer: 0.088,
            unit: "mol/L",
            explanation: "For chemical balance: [N₂O₄] = Kc × [NO₂]² = 8.8 × (0.100)² = 0.088 mol/L."
        },
        {
            question: "A pendulum's period T is balanced by the equation T = 2π√(L/g). If g = 9.8 m/s² and T = 1.5s, what pendulum length L creates balance?",
            image: "pendulum.jpg",
            hint: "Balance equation: L = (T ÷ 2π)² × g",
            answer: 0.56,
            unit: "m",
            explanation: "For pendulum balance: L = (1.5 ÷ 2π)² × 9.8 = 0.56m."
        },
        {
            question: "A balanced investment portfolio has a 60:40 stock:bond ratio. If your portfolio is $120,000, how much should be in bonds for proper balance?",
            image: "investment.jpg",
            hint: "Balance equation: Total value × Bond percentage = Bond value",
            answer: 48000,
            unit: "$",
            explanation: "For portfolio balance: $120,000 × 0.4 = $48,000 in bonds."
        },
        {
            question: "Your body maintains sodium balance at 135-145 mmol/L. If your blood volume is 5L and sodium level is 130 mmol/L, how many mmol should be added to reach 140 mmol/L?",
            image: "sodium_balance.jpg",
            hint: "Balance equation: Blood volume × (Target - Current) = Amount to add",
            answer: 50,
            unit: "mmol",
            explanation: "For sodium balance: 5L × (140 - 130) = 50 mmol."
        },
        {
            question: "A car moves with constant acceleration from 0 to 90 km/h in 12 seconds. For balanced motion, what constant acceleration is required?",
            image: "car_acceleration.jpg",
            hint: "Balance equation: a = (v - u) ÷ t (where v is final velocity, u is initial velocity)",
            answer: 2.08,
            unit: "m/s²",
            explanation: "For motion balance: a = (25 - 0) ÷ 12 = 2.08 m/s². (90 km/h = 25 m/s)"
        },
        {
            question: "A balanced thermal system needs equal heat flow in and out. If a room loses 8500 J of heat per minute, what power heater (in watts) is needed for balance?",
            image: "thermal_balance.jpg",
            hint: "Balance equation: Power = Energy per time (watts = joules per second)",
            answer: 141.67,
            unit: "W",
            explanation: "For thermal balance: 8500 J ÷ 60 s = 141.67 W."
        },
        {
            question: "A perfectly balanced bridge has equal downward and upward forces. If a 1500 kg car is on a 45m bridge supported at both ends, what is the reaction force at each support?",
            image: "bridge_balance.jpg",
            hint: "Balance equation: Each support force = (Car weight × g) ÷ 2",
            answer: 7350,
            unit: "N",
            explanation: "For force balance: (1500 × 9.8) ÷ 2 = 7350 N at each support."
        },
        {
            question: "A balanced diet requires protein intake of 0.8g per kg of body weight. If you weigh 75kg and have consumed 45g of protein, how many more grams do you need?",
            image: "protein_balance.jpg",
            hint: "Balance equation: Required amount - Consumed amount = Amount needed",
            answer: 15,
            unit: "g",
            explanation: "For protein balance: (75 × 0.8) - 45 = 60 - 45 = 15g."
        },
        {
            question: "In balanced finances, your debt-to-income ratio should be below 0.36. If your monthly income is $5200, what's the maximum monthly debt payment for balance?",
            image: "debt_ratio.jpg",
            hint: "Balance equation: Maximum debt = Income × Maximum ratio",
            answer: 1872,
            unit: "$",
            explanation: "For financial balance: $5200 × 0.36 = $1872."
        },
        {
            question: "A vector force system is balanced when the sum of all forces equals zero. Two forces of 50N at 0° and 70N at 135° are acting. What force magnitude and direction (in degrees) creates balance?",
            image: "force_vectors.jpg",
            hint: "Balance equation: Third force = -(First force + Second force)",
            answer: 106.3,
            unit: "N",
            explanation: "For vector balance: Horizontal component: 50 - 70cos(135°) = 50 + 49.5 = 99.5N; Vertical component: 0 - 70sin(135°) = -49.5N; Resultant magnitude = √(99.5² + 49.5²) = 106.3N at 333.6°."
        },
        {
            question: "A lake ecosystem maintains balance when algae removal equals algae growth. If algae grows at 15kg/day and each fish consumes 0.3kg/day, how many fish maintain balance?",
            image: "lake_ecosystem.jpg",
            hint: "Balance equation: Number of fish = Algae growth rate ÷ Consumption per fish",
            answer: 50,
            unit: "fish",
            explanation: "For ecosystem balance: 15 ÷ 0.3 = 50 fish."
        }
    ],
    worldHero: [
        {
            question: "A cone-shaped water tank with radius 1.5m and height 3m is 2/3 full. If water is leaking at 20 liters per hour, how many hours until empty to restore balance?",
            image: "leaking_tank.jpg",
            hint: "Balance equation: Time = (⅔ × π × r² × h × 1000) ÷ Leak rate",
            answer: 117.8,
            unit: "hrs",
            explanation: "For time balance: (⅔ × π × 1.5² × 3 × 1000) ÷ 20 ≈ 117.8 hours."
        },
        {
            question: "A biochemical reaction maintains balance when forward and reverse rates are equal. If Keq = 4.2, and [A] = 0.8M and [B] = 0.3M in A ⇌ B, what should [B] be to reach equilibrium?",
            image: "biochemical_equilibrium.jpg",
            hint: "Balance equation: Keq = [B]equilibrium ÷ [A]equilibrium",
            answer: 3.36,
            unit: "M",
            explanation: "For chemical balance: [B]equilibrium = Keq × [A] = 4.2 × 0.8 = 3.36M."
        },
        {
            question: "A planetary system has balanced gravitational forces when F = G(m₁m₂)/r². If a 6.0×10²⁴kg planet orbits a star with mass 2.0×10³⁰kg at distance r, what is r for orbital period of 300 days?",
            image: "orbital_mechanics.jpg",
            hint: "Balance equation: r³ = (GM × T²) ÷ 4π²",
            answer: 1.11E11,
            unit: "m",
            explanation: "For orbital balance: r³ = (6.67×10⁻¹¹ × 2.0×10³⁰ × (300×86400)²) ÷ 4π². Solving gives r ≈ 1.11×10¹¹m."
        },
        {
            question: "A building's HVAC system balances thermal load. If outside temperature is 32°C, inside target is 21°C, and thermal resistance is 0.08°C/kW, what cooling capacity in kW creates balance?",
            image: "hvac_system.jpg",
            hint: "Balance equation: Cooling capacity = Temperature difference ÷ Thermal resistance",
            answer: 137.5,
            unit: "kW",
            explanation: "For thermal balance: (32 - 21) ÷ 0.08 = 11 ÷ 0.08 = 137.5 kW."
        },
        {
            question: "An RLC circuit achieves resonance balance when inductive and capacitive reactances are equal. If L = 50mH and resonant frequency is 1000Hz, what capacitance C creates balance?",
            image: "rlc_circuit.jpg",
            hint: "Balance equation: C = 1 ÷ (4π²f²L)",
            answer: 0.506,
            unit: "µF",
            explanation: "For circuit balance: C = 1 ÷ (4π² × 1000² × 0.050) = 5.06×10⁻⁷F = 0.506µF."
        },
        {
            question: "A national economy balances when GDP equals total expenditure. If consumption is $12 trillion, investment is $3 trillion, and government spending is $4 trillion, what must net exports be for balance?",
            image: "economic_balance.jpg",
            hint: "Balance equation: Net exports = GDP - (Consumption + Investment + Government spending)",
            answer: -19,
            unit: "trillion $",
            explanation: "For economic balance: If C+I+G+NX = GDP and GDP = C+I+G+NX, then NX = GDP-(C+I+G) = 0-(12+3+4) = -19 trillion dollars."
        },
        {
            question: "A wind turbine generates balanced output when drag and lift forces are optimized. If air density is 1.2kg/m³, wind speed is 12m/s, and rotor area is 5000m², what's the maximum theoretical power output by Betz's limit?",
            image: "wind_turbine.jpg",
            hint: "Balance equation: Pmax = 0.593 × ½ × density × area × velocity³",
            answer: 1530,
            unit: "kW",
            explanation: "For power balance: 0.593 × 0.5 × 1.2 × 5000 × 12³ = 1,530,000W = 1530kW."
        },
        {
            question: "A buffer solution maintains pH balance with equal concentrations of weak acid and its conjugate base. If Ka of acetic acid is 1.8×10⁻⁵, what pH would a balanced acetate buffer have?",
            image: "buffer_pH.jpg",
            hint: "Balance equation: pH = pKa + log([Base]÷[Acid])",
            answer: 4.74,
            unit: "",
            explanation: "For pH balance: pH = -log(1.8×10⁻⁵) + log(1) = 4.74 + 0 = 4.74."
        },
        {
            question: "A sustainable fishery maintains population balance when harvest equals growth. If a fish population grows by 8% annually and sustainable yield is 24,000 tons/year, what population size creates balance?",
            image: "sustainable_fishery.jpg",
            hint: "Balance equation: Population = Sustainable yield ÷ Annual growth rate",
            answer: 300000,
            unit: "tons",
            explanation: "For population balance: 24,000 ÷ 0.08 = 300,000 tons."
        },
        {
            question: "An entropy balance in a heat engine operating between 800K and 300K reservoirs requires heat transfer. If the engine produces 150kJ of work, what heat must be absorbed from the hot reservoir for balance?",
            image: "heat_engine.jpg",
            hint: "Balance equation: Qh = W ÷ (1 - Tc/Th)",
            answer: 250,
            unit: "kJ",
            explanation: "For entropy balance: Qh = 150 ÷ (1 - 300/800) = 150 ÷ 0.6 = 250kJ."
        },
        {
            question: "A projectile motion has balanced horizontal and vertical components. If launched at 60° with initial velocity of 40m/s, how far does it travel horizontally before landing on level ground?",
            image: "projectile_motion.jpg",
            hint: "Balance equation: Range = (v₀² × sin(2θ)) ÷ g",
            answer: 141.4,
            unit: "m",
            explanation: "For motion balance: Range = (40² × sin(120°)) ÷ 9.8 = (1600 × 0.866) ÷ 9.8 = 141.4m."
        },
        {
            question: "In a balanced redox reaction, electrons transferred must equal electrons received. Balance this equation: MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺ in acidic solution. How many Fe²⁺ are needed per MnO₄⁻?",
            image: "redox_reaction.jpg",
            hint: "Balance equation: Fe²⁺ needed = Electrons required by MnO₄⁻ ÷ Electrons donated per Fe²⁺",
            answer: 5,
            unit: "Fe²⁺",
            explanation: "For electron balance: MnO₄⁻ goes from Mn⁷⁺ to Mn²⁺, gaining 5e⁻. Each Fe²⁺ donates 1e⁻ becoming Fe³⁺. Therefore, 5 Fe²⁺ needed per MnO₄⁻."
        },
        {
            question: "A three-phase AC power system is balanced when each phase has equal current and voltage. If a delta-connected load draws 15A per phase with 400V line voltage, what is the total power consumption for balanced operation?",
            image: "three_phase_power.jpg",
            hint: "Balance equation: Total power = √3 × Line voltage × Line current",
            answer: 10.4,
            unit: "kW",
            explanation: "For power balance: P = √3 × 400V × 15A = 10,392W = 10.4kW."
        },
        {
            question: "A nuclear reactor maintains temperature balance when heat generation equals heat removal. If a coolant removes 2.5GW of heat with a temperature rise of 40°C, what coolant flow rate (in kg/s) is needed if its specific heat is 4200 J/kg·°C?",
            image: "nuclear_reactor.jpg",
            hint: "Balance equation: Flow rate = Power ÷ (Specific heat × Temperature rise)",
            answer: 14881,
            unit: "kg/s",
            explanation: "For thermal balance: 2.5×10⁹W ÷ (4200 × 40) = 14,881 kg/s."
        },
        {
            question: "A structural beam experiences balanced forces when the sum of moments equals zero. A 5m beam supports concentrated loads of 3kN at 1m and 4kN at 4m from the left support. What upward force must the right support exert for balance?",
            image: "structural_beam.jpg",
            hint: "Balance equation: Right support force = (Sum of moment forces) ÷ Beam length",
            answer: 3.8,
            unit: "kN",
            explanation: "For moment balance: Taking moments about left support: (3×1 + 4×4) = 5 × Right force; Right force = 19 ÷ 5 = 3.8kN."
        }]
}