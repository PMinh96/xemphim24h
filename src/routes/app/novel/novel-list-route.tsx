import NovelList from "@/src/app/novel-list/page";
import { ContentLayout } from "@/src/components/layout";

export default function NovelListRoute() {
  return (
    <ContentLayout title="">
      <NovelList />
    </ContentLayout>
  );
}
