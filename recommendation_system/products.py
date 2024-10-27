import pandas as pd

# Hardcoded product data
data = {
    "id": [
        "671ded7cbe692e2768cbdaf4",
        "671dedb1be692e2768cbdaf7",
        "671dee1dbe692e2768cbdafa",
        "671dee49be692e2768cbdafd",
        "671deea9be692e2768cbdb03",
        "671def03be692e2768cbdb06",
        "671df234be692e2768cbdb0e",
        "671df276be692e2768cbdb11",
        "671df2e8be692e2768cbdb14",
        "671df322be692e2768cbdb17",
        "671df350be692e2768cbdb1a",
        "671df407be692e2768cbdb1d",
        "671df468be692e2768cbdb20",
        "671df49fbe692e2768cbdb23",
        "671df509be692e2768cbdb26"
    ],
    "title": [
        "C++", "Digital Notes", "Automata", "Music", "Boys Hoodie", 
        "Girl's Hoodie", "Jacket", "T-shirt", "Laptop", "Camera", 
        "TV", "Apple Ecosystem", "Tennis", "Gloves", "Base Ball Stick"
    ],
    "description": [
        "cpp notes", "pdf", "theory of automata", "theory of music", "all size hoodie",
        "hoodie for girls", "jacket", "tshirt for everyone", "brand new laptop",
        "camera", "brand new tv", "apple items", "ball and racket", "gloves", "stick"
    ],
    "category": [
        "shop2", "shop3", "shop4", "shop5", "shop1", 
        "shop2", "shop3", "shop4", "shop1", "shop2", 
        "shop3", "shop4", "shop1", "shop2", "shop3"
    ],
    "brand": [
        "Notes", "Notes", "Notes", "Notes", "Merch", 
        "Merch", "Merch", "Merch", "Gadgets", "Gadgets", 
        "Gadgets", "Gadgets", "Sports", "Sports", "Sports"
    ],
    "price": [
        11, 20, 12, 10, 1100, 
        1500, 2000, 400, 79000, 40000, 
        15000, 1000000, 1000, 200, 1000
    ],
    "salePrice": [
        9, 11, 9, 5, 999, 
        1199, 1499, 299, 69690, 29000, 
        11999, 599999, 699, 149, 699
    ],
    "totalStock": [
        3, 12, 5, 2, 10, 
        5, 5, 11, 2, 1, 
        3, 1, 2, 12, 4
    ],
    "averageReview": [0] * 15,
    "image": [
        "http://res.cloudinary.com/maheshkrishnam/image/upload/v1730014551/otfz…",
        "http://res.cloudinary.com/maheshkrishnam/image/upload/v1730014608/r50b…",
        "http://res.cloudinary.com/maheshkrishnam/image/upload/v1730014669/heno…",
        "http://res.cloudinary.com/maheshkrishnam/image/upload/v1730014764/kogf…",
        "http://res.cloudinary.com/maheshkrishnam/image/upload/v1730014840/jruk…",
        "http://res.cloudinary.com/maheshkrishnam/image/upload/v1730014911/xadv…",
        "http://res.cloudinary.com/maheshkrishnam/image/upload/v1730015756/hdkl…",
        "http://res.cloudinary.com/maheshkrishnam/image/upload/v1730015824/lahg…",
        "http://res.cloudinary.com/maheshkrishnam/image/upload/v1730015896/pwmd…",
        "http://res.cloudinary.com/maheshkrishnam/image/upload/v1730016011/g5ew…",
        "http://res.cloudinary.com/maheshkrishnam/image/upload/v1730016047/wio4…",
        "http://res.cloudinary.com/maheshkrishnam/image/upload/v1730016095/ulyi…",
        "http://res.cloudinary.com/maheshkrishnam/image/upload/v1730016331/gdbf…",
        "http://res.cloudinary.com/maheshkrishnam/image/upload/v1730016387/d9im…",
        "http://res.cloudinary.com/maheshkrishnam/image/upload/v1730016495/yapf…"
    ]
}

# Convert to DataFrame
products_df = pd.DataFrame(data)

def get_products():
    return products_df
