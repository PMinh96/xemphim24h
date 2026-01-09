import MovieList from "@/src/app/movies/page";
import { ContentLayout } from "@/src/components/layout";

export default function MovieListRoute() {
  return (
    <ContentLayout title="">
      <MovieList />
    </ContentLayout>
  );
}
