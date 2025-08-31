import ProductImageUpload from "@/components/admin-view/image-upload";
import { Button } from "@/components/ui/button";
import { addFeatureImage, getFeatureImages } from "@/store/common-slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function AdminDashboard() {
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const dispatch = useDispatch();
  const { featureImageList } = useSelector((state) => state.commonFeature);

  console.log(uploadedImageUrl, "uploadedImageUrl");

  function handleUploadFeatureImage() {
    dispatch(addFeatureImage(uploadedImageUrl)).then((data) => {
      if (data?.payload?.success) {
        dispatch(getFeatureImages());
        setImageFile(null);
        setUploadedImageUrl("");
      }
    });
  }

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  // console.log(featureImageList, "featureImageList");

  return (
    <div className="space-y-8">
      <div className="bg-background border border-secondary rounded-lg p-6">
        <h2 className="text-subsection font-poppins font-semibold text-foreground mb-6">Upload Feature Images</h2>
        <ProductImageUpload
          imageFile={imageFile}
          setImageFile={setImageFile}
          uploadedImageUrl={uploadedImageUrl}
          setUploadedImageUrl={setUploadedImageUrl}
          setImageLoadingState={setImageLoadingState}
          imageLoadingState={imageLoadingState}
          isCustomStyling={true}
        />
        <Button 
          onClick={handleUploadFeatureImage} 
          className="mt-6 w-full bg-accent hover:bg-accent/90 text-accent-foreground font-poppins font-medium uppercase tracking-wide py-3"
        >
          Upload
        </Button>
      </div>
      
      <div className="bg-background border border-secondary rounded-lg p-6">
        <h2 className="text-subsection font-poppins font-semibold text-foreground mb-6">Current Feature Images</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureImageList && featureImageList.length > 0
            ? featureImageList.map((featureImgItem, i) => (
                <div key={i} className="relative group">
                  <img
                    src={featureImgItem.image}
                    className="w-full h-[300px] object-cover rounded-lg border border-secondary"
                    alt={`Feature Image ${i + 1}`}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg"></div>
                </div>
              ))
            : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground font-inter">No feature images uploaded yet.</p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
