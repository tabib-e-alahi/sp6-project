const loadPopularCourseData = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/tabib-e-alahi/eduBridge_htm_css_js/main/jsonData/allCourses.json"
  );
  const data = await res.json();
  const popularCourses = data;
  //   console.log(popularCourses);
  displayPopularCourses(popularCourses);
};

const displayPopularCourses = (popularCourses) => {
  const popularCardContainer = document.getElementById("popular-container");
  //   console.log(popularCourses);
  popularCourses.slice(0, 6)?.forEach((course) => {
    const popularCard = document.createElement("div");
    popularCard.classList = `max-w-sm h-full p-4 border bg-white shadow-sm rounded-3xl font-sans  flex flex-col justify-between noto-sans-font`;
    popularCard.innerHTML = `
            <div class="flex gap-2 justify-start items-center mb-4 pl-6">
                <img class="rounded-full size-6 outline outline-indigo-400" src=${course?.cover_image} alt="" />
                <p class="font-medium font-serif">Yet to be announced</p>
            </div>
                <img class="rounded-lg mb-2" src=${course?.cover_image} alt="" />
            <div class=" flex-grow p-6  bg-white">
                <div class="badge mb-3 bg-[#EDF8F9] text-[#17A2B8] rounded-none py-3 text-xs px-1.5 ">${course?.category}</div>
                <div class="flex justify-start  gap-x-5">
                <div class="text-sm font-semibold text-[#94928e]">${course?.lectures} lessons</div>
                <div class="text-sm font-semibold text-[#94928e]">Skill:${course?.skill_level}</div>
                </div>
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
                 ${course?.course_title}
                </h5>
                <span class="font-medium">Duration: ${course?.course_duration}hr</span>
            </div>
          <div class="border-t px-2 w-11/12 mx-auto   py-2 flex justify-between items-center  rounded-b-xl">
            <button class="font-semibold text-indigo-700 ">
              See Details
            </button>
            <span class="font-bold text-indigo-600 text-xl">${course?.price > 0 ? '$'+ course.price : "Free"}</span>
          </div>
    `;

    popularCardContainer.appendChild(popularCard);
  });
};

loadPopularCourseData();
