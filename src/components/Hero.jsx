import { logo } from "../assets";
function Hero() {
    return (
        <header className="w-full flex justify-center items-center flex-col">
            <nav className="flex justify-between items-center  w-full mb-10  pt-3">
                <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

                <button
                    type="button"
                    onClick={() => window.open("https://github.com/mawlid1431")}
                    className="black_btn"
                >
                    github
                </button>
            </nav>
            <h1 className="head_text">
                {" "}
                Summarize Article with <br className="max-md:hidden" />
                <span className="orange_gradient">Open AI GPT-4</span>
            </h1>


            <h2 className="desc"> Streamline Knowledge: Transforming Articles into Concise Gems!

            </h2>
        </header>
    );
}

export default Hero;
