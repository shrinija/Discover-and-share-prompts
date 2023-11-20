import AnimatedText from "@components/AnimatedText";
import Feed from "@components/Feed";


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <AnimatedText text="Promptopia" className="head_text text-center" />
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />  
        {/* medium size and above */}
        <span className="orange_gradient text-center">AI-Powered prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>
      <Feed />
    </section>
  );
};

export default Home;
