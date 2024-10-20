import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'

import Card from '~/components/Card'
import Container from '~/components/Container'
import Welcome from '~/components/Welcome'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { getPosts, getReviews, type Post, postsQuery, reviewsQuery } from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'
import Image from 'next/image'
import { urlForImage } from '~/lib/sanity.image'

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    posts: Post[]
  reviews: any[]
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const posts = await getPosts(client)
  const reviews = await getReviews(client)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      posts,
      reviews
    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {

  const [posts] = useLiveQuery<Post[]>(props.posts, postsQuery)
  const [reviews] = useLiveQuery(props.reviews, reviewsQuery)
  console.log(reviews, "CHECK REviEWS")
  return (
    <Container>
      <section>
        {posts.length ? (
          posts.map((post) => <Card key={post._id} post={post} />)
        ) : (
          <Welcome />
        )}
      </section>
      {reviews.length ? (
        reviews.map((review) => (
          review.images.map((image) => (
            <Image
              key={image._key}
              src={urlForImage(image).url()}
              width={250}
              height={300}
              alt=""
            />
          ))
        ))
      ) : (
        <p>No reviews available</p>
      )}
    </Container>
  )
}
