import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">About GitHub Repository Explorer</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>About This Project</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose dark:prose-invert">
            <p className="mb-4">
              GitHub Repository Explorer is a modern web application built with Next.js, TypeScript, and TailwindCSS. 
              It allows users to easily search and explore GitHub repositories for any user.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Features</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Search repositories by GitHub username</li>
              <li>View repository details including stars and primary language</li>
              <li>Direct links to GitHub repositories</li>
              <li>Responsive design that works on all devices</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">Technology Stack</h3>
            <ul className="list-disc pl-6">
              <li>Next.js - React framework for production</li>
              <li>TypeScript - For type safety and better developer experience</li>
              <li>TailwindCSS - For modern, responsive styling</li>
              <li>ShadcnUI - For beautiful, accessible components</li>
              <li>GitHub API - For fetching repository data</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
