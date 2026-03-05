import { Alert } from "@heroui/react";

export default function App() {
  return (
    <div className="flex justify-center mt-10">
      <Alert
        title="Hiiii"
        description="Thanks for subscribing!"
        color="success"
        variant="faded"
        hideIcon
      />
    </div>
  );
}
