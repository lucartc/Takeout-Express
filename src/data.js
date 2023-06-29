import { Preferences } from '@capacitor/preferences'

let data = {
    restaurants: [
        {
            'id': 1,
            'name': "John Doe's pizza & pasta",
            'bio': 'Pizza and pasta are our specialty! Check out or dishes!',
            'profile': 'restaurant_profiles/pizza_&_pastries.jpeg',
            'zip':'00000000',
            'street':'Street name',
            'number':'999',
            'city':'City',
            'country':'Country',
            'state_letters':'ST',
            'phone':'+0000000000000'
        },
        {
            'id': 2,
            'name': "John Doe's steak house",
            'bio': 'Meat is our specialty! Check out or dishes!',
            'profile': 'restaurant_profiles/steak_house.jpeg',
            'zip':'00000000',
            'street':'Street name',
            'number':'999',
            'city':'City',
            'country':'Country',
            'state_letters':'ST',
            'phone':'+0000000000000'
        },
        {
            'id': 3,
            'name': "John Doe's soup house",
            'bio': 'Soups and broths are our specialty! Check out or dishes!',
            'profile': 'restaurant_profiles/soup_house.jpeg',
            'zip':'00000000',
            'street':'Street name',
            'number':'999',
            'city':'City',
            'country':'Country',
            'state_letters':'ST',
            'phone':'+0000000000000'
        },
        {
            'id': 4,
            'name': "John Does's thai cousine",
            'bio': 'Thais food is our specialty! Check out or dishes!',
            'profile': 'restaurant_profiles/thai_cousine.jpeg',
            'zip':'00000000',
            'street':'Street name',
            'number':'999',
            'city':'City',
            'country':'Country',
            'state_letters':'ST',
            'phone':'+0000000000000'
        },
        {
            'id': 5,
            'name': "John Does's japanese cousine",
            'bio': 'Japanese food is our specialty! Check out or dishes!',
            'profile': 'restaurant_profiles/japanese_cousine.jpeg',
            'zip':'00000000',
            'street':'Street name',
            'number':'999',
            'city':'City',
            'country':'Country',
            'state_letters':'ST',
            'phone':'+0000000000000'
        },
        {
            'id': 6,
            'name': "John Does's mexican cousine",
            'bio': 'Mexican food is our specialty! Check out or dishes!',
            'profile': 'restaurant_profiles/mexican_cousine.jpeg',
            'zip':'00000000',
            'street':'Street name',
            'number':'999',
            'city':'City',
            'country':'Country',
            'state_letters':'ST',
            'phone':'+0000000000000'
        },
        {
            'id': 7,
            'name': "John Does's cakes & pies",
            'bio': 'Cakes and pies are our specialty! Check out or dishes!',
            'profile': 'restaurant_profiles/cakes_&_pies.jpeg',
            'zip':'00000000',
            'street':'Street name',
            'number':'999',
            'city':'City',
            'country':'Country',
            'state_letters':'ST',
            'phone':'+0000000000000'
        },
        {
            'id': 8,
            'name': "John Does's snacks",
            'bio': 'Snacks and appetizers are our specialty! Check out or dishes!',
            'profile': 'restaurant_profiles/snacks.jpeg',
            'zip':'00000000',
            'street':'Street name',
            'number':'999',
            'city':'City',
            'country':'Country',
            'state_letters':'ST',
            'phone':'+0000000000000'
        },
        {
            'id': 9,
            'name': "John Does's burger house",
            'bio': 'Burguers are our specialty! Check out or dishes!',
            'profile': 'restaurant_profiles/burger_house.jpeg',
            'zip':'00000000',
            'street':'Street name',
            'number':'999',
            'city':'City',
            'country':'Country',
            'state_letters':'ST',
            'phone':'+0000000000000'
        },
        {
            'id': 10,
            'name': "John Doe's shakes & smoothies",
            'bio': 'Milk shakes and smoothies are our specialty! Check out or products!',
            'profile': 'restaurant_profiles/shakes_&_smoothies.jpeg',
            'zip':'00000000',
            'street':'Street name',
            'number':'999',
            'city':'City',
            'country':'Country',
            'state_letters':'ST',
            'phone':'+0000000000000'
        },
        {
            'id': 11,
            'name': "John Doe's sea food",
            'bio': 'Sea food is our specialty! Check out or dishes!',
            'profile': 'restaurant_profiles/sea_food.jpeg',
            'zip':'00000000',
            'street':'Street name',
            'number':'999',
            'city':'City',
            'country':'Country',
            'state_letters':'ST',
            'phone':'+0000000000000'
        }
    ],
    tags: [
        {'id':1, 'name': 'pizza', 'icon': 'tags/pizza.jpeg'},
        {'id':2, 'name': 'pastry', 'icon': 'tags/pastry.jpeg'},
        {'id':3, 'name': 'pasta', 'icon': 'tags/pasta.jpeg'},
        {'id':4, 'name': 'meat', 'icon': 'tags/meat.jpeg'},
        {'id':5, 'name': 'salad', 'icon': 'tags/salad.jpeg'},
        {'id':6, 'name': 'mexican', 'icon': 'tags/mexican.jpeg'},
        {'id':7, 'name': 'japanese', 'icon': 'tags/japanese.jpeg'},
        {'id':8, 'name': 'thai', 'icon': 'tags/thai.jpeg'},
        {'id':9, 'name': 'desserts', 'icon': 'tags/dessert.jpeg'},
        {'id':10, 'name': 'appetizers', 'icon': 'tags/appetizers.jpeg'},
        {'id':11, 'name': 'sea food', 'icon': 'tags/sea_food.jpeg'},
        {'id':12, 'name': 'soup', 'icon': 'tags/soup.jpeg'},
        {'id':13, 'name': 'beverages', 'icon': 'tags/beverages.jpeg'},
        {'id':14, 'name': 'burgers', 'icon': 'tags/burgers.jpeg'}
    ],
    restaurant_item_tags: [
        {
            'id': 1,
            'restaurant_item_id': 1,
            'tag_id': 10
        },
        {
            'id': 2,
            'restaurant_item_id': 2,
            'tag_id': 10
        },
        {
            'id': 3,
            'restaurant_item_id': 3,
            'tag_id': 10
        },
        {
            'id': 4,
            'restaurant_item_id': 4,
            'tag_id': 11
        },
        {
            'id': 5,
            'restaurant_item_id': 5,
            'tag_id': 6
        },
        {
            'id': 6,
            'restaurant_item_id': 6,
            'tag_id': 3
        },
        {
            'id': 7,
            'restaurant_item_id': 7,
            'tag_id': 4
        },
        {
            'id': 8,
            'restaurant_item_id': 8,
            'tag_id': 1
        },
        {
            'id': 9,
            'restaurant_item_id': 9,
            'tag_id': 1
        },
        {
            'id': 10,
            'restaurant_item_id': 10,
            'tag_id': 1
        },
        {
            'id': 11,
            'restaurant_item_id': 11,
            'tag_id': 2
        },
        {
            'id': 12,
            'restaurant_item_id': 12,
            'tag_id': 3
        },
        {
            'id': 13,
            'restaurant_item_id': 13,
            'tag_id': 3
        },
        {
            'id': 14,
            'restaurant_item_id': 14,
            'tag_id': 9
        },
        {
            'id': 15,
            'restaurant_item_id': 15,
            'tag_id': 2
        },
        {
            'id': 16,
            'restaurant_item_id': 15,
            'tag_id': 9
        },
        {
            'id': 17,
            'restaurant_item_id': 16,
            'tag_id': 2
        },
        {
            'id': 18,
            'restaurant_item_id': 16,
            'tag_id': 9
        },
        {
            'id': 19,
            'restaurant_item_id': 17,
            'tag_id': 4
        },
        {
            'id': 20,
            'restaurant_item_id': 18,
            'tag_id': 4
        },
        {
            'id': 21,
            'restaurant_item_id': 19,
            'tag_id': 4
        },
        {
            'id': 22,
            'restaurant_item_id': 19,
            'tag_id': 6
        },
        {
            'id': 23,
            'restaurant_item_id': 20,
            'tag_id': 11
        },
        {
            'id': 24,
            'restaurant_item_id': 21,
            'tag_id': 3
        },
        {
            'id': 25,
            'restaurant_item_id': 21,
            'tag_id': 7
        },
        {
            'id': 26,
            'restaurant_item_id': 22,
            'tag_id': 7
        },
        {
            'id': 27,
            'restaurant_item_id': 23,
            'tag_id': 7
        },
        {
            'id': 28,
            'restaurant_item_id': 23,
            'tag_id': 9
        },
        {
            'id': 29,
            'restaurant_item_id': 24,
            'tag_id': 7
        },
        {
            'id': 30,
            'restaurant_item_id': 24,
            'tag_id': 2
        },
        {
            'id': 31,
            'restaurant_item_id': 25,
            'tag_id': 7
        },
        {
            'id': 32,
            'restaurant_item_id': 26,
            'tag_id': 7
        },
        {
            'id': 33,
            'restaurant_item_id': 26,
            'tag_id': 10
        },
        {
            'id': 34,
            'restaurant_item_id': 27,
            'tag_id': 7
        },
        {
            'id': 35,
            'restaurant_item_id': 27,
            'tag_id': 9
        },
        {
            'id': 36,
            'restaurant_item_id': 28,
            'tag_id': 7
        },
        {
            'id': 37,
            'restaurant_item_id': 28,
            'tag_id': 12
        },
        {
            'id': 38,
            'restaurant_item_id': 29,
            'tag_id': 6
        },
        {
            'id': 39,
            'restaurant_item_id': 30,
            'tag_id': 6
        },
        {
            'id': 40,
            'restaurant_item_id': 31,
            'tag_id': 6
        },
        {
            'id': 41,
            'restaurant_item_id': 32,
            'tag_id': 6
        },
        {
            'id': 42,
            'restaurant_item_id': 33,
            'tag_id': 8
        },
        {
            'id': 43,
            'restaurant_item_id': 34,
            'tag_id': 8
        },
        {
            'id': 44,
            'restaurant_item_id': 35,
            'tag_id': 8
        },
        {
            'id': 45,
            'restaurant_item_id': 36,
            'tag_id': 8
        },
        {
            'id': 46,
            'restaurant_item_id': 36,
            'tag_id': 12
        },
        {
            'id': 47,
            'restaurant_item_id': 37,
            'tag_id': 8
        },
        {
            'id': 48,
            'restaurant_item_id': 37,
            'tag_id': 12
        },
        {
            'id': 49,
            'restaurant_item_id': 38,
            'tag_id': 8
        },
        {
            'id': 50,
            'restaurant_item_id': 38,
            'tag_id': 12
        },
        {
            'id': 51,
            'restaurant_item_id': 38,
            'tag_id': 3
        },
        {
            'id': 52,
            'restaurant_item_id': 39,
            'tag_id': 8
        },
        {
            'id': 53,
            'restaurant_item_id': 39,
            'tag_id': 5
        },
        {
            'id': 54,
            'restaurant_item_id': 40,
            'tag_id': 9
        },
        {
            'id': 55,
            'restaurant_item_id': 41,
            'tag_id': 9
        },
        {
            'id': 56,
            'restaurant_item_id': 42,
            'tag_id': 9
        },
        {
            'id': 57,
            'restaurant_item_id': 43,
            'tag_id': 9
        },
        {
            'id': 58,
            'restaurant_item_id': 44,
            'tag_id': 9
        },
        {
            'id': 59,
            'restaurant_item_id': 45,
            'tag_id': 9
        },
        {
            'id': 60,
            'restaurant_item_id': 46,
            'tag_id': 10
        },
        {
            'id': 61,
            'restaurant_item_id': 47,
            'tag_id': 10
        },
        {
            'id': 62,
            'restaurant_item_id': 48,
            'tag_id': 10
        },
        {
            'id': 63,
            'restaurant_item_id': 49,
            'tag_id': 10
        },
        {
            'id': 64,
            'restaurant_item_id': 49,
            'tag_id': 6
        },
        {
            'id': 65,
            'restaurant_item_id': 50,
            'tag_id': 10
        },
        {
            'id': 66,
            'restaurant_item_id': 51,
            'tag_id': 10
        },
        {
            'id': 67,
            'restaurant_item_id': 52,
            'tag_id': 10
        },
        {
            'id': 68,
            'restaurant_item_id': 53,
            'tag_id': 10
        },
        {
            'id': 69,
            'restaurant_item_id': 54,
            'tag_id': 10
        },
        {
            'id': 70,
            'restaurant_item_id': 55,
            'tag_id': 11
        },
        {
            'id': 71,
            'restaurant_item_id': 56,
            'tag_id': 11
        },
        {
            'id': 72,
            'restaurant_item_id': 57,
            'tag_id': 11
        },
        {
            'id': 73,
            'restaurant_item_id': 58,
            'tag_id': 11
        },
        {
            'id': 74,
            'restaurant_item_id': 59,
            'tag_id': 11
        },
        {
            'id': 75,
            'restaurant_item_id': 59,
            'tag_id': 3
        },
        {
            'id': 76,
            'restaurant_item_id': 60,
            'tag_id': 11
        },
        {
            'id': 77,
            'restaurant_item_id': 61,
            'tag_id': 12
        },
        {
            'id': 78,
            'restaurant_item_id': 62,
            'tag_id': 12
        },
        {
            'id': 79,
            'restaurant_item_id': 63,
            'tag_id': 12
        },
        {
            'id': 80,
            'restaurant_item_id': 64,
            'tag_id': 12
        },
        {
            'id': 81,
            'restaurant_item_id': 65,
            'tag_id': 12
        },
        {
            'id': 82,
            'restaurant_item_id': 65,
            'tag_id': 6
        },
        {
            'id': 83,
            'restaurant_item_id': 66,
            'tag_id': 12
        },
        {
            'id': 84,
            'restaurant_item_id': 66,
            'tag_id': 11
        },
        {
            'id': 85,
            'restaurant_item_id': 67,
            'tag_id': 13
        },
        {
            'id': 86,
            'restaurant_item_id': 68,
            'tag_id': 13
        },
        {
            'id': 87,
            'restaurant_item_id': 69,
            'tag_id': 13
        },
        {
            'id': 88,
            'restaurant_item_id': 70,
            'tag_id': 13
        },
        {
            'id': 89,
            'restaurant_item_id': 71,
            'tag_id': 13
        },
        {
            'id': 90,
            'restaurant_item_id': 72,
            'tag_id': 13
        },
        {
            'id': 91,
            'restaurant_item_id': 73,
            'tag_id': 13
        },
        {
            'id': 92,
            'restaurant_item_id': 74,
            'tag_id': 13
        },
        {
            'id': 93,
            'restaurant_item_id': 75,
            'tag_id': 13
        },
        {
            'id': 94,
            'restaurant_item_id': 76,
            'tag_id': 13
        },
        {
            'id': 95,
            'restaurant_item_id': 77,
            'tag_id': 13
        },
        {
            'id': 96,
            'restaurant_item_id': 78,
            'tag_id': 13
        },
        {
            'id': 97,
            'restaurant_item_id': 79,
            'tag_id': 13
        },
        {
            'id': 98,
            'restaurant_item_id': 80,
            'tag_id': 13
        },
        {
            'id': 99,
            'restaurant_item_id': 81,
            'tag_id': 13
        },
        {
            'id': 100,
            'restaurant_item_id': 82,
            'tag_id': 13
        },
        {
            'id': 101,
            'restaurant_item_id': 83,
            'tag_id': 13
        },
        {
            'id': 102,
            'restaurant_item_id': 84,
            'tag_id': 13
        },
        {
            'id': 103,
            'restaurant_item_id': 85,
            'tag_id': 14
        },
        {
            'id': 104,
            'restaurant_item_id': 86,
            'tag_id': 14
        },
        {
            'id': 105,
            'restaurant_item_id': 87,
            'tag_id': 14
        },
        {
            'id': 106,
            'restaurant_item_id': 88,
            'tag_id': 14
        },
        {
            'id': 107,
            'restaurant_item_id': 89,
            'tag_id': 14
        },
        {
            'id': 108,
            'restaurant_item_id': 90,
            'tag_id': 14
        },
    ],
    restaurant_items: [
        {
            'id': 1,
            'restaurant_id': 8,
            'name': 'Buttered popcorn',
            'icon': 'dishes/buttered_popcorn.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 2,
            'restaurant_id': 8,
            'name': 'Potato chips',
            'icon': 'dishes/potato_chips.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 3,
            'restaurant_id': 8,
            'name': 'French fries',
            'icon': 'dishes/french_fries.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 4,
            'restaurant_id': 11,
            'name': 'Paella',
            'icon': 'dishes/paella.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 5,
            'restaurant_id': 6,
            'name': 'Taco',
            'icon': 'dishes/taco.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 6,
            'restaurant_id': 1,
            'name': 'Lasagna',
            'icon': 'dishes/lasagna.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 7,
            'restaurant_id': 2,
            'name': 'Roast chicken',
            'icon': 'dishes/roast_chicken.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 8,
            'restaurant_id': 1,
            'name': 'Mozzarella pizza',
            'icon': 'dishes/mozzarella_pizza.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 9,
            'restaurant_id': 1,
            'name': 'Neapolitan pizza',
            'icon': 'dishes/neapolitan_pizza.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 10,
            'restaurant_id': 1,
            'name': 'Margherita pizza',
            'icon': 'dishes/margherita_pizza.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 11,
            'restaurant_id': 1,
            'name': 'Calzone',
            'icon': 'dishes/calzone.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 12,
            'restaurant_id': 1,
            'name': 'Spaghetti bolognese',
            'icon': 'dishes/spaghetti_bolognese.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 13,
            'restaurant_id': 1,
            'name': 'Spaghetti carbonara',
            'icon': 'dishes/spaghetti_carbonara.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 14,
            'restaurant_id': 7,
            'name': 'Cinnamon roll',
            'icon': 'dishes/cinnamon_roll.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 15,
            'restaurant_id': 7,
            'name': 'Doughnuts',
            'icon': 'dishes/doughnuts.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 16,
            'restaurant_id': 7,
            'name': 'Apple strudel',
            'icon': 'dishes/apple_strudel.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 17,
            'restaurant_id': 2,
            'name': 'Grilled tri-tip',
            'icon': 'dishes/grilled_tri-tip.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 18,
            'restaurant_id': 2,
            'name': 'Meatball stroganoff',
            'icon': 'dishes/meatball_stroganoff.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 19,
            'restaurant_id': 6,
            'name': 'Mexican picadillo',
            'icon': 'dishes/mexican_picadillo.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 20,
            'restaurant_id': 11,
            'name': 'Seafood risotto',
            'icon': 'dishes/seafood_risotto.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 21,
            'restaurant_id': 5,
            'name': 'Yaki udon',
            'icon': 'dishes/yaki_udon.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 22,
            'restaurant_id': 5,
            'name': 'Sushi roll',
            'icon': 'dishes/sushi_roll.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 23,
            'restaurant_id': 5,
            'name': 'Mochi',
            'icon': 'dishes/mochi.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 24,
            'restaurant_id': 5,
            'name': 'Gyoza',
            'icon': 'dishes/gyoza.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 25,
            'restaurant_id': 5,
            'name': 'Onigiri',
            'icon': 'dishes/onigiri.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 26,
            'restaurant_id': 5,
            'name': 'Tempura',
            'icon': 'dishes/tempura.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 27,
            'restaurant_id': 5,
            'name': 'Dango',
            'icon': 'dishes/dango.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 28,
            'restaurant_id': 5,
            'name': 'Miso soup',
            'icon': 'dishes/miso_soup.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 29,
            'restaurant_id': 6,
            'name': 'Pork burrito',
            'icon': 'dishes/pork_burrito.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 30,
            'restaurant_id': 6,
            'name': 'Chicken taco',
            'icon': 'dishes/chicken_taco.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 31,
            'restaurant_id': 6,
            'name': 'Chicken fajita',
            'icon': 'dishes/chicken_fajita.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 32,
            'restaurant_id': 6,
            'name': 'Pumpkin concha',
            'icon': 'dishes/pumpkin_concha.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 33,
            'restaurant_id': 4,
            'name': 'Pad thai',
            'icon': 'dishes/pad_thai.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 34,
            'restaurant_id': 4,
            'name': 'Panang curry with chicken',
            'icon': 'dishes/panang_curry_with_chicken.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 35,
            'restaurant_id': 4,
            'name': 'Beef satay',
            'icon': 'dishes/beef_satay.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 36,
            'restaurant_id': 4,
            'name': 'Tom yum soup',
            'icon': 'dishes/tom_yum_soup.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 37,
            'restaurant_id': 4,
            'name': 'Tom ka gai',
            'icon': 'dishes/tom_ka_gai.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 38,
            'restaurant_id': 4,
            'name': 'Khao soi soup',
            'icon': 'dishes/khao_soi_soup.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 39,
            'restaurant_id': 4,
            'name': 'Ajad salad',
            'icon': 'dishes/ajad_salad.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 40,
            'restaurant_id': 7,
            'name': 'Baileys cheesecake',
            'icon': 'dishes/baileys_cheesecake.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 41,
            'restaurant_id': 7,
            'name': 'Paleo chocolate cake',
            'icon': 'dishes/paleo_chocolate_cake.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 42,
            'restaurant_id': 7,
            'name': 'Baked churros',
            'icon': 'dishes/baked_churros.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 43,
            'restaurant_id': 7,
            'name': 'Philadelphia cheesecake',
            'icon': 'dishes/philadelphia_cheesecake.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 44,
            'restaurant_id': 7,
            'name': 'M&M cookies',
            'icon': 'dishes/m&m_cookies.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 45,
            'restaurant_id': 7,
            'name': 'Alfajor',
            'icon': 'dishes/alfajor.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 46,
            'restaurant_id': 8,
            'name': 'Crab sticks',
            'icon': 'dishes/crab_sticks.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 47,
            'restaurant_id': 8,
            'name': 'Spicy chicken jerky',
            'icon': 'dishes/spicy_chicken_jerky.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 48,
            'restaurant_id': 8,
            'name': 'Stuffed mushrooms',
            'icon': 'dishes/stuffed_mushrooms.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 49,
            'restaurant_id': 8,
            'name': 'Guacamole',
            'icon': 'dishes/guacamole.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 50,
            'restaurant_id': 8,
            'name': 'Baked french fries',
            'icon': 'dishes/baked_french_fries.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 51,
            'restaurant_id': 8,
            'name': 'Yuca french fries',
            'icon': 'dishes/yuca_french_fries.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 52,
            'restaurant_id': 8,
            'name': 'Cheese fries',
            'icon': 'dishes/cheese_fries.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 53,
            'restaurant_id': 8,
            'name': 'Steak on stick',
            'icon': 'dishes/steak_on_stick.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 54,
            'restaurant_id': 8,
            'name': 'Chicken on stick',
            'icon': 'dishes/chicken_on_stick.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 55,
            'restaurant_id': 11,
            'name': 'Crusted tilapia',
            'icon': 'dishes/crusted_tilapia.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 56,
            'restaurant_id': 11,
            'name': 'Cajun butter shrimp',
            'icon': 'dishes/cajun_butter_shrimp.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 57,
            'restaurant_id': 11,
            'name': 'Grilled garlic shrimp',
            'icon': 'dishes/grilled_garlic_shrimp.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 58,
            'restaurant_id': 11,
            'name': 'Maple mustard salmon',
            'icon': 'dishes/maple_mustard_salmon.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 59,
            'restaurant_id': 11,
            'name': 'Lobster ravioli',
            'icon': 'dishes/lobster_ravioli.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 60,
            'restaurant_id': 11,
            'name': 'Marinated tuna steak',
            'icon': 'dishes/marinated_tuna_steak.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 61,
            'restaurant_id': 3,
            'name': 'Homemade chicken soup',
            'icon': 'dishes/homemade_chicken_soup.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 62,
            'restaurant_id': 3,
            'name': 'Onion soup',
            'icon': 'dishes/onion_soup.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 63,
            'restaurant_id': 3,
            'name': 'Broccoli soup',
            'icon': 'dishes/broccoli_soup.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 64,
            'restaurant_id': 3,
            'name': 'Fresh tomato soup',
            'icon': 'dishes/fresh_tomato_soup.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 65,
            'restaurant_id': 6,
            'name': 'Caldo de res',
            'icon': 'dishes/caldo_de_res.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 66,
            'restaurant_id': 11,
            'name': 'Clam chowder',
            'icon': 'dishes/clam_chowder.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 67,
            'restaurant_id': 10,
            'name': 'Banana smoothie',
            'icon': 'dishes/banana_smoothie.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 68,
            'restaurant_id': 10,
            'name': 'Pineapple and banana smoothie',
            'icon': 'dishes/pineapple_and_banana_smoothie.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 69,
            'restaurant_id': 10,
            'name': 'Strawberry smoothie',
            'icon': 'dishes/strawberry_smoothie.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 70,
            'restaurant_id': 10,
            'name': 'Avocado smoothie',
            'icon': 'dishes/avocado_smoothie.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 71,
            'restaurant_id': 10,
            'name': 'Watermelon milk shake',
            'icon': 'dishes/watermelon_milk_shake.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 72,
            'restaurant_id': 10,
            'name': 'Coffee shake',
            'icon': 'dishes/coffee_shake.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 73,
            'restaurant_id': 10,
            'name': 'Strawberry shake',
            'icon': 'dishes/strawberry_shake.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 74,
            'restaurant_id': 10,
            'name': 'Iced mocha shake',
            'icon': 'dishes/iced_mocha_shake.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 75,
            'restaurant_id': 10,
            'name': 'Nutella coffe shake',
            'icon': 'dishes/nutella_coffe_shake.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 76,
            'restaurant_id': 10,
            'name': 'Fanta can',
            'icon': 'dishes/fanta_can.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 77,
            'restaurant_id': 10,
            'name': 'Coca cola can',
            'icon': 'dishes/coca_cola_can.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 78,
            'restaurant_id': 10,
            'name': 'Pepsi can',
            'icon': 'dishes/pepsi_can.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 79,
            'restaurant_id': 10,
            'name': 'Sprite can',
            'icon': 'dishes/sprite_can.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 80,
            'restaurant_id': 10,
            'name': 'Mineral water bottle 500ml',
            'icon': 'dishes/mineral_water_bottle.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 81,
            'restaurant_id': 10,
            'name': 'Coca cola bottle 1L',
            'icon': 'dishes/coca_cola_1l_bottle.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 82,
            'restaurant_id': 10,
            'name': 'Fanta bottle 1L',
            'icon': 'dishes/fanta_1l_bottle.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 83,
            'restaurant_id': 10,
            'name': 'Pepsi bottle 1L',
            'icon': 'dishes/pepsi_1l_bottle.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 84,
            'restaurant_id': 10,
            'name': 'Sprite bottle 1L',
            'icon': 'dishes/sprite_1l_bottle.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 85,
            'restaurant_id': 9,
            'name': 'Mushroom veggie burger',
            'icon': 'dishes/mushroom_veggie_burger.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 86,
            'restaurant_id': 9,
            'name': 'Caprese burger',
            'icon': 'dishes/caprese_burger.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 87,
            'restaurant_id': 9,
            'name': 'Bronco burger',
            'icon': 'dishes/bronco_burger.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 88,
            'restaurant_id': 9,
            'name': 'Turkey burger',
            'icon': 'dishes/turkey_burger.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 89,
            'restaurant_id': 9,
            'name': 'Chicken burger',
            'icon': 'dishes/chicken_burger.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
        {
            'id': 90,
            'restaurant_id': 9,
            'name': 'Chorizo burger',
            'icon': 'dishes/chorizo_burger.jpeg',
            'price': parseFloat((parseFloat((Math.random() * 10000))/100).toFixed(2))
        },
    ],
    users: [
        {
            'id': 1,
            'username': 'johndoe1@gmail.com',
            'password': '123'
        },
        {
            'id': 2,
            'username': 'johndoe2@gmail.com',
            'password': '123'
        },
        {
            'id': 3,
            'username': 'johndoe3@gmail.com',
            'password': '123'
        },
        {
            'id': 4,
            'username': 'johndoe4@gmail.com',
            'password': '123'
        },
        {
            'id': 5,
            'username': 'johndoe5@gmail.com',
            'password': '123'
        },
    ],
    orders: [
        {
            'id': 1,
            'user_id': 1,
            'date': new Date().toString(),
            'code': 'ABCDEF',
            'reviewed': true
        },
        {
            'id': 2,
            'user_id': 2,
            'date': new Date().toString(),
            'code': 'ABCDEF',
            'reviewed': true
        },
        {
            'id': 3,
            'user_id': 3,
            'date': new Date().toString(),
            'code': 'ABCDEF',
            'reviewed': true
        },
        {
            'id': 4,
            'user_id': 4,
            'date': new Date().toString(),
            'code': 'ABCDEF',
            'reviewed': true
        },
        {
            'id': 5,
            'user_id': 5,
            'date': new Date().toString(),
            'code': 'ABCDEF',
            'reviewed': true
        },
    ],
    order_items: [
        {
            'id': 1,
            'order_id': 1,
            'name': 'Buttered popcorn',
            'quantity': 2,
            'unit_price': 0.5,
            'total_price': 1,
            'restaurant_item_id': 1,
        },
        {
            'id': 2,
            'order_id': 1,
            'name': 'Doughnuts',
            'quantity': 8,
            'unit_price': 0.4,
            'total_price': 3.2,
            'restaurant_item_id': 15,
        },
        {
            'id': 3,
            'order_id': 2,
            'name': 'Alfajor',
            'quantity': 1,
            'unit_price': 5,
            'total_price': 5,
            'restaurant_item_id': 45,
        },
        {
            'id': 4,
            'order_id': 2,
            'name': 'Nutella coffe shake',
            'quantity': 1,
            'unit_price': 12,
            'total_price': 12,
            'restaurant_item_id': 75,
        },
        {
            'id': 5,
            'order_id': 3,
            'name': 'Pumpkin conchas',
            'quantity': 1,
            'unit_price': 7,
            'total_price': 7,
            'restaurant_item_id': 32,
        },
        {
            'id': 6,
            'order_id': 3,
            'name': 'Mushroom veggie burger',
            'quantity': 1,
            'unit_price': 12,
            'total_price': 12,
            'restaurant_item_id': 85,
        },
        {
            'id': 7,
            'order_id': 4,
            'name': 'Seafood risotto',
            'quantity': 1,
            'unit_price': 5,
            'total_price': 5,
            'restaurant_item_id': 20,
        },
        {
            'id': 8,
            'order_id': 4,
            'name': 'Yaki udon',
            'quantity': 2,
            'unit_price': 8,
            'total_price': 16,
            'restaurant_item_id': 21,
        },
        {
            'id': 9,
            'order_id': 5,
            'name': 'Avocado smoothie',
            'quantity': 1,
            'unit_price': 3.0,
            'total_price': 3.0,
            'restaurant_item_id': 70,
        },
        {
            'id': 10,
            'order_id': 5,
            'name': 'Strawberry shake',
            'quantity': 1,
            'unit_price': 5.0,
            'total_price': 5.0,
            'restaurant_item_id': 73,
        },
    ],
    order_item_reviews: [
        {
            'id': 1,
            'stars': 4,
            'order_item_id': 1,
            'date': new Date()
        },
        {
            'id': 2,
            'stars': 5,
            'order_item_id': 2,
            'date': new Date()
        },
        {
            'id': 3,
            'stars': 3,
            'order_item_id': 3,
            'date': new Date()
        },
        {
            'id': 4,
            'stars': 4,
            'order_item_id': 4,
            'date': new Date()
        },
        {
            'id': 5,
            'stars': 3,
            'order_item_id': 5,
            'date': new Date()
        },
        {
            'id': 6,
            'stars': 3,
            'order_item_id': 6,
            'date': new Date()
        },
        {
            'id': 7,
            'stars': 2,
            'order_item_id': 7,
            'date': new Date()
        },
        {
            'id': 8,
            'stars': 5,
            'order_item_id': 8,
            'date': new Date()
        },
        {
            'id': 9,
            'stars': 5,
            'order_item_id': 9,
            'date': new Date()
        },
        {
            'id': 10,
            'stars': 5,
            'order_item_id': 10,
            'date': new Date()
        }
    ],
    restaurant_schedules: [
        {
            'id': 1,
            'restaurant_id': 1,
            'sunday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'monday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'tuesday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'wednesday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'thursday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'friday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'saturday': {'start': '08:00 AM', 'end': '17:00 PM'},
        },
        {
            'id': 2,
            'restaurant_id': 2,
            'sunday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'monday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'tuesday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'wednesday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'thursday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'friday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'saturday': {'start': '08:00 AM', 'end': '17:00 PM'},
        },
        {
            'id': 3,
            'restaurant_id': 3,
            'sunday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'monday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'tuesday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'wednesday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'thursday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'friday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'saturday': {'start': '08:00 AM', 'end': '17:00 PM'},
        },
        {
            'id': 4,
            'restaurant_id': 4,
            'sunday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'monday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'tuesday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'wednesday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'thursday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'friday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'saturday': {'start': '08:00 AM', 'end': '17:00 PM'},
        },
        {
            'id': 5,
            'restaurant_id': 5,
            'sunday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'monday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'tuesday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'wednesday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'thursday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'friday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'saturday': {'start': '08:00 AM', 'end': '17:00 PM'},
        },
        {
            'id': 6,
            'restaurant_id': 6,
            'sunday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'monday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'tuesday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'wednesday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'thursday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'friday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'saturday': {'start': '08:00 AM', 'end': '17:00 PM'},
        },
        {
            'id': 7,
            'restaurant_id': 7,
            'sunday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'monday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'tuesday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'wednesday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'thursday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'friday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'saturday': {'start': '08:00 AM', 'end': '17:00 PM'},
        },
        {
            'id': 8,
            'restaurant_id': 8,
            'sunday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'monday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'tuesday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'wednesday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'thursday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'friday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'saturday': {'start': '08:00 AM', 'end': '17:00 PM'},
        },
        {
            'id': 9,
            'restaurant_id': 9,
            'sunday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'monday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'tuesday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'wednesday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'thursday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'friday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'saturday': {'start': '08:00 AM', 'end': '17:00 PM'},
        },
        {
            'id': 10,
            'restaurant_id': 10,
            'sunday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'monday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'tuesday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'wednesday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'thursday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'friday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'saturday': {'start': '08:00 AM', 'end': '17:00 PM'},
        },
        {
            'id': 11,
            'restaurant_id': 11,
            'sunday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'monday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'tuesday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'wednesday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'thursday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'friday': {'start': '08:00 AM', 'end': '17:00 PM'},
            'saturday': {'start': '08:00 AM', 'end': '17:00 PM'},
        },
    ],
    restaurant_contacts: [
        {
            'id': 1,
            'name': 'instagram profile',
            'link': 'http://instagram.com/profile',
            'restaurant_id': 1,  
        },
        {
            'id': 1,
            'name': 'website',
            'link': 'http://website.com',
            'restaurant_id': 1,  
        },
        {
            'id': 2,
            'name': 'website',
            'link': 'http://website.com',
            'restaurant_id': 1,  
        },
        {
            'id': 2,
            'name': 'website',
            'link': 'http://website.com',
            'restaurant_id': 1,  
        },
        {
            'id': 3,
            'name': 'website',
            'link': 'http://website.com',
            'restaurant_id': 1,  
        },
        {
            'id': 3,
            'name': 'website',
            'link': 'http://website.com',
            'restaurant_id': 1,  
        },
        {
            'id': 4,
            'name': 'website',
            'link': 'http://website.com',
            'restaurant_id': 1,  
        },
        {
            'id': 4,
            'name': 'website',
            'link': 'http://website.com',
            'restaurant_id': 1,  
        },
        {
            'id': 5,
            'name': 'website',
            'link': 'http://website.com',
            'restaurant_id': 1,  
        },
        {
            'id': 5,
            'name': 'website',
            'link': 'http://website.com',
            'restaurant_id': 1,  
        },
        {
            'id': 6,
            'name': 'website',
            'link': 'http://website.com',
            'restaurant_id': 1,  
        },
        {
            'id': 6,
            'name': 'website',
            'link': 'http://website.com',
            'restaurant_id': 1,  
        },
        {
            'id': 7,
            'name': 'website',
            'link': 'http://website.com',
            'restaurant_id': 1,  
        },
        {
            'id': 7,
            'name': 'website',
            'link': 'http://website.com',
            'restaurant_id': 1,  
        },
        {
            'id': 8,
            'name': 'website',
            'link': 'http://website.com',
            'restaurant_id': 1,  
        },
        {
            'id': 8,
            'name': 'website',
            'link': 'http://website.com',
            'restaurant_id': 1,  
        },
        {
            'id': 9,
            'name': 'website',
            'link': 'http://website.com',
            'restaurant_id': 1,  
        },
        {
            'id': 9,
            'name': 'website',
            'link': 'http://website.com',
            'restaurant_id': 1,  
        },
        {
            'id': 10,
            'name': 'website',
            'link': 'http://website.com',
            'restaurant_id': 1,  
        },
        {
            'id': 10,
            'name': 'website',
            'link': 'http://website.com',
            'restaurant_id': 1,  
        },
        {
            'id': 11,
            'name': 'website',
            'link': 'http://website.com',
            'restaurant_id': 1,  
        },
        {
            'id': 11,
            'name': 'website',
            'link': 'http://website.com',
            'restaurant_id': 1,  
        },
    ],
    ticket_offerings: [
        {
            'id': 1,
            'title': 'Have two more slices!',
            'subtitle': 'Up to 25% off in pizza orders',
            'banner': 'banners/pizza_banner.jpeg',
        },
        {
            'id': 2,
            'title': 'Extra burger in your burger!',
            'subtitle': 'Up to 10% off in burger orders',
            'banner': 'banners/burger_banner.jpeg',
        },
        {
            'id': 3,
            'title': 'A spoonfull of bliss!',
            'subtitle': 'Up to 20% off in dessert orders',
            'banner': 'banners/dessert_banner.jpeg',
        },
        {
            'id': 4,
            'title': 'Blue or well done?',
            'subtitle': 'Up to 15% off in meat dishes',
            'banner': 'banners/meat_banner.jpeg',
        },
        {
            'id': 5,
            'title': 'Tacos, tacos y tacos',
            'subtitle': 'Up to 10% off in mexican dishes',
            'banner': 'banners/mexican_banner.jpeg',
        }
    ],
    tickets: [
        {
            id: 1,
            ticket_offering_id: 1,
            name: 'Discount ticket 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisl leo, vehicula eget erat sit amet, ultrices tempus metus. Nullam quis est libero.',
            value: 10
        },
        {
            id: 2,
            ticket_offering_id: 1,
            name: 'Discount ticket 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisl leo, vehicula eget erat sit amet, ultrices tempus metus. Nullam quis est libero.',
            value: 10
        },
        {
            id: 3,
            ticket_offering_id: 2,
            name: 'Discount ticket 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisl leo, vehicula eget erat sit amet, ultrices tempus metus. Nullam quis est libero.',
            value: 10
        },
        {
            id: 4,
            ticket_offering_id: 2,
            name: 'Discount ticket 4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisl leo, vehicula eget erat sit amet, ultrices tempus metus. Nullam quis est libero.',
            value: 10
        },
        {
            id: 5,
            ticket_offering_id: 3,
            name: 'Discount ticket 5',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisl leo, vehicula eget erat sit amet, ultrices tempus metus. Nullam quis est libero.',
            value: 10
        },
        {
            id: 6,
            ticket_offering_id: 3,
            name: 'Discount ticket 6',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisl leo, vehicula eget erat sit amet, ultrices tempus metus. Nullam quis est libero.',
            value: 10
        },
        {
            id: 7,
            ticket_offering_id: 4,
            name: 'Discount ticket 7',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisl leo, vehicula eget erat sit amet, ultrices tempus metus. Nullam quis est libero.',
            value: 10
        },
        {
            id: 8,
            ticket_offering_id: 4,
            name: 'Discount ticket 8',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisl leo, vehicula eget erat sit amet, ultrices tempus metus. Nullam quis est libero.',
            value: 10
        },
        {
            id: 9,
            ticket_offering_id: 5,
            name: 'Discount ticket 9',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisl leo, vehicula eget erat sit amet, ultrices tempus metus. Nullam quis est libero.',
            value: 10
        },
        {
            id: 10,
            ticket_offering_id: 5,
            name: 'Discount ticket 10',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisl leo, vehicula eget erat sit amet, ultrices tempus metus. Nullam quis est libero.',
            value: 10
        },
    ]
}

load_data()

async function load_data(){
    let current_restaurants = await Preferences.get({key: 'restaurants'})
    let current_orders = await Preferences.get({key: 'orders'})
    let current_order_items = await Preferences.get({key: 'order_items'})
    let current_order_item_reviews = await Preferences.get({key: 'order_item_reviews'})
    let current_users = await Preferences.get({key: 'users'})
    let current_restaurant_items = await Preferences.get({key: 'restaurant_items'})
    let current_restaurant_item_tags = await Preferences.get({key: 'restaurant_item_tags'})
    let current_restaurant_contacts = await Preferences.get({key: 'restaurant_contacts'})
    let current_ticket_offerings = await Preferences.get({key: 'ticket_offerings'})
    let current_tickets = await Preferences.get({key: 'tickets'})
    let current_restaurant_schedules = await Preferences.get({key: 'restaurant_schedules'})
    let current_tags = await Preferences.get({key: 'tags'})

    if(current_restaurants.value == null){
        await Preferences.set({key: 'restaurants', value: JSON.stringify(data.restaurants)})
    }

    if(current_orders.value == null){
        await Preferences.set({key: 'orders', value: JSON.stringify(data.orders)})
    }

    if(current_order_items.value == null){
        await Preferences.set({key: 'order_items', value: JSON.stringify(data.order_items)})
    }

    if(current_order_item_reviews.value == null){
        await Preferences.set({key: 'order_item_reviews', value: JSON.stringify(data.order_item_reviews)})
    }

    if(current_users.value == null){
        await Preferences.set({key: 'users', value: JSON.stringify(data.users)})
    }

    if(current_restaurant_items.value == null){
        await Preferences.set({key: 'restaurant_items', value: JSON.stringify(data.restaurant_items)})
    }

    if(current_restaurant_contacts.value == null){
        await Preferences.set({key: 'restaurant_contacts', value: JSON.stringify(data.restaurant_contacts)})
    }

    if(current_ticket_offerings.value == null){
        await Preferences.set({key: 'ticket_offerings', value: JSON.stringify(data.ticket_offerings)})
    }

    if(current_tickets.value == null){
        await Preferences.set({key: 'tickets', value: JSON.stringify(data.tickets)})
    }

    if(current_tags.value == null){
        await Preferences.set({key: 'tags', value: JSON.stringify(data.tags)})
    }

    if(current_restaurant_schedules.value == null){
        await Preferences.set({key: 'restaurant_schedules', value: JSON.stringify(data.restaurant_schedules)})
    }

    if(current_restaurant_item_tags.value == null){
        await Preferences.set({key: 'restaurant_item_tags', value: JSON.stringify(data.restaurant_item_tags)})
    }
}

async function create_order(){
    let orders = await Preferences.get({key: 'orders'})
    let order_items = await Preferences.get({key: 'order_items'})
    let cart = await Preferences.get({key: 'cart'})
    let current_user = await Preferences.get({key: 'current_user'})
    orders = orders.value
    order_items = order_items.value
    cart = cart.value
    current_user = current_user.value
    
    if(orders == null){
        orders = []
    }else{
        orders = JSON.parse(orders)
    }

    if(order_items == null){
        order_items = []
    }else{
        order_items = JSON.parse(order_items)
    }

    if(cart == null){
        throw 'Error'
    }else{
        cart = JSON.parse(cart)
    }

    if(current_user == null){
        throw 'Error'
    }else{
        current_user = JSON.parse(current_user)
    }

    let new_order = {
        id: get_max_id(orders)+1,
        user_id: current_user.id,
        date: new Date(),
        code: await generate_random_code(),
        reviewed: false
    }

    orders.push(new_order)

    let next_id = get_max_id(order_items)+1
    cart = cart.map(item => {
        item.order_id = new_order.id
        item.unit_price = parseFloat(item.price.toFixed(2))
        item.total_price = parseFloat((item.unit_price * item.quantity).toFixed(2))
        item.restaurant_item_id = item.id
        item.id = next_id
        delete item.cart_id
        delete item.restaurant_id
        delete item.price
        delete item.icon
        next_id += 1
        order_items.push(item)
    })

    await Preferences.set({key: 'orders', value: JSON.stringify(orders)})
    await Preferences.set({key: 'order_items', value: JSON.stringify(order_items)})
    await Preferences.remove({key: 'cart'})
}

async function create_review(data){
    let orders = await Preferences.get({key: 'orders'})
    let order_items = await Preferences.get({key: 'order_items'})
    let order_item_reviews = await Preferences.get({key: 'order_item_reviews'})
    orders = orders.value
    order_items = order_items.value
    order_item_reviews = order_item_reviews.value

    if(orders == null){
        throw 'Error'
    }else{
        orders = JSON.parse(orders)
    }

    if(order_items == null){
        throw 'Error'
    }else{
        order_items = JSON.parse(order_items)
    }

    has_item_reviews = false

    order_item_reviews.forEach(order_item => {
        let has_order_item_reviews = false
        data.items.forEach(item => {
            if(item.order_item_id == order_item.order_item_id){
                has_order_item_reviews = true
            }
        })
        if(has_order_item_reviews){
            has_item_reviews = true
        }
    })

    if(has_item_reviews){
        throw 'Error'
    }else{
        data.items.forEach(item => {
            order_item_reviews.push(item)
        })

        await Preferences.set({key: 'order_item_reviews', value: JSON.stringify(order_item_reviews)})
    }
}

async function add_ticket(data){
    let user = await Preferences.get({key: 'current_user'})
    user = user.value
    let current_user_tickets = []

    if(user == null){
        throw 'Error'
    }else{
        user = JSON.parse(user)
    }

    let user_tickets = await Preferences.get({key: 'user_tickets'})
    user_tickets = user_tickets.value
    
    if(user_tickets != null){
        user_tickets = JSON.parse(user_tickets)
        data.id = get_max_id(user_tickets)+1
        current_user_tickets = user_tickets[current_user.id]
    }else{
        user_tickets = []
        data.id = 1
        current_user_tickets = user_tickets[current_user.id]
    }

    current_user_tickets.push(data)
    user_tickets[current_user.id] = current_user_tickets
    await Preferences.set({key: 'user_tickets', value: JSON.stringify(user_tickets)})
}

async function search(data){
    let restaurants = await Preferences.get({key: 'restaurants'})
    let dishes = await Preferences.get({key: 'restaurant_items'})
    restaurants = restaurants.value
    dishes = dishes.value
    let restaurant_results = []
    let dishes_results = []
    let words = data.search_string.toLowerCase().split(' ')
    let regex = words.join('|')

    if(dishes != null){
        dishes = JSON.parse(dishes)
        dishes_results = dishes.filter(dish => {
            return dish.name.toLowerCase().match(regex)
        })
    }

    if(restaurants != null){
        restaurants = JSON.parse(restaurants)
        restaurant_results = restaurants.filter(restaurant => {
            return restaurant.name.toLowerCase().match(regex)
        })
    }

    restaurant_results = restaurant_results.map(async function(result){
        let reviews = await get_restaurant_reviews({id: result.id})
        result.rating = reviews.rating
        return result
    })

    dishes_results = dishes_results.map(async function(result){
        result.rating = await get_dish_reviews({id: result.id})
        result.rating = result.rating.rating
        return result
    })

    return {
        restaurants: Promise.all(restaurant_results),
        dishes: Promise.all(dishes_results)
    }
}

async function add_to_cart(data){
    let cart = await Preferences.get({key: 'cart'})
    let restaurant_items = await Preferences.get({key: 'restaurant_items'})
    let current_user = await Preferences.get({key: 'current_user'})
    let restaurant_item = null
    let is_already_in_cart = false
    cart = cart.value
    restaurant_items = restaurant_items.value
    current_user = current_user.value

    if(current_user == null){
        throw 'Error'
    }else{
        current_user = JSON.parse(current_user)
    }

    if(restaurant_items == null){
        throw 'Error'
    }else{
        restaurant_items = JSON.parse(restaurant_items)
    }

    restaurant_item = restaurant_items.filter(item => {
        return item.id == data.id
    }).pop()

    restaurant_item.user_id = current_user.id

    if(cart == null){
        cart = []
        restaurant_item.cart_id = 1
    }else{
        cart = JSON.parse(cart)
        if(cart.length == 0 ){
            restaurant_item.cart_id = 1
        }else{
            restaurant_item.cart_id = cart.sort((a,b) => {
                return a.cart_id - b.cart_id
            })[cart.length-1].cart_id+1
        }
    }

    cart.forEach(item => {
        if(item.id == data.id){
            is_already_in_cart = true
        }
    })

    if(!is_already_in_cart){
        restaurant_item.quantity = 1
        cart.push(restaurant_item)
        await Preferences.set({key: 'cart', value: JSON.stringify(cart)})
    }
}

async function remove_from_cart(data){
    let cart = await Preferences.get({key: 'cart'})
    cart = cart.value

    if(cart == null){
        throw 'Error'
    }else{
        cart = JSON.parse(cart)
        cart = cart.filter(item => {
            return item.cart_id != data.cart_id
        })
        await Preferences.set({key: 'cart', value: JSON.stringify(cart)})
    }
}

async function update_cart_item(data){
    let cart = await Preferences.get({key: 'cart'})
    let cart_items = []
    cart = cart.value

    if(cart == null){
        throw 'Error'
    }else{
        cart = JSON.parse(cart)
        cart_items = cart.filter(item => {
            return item.cart_id != data.cart_id
        })
    }

    cart_items.push(data)
    await Preferences.set({key: 'cart', value: JSON.stringify(cart_items)})
}

async function login(data){
    let users = await Preferences.get({key: 'users'})
    users = users.value

    if(users == null){
        throw 'Error'
    }else{
        users = JSON.parse(users)
    }

    let registered_user = users.filter(user => {
        if(user.username.toString() == data.username.toString() && user.password.toString() == data.password.toString()){
            return true
        }else{
            return false
        }
    })

    if(registered_user.length == 1){
        let current_user = registered_user.pop()
        await Preferences.set({key: 'current_user', value: JSON.stringify(current_user)})
        return current_user
    }else{
        throw  'Error'
    }
}

async function logout(){
    let current_user = await Preferences.get({key: 'current_user'})
    current_user = current_user.value

    if(current_user == null){
        throw 'Error'
    }else{
        await Preferences.remove({key: 'current_user'})
    }
}

async function register(data){
    let users = await Preferences.get({key: 'users'})
    users = users.value

    if(users == null){
        throw 'Error'
    }else{
        users = JSON.parse(users)
    }

    data.id = get_max_id(users)+1
    users.push(data)
    await Preferences.set({key: 'users', value: JSON.stringify(users)})
}

async function get_tags(){
    let tags = await Preferences.get({key: 'tags'})
    tags = tags.value

    if(tags == null){
        throw 'Error'
    }else{
        tags = JSON.parse(tags)
    }

    return tags
}

async function get_orders(){
    let current_user = await Preferences.get({key: 'current_user'})
    let orders = await Preferences.get({key: 'orders'})
    let order_items = await Preferences.get({key: 'order_items'})
    let restaurant_items = await Preferences.get({key: 'restaurant_items'})
    current_user = current_user.value
    orders = orders.value
    order_items = order_items.value
    restaurant_items = restaurant_items.value

    if(current_user == null){
        throw 'Error'
    }else{
        current_user = JSON.parse(current_user)
    }

    if(orders == null){
        throw 'Error'
    }else{
        orders = JSON.parse(orders)
    }

    if(order_items == null){
        throw 'Error'
    }else{
        order_items = JSON.parse(order_items)
    }

    if(restaurant_items == null){
        throw 'Error'
    }else{
        restaurant_items = JSON.parse(restaurant_items)
    }

    orders = orders.filter(order => {
        return order.user_id == current_user.id
    })

    orders = orders.map(order => {
        order.items = []
        order_items.forEach(order_item => {
            if(order_item.order_id == order.id){
                order.items.push(order_item)
            }
        })

        order.items = order.items.map(order_item => {
            restaurant_items.forEach(restaurant_item => {
                if(restaurant_item.id == order_item.restaurant_item_id){
                    order_item.icon = restaurant_item.icon
                }
            })
            if(!order_item.hasOwnProperty('icon')){
                order_item.icon = 'icons/product_not_found.svg'
            }
            return order_item
        })

        return order
    })

    return orders.sort((a,b) => b.id - a.id)
}

async function get_tag_dishes(data){
    let dishes = await Preferences.get({key: 'restaurant_items'})
    let item_tags = await Preferences.get({key: 'restaurant_item_tags'})
    dishes = dishes.value
    item_tags = item_tags.value

    if(item_tags == null){
        throw 'Error'
    }else{
        item_tags = JSON.parse(item_tags)
    }

    if(dishes == null){
        throw 'Error'
    }else{
        dishes = JSON.parse(dishes)
    }

    item_tags = item_tags.filter(item => {
        return item.tag_id == data.id
    })

    dishes = dishes.filter(dish => {
        return item_tags.map(item => item.restaurant_item_id).indexOf(dish.id) >= 0
    })

    dishes = Promise.all(dishes.map(async function(dish){
        let reviews = await get_dish_reviews({id: dish.id})
        dish.reviews = reviews.reviews.length
        dish.rating = reviews.rating
        return dish
    }))

    return dishes
}

async function get_restaurant_dish(data){
    let restaurant_items = await Preferences.get({key: 'restaurant_items'})
    restaurant_items = restaurant_items.value

    if(restaurant_items == null){
        throw 'Error'
    }else{
        restaurant_items = JSON.parse(restaurant_items)
    }

    return restaurant_items
    .filter(item => {
        return item.id == data.id
    })
    .map(async function(item){
        let reviews = await get_dish_reviews({id: item.id})
        item.rating = reviews.rating
        item.reviews = reviews.reviews.length
        return item
    })
    .pop()
}

async function get_dish_reviews(data){
    let restaurant_items = await Preferences.get({key: 'restaurant_items'})
    let order_items = await Preferences.get({key: 'order_items'})
    let order_item_reviews = await Preferences.get({key: 'order_item_reviews'})
    let dish_rating = 0.0
    restaurant_items = restaurant_items.value
    order_items = order_items.value
    order_item_reviews = order_item_reviews.value

    if(order_item_reviews == null){
        throw 'Error'
    }else{
        order_item_reviews = JSON.parse(order_item_reviews)
    }

    if(restaurant_items == null){
        throw 'Error'
    }else{
        restaurant_items = JSON.parse(restaurant_items)
    }

    if(order_items == null){
        throw 'Error'
    }else{
        order_items = JSON.parse(order_items)
    }

    let item_reviews = order_item_reviews.filter(review => {
        let order_item = order_items.filter(item => item.id == review.order_item_id).pop()
        let restaurant_item = restaurant_items.filter(item => item.id == order_item.restaurant_item_id).pop()
        return review.order_item_id == order_item.id && restaurant_item.id == data.id
    })

    if(item_reviews.length > 0){
        dish_rating = parseFloat(item_reviews.map(item => item.stars).reduce((acc,item) => acc+item))/item_reviews.length
    }

    return {reviews: item_reviews, rating: dish_rating}
}

async function get_restaurant_reviews(data){
    let order_item_reviews = await Preferences.get({key: 'order_item_reviews'})
    let order_items = await Preferences.get({key: 'order_items'})
    let restaurant_items = await Preferences.get({key: 'restaurant_items'})
    let restaurant_rating = 0.0
    order_item_reviews = order_item_reviews.value
    order_items = order_items.value
    restaurant_items = restaurant_items.value

    if(order_item_reviews == null){
        throw 'Error'
    }else{
        order_item_reviews = JSON.parse(order_item_reviews)
    }

    if(order_items == null){
        throw 'Error'
    }else{
        order_items = JSON.parse(order_items)
    }

    if(restaurant_items == null){
        throw 'Error'
    }else{
        restaurant_items = JSON.parse(restaurant_items)
    }

    let dishes = restaurant_items.filter(restaurant_item => {
        return restaurant_item.restaurant_id == data.id
    })

    order_items = order_items.filter(order_item => {
        return dishes.map(dish => dish.id).indexOf(order_item.restaurant_item_id) >= 0
    })

    order_item_reviews = order_item_reviews.filter(order_item_review => {
        return order_items.map(item => item.id).indexOf(order_item_review.order_item_id) >= 0
    })

    order_item_reviews = order_item_reviews.map(review => {
        order_items.forEach(order_item => {
            if(order_item.id == review.order_item_id){
                restaurant_items.forEach(restaurant_item => {
                    if(restaurant_item.id == order_item.restaurant_item_id){
                        review.icon = restaurant_item.icon
                        review.name = restaurant_item.name
                    }
                })
            }
        })
        if(!review.hasOwnProperty('icon') && !review.hasOwnProperty('name')){
            review.icon = 'icons/product_not_found.svg'
            review.name = 'Product not found'
        }
        return review
    })

    if(order_item_reviews.length > 0){
        restaurant_rating = parseFloat(order_item_reviews.map(item => item.stars).reduce((acc,item) => acc+item))/order_item_reviews.length
    }

    return {reviews: order_item_reviews, rating: restaurant_rating}
}

async function get_cart_items(){
    let cart_items = await Preferences.get({key: 'cart'})
    let current_user = await Preferences.get({key: 'current_user'})
    cart_items = cart_items.value
    current_user = current_user.value

    if(current_user == null){
        throw 'Error'
    }else{
        current_user = JSON.parse(current_user)
    }

    if(cart_items == null){
        return []
    }else{
        cart_items = JSON.parse(cart_items)
    }

    cart_items = cart_items.filter(item => {
        return item.user_id == current_user.id
    })
    cart_items = cart_items.sort((a,b) => a.cart_id - b.cart_id)
    return cart_items
}

async function get_notifications(){
    let notifications = await Preferences.get({key: 'notifications'})
    notifications = notifications.value

    if(notifications == null){
        return []
    }else{
        return JSON.parse(notifications)
    }
}

async function get_restaurant(data){
    let restaurants = await Preferences.get({key: 'restaurants'})
    restaurants = restaurants.value

    if(restaurants == null){
        throw 'Error'
    }else{
        restaurants = JSON.parse(restaurants)
    }

    return restaurants
    .filter(restaurant => {
        return restaurant.id == data.id
    })
    .map(async function(restaurant){
        let rating = await get_restaurant_reviews(restaurant.id)
        restaurant.rating = rating.rating
        restaurant.reviews = rating.reviews.length
        return restaurant
    })
    .pop()
}

async function get_restaurant_dishes(data){
    let restaurant_items = await Preferences.get({key: 'restaurant_items'})
    restaurant_items = restaurant_items.value

    if(restaurant_items == null){
        throw 'Error'
    }else{
        restaurant_items = JSON.parse(restaurant_items)
    }

    return Promise.all(restaurant_items
    .filter(item => {
        return item.restaurant_id == data.id
    })
    .map(async function(item){
        let reviews = await get_dish_reviews({id: item.id})
        item.rating = reviews.rating
        item.reviews = reviews.reviews.length
        return item
    }))
}

async function get_restaurant_schedule(data){
    let restaurant_schedules = await Preferences.get({key: 'restaurant_schedules'})
    restaurant_schedules = restaurant_schedules.value

    if(restaurant_schedules == null){
        throw 'Error'
    }else{
        restaurant_schedules = JSON.parse(restaurant_schedules)
    }

    return restaurant_schedules.filter(schedule => {
        return schedule.restaurant_id == data.id
    }).pop()
}

async function get_restaurant_contacts(data){
    let restaurant_contacts = await Preferences.get({key: 'restaurant_contacts'})
    restaurant_contacts = restaurant_contacts.value
    
    if(restaurant_contacts == null){
        throw 'Error'
    }else{
        restaurant_contacts = JSON.parse(restaurant_contacts)
    }

    return restaurant_contacts.filter(item => {
        return item.id == data.id
    })
}

async function get_featured_items(){
    let items = []
    let restaurant_items = await Preferences.get({key: 'restaurant_items'})
    restaurant_items = restaurant_items.value
    let last_id = null

    if(restaurant_items == null){
        throw 'Error'
    }else{
        restaurant_items = JSON.parse(restaurant_items)
        restaurant_items = restaurant_items.sort((a,b) => {
            return a.id - b.id
        })
        last_id = get_max_id(restaurant_items)
    }

    for(let i = 0; i < 9; i++){
        let new_item = Math.floor(Math.random()*(last_id+1))
        while(items.indexOf(new_item) >= 0){
            new_item = Math.floor(Math.random()*(last_id+1))
        }
        items.push(new_item)
    }

    items = items.map(item => {
        return restaurant_items[item]
    }).filter(item => item != undefined)

    items = items.map(async function(item){
        let reviews = await get_dish_reviews({id: item.id})
        item.rating = reviews.rating
        return item
    })

    return Promise.all(items)
}

async function get_ticket_offerings(){
    let ticket_offerings = await Preferences.get({key: 'ticket_offerings'})
    ticket_offerings = ticket_offerings.value

    if(ticket_offerings == null){
        throw 'Error'
    }else{
        ticket_offerings = JSON.parse(ticket_offerings)
    }

    return ticket_offerings
}

async function get_ticket_offering_tickets(data){
    let tickets = await Preferences.get({key: 'tickets'})
    tickets = tickets.value

    if(tickets == null){
        throw 'Error'
    }else{
        tickets = JSON.parse(tickets)
    }

    return tickets.filter(ticket => {
        return ticket.ticket_offering_id == data.id
    })
}

async function get_user_tickets(){
    let current_user = await Preferences.get({key: 'current_user'})
    let user_tickets = await Preferences.get({key: 'user_tickets'})
    let tickets = await Preferences.get({key: 'tickets'})
    current_user = current_user.value
    user_tickets = user_tickets.value
    tickets = tickets.value

    if(current_user == null){
        throw 'Error'
    }else{
        current_user = JSON.parse(current_user)
    }

    if(user_tickets == null){
        return []
    }else{
        user_tickets = JSON.parse(user_tickets)
    }

    if(tickets == null){
        return []
    }else{
        tickets = JSON.parse(tickets)
    }

    user_tickets = user_tickets.filter(ticket => {
        return ticket.user_id == current_user.id
    })

    tickets = tickets.filter(ticket => {
        return user_tickets.map(user_ticket => user_ticket.id).indexOf(ticket.id) >= 0
    })

    return tickets
}

async function choose_ticket(data){
    let current_user = await Preferences.get({key: 'current_user'})
    let tickets = await Preferences.get({key: 'tickets'})
    let user_tickets = await Preferences.get({key: 'user_tickets'})
    current_user = current_user.value
    tickets = tickets.value
    user_tickets = user_tickets.value

    if(current_user == null){
        throw 'Error'
    }else{
        current_user = JSON.parse(current_user)
    }

    if(tickets == null){
        throw 'Error'
    }else{
        tickets = JSON.parse(tickets)
    }

    if(user_tickets == null){
        user_tickets = []
    }else{
        user_tickets = JSON.parse(user_tickets)
    }

    let ticket = tickets.filter(item => {
        return item.id == data.id
    }).pop()

    ticket.user_id = current_user.id

    user_tickets.push(ticket)

    await Preferences.set({key: 'user_tickets',value: JSON.stringify(user_tickets)})
}

function get_max_id(data){
    if(data.length == 0){
        return 0
    }else{
        data = data.sort((a,b) => {
            return a.id - b.id
        })
        return data[data.length-1].id
    }
}

async function generate_random_code(){
    let orders = await Preferences.get({key: 'orders'})
    orders = orders.value
    
    if(orders == null){
        throw 'Error'
    }else{
        orders = JSON.parse(orders)
    }

    let code_digits = new Array(20).fill(1)

    let codes = orders.map(order => {
        return order.code
    })

    let new_code = code_digits.map(digit => {
        return Math.floor(Math.random()*10).toString()
    }).reduce((acc,item) => acc+item)

    while(codes.indexOf(new_code) >= 0){
        new_code = code_digits.map(digit => {
            return Math.floor(Math.random()*10).toString()
        }).reduce((acc,item) => acc+item)
    }

    return new_code
}

export{
    create_order,
    create_review,
    add_ticket,
    search,
    add_to_cart,
    remove_from_cart,
    update_cart_item,
    login,
    logout,
    register,
    get_orders,
    get_tag_dishes,
    get_restaurant_dish,
    get_dish_reviews,
    get_cart_items,
    get_notifications,
    get_restaurant,
    get_restaurant_dishes,
    get_restaurant_contacts,
    get_restaurant_reviews,
    get_restaurant_schedule,
    get_featured_items,
    get_ticket_offerings,
    get_ticket_offering_tickets,
    get_user_tickets,
    get_tags,
    choose_ticket
}