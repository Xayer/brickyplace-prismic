export default function (doc) {
  if (doc.type === 'blog-posts') {
    return `/article/${doc.uid}`
  }
  return '/'
}
