import { HomePage } from "@/src/app/home/page";
import { ContentLayout } from "@/src/components/layout";

export default function HomeRoute() {
  return (
    <ContentLayout title="">
      <HomePage />
    </ContentLayout>
  );
}
