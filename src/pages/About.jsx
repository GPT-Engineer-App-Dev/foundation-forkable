import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">About This App</CardTitle>
          <CardDescription>Learn more about the bare-bones structure</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            This bare-bones app is built using modern web technologies and best practices. It includes:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>React for building user interfaces</li>
            <li>React Router for navigation</li>
            <li>Tailwind CSS for styling</li>
            <li>Shadcn UI components for a consistent look and feel</li>
          </ul>
          <p>
            Feel free to modify and extend this structure to create your own unique web application!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;