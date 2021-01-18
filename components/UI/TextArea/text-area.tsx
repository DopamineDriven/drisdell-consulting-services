import cn from 'classnames';
import css from './text-area.module.css';
import React, {
	TextareaHTMLAttributes,
	useState,
	ChangeEvent,
	FC
} from 'react';

export interface TextareaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	className?: string;
	onChange: (...args: any[]) => any;
}
const Textarea: FC<TextareaProps> = ({
	className,
	children,
	onChange,
	...rest
}) => {
	const [textAreaValue, setTextAreaValue] = useState<string>('');
	const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
		setTextAreaValue(e.target.value);
	};

	return (
		<label>
			<textarea
				rows={5}
				value={textAreaValue}
				className={cn(className, css.root)}
				onChange={handleOnChange}
				autoCorrect='off'
				autoCapitalize='off'
				spellCheck='false'
				{...rest}
			/>
		</label>
	);
};

export default Textarea;
//

/*
his way, the user will see a page rendered _instantly_, and the client will kick off a network request to ensure it has the latest bookmarks data.
  const { data } = useQuery(GET_BOOKMARKS, { fetchPolicy: 'cache-and-network' })
  const { bookmarks } = data
  const { isMe } = useAuth()

  return (
    <div>
      <h1>Bookmarks</h1>
      {isMe && <AddBookmark />}
      {bookmarks && <BookmarksList bookmarks={bookmarks} />}
    </div>
  )
}

export async function getStaticProps() {
  const client = await getStaticApolloClient()
  await client.query({ query: GET_BOOKMARKS })
  return {
    props: {
      apolloStaticCache: client.cache.extract(),
    },
  }
}

export default withApollo(Bookmarks)

Adding bookmarks

Okay, so now I can progressively disclose UI on the client once the site knows it's me. But because my GraphQL endpoint is exposed to the internet, we'll need to make sure that random people can't write their own POSTs to maliciously save bookmarks.

Here's the mutation resolver on the backend checking the isMe flag set in the context object, some input validation, and then persisting the bookmark.

// graphql/resolvers/mutations/bookmarks.ts

import { URL } from 'url'
import { AuthenticationError, UserInputError } from 'apollo-server-micro'
import firebase from '~/graphql/api/firebase'
import getBookmarkMetaData from './getBookmarkMetaData'

function isValidUrl(string) {
  try {
    new URL(string)
    return true
  } catch (err) {
    return false
  }
}

export async function addBookmark(_, { url }, { isMe }) {
  if (!isMe) throw new AuthenticationError('You must be logged in')
  if (!isValidUrl(url)) throw new UserInputError('URL was invalid')

  const metadata = await getBookmarkMetaData(url)

  const id = await firebase
    .collection('bookmarks')
    .add({
      createdAt: new Date(),
      ...metadata,
    })
    .then(({ id }) => id)

  return await firebase
    .collection('bookmarks')
    .doc(id)
    .get()
    .then((doc) => doc.data())
    .then((res) => ({ ...res, id }))
}

Conclusion

This is all a bit...complicated, to say the least. But when it all works, it actually works quite well! And as I incrementally add more mutation types, it should all Just Work™.

At the end of the day, the site gets all the benefits of super-fast initial page loads thanks to static generation at build time, with all the downstream client side functionality of a regular React application.

I hope the pseudocode above will help unblock anyone that is following a similar path as me, but just in case, here's the full pull request containing all the changes that eventually made this work. You'll notice I spent some time hacking in automatic type generation and hook generation using GraphQL Code Generator, and added some polish to the overall experience (like a /logout page which clears the cookie, in case I'm on a device I don't own).

Please don't hesitate to reach out with questions, I'd love to help! Otherwise, the Next.js discussions have been a fantastic resource for finding solutions to a lot of common problems.

Good luck!
A small favor
*/
