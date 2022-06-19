export default function resolveProductionUrl(document) {
  return `https://sanity-capri-react.netlify.app/preview?slug=${document.slug.current}`;
}
