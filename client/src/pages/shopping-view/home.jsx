import { Button } from "@/components/ui/button";
import bannerOne from "../../assets/account.jpg";
import bannerTwo from "../../assets/img2.jpg";
import bannerThree from "../../assets/img3.jpg";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ShirtIcon,
  House,
  Cake,
  NotebookPen,
  Headset,
  Trophy,
  ScrollText,
  HousePlus,
  Warehouse,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllFilteredProducts,
  fetchProductDetails,
} from "@/store/shop/products-slice";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { useNavigate } from "react-router-dom";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { useToast } from "@/components/ui/use-toast";
import ProductDetailsDialog from "@/components/shopping-view/product-details";
import { getFeatureImages } from "@/store/common-slice";

const categoriesWithIcon = [
  { id: "shop1", label: "shop1", icon: House },
  { id: "shop2", label: "shop2", icon: Warehouse },
  { id: "shop3", label: "shop3", icon: HousePlus },
  { id: "shop4", label: "shop4", icon: Warehouse },
  { id: "shop5", label: "shop5", icon: House },
];

const brandsWithIcon = [
  { id: "Food", label: "Food", icon: Cake },
  { id: "Stationary", label: "Stationary", icon: NotebookPen },
  { id: "Gadgets", label: "Gadgets", icon: Headset },
  { id: "Merch", label: "Merch", icon: ShirtIcon },
  { id: "Sports", label: "Sports", icon: Trophy },
  { id: "Notes", label: "Notes", icon: ScrollText },
];

function ShoppingHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { productList, productDetails } = useSelector(
    (state) => state.shopProducts
  );
  const { featureImageList } = useSelector((state) => state.commonFeature);

  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Combine banners with feature images
  const combinedFeatureImages = [
    { image: bannerOne },
    { image: bannerTwo },
    { image: bannerThree }
  ];

  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };
    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate(`/shop/listing`);
  }

  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  function handleAddtoCart(getCurrentProductId) {
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product is added to cart",
        });
      }
    });
  }

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % combinedFeatureImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [combinedFeatureImages]);

  useEffect(() => {
    dispatch(
      fetchAllFilteredProducts({
        filterParams: {},
        sortParams: "price-lowtohigh",
      })
    );
  }, [dispatch]);

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % combinedFeatureImages.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      (prevSlide - 1 + combinedFeatureImages.length) % combinedFeatureImages.length
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="absolute top-[2%] right-[10%] float-right text-white bg-primary px-4 py-2 rounded-lg shadow-lg z-50"
      >
        <a className="cursor-pointer" href="http://localhost:8501/" target="_blank" rel="noopener noreferrer">
          AI Recommendation
        </a>

      </div>

      <div className="relative w-full h-[600px] overflow-hidden">
        {combinedFeatureImages && combinedFeatureImages.length > 0
          ? combinedFeatureImages.map((slide, index) => (
            <img
              src={slide?.image}
              key={index}
              className={`${index === currentSlide ? "opacity-1000" : "opacity-0"
                } absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-100`}
              alt={`Slide ${index + 1}`} // Add alt attribute for accessibility
            />
          ))
          : null}
        <Button
          variant="outline"
          size="icon"
          onClick={goToPreviousSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={goToNextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
        >
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
      </div>

      <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Explore All Shops
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {categoriesWithIcon.map((categoryItem) => (
              <Card
                key={categoryItem.id}
                onClick={() => handleNavigateToListingPage(categoryItem, "category")}
                className="cursor-pointer p-4 bg-white rounded-lg border border-gray-200 shadow-md hover:border-green-500 transition-all transform hover:-translate-y-1"
              >
                <CardContent className="flex flex-col items-center justify-center p-8">
                  <categoryItem.icon className="w-14 h-14 mb-6 text-primary" />
                  <span className="font-semibold text-lg text-gray-700">{categoryItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>




      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brandsWithIcon.map((brandItem) => (
              <Card
                key={brandItem.id}
                onClick={() => handleNavigateToListingPage(brandItem, "brand")}
                className="cursor-pointer p-4 bg-white rounded-lg border border-gray-200 shadow-md hover:border-green-500 transition-all transform hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <brandItem.icon className="w-12 h-12 mb-4 text-primary" />
                  <span className="font-bold text-gray-700">{brandItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            All Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productList && productList.length > 0
              ? productList.map((productItem) => (
                <ShoppingProductTile
                  key={productItem.id}
                  handleGetProductDetails={handleGetProductDetails}
                  product={productItem}
                  handleAddtoCart={handleAddtoCart}
                />
              ))
              : null}
          </div>
        </div>
      </section>
      <ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
      />
    </div>
  );
}

export default ShoppingHome;