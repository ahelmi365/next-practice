import Feature from "@/app/components/feature/Feature";

const FeatuersPage = () => {
  return (
    <div className="max-w-6xl mx-auto text-center px-4">
      <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
        {/* Existing features with links */}
        <Feature
          link="/features/hybrid-rendering"
          title="Hybrid Rendering"
          description="Static and dynamic rendering on a per-page basis"
        />

        <Feature
          link="/features/route-handlers"
          title="Route Handlers"
          description="Build your API endpoints within Next.js"
        />

        <Feature
          link="/features/server-components"
          title="Server Components"
          description="Automatic code-splitting and improved performance"
        />

        <Feature
          link="/features/file-based-routing"
          title="File-based Routing"
          description="Create routes by adding files to your app directory"
        />

        <Feature
          link="/features/image-optimization"
          title="Image Optimization"
          description="Automatic image optimization and modern formats"
        />

        <Feature
          link="/features/data-fetching"
          title="Data Fetching"
          description="Simplified data fetching with Server Components"
        />

        <Feature
          link="/features/css-support"
          title="CSS Support"
          description="Built-in CSS and Sass support with zero config"
        />

        <Feature
          link="/features/middleware"
          title="Middleware"
          description="Run code before requests are completed"
        />
      </div>
    </div>
  );
};

export default FeatuersPage;
