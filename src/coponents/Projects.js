import React from "react";
import jarvis from "../image/jarvis.jpg";
import dashbord from "../image/dashbord.png";
import todolist from "../image/todolist.png";

export default function Projects() {
  return (
    <div>
      <div className="m-3 rounded-lg">
        <section className="pb-5 text-gray-600  bg-gray-900 body-font" id="project">
          <div className="container mx-auto">
            <div className="text-center mb-10">
              <h1 className="sm:text-3xl text-2xl pt-5  font-medium title-font text-white mb-2">
                Projects
              </h1>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-pink-500 inline-flex"></div>
              </div>
            </div>

            <div className="w-full container mx-auto ">
              <div className="flex flex-wrap m-4 ">
                <div className="p-3 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={dashbord}
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        PROFILE
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        The Catalyzer
                      </h1>
                      <p className="leading-relaxed mb-3">
                        Dashbord Profile using bootstrap and FontAwasomeicons
                        ,Boxicons , Material Design using in this profile.
                      </p>
                      <div className="flex items-center flex-wrap "></div>
                    </div>
                  </div>
                </div>

                <div className="p-3 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={todolist}
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        TODO LIST
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        The Catalyzer
                      </h1>
                      <p className="leading-relaxed mb-3">
                        In This Todo List we can able to insert the details and
                        edit the details and updated the details using html and
                        javascript
                      </p>
                      <div className="flex items-center flex-wrap "></div>
                    </div>
                  </div>
                </div>
                <div className="p-3 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={jarvis}
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        JARVIS
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        The Catalyzer
                      </h1>
                      <p className="leading-relaxed mb-3">
                        This is Wonderfull and Intersting Technology and Project
                        by using python 3..
                      </p>
                      <div className="flex items-center flex-wrap "></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
