const menu = [
    {
        id: 1,
        title: 'Espresso',
        category: 'Coffee',
        price: 2.5,
        image: '../images/espresso.jpg',
        description: 'A single shot of intense coffee brewed to perfection.',
    },
    {
        id: 2,
        title: 'Cappuccino',
        category: 'Coffee',
        price: 3.5,
        image: '../images/cappuccino.jpg',
        description:
            'Espresso mixed with steamed milk and topped with a frothy milk foam.',
    },
    {
        id: 3,
        title: 'Croissant',
        category: 'Pastry',
        price: 2.0,
        image: '../images/croissant.jpg',
        description:
            'A buttery and flaky pastry, perfect for breakfast or a snack.',
    },
    {
        id: 4,
        title: 'Greek Salad',
        category: 'Salad',
        price: 8.0,
        image: '../images/greek_salad.jpg',
        description:
            'Fresh lettuce, tomatoes, cucumbers, olives, and feta cheese tossed in a tangy vinaigrette.',
    },
    {
        id: 5,
        title: 'Club Sandwich',
        category: 'Sandwich',
        price: 9.5,
        image: '../images/club_sandwich.jpg',
        description:
            'Layers of turkey, bacon, lettuce, tomato, and mayonnaise on toasted bread.',
    },
    {
        id: 6,
        title: 'Latte',
        category: 'Coffee',
        price: 4.0,
        image: '../images/latte.jpg',
        description:
            'Espresso combined with steamed milk and topped with a thin layer of milk foam.',
    },
    {
        id: 7,
        title: 'Bagel with Cream Cheese',
        category: 'Pastry',
        price: 3.5,
        image: '../images/bagel_cream_cheese.jpg',
        description:
            'A toasted bagel served with a generous spread of cream cheese.',
    },
    {
        id: 8,
        title: 'Caprese Salad',
        category: 'Salad',
        price: 7.5,
        image: '../images/caprese_salad.jpg',
        description:
            'Fresh mozzarella cheese, ripe tomatoes, and basil leaves drizzled with balsamic glaze.',
    },
    {
        id: 9,
        title: 'Muffin',
        category: 'Pastry',
        price: 2.5,
        image: '../images/muffin.jpg',
        description:
            'A soft and moist muffin available in various flavors such as blueberry or chocolate chip.',
    },
    {
        id: 10,
        title: 'Iced Tea',
        category: 'Beverage',
        price: 3.0,
        image: '../images/iced_tea.jpg',
        description:
            'Refreshing tea served over ice, available in sweetened or unsweetened varieties.',
    },
    {
        id: 11,
        title: 'Quiche',
        category: 'Pastry',
        price: 6.0,
        image: '../images/quiche.jpg',
        description:
            'A savory pie filled with a mixture of eggs, cheese, vegetables, and meat.',
    },
    {
        id: 12,
        title: 'Croque Monsieur',
        category: 'Sandwich',
        price: 10.5,
        image: '../images/croque_monsieur.jpg',
        description:
            'A classic French sandwich made with ham, cheese, and béchamel sauce, grilled to perfection.',
    },
    {
        id: 13,
        title: 'Fruit Smoothie',
        category: 'Beverage',
        price: 5.0,
        image: '../images/fruit_smoothie.jpg',
        description:
            'A refreshing blend of fresh fruits, yogurt, and ice, perfect for a quick energy boost.',
    },
    {
        id: 14,
        title: 'Caesar Salad',
        category: 'Salad',
        price: 8.5,
        image: '../images/caesar_salad.jpg',
        description:
            'Crisp romaine lettuce, croutons, parmesan cheese, and Caesar dressing.',
    },
    {
        id: 15,
        title: 'Vegetable Panini',
        category: 'Sandwich',
        price: 9.0,
        image: '../images/vegetable_panini.jpg',
        description:
            'Grilled sandwich filled with a variety of fresh vegetables and melted cheese.',
    },
    {
        id: 16,
        title: 'Hot Chocolate',
        category: 'Beverage',
        price: 4.5,
        image: '../images/hot_chocolate.jpg',
        description: 'Rich and creamy hot chocolate topped with whipped cream.',
    },
    {
        id: 17,
        title: 'Fruit Salad',
        category: 'Salad',
        price: 6.5,
        image: '../images/fruit_salad.jpg',
        description:
            'A refreshing mix of seasonal fruits, perfect for a light and healthy snack.',
    },
    {
        id: 18,
        title: 'Spinach and Feta Wrap',
        category: 'Sandwich',
        price: 8.5,
        image: '../images/spinach_feta_wrap.jpg',
        description:
            'A flavorful wrap filled with spinach, feta cheese, tomatoes, and a drizzle of balsamic glaze.',
    },
    {
        id: 19,
        title: 'Iced Latte',
        category: 'Coffee',
        price: 4.5,
        image: '../images/iced_latte.jpg',
        description:
            'Chilled espresso combined with cold milk, served over ice.',
    },
    {
        id: 20,
        title: 'Scone',
        category: 'Pastry',
        price: 3.0,
        image: '../images/scone.jpg',
        description:
            'A crumbly and lightly sweetened pastry, perfect with a cup of tea or coffee.',
    },
    {
      id: 21,
      title: "Avocado Toast",
      category: "Breakfast",
      price: 7.50,
      image: "../images/avocado_toast.jpg",
      description: "Toasted artisan bread topped with mashed avocado, cherry tomatoes, and a sprinkle of sea salt."
    },
    {
      id: 22,
      title: "Blueberry Pancakes",
      category: "Breakfast",
      price: 9.00,
      image: "../images/blueberry_pancakes.jpg",
      description: "Fluffy pancakes filled with juicy blueberries, served with maple syrup and butter."
    },
    {
      id: 23,
      title: "Mushroom Risotto",
      category: "Main Course",
      price: 12.00,
      image: "../images/mushroom_risotto.jpg",
      description: "Creamy arborio rice cooked with mushrooms, garlic, and parmesan cheese."
    },
    {
      id: 24,
      title: "Cheeseburger",
      category: "Main Course",
      price: 10.50,
      image: "../images/cheeseburger.jpg",
      description: "A juicy beef patty topped with melted cheese, lettuce, tomato, onion, and pickles, served in a brioche bun."
    },
    {
      id: 25,
      title: "Fresh Fruit Juice",
      category: "Beverage",
      price: 4.00,
      image: "../images/fresh_fruit_juice.jpg",
      description: "A refreshing blend of seasonal fruits freshly squeezed into a nutritious juice."
    },
    {
      id: 26,
      title: "Vegetarian Pizza",
      category: "Main Course",
      price: 11.50,
      image: "../images/vegetarian_pizza.jpg",
      description: "A thin crust pizza topped with marinara sauce, mozzarella cheese, bell peppers, onions, olives, and mushrooms."
    },
    {
      id: 27,
      title: "Chocolate Chip Cookie",
      category: "Dessert",
      price: 2.50,
      image: "../images/chocolate_chip_cookie.jpg",
      description: "A soft and chewy cookie packed with chocolate chips, perfect for satisfying your sweet tooth."
    },
    {
      id: 28,
      title: "Chicken Caesar Wrap",
      category: "Sandwich",
      price: 9.50,
      image: "../images/chicken_caesar_wrap.jpg",
      description: "Grilled chicken, crisp romaine lettuce, parmesan cheese, and Caesar dressing wrapped in a flour tortilla."
    },
    {
      id: 29,
      title: "Tiramisu",
      category: "Dessert",
      price: 6.50,
      image: "../images/tiramisu.jpg",
      description: "A classic Italian dessert made with layers of espresso-soaked ladyfingers, mascarpone cheese, and cocoa powder."
    },
    {
      id: 30,
      title: "Iced Matcha Latte",
      category: "Beverage",
      price: 5.50,
      image: "../images/iced_matcha_latte.jpg",
      description: "Chilled matcha green tea combined with milk and served over ice for a refreshing drink with a hint of sweetness."
    },
    {
      id: 31,
      title: "Turkey Club Wrap",
      category: "Sandwich",
      price: 9.50,
      image: "../images/turkey_club_wrap.jpg",
      description: "Sliced turkey breast, crispy bacon, lettuce, tomato, and mayonnaise wrapped in a flour tortilla."
    },
    {
      id: 32,
      title: "Frittata",
      category: "Breakfast",
      price: 8.00,
      image: "../images/frittata.jpg",
      description: "An Italian-style omelette made with eggs, cheese, and a variety of vegetables, baked until golden and fluffy."
    },
    {
      id: 33,
      title: "Pesto Pasta",
      category: "Main Course",
      price: 11.00,
      image: "../images/pesto_pasta.jpg",
      description: "Fettuccine pasta tossed in a vibrant basil pesto sauce, garnished with pine nuts and parmesan cheese."
    },
    {
      id: 34,
      title: "Fruit Parfait",
      category: "Breakfast",
      price: 6.00,
      image: "../images/fruit_parfait.jpg",
      description: "Layers of Greek yogurt, granola, and fresh seasonal fruits, served in a tall glass for a nutritious breakfast or snack."
    },
    {
      id: 35,
      title: "Hummus Plate",
      category: "Breakfast",
      price: 7.00,
      image: "../images/hummus_plate.jpg",
      description: "Creamy hummus served with warm pita bread, cucumber slices, cherry tomatoes, and Kalamata olives."
    },
    {
      id: 36,
      title: "Veggie Omelette",
      category: "Breakfast",
      price: 9.50,
      image: "../images/veggie_omelette.jpg",
      description: "Fluffy omelette filled with sautéed mushrooms, bell peppers, onions, and spinach."
    },
    {
      id: 37,
      title: "Chicken Alfredo Pasta",
      category: "Main Course",
      price: 12.50,
      image: "../images/chicken_alfredo_pasta.jpg",
      description: "Fettuccine pasta tossed in a creamy Alfredo sauce with tender pieces of grilled chicken."
    },
    {
      id: 38,
      title: "Chocolate Brownie",
      category: "Dessert",
      price: 3.50,
      image: "../images/chocolate_brownie.jpg",
      description: "Rich and indulgent chocolate brownie topped with a sprinkle of powdered sugar."
    },
    {
      id: 39,
      title: "Sausage Breakfast Burrito",
      category: "Breakfast",
      price: 8.00,
      image: "../images/sausage_breakfast_burrito.jpg",
      description: "A hearty breakfast burrito filled with scrambled eggs, sausage, cheese, and salsa."
    },
    {
      id: 40,
      title: "Mango Smoothie",
      category: "Beverage",
      price: 5.00,
      image: "../images/mango_smoothie.jpg",
      description: "A refreshing blend of ripe mangoes, yogurt, and a splash of orange juice."
    },
    {
      id: 41,
      title: "Margherita Pizza",
      category: "Main Course",
      price: 10.00,
      image: "../images/margherita_pizza.jpg",
      description: "Traditional Italian pizza topped with tomato sauce, fresh mozzarella cheese, and basil leaves."
    },
    {
      id: 42,
      title: "Chicken Caesar Salad",
      category: "Salad",
      price: 9.00,
      image: "../images/chicken_caesar_salad.jpg",
      description: "Grilled chicken breast served over crisp romaine lettuce, croutons, parmesan cheese, and Caesar dressing."
    },
    {
      id: 43,
      title: "Fruit Tart",
      category: "Dessert",
      price: 6.00,
      image: "../images/fruit_tart.jpg",
      description: "A delicate pastry shell filled with sweet custard and topped with an assortment of fresh fruits."
    },
    {
      id: 44,
      title: "BLT Sandwich",
      category: "Sandwich",
      price: 8.50,
      image: "../images/blt_sandwich.jpg",
      description: "Crispy bacon, lettuce, and tomato served on toasted bread with mayonnaise."
    },
    {
      id: 45,
      title: "Iced Lemonade",
      category: "Beverage",
      price: 3.50,
      image: "../images/iced_lemonade.jpg",
      description: "Refreshing lemonade served over ice, garnished with a slice of lemon."
    },
    {
      id: 46,
      title: "Cinnamon Roll",
      category: "Pastry",
      price: 3.00,
      image: "../images/cinnamon_roll.jpg",
      description: "Soft and fluffy cinnamon roll drizzled with cream cheese icing."
    },
    {
      id: 47,
      title: "New York Cheesecake",
      category: "Dessert",
      price: 4.50,
      image: "../images/new_york_cheesecake.jpg",
      description: "Creamy and indulgent cheesecake with a graham cracker crust, perfect for cheesecake lovers."
    }
  ];

