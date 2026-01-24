import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-background text-foreground py-10">
      <div className="mx-auto max-w-6xl">
        <span className="text-3xl">Hope you find your job !</span>
        <div className="text-lg mt-10 flex justify-between">
          <span>Contact us</span>

          <div className="flex items-center justify-center gap-5">
            <a href="https://www.linkedin.com/in/shivam-jangid-178b75250/">
              <Linkedin />
            </a>
            <a href="https://discord.gg/jezNvEVb">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-discord size-5"
                viewBox="0 0 16 16"
              >
                <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
              </svg>
            </a>
            <a href="" type="email" >
              <Mail />
            </a>
            <a href="">
              <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.093 9.3155L21.283 0H19.3422L12.2308 8.08852L6.55101 0H0L8.58902 12.2313L0 22H1.94088L9.45067 13.4583L15.449 22H22L13.0925 9.3155H13.093ZM10.4347 12.339L9.56445 11.1211L2.6402 1.42965H5.62127L11.2092 9.25094L12.0795 10.4689L19.3431 20.6354H16.3621L10.4347 12.3395V12.339Z"
                  fill="white"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
