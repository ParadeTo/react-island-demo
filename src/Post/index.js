export default function Post() {
  return (
    <div className='relative block overflow-hidden px-3'>
      <hr className='w-16 h-px pt-px bg-neutral-200 border-0 mb-6 dark:bg-neutral-700' />
      <div className='prose text-base text-neutral-800 inter'>
        <blockquote className='text-sm rounded-sm p-1 pl-8 pr-5 my-2 border-l-3 border-neutral-300 bg-neutral-50 dark:border-neutral-500 dark:bg-neutral-800'>
          <p>
            tl;dr: The islands architecture encourages small, focused chunks of
            interactivity within server-rendered web pages. The output of
            islands is progressively enhanced HTML, with more specificity around
            how the enhancement occurs. Rather than a single application being
            in control of full-page rendering, there are multiple entry points.
            The script for these "islands" of interactivity can be delivered and
            hydrated independently, allowing the rest of the page to be just
            static HTML.
          </p>
        </blockquote>
        <p>
          Loading and processing excess JavaScript can hurt performance.
          However, some degree of interactivity and JavaScript is often
          required, even in primarily static websites. We have discussed{' '}
          <a
            className='mdx-a font-semibold text-underline'
            href='https://www.patterns.dev/posts/rendering-introduction'>
            variations of Static Rendering
          </a>{' '}
          that enable you to build applications that try to find the balance
          between:
        </p>
        <ol className='mb-5 mt-5 pl-7 list-decimal marker:text-neutral-300 text-base'>
          <li className='mb-3 mt-3 pl-1.5 dark:text-neutral-100'>
            Interactivity comparable to Client-Side Rendered (CSR) applications
          </li>
          <li className='mb-3 mt-3 pl-1.5 dark:text-neutral-100'>
            SEO benefits that are comparable to SSR applications.
          </li>
        </ol>
        <p>
          The core principle for SSR is that HTML is rendered on the server and
          shipped with necessary JavaScript to rehydrate it on the client.
          Rehydration is the process of regenerating the state of UI components
          on the client-side after the server renders it. Since rehydration
          comes at a{' '}
          <a
            className='mdx-a font-semibold text-underline'
            href='https://addyosmani.com/blog/rehydration/'>
            cost
          </a>
          , each variation of SSR tries to optimize the rehydration process.
          This is mainly achieved by{' '}
          <a
            className='mdx-a font-semibold text-underline'
            href='https://www.patterns.dev/posts/progressive-hydration'>
            partial hydration
          </a>{' '}
          of critical components or{' '}
          <a
            className='mdx-a font-semibold text-underline'
            href='https://www.patterns.dev/posts/ssr'>
            streaming
          </a>{' '}
          of components as they get rendered. However, the net JavaScript
          shipped eventually in the above techniques remains the same.
        </p>
        <p>
          The term{' '}
          <a
            className='mdx-a font-semibold text-underline'
            href='https://jasonformat.com/islands-architecture/'>
            Islands architecture
          </a>{' '}
          was popularized by Katie Sylor-Miller and Jason Miller to describe a
          paradigm that aims to reduce the volume of JavaScript shipped through
          "islands" of interactivity that can be independent delivered on top of
          otherwise static HTML. Islands are a component-based architecture that
          suggests a compartmentalized view of the page with static and dynamic
          islands. The static regions of the page are pure non-interactive HTML
          and do not need hydration. The dynamic regions are a combination of
          HTML and scripts capable of rehydrating themselves after rendering.
        </p>
        <div className='mx-auto relative'>
          <img
            alt='SSR, progressive hydration and islands architecture'
            sizes='100vw'
            srcSet='/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--avuxy9rrkk8.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--avuxy9rrkk8.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--avuxy9rrkk8.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--avuxy9rrkk8.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--avuxy9rrkk8.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--avuxy9rrkk8.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--avuxy9rrkk8.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--avuxy9rrkk8.png&amp;w=3840&amp;q=75 3840w'
            src='/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--avuxy9rrkk8.png&amp;w=3840&amp;q=75'
            decoding='async'
            data-nimg='fill'
            className='rounded-md'
            loading='lazy'
          />
        </div>
        <p>
          Let us explore the Islands architecture in further detail with the
          different options available to implement it at present.
        </p>
        <hr className='border mb-12 mt-12 border-neutral-150 dark:border-neutral-700/80' />
        <h2
          id='islands-of-dynamic-components'
          className='font-bold leading-5 mb-6 mt-10 text-2xl dark:text-neutral-100'>
          Islands of dynamic components
        </h2>
        <p>
          Most pages are a combination of static and dynamic content. Usually, a
          page consists of static content with sprinkles of interactive regions
          that can be isolated. For example;
        </p>
        <ol className='mb-5 mt-5 pl-7 list-decimal marker:text-neutral-300 text-base'>
          <li className='mb-3 mt-3 pl-1.5 dark:text-neutral-100'>
            Blog posts, news articles, and organization home pages contain text
            and images with interactive components like social media embeds and
            chat.
          </li>
          <li className='mb-3 mt-3 pl-1.5 dark:text-neutral-100'>
            Product pages on e-commerce sites contain static product
            descriptions and links to other pages on the app. Interactive
            components such as image carousels and search are available in
            different regions of the page.
          </li>
          <li className='mb-3 mt-3 pl-1.5 dark:text-neutral-100'>
            A typical bank account details page contains a list of static
            transactions with filters providing some interactivity.
          </li>
        </ol>
        <p>
          Static content is stateless, does not fire events, and does not need
          rehydration after rendering. After rendering, dynamic content
          (buttons, filters, search bar) has to be rewired to its events. The
          DOM has to be regenerated on the client-side (
          <a
            className='mdx-a font-semibold text-underline'
            href='https://reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom'>
            virtual DOM
          </a>
          ). This regeneration, rehydration, and event handling functions
          contribute to the JavaScript sent to the client.
        </p>
        <p>
          The Islands architecture facilitates server-side rendering of pages
          with all of their static content. However, in this case, the rendered
          HTML will include placeholders for dynamic content. The dynamic
          content placeholders contain self-contained component widgets. Each
          widget is similar to an app and combines server-rendered output and
          JavaScript used to hydrate the app on the client.
        </p>
        <p>
          In progressive hydration, the hydration architecture of the page is
          top-down. The page controls the scheduling and hydration of individual
          components. Each component has its hydration script in the Islands
          architecture that executes asynchronously, independent of any other
          script on the page. A performance issue in one component should not
          affect the other.
        </p>
        <div className='mx-auto relative'>
          <img
            alt='hydration architecture'
            sizes='100vw'
            srcSet='/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--99emuo8lgf.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--99emuo8lgf.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--99emuo8lgf.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--99emuo8lgf.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--99emuo8lgf.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--99emuo8lgf.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--99emuo8lgf.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--99emuo8lgf.png&amp;w=3840&amp;q=75 3840w'
            src='/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--99emuo8lgf.png&amp;w=3840&amp;q=75'
            decoding='async'
            data-nimg='fill'
            className='rounded-md'
            loading='lazy'
          />
        </div>
        <hr className='border mb-12 mt-12 border-neutral-150 dark:border-neutral-700/80' />
        <h2
          id='implementing-islands'
          className='font-bold leading-5 mb-6 mt-10 text-2xl dark:text-neutral-100'>
          Implementing Islands
        </h2>
        <p>
          The Island architecture borrows concepts from different sources and
          aims to combine them optimally. Template-based static site generators
          such as{' '}
          <a
            className='mdx-a font-semibold text-underline'
            href='https://jekyllrb.com/'>
            Jekyll
          </a>{' '}
          and{' '}
          <a
            className='mdx-a font-semibold text-underline'
            href='https://gohugo.io/'>
            Hugo
          </a>{' '}
          support the rendering of static components to pages. Most modern
          JavaScript frameworks also support{' '}
          <a
            className='mdx-a font-semibold text-underline'
            href='https://en.wikipedia.org/wiki/Isomorphic_JavaScript'>
            isomorphic rendering
          </a>
          , which allows you to use the same code to render elements on the
          server and client.
        </p>
        <p>
          Jason's post suggests the use of{' '}
          <a
            className='mdx-a font-semibold text-underline'
            href='https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback'>
            <code className='leading-6'>requestIdleCallback()</code>
          </a>{' '}
          to implement a scheduling approach for hydrating components. Static
          isomorphic rendering and scheduling of component level partial
          hydration can be built into a framework to support Islands
          architecture. Thus, the framework should
        </p>
        <ol className='mb-5 mt-5 pl-7 list-decimal marker:text-neutral-300 text-base'>
          <li className='mb-3 mt-3 pl-1.5 dark:text-neutral-100'>
            Support static rendering of pages on the server with zero
            JavaScript.
          </li>
          <li className='mb-3 mt-3 pl-1.5 dark:text-neutral-100'>
            Support embed of independent dynamic components via placeholders in
            static content. Each dynamic component contains its scripts and can
            hydrate itself using requestIdleCallback() as soon as the main
            thread is free.
          </li>
          <li className='mb-3 mt-3 pl-1.5 dark:text-neutral-100'>
            Allow isomorphic rendering of components on the server with
            hydration on the client to recognize the same component at both
            ends.
          </li>
        </ol>
        <p>
          You can use one of the out-of-the-box options discussed next to
          implement this.
        </p>
        <h3
          id='frameworks'
          className='text-xl font-bold leading-4 mb-6 mt-8 dark:text-neutral-100'>
          Frameworks
        </h3>
        <p>
          Different frameworks today are capable of supporting the Islands
          architecture. Notable among them are
        </p>
        <ol className='mb-5 mt-5 pl-7 list-decimal marker:text-neutral-300 text-base'>
          <li className='mb-3 mt-3 pl-1.5 dark:text-neutral-100'>
            <strong className='dark:text-white'>Marko</strong>:{' '}
            <a
              className='mdx-a font-semibold text-underline'
              href='https://markojs.com/'>
              Marko
            </a>{' '}
            is an open-source framework{' '}
            <a
              className='mdx-a font-semibold text-underline'
              href='https://tech.ebayinc.com/engineering/the-future-of-marko/'>
              developed
            </a>{' '}
            and{' '}
            <a
              className='mdx-a font-semibold text-underline'
              href='https://tech.ebayinc.com/engineering/ebay-launches-marko-5/'>
              maintained
            </a>{' '}
            by eBay to improve server rendering performance. It supports Islands
            architecture by combining streaming rendering with automatic partial
            hydration. HTML and other static assets are streamed to the client
            as soon as they are ready. Automatic partial hydration allows
            interactive components to hydrate themselves. Hydration code is only{' '}
            <a
              className='mdx-a font-semibold text-underline'
              href='https://medium.com/@mlrawlings/maybe-you-dont-need-that-spa-f2c659bc7fec'>
              shipped for interactive components
            </a>
            , which can change the state on the browser. It is isomorphic, and
            the Marko compiler generates optimized code depending on where it
            will run (client or server).
          </li>
          <li className='mb-3 mt-3 pl-1.5 dark:text-neutral-100'>
            <strong className='dark:text-white'>Astro</strong>:{' '}
            <a
              className='mdx-a font-semibold text-underline'
              href='https://astro.build/'>
              Astro
            </a>{' '}
            is a static site builder that can generate lightweight static HTML
            pages from UI components built in other frameworks such as React,
            Preact, Svelte, Vue, and others. Components that need client-side
            JavaScript are loaded individually with their dependencies. Thus it
            provides built-in partial hydration. Astro can also{' '}
            <a
              className='mdx-a font-semibold text-underline'
              href='https://codepen.io/jonneal/full/ZELvMvw'>
              lazy-load
            </a>{' '}
            components depending on when they become visible. We have included a{' '}
            <a
              className='mdx-a font-semibold text-underline'
              href='/posts/islands-architecture#heading=h.zkdqbcq8za4'>
              sample implementation
            </a>{' '}
            using Astro in the next section.
          </li>
          <li className='mb-3 mt-3 pl-1.5 dark:text-neutral-100'>
            <strong className='dark:text-white'>Eleventy + Preact:</strong>{' '}
            <a
              className='mdx-a font-semibold text-underline'
              href='https://markus.oberlehner.net/blog/building-partially-hydrated-progressively-enhanced-static-websites-with-isomorphic-preact-and-eleventy/#lazy-hydration'>
              Markus Oberlehner
            </a>{' '}
            demonstrates the use of Eleventy, a static site generator with
            isomorphic Preact components that can be partially hydrated. It also
            supports lazy hydration. The component itself declaratively controls
            the hydration of the component. Interactive components use a{' '}
            <code className='leading-6'>WithHydration</code> wrapper so that
            they are hydrated on the client.
          </li>
        </ol>
        <p>
          Note that Marko and Eleventy pre-date the definition of Islands
          provided by Jason but contain some of the features required to support
          it. <strong className='dark:text-white'>Astro</strong>, however, was
          built based on the definition and inherently supports the Islands
          architecture. In the following section, we demonstrate the use of
          Astro for a simple blog page example discussed earlier.
        </p>
        <h3
          id='sample-implementation'
          className='text-xl font-bold leading-4 mb-6 mt-8 dark:text-neutral-100'>
          Sample implementation
        </h3>
        <p>
          The following is a sample blog page that we have implemented using
          Astro. The page SamplePost imports one interactive component,
          SocialButtons. This component is included in the HTML at the required
          position via markup.
        </p>
        <div>
          <div className='grid-cp split' id='showPreview-false'>
            <div id='grid-top-left'>
              <div className='tab file-titles'>
                <div className='file-title active-true'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    className='tab-logo'
                    fill='none'
                    viewBox='0 0 1280 1280'>
                    {' '}
                    <title>Astro icon</title>
                    <path
                      fill='url(#paint0_linear_709_110)'
                      fillRule='evenodd'
                      d='M815.039 94.644c9.719 12.065 14.675 28.346 24.587 60.909l216.544 711.348c-80.063-41.533-167.098-71.488-258.889-87.649L656.29 302.798a18.351 18.351 0 00-35.21.055L481.795 779.011c-92.216 16.089-179.649 46.098-260.054 87.782l217.606-711.405h.001c9.943-32.506 14.914-48.759 24.634-60.803A79.994 79.994 0 01496.4 70.6c14.36-5.772 31.356-5.772 65.349-5.772h155.425c34.038 0 51.056 0 65.429 5.784a79.997 79.997 0 0132.436 24.032z'
                      clipRule='evenodd'></path>
                    <path
                      fill='#FF5D01'
                      fillRule='evenodd'
                      d='M840.951 900.754c-35.698 30.525-106.949 51.343-189.022 51.343-100.732 0-185.162-31.36-207.566-73.536-8.009 24.171-9.805 51.835-9.805 69.507 0 0-5.277 86.772 55.078 147.132 0-31.34 25.406-56.74 56.745-56.74 53.716 0 53.655 46.86 53.606 84.88l-.003 3.39c0 57.71 35.271 107.18 85.432 128.04-7.492-15.41-11.695-32.72-11.695-51 0-55.04 32.313-75.54 69.867-99.36 29.881-18.95 63.08-40 85.96-82.24 11.938-22.04 18.717-47.277 18.717-74.102 0-16.495-2.563-32.392-7.314-47.314z'
                      clipRule='evenodd'></path>
                    <path
                      fill='url(#paint1_linear_709_110)'
                      fillRule='evenodd'
                      d='M840.951 900.754c-35.698 30.525-106.949 51.343-189.022 51.343-100.732 0-185.162-31.36-207.566-73.536-8.009 24.171-9.805 51.835-9.805 69.507 0 0-5.277 86.772 55.078 147.132 0-31.34 25.406-56.74 56.745-56.74 53.716 0 53.655 46.86 53.606 84.88l-.003 3.39c0 57.71 35.271 107.18 85.432 128.04-7.492-15.41-11.695-32.72-11.695-51 0-55.04 32.313-75.54 69.867-99.36 29.881-18.95 63.08-40 85.96-82.24 11.938-22.04 18.717-47.277 18.717-74.102 0-16.495-2.563-32.392-7.314-47.314z'
                      clipRule='evenodd'></path>
                    <defs>
                      <linearGradient
                        id='paint0_linear_709_110'
                        x1='882.997'
                        x2='638.955'
                        y1='27.113'
                        y2='866.902'
                        gradientUnits='userSpaceOnUse'>
                        <stop stopColor='#000014'></stop>
                        <stop offset='1' stopColor='#150426'></stop>
                      </linearGradient>
                      <linearGradient
                        id='paint1_linear_709_110'
                        x1='1001.68'
                        x2='790.326'
                        y1='652.45'
                        y2='1094.91'
                        gradientUnits='userSpaceOnUse'>
                        <stop stopColor='#FF1639'></stop>
                        <stop
                          offset='1'
                          stopColor='#FF1639'
                          stopOpacity='0'></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  SamplePost.astro
                </div>
                <div className='file-title active-false'>
                  <svg
                    fill='#F7DF1E'
                    role='img'
                    className='tab-logo'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'>
                    <title>JavaScript icon</title>
                    <path d='M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z'></path>
                  </svg>
                  SocialButtons.js
                </div>
              </div>
            </div>
            <div id='grid-bottom-left'>
              <div className='codeblock'>
                <pre className='prism-code language-jsx'>
                  <div className='token-line'>
                    <span className='token operator'>--</span>
                    <span className='token operator'>-</span>
                    <span className='token plain'></span>
                  </div>
                  <div className='token-line'>
                    <span className='token plain'></span>
                    <span className='token comment'></span>
                  </div>
                  <div className='token-line'>
                    <span className='token plain'></span>
                    <span className='token tag punctuation'>&lt;</span>
                    <span className='token tag'>html</span>
                    <span className='token tag'> </span>
                    <span className='token tag attr-name'>lang</span>
                    <span className='token tag attr-value punctuation attr-equals'>
                      =
                    </span>
                    <span className='token tag attr-value punctuation'>"</span>
                    <span className='token tag attr-value'>en</span>
                    <span className='token tag attr-value punctuation'>"</span>
                    <span className='token tag punctuation'>&gt;</span>
                    <span className='token plain-text'></span>
                  </div>
                  <div className='token-line'>
                    <span className='token plain-text'> </span>
                    <span className='token tag punctuation'>&lt;</span>
                    <span className='token tag'>head</span>
                    <span className='token tag punctuation'>&gt;</span>
                    <span className='token plain-text'></span>
                  </div>
                  <div className='token-line'>
                    <span className='token plain-text'> </span>
                    <span className='token tag punctuation'>&lt;</span>
                    <span className='token tag'>link</span>
                    <span className='token tag'> </span>
                    <span className='token tag attr-name'>rel</span>
                    <span className='token tag attr-value punctuation attr-equals'>
                      =
                    </span>
                    <span className='token tag attr-value punctuation'>"</span>
                    <span className='token tag attr-value'>stylesheet</span>
                    <span className='token tag attr-value punctuation'>"</span>
                    <span className='token tag'> </span>
                    <span className='token tag attr-name'>href</span>
                    <span className='token tag attr-value punctuation attr-equals'>
                      =
                    </span>
                    <span className='token tag attr-value punctuation'>"</span>
                    <span className='token tag attr-value'>/blog.css</span>
                    <span className='token tag attr-value punctuation'>"</span>
                    <span className='token tag'> </span>
                    <span className='token tag punctuation'>/&gt;</span>
                    <span className='token plain-text'></span>
                  </div>
                  <div className='token-line'>
                    <span className='token plain-text'> </span>
                    <span className='token tag punctuation'>&lt;/</span>
                    <span className='token tag'>head</span>
                    <span className='token tag punctuation'>&gt;</span>
                    <span className='token plain-text'></span>
                  </div>
                  <div className='token-line'>
                    <span className='token plain-text'></span>
                  </div>
                  <div className='token-line'>
                    <span className='token plain-text'> </span>
                    <span className='token tag punctuation'>&lt;</span>
                    <span className='token tag'>body</span>
                    <span className='token tag punctuation'>&gt;</span>
                    <span className='token plain-text'></span>
                  </div>
                  <div className='token-line'>
                    <span className='token plain-text'> </span>
                    <span className='token tag punctuation'>&lt;</span>
                    <span className='token tag'>div</span>
                    <span className='token tag'> </span>
                    <span className='token tag attr-name'>className</span>
                    <span className='token tag attr-value punctuation attr-equals'>
                      =
                    </span>
                    <span className='token tag attr-value punctuation'>"</span>
                    <span className='token tag attr-value'>layout</span>
                    <span className='token tag attr-value punctuation'>"</span>
                    <span className='token tag punctuation'>&gt;</span>
                    <span className='token plain-text'></span>
                  </div>
                  <div className='token-line'>
                    <span className='token plain-text'> </span>
                    <span className='token tag punctuation'>&lt;</span>
                    <span className='token tag'>article</span>
                    <span className='token tag'> </span>
                    <span className='token tag attr-name'>className</span>
                    <span className='token tag attr-value punctuation attr-equals'>
                      =
                    </span>
                    <span className='token tag attr-value punctuation'>"</span>
                    <span className='token tag attr-value'>content</span>
                    <span className='token tag attr-value punctuation'>"</span>
                    <span className='token tag punctuation'>&gt;</span>
                    <span className='token plain-text'></span>
                  </div>
                  <div className='token-line'>
                    <span className='token plain-text'> </span>
                    <span className='token tag punctuation'>&lt;</span>
                    <span className='token tag'>section</span>
                    <span className='token tag'> </span>
                    <span className='token tag attr-name'>className</span>
                    <span className='token tag attr-value punctuation attr-equals'>
                      =
                    </span>
                    <span className='token tag attr-value punctuation'>"</span>
                    <span className='token tag attr-value'>intro</span>
                    <span className='token tag attr-value punctuation'>"</span>
                    <span className='token tag punctuation'>&gt;</span>
                    <span className='token plain-text'></span>
                  </div>
                  <div className='token-line'>
                    <span className='token plain-text'> </span>
                    <span className='token tag punctuation'>&lt;</span>
                    <span className='token tag'>h1</span>
                    <span className='token tag'> </span>
                    <span className='token tag attr-name'>className</span>
                    <span className='token tag attr-value punctuation attr-equals'>
                      =
                    </span>
                    <span className='token tag attr-value punctuation'>"</span>
                    <span className='token tag attr-value'>title</span>
                    <span className='token tag attr-value punctuation'>"</span>
                    <span className='token tag punctuation'>&gt;</span>
                    <span className='token plain-text'>
                      Post title (static)
                    </span>
                    <span className='token tag punctuation'>&lt;/</span>
                    <span className='token tag'>h1</span>
                    <span className='token tag punctuation'>&gt;</span>
                    <span className='token plain-text'></span>
                  </div>
                  <div className='token-line'>
                    <span className='token plain-text'> </span>
                    <span className='token tag punctuation'>&lt;</span>
                    <span className='token tag'>br</span>
                    <span className='token tag punctuation'>/&gt;</span>
                    <span className='token plain-text'></span>
                  </div>
                  <div className='token-line'>
                    <span className='token plain-text'> </span>
                    <span className='token tag punctuation'>&lt;</span>
                    <span className='token tag'>p</span>
                    <span className='token tag punctuation'>&gt;</span>
                    <span className='token plain-text'>
                      Post sub-title (static)
                    </span>
                    <span className='token tag punctuation'>&lt;/</span>
                    <span className='token tag'>p</span>
                    <span className='token tag punctuation'>&gt;</span>
                    <span className='token plain-text'></span>
                  </div>
                  <div className='token-line'>
                    <span className='token plain-text'> </span>
                    <span className='token tag punctuation'>&lt;/</span>
                    <span className='token tag'>section</span>
                    <span className='token tag punctuation'>&gt;</span>
                    <span className='token plain-text'></span>
                  </div>
                  <div className='token-line'>
                    <span className='token plain-text'> </span>
                    <span className='token tag punctuation'>&lt;</span>
                    <span className='token tag'>section</span>
                    <span className='token tag'> </span>
                    <span className='token tag attr-name'>className</span>
                    <span className='token tag attr-value punctuation attr-equals'>
                      =
                    </span>
                    <span className='token tag attr-value punctuation'>"</span>
                    <span className='token tag attr-value'>intro</span>
                    <span className='token tag attr-value punctuation'>"</span>
                    <span className='token tag punctuation'>&gt;</span>
                    <span className='token plain-text'></span>
                  </div>
                  <div className='token-line'>
                    <span className='token plain-text'> </span>
                    <span className='token tag punctuation'>&lt;</span>
                    <span className='token tag'>p</span>
                    <span className='token tag punctuation'>&gt;</span>
                    <span className='token plain-text'>
                      This is the post content with images that is rendered by
                      the server.
                    </span>
                    <span className='token tag punctuation'>&lt;/</span>
                    <span className='token tag'>p</span>
                    <span className='token tag punctuation'>&gt;</span>
                    <span className='token plain-text'></span>
                  </div>
                  <div className='token-line'>
                    <span className='token plain-text'> </span>
                    <span className='token tag punctuation'>&lt;</span>
                    <span className='token tag className-name'>Image</span>
                    <span className='token tag'> </span>
                    <span className='token tag attr-name'>src</span>
                    <span className='token tag attr-value punctuation attr-equals'>
                      =
                    </span>
                    <span className='token tag attr-value punctuation'>"</span>
                    <span className='token tag attr-value'>
                      https://source.unsplash.com/user/c_v_r/200x200
                    </span>
                    <span className='token tag attr-value punctuation'>"</span>
                    <span className='token tag'> </span>
                    <span className='token tag punctuation'>/&gt;</span>
                    <span className='token plain-text'></span>
                  </div>
                  <div className='token-line'>
                    <span className='token plain-text'> </span>
                    <span className='token tag punctuation'>&lt;</span>
                    <span className='token tag'>p</span>
                    <span className='token tag punctuation'>&gt;</span>
                    <span className='token plain-text'>
                      The next section contains the interactive social buttons
                      component which includes its script.
                    </span>
                    <span className='token tag punctuation'>&lt;/</span>
                    <span className='token tag'>p</span>
                    <span className='token tag punctuation'>&gt;</span>
                    <span className='token plain-text'></span>
                  </div>
                  <div className='token-line'>
                    <span className='token plain-text'> </span>
                    <span className='token tag punctuation'>&lt;/</span>
                    <span className='token tag'>section</span>
                    <span className='token tag punctuation'>&gt;</span>
                    <span className='token plain-text'></span>
                  </div>
                  <div className='token-line'>
                    <span className='token plain-text'> </span>
                    <span className='token tag punctuation'>&lt;</span>
                    <span className='token tag'>section</span>
                    <span className='token tag'> </span>
                    <span className='token tag attr-name'>className</span>
                    <span className='token tag attr-value punctuation attr-equals'>
                      =
                    </span>
                    <span className='token tag attr-value punctuation'>"</span>
                    <span className='token tag attr-value'>social</span>
                    <span className='token tag attr-value punctuation'>"</span>
                    <span className='token tag punctuation'>&gt;</span>
                    <span className='token plain-text'></span>
                  </div>
                  <div className='token-line'>
                    <span className='token plain-text'> </span>
                    <span className='token tag punctuation'>&lt;</span>
                    <span className='token tag'>div</span>
                    <span className='token tag punctuation'>&gt;</span>
                    <span className='token plain-text'></span>
                  </div>
                  <div className='token-line'>
                    <span className='token plain-text'> </span>
                    <span className='token tag punctuation'>&lt;</span>
                    <span className='token tag className-name'>
                      SocialButtons
                    </span>
                    <span className='token tag'> </span>
                    <span className='token tag attr-name namespace'>
                      client:
                    </span>
                    <span className='token tag attr-name'>visible</span>
                    <span className='token tag punctuation'>&gt;</span>
                    <span className='token tag punctuation'>&lt;/</span>
                    <span className='token tag className-name'>
                      SocialButtons
                    </span>
                    <span className='token tag punctuation'>&gt;</span>
                    <span className='token plain-text'></span>
                  </div>
                  <div className='token-line'>
                    <span className='token plain-text'> </span>
                    <span className='token tag punctuation'>&lt;/</span>
                    <span className='token tag'>div</span>
                    <span className='token tag punctuation'>&gt;</span>
                    <span className='token plain-text'></span>
                  </div>
                  <div className='token-line'>
                    <span className='token plain-text'> </span>
                    <span className='token tag punctuation'>&lt;/</span>
                    <span className='token tag'>section</span>
                    <span className='token tag punctuation'>&gt;</span>
                    <span className='token plain-text'></span>
                  </div>
                  <div className='token-line'>
                    <span className='token plain-text'> </span>
                    <span className='token tag punctuation'>&lt;/</span>
                    <span className='token tag'>article</span>
                    <span className='token tag punctuation'>&gt;</span>
                    <span className='token plain-text'></span>
                  </div>
                  <div className='token-line'>
                    <span className='token plain-text'> </span>
                    <span className='token tag punctuation'>&lt;/</span>
                    <span className='token tag'>div</span>
                    <span className='token tag punctuation'>&gt;</span>
                    <span className='token plain-text'></span>
                  </div>
                  <div className='token-line'>
                    <span className='token plain-text'> </span>
                    <span className='token tag punctuation'>&lt;/</span>
                    <span className='token tag'>body</span>
                    <span className='token tag punctuation'>&gt;</span>
                    <span className='token plain-text'></span>
                  </div>
                  <div className='token-line'>
                    <span className='token plain-text'></span>
                    <span className='token tag punctuation'>&lt;/</span>
                    <span className='token tag'>html</span>
                    <span className='token tag punctuation'>&gt;</span>
                  </div>
                </pre>
              </div>
            </div>
          </div>
        </div>
        <p>
          The <code className='leading-6'>SocialButtons</code> component is a
          Preact component with its HTML, and corresponding event handlers
          included.
        </p>
        <p>
          The component is embedded in the page at run time and hydrated on the
          client-side so that the click events function as required.
        </p>
        <div className='mx-auto relative'>
          <img
            sizes='100vw'
            srcSet='/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--izqxk9vw4ma.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--izqxk9vw4ma.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--izqxk9vw4ma.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--izqxk9vw4ma.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--izqxk9vw4ma.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--izqxk9vw4ma.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--izqxk9vw4ma.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--izqxk9vw4ma.png&amp;w=3840&amp;q=75 3840w'
            src='/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--izqxk9vw4ma.png&amp;w=3840&amp;q=75'
            decoding='async'
            data-nimg='fill'
            className='rounded-md'
            loading='lazy'
          />
        </div>
        <p>
          Astro allows for a clean separation between HTML, CSS, and scripts and
          encourages component-based design. It is easy to install and start
          building websites with this framework.
        </p>
        <hr className='border mb-12 mt-12 border-neutral-150 dark:border-neutral-700/80' />
        <h2
          id='pros-and-cons'
          className='font-bold leading-5 mb-6 mt-10 text-2xl dark:text-neutral-100'>
          Pros and Cons
        </h2>
        <p>
          The Islands architecture combines ideas from different rendering
          techniques such as server-side rendering, static site generation, and
          partial hydration. Some of the potential benefits of implementing
          islands are as follows.
        </p>
        <ol className='mb-5 mt-5 pl-7 list-decimal marker:text-neutral-300 text-base'>
          <li className='mb-3 mt-3 pl-1.5 dark:text-neutral-100'>
            <strong className='dark:text-white'>Performance</strong>: Reduces
            the amount of JavaScript code shipped to the client. The code sent
            only consists of the script required for interactive components,
            which is much less than the script needed to recreate the virtual
            DOM for the entire page and rehydrate all the elements on the page.
            The smaller size of JavaScript automatically corresponds to faster
            page loads and Time to Interactive (TTI).
          </li>
        </ol>
        <blockquote className='text-sm rounded-sm p-1 pl-8 pr-5 my-2 border-l-3 border-neutral-300 bg-neutral-50 dark:border-neutral-500 dark:bg-neutral-800'>
          <p>
            <a
              className='mdx-a font-semibold text-underline'
              href='https://docs.astro.build/comparing-astro-vs-other-tools#nextjs-vs-astro'>
              Comparisons
            </a>{' '}
            for Astro with documentation websites created for Next.js and
            Nuxt.js have shown an 83% reduction in JavaScript code.{' '}
            <a
              className='mdx-a font-semibold text-underline'
              href='https://divriots.com/blog/our-experience-with-astro/'>
              Other users
            </a>{' '}
            have also reported performance improvements with Astro.
          </p>
        </blockquote>
        <div className='mx-auto relative'>
          <img
            sizes='100vw'
            srcSet='/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--x9kvrprpno.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--x9kvrprpno.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--x9kvrprpno.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--x9kvrprpno.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--x9kvrprpno.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--x9kvrprpno.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--x9kvrprpno.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--x9kvrprpno.png&amp;w=3840&amp;q=75 3840w'
            src='/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddxwdqwkr%2Fimage%2Fupload%2Ff_auto%2Fv1633284886%2Fpatterns.dev%2Ftheislandsarch--x9kvrprpno.png&amp;w=3840&amp;q=75'
            decoding='async'
            data-nimg='fill'
            className='rounded-md'
            loading='lazy'
          />
        </div>
        <blockquote className='text-sm rounded-sm p-1 pl-8 pr-5 my-2 border-l-3 border-neutral-300 bg-neutral-50 dark:border-neutral-500 dark:bg-neutral-800'>
          <p>
            Image Courtesy:{' '}
            <a
              className='mdx-a font-semibold text-underline'
              href='https://divriots.com/blog/our-experience-with-astro/'>
              https://divriots.com/blog/our-experience-with-astro/
            </a>
          </p>
        </blockquote>
        <ol
          start='2'
          className='mb-5 mt-5 pl-7 list-decimal marker:text-neutral-300 text-base'>
          <li className='mb-3 mt-3 pl-1.5 dark:text-neutral-100'>
            <strong className='dark:text-white'>SEO:</strong> Since all of the
            static content is rendered on the server; pages are SEO friendly.
          </li>
          <li className='mb-3 mt-3 pl-1.5 dark:text-neutral-100'>
            <strong className='dark:text-white'>
              Prioritizes important content:
            </strong>{' '}
            Key content (especially for blogs, news articles, and product pages)
            is available almost immediately to the user. Secondary functionality
            for interactivity is usually required after consuming the key
            content becomes available gradually.
          </li>
          <li className='mb-3 mt-3 pl-1.5 dark:text-neutral-100'>
            <strong className='dark:text-white'>Accessibility:</strong> The use
            of standard static HTML links to access other pages helps to improve
            the accessibility of the website.
          </li>
          <li className='mb-3 mt-3 pl-1.5 dark:text-neutral-100'>
            <strong className='dark:text-white'>Component-based:</strong> The
            architecture offers all advantages of component-based architecture,
            such as reusability and maintainability.
          </li>
        </ol>
        <p>
          Despite the advantages, the concept is still in a nascent stage. The
          limited support results in some disadvantages.
        </p>
        <ol className='mb-5 mt-5 pl-7 list-decimal marker:text-neutral-300 text-base'>
          <li className='mb-3 mt-3 pl-1.5 dark:text-neutral-100'>
            The only options available to developers to implement Islands are to
            use one of the few frameworks available or develop the architecture
            yourself. Migrating existing sites to Astro or Marko would require
            additional efforts.
          </li>
          <li className='mb-3 mt-3 pl-1.5 dark:text-neutral-100'>
            Besides Jason's initial post, there is little discussion available
            on the idea.
          </li>
          <li className='mb-3 mt-3 pl-1.5 dark:text-neutral-100'>
            <a
              className='mdx-a font-semibold text-underline'
              href='https://github.com/bensmithett/tropical-utils/tree/main/packages/tropical-islands'>
              New frameworks
            </a>{' '}
            claim to support the Islands architecture making it difficult to
            filter the ones which will work for you.
          </li>
          <li className='mb-3 mt-3 pl-1.5 dark:text-neutral-100'>
            The architecture is not suitable for highly interactive pages like
            social media apps which would probably require thousands of islands.
          </li>
        </ol>
        <p>
          The Islands architecture concept is relatively new but likely to gain
          speed due to its performance advantages. It underscores the use of SSR
          for rendering static content while supporting interactivity through
          dynamic components with minimal impact on the page's performance. We
          hope to see many more players in this space in the future and have a
          wider choice of implementation options available.
        </p>
        <hr className='border mb-12 mt-12 border-neutral-150 dark:border-neutral-700/80' />
        <h3
          id='further-reading'
          className='text-xl font-bold leading-4 mb-6 mt-8 dark:text-neutral-100'>
          Further reading
        </h3>
        <ul className='mb-5 mt-5 pl-7 list-disc marker:text-neutral-300 text-base'>
          <li className='mb-3 mt-3 pl-1.5 dark:text-neutral-100'>
            <a
              className='mdx-a font-semibold text-underline'
              href='https://jasonformat.com/islands-architecture/'>
              Islands Architecture
            </a>
          </li>
          <li className='mb-3 mt-3 pl-1.5 dark:text-neutral-100'>
            <a
              className='mdx-a font-semibold text-underline'
              href='https://dev.to/this-is-learning/is-0kb-of-javascript-in-your-future-48og'>
              Is 0KB of JavaScript in your future
            </a>
          </li>
          <li className='mb-3 mt-3 pl-1.5 dark:text-neutral-100'>
            <a
              className='mdx-a font-semibold text-underline'
              href='https://changelog.com/jsparty/105'>
              Modernizing Etsy's codebase with React
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
