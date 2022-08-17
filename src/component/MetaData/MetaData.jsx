import { Helmet } from "react-helmet";
export default function MetaData({ children, title }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      {children}
    </Helmet>
  );
}