let allItemsButton = document.getElementById("allItemsButton");
let coffeeButton = document.getElementById("coffeeButton");
let pastryButton = document.getElementById("pastryButton");
let saladButton  = document.getElementById("saladButton");
let sandwichButton = document.getElementById("sandwichButton");
let beverageButton = document.getElementById("beverageButton");
let mainCourseButton = document.getElementById("mainCourseButton");
let dessertButton = document.getElementById("dessertButton");
let breakfastButton = document.getElementById("breakfastButton");

const filterAllItems = () => {
    displayItems(menu);
}
const filterCoffee = () => {
    displayFilteredItems(menu, "Coffee");
};

const filterPastry = () => {
    displayFilteredItems(menu, "Pastry");
};

const filterSalad = () => {
    displayFilteredItems(menu, "Salad");
};

const filterSandwich = () => {
    displayFilteredItems(menu, "Sandwich");
};

const filterBeverage = () => {
    displayFilteredItems(menu, "Beverage");
};

const filterMainCourse = () => {
    displayFilteredItems(menu, "Main Course");
};

const filterDessert = () => {
    displayFilteredItems(menu, "Dessert");
};

const filterBreakfast = () => {
    displayFilteredItems(menu, "Breakfast");
};

function displayFilteredItems(arr, category) {
    let filteredContent = '';
    arr.forEach((obj) => {
        if (obj.category === category) {
            let menuItem =`
            <div class="dish">
            <img src="${obj.image}" />
                <div class="dishOuter">
                    <div class="dishInner">
                        <h3 class="dishName">${obj.title}</h3>
                        <h3 class="dishPrice">$ ${obj.price}</h3>
                    </div>
                    <p>
                        ${obj.description}
                    </p>
                </div>
            </div>`;
        
            filteredContent += menuItem;
        };
    });

    allDishes.innerHTML = filteredContent; 
}

function displayItems(arr) {
    // function will take the array as an input and then loop through the objects, read various properties and create an HTML content which will be an item of the menu
    let content = "";
    arr.forEach((obj) => {
        let title = obj.title;
        let category = obj.category;
        let price = obj.price;
        let image = obj.image;
        let description = obj.description;

        let menuItem = `
        <div class="dish">
        <img src="${image}" />
            <div class="dishOuter">
                <div class="dishInner">
                    <h3 class="dishName">${title}</h3>
                    <h3 class="dishPrice">$ ${price}</h3>
                </div>
                <p>
                    ${description}
                </p>
            </div>
        </div>`;

        content += menuItem;

    });

    allDishes.innerHTML = content;
}

displayItems(menu);

allItemsButton.addEventListener('click', filterAllItems);
coffeeButton.addEventListener('click', filterCoffee);
pastryButton.addEventListener('click', filterPastry);
saladButton.addEventListener('click', filterSalad);
sandwichButton.addEventListener('click', filterSandwich);
beverageButton.addEventListener('click', filterBeverage);
mainCourseButton.addEventListener('click', filterMainCourse);
dessertButton.addEventListener('click', filterDessert);
breakfastButton.addEventListener('click', filterBreakfast);

