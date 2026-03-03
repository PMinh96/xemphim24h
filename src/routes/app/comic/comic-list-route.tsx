import ComicList from "@/src/app/comic-list/page";
import NovelList from "@/src/app/novel-list/page";
import { ContentLayout } from "@/src/components/layout";

export default function comicListRoute() {
  return (
    <ContentLayout title="Truyện Tranh">
      <ComicList />
    </ContentLayout>
  );
}
