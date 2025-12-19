import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-indigo-200">
      {/* Navigation Menu */}
      <nav className="bg-blue-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">Franz's Blog</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#installTailwind" className="text-gray-700 hover:text-indigo-600 transition">How to Install?</a>
              <a href="#useTailwind" className="text-gray-700 hover:text-indigo-600 transition">How to use Tailwind CSS?</a>
              <a href="#layout" className="text-gray-700 hover:text-indigo-600 transition">Layout</a>
            </div>
            <button className="md:hidden">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            How to use Tailwind CSS in Next.js?
          </h1>
          <p className="text-xl text-gray-600 mb-8 text-justify">
            Tailwind CSS is a utility-first CSS framework that makes styling your applications a breeze.
            Compared to traditional CSS frameworks, and vanilla CSS, Tailwind CSS offers a utility-first approach that allows for rapid UI 
            development directly in your HTML markup. They are highly customizable and flexible, enabling developers to create unique designs without writing custom CSS.
            Developers can use predefined utility classes for rapid development and prototyping, which can significantly speed up the design process.
            <br></br><br></br>In this article, we will explore on how to get and use Tailwind CSS.
          </p>
        </div>

        {/* Buttons Section */}
        <section id="installTailwind" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to get Tailwind CSS?</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              <li>
                <strong>Install Node.js: </strong> Download and install Node.js from the official website: nodejs.org. Don't forget to install Git as well from git-scm.com.
              </li>
              <li>
                <strong>To check if Node.js is fully installed, check it in the Integrate Terminal on Visual Studio Code: </strong>
                <pre className="bg-gray-100 p-4 rounded mt-2"><code>node -v<br/>npm -v<br/>git -v</code></pre>
              </li>
              <li>
                <strong>Install Tailwind CSS using the commands below:</strong>
                <pre className="bg-gray-100 p-4 rounded mt-2"><code>npm install -D tailwindcss postcss autoprefixer</code></pre><br></br>Create config files: 
                <pre className="bg-gray-100 p-4 rounded mt-2"><code>npx tailwindcss init -p</code></pre><br></br>This will create two files in your project root:
                <pre className="bg-gray-100 p-4 rounded mt-2"><code>tailwind.config.js<br></br>postcss.config.js</code></pre>
              </li>
              <li>
                <strong>Configuring Tailwind CSS:</strong> Open <code>tailwind.config.js</code>:
                <pre className="bg-gray-100 p-4 rounded mt-2">
                  <code>{"import '../styles/globals.css';"}</code>
                </pre>
              </li>
              <li>
                <strong>Create a Tailwind input file: </strong> Create <code>input.css</code>:
                <pre className="bg-gray-100 p-4 rounded mt-2"><code>@tailwind base;<br></br>@tailwind components;<br></br>@tailwind utilities;</code></pre>
              </li>
              <li>
                <strong>Run the this line in your terminal: </strong> Create <code>npx tailwindcss -i ./input.css -o ./output.css --watch</code>:
              </li>
              <li>
                <strong>Finally, create your own HTML file, and you can now use your HTML file to create your own Tailwind CSS project!</strong>
              </li>
            </ol>
          </div>
        </section>

        {/* Colors Section */}
        <section id="useTailwind" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Use Tailwind CSS?</h2>
          <div className="bg-white rounded-lg shadow-md p-8 text-gray-700">
            <p className="text-gray-700">Now, instead of writing basic CSS classes, you can write Tailwind CSS utility classes directly in your HTML elements.</p>
            <br></br>
            <p>Common Tailwind Building blocks include: </p>
            <pre className="bg-gray-100 p-4 rounded mt-2"><code>p-4 // padding<br></br>px-6 // horizontal padding
            <br></br>py-2 // vertical padding <br></br>mt-4 // margin top <br></br>mb-8 // margin-bottom<br></br>bg-colorofprefererence-100 // background color
            <br></br>text-colorofpreference // text color<br></br>flex // enables flex<br></br>flex items-center // vertical center<br></br>justify-center // horizontal center
            <br></br>grid grid-cols-3 gap-4 // making a grid layout<br></br>text-sm text-lg text-xl text-5xl // font sizes
            <br></br>font-bold font-extrabold // make your text bold <br></br>text-left text-center text-justify // text alignment</code></pre>
            <br></br>
            <p className="text-base md:text-lg lg:text-xl">This text changes size based on screen width.</p><br></br>
            <button className="bg-blue-400 hover:bg-blue-900 text-white px-4 py-2 rounded">This button changes color when hovered</button>
          </div>
        </section>

        
        {/* Layouts Section */}
        <section id="layout" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Layout Examples</h2>
          
          {/* Grid Layout */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Grid Layout</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="bg-gradient-to-br from-red-400 to-blue-600 text-white p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Card 1</h4>
                <p>This is a card grid layout.</p>
              </div>
              <div className="bg-gradient-to-br from-orange-400 to-green-600 text-white p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Card 2</h4>
                <p>Which it can also be automatically resized and quickly responded.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-400 to-purple-600 text-white p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Card 3</h4>
                <p>Here in desktop, it is lined up. Four in a row.</p>
              </div>
              <div className="bg-gradient-to-br from-green-400 to-yellow-600 text-white p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Card 4</h4>
                <p>When resized, it adjusts to fit the screen size.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-400 to-pink-600 text-white p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Card 5</h4>
                <p>When resized, it adjusts to fit the screen size. Here, it is stacked.</p>
              </div>
            </div>
          </div>
          
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg">This is your footer! You can put your own info here with Tailwind CSS!</p>
          <p className="text-sm text-gray-400 mt-2">By: Franz Ronelle Orcasitas for M1 FA4 for IT103L</p>
        </div>
      </footer>
    </div>
  );
}