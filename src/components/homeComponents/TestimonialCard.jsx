const TestimonialCard = ({ review }) => {
  console.log(review);

  const { userName, user_email, user_photoURL } = review;

  //   {
  //   "id": "5f47ac10b4f1c03e8c234567",
  //   "user_email": "jane.smith@example.com",
  //   "userName": "Jane Smith",
  //   "delivery_email": "delivery2@example.com",
  //   "ratings": 3.8,
  //   "review": "Took a bit longer than expected, but okay overall.",
  //   "parcel_id": "5f47ac10b4f1c03e8c765432",
  //   "pick_up_email": "pickup2@example.com",
  //   "user_photoURL": "https://randomuser.me/api/portraits/women/25.jpg",
  //   "date": "2024-06-10T10:15:00.000Z"
  // },

  return (
    <div className="card max-w-sm bg-base-100 shadow-sm border border-gray-200 rounded-xl p-6">
      {/* Quote Icon */}
      <div className="text-primary/40 text-4xl font-bold">❝</div>

      {/* Main Text */}
      <p className="text-gray-600 text-sm leading-relaxed mt-2">
        A posture corrector works by providing support and gentle alignment to
        your shoulders, back, and spine, encouraging you to maintain proper
        posture throughout the day.
      </p>

      {/* Divider */}
      <div className="border-t-2 border-dashed border-gray-300 my-4"></div>

      {/* Profile */}
      <div className="flex items-center gap-3">
        <div className="avatar">
          <img className="w-12 rounded-full" src={user_photoURL} alt="" />
        </div>

        <div>
          <h4 className="font-semibold text-[#0A4B4B]">{userName}</h4>
          <p className="text-gray-500 text-xs">{user_email}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
