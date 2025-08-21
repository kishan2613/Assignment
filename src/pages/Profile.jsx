import profileImg from "../assets/Profile.png";   // your profile image
import cameraIcon from "../assets/Camera.png";    // your camera icon

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-[#F7F8F9] ">
      <div className="w-full max-w-sm bg-white border-2 shadow-md min-h-screen overflow-hidden">
        {/* Header */}
        <div className="py-4 px-4 text-xl font-semibold border-b">
          Account Settings
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Profile Info */}
          <div className="flex gap-3 items-center mb-4">
            <div className="relative h-20 w-20">
              {/* Profile Image */}
              <img
                src={profileImg}
                alt="profile"
                className="h-20 w-20 object-cover rounded-full border"
              />
              {/* Camera Icon */}
              <img
                src={cameraIcon}
                alt="camera"
                className="absolute bottom-0 right-0 h-7 w-7 rounded-full bg-white shadow-md cursor-pointer"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold">Marry Doe</h3>
              <p className="text-gray-500 text-sm">marry@gmail.com</p>
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            quidem iure cum similique, debitis accusamus, a, veritatis tenetur
            atque quasi quas repellendus blanditiis dolore!
          </p>

          <hr className="border-t border-dashed border-gray-300/80" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
