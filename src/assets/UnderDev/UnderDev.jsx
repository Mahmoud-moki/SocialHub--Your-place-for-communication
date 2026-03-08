import { Card, CardBody, CardHeader, Button } from "@heroui/react";
import { IconTools, IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function UnderDev() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <Card className="max-w-md w-full shadow-lg">
                <CardHeader className="flex flex-col items-center gap-2">
                    <IconTools size={48} className="text-warning" />
                    <h1 className="text-2xl font-bold">Page Under Development</h1>
                </CardHeader>

                <CardBody className="text-center text-gray-600">
                    <p className="mb-6">
                        We're currently working on this feature.
                        It will be available soon 🚀
                    </p>

                    <Button
                        as={Link}
                        to="/home"
                        color="primary"
                        startContent={<IconArrowLeft size={18} />}
                    >
                        Back to Home
                    </Button>
                </CardBody>
            </Card>
        </div>
    );
}