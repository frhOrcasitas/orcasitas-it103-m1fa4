import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation Menu */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">TailwindDemo</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#buttons" className="text-gray-700 hover:text-indigo-600 transition">Buttons</a>
              <a href="#colors" className="text-gray-700 hover:text-indigo-600 transition">Colors</a>
              <a href="#layouts" className="text-gray-700 hover:text-indigo-600 transition">Layouts</a>
              <a href="#text" className="text-gray-700 hover:text-indigo-600 transition">Typography</a>
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
        <section id="buttons" className="mb-16">
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
        <section id="colors" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Use Tailwind CSS?</h2>
          <div className="bg-white rounded-lg shadow-md p-8 text-gray-700">
            <p className="text-gray-700">Now, instead of writing basic CSS classes, you can write Tailwind CSS utility classes directly in your HTML elements.</p>
            <br></br>
            <p>Common Tailwind Building blocks include: </p>
            <pre className="bg-gray-100 p-4 rounded mt-2"><code>p-4 // padding<br></br>px-6 // horizontal padding
            <br></br>py-2 // vertical padding <br></br>mt-4 // margin top <br></br>mb-8 // margin-bottom</code></pre>
          </div>
        </section>

        {/* Typography Section */}
        <section id="text" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Typography</h2>
          <div className="bg-white rounded-lg shadow-md p-8 space-y-4">
            <h1 className="text-5xl font-bold text-gray-900">Heading 1 - Extra Large</h1>
            <h2 className="text-4xl font-bold text-gray-900">Heading 2 - Large</h2>
            <h3 className="text-3xl font-bold text-gray-900">Heading 3 - Medium</h3>
            <p className="text-xl text-gray-700">This is a large paragraph with text-xl class.</p>
            <p className="text-base text-gray-600">This is a regular paragraph with text-base class.</p>
            <p className="text-sm text-gray-500">This is small text with text-sm class.</p>
            <p className="font-bold text-gray-900">This is bold text.</p>
            <p className="italic text-gray-700">This is italic text.</p>
            <p className="underline text-blue-600">This is underlined text.</p>
          </div>
        </section>

        {/* Layouts Section */}
        <section id="layouts" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Layout Examples</h2>
          
          {/* Grid Layout */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h3 className="text-xl font-bold mb-4">Grid Layout</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Card 1</h4>
                <p>This is a card in a responsive grid layout.</p>
              </div>
              <div className="bg-gradient-to-br from-green-400 to-green-600 text-white p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Card 2</h4>
                <p>Grid automatically adjusts to screen size.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 text-white p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Card 3</h4>
                <p>Three columns on large screens, stacked on mobile.</p>
              </div>
            </div>
          </div>

          {/* Flex Layout */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold mb-4">Flex Layout</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-red-500 text-white p-4 rounded-lg flex-shrink-0">Item 1</div>
              <div className="bg-orange-500 text-white p-4 rounded-lg flex-shrink-0">Item 2</div>
              <div className="bg-yellow-500 text-white p-4 rounded-lg flex-shrink-0">Item 3</div>
              <div className="bg-teal-500 text-white p-4 rounded-lg flex-shrink-0">Item 4</div>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Images</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <img 
                  src="https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Image+1" 
                  alt="Placeholder" 
                  className="w-full rounded-lg shadow-md"
                />
                <p className="mt-2 text-center font-medium">Rounded Image</p>
              </div>
              <div>
                <img 
                  src="https://via.placeholder.com/400x300/10B981/FFFFFF?text=Image+2" 
                  alt="Placeholder" 
                  className="w-full rounded-full shadow-md"
                />
                <p className="mt-2 text-center font-medium">Circular Image</p>
              </div>
              <div>
                <img 
                  src="https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Image+3" 
                  alt="Placeholder" 
                  className="w-full shadow-2xl"
                />
                <p className="mt-2 text-center font-medium">Shadow Image</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg">Built with Next.js and Tailwind CSS</p>
          <p className="text-sm text-gray-400 mt-2">A beginner-friendly tutorial project</p>
        </div>
      </footer>
    </div>
  );
}