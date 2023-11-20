import "@styles/globals.css"; // we don't need to mention the entire path
import Nav from "@components/Nav";
import Provider from "@components/Providex";

export const metadata = {
  title: "Promptopia",
  description: "Discover and share AI Prompts",
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default Layout;
