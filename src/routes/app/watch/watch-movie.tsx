import WatchMovie from "@/src/app/watch/page";
import { ContentLayout } from "@/src/components/layout";

export default function MovieListRoute() {
  return (
    <ContentLayout title="">
      <WatchMovie />
    </ContentLayout>
  );
}
