import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-2xl mx-auto bg-green-50 dark:bg-green-900">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-green-800 dark:text-green-100">About This Green App</CardTitle>
          <CardDescription className="text-green-600 dark:text-green-300">Learn more about our eco-friendly structure</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-green-700 dark:text-green-200">
            This green-themed app is built using modern web technologies and best practices. It includes:
          </p>
          <ul className="list-disc list-inside mb-4 text-green-700 dark:text-green-200">
            <li>React for building user interfaces</li>
            <li>React Router for navigation</li>
            <li>Tailwind CSS for styling</li>
            <li>Shadcn UI components for a consistent look and feel</li>
            <li>A refreshing green color scheme</li>
          </ul>
          <p className="text-green-700 dark:text-green-200">
            Feel free to modify and extend this structure to create your own unique, eco-friendly web application!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;