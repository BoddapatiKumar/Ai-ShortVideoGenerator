import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";

const CustomLoading = ({ loading }) => {
  return (
    <AlertDialog open={loading}>
      <AlertDialogContent className="bg-white">
        <div className="bg-white flex flex-col items-center my-10 justify-center">
          <Image src="/progress.gif" alt="progress" width={100} height={100} />
          <AlertDialogTitle>Generating your video...</AlertDialogTitle>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CustomLoading;
