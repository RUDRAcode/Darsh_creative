export default function Footer() {
  return (
    <footer className="w-full h-20 bg-bg-gradientVioletNav px-2 flex justify-between lg:px-10">
      <div className="flex-1 flex items-center justify-center">
        <div className="min-w-[25rem] h-1/2 bg-bg-pinkToViolet rounded-3xl flex justify-between items-center px-1 md:min-w-[30rem] md:px-2 lg:min-w-[45rem] lg:px-3 sm:min-w-[25rem] ssm:min-w-[19rem]">
          <div className="h-full w-12 flex items-center justify-between lg:w-16 md:flex ssm:hidden">
            <span className="text-sm text-cyan lg:text-lg">
              <i class="fa-solid fa-circle"></i>
            </span>
            <span className="text-sm text-violet-600 lg:text-lg">
              <i class="fa-solid fa-circle"></i>
            </span>
            <span className="text-sm text-orange-600 lg:text-lg">
              <i class="fa-solid fa-circle"></i>
            </span>
          </div>
          <div className="flex-1 flex justify-center">
            <span className=" hidden text-white font-delius lg:block lg:text-2xl">
              Powered By: Microtalk Communication Private Limited.
            </span>
            <span className="text-sm text-white font-delius md:text-lg sm:text-lg lg:hidden">
              Powered By: Microtalk Communication Pvt Ltd.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
