import { Link } from "react-router-dom";
import Button from "../components/Button";
import ContentBox from "../components/contents/ContentBox";
import PageWrapper from "../components/PageWrapper";

// 404 page not found error page
const NotFoundPage = () => {
  return (
    <PageWrapper>
      <ContentBox name="404 Page not found">
        <div className="w-full border-b border-b-glitch-box"></div>
        <div className="px-5 py-5">
          <h2 className="text-lg text-rose-500">Error</h2>
          <h1 className="text-6xl text-white font-bold">404</h1>
          <h2 className="text-lg text-glitch-orange">Page not found</h2>
          <Link to={"/"}>
            <Button className="hover:bg-glitch-orange mt-5">
              <span>Back to home</span>
            </Button>
          </Link>
        </div>
      </ContentBox>
    </PageWrapper>
  );
};

export default NotFoundPage;
