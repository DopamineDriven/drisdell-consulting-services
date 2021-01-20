import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
import {
	FieldPolicy,
	FieldReadFunction,
	TypePolicies,
	TypePolicy
} from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
	{ [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
	{ [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
};

/** The root entry point into the Graph */
export type RootQuery = {
	__typename?: 'RootQuery';
	/** An object of the about Type. About  */
	about: Maybe<About>;
	/**
	 * A about object
	 * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
	 */
	aboutBy: Maybe<About>;
	/** Connection between the RootQuery type and the about type */
	abouts: Maybe<RootQueryToAboutConnection>;
	/** Entry point to get all settings for the site */
	allSettings: Maybe<Settings>;
	/** Connection between the RootQuery type and the category type */
	categories: Maybe<RootQueryToCategoryConnection>;
	/** A 0bject */
	category: Maybe<Category>;
	/** Returns a Comment */
	comment: Maybe<Comment>;
	/** Connection between the RootQuery type and the Comment type */
	comments: Maybe<RootQueryToCommentConnection>;
	/** An object of the consultant Type. Children posts of the Consultants Page */
	consultant: Maybe<Consultant>;
	/**
	 * A consultant object
	 * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
	 */
	consultantBy: Maybe<Consultant>;
	/** Connection between the RootQuery type and the consultant type */
	consultants: Maybe<RootQueryToConsultantConnection>;
	/** A node used to manage content */
	contentNode: Maybe<ContentNode>;
	/** Connection between the RootQuery type and the ContentNode type */
	contentNodes: Maybe<RootQueryToContentNodeConnection>;
	/** Fetch a Content Type node by unique Identifier */
	contentType: Maybe<ContentType>;
	/** Connection between the RootQuery type and the ContentType type */
	contentTypes: Maybe<RootQueryToContentTypeConnection>;
	discussionSettings: Maybe<DiscussionSettings>;
	generalSettings: Maybe<GeneralSettings>;
	/** An object of the mediaItem Type.  */
	mediaItem: Maybe<MediaItem>;
	/**
	 * A mediaItem object
	 * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
	 */
	mediaItemBy: Maybe<MediaItem>;
	/** Connection between the RootQuery type and the mediaItem type */
	mediaItems: Maybe<RootQueryToMediaItemConnection>;
	/** A WordPress navigation menu */
	menu: Maybe<Menu>;
	/** A WordPress navigation menu item */
	menuItem: Maybe<MenuItem>;
	/** Connection between the RootQuery type and the MenuItem type */
	menuItems: Maybe<RootQueryToMenuItemConnection>;
	/** Connection between the RootQuery type and the Menu type */
	menus: Maybe<RootQueryToMenuConnection>;
	/** Fetches an object given its ID */
	node: Maybe<Node>;
	nodeByUri: Maybe<UniformResourceIdentifiable>;
	/** An object of the page Type.  */
	page: Maybe<Page>;
	/**
	 * A page object
	 * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
	 */
	pageBy: Maybe<Page>;
	/** Connection between the RootQuery type and the page type */
	pages: Maybe<RootQueryToPageConnection>;
	/** A WordPress plugin */
	plugin: Maybe<Plugin>;
	/** Connection between the RootQuery type and the Plugin type */
	plugins: Maybe<RootQueryToPluginConnection>;
	/** An object of the position Type. Positions for consultants */
	position: Maybe<Position>;
	/**
	 * A position object
	 * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
	 */
	positionBy: Maybe<Position>;
	/** Connection between the RootQuery type and the position type */
	positions: Maybe<RootQueryToPositionConnection>;
	/** An object of the post Type.  */
	post: Maybe<Post>;
	/**
	 * A post object
	 * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
	 */
	postBy: Maybe<Post>;
	/** A 0bject */
	postFormat: Maybe<PostFormat>;
	/** Connection between the RootQuery type and the postFormat type */
	postFormats: Maybe<RootQueryToPostFormatConnection>;
	/** Connection between the RootQuery type and the post type */
	posts: Maybe<RootQueryToPostConnection>;
	readingSettings: Maybe<ReadingSettings>;
	/** Connection between the RootQuery type and the EnqueuedScript type */
	registeredScripts: Maybe<RootQueryToEnqueuedScriptConnection>;
	/** Connection between the RootQuery type and the EnqueuedStylesheet type */
	registeredStylesheets: Maybe<RootQueryToEnqueuedStylesheetConnection>;
	/** Connection between the RootQuery type and the ContentRevisionUnion type */
	revisions: Maybe<RootQueryToContentRevisionUnionConnection>;
	/** Returns seo site data */
	seo: Maybe<SeoConfig>;
	/** A 0bject */
	tag: Maybe<Tag>;
	/** Connection between the RootQuery type and the tag type */
	tags: Maybe<RootQueryToTagConnection>;
	/** Connection between the RootQuery type and the Taxonomy type */
	taxonomies: Maybe<RootQueryToTaxonomyConnection>;
	/** Fetch a Taxonomy node by unique Identifier */
	taxonomy: Maybe<Taxonomy>;
	/** A node in a taxonomy used to group and relate content nodes */
	termNode: Maybe<TermNode>;
	/** Connection between the RootQuery type and the TermNode type */
	terms: Maybe<RootQueryToTermNodeConnection>;
	/** An object of the testimonial Type. Testimonials */
	testimonial: Maybe<Testimonial>;
	/**
	 * A testimonial object
	 * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
	 */
	testimonialBy: Maybe<Testimonial>;
	/** Connection between the RootQuery type and the testimonial type */
	testimonials: Maybe<RootQueryToTestimonialConnection>;
	/** A Theme object */
	theme: Maybe<Theme>;
	/** Connection between the RootQuery type and the Theme type */
	themes: Maybe<RootQueryToThemeConnection>;
	/** Returns a user */
	user: Maybe<User>;
	/** Returns a user role */
	userRole: Maybe<UserRole>;
	/** Connection between the RootQuery type and the UserRole type */
	userRoles: Maybe<RootQueryToUserRoleConnection>;
	/** Connection between the RootQuery type and the User type */
	users: Maybe<RootQueryToUserConnection>;
	/** Returns the current user */
	viewer: Maybe<User>;
	writingSettings: Maybe<WritingSettings>;
};

/** The root entry point into the Graph */
export type RootQueryAboutArgs = {
	id: Scalars['ID'];
	idType: Maybe<AboutIdType>;
	asPreview: Maybe<Scalars['Boolean']>;
};

/** The root entry point into the Graph */
export type RootQueryAboutByArgs = {
	id: Maybe<Scalars['ID']>;
	aboutId: Maybe<Scalars['Int']>;
	uri: Maybe<Scalars['String']>;
	slug: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryAboutsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<RootQueryToAboutConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryCategoriesArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<RootQueryToCategoryConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryCategoryArgs = {
	id: Scalars['ID'];
	idType: Maybe<CategoryIdType>;
};

/** The root entry point into the Graph */
export type RootQueryCommentArgs = {
	id: Scalars['ID'];
};

/** The root entry point into the Graph */
export type RootQueryCommentsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<RootQueryToCommentConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryConsultantArgs = {
	id: Scalars['ID'];
	idType: Maybe<ConsultantIdType>;
	asPreview: Maybe<Scalars['Boolean']>;
};

/** The root entry point into the Graph */
export type RootQueryConsultantByArgs = {
	id: Maybe<Scalars['ID']>;
	consultantId: Maybe<Scalars['Int']>;
	uri: Maybe<Scalars['String']>;
	slug: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryConsultantsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<RootQueryToConsultantConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryContentNodeArgs = {
	id: Scalars['ID'];
	idType: Maybe<ContentNodeIdTypeEnum>;
	contentType: Maybe<ContentTypeEnum>;
	asPreview: Maybe<Scalars['Boolean']>;
};

/** The root entry point into the Graph */
export type RootQueryContentNodesArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<RootQueryToContentNodeConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryContentTypeArgs = {
	id: Scalars['ID'];
	idType: Maybe<ContentTypeIdTypeEnum>;
};

/** The root entry point into the Graph */
export type RootQueryContentTypesArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryMediaItemArgs = {
	id: Scalars['ID'];
	idType: Maybe<MediaItemIdType>;
	asPreview: Maybe<Scalars['Boolean']>;
};

/** The root entry point into the Graph */
export type RootQueryMediaItemByArgs = {
	id: Maybe<Scalars['ID']>;
	mediaItemId: Maybe<Scalars['Int']>;
	uri: Maybe<Scalars['String']>;
	slug: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryMediaItemsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<RootQueryToMediaItemConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryMenuArgs = {
	id: Scalars['ID'];
	idType: Maybe<MenuNodeIdTypeEnum>;
};

/** The root entry point into the Graph */
export type RootQueryMenuItemArgs = {
	id: Scalars['ID'];
	idType: Maybe<MenuItemNodeIdTypeEnum>;
};

/** The root entry point into the Graph */
export type RootQueryMenuItemsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<RootQueryToMenuItemConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryMenusArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<RootQueryToMenuConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryNodeArgs = {
	id: Maybe<Scalars['ID']>;
};

/** The root entry point into the Graph */
export type RootQueryNodeByUriArgs = {
	uri: Scalars['String'];
};

/** The root entry point into the Graph */
export type RootQueryPageArgs = {
	id: Scalars['ID'];
	idType: Maybe<PageIdType>;
	asPreview: Maybe<Scalars['Boolean']>;
};

/** The root entry point into the Graph */
export type RootQueryPageByArgs = {
	id: Maybe<Scalars['ID']>;
	pageId: Maybe<Scalars['Int']>;
	uri: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryPagesArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<RootQueryToPageConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryPluginArgs = {
	id: Scalars['ID'];
};

/** The root entry point into the Graph */
export type RootQueryPluginsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryPositionArgs = {
	id: Scalars['ID'];
	idType: Maybe<PositionIdType>;
	asPreview: Maybe<Scalars['Boolean']>;
};

/** The root entry point into the Graph */
export type RootQueryPositionByArgs = {
	id: Maybe<Scalars['ID']>;
	positionId: Maybe<Scalars['Int']>;
	uri: Maybe<Scalars['String']>;
	slug: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryPositionsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<RootQueryToPositionConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryPostArgs = {
	id: Scalars['ID'];
	idType: Maybe<PostIdType>;
	asPreview: Maybe<Scalars['Boolean']>;
};

/** The root entry point into the Graph */
export type RootQueryPostByArgs = {
	id: Maybe<Scalars['ID']>;
	postId: Maybe<Scalars['Int']>;
	uri: Maybe<Scalars['String']>;
	slug: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryPostFormatArgs = {
	id: Scalars['ID'];
	idType: Maybe<PostFormatIdType>;
};

/** The root entry point into the Graph */
export type RootQueryPostFormatsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<RootQueryToPostFormatConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryPostsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<RootQueryToPostConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryRegisteredScriptsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryRegisteredStylesheetsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryRevisionsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<RootQueryToContentRevisionUnionConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryTagArgs = {
	id: Scalars['ID'];
	idType: Maybe<TagIdType>;
};

/** The root entry point into the Graph */
export type RootQueryTagsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<RootQueryToTagConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryTaxonomiesArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryTaxonomyArgs = {
	id: Scalars['ID'];
	idType: Maybe<TaxonomyIdTypeEnum>;
};

/** The root entry point into the Graph */
export type RootQueryTermNodeArgs = {
	id: Scalars['ID'];
	idType: Maybe<TermNodeIdTypeEnum>;
	taxonomy: Maybe<TaxonomyEnum>;
};

/** The root entry point into the Graph */
export type RootQueryTermsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<RootQueryToTermNodeConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryTestimonialArgs = {
	id: Scalars['ID'];
	idType: Maybe<TestimonialIdType>;
	asPreview: Maybe<Scalars['Boolean']>;
};

/** The root entry point into the Graph */
export type RootQueryTestimonialByArgs = {
	id: Maybe<Scalars['ID']>;
	testimonialId: Maybe<Scalars['Int']>;
	uri: Maybe<Scalars['String']>;
	slug: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryTestimonialsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<RootQueryToTestimonialConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryThemeArgs = {
	id: Scalars['ID'];
};

/** The root entry point into the Graph */
export type RootQueryThemesArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryUserArgs = {
	id: Scalars['ID'];
	idType: Maybe<UserNodeIdTypeEnum>;
};

/** The root entry point into the Graph */
export type RootQueryUserRoleArgs = {
	id: Scalars['ID'];
};

/** The root entry point into the Graph */
export type RootQueryUserRolesArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryUsersArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<RootQueryToUserConnectionWhereArgs>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum AboutIdType {
	/** Identify a resource by the Database ID. */
	DatabaseId = 'DATABASE_ID',
	/** Identify a resource by the (hashed) Global ID. */
	Id = 'ID',
	/** Identify a resource by the URI. */
	Uri = 'URI',
	/** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
	Slug = 'SLUG'
}

/** The about type */
export type About = Node &
	ContentNode &
	DatabaseIdentifier &
	NodeWithTemplate &
	UniformResourceIdentifiable &
	NodeWithTitle &
	NodeWithContentEditor &
	NodeWithAuthor &
	NodeWithFeaturedImage &
	NodeWithExcerpt &
	NodeWithComments &
	NodeWithTrackbacks &
	NodeWithRevisions &
	NodeWithPageAttributes &
	MenuItemLinkable & {
		__typename?: 'About';
		/**
		 * The id field matches the WP_Post-&gt;ID field.
		 * @deprecated Deprecated in favor of the databaseId field
		 */
		aboutId: Scalars['Int'];
		/** Connection between the NodeWithAuthor type and the User type */
		author: Maybe<NodeWithAuthorToUserConnectionEdge>;
		/** The database identifier of the author of the node */
		authorDatabaseId: Maybe<Scalars['Int']>;
		/** The globally unique identifier of the author of the node */
		authorId: Maybe<Scalars['ID']>;
		/** Connection between the about type and the category type */
		categories: Maybe<AboutToCategoryConnection>;
		/** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
		commentCount: Maybe<Scalars['Int']>;
		/** Whether the comments are open or closed for this particular post. */
		commentStatus: Maybe<Scalars['String']>;
		/** Connection between the about type and the Comment type */
		comments: Maybe<AboutToCommentConnection>;
		/** The content of the post. */
		content: Maybe<Scalars['String']>;
		/** Connection between the ContentNode type and the ContentType type */
		contentType: Maybe<ContentNodeToContentTypeConnectionEdge>;
		/** The ID of the node in the database. */
		databaseId: Scalars['Int'];
		/** Post publishing date. */
		date: Maybe<Scalars['String']>;
		/** The publishing date set in GMT. */
		dateGmt: Maybe<Scalars['String']>;
		/** The desired slug of the post */
		desiredSlug: Maybe<Scalars['String']>;
		/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
		editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
		/** The RSS enclosure for the object */
		enclosure: Maybe<Scalars['String']>;
		/** Connection between the ContentNode type and the EnqueuedScript type */
		enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
		/** Connection between the ContentNode type and the EnqueuedStylesheet type */
		enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
		/** The excerpt of the post. */
		excerpt: Maybe<Scalars['String']>;
		/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
		featuredImage: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
		/** The database identifier for the featured image node assigned to the content node */
		featuredImageDatabaseId: Maybe<Scalars['Int']>;
		/** Globally unique ID of the featured image assigned to the node */
		featuredImageId: Maybe<Scalars['ID']>;
		/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
		guid: Maybe<Scalars['String']>;
		/** The globally unique identifier of the about object. */
		id: Scalars['ID'];
		/** Whether the object is a node in the preview state */
		isPreview: Maybe<Scalars['Boolean']>;
		/** Whether the object is restricted from the current viewer */
		isRestricted: Maybe<Scalars['Boolean']>;
		/** True if the node is a revision of another node */
		isRevision: Maybe<Scalars['Boolean']>;
		/** The user that most recently edited the node */
		lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
		/** The permalink of the post */
		link: Maybe<Scalars['String']>;
		/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
		menuOrder: Maybe<Scalars['Int']>;
		/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
		modified: Maybe<Scalars['String']>;
		/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
		modifiedGmt: Maybe<Scalars['String']>;
		/** Whether the pings are open or closed for this particular post. */
		pingStatus: Maybe<Scalars['String']>;
		/** URLs that have been pinged. */
		pinged: Maybe<Array<Maybe<Scalars['String']>>>;
		/** Connection between the about type and the postFormat type */
		postFormats: Maybe<AboutToPostFormatConnection>;
		/** Connection between the about type and the about type */
		preview: Maybe<AboutToPreviewConnectionEdge>;
		/** The database id of the preview node */
		previewRevisionDatabaseId: Maybe<Scalars['Int']>;
		/** Whether the object is a node in the preview state */
		previewRevisionId: Maybe<Scalars['ID']>;
		/** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
		revisionOf: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
		/** Connection between the about type and the about type */
		revisions: Maybe<AboutToRevisionConnection>;
		/** The Yoast SEO data of the about */
		seo: Maybe<PostTypeSeo>;
		/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
		slug: Maybe<Scalars['String']>;
		social: Maybe<About_Social>;
		/** The current status of the object */
		status: Maybe<Scalars['String']>;
		/** The template assigned to a node of content */
		template: Maybe<ContentTemplate>;
		/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
		title: Maybe<Scalars['String']>;
		/** URLs queued to be pinged. */
		toPing: Maybe<Array<Maybe<Scalars['String']>>>;
		/** URI path for the resource */
		uri: Scalars['String'];
	};

/** The about type */
export type AboutCategoriesArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<AboutToCategoryConnectionWhereArgs>;
};

/** The about type */
export type AboutCommentsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<AboutToCommentConnectionWhereArgs>;
};

/** The about type */
export type AboutContentArgs = {
	format: Maybe<PostObjectFieldFormatEnum>;
};

/** The about type */
export type AboutEnqueuedScriptsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** The about type */
export type AboutEnqueuedStylesheetsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** The about type */
export type AboutExcerptArgs = {
	format: Maybe<PostObjectFieldFormatEnum>;
};

/** The about type */
export type AboutPostFormatsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<AboutToPostFormatConnectionWhereArgs>;
};

/** The about type */
export type AboutRevisionsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<AboutToRevisionConnectionWhereArgs>;
};

/** The about type */
export type AboutTitleArgs = {
	format: Maybe<PostObjectFieldFormatEnum>;
};

/** An object with an ID */
export type Node = {
	/** The globally unique ID for the object */
	id: Scalars['ID'];
};

/** Nodes used to manage content */
export type ContentNode = {
	/** Connection between the ContentNode type and the ContentType type */
	contentType: Maybe<ContentNodeToContentTypeConnectionEdge>;
	/** The ID of the node in the database. */
	databaseId: Scalars['Int'];
	/** Post publishing date. */
	date: Maybe<Scalars['String']>;
	/** The publishing date set in GMT. */
	dateGmt: Maybe<Scalars['String']>;
	/** The desired slug of the post */
	desiredSlug: Maybe<Scalars['String']>;
	/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn't exist or is greater than 15 seconds */
	editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
	/** The RSS enclosure for the object */
	enclosure: Maybe<Scalars['String']>;
	/** Connection between the ContentNode type and the EnqueuedScript type */
	enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
	/** Connection between the ContentNode type and the EnqueuedStylesheet type */
	enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
	/** The global unique identifier for this post. This currently matches the value stored in WP_Post->guid and the guid column in the "post_objects" database table. */
	guid: Maybe<Scalars['String']>;
	/** The globally unique identifier of the node. */
	id: Scalars['ID'];
	/** Whether the object is a node in the preview state */
	isPreview: Maybe<Scalars['Boolean']>;
	/** Whether the object is restricted from the current viewer */
	isRestricted: Maybe<Scalars['Boolean']>;
	/** The user that most recently edited the node */
	lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
	/** The permalink of the post */
	link: Maybe<Scalars['String']>;
	/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
	modified: Maybe<Scalars['String']>;
	/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
	modifiedGmt: Maybe<Scalars['String']>;
	/** The database id of the preview node */
	previewRevisionDatabaseId: Maybe<Scalars['Int']>;
	/** Whether the object is a node in the preview state */
	previewRevisionId: Maybe<Scalars['ID']>;
	/** The uri slug for the post. This is equivalent to the WP_Post->post_name field and the post_name column in the database for the "post_objects" table. */
	slug: Maybe<Scalars['String']>;
	/** The current status of the object */
	status: Maybe<Scalars['String']>;
	/** The template assigned to a node of content */
	template: Maybe<ContentTemplate>;
	/** URI path for the resource */
	uri: Scalars['String'];
};

/** Nodes used to manage content */
export type ContentNodeEnqueuedScriptsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** Nodes used to manage content */
export type ContentNodeEnqueuedStylesheetsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** Connection between the ContentNode type and the ContentType type */
export type ContentNodeToContentTypeConnectionEdge = {
	__typename?: 'ContentNodeToContentTypeConnectionEdge';
	/** The nodes of the connection, without the edges */
	node: Maybe<ContentType>;
};

/** An Post Type object */
export type ContentType = Node &
	UniformResourceIdentifiable & {
		__typename?: 'ContentType';
		/** Whether this content type should can be exported. */
		canExport: Maybe<Scalars['Boolean']>;
		/** Connection between the ContentType type and the Taxonomy type */
		connectedTaxonomies: Maybe<ContentTypeToTaxonomyConnection>;
		/** Connection between the ContentType type and the ContentNode type */
		contentNodes: Maybe<ContentTypeToContentNodeConnection>;
		/** Whether content of this type should be deleted when the author of it is deleted from the system. */
		deleteWithUser: Maybe<Scalars['Boolean']>;
		/** Description of the content type. */
		description: Maybe<Scalars['String']>;
		/** Whether to exclude nodes of this content type from front end search results. */
		excludeFromSearch: Maybe<Scalars['Boolean']>;
		/** The plural name of the content type within the GraphQL Schema. */
		graphqlPluralName: Maybe<Scalars['String']>;
		/** The singular name of the content type within the GraphQL Schema. */
		graphqlSingleName: Maybe<Scalars['String']>;
		/** Whether this content type should have archives. Content archives are generated by type and by date. */
		hasArchive: Maybe<Scalars['Boolean']>;
		/** Whether the content type is hierarchical, for example pages. */
		hierarchical: Maybe<Scalars['Boolean']>;
		/** The globally unique identifier of the post-type object. */
		id: Scalars['ID'];
		/** Whether this page is set to the static front page. */
		isFrontPage: Scalars['Boolean'];
		/** Whether this page is set to the blog posts page. */
		isPostsPage: Scalars['Boolean'];
		/** Whether the object is restricted from the current viewer */
		isRestricted: Maybe<Scalars['Boolean']>;
		/** Display name of the content type. */
		label: Maybe<Scalars['String']>;
		/** Details about the content type labels. */
		labels: Maybe<PostTypeLabelDetails>;
		/** The name of the icon file to display as a menu icon. */
		menuIcon: Maybe<Scalars['String']>;
		/** The position of this post type in the menu. Only applies if show_in_menu is true. */
		menuPosition: Maybe<Scalars['Int']>;
		/** The internal name of the post type. This should not be used for display purposes. */
		name: Maybe<Scalars['String']>;
		/** Whether a content type is intended for use publicly either via the admin interface or by front-end users. While the default settings of exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are inherited from public, each does not rely on this relationship and controls a very specific intention. */
		public: Maybe<Scalars['Boolean']>;
		/** Whether queries can be performed on the front end for the content type as part of parse_request(). */
		publiclyQueryable: Maybe<Scalars['Boolean']>;
		/** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
		restBase: Maybe<Scalars['String']>;
		/** The REST Controller class assigned to handling this content type. */
		restControllerClass: Maybe<Scalars['String']>;
		/** Makes this content type available via the admin bar. */
		showInAdminBar: Maybe<Scalars['Boolean']>;
		/** Whether to add the content type to the GraphQL Schema. */
		showInGraphql: Maybe<Scalars['Boolean']>;
		/** Where to show the content type in the admin menu. To work, $show_ui must be true. If true, the post type is shown in its own top level menu. If false, no menu is shown. If a string of an existing top level menu (eg. &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type will be placed as a sub-menu of that. */
		showInMenu: Maybe<Scalars['Boolean']>;
		/** Makes this content type available for selection in navigation menus. */
		showInNavMenus: Maybe<Scalars['Boolean']>;
		/** Whether the content type is associated with a route under the the REST API &quot;wp/v2&quot; namespace. */
		showInRest: Maybe<Scalars['Boolean']>;
		/** Whether to generate and allow a UI for managing this content type in the admin. */
		showUi: Maybe<Scalars['Boolean']>;
		/** The unique resource identifier path */
		uri: Maybe<Scalars['String']>;
	};

/** An Post Type object */
export type ContentTypeConnectedTaxonomiesArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** An Post Type object */
export type ContentTypeContentNodesArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<ContentTypeToContentNodeConnectionWhereArgs>;
};

/** Any node that has a URI */
export type UniformResourceIdentifiable = {
	/** The unique resource identifier path */
	id: Scalars['ID'];
	/** The unique resource identifier path */
	uri: Maybe<Scalars['String']>;
};

/** Connection between the ContentType type and the Taxonomy type */
export type ContentTypeToTaxonomyConnection = {
	__typename?: 'ContentTypeToTaxonomyConnection';
	/** Edges for the ContentTypeToTaxonomyConnection connection */
	edges: Maybe<Array<Maybe<ContentTypeToTaxonomyConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Taxonomy>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ContentTypeToTaxonomyConnectionEdge = {
	__typename?: 'ContentTypeToTaxonomyConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Taxonomy>;
};

/** A taxonomy object */
export type Taxonomy = Node & {
	__typename?: 'Taxonomy';
	/** List of Content Types associated with the Taxonomy */
	connectedContentTypes: Maybe<TaxonomyToContentTypeConnection>;
	/** Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description */
	description: Maybe<Scalars['String']>;
	/** The plural name of the post type within the GraphQL Schema. */
	graphqlPluralName: Maybe<Scalars['String']>;
	/** The singular name of the post type within the GraphQL Schema. */
	graphqlSingleName: Maybe<Scalars['String']>;
	/** Whether the taxonomy is hierarchical */
	hierarchical: Maybe<Scalars['Boolean']>;
	/** The globally unique identifier of the taxonomy object. */
	id: Scalars['ID'];
	/** Whether the object is restricted from the current viewer */
	isRestricted: Maybe<Scalars['Boolean']>;
	/** Name of the taxonomy shown in the menu. Usually plural. */
	label: Maybe<Scalars['String']>;
	/** The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label */
	name: Maybe<Scalars['String']>;
	/** Whether the taxonomy is publicly queryable */
	public: Maybe<Scalars['Boolean']>;
	/** Name of content type to diplay in REST API &quot;wp/v2&quot; namespace. */
	restBase: Maybe<Scalars['String']>;
	/** The REST Controller class assigned to handling this content type. */
	restControllerClass: Maybe<Scalars['String']>;
	/** Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud */
	showCloud: Maybe<Scalars['Boolean']>;
	/** Whether to display a column for the taxonomy on its post type listing screens. */
	showInAdminColumn: Maybe<Scalars['Boolean']>;
	/** Whether to add the post type to the GraphQL Schema. */
	showInGraphql: Maybe<Scalars['Boolean']>;
	/** Whether to show the taxonomy in the admin menu */
	showInMenu: Maybe<Scalars['Boolean']>;
	/** Whether the taxonomy is available for selection in navigation menus. */
	showInNavMenus: Maybe<Scalars['Boolean']>;
	/** Whether to show the taxonomy in the quick/bulk edit panel. */
	showInQuickEdit: Maybe<Scalars['Boolean']>;
	/** Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace. */
	showInRest: Maybe<Scalars['Boolean']>;
	/** Whether to generate and allow a UI for managing terms in this taxonomy in the admin */
	showUi: Maybe<Scalars['Boolean']>;
};

/** A taxonomy object */
export type TaxonomyConnectedContentTypesArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** Connection between the Taxonomy type and the ContentType type */
export type TaxonomyToContentTypeConnection = {
	__typename?: 'TaxonomyToContentTypeConnection';
	/** Edges for the TaxonomyToContentTypeConnection connection */
	edges: Maybe<Array<Maybe<TaxonomyToContentTypeConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<ContentType>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TaxonomyToContentTypeConnectionEdge = {
	__typename?: 'TaxonomyToContentTypeConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<ContentType>;
};

/** Information about pagination in a connection. */
export type WpPageInfo = {
	__typename?: 'WPPageInfo';
	/** When paginating forwards, the cursor to continue. */
	endCursor: Maybe<Scalars['String']>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars['Boolean'];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars['Boolean'];
	/** Raw schema for page */
	seo: Maybe<SeoPostTypePageInfo>;
	/** When paginating backwards, the cursor to continue. */
	startCursor: Maybe<Scalars['String']>;
};

/** The page info SEO details */
export type SeoPostTypePageInfo = {
	__typename?: 'SEOPostTypePageInfo';
	schema: Maybe<SeoPageInfoSchema>;
};

/** The Schema for post type */
export type SeoPageInfoSchema = {
	__typename?: 'SEOPageInfoSchema';
	raw: Maybe<Scalars['String']>;
};

/** Arguments for filtering the ContentTypeToContentNodeConnection connection */
export type ContentTypeToContentNodeConnectionWhereArgs = {
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Filter the connection based on input */
export type DateQueryInput = {
	/** Nodes should be returned after this date */
	after: Maybe<DateInput>;
	/** Nodes should be returned before this date */
	before: Maybe<DateInput>;
	/** Column to query against */
	column: Maybe<PostObjectsConnectionDateColumnEnum>;
	/** For after/before, whether exact value should be matched or not */
	compare: Maybe<Scalars['String']>;
	/** Day of the month (from 1 to 31) */
	day: Maybe<Scalars['Int']>;
	/** Hour (from 0 to 23) */
	hour: Maybe<Scalars['Int']>;
	/** For after/before, whether exact value should be matched or not */
	inclusive: Maybe<Scalars['Boolean']>;
	/** Minute (from 0 to 59) */
	minute: Maybe<Scalars['Int']>;
	/** Month number (from 1 to 12) */
	month: Maybe<Scalars['Int']>;
	/** OR or AND, how the sub-arrays should be compared */
	relation: Maybe<RelationEnum>;
	/** Second (0 to 59) */
	second: Maybe<Scalars['Int']>;
	/** Week of the year (from 0 to 53) */
	week: Maybe<Scalars['Int']>;
	/** 4 digit year (e.g. 2017) */
	year: Maybe<Scalars['Int']>;
};

/** Date values */
export type DateInput = {
	/** Day of the month (from 1 to 31) */
	day: Maybe<Scalars['Int']>;
	/** Month number (from 1 to 12) */
	month: Maybe<Scalars['Int']>;
	/** 4 digit year (e.g. 2017) */
	year: Maybe<Scalars['Int']>;
};

/** The column to use when filtering by date */
export enum PostObjectsConnectionDateColumnEnum {
	Date = 'DATE',
	Modified = 'MODIFIED'
}

/** The logical relation between each item in the array when there are more than one. */
export enum RelationEnum {
	And = 'AND',
	Or = 'OR'
}

/** The MimeType of the object */
export enum MimeTypeEnum {
	ApplicationJava = 'APPLICATION_JAVA',
	ApplicationMsword = 'APPLICATION_MSWORD',
	ApplicationOctetStream = 'APPLICATION_OCTET_STREAM',
	ApplicationOnenote = 'APPLICATION_ONENOTE',
	ApplicationOxps = 'APPLICATION_OXPS',
	ApplicationPdf = 'APPLICATION_PDF',
	ApplicationRar = 'APPLICATION_RAR',
	ApplicationRtf = 'APPLICATION_RTF',
	ApplicationTtafXml = 'APPLICATION_TTAF_XML',
	ApplicationVndAppleKeynote = 'APPLICATION_VND_APPLE_KEYNOTE',
	ApplicationVndAppleNumbers = 'APPLICATION_VND_APPLE_NUMBERS',
	ApplicationVndApplePages = 'APPLICATION_VND_APPLE_PAGES',
	ApplicationVndMsAccess = 'APPLICATION_VND_MS_ACCESS',
	ApplicationVndMsExcel = 'APPLICATION_VND_MS_EXCEL',
	ApplicationVndMsExcelAddinMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12',
	ApplicationVndMsExcelSheetBinaryMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12',
	ApplicationVndMsExcelSheetMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12',
	ApplicationVndMsExcelTemplateMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12',
	ApplicationVndMsPowerpoint = 'APPLICATION_VND_MS_POWERPOINT',
	ApplicationVndMsPowerpointAddinMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12',
	ApplicationVndMsPowerpointPresentationMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12',
	ApplicationVndMsPowerpointSlideshowMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12',
	ApplicationVndMsPowerpointSlideMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12',
	ApplicationVndMsPowerpointTemplateMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12',
	ApplicationVndMsProject = 'APPLICATION_VND_MS_PROJECT',
	ApplicationVndMsWordDocumentMacroenabled_12 = 'APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12',
	ApplicationVndMsWordTemplateMacroenabled_12 = 'APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12',
	ApplicationVndMsWrite = 'APPLICATION_VND_MS_WRITE',
	ApplicationVndMsXpsdocument = 'APPLICATION_VND_MS_XPSDOCUMENT',
	ApplicationVndOasisOpendocumentChart = 'APPLICATION_VND_OASIS_OPENDOCUMENT_CHART',
	ApplicationVndOasisOpendocumentDatabase = 'APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE',
	ApplicationVndOasisOpendocumentFormula = 'APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA',
	ApplicationVndOasisOpendocumentGraphics = 'APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS',
	ApplicationVndOasisOpendocumentPresentation = 'APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION',
	ApplicationVndOasisOpendocumentSpreadsheet = 'APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET',
	ApplicationVndOasisOpendocumentText = 'APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT',
	ApplicationVndOpenxmlformatsOfficedocumentPresentationmlPresentation = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION',
	ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlide = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE',
	ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlideshow = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW',
	ApplicationVndOpenxmlformatsOfficedocumentPresentationmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE',
	ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET',
	ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE',
	ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlDocument = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT',
	ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE',
	ApplicationWordperfect = 'APPLICATION_WORDPERFECT',
	ApplicationX_7ZCompressed = 'APPLICATION_X_7Z_COMPRESSED',
	ApplicationXGzip = 'APPLICATION_X_GZIP',
	ApplicationXTar = 'APPLICATION_X_TAR',
	ApplicationZip = 'APPLICATION_ZIP',
	AudioAac = 'AUDIO_AAC',
	AudioFlac = 'AUDIO_FLAC',
	AudioMidi = 'AUDIO_MIDI',
	AudioMpeg = 'AUDIO_MPEG',
	AudioOgg = 'AUDIO_OGG',
	AudioWav = 'AUDIO_WAV',
	AudioXMatroska = 'AUDIO_X_MATROSKA',
	AudioXMsWax = 'AUDIO_X_MS_WAX',
	AudioXMsWma = 'AUDIO_X_MS_WMA',
	AudioXRealaudio = 'AUDIO_X_REALAUDIO',
	ImageBmp = 'IMAGE_BMP',
	ImageGif = 'IMAGE_GIF',
	ImageHeic = 'IMAGE_HEIC',
	ImageJpeg = 'IMAGE_JPEG',
	ImagePng = 'IMAGE_PNG',
	ImageTiff = 'IMAGE_TIFF',
	ImageXIcon = 'IMAGE_X_ICON',
	TextCalendar = 'TEXT_CALENDAR',
	TextCss = 'TEXT_CSS',
	TextCsv = 'TEXT_CSV',
	TextPlain = 'TEXT_PLAIN',
	TextRichtext = 'TEXT_RICHTEXT',
	TextTabSeparatedValues = 'TEXT_TAB_SEPARATED_VALUES',
	TextVtt = 'TEXT_VTT',
	Video_3Gpp = 'VIDEO_3GPP',
	Video_3Gpp2 = 'VIDEO_3GPP2',
	VideoAvi = 'VIDEO_AVI',
	VideoDivx = 'VIDEO_DIVX',
	VideoMp4 = 'VIDEO_MP4',
	VideoMpeg = 'VIDEO_MPEG',
	VideoOgg = 'VIDEO_OGG',
	VideoQuicktime = 'VIDEO_QUICKTIME',
	VideoWebm = 'VIDEO_WEBM',
	VideoXFlv = 'VIDEO_X_FLV',
	VideoXMatroska = 'VIDEO_X_MATROSKA',
	VideoXMsAsf = 'VIDEO_X_MS_ASF',
	VideoXMsWm = 'VIDEO_X_MS_WM',
	VideoXMsWmv = 'VIDEO_X_MS_WMV',
	VideoXMsWmx = 'VIDEO_X_MS_WMX'
}

/** Options for ordering the connection */
export type PostObjectsConnectionOrderbyInput = {
	/** The field to order the connection by */
	field: PostObjectsConnectionOrderbyEnum;
	/** Possible directions in which to order a list of items */
	order: OrderEnum;
};

/** Field to order the connection by */
export enum PostObjectsConnectionOrderbyEnum {
	/** Order by author */
	Author = 'AUTHOR',
	/** Order by the number of comments it has acquired */
	CommentCount = 'COMMENT_COUNT',
	/** Order by publish date */
	Date = 'DATE',
	/** Preserve the ID order given in the IN array */
	In = 'IN',
	/** Order by the menu order value */
	MenuOrder = 'MENU_ORDER',
	/** Order by last modified date */
	Modified = 'MODIFIED',
	/** Preserve slug order given in the NAME_IN array */
	NameIn = 'NAME_IN',
	/** Order by parent ID */
	Parent = 'PARENT',
	/** Order by slug */
	Slug = 'SLUG',
	/** Order by title */
	Title = 'TITLE'
}

/** The cardinality of the connection order */
export enum OrderEnum {
	Asc = 'ASC',
	Desc = 'DESC'
}

/** The status of the object. */
export enum PostStatusEnum {
	/** Objects with the acf-disabled status */
	AcfDisabled = 'ACF_DISABLED',
	/** Objects with the auto-draft status */
	AutoDraft = 'AUTO_DRAFT',
	/** Objects with the draft status */
	Draft = 'DRAFT',
	/** Objects with the future status */
	Future = 'FUTURE',
	/** Objects with the inherit status */
	Inherit = 'INHERIT',
	/** Objects with the pending status */
	Pending = 'PENDING',
	/** Objects with the private status */
	Private = 'PRIVATE',
	/** Objects with the publish status */
	Publish = 'PUBLISH',
	/** Objects with the request-completed status */
	RequestCompleted = 'REQUEST_COMPLETED',
	/** Objects with the request-confirmed status */
	RequestConfirmed = 'REQUEST_CONFIRMED',
	/** Objects with the request-failed status */
	RequestFailed = 'REQUEST_FAILED',
	/** Objects with the request-pending status */
	RequestPending = 'REQUEST_PENDING',
	/** Objects with the spam status */
	Spam = 'SPAM',
	/** Objects with the trash status */
	Trash = 'TRASH'
}

/** Connection between the ContentType type and the ContentNode type */
export type ContentTypeToContentNodeConnection = {
	__typename?: 'ContentTypeToContentNodeConnection';
	/** Edges for the ContentTypeToContentNodeConnection connection */
	edges: Maybe<Array<Maybe<ContentTypeToContentNodeConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<ContentNode>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ContentTypeToContentNodeConnectionEdge = {
	__typename?: 'ContentTypeToContentNodeConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<ContentNode>;
};

/** Details for labels of the PostType */
export type PostTypeLabelDetails = {
	__typename?: 'PostTypeLabelDetails';
	/** Default is ‘Add New’ for both hierarchical and non-hierarchical types. */
	addNew: Maybe<Scalars['String']>;
	/** Label for adding a new singular item. */
	addNewItem: Maybe<Scalars['String']>;
	/** Label to signify all items in a submenu link. */
	allItems: Maybe<Scalars['String']>;
	/** Label for archives in nav menus */
	archives: Maybe<Scalars['String']>;
	/** Label for the attributes meta box. */
	attributes: Maybe<Scalars['String']>;
	/** Label for editing a singular item. */
	editItem: Maybe<Scalars['String']>;
	/** Label for the Featured Image meta box title. */
	featuredImage: Maybe<Scalars['String']>;
	/** Label for the table views hidden heading. */
	filterItemsList: Maybe<Scalars['String']>;
	/** Label for the media frame button. */
	insertIntoItem: Maybe<Scalars['String']>;
	/** Label for the table hidden heading. */
	itemsList: Maybe<Scalars['String']>;
	/** Label for the table pagination hidden heading. */
	itemsListNavigation: Maybe<Scalars['String']>;
	/** Label for the menu name. */
	menuName: Maybe<Scalars['String']>;
	/** General name for the post type, usually plural. */
	name: Maybe<Scalars['String']>;
	/** Label for the new item page title. */
	newItem: Maybe<Scalars['String']>;
	/** Label used when no items are found. */
	notFound: Maybe<Scalars['String']>;
	/** Label used when no items are in the trash. */
	notFoundInTrash: Maybe<Scalars['String']>;
	/** Label used to prefix parents of hierarchical items. */
	parentItemColon: Maybe<Scalars['String']>;
	/** Label for removing the featured image. */
	removeFeaturedImage: Maybe<Scalars['String']>;
	/** Label for searching plural items. */
	searchItems: Maybe<Scalars['String']>;
	/** Label for setting the featured image. */
	setFeaturedImage: Maybe<Scalars['String']>;
	/** Name for one object of this post type. */
	singularName: Maybe<Scalars['String']>;
	/** Label for the media frame filter. */
	uploadedToThisItem: Maybe<Scalars['String']>;
	/** Label in the media frame for using a featured image. */
	useFeaturedImage: Maybe<Scalars['String']>;
	/** Label for viewing a singular item. */
	viewItem: Maybe<Scalars['String']>;
	/** Label for viewing post type archives. */
	viewItems: Maybe<Scalars['String']>;
};

/** Connection between the ContentNode type and the User type */
export type ContentNodeToEditLockConnectionEdge = {
	__typename?: 'ContentNodeToEditLockConnectionEdge';
	/** The timestamp for when the node was last edited */
	lockTimestamp: Maybe<Scalars['String']>;
	/** The nodes of the connection, without the edges */
	node: Maybe<User>;
};

/** A User object */
export type User = Node &
	UniformResourceIdentifiable &
	Commenter &
	DatabaseIdentifier & {
		__typename?: 'User';
		/** Connection between the User type and the about type */
		abouts: Maybe<UserToAboutConnection>;
		/** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
		avatar: Maybe<Avatar>;
		/** User metadata option name. Usually it will be &quot;wp_capabilities&quot;. */
		capKey: Maybe<Scalars['String']>;
		/** A list of capabilities (permissions) granted to the user */
		capabilities: Maybe<Array<Maybe<Scalars['String']>>>;
		/** Connection between the User type and the Comment type */
		comments: Maybe<UserToCommentConnection>;
		/** Connection between the User type and the consultant type */
		consultants: Maybe<UserToConsultantConnection>;
		/** Identifies the primary key from the database. */
		databaseId: Scalars['Int'];
		/** Description of the user. */
		description: Maybe<Scalars['String']>;
		/** Email address of the user. This is equivalent to the WP_User-&gt;user_email property. */
		email: Maybe<Scalars['String']>;
		/** Connection between the User type and the EnqueuedScript type */
		enqueuedScripts: Maybe<UserToEnqueuedScriptConnection>;
		/** Connection between the User type and the EnqueuedStylesheet type */
		enqueuedStylesheets: Maybe<UserToEnqueuedStylesheetConnection>;
		/** A complete list of capabilities including capabilities inherited from a role. This is equivalent to the array keys of WP_User-&gt;allcaps. */
		extraCapabilities: Maybe<Array<Maybe<Scalars['String']>>>;
		/** First name of the user. This is equivalent to the WP_User-&gt;user_first_name property. */
		firstName: Maybe<Scalars['String']>;
		/** The globally unique identifier for the user object. */
		id: Scalars['ID'];
		/** Whether the JWT User secret has been revoked. If the secret has been revoked, auth tokens will not be issued until an admin, or user with proper capabilities re-issues a secret for the user. */
		isJwtAuthSecretRevoked: Scalars['Boolean'];
		/** Whether the object is restricted from the current viewer */
		isRestricted: Maybe<Scalars['Boolean']>;
		/** The expiration for the JWT Token for the user. If not set custom for the user, it will use the default sitewide expiration setting */
		jwtAuthExpiration: Maybe<Scalars['String']>;
		/** A JWT token that can be used in future requests for authentication/authorization */
		jwtAuthToken: Maybe<Scalars['String']>;
		/** A JWT token that can be used in future requests to get a refreshed jwtAuthToken. If the refresh token used in a request is revoked or otherwise invalid, a valid Auth token will NOT be issued in the response headers. */
		jwtRefreshToken: Maybe<Scalars['String']>;
		/** A unique secret tied to the users JWT token that can be revoked or refreshed. Revoking the secret prevents JWT tokens from being issued to the user. Refreshing the token invalidates previously issued tokens, but allows new tokens to be issued. */
		jwtUserSecret: Maybe<Scalars['String']>;
		/** Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property. */
		lastName: Maybe<Scalars['String']>;
		/** The preferred language locale set for the user. Value derived from get_user_locale(). */
		locale: Maybe<Scalars['String']>;
		/** Connection between the User type and the mediaItem type */
		mediaItems: Maybe<UserToMediaItemConnection>;
		/** Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property. */
		name: Maybe<Scalars['String']>;
		/** The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename */
		nicename: Maybe<Scalars['String']>;
		/** Nickname of the user. */
		nickname: Maybe<Scalars['String']>;
		/** Connection between the User type and the page type */
		pages: Maybe<UserToPageConnection>;
		/** Connection between the User type and the position type */
		positions: Maybe<UserToPositionConnection>;
		/** Connection between the User type and the post type */
		posts: Maybe<UserToPostConnection>;
		/** The date the user registered or was created. The field follows a full ISO8601 date string format. */
		registeredDate: Maybe<Scalars['String']>;
		/** Connection between the User and Revisions authored by the user */
		revisions: Maybe<UserToContentRevisionUnionConnection>;
		/** Connection between the User type and the UserRole type */
		roles: Maybe<UserToUserRoleConnection>;
		/** The Yoast SEO data of a user */
		seo: Maybe<SeoUser>;
		/** The slug for the user. This field is equivalent to WP_User-&gt;user_nicename */
		slug: Maybe<Scalars['String']>;
		/** Connection between the User type and the testimonial type */
		testimonials: Maybe<UserToTestimonialConnection>;
		/** The unique resource identifier path */
		uri: Maybe<Scalars['String']>;
		/** A website url that is associated with the user. */
		url: Maybe<Scalars['String']>;
		/**
		 * The Id of the user. Equivalent to WP_User-&gt;ID
		 * @deprecated Deprecated in favor of the databaseId field
		 */
		userId: Maybe<Scalars['Int']>;
		/** Username for the user. This field is equivalent to WP_User-&gt;user_login. */
		username: Maybe<Scalars['String']>;
	};

/** A User object */
export type UserAboutsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<UserToAboutConnectionWhereArgs>;
};

/** A User object */
export type UserAvatarArgs = {
	size?: Maybe<Scalars['Int']>;
	forceDefault: Maybe<Scalars['Boolean']>;
	rating: Maybe<AvatarRatingEnum>;
};

/** A User object */
export type UserCommentsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<UserToCommentConnectionWhereArgs>;
};

/** A User object */
export type UserConsultantsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<UserToConsultantConnectionWhereArgs>;
};

/** A User object */
export type UserEnqueuedScriptsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** A User object */
export type UserEnqueuedStylesheetsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** A User object */
export type UserMediaItemsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<UserToMediaItemConnectionWhereArgs>;
};

/** A User object */
export type UserPagesArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<UserToPageConnectionWhereArgs>;
};

/** A User object */
export type UserPositionsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<UserToPositionConnectionWhereArgs>;
};

/** A User object */
export type UserPostsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<UserToPostConnectionWhereArgs>;
};

/** A User object */
export type UserRevisionsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<UserToContentRevisionUnionConnectionWhereArgs>;
};

/** A User object */
export type UserRolesArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** A User object */
export type UserTestimonialsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<UserToTestimonialConnectionWhereArgs>;
};

/** The author of a comment */
export type Commenter = {
	/** Identifies the primary key from the database. */
	databaseId: Scalars['Int'];
	/** The email address of the author of a comment. */
	email: Maybe<Scalars['String']>;
	/** The globally unique identifier for the comment author. */
	id: Scalars['ID'];
	/** Whether the author information is considered restricted. (not fully public) */
	isRestricted: Maybe<Scalars['Boolean']>;
	/** The name of the author of a comment. */
	name: Maybe<Scalars['String']>;
	/** The url of the author of a comment. */
	url: Maybe<Scalars['String']>;
};

/** Object that can be identified with a Database ID */
export type DatabaseIdentifier = {
	/** The unique identifier stored in the database */
	databaseId: Scalars['Int'];
};

/** Arguments for filtering the UserToAboutConnection connection */
export type UserToAboutConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the User type and the about type */
export type UserToAboutConnection = {
	__typename?: 'UserToAboutConnection';
	/** Edges for the UserToAboutConnection connection */
	edges: Maybe<Array<Maybe<UserToAboutConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<About>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToAboutConnectionEdge = {
	__typename?: 'UserToAboutConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<About>;
};

/** What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are judged in that order. Default is the value of the 'avatar_rating' option */
export enum AvatarRatingEnum {
	G = 'G',
	Pg = 'PG',
	R = 'R',
	X = 'X'
}

/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
export type Avatar = {
	__typename?: 'Avatar';
	/** URL for the default image or a default type. Accepts &#039;404&#039; (return a 404 instead of a default image), &#039;retro&#039; (8bit), &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face), &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;, &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039; (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo). */
	default: Maybe<Scalars['String']>;
	/** HTML attributes to insert in the IMG element. Is not sanitized. */
	extraAttr: Maybe<Scalars['String']>;
	/** Whether to always show the default image, never the Gravatar. */
	forceDefault: Maybe<Scalars['Boolean']>;
	/** Whether the avatar was successfully found. */
	foundAvatar: Maybe<Scalars['Boolean']>;
	/** Height of the avatar image. */
	height: Maybe<Scalars['Int']>;
	/** Whether the object is restricted from the current viewer */
	isRestricted: Maybe<Scalars['Boolean']>;
	/** What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;, &#039;R&#039;, &#039;X&#039;, and are judged in that order. */
	rating: Maybe<Scalars['String']>;
	/** Type of url scheme to use. Typically HTTP vs. HTTPS. */
	scheme: Maybe<Scalars['String']>;
	/** The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image. */
	size: Maybe<Scalars['Int']>;
	/** URL for the gravatar image source. */
	url: Maybe<Scalars['String']>;
	/** Width of the avatar image. */
	width: Maybe<Scalars['Int']>;
};

/** Arguments for filtering the UserToCommentConnection connection */
export type UserToCommentConnectionWhereArgs = {
	/** Comment author email address. */
	authorEmail: Maybe<Scalars['String']>;
	/** Array of author IDs to include comments for. */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Comment author URL. */
	authorUrl: Maybe<Scalars['String']>;
	/** Array of comment IDs to include. */
	commentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Include comments of a given type. */
	commentType: Maybe<Scalars['String']>;
	/** Include comments from a given array of comment types. */
	commentTypeIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn: Maybe<Scalars['String']>;
	/** Content object author ID to limit results by. */
	contentAuthor: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId: Maybe<Scalars['ID']>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Content object name to retrieve affiliated comments for. */
	contentName: Maybe<Scalars['String']>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent: Maybe<Scalars['Int']>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus: Maybe<Array<Maybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType: Maybe<Array<Maybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Karma score to retrieve matching comments for. */
	karma: Maybe<Scalars['Int']>;
	/** The cardinality of the order of the connection */
	order: Maybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby: Maybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent: Maybe<Scalars['Int']>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Search term(s) to retrieve matching comments for. */
	search: Maybe<Scalars['String']>;
	/** Comment status to limit results by. */
	status: Maybe<Scalars['String']>;
	/** Include comments for a specific user ID. */
	userId: Maybe<Scalars['ID']>;
};

/** Allowed Content Types */
export enum ContentTypeEnum {
	/** The Type of Content object */
	About = 'ABOUT',
	/** The Type of Content object */
	Attachment = 'ATTACHMENT',
	/** The Type of Content object */
	Consultant = 'CONSULTANT',
	/** The Type of Content object */
	Page = 'PAGE',
	/** The Type of Content object */
	Position = 'POSITION',
	/** The Type of Content object */
	Post = 'POST',
	/** The Type of Content object */
	Testimonial = 'TESTIMONIAL'
}

/** Options for ordering the connection */
export enum CommentsConnectionOrderbyEnum {
	CommentAgent = 'COMMENT_AGENT',
	CommentApproved = 'COMMENT_APPROVED',
	CommentAuthor = 'COMMENT_AUTHOR',
	CommentAuthorEmail = 'COMMENT_AUTHOR_EMAIL',
	CommentAuthorIp = 'COMMENT_AUTHOR_IP',
	CommentAuthorUrl = 'COMMENT_AUTHOR_URL',
	CommentContent = 'COMMENT_CONTENT',
	CommentDate = 'COMMENT_DATE',
	CommentDateGmt = 'COMMENT_DATE_GMT',
	CommentId = 'COMMENT_ID',
	CommentIn = 'COMMENT_IN',
	CommentKarma = 'COMMENT_KARMA',
	CommentParent = 'COMMENT_PARENT',
	CommentPostId = 'COMMENT_POST_ID',
	CommentType = 'COMMENT_TYPE',
	UserId = 'USER_ID'
}

/** Connection between the User type and the Comment type */
export type UserToCommentConnection = {
	__typename?: 'UserToCommentConnection';
	/** Edges for the UserToCommentConnection connection */
	edges: Maybe<Array<Maybe<UserToCommentConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Comment>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToCommentConnectionEdge = {
	__typename?: 'UserToCommentConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Comment>;
};

/** A Comment object */
export type Comment = Node &
	DatabaseIdentifier & {
		__typename?: 'Comment';
		/** User agent used to post the comment. This field is equivalent to WP_Comment-&gt;comment_agent and the value matching the &quot;comment_agent&quot; column in SQL. */
		agent: Maybe<Scalars['String']>;
		/** The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL. */
		approved: Maybe<Scalars['Boolean']>;
		/** The author of the comment */
		author: Maybe<CommentToCommenterConnectionEdge>;
		/** IP address for the author. This field is equivalent to WP_Comment-&gt;comment_author_IP and the value matching the &quot;comment_author_IP&quot; column in SQL. */
		authorIp: Maybe<Scalars['String']>;
		/**
		 * ID for the comment, unique among comments.
		 * @deprecated Deprecated in favor of databaseId
		 */
		commentId: Maybe<Scalars['Int']>;
		/** Connection between the Comment type and the ContentNode type */
		commentedOn: Maybe<CommentToContentNodeConnectionEdge>;
		/** Content of the comment. This field is equivalent to WP_Comment-&gt;comment_content and the value matching the &quot;comment_content&quot; column in SQL. */
		content: Maybe<Scalars['String']>;
		/** The unique identifier stored in the database */
		databaseId: Scalars['Int'];
		/** Date the comment was posted in local time. This field is equivalent to WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL. */
		date: Maybe<Scalars['String']>;
		/** Date the comment was posted in GMT. This field is equivalent to WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column in SQL. */
		dateGmt: Maybe<Scalars['String']>;
		/** The globally unique identifier for the comment object */
		id: Scalars['ID'];
		/** Whether the object is restricted from the current viewer */
		isRestricted: Maybe<Scalars['Boolean']>;
		/** Karma value for the comment. This field is equivalent to WP_Comment-&gt;comment_karma and the value matching the &quot;comment_karma&quot; column in SQL. */
		karma: Maybe<Scalars['Int']>;
		/** Connection between the Comment type and the Comment type */
		parent: Maybe<CommentToParentCommentConnectionEdge>;
		/** The database id of the parent comment node or null if it is the root comment */
		parentDatabaseId: Maybe<Scalars['Int']>;
		/** The globally unique identifier of the parent comment node. */
		parentId: Maybe<Scalars['ID']>;
		/** Connection between the Comment type and the Comment type */
		replies: Maybe<CommentToCommentConnection>;
		/** Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and the value matching the &quot;comment_type&quot; column in SQL. */
		type: Maybe<Scalars['String']>;
	};

/** A Comment object */
export type CommentContentArgs = {
	format: Maybe<PostObjectFieldFormatEnum>;
};

/** A Comment object */
export type CommentParentArgs = {
	where: Maybe<CommentToParentCommentConnectionWhereArgs>;
};

/** A Comment object */
export type CommentRepliesArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<CommentToCommentConnectionWhereArgs>;
};

/** Connection between the Comment type and the Commenter type */
export type CommentToCommenterConnectionEdge = {
	__typename?: 'CommentToCommenterConnectionEdge';
	/** The nodes of the connection, without the edges */
	node: Maybe<Commenter>;
};

/** Connection between the Comment type and the ContentNode type */
export type CommentToContentNodeConnectionEdge = {
	__typename?: 'CommentToContentNodeConnectionEdge';
	/** The nodes of the connection, without the edges */
	node: Maybe<ContentNode>;
};

/** The format of post field data. */
export enum PostObjectFieldFormatEnum {
	/** Provide the field value directly from database */
	Raw = 'RAW',
	/** Apply the default WordPress rendering */
	Rendered = 'RENDERED'
}

/** Arguments for filtering the CommentToParentCommentConnection connection */
export type CommentToParentCommentConnectionWhereArgs = {
	/** Comment author email address. */
	authorEmail: Maybe<Scalars['String']>;
	/** Array of author IDs to include comments for. */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Comment author URL. */
	authorUrl: Maybe<Scalars['String']>;
	/** Array of comment IDs to include. */
	commentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Include comments of a given type. */
	commentType: Maybe<Scalars['String']>;
	/** Include comments from a given array of comment types. */
	commentTypeIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn: Maybe<Scalars['String']>;
	/** Content object author ID to limit results by. */
	contentAuthor: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId: Maybe<Scalars['ID']>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Content object name to retrieve affiliated comments for. */
	contentName: Maybe<Scalars['String']>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent: Maybe<Scalars['Int']>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus: Maybe<Array<Maybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType: Maybe<Array<Maybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Karma score to retrieve matching comments for. */
	karma: Maybe<Scalars['Int']>;
	/** The cardinality of the order of the connection */
	order: Maybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby: Maybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent: Maybe<Scalars['Int']>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Search term(s) to retrieve matching comments for. */
	search: Maybe<Scalars['String']>;
	/** Comment status to limit results by. */
	status: Maybe<Scalars['String']>;
	/** Include comments for a specific user ID. */
	userId: Maybe<Scalars['ID']>;
};

/** Connection between the Comment type and the Comment type */
export type CommentToParentCommentConnectionEdge = {
	__typename?: 'CommentToParentCommentConnectionEdge';
	/** The nodes of the connection, without the edges */
	node: Maybe<Comment>;
};

/** Arguments for filtering the CommentToCommentConnection connection */
export type CommentToCommentConnectionWhereArgs = {
	/** Comment author email address. */
	authorEmail: Maybe<Scalars['String']>;
	/** Array of author IDs to include comments for. */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Comment author URL. */
	authorUrl: Maybe<Scalars['String']>;
	/** Array of comment IDs to include. */
	commentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Include comments of a given type. */
	commentType: Maybe<Scalars['String']>;
	/** Include comments from a given array of comment types. */
	commentTypeIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn: Maybe<Scalars['String']>;
	/** Content object author ID to limit results by. */
	contentAuthor: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId: Maybe<Scalars['ID']>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Content object name to retrieve affiliated comments for. */
	contentName: Maybe<Scalars['String']>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent: Maybe<Scalars['Int']>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus: Maybe<Array<Maybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType: Maybe<Array<Maybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Karma score to retrieve matching comments for. */
	karma: Maybe<Scalars['Int']>;
	/** The cardinality of the order of the connection */
	order: Maybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby: Maybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent: Maybe<Scalars['Int']>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Search term(s) to retrieve matching comments for. */
	search: Maybe<Scalars['String']>;
	/** Comment status to limit results by. */
	status: Maybe<Scalars['String']>;
	/** Include comments for a specific user ID. */
	userId: Maybe<Scalars['ID']>;
};

/** Connection between the Comment type and the Comment type */
export type CommentToCommentConnection = {
	__typename?: 'CommentToCommentConnection';
	/** Edges for the CommentToCommentConnection connection */
	edges: Maybe<Array<Maybe<CommentToCommentConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Comment>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CommentToCommentConnectionEdge = {
	__typename?: 'CommentToCommentConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Comment>;
};

/** Arguments for filtering the UserToConsultantConnection connection */
export type UserToConsultantConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the User type and the consultant type */
export type UserToConsultantConnection = {
	__typename?: 'UserToConsultantConnection';
	/** Edges for the UserToConsultantConnection connection */
	edges: Maybe<Array<Maybe<UserToConsultantConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Consultant>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToConsultantConnectionEdge = {
	__typename?: 'UserToConsultantConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Consultant>;
};

/** The consultant type */
export type Consultant = Node &
	ContentNode &
	DatabaseIdentifier &
	NodeWithTemplate &
	UniformResourceIdentifiable &
	NodeWithTitle &
	NodeWithContentEditor &
	NodeWithAuthor &
	NodeWithFeaturedImage &
	NodeWithExcerpt &
	NodeWithComments &
	NodeWithTrackbacks &
	NodeWithRevisions &
	NodeWithPageAttributes &
	MenuItemLinkable & {
		__typename?: 'Consultant';
		/** Connection between the NodeWithAuthor type and the User type */
		author: Maybe<NodeWithAuthorToUserConnectionEdge>;
		/** The database identifier of the author of the node */
		authorDatabaseId: Maybe<Scalars['Int']>;
		/** The globally unique identifier of the author of the node */
		authorId: Maybe<Scalars['ID']>;
		/** Connection between the consultant type and the category type */
		categories: Maybe<ConsultantToCategoryConnection>;
		/** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
		commentCount: Maybe<Scalars['Int']>;
		/** Whether the comments are open or closed for this particular post. */
		commentStatus: Maybe<Scalars['String']>;
		/** Connection between the consultant type and the Comment type */
		comments: Maybe<ConsultantToCommentConnection>;
		/**
		 * The id field matches the WP_Post-&gt;ID field.
		 * @deprecated Deprecated in favor of the databaseId field
		 */
		consultantId: Scalars['Int'];
		/** The content of the post. */
		content: Maybe<Scalars['String']>;
		/** Connection between the ContentNode type and the ContentType type */
		contentType: Maybe<ContentNodeToContentTypeConnectionEdge>;
		/** The ID of the node in the database. */
		databaseId: Scalars['Int'];
		/** Post publishing date. */
		date: Maybe<Scalars['String']>;
		/** The publishing date set in GMT. */
		dateGmt: Maybe<Scalars['String']>;
		/** The desired slug of the post */
		desiredSlug: Maybe<Scalars['String']>;
		/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
		editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
		/** The RSS enclosure for the object */
		enclosure: Maybe<Scalars['String']>;
		/** Connection between the ContentNode type and the EnqueuedScript type */
		enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
		/** Connection between the ContentNode type and the EnqueuedStylesheet type */
		enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
		/** The excerpt of the post. */
		excerpt: Maybe<Scalars['String']>;
		/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
		featuredImage: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
		/** The database identifier for the featured image node assigned to the content node */
		featuredImageDatabaseId: Maybe<Scalars['Int']>;
		/** Globally unique ID of the featured image assigned to the node */
		featuredImageId: Maybe<Scalars['ID']>;
		/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
		guid: Maybe<Scalars['String']>;
		/** The globally unique identifier of the consultant object. */
		id: Scalars['ID'];
		/** Whether the object is a node in the preview state */
		isPreview: Maybe<Scalars['Boolean']>;
		/** Whether the object is restricted from the current viewer */
		isRestricted: Maybe<Scalars['Boolean']>;
		/** True if the node is a revision of another node */
		isRevision: Maybe<Scalars['Boolean']>;
		/** The user that most recently edited the node */
		lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
		/** The permalink of the post */
		link: Maybe<Scalars['String']>;
		/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
		menuOrder: Maybe<Scalars['Int']>;
		/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
		modified: Maybe<Scalars['String']>;
		/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
		modifiedGmt: Maybe<Scalars['String']>;
		/** Whether the pings are open or closed for this particular post. */
		pingStatus: Maybe<Scalars['String']>;
		/** URLs that have been pinged. */
		pinged: Maybe<Array<Maybe<Scalars['String']>>>;
		/** Connection between the consultant type and the postFormat type */
		postFormats: Maybe<ConsultantToPostFormatConnection>;
		/** Connection between the consultant type and the consultant type */
		preview: Maybe<ConsultantToPreviewConnectionEdge>;
		/** The database id of the preview node */
		previewRevisionDatabaseId: Maybe<Scalars['Int']>;
		/** Whether the object is a node in the preview state */
		previewRevisionId: Maybe<Scalars['ID']>;
		/** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
		revisionOf: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
		/** Connection between the consultant type and the consultant type */
		revisions: Maybe<ConsultantToRevisionConnection>;
		/** The Yoast SEO data of the consultant */
		seo: Maybe<PostTypeSeo>;
		/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
		slug: Maybe<Scalars['String']>;
		social: Maybe<Consultant_Social>;
		/** The current status of the object */
		status: Maybe<Scalars['String']>;
		/** The template assigned to a node of content */
		template: Maybe<ContentTemplate>;
		/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
		title: Maybe<Scalars['String']>;
		/** URLs queued to be pinged. */
		toPing: Maybe<Array<Maybe<Scalars['String']>>>;
		/** URI path for the resource */
		uri: Scalars['String'];
	};

/** The consultant type */
export type ConsultantCategoriesArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<ConsultantToCategoryConnectionWhereArgs>;
};

/** The consultant type */
export type ConsultantCommentsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<ConsultantToCommentConnectionWhereArgs>;
};

/** The consultant type */
export type ConsultantContentArgs = {
	format: Maybe<PostObjectFieldFormatEnum>;
};

/** The consultant type */
export type ConsultantEnqueuedScriptsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** The consultant type */
export type ConsultantEnqueuedStylesheetsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** The consultant type */
export type ConsultantExcerptArgs = {
	format: Maybe<PostObjectFieldFormatEnum>;
};

/** The consultant type */
export type ConsultantPostFormatsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<ConsultantToPostFormatConnectionWhereArgs>;
};

/** The consultant type */
export type ConsultantRevisionsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<ConsultantToRevisionConnectionWhereArgs>;
};

/** The consultant type */
export type ConsultantTitleArgs = {
	format: Maybe<PostObjectFieldFormatEnum>;
};

/** A node that can have a template associated with it */
export type NodeWithTemplate = {
	/** The template assigned to the node */
	template: Maybe<ContentTemplate>;
};

/** The template assigned to a node of content */
export type ContentTemplate = {
	/** The name of the template */
	templateName: Maybe<Scalars['String']>;
};

/** A node that NodeWith a title */
export type NodeWithTitle = {
	/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
	title: Maybe<Scalars['String']>;
};

/** A node that NodeWith a title */
export type NodeWithTitleTitleArgs = {
	format: Maybe<PostObjectFieldFormatEnum>;
};

/** A node that supports the content editor */
export type NodeWithContentEditor = {
	/** The content of the post. */
	content: Maybe<Scalars['String']>;
};

/** A node that supports the content editor */
export type NodeWithContentEditorContentArgs = {
	format: Maybe<PostObjectFieldFormatEnum>;
};

/** A node that can have an author assigned to it */
export type NodeWithAuthor = {
	/** Connection between the NodeWithAuthor type and the User type */
	author: Maybe<NodeWithAuthorToUserConnectionEdge>;
	/** The database identifier of the author of the node */
	authorDatabaseId: Maybe<Scalars['Int']>;
	/** The globally unique identifier of the author of the node */
	authorId: Maybe<Scalars['ID']>;
};

/** Connection between the NodeWithAuthor type and the User type */
export type NodeWithAuthorToUserConnectionEdge = {
	__typename?: 'NodeWithAuthorToUserConnectionEdge';
	/** The nodes of the connection, without the edges */
	node: Maybe<User>;
};

/** A node that can have a featured image set */
export type NodeWithFeaturedImage = {
	/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
	featuredImage: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
	/** The database identifier for the featured image node assigned to the content node */
	featuredImageDatabaseId: Maybe<Scalars['Int']>;
	/** Globally unique ID of the featured image assigned to the node */
	featuredImageId: Maybe<Scalars['ID']>;
};

/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
export type NodeWithFeaturedImageToMediaItemConnectionEdge = {
	__typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
	/** The nodes of the connection, without the edges */
	node: Maybe<MediaItem>;
};

/** The mediaItem type */
export type MediaItem = Node &
	ContentNode &
	DatabaseIdentifier &
	NodeWithTemplate &
	UniformResourceIdentifiable &
	NodeWithTitle &
	NodeWithAuthor &
	NodeWithComments &
	HierarchicalContentNode & {
		__typename?: 'MediaItem';
		/** Alternative text to display when resource is not displayed */
		altText: Maybe<Scalars['String']>;
		/** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
		ancestors: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
		/** Connection between the NodeWithAuthor type and the User type */
		author: Maybe<NodeWithAuthorToUserConnectionEdge>;
		/** The database identifier of the author of the node */
		authorDatabaseId: Maybe<Scalars['Int']>;
		/** The globally unique identifier of the author of the node */
		authorId: Maybe<Scalars['ID']>;
		/** The caption for the resource */
		caption: Maybe<Scalars['String']>;
		/** Connection between the HierarchicalContentNode type and the ContentNode type */
		children: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
		/** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
		commentCount: Maybe<Scalars['Int']>;
		/** Whether the comments are open or closed for this particular post. */
		commentStatus: Maybe<Scalars['String']>;
		/** Connection between the mediaItem type and the Comment type */
		comments: Maybe<MediaItemToCommentConnection>;
		/** Connection between the ContentNode type and the ContentType type */
		contentType: Maybe<ContentNodeToContentTypeConnectionEdge>;
		/** The ID of the node in the database. */
		databaseId: Scalars['Int'];
		/** Post publishing date. */
		date: Maybe<Scalars['String']>;
		/** The publishing date set in GMT. */
		dateGmt: Maybe<Scalars['String']>;
		/** Description of the image (stored as post_content) */
		description: Maybe<Scalars['String']>;
		/** The desired slug of the post */
		desiredSlug: Maybe<Scalars['String']>;
		/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
		editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
		/** The RSS enclosure for the object */
		enclosure: Maybe<Scalars['String']>;
		/** Connection between the ContentNode type and the EnqueuedScript type */
		enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
		/** Connection between the ContentNode type and the EnqueuedStylesheet type */
		enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
		/** The filesize in bytes of the resource */
		fileSize: Maybe<Scalars['Int']>;
		/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
		guid: Maybe<Scalars['String']>;
		/** The globally unique identifier of the attachment object. */
		id: Scalars['ID'];
		/** Whether the object is a node in the preview state */
		isPreview: Maybe<Scalars['Boolean']>;
		/** Whether the object is restricted from the current viewer */
		isRestricted: Maybe<Scalars['Boolean']>;
		/** The user that most recently edited the node */
		lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
		/** The permalink of the post */
		link: Maybe<Scalars['String']>;
		/** Details about the mediaItem */
		mediaDetails: Maybe<MediaDetails>;
		/**
		 * The id field matches the WP_Post-&gt;ID field.
		 * @deprecated Deprecated in favor of the databaseId field
		 */
		mediaItemId: Scalars['Int'];
		/** Url of the mediaItem */
		mediaItemUrl: Maybe<Scalars['String']>;
		/** Type of resource */
		mediaType: Maybe<Scalars['String']>;
		/** The mime type of the mediaItem */
		mimeType: Maybe<Scalars['String']>;
		/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
		modified: Maybe<Scalars['String']>;
		/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
		modifiedGmt: Maybe<Scalars['String']>;
		/** The parent of the node. The parent object can be of various types */
		parent: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
		/** Database id of the parent node */
		parentDatabaseId: Maybe<Scalars['Int']>;
		/** The globally unique identifier of the parent node. */
		parentId: Maybe<Scalars['ID']>;
		/** The database id of the preview node */
		previewRevisionDatabaseId: Maybe<Scalars['Int']>;
		/** Whether the object is a node in the preview state */
		previewRevisionId: Maybe<Scalars['ID']>;
		/** The Yoast SEO data of the mediaItem */
		seo: Maybe<PostTypeSeo>;
		/** The sizes attribute value for an image. */
		sizes: Maybe<Scalars['String']>;
		/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
		slug: Maybe<Scalars['String']>;
		/** Url of the mediaItem */
		sourceUrl: Maybe<Scalars['String']>;
		/** The srcset attribute specifies the URL of the image to use in different situations. It is a comma separated string of urls and their widths. */
		srcSet: Maybe<Scalars['String']>;
		/** The current status of the object */
		status: Maybe<Scalars['String']>;
		/** The template assigned to a node of content */
		template: Maybe<ContentTemplate>;
		/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
		title: Maybe<Scalars['String']>;
		/** URI path for the resource */
		uri: Scalars['String'];
	};

/** The mediaItem type */
export type MediaItemAncestorsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};

/** The mediaItem type */
export type MediaItemCaptionArgs = {
	format: Maybe<PostObjectFieldFormatEnum>;
};

/** The mediaItem type */
export type MediaItemChildrenArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};

/** The mediaItem type */
export type MediaItemCommentsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<MediaItemToCommentConnectionWhereArgs>;
};

/** The mediaItem type */
export type MediaItemDescriptionArgs = {
	format: Maybe<PostObjectFieldFormatEnum>;
};

/** The mediaItem type */
export type MediaItemEnqueuedScriptsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** The mediaItem type */
export type MediaItemEnqueuedStylesheetsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** The mediaItem type */
export type MediaItemFileSizeArgs = {
	size: Maybe<MediaItemSizeEnum>;
};

/** The mediaItem type */
export type MediaItemSizesArgs = {
	size: Maybe<MediaItemSizeEnum>;
};

/** The mediaItem type */
export type MediaItemSourceUrlArgs = {
	size: Maybe<MediaItemSizeEnum>;
};

/** The mediaItem type */
export type MediaItemSrcSetArgs = {
	size: Maybe<MediaItemSizeEnum>;
};

/** The mediaItem type */
export type MediaItemTitleArgs = {
	format: Maybe<PostObjectFieldFormatEnum>;
};

/** A node that can have comments associated with it */
export type NodeWithComments = {
	/** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
	commentCount: Maybe<Scalars['Int']>;
	/** Whether the comments are open or closed for this particular post. */
	commentStatus: Maybe<Scalars['String']>;
};

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNode = {
	/** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
	ancestors: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
	/** Connection between the HierarchicalContentNode type and the ContentNode type */
	children: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
	/** The parent of the node. The parent object can be of various types */
	parent: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
	/** Database id of the parent node */
	parentDatabaseId: Maybe<Scalars['Int']>;
	/** The globally unique identifier of the parent node. */
	parentId: Maybe<Scalars['ID']>;
};

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeAncestorsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeChildrenArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};

/** Arguments for filtering the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs = {
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToContentNodeAncestorsConnection = {
	__typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnection';
	/** Edges for the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
	edges: Maybe<
		Array<Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionEdge>>
	>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<ContentNode>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionEdge = {
	__typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<ContentNode>;
};

/** Arguments for filtering the HierarchicalContentNodeToContentNodeChildrenConnection connection */
export type HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs = {
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToContentNodeChildrenConnection = {
	__typename?: 'HierarchicalContentNodeToContentNodeChildrenConnection';
	/** Edges for the HierarchicalContentNodeToContentNodeChildrenConnection connection */
	edges: Maybe<
		Array<Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionEdge>>
	>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<ContentNode>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type HierarchicalContentNodeToContentNodeChildrenConnectionEdge = {
	__typename?: 'HierarchicalContentNodeToContentNodeChildrenConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<ContentNode>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToParentContentNodeConnectionEdge = {
	__typename?: 'HierarchicalContentNodeToParentContentNodeConnectionEdge';
	/** The nodes of the connection, without the edges */
	node: Maybe<ContentNode>;
};

/** Arguments for filtering the MediaItemToCommentConnection connection */
export type MediaItemToCommentConnectionWhereArgs = {
	/** Comment author email address. */
	authorEmail: Maybe<Scalars['String']>;
	/** Array of author IDs to include comments for. */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Comment author URL. */
	authorUrl: Maybe<Scalars['String']>;
	/** Array of comment IDs to include. */
	commentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Include comments of a given type. */
	commentType: Maybe<Scalars['String']>;
	/** Include comments from a given array of comment types. */
	commentTypeIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn: Maybe<Scalars['String']>;
	/** Content object author ID to limit results by. */
	contentAuthor: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId: Maybe<Scalars['ID']>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Content object name to retrieve affiliated comments for. */
	contentName: Maybe<Scalars['String']>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent: Maybe<Scalars['Int']>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus: Maybe<Array<Maybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType: Maybe<Array<Maybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Karma score to retrieve matching comments for. */
	karma: Maybe<Scalars['Int']>;
	/** The cardinality of the order of the connection */
	order: Maybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby: Maybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent: Maybe<Scalars['Int']>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Search term(s) to retrieve matching comments for. */
	search: Maybe<Scalars['String']>;
	/** Comment status to limit results by. */
	status: Maybe<Scalars['String']>;
	/** Include comments for a specific user ID. */
	userId: Maybe<Scalars['ID']>;
};

/** Connection between the mediaItem type and the Comment type */
export type MediaItemToCommentConnection = {
	__typename?: 'MediaItemToCommentConnection';
	/** Edges for the MediaItemToCommentConnection connection */
	edges: Maybe<Array<Maybe<MediaItemToCommentConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Comment>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type MediaItemToCommentConnectionEdge = {
	__typename?: 'MediaItemToCommentConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Comment>;
};

/** Connection between the ContentNode type and the EnqueuedScript type */
export type ContentNodeToEnqueuedScriptConnection = {
	__typename?: 'ContentNodeToEnqueuedScriptConnection';
	/** Edges for the ContentNodeToEnqueuedScriptConnection connection */
	edges: Maybe<Array<Maybe<ContentNodeToEnqueuedScriptConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<EnqueuedScript>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ContentNodeToEnqueuedScriptConnectionEdge = {
	__typename?: 'ContentNodeToEnqueuedScriptConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<EnqueuedScript>;
};

/** Script enqueued by the CMS */
export type EnqueuedScript = Node &
	EnqueuedAsset & {
		__typename?: 'EnqueuedScript';
		/** @todo */
		args: Maybe<Scalars['Boolean']>;
		/** Dependencies needed to use this asset */
		dependencies: Maybe<Array<Maybe<EnqueuedScript>>>;
		/** Extra information needed for the script */
		extra: Maybe<Scalars['String']>;
		/** The handle of the enqueued asset */
		handle: Maybe<Scalars['String']>;
		/** The globally unique ID for the object */
		id: Scalars['ID'];
		/** The source of the asset */
		src: Maybe<Scalars['String']>;
		/** The version of the enqueued asset */
		version: Maybe<Scalars['String']>;
	};

/** Asset enqueued by the CMS */
export type EnqueuedAsset = {
	/** @todo */
	args: Maybe<Scalars['Boolean']>;
	/** Dependencies needed to use this asset */
	dependencies: Maybe<Array<Maybe<EnqueuedScript>>>;
	/** Extra information needed for the script */
	extra: Maybe<Scalars['String']>;
	/** The handle of the enqueued asset */
	handle: Maybe<Scalars['String']>;
	/** The ID of the enqueued asset */
	id: Scalars['ID'];
	/** The source of the asset */
	src: Maybe<Scalars['String']>;
	/** The version of the enqueued asset */
	version: Maybe<Scalars['String']>;
};

/** Connection between the ContentNode type and the EnqueuedStylesheet type */
export type ContentNodeToEnqueuedStylesheetConnection = {
	__typename?: 'ContentNodeToEnqueuedStylesheetConnection';
	/** Edges for the ContentNodeToEnqueuedStylesheetConnection connection */
	edges: Maybe<Array<Maybe<ContentNodeToEnqueuedStylesheetConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<EnqueuedStylesheet>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ContentNodeToEnqueuedStylesheetConnectionEdge = {
	__typename?: 'ContentNodeToEnqueuedStylesheetConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<EnqueuedStylesheet>;
};

/** Stylesheet enqueued by the CMS */
export type EnqueuedStylesheet = Node &
	EnqueuedAsset & {
		__typename?: 'EnqueuedStylesheet';
		/** @todo */
		args: Maybe<Scalars['Boolean']>;
		/** Dependencies needed to use this asset */
		dependencies: Maybe<Array<Maybe<EnqueuedScript>>>;
		/** Extra information needed for the script */
		extra: Maybe<Scalars['String']>;
		/** The handle of the enqueued asset */
		handle: Maybe<Scalars['String']>;
		/** The globally unique ID for the object */
		id: Scalars['ID'];
		/** The source of the asset */
		src: Maybe<Scalars['String']>;
		/** The version of the enqueued asset */
		version: Maybe<Scalars['String']>;
	};

/** The size of the media item object. */
export enum MediaItemSizeEnum {
	/** MediaItem with the large size */
	Large = 'LARGE',
	/** MediaItem with the medium size */
	Medium = 'MEDIUM',
	/** MediaItem with the medium_large size */
	MediumLarge = 'MEDIUM_LARGE',
	/** MediaItem with the post-thumbnail size */
	PostThumbnail = 'POST_THUMBNAIL',
	/** MediaItem with the thumbnail size */
	Thumbnail = 'THUMBNAIL',
	/** MediaItem with the twentytwenty-fullscreen size */
	TwentytwentyFullscreen = 'TWENTYTWENTY_FULLSCREEN',
	/** MediaItem with the 1536x1536 size */
	'1536X1536' = '_1536X1536',
	/** MediaItem with the 2048x2048 size */
	'2048X2048' = '_2048X2048'
}

/** Connection between the ContentNode type and the User type */
export type ContentNodeToEditLastConnectionEdge = {
	__typename?: 'ContentNodeToEditLastConnectionEdge';
	/** The nodes of the connection, without the edges */
	node: Maybe<User>;
};

/** File details for a Media Item */
export type MediaDetails = {
	__typename?: 'MediaDetails';
	/** The height of the mediaItem */
	file: Maybe<Scalars['String']>;
	/** The height of the mediaItem */
	height: Maybe<Scalars['Int']>;
	meta: Maybe<MediaItemMeta>;
	/** The available sizes of the mediaItem */
	sizes: Maybe<Array<Maybe<MediaSize>>>;
	/** The width of the mediaItem */
	width: Maybe<Scalars['Int']>;
};

/** Meta connected to a MediaItem */
export type MediaItemMeta = {
	__typename?: 'MediaItemMeta';
	aperture: Maybe<Scalars['Float']>;
	camera: Maybe<Scalars['String']>;
	caption: Maybe<Scalars['String']>;
	copyright: Maybe<Scalars['String']>;
	createdTimestamp: Maybe<Scalars['Int']>;
	credit: Maybe<Scalars['String']>;
	focalLength: Maybe<Scalars['Float']>;
	iso: Maybe<Scalars['Int']>;
	keywords: Maybe<Array<Maybe<Scalars['String']>>>;
	orientation: Maybe<Scalars['String']>;
	shutterSpeed: Maybe<Scalars['Float']>;
	title: Maybe<Scalars['String']>;
};

/** Details of an available size for a media item */
export type MediaSize = {
	__typename?: 'MediaSize';
	/** The file of the for the referenced size */
	file: Maybe<Scalars['String']>;
	/** The filesize of the resource */
	fileSize: Maybe<Scalars['Int']>;
	/** The height of the for the referenced size */
	height: Maybe<Scalars['String']>;
	/** The mime type of the resource */
	mimeType: Maybe<Scalars['String']>;
	/** The referenced size name */
	name: Maybe<Scalars['String']>;
	/** The url of the for the referenced size */
	sourceUrl: Maybe<Scalars['String']>;
	/** The width of the for the referenced size */
	width: Maybe<Scalars['String']>;
};

export type PostTypeSeo = {
	__typename?: 'PostTypeSEO';
	breadcrumbs: Maybe<Array<Maybe<SeoPostTypeBreadcrumbs>>>;
	canonical: Maybe<Scalars['String']>;
	cornerstone: Maybe<Scalars['Boolean']>;
	focuskw: Maybe<Scalars['String']>;
	metaDesc: Maybe<Scalars['String']>;
	metaKeywords: Maybe<Scalars['String']>;
	metaRobotsNofollow: Maybe<Scalars['String']>;
	metaRobotsNoindex: Maybe<Scalars['String']>;
	opengraphAuthor: Maybe<Scalars['String']>;
	opengraphDescription: Maybe<Scalars['String']>;
	opengraphImage: Maybe<MediaItem>;
	opengraphModifiedTime: Maybe<Scalars['String']>;
	opengraphPublishedTime: Maybe<Scalars['String']>;
	opengraphPublisher: Maybe<Scalars['String']>;
	opengraphSiteName: Maybe<Scalars['String']>;
	opengraphTitle: Maybe<Scalars['String']>;
	opengraphType: Maybe<Scalars['String']>;
	opengraphUrl: Maybe<Scalars['String']>;
	schema: Maybe<SeoPostTypeSchema>;
	title: Maybe<Scalars['String']>;
	twitterDescription: Maybe<Scalars['String']>;
	twitterImage: Maybe<MediaItem>;
	twitterTitle: Maybe<Scalars['String']>;
};

export type SeoPostTypeBreadcrumbs = {
	__typename?: 'SEOPostTypeBreadcrumbs';
	text: Maybe<Scalars['String']>;
	url: Maybe<Scalars['String']>;
};

/** The Schema types */
export type SeoPostTypeSchema = {
	__typename?: 'SEOPostTypeSchema';
	articleType: Maybe<Array<Maybe<Scalars['String']>>>;
	pageType: Maybe<Array<Maybe<Scalars['String']>>>;
	raw: Maybe<Scalars['String']>;
};

/** A node that can have an excerpt */
export type NodeWithExcerpt = {
	/** The excerpt of the post. */
	excerpt: Maybe<Scalars['String']>;
};

/** A node that can have an excerpt */
export type NodeWithExcerptExcerptArgs = {
	format: Maybe<PostObjectFieldFormatEnum>;
};

/** A node that can have trackbacks and pingbacks */
export type NodeWithTrackbacks = {
	/** Whether the pings are open or closed for this particular post. */
	pingStatus: Maybe<Scalars['String']>;
	/** URLs that have been pinged. */
	pinged: Maybe<Array<Maybe<Scalars['String']>>>;
	/** URLs queued to be pinged. */
	toPing: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** A node that can have revisions */
export type NodeWithRevisions = {
	/** True if the node is a revision of another node */
	isRevision: Maybe<Scalars['Boolean']>;
	/** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
	revisionOf: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
};

/** Connection between the NodeWithRevisions type and the ContentNode type */
export type NodeWithRevisionsToContentNodeConnectionEdge = {
	__typename?: 'NodeWithRevisionsToContentNodeConnectionEdge';
	/** The nodes of the connection, without the edges */
	node: Maybe<ContentNode>;
};

/** A node that can have page attributes */
export type NodeWithPageAttributes = {
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder: Maybe<Scalars['Int']>;
};

/** Nodes that can be linked to as Menu Items */
export type MenuItemLinkable = {
	/** The unique resource identifier path */
	databaseId: Scalars['Int'];
	/** The unique resource identifier path */
	id: Scalars['ID'];
	/** The unique resource identifier path */
	uri: Scalars['String'];
};

/** Arguments for filtering the ConsultantToCategoryConnection connection */
export type ConsultantToCategoryConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache: Maybe<Scalars['Boolean']>;
};

/** Options for ordering the connection by */
export enum TermObjectsConnectionOrderbyEnum {
	Count = 'COUNT',
	Description = 'DESCRIPTION',
	Name = 'NAME',
	Slug = 'SLUG',
	TermGroup = 'TERM_GROUP',
	TermId = 'TERM_ID',
	TermOrder = 'TERM_ORDER'
}

/** Connection between the consultant type and the category type */
export type ConsultantToCategoryConnection = {
	__typename?: 'ConsultantToCategoryConnection';
	/** Edges for the ConsultantToCategoryConnection connection */
	edges: Maybe<Array<Maybe<ConsultantToCategoryConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Category>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ConsultantToCategoryConnectionEdge = {
	__typename?: 'ConsultantToCategoryConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The Yoast SEO Primary category */
	isPrimary: Maybe<Scalars['Boolean']>;
	/** The item at the end of the edge */
	node: Maybe<Category>;
};

/** The category type */
export type Category = Node &
	TermNode &
	DatabaseIdentifier &
	UniformResourceIdentifiable &
	HierarchicalTermNode &
	MenuItemLinkable & {
		__typename?: 'Category';
		/** Connection between the category type and the about type */
		abouts: Maybe<CategoryToAboutConnection>;
		/** The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
		ancestors: Maybe<CategoryToAncestorsCategoryConnection>;
		/**
		 * The id field matches the WP_Post-&gt;ID field.
		 * @deprecated Deprecated in favor of databaseId
		 */
		categoryId: Maybe<Scalars['Int']>;
		/** Connection between the category type and the category type */
		children: Maybe<CategoryToCategoryConnection>;
		/** Connection between the category type and the consultant type */
		consultants: Maybe<CategoryToConsultantConnection>;
		/** Connection between the category type and the ContentNode type */
		contentNodes: Maybe<CategoryToContentNodeConnection>;
		/** The number of objects connected to the object */
		count: Maybe<Scalars['Int']>;
		/** Identifies the primary key from the database. */
		databaseId: Scalars['Int'];
		/** The description of the object */
		description: Maybe<Scalars['String']>;
		/** Connection between the TermNode type and the EnqueuedScript type */
		enqueuedScripts: Maybe<TermNodeToEnqueuedScriptConnection>;
		/** Connection between the TermNode type and the EnqueuedStylesheet type */
		enqueuedStylesheets: Maybe<TermNodeToEnqueuedStylesheetConnection>;
		/** The globally unique ID for the object */
		id: Scalars['ID'];
		/** Whether the object is restricted from the current viewer */
		isRestricted: Maybe<Scalars['Boolean']>;
		/** The link to the term */
		link: Maybe<Scalars['String']>;
		/** The human friendly name of the object. */
		name: Maybe<Scalars['String']>;
		/** Connection between the category type and the category type */
		parent: Maybe<CategoryToParentCategoryConnectionEdge>;
		/** Database id of the parent node */
		parentDatabaseId: Maybe<Scalars['Int']>;
		/** The globally unique identifier of the parent node. */
		parentId: Maybe<Scalars['ID']>;
		/** Connection between the category type and the position type */
		positions: Maybe<CategoryToPositionConnection>;
		/** Connection between the category type and the post type */
		posts: Maybe<CategoryToPostConnection>;
		/** The Yoast SEO data of the Categories taxonomy. */
		seo: Maybe<TaxonomySeo>;
		/** An alphanumeric identifier for the object unique to its type. */
		slug: Maybe<Scalars['String']>;
		/** Connection between the category type and the Taxonomy type */
		taxonomy: Maybe<CategoryToTaxonomyConnectionEdge>;
		/** The ID of the term group that this term object belongs to */
		termGroupId: Maybe<Scalars['Int']>;
		/** The taxonomy ID that the object is associated with */
		termTaxonomyId: Maybe<Scalars['Int']>;
		/** Connection between the category type and the testimonial type */
		testimonials: Maybe<CategoryToTestimonialConnection>;
		/** The unique resource identifier path */
		uri: Scalars['String'];
	};

/** The category type */
export type CategoryAboutsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<CategoryToAboutConnectionWhereArgs>;
};

/** The category type */
export type CategoryAncestorsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** The category type */
export type CategoryChildrenArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<CategoryToCategoryConnectionWhereArgs>;
};

/** The category type */
export type CategoryConsultantsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<CategoryToConsultantConnectionWhereArgs>;
};

/** The category type */
export type CategoryContentNodesArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<CategoryToContentNodeConnectionWhereArgs>;
};

/** The category type */
export type CategoryEnqueuedScriptsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** The category type */
export type CategoryEnqueuedStylesheetsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** The category type */
export type CategoryPositionsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<CategoryToPositionConnectionWhereArgs>;
};

/** The category type */
export type CategoryPostsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<CategoryToPostConnectionWhereArgs>;
};

/** The category type */
export type CategoryTestimonialsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<CategoryToTestimonialConnectionWhereArgs>;
};

/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNode = {
	/** The number of objects connected to the object */
	count: Maybe<Scalars['Int']>;
	/** Identifies the primary key from the database. */
	databaseId: Scalars['Int'];
	/** The description of the object */
	description: Maybe<Scalars['String']>;
	/** Connection between the TermNode type and the EnqueuedScript type */
	enqueuedScripts: Maybe<TermNodeToEnqueuedScriptConnection>;
	/** Connection between the TermNode type and the EnqueuedStylesheet type */
	enqueuedStylesheets: Maybe<TermNodeToEnqueuedStylesheetConnection>;
	/** Unique identifier for the term */
	id: Scalars['ID'];
	/** Whether the object is restricted from the current viewer */
	isRestricted: Maybe<Scalars['Boolean']>;
	/** The link to the term */
	link: Maybe<Scalars['String']>;
	/** The human friendly name of the object. */
	name: Maybe<Scalars['String']>;
	/** An alphanumeric identifier for the object unique to its type. */
	slug: Maybe<Scalars['String']>;
	/** The ID of the term group that this term object belongs to */
	termGroupId: Maybe<Scalars['Int']>;
	/** The taxonomy ID that the object is associated with */
	termTaxonomyId: Maybe<Scalars['Int']>;
	/** The unique resource identifier path */
	uri: Scalars['String'];
};

/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNodeEnqueuedScriptsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNodeEnqueuedStylesheetsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** Connection between the TermNode type and the EnqueuedScript type */
export type TermNodeToEnqueuedScriptConnection = {
	__typename?: 'TermNodeToEnqueuedScriptConnection';
	/** Edges for the TermNodeToEnqueuedScriptConnection connection */
	edges: Maybe<Array<Maybe<TermNodeToEnqueuedScriptConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<EnqueuedScript>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TermNodeToEnqueuedScriptConnectionEdge = {
	__typename?: 'TermNodeToEnqueuedScriptConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<EnqueuedScript>;
};

/** Connection between the TermNode type and the EnqueuedStylesheet type */
export type TermNodeToEnqueuedStylesheetConnection = {
	__typename?: 'TermNodeToEnqueuedStylesheetConnection';
	/** Edges for the TermNodeToEnqueuedStylesheetConnection connection */
	edges: Maybe<Array<Maybe<TermNodeToEnqueuedStylesheetConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<EnqueuedStylesheet>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TermNodeToEnqueuedStylesheetConnectionEdge = {
	__typename?: 'TermNodeToEnqueuedStylesheetConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<EnqueuedStylesheet>;
};

/** Term node with hierarchical (parent/child) relationships */
export type HierarchicalTermNode = {
	/** Database id of the parent node */
	parentDatabaseId: Maybe<Scalars['Int']>;
	/** The globally unique identifier of the parent node. */
	parentId: Maybe<Scalars['ID']>;
};

/** Arguments for filtering the CategoryToAboutConnection connection */
export type CategoryToAboutConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the category type and the about type */
export type CategoryToAboutConnection = {
	__typename?: 'CategoryToAboutConnection';
	/** Edges for the CategoryToAboutConnection connection */
	edges: Maybe<Array<Maybe<CategoryToAboutConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<About>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CategoryToAboutConnectionEdge = {
	__typename?: 'CategoryToAboutConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<About>;
};

/** Connection between the category type and the category type */
export type CategoryToAncestorsCategoryConnection = {
	__typename?: 'CategoryToAncestorsCategoryConnection';
	/** Edges for the CategoryToAncestorsCategoryConnection connection */
	edges: Maybe<Array<Maybe<CategoryToAncestorsCategoryConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Category>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CategoryToAncestorsCategoryConnectionEdge = {
	__typename?: 'CategoryToAncestorsCategoryConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Category>;
};

/** Arguments for filtering the CategoryToCategoryConnection connection */
export type CategoryToCategoryConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache: Maybe<Scalars['Boolean']>;
};

/** Connection between the category type and the category type */
export type CategoryToCategoryConnection = {
	__typename?: 'CategoryToCategoryConnection';
	/** Edges for the CategoryToCategoryConnection connection */
	edges: Maybe<Array<Maybe<CategoryToCategoryConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Category>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CategoryToCategoryConnectionEdge = {
	__typename?: 'CategoryToCategoryConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Category>;
};

/** Arguments for filtering the CategoryToConsultantConnection connection */
export type CategoryToConsultantConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the category type and the consultant type */
export type CategoryToConsultantConnection = {
	__typename?: 'CategoryToConsultantConnection';
	/** Edges for the CategoryToConsultantConnection connection */
	edges: Maybe<Array<Maybe<CategoryToConsultantConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Consultant>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CategoryToConsultantConnectionEdge = {
	__typename?: 'CategoryToConsultantConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Consultant>;
};

/** Arguments for filtering the CategoryToContentNodeConnection connection */
export type CategoryToContentNodeConnectionWhereArgs = {
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the category type and the ContentNode type */
export type CategoryToContentNodeConnection = {
	__typename?: 'CategoryToContentNodeConnection';
	/** Edges for the CategoryToContentNodeConnection connection */
	edges: Maybe<Array<Maybe<CategoryToContentNodeConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<ContentNode>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CategoryToContentNodeConnectionEdge = {
	__typename?: 'CategoryToContentNodeConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<ContentNode>;
};

/** Connection between the category type and the category type */
export type CategoryToParentCategoryConnectionEdge = {
	__typename?: 'CategoryToParentCategoryConnectionEdge';
	/** The nodes of the connection, without the edges */
	node: Maybe<Category>;
};

/** Arguments for filtering the CategoryToPositionConnection connection */
export type CategoryToPositionConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the category type and the position type */
export type CategoryToPositionConnection = {
	__typename?: 'CategoryToPositionConnection';
	/** Edges for the CategoryToPositionConnection connection */
	edges: Maybe<Array<Maybe<CategoryToPositionConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Position>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CategoryToPositionConnectionEdge = {
	__typename?: 'CategoryToPositionConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Position>;
};

/** The position type */
export type Position = Node &
	ContentNode &
	DatabaseIdentifier &
	NodeWithTemplate &
	UniformResourceIdentifiable &
	NodeWithTitle &
	NodeWithContentEditor &
	NodeWithAuthor &
	NodeWithFeaturedImage &
	NodeWithExcerpt &
	NodeWithComments &
	NodeWithTrackbacks &
	NodeWithRevisions &
	NodeWithPageAttributes &
	MenuItemLinkable & {
		__typename?: 'Position';
		/** Connection between the NodeWithAuthor type and the User type */
		author: Maybe<NodeWithAuthorToUserConnectionEdge>;
		/** The database identifier of the author of the node */
		authorDatabaseId: Maybe<Scalars['Int']>;
		/** The globally unique identifier of the author of the node */
		authorId: Maybe<Scalars['ID']>;
		/** Connection between the position type and the category type */
		categories: Maybe<PositionToCategoryConnection>;
		/** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
		commentCount: Maybe<Scalars['Int']>;
		/** Whether the comments are open or closed for this particular post. */
		commentStatus: Maybe<Scalars['String']>;
		/** Connection between the position type and the Comment type */
		comments: Maybe<PositionToCommentConnection>;
		/** The content of the post. */
		content: Maybe<Scalars['String']>;
		/** Connection between the ContentNode type and the ContentType type */
		contentType: Maybe<ContentNodeToContentTypeConnectionEdge>;
		/** The ID of the node in the database. */
		databaseId: Scalars['Int'];
		/** Post publishing date. */
		date: Maybe<Scalars['String']>;
		/** The publishing date set in GMT. */
		dateGmt: Maybe<Scalars['String']>;
		/** The desired slug of the post */
		desiredSlug: Maybe<Scalars['String']>;
		/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
		editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
		/** The RSS enclosure for the object */
		enclosure: Maybe<Scalars['String']>;
		/** Connection between the ContentNode type and the EnqueuedScript type */
		enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
		/** Connection between the ContentNode type and the EnqueuedStylesheet type */
		enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
		/** The excerpt of the post. */
		excerpt: Maybe<Scalars['String']>;
		/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
		featuredImage: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
		/** The database identifier for the featured image node assigned to the content node */
		featuredImageDatabaseId: Maybe<Scalars['Int']>;
		/** Globally unique ID of the featured image assigned to the node */
		featuredImageId: Maybe<Scalars['ID']>;
		/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
		guid: Maybe<Scalars['String']>;
		/** The globally unique identifier of the position object. */
		id: Scalars['ID'];
		/** Whether the object is a node in the preview state */
		isPreview: Maybe<Scalars['Boolean']>;
		/** Whether the object is restricted from the current viewer */
		isRestricted: Maybe<Scalars['Boolean']>;
		/** True if the node is a revision of another node */
		isRevision: Maybe<Scalars['Boolean']>;
		/** The user that most recently edited the node */
		lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
		/** The permalink of the post */
		link: Maybe<Scalars['String']>;
		/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
		menuOrder: Maybe<Scalars['Int']>;
		/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
		modified: Maybe<Scalars['String']>;
		/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
		modifiedGmt: Maybe<Scalars['String']>;
		/** Whether the pings are open or closed for this particular post. */
		pingStatus: Maybe<Scalars['String']>;
		/** URLs that have been pinged. */
		pinged: Maybe<Array<Maybe<Scalars['String']>>>;
		/**
		 * The id field matches the WP_Post-&gt;ID field.
		 * @deprecated Deprecated in favor of the databaseId field
		 */
		positionId: Scalars['Int'];
		/** Connection between the position type and the postFormat type */
		postFormats: Maybe<PositionToPostFormatConnection>;
		/** Connection between the position type and the position type */
		preview: Maybe<PositionToPreviewConnectionEdge>;
		/** The database id of the preview node */
		previewRevisionDatabaseId: Maybe<Scalars['Int']>;
		/** Whether the object is a node in the preview state */
		previewRevisionId: Maybe<Scalars['ID']>;
		/** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
		revisionOf: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
		/** Connection between the position type and the position type */
		revisions: Maybe<PositionToRevisionConnection>;
		/** The Yoast SEO data of the position */
		seo: Maybe<PostTypeSeo>;
		/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
		slug: Maybe<Scalars['String']>;
		social: Maybe<Position_Social>;
		/** The current status of the object */
		status: Maybe<Scalars['String']>;
		/** The template assigned to a node of content */
		template: Maybe<ContentTemplate>;
		/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
		title: Maybe<Scalars['String']>;
		/** URLs queued to be pinged. */
		toPing: Maybe<Array<Maybe<Scalars['String']>>>;
		/** URI path for the resource */
		uri: Scalars['String'];
	};

/** The position type */
export type PositionCategoriesArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<PositionToCategoryConnectionWhereArgs>;
};

/** The position type */
export type PositionCommentsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<PositionToCommentConnectionWhereArgs>;
};

/** The position type */
export type PositionContentArgs = {
	format: Maybe<PostObjectFieldFormatEnum>;
};

/** The position type */
export type PositionEnqueuedScriptsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** The position type */
export type PositionEnqueuedStylesheetsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** The position type */
export type PositionExcerptArgs = {
	format: Maybe<PostObjectFieldFormatEnum>;
};

/** The position type */
export type PositionPostFormatsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<PositionToPostFormatConnectionWhereArgs>;
};

/** The position type */
export type PositionRevisionsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<PositionToRevisionConnectionWhereArgs>;
};

/** The position type */
export type PositionTitleArgs = {
	format: Maybe<PostObjectFieldFormatEnum>;
};

/** Arguments for filtering the PositionToCategoryConnection connection */
export type PositionToCategoryConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache: Maybe<Scalars['Boolean']>;
};

/** Connection between the position type and the category type */
export type PositionToCategoryConnection = {
	__typename?: 'PositionToCategoryConnection';
	/** Edges for the PositionToCategoryConnection connection */
	edges: Maybe<Array<Maybe<PositionToCategoryConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Category>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PositionToCategoryConnectionEdge = {
	__typename?: 'PositionToCategoryConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The Yoast SEO Primary category */
	isPrimary: Maybe<Scalars['Boolean']>;
	/** The item at the end of the edge */
	node: Maybe<Category>;
};

/** Arguments for filtering the PositionToCommentConnection connection */
export type PositionToCommentConnectionWhereArgs = {
	/** Comment author email address. */
	authorEmail: Maybe<Scalars['String']>;
	/** Array of author IDs to include comments for. */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Comment author URL. */
	authorUrl: Maybe<Scalars['String']>;
	/** Array of comment IDs to include. */
	commentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Include comments of a given type. */
	commentType: Maybe<Scalars['String']>;
	/** Include comments from a given array of comment types. */
	commentTypeIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn: Maybe<Scalars['String']>;
	/** Content object author ID to limit results by. */
	contentAuthor: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId: Maybe<Scalars['ID']>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Content object name to retrieve affiliated comments for. */
	contentName: Maybe<Scalars['String']>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent: Maybe<Scalars['Int']>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus: Maybe<Array<Maybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType: Maybe<Array<Maybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Karma score to retrieve matching comments for. */
	karma: Maybe<Scalars['Int']>;
	/** The cardinality of the order of the connection */
	order: Maybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby: Maybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent: Maybe<Scalars['Int']>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Search term(s) to retrieve matching comments for. */
	search: Maybe<Scalars['String']>;
	/** Comment status to limit results by. */
	status: Maybe<Scalars['String']>;
	/** Include comments for a specific user ID. */
	userId: Maybe<Scalars['ID']>;
};

/** Connection between the position type and the Comment type */
export type PositionToCommentConnection = {
	__typename?: 'PositionToCommentConnection';
	/** Edges for the PositionToCommentConnection connection */
	edges: Maybe<Array<Maybe<PositionToCommentConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Comment>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PositionToCommentConnectionEdge = {
	__typename?: 'PositionToCommentConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Comment>;
};

/** Arguments for filtering the PositionToPostFormatConnection connection */
export type PositionToPostFormatConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache: Maybe<Scalars['Boolean']>;
};

/** Connection between the position type and the postFormat type */
export type PositionToPostFormatConnection = {
	__typename?: 'PositionToPostFormatConnection';
	/** Edges for the PositionToPostFormatConnection connection */
	edges: Maybe<Array<Maybe<PositionToPostFormatConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<PostFormat>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PositionToPostFormatConnectionEdge = {
	__typename?: 'PositionToPostFormatConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<PostFormat>;
};

/** The postFormat type */
export type PostFormat = Node &
	TermNode &
	DatabaseIdentifier &
	UniformResourceIdentifiable & {
		__typename?: 'PostFormat';
		/** Connection between the postFormat type and the about type */
		abouts: Maybe<PostFormatToAboutConnection>;
		/** Connection between the postFormat type and the consultant type */
		consultants: Maybe<PostFormatToConsultantConnection>;
		/** Connection between the postFormat type and the ContentNode type */
		contentNodes: Maybe<PostFormatToContentNodeConnection>;
		/** The number of objects connected to the object */
		count: Maybe<Scalars['Int']>;
		/** Identifies the primary key from the database. */
		databaseId: Scalars['Int'];
		/** The description of the object */
		description: Maybe<Scalars['String']>;
		/** Connection between the TermNode type and the EnqueuedScript type */
		enqueuedScripts: Maybe<TermNodeToEnqueuedScriptConnection>;
		/** Connection between the TermNode type and the EnqueuedStylesheet type */
		enqueuedStylesheets: Maybe<TermNodeToEnqueuedStylesheetConnection>;
		/** The globally unique ID for the object */
		id: Scalars['ID'];
		/** Whether the object is restricted from the current viewer */
		isRestricted: Maybe<Scalars['Boolean']>;
		/** The link to the term */
		link: Maybe<Scalars['String']>;
		/** The human friendly name of the object. */
		name: Maybe<Scalars['String']>;
		/** Connection between the postFormat type and the position type */
		positions: Maybe<PostFormatToPositionConnection>;
		/**
		 * The id field matches the WP_Post-&gt;ID field.
		 * @deprecated Deprecated in favor of databaseId
		 */
		postFormatId: Maybe<Scalars['Int']>;
		/** Connection between the postFormat type and the post type */
		posts: Maybe<PostFormatToPostConnection>;
		/** The Yoast SEO data of the Formats taxonomy. */
		seo: Maybe<TaxonomySeo>;
		/** An alphanumeric identifier for the object unique to its type. */
		slug: Maybe<Scalars['String']>;
		/** Connection between the postFormat type and the Taxonomy type */
		taxonomy: Maybe<PostFormatToTaxonomyConnectionEdge>;
		/** The ID of the term group that this term object belongs to */
		termGroupId: Maybe<Scalars['Int']>;
		/** The taxonomy ID that the object is associated with */
		termTaxonomyId: Maybe<Scalars['Int']>;
		/** Connection between the postFormat type and the testimonial type */
		testimonials: Maybe<PostFormatToTestimonialConnection>;
		/** The unique resource identifier path */
		uri: Scalars['String'];
	};

/** The postFormat type */
export type PostFormatAboutsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<PostFormatToAboutConnectionWhereArgs>;
};

/** The postFormat type */
export type PostFormatConsultantsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<PostFormatToConsultantConnectionWhereArgs>;
};

/** The postFormat type */
export type PostFormatContentNodesArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<PostFormatToContentNodeConnectionWhereArgs>;
};

/** The postFormat type */
export type PostFormatEnqueuedScriptsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** The postFormat type */
export type PostFormatEnqueuedStylesheetsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** The postFormat type */
export type PostFormatPositionsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<PostFormatToPositionConnectionWhereArgs>;
};

/** The postFormat type */
export type PostFormatPostsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<PostFormatToPostConnectionWhereArgs>;
};

/** The postFormat type */
export type PostFormatTestimonialsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<PostFormatToTestimonialConnectionWhereArgs>;
};

/** Arguments for filtering the PostFormatToAboutConnection connection */
export type PostFormatToAboutConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the postFormat type and the about type */
export type PostFormatToAboutConnection = {
	__typename?: 'PostFormatToAboutConnection';
	/** Edges for the PostFormatToAboutConnection connection */
	edges: Maybe<Array<Maybe<PostFormatToAboutConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<About>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostFormatToAboutConnectionEdge = {
	__typename?: 'PostFormatToAboutConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<About>;
};

/** Arguments for filtering the PostFormatToConsultantConnection connection */
export type PostFormatToConsultantConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the postFormat type and the consultant type */
export type PostFormatToConsultantConnection = {
	__typename?: 'PostFormatToConsultantConnection';
	/** Edges for the PostFormatToConsultantConnection connection */
	edges: Maybe<Array<Maybe<PostFormatToConsultantConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Consultant>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostFormatToConsultantConnectionEdge = {
	__typename?: 'PostFormatToConsultantConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Consultant>;
};

/** Arguments for filtering the PostFormatToContentNodeConnection connection */
export type PostFormatToContentNodeConnectionWhereArgs = {
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the postFormat type and the ContentNode type */
export type PostFormatToContentNodeConnection = {
	__typename?: 'PostFormatToContentNodeConnection';
	/** Edges for the PostFormatToContentNodeConnection connection */
	edges: Maybe<Array<Maybe<PostFormatToContentNodeConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<ContentNode>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostFormatToContentNodeConnectionEdge = {
	__typename?: 'PostFormatToContentNodeConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<ContentNode>;
};

/** Arguments for filtering the PostFormatToPositionConnection connection */
export type PostFormatToPositionConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the postFormat type and the position type */
export type PostFormatToPositionConnection = {
	__typename?: 'PostFormatToPositionConnection';
	/** Edges for the PostFormatToPositionConnection connection */
	edges: Maybe<Array<Maybe<PostFormatToPositionConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Position>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostFormatToPositionConnectionEdge = {
	__typename?: 'PostFormatToPositionConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Position>;
};

/** Arguments for filtering the PostFormatToPostConnection connection */
export type PostFormatToPostConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Tag Slug */
	tag: Maybe<Scalars['String']>;
	/** Use Tag ID */
	tagId: Maybe<Scalars['String']>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag slugs, used to display objects from one tag OR another */
	tagSlugAnd: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of tag slugs, used to exclude objects in specified tags */
	tagSlugIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the postFormat type and the post type */
export type PostFormatToPostConnection = {
	__typename?: 'PostFormatToPostConnection';
	/** Edges for the PostFormatToPostConnection connection */
	edges: Maybe<Array<Maybe<PostFormatToPostConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Post>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostFormatToPostConnectionEdge = {
	__typename?: 'PostFormatToPostConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Post>;
};

/** The post type */
export type Post = Node &
	ContentNode &
	DatabaseIdentifier &
	NodeWithTemplate &
	UniformResourceIdentifiable &
	NodeWithTitle &
	NodeWithContentEditor &
	NodeWithAuthor &
	NodeWithFeaturedImage &
	NodeWithExcerpt &
	NodeWithComments &
	NodeWithTrackbacks &
	NodeWithRevisions &
	MenuItemLinkable & {
		__typename?: 'Post';
		/** Connection between the NodeWithAuthor type and the User type */
		author: Maybe<NodeWithAuthorToUserConnectionEdge>;
		/** The database identifier of the author of the node */
		authorDatabaseId: Maybe<Scalars['Int']>;
		/** The globally unique identifier of the author of the node */
		authorId: Maybe<Scalars['ID']>;
		/** Connection between the post type and the category type */
		categories: Maybe<PostToCategoryConnection>;
		/** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
		commentCount: Maybe<Scalars['Int']>;
		/** Whether the comments are open or closed for this particular post. */
		commentStatus: Maybe<Scalars['String']>;
		/** Connection between the post type and the Comment type */
		comments: Maybe<PostToCommentConnection>;
		/** The content of the post. */
		content: Maybe<Scalars['String']>;
		/** Connection between the ContentNode type and the ContentType type */
		contentType: Maybe<ContentNodeToContentTypeConnectionEdge>;
		/** The ID of the node in the database. */
		databaseId: Scalars['Int'];
		/** Post publishing date. */
		date: Maybe<Scalars['String']>;
		/** The publishing date set in GMT. */
		dateGmt: Maybe<Scalars['String']>;
		/** The desired slug of the post */
		desiredSlug: Maybe<Scalars['String']>;
		/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
		editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
		/** The RSS enclosure for the object */
		enclosure: Maybe<Scalars['String']>;
		/** Connection between the ContentNode type and the EnqueuedScript type */
		enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
		/** Connection between the ContentNode type and the EnqueuedStylesheet type */
		enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
		/** The excerpt of the post. */
		excerpt: Maybe<Scalars['String']>;
		/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
		featuredImage: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
		/** The database identifier for the featured image node assigned to the content node */
		featuredImageDatabaseId: Maybe<Scalars['Int']>;
		/** Globally unique ID of the featured image assigned to the node */
		featuredImageId: Maybe<Scalars['ID']>;
		/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
		guid: Maybe<Scalars['String']>;
		/** The globally unique identifier of the post object. */
		id: Scalars['ID'];
		/** Whether the object is a node in the preview state */
		isPreview: Maybe<Scalars['Boolean']>;
		/** Whether the object is restricted from the current viewer */
		isRestricted: Maybe<Scalars['Boolean']>;
		/** True if the node is a revision of another node */
		isRevision: Maybe<Scalars['Boolean']>;
		/** Whether this page is sticky */
		isSticky: Scalars['Boolean'];
		/** The user that most recently edited the node */
		lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
		/** The permalink of the post */
		link: Maybe<Scalars['String']>;
		/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
		modified: Maybe<Scalars['String']>;
		/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
		modifiedGmt: Maybe<Scalars['String']>;
		/** Whether the pings are open or closed for this particular post. */
		pingStatus: Maybe<Scalars['String']>;
		/** URLs that have been pinged. */
		pinged: Maybe<Array<Maybe<Scalars['String']>>>;
		/** Connection between the post type and the postFormat type */
		postFormats: Maybe<PostToPostFormatConnection>;
		/**
		 * The id field matches the WP_Post-&gt;ID field.
		 * @deprecated Deprecated in favor of the databaseId field
		 */
		postId: Scalars['Int'];
		/** Connection between the post type and the post type */
		preview: Maybe<PostToPreviewConnectionEdge>;
		/** The database id of the preview node */
		previewRevisionDatabaseId: Maybe<Scalars['Int']>;
		/** Whether the object is a node in the preview state */
		previewRevisionId: Maybe<Scalars['ID']>;
		/** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
		revisionOf: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
		/** Connection between the post type and the post type */
		revisions: Maybe<PostToRevisionConnection>;
		/** The Yoast SEO data of the post */
		seo: Maybe<PostTypeSeo>;
		/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
		slug: Maybe<Scalars['String']>;
		social: Maybe<Post_Social>;
		/** The current status of the object */
		status: Maybe<Scalars['String']>;
		/** Connection between the post type and the tag type */
		tags: Maybe<PostToTagConnection>;
		/** The template assigned to a node of content */
		template: Maybe<ContentTemplate>;
		/** Connection between the post type and the TermNode type */
		terms: Maybe<PostToTermNodeConnection>;
		/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
		title: Maybe<Scalars['String']>;
		/** URLs queued to be pinged. */
		toPing: Maybe<Array<Maybe<Scalars['String']>>>;
		/** URI path for the resource */
		uri: Scalars['String'];
	};

/** The post type */
export type PostCategoriesArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<PostToCategoryConnectionWhereArgs>;
};

/** The post type */
export type PostCommentsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<PostToCommentConnectionWhereArgs>;
};

/** The post type */
export type PostContentArgs = {
	format: Maybe<PostObjectFieldFormatEnum>;
};

/** The post type */
export type PostEnqueuedScriptsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** The post type */
export type PostEnqueuedStylesheetsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** The post type */
export type PostExcerptArgs = {
	format: Maybe<PostObjectFieldFormatEnum>;
};

/** The post type */
export type PostPostFormatsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<PostToPostFormatConnectionWhereArgs>;
};

/** The post type */
export type PostRevisionsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<PostToRevisionConnectionWhereArgs>;
};

/** The post type */
export type PostTagsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<PostToTagConnectionWhereArgs>;
};

/** The post type */
export type PostTermsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<PostToTermNodeConnectionWhereArgs>;
};

/** The post type */
export type PostTitleArgs = {
	format: Maybe<PostObjectFieldFormatEnum>;
};

/** Arguments for filtering the PostToCategoryConnection connection */
export type PostToCategoryConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache: Maybe<Scalars['Boolean']>;
};

/** Connection between the post type and the category type */
export type PostToCategoryConnection = {
	__typename?: 'PostToCategoryConnection';
	/** Edges for the PostToCategoryConnection connection */
	edges: Maybe<Array<Maybe<PostToCategoryConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Category>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostToCategoryConnectionEdge = {
	__typename?: 'PostToCategoryConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The Yoast SEO Primary category */
	isPrimary: Maybe<Scalars['Boolean']>;
	/** The item at the end of the edge */
	node: Maybe<Category>;
};

/** Arguments for filtering the PostToCommentConnection connection */
export type PostToCommentConnectionWhereArgs = {
	/** Comment author email address. */
	authorEmail: Maybe<Scalars['String']>;
	/** Array of author IDs to include comments for. */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Comment author URL. */
	authorUrl: Maybe<Scalars['String']>;
	/** Array of comment IDs to include. */
	commentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Include comments of a given type. */
	commentType: Maybe<Scalars['String']>;
	/** Include comments from a given array of comment types. */
	commentTypeIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn: Maybe<Scalars['String']>;
	/** Content object author ID to limit results by. */
	contentAuthor: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId: Maybe<Scalars['ID']>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Content object name to retrieve affiliated comments for. */
	contentName: Maybe<Scalars['String']>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent: Maybe<Scalars['Int']>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus: Maybe<Array<Maybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType: Maybe<Array<Maybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Karma score to retrieve matching comments for. */
	karma: Maybe<Scalars['Int']>;
	/** The cardinality of the order of the connection */
	order: Maybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby: Maybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent: Maybe<Scalars['Int']>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Search term(s) to retrieve matching comments for. */
	search: Maybe<Scalars['String']>;
	/** Comment status to limit results by. */
	status: Maybe<Scalars['String']>;
	/** Include comments for a specific user ID. */
	userId: Maybe<Scalars['ID']>;
};

/** Connection between the post type and the Comment type */
export type PostToCommentConnection = {
	__typename?: 'PostToCommentConnection';
	/** Edges for the PostToCommentConnection connection */
	edges: Maybe<Array<Maybe<PostToCommentConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Comment>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostToCommentConnectionEdge = {
	__typename?: 'PostToCommentConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Comment>;
};

/** Arguments for filtering the PostToPostFormatConnection connection */
export type PostToPostFormatConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache: Maybe<Scalars['Boolean']>;
};

/** Connection between the post type and the postFormat type */
export type PostToPostFormatConnection = {
	__typename?: 'PostToPostFormatConnection';
	/** Edges for the PostToPostFormatConnection connection */
	edges: Maybe<Array<Maybe<PostToPostFormatConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<PostFormat>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostToPostFormatConnectionEdge = {
	__typename?: 'PostToPostFormatConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<PostFormat>;
};

/** Connection between the post type and the post type */
export type PostToPreviewConnectionEdge = {
	__typename?: 'PostToPreviewConnectionEdge';
	/** The nodes of the connection, without the edges */
	node: Maybe<Post>;
};

/** Arguments for filtering the postToRevisionConnection connection */
export type PostToRevisionConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Tag Slug */
	tag: Maybe<Scalars['String']>;
	/** Use Tag ID */
	tagId: Maybe<Scalars['String']>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag slugs, used to display objects from one tag OR another */
	tagSlugAnd: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of tag slugs, used to exclude objects in specified tags */
	tagSlugIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the post type and the post type */
export type PostToRevisionConnection = {
	__typename?: 'PostToRevisionConnection';
	/** Edges for the postToRevisionConnection connection */
	edges: Maybe<Array<Maybe<PostToRevisionConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Post>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostToRevisionConnectionEdge = {
	__typename?: 'PostToRevisionConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Post>;
};

/** Field Group */
export type Post_Social = {
	__typename?: 'Post_Social';
	/** Email (optional) */
	email: Maybe<Scalars['String']>;
	/** Facebook Url (optional) */
	facebook: Maybe<Scalars['String']>;
	fieldGroupName: Maybe<Scalars['String']>;
	/** Instagram Url (optional) */
	instagram: Maybe<Scalars['String']>;
	/** LinkedIn Url (optional) */
	linkedin: Maybe<Scalars['String']>;
	/** Twitter Url (optional) */
	twitter: Maybe<Scalars['String']>;
};

/** Arguments for filtering the PostToTagConnection connection */
export type PostToTagConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache: Maybe<Scalars['Boolean']>;
};

/** Connection between the post type and the tag type */
export type PostToTagConnection = {
	__typename?: 'PostToTagConnection';
	/** Edges for the PostToTagConnection connection */
	edges: Maybe<Array<Maybe<PostToTagConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Tag>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostToTagConnectionEdge = {
	__typename?: 'PostToTagConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Tag>;
};

/** The tag type */
export type Tag = Node &
	TermNode &
	DatabaseIdentifier &
	UniformResourceIdentifiable &
	MenuItemLinkable & {
		__typename?: 'Tag';
		/** Connection between the tag type and the ContentNode type */
		contentNodes: Maybe<TagToContentNodeConnection>;
		/** The number of objects connected to the object */
		count: Maybe<Scalars['Int']>;
		/** Identifies the primary key from the database. */
		databaseId: Scalars['Int'];
		/** The description of the object */
		description: Maybe<Scalars['String']>;
		/** Connection between the TermNode type and the EnqueuedScript type */
		enqueuedScripts: Maybe<TermNodeToEnqueuedScriptConnection>;
		/** Connection between the TermNode type and the EnqueuedStylesheet type */
		enqueuedStylesheets: Maybe<TermNodeToEnqueuedStylesheetConnection>;
		/** The globally unique ID for the object */
		id: Scalars['ID'];
		/** Whether the object is restricted from the current viewer */
		isRestricted: Maybe<Scalars['Boolean']>;
		/** The link to the term */
		link: Maybe<Scalars['String']>;
		/** The human friendly name of the object. */
		name: Maybe<Scalars['String']>;
		/** Connection between the tag type and the post type */
		posts: Maybe<TagToPostConnection>;
		/** The Yoast SEO data of the Tags taxonomy. */
		seo: Maybe<TaxonomySeo>;
		/** An alphanumeric identifier for the object unique to its type. */
		slug: Maybe<Scalars['String']>;
		/**
		 * The id field matches the WP_Post-&gt;ID field.
		 * @deprecated Deprecated in favor of databaseId
		 */
		tagId: Maybe<Scalars['Int']>;
		/** Connection between the tag type and the Taxonomy type */
		taxonomy: Maybe<TagToTaxonomyConnectionEdge>;
		/** The ID of the term group that this term object belongs to */
		termGroupId: Maybe<Scalars['Int']>;
		/** The taxonomy ID that the object is associated with */
		termTaxonomyId: Maybe<Scalars['Int']>;
		/** The unique resource identifier path */
		uri: Scalars['String'];
	};

/** The tag type */
export type TagContentNodesArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<TagToContentNodeConnectionWhereArgs>;
};

/** The tag type */
export type TagEnqueuedScriptsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** The tag type */
export type TagEnqueuedStylesheetsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** The tag type */
export type TagPostsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<TagToPostConnectionWhereArgs>;
};

/** Arguments for filtering the TagToContentNodeConnection connection */
export type TagToContentNodeConnectionWhereArgs = {
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the tag type and the ContentNode type */
export type TagToContentNodeConnection = {
	__typename?: 'TagToContentNodeConnection';
	/** Edges for the TagToContentNodeConnection connection */
	edges: Maybe<Array<Maybe<TagToContentNodeConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<ContentNode>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TagToContentNodeConnectionEdge = {
	__typename?: 'TagToContentNodeConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<ContentNode>;
};

/** Arguments for filtering the TagToPostConnection connection */
export type TagToPostConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Tag Slug */
	tag: Maybe<Scalars['String']>;
	/** Use Tag ID */
	tagId: Maybe<Scalars['String']>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag slugs, used to display objects from one tag OR another */
	tagSlugAnd: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of tag slugs, used to exclude objects in specified tags */
	tagSlugIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the tag type and the post type */
export type TagToPostConnection = {
	__typename?: 'TagToPostConnection';
	/** Edges for the TagToPostConnection connection */
	edges: Maybe<Array<Maybe<TagToPostConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Post>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TagToPostConnectionEdge = {
	__typename?: 'TagToPostConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Post>;
};

export type TaxonomySeo = {
	__typename?: 'TaxonomySEO';
	breadcrumbs: Maybe<Array<Maybe<SeoPostTypeBreadcrumbs>>>;
	canonical: Maybe<Scalars['String']>;
	cornerstone: Maybe<Scalars['Boolean']>;
	focuskw: Maybe<Scalars['String']>;
	metaDesc: Maybe<Scalars['String']>;
	metaKeywords: Maybe<Scalars['String']>;
	metaRobotsNofollow: Maybe<Scalars['String']>;
	metaRobotsNoindex: Maybe<Scalars['String']>;
	opengraphAuthor: Maybe<Scalars['String']>;
	opengraphDescription: Maybe<Scalars['String']>;
	opengraphImage: Maybe<MediaItem>;
	opengraphModifiedTime: Maybe<Scalars['String']>;
	opengraphPublishedTime: Maybe<Scalars['String']>;
	opengraphPublisher: Maybe<Scalars['String']>;
	opengraphSiteName: Maybe<Scalars['String']>;
	opengraphTitle: Maybe<Scalars['String']>;
	opengraphType: Maybe<Scalars['String']>;
	opengraphUrl: Maybe<Scalars['String']>;
	schema: Maybe<SeoTaxonomySchema>;
	title: Maybe<Scalars['String']>;
	twitterDescription: Maybe<Scalars['String']>;
	twitterImage: Maybe<MediaItem>;
	twitterTitle: Maybe<Scalars['String']>;
};

/** The Schema types for Taxonomy */
export type SeoTaxonomySchema = {
	__typename?: 'SEOTaxonomySchema';
	raw: Maybe<Scalars['String']>;
};

/** Connection between the tag type and the Taxonomy type */
export type TagToTaxonomyConnectionEdge = {
	__typename?: 'TagToTaxonomyConnectionEdge';
	/** The nodes of the connection, without the edges */
	node: Maybe<Taxonomy>;
};

/** Arguments for filtering the PostToTermNodeConnection connection */
export type PostToTermNodeConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug: Maybe<Array<Maybe<Scalars['String']>>>;
	/** The Taxonomy to filter terms by */
	taxonomies: Maybe<Array<Maybe<TaxonomyEnum>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache: Maybe<Scalars['Boolean']>;
};

/** Allowed taxonomies */
export enum TaxonomyEnum {
	Category = 'CATEGORY',
	Postformat = 'POSTFORMAT',
	Tag = 'TAG'
}

/** Connection between the post type and the TermNode type */
export type PostToTermNodeConnection = {
	__typename?: 'PostToTermNodeConnection';
	/** Edges for the PostToTermNodeConnection connection */
	edges: Maybe<Array<Maybe<PostToTermNodeConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<TermNode>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostToTermNodeConnectionEdge = {
	__typename?: 'PostToTermNodeConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<TermNode>;
};

/** Connection between the postFormat type and the Taxonomy type */
export type PostFormatToTaxonomyConnectionEdge = {
	__typename?: 'PostFormatToTaxonomyConnectionEdge';
	/** The nodes of the connection, without the edges */
	node: Maybe<Taxonomy>;
};

/** Arguments for filtering the PostFormatToTestimonialConnection connection */
export type PostFormatToTestimonialConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the postFormat type and the testimonial type */
export type PostFormatToTestimonialConnection = {
	__typename?: 'PostFormatToTestimonialConnection';
	/** Edges for the PostFormatToTestimonialConnection connection */
	edges: Maybe<Array<Maybe<PostFormatToTestimonialConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Testimonial>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostFormatToTestimonialConnectionEdge = {
	__typename?: 'PostFormatToTestimonialConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Testimonial>;
};

/** The testimonial type */
export type Testimonial = Node &
	ContentNode &
	DatabaseIdentifier &
	NodeWithTemplate &
	UniformResourceIdentifiable &
	NodeWithTitle &
	NodeWithContentEditor &
	NodeWithAuthor &
	NodeWithFeaturedImage &
	NodeWithExcerpt &
	NodeWithComments &
	NodeWithTrackbacks &
	NodeWithRevisions &
	NodeWithPageAttributes &
	MenuItemLinkable & {
		__typename?: 'Testimonial';
		/** Connection between the NodeWithAuthor type and the User type */
		author: Maybe<NodeWithAuthorToUserConnectionEdge>;
		/** The database identifier of the author of the node */
		authorDatabaseId: Maybe<Scalars['Int']>;
		/** The globally unique identifier of the author of the node */
		authorId: Maybe<Scalars['ID']>;
		/** Connection between the testimonial type and the category type */
		categories: Maybe<TestimonialToCategoryConnection>;
		/** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
		commentCount: Maybe<Scalars['Int']>;
		/** Whether the comments are open or closed for this particular post. */
		commentStatus: Maybe<Scalars['String']>;
		/** Connection between the testimonial type and the Comment type */
		comments: Maybe<TestimonialToCommentConnection>;
		/** The content of the post. */
		content: Maybe<Scalars['String']>;
		/** Connection between the ContentNode type and the ContentType type */
		contentType: Maybe<ContentNodeToContentTypeConnectionEdge>;
		/** The ID of the node in the database. */
		databaseId: Scalars['Int'];
		/** Post publishing date. */
		date: Maybe<Scalars['String']>;
		/** The publishing date set in GMT. */
		dateGmt: Maybe<Scalars['String']>;
		/** The desired slug of the post */
		desiredSlug: Maybe<Scalars['String']>;
		/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
		editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
		/** The RSS enclosure for the object */
		enclosure: Maybe<Scalars['String']>;
		/** Connection between the ContentNode type and the EnqueuedScript type */
		enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
		/** Connection between the ContentNode type and the EnqueuedStylesheet type */
		enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
		/** The excerpt of the post. */
		excerpt: Maybe<Scalars['String']>;
		/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
		featuredImage: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
		/** The database identifier for the featured image node assigned to the content node */
		featuredImageDatabaseId: Maybe<Scalars['Int']>;
		/** Globally unique ID of the featured image assigned to the node */
		featuredImageId: Maybe<Scalars['ID']>;
		/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
		guid: Maybe<Scalars['String']>;
		/** The globally unique identifier of the testimonial object. */
		id: Scalars['ID'];
		/** Whether the object is a node in the preview state */
		isPreview: Maybe<Scalars['Boolean']>;
		/** Whether the object is restricted from the current viewer */
		isRestricted: Maybe<Scalars['Boolean']>;
		/** True if the node is a revision of another node */
		isRevision: Maybe<Scalars['Boolean']>;
		/** The user that most recently edited the node */
		lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
		/** The permalink of the post */
		link: Maybe<Scalars['String']>;
		/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
		menuOrder: Maybe<Scalars['Int']>;
		/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
		modified: Maybe<Scalars['String']>;
		/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
		modifiedGmt: Maybe<Scalars['String']>;
		/** Whether the pings are open or closed for this particular post. */
		pingStatus: Maybe<Scalars['String']>;
		/** URLs that have been pinged. */
		pinged: Maybe<Array<Maybe<Scalars['String']>>>;
		/** Connection between the testimonial type and the postFormat type */
		postFormats: Maybe<TestimonialToPostFormatConnection>;
		/** Connection between the testimonial type and the testimonial type */
		preview: Maybe<TestimonialToPreviewConnectionEdge>;
		/** The database id of the preview node */
		previewRevisionDatabaseId: Maybe<Scalars['Int']>;
		/** Whether the object is a node in the preview state */
		previewRevisionId: Maybe<Scalars['ID']>;
		/** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
		revisionOf: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
		/** Connection between the testimonial type and the testimonial type */
		revisions: Maybe<TestimonialToRevisionConnection>;
		/** The Yoast SEO data of the testimonial */
		seo: Maybe<PostTypeSeo>;
		/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
		slug: Maybe<Scalars['String']>;
		social: Maybe<Testimonial_Social>;
		/** The current status of the object */
		status: Maybe<Scalars['String']>;
		/** The template assigned to a node of content */
		template: Maybe<ContentTemplate>;
		/**
		 * The id field matches the WP_Post-&gt;ID field.
		 * @deprecated Deprecated in favor of the databaseId field
		 */
		testimonialId: Scalars['Int'];
		/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
		title: Maybe<Scalars['String']>;
		/** URLs queued to be pinged. */
		toPing: Maybe<Array<Maybe<Scalars['String']>>>;
		/** URI path for the resource */
		uri: Scalars['String'];
	};

/** The testimonial type */
export type TestimonialCategoriesArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<TestimonialToCategoryConnectionWhereArgs>;
};

/** The testimonial type */
export type TestimonialCommentsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<TestimonialToCommentConnectionWhereArgs>;
};

/** The testimonial type */
export type TestimonialContentArgs = {
	format: Maybe<PostObjectFieldFormatEnum>;
};

/** The testimonial type */
export type TestimonialEnqueuedScriptsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** The testimonial type */
export type TestimonialEnqueuedStylesheetsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** The testimonial type */
export type TestimonialExcerptArgs = {
	format: Maybe<PostObjectFieldFormatEnum>;
};

/** The testimonial type */
export type TestimonialPostFormatsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<TestimonialToPostFormatConnectionWhereArgs>;
};

/** The testimonial type */
export type TestimonialRevisionsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<TestimonialToRevisionConnectionWhereArgs>;
};

/** The testimonial type */
export type TestimonialTitleArgs = {
	format: Maybe<PostObjectFieldFormatEnum>;
};

/** Arguments for filtering the TestimonialToCategoryConnection connection */
export type TestimonialToCategoryConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache: Maybe<Scalars['Boolean']>;
};

/** Connection between the testimonial type and the category type */
export type TestimonialToCategoryConnection = {
	__typename?: 'TestimonialToCategoryConnection';
	/** Edges for the TestimonialToCategoryConnection connection */
	edges: Maybe<Array<Maybe<TestimonialToCategoryConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Category>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TestimonialToCategoryConnectionEdge = {
	__typename?: 'TestimonialToCategoryConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The Yoast SEO Primary category */
	isPrimary: Maybe<Scalars['Boolean']>;
	/** The item at the end of the edge */
	node: Maybe<Category>;
};

/** Arguments for filtering the TestimonialToCommentConnection connection */
export type TestimonialToCommentConnectionWhereArgs = {
	/** Comment author email address. */
	authorEmail: Maybe<Scalars['String']>;
	/** Array of author IDs to include comments for. */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Comment author URL. */
	authorUrl: Maybe<Scalars['String']>;
	/** Array of comment IDs to include. */
	commentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Include comments of a given type. */
	commentType: Maybe<Scalars['String']>;
	/** Include comments from a given array of comment types. */
	commentTypeIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn: Maybe<Scalars['String']>;
	/** Content object author ID to limit results by. */
	contentAuthor: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId: Maybe<Scalars['ID']>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Content object name to retrieve affiliated comments for. */
	contentName: Maybe<Scalars['String']>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent: Maybe<Scalars['Int']>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus: Maybe<Array<Maybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType: Maybe<Array<Maybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Karma score to retrieve matching comments for. */
	karma: Maybe<Scalars['Int']>;
	/** The cardinality of the order of the connection */
	order: Maybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby: Maybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent: Maybe<Scalars['Int']>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Search term(s) to retrieve matching comments for. */
	search: Maybe<Scalars['String']>;
	/** Comment status to limit results by. */
	status: Maybe<Scalars['String']>;
	/** Include comments for a specific user ID. */
	userId: Maybe<Scalars['ID']>;
};

/** Connection between the testimonial type and the Comment type */
export type TestimonialToCommentConnection = {
	__typename?: 'TestimonialToCommentConnection';
	/** Edges for the TestimonialToCommentConnection connection */
	edges: Maybe<Array<Maybe<TestimonialToCommentConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Comment>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TestimonialToCommentConnectionEdge = {
	__typename?: 'TestimonialToCommentConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Comment>;
};

/** Arguments for filtering the TestimonialToPostFormatConnection connection */
export type TestimonialToPostFormatConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache: Maybe<Scalars['Boolean']>;
};

/** Connection between the testimonial type and the postFormat type */
export type TestimonialToPostFormatConnection = {
	__typename?: 'TestimonialToPostFormatConnection';
	/** Edges for the TestimonialToPostFormatConnection connection */
	edges: Maybe<Array<Maybe<TestimonialToPostFormatConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<PostFormat>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TestimonialToPostFormatConnectionEdge = {
	__typename?: 'TestimonialToPostFormatConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<PostFormat>;
};

/** Connection between the testimonial type and the testimonial type */
export type TestimonialToPreviewConnectionEdge = {
	__typename?: 'TestimonialToPreviewConnectionEdge';
	/** The nodes of the connection, without the edges */
	node: Maybe<Testimonial>;
};

/** Arguments for filtering the testimonialToRevisionConnection connection */
export type TestimonialToRevisionConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the testimonial type and the testimonial type */
export type TestimonialToRevisionConnection = {
	__typename?: 'TestimonialToRevisionConnection';
	/** Edges for the testimonialToRevisionConnection connection */
	edges: Maybe<Array<Maybe<TestimonialToRevisionConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Testimonial>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TestimonialToRevisionConnectionEdge = {
	__typename?: 'TestimonialToRevisionConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Testimonial>;
};

/** Field Group */
export type Testimonial_Social = {
	__typename?: 'Testimonial_Social';
	/** Email (optional) */
	email: Maybe<Scalars['String']>;
	/** Facebook Url (optional) */
	facebook: Maybe<Scalars['String']>;
	fieldGroupName: Maybe<Scalars['String']>;
	/** Instagram Url (optional) */
	instagram: Maybe<Scalars['String']>;
	/** LinkedIn Url (optional) */
	linkedin: Maybe<Scalars['String']>;
	/** Twitter Url (optional) */
	twitter: Maybe<Scalars['String']>;
};

/** Connection between the position type and the position type */
export type PositionToPreviewConnectionEdge = {
	__typename?: 'PositionToPreviewConnectionEdge';
	/** The nodes of the connection, without the edges */
	node: Maybe<Position>;
};

/** Arguments for filtering the positionToRevisionConnection connection */
export type PositionToRevisionConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the position type and the position type */
export type PositionToRevisionConnection = {
	__typename?: 'PositionToRevisionConnection';
	/** Edges for the positionToRevisionConnection connection */
	edges: Maybe<Array<Maybe<PositionToRevisionConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Position>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PositionToRevisionConnectionEdge = {
	__typename?: 'PositionToRevisionConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Position>;
};

/** Field Group */
export type Position_Social = {
	__typename?: 'Position_Social';
	/** Email (optional) */
	email: Maybe<Scalars['String']>;
	/** Facebook Url (optional) */
	facebook: Maybe<Scalars['String']>;
	fieldGroupName: Maybe<Scalars['String']>;
	/** Instagram Url (optional) */
	instagram: Maybe<Scalars['String']>;
	/** LinkedIn Url (optional) */
	linkedin: Maybe<Scalars['String']>;
	/** Twitter Url (optional) */
	twitter: Maybe<Scalars['String']>;
};

/** Arguments for filtering the CategoryToPostConnection connection */
export type CategoryToPostConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Tag Slug */
	tag: Maybe<Scalars['String']>;
	/** Use Tag ID */
	tagId: Maybe<Scalars['String']>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag slugs, used to display objects from one tag OR another */
	tagSlugAnd: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of tag slugs, used to exclude objects in specified tags */
	tagSlugIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the category type and the post type */
export type CategoryToPostConnection = {
	__typename?: 'CategoryToPostConnection';
	/** Edges for the CategoryToPostConnection connection */
	edges: Maybe<Array<Maybe<CategoryToPostConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Post>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CategoryToPostConnectionEdge = {
	__typename?: 'CategoryToPostConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Post>;
};

/** Connection between the category type and the Taxonomy type */
export type CategoryToTaxonomyConnectionEdge = {
	__typename?: 'CategoryToTaxonomyConnectionEdge';
	/** The nodes of the connection, without the edges */
	node: Maybe<Taxonomy>;
};

/** Arguments for filtering the CategoryToTestimonialConnection connection */
export type CategoryToTestimonialConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the category type and the testimonial type */
export type CategoryToTestimonialConnection = {
	__typename?: 'CategoryToTestimonialConnection';
	/** Edges for the CategoryToTestimonialConnection connection */
	edges: Maybe<Array<Maybe<CategoryToTestimonialConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Testimonial>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CategoryToTestimonialConnectionEdge = {
	__typename?: 'CategoryToTestimonialConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Testimonial>;
};

/** Arguments for filtering the ConsultantToCommentConnection connection */
export type ConsultantToCommentConnectionWhereArgs = {
	/** Comment author email address. */
	authorEmail: Maybe<Scalars['String']>;
	/** Array of author IDs to include comments for. */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Comment author URL. */
	authorUrl: Maybe<Scalars['String']>;
	/** Array of comment IDs to include. */
	commentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Include comments of a given type. */
	commentType: Maybe<Scalars['String']>;
	/** Include comments from a given array of comment types. */
	commentTypeIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn: Maybe<Scalars['String']>;
	/** Content object author ID to limit results by. */
	contentAuthor: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId: Maybe<Scalars['ID']>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Content object name to retrieve affiliated comments for. */
	contentName: Maybe<Scalars['String']>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent: Maybe<Scalars['Int']>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus: Maybe<Array<Maybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType: Maybe<Array<Maybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Karma score to retrieve matching comments for. */
	karma: Maybe<Scalars['Int']>;
	/** The cardinality of the order of the connection */
	order: Maybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby: Maybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent: Maybe<Scalars['Int']>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Search term(s) to retrieve matching comments for. */
	search: Maybe<Scalars['String']>;
	/** Comment status to limit results by. */
	status: Maybe<Scalars['String']>;
	/** Include comments for a specific user ID. */
	userId: Maybe<Scalars['ID']>;
};

/** Connection between the consultant type and the Comment type */
export type ConsultantToCommentConnection = {
	__typename?: 'ConsultantToCommentConnection';
	/** Edges for the ConsultantToCommentConnection connection */
	edges: Maybe<Array<Maybe<ConsultantToCommentConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Comment>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ConsultantToCommentConnectionEdge = {
	__typename?: 'ConsultantToCommentConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Comment>;
};

/** Arguments for filtering the ConsultantToPostFormatConnection connection */
export type ConsultantToPostFormatConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache: Maybe<Scalars['Boolean']>;
};

/** Connection between the consultant type and the postFormat type */
export type ConsultantToPostFormatConnection = {
	__typename?: 'ConsultantToPostFormatConnection';
	/** Edges for the ConsultantToPostFormatConnection connection */
	edges: Maybe<Array<Maybe<ConsultantToPostFormatConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<PostFormat>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ConsultantToPostFormatConnectionEdge = {
	__typename?: 'ConsultantToPostFormatConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<PostFormat>;
};

/** Connection between the consultant type and the consultant type */
export type ConsultantToPreviewConnectionEdge = {
	__typename?: 'ConsultantToPreviewConnectionEdge';
	/** The nodes of the connection, without the edges */
	node: Maybe<Consultant>;
};

/** Arguments for filtering the consultantToRevisionConnection connection */
export type ConsultantToRevisionConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the consultant type and the consultant type */
export type ConsultantToRevisionConnection = {
	__typename?: 'ConsultantToRevisionConnection';
	/** Edges for the consultantToRevisionConnection connection */
	edges: Maybe<Array<Maybe<ConsultantToRevisionConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Consultant>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ConsultantToRevisionConnectionEdge = {
	__typename?: 'ConsultantToRevisionConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Consultant>;
};

/** Field Group */
export type Consultant_Social = {
	__typename?: 'Consultant_Social';
	/** Email (optional) */
	email: Maybe<Scalars['String']>;
	/** Facebook Url (optional) */
	facebook: Maybe<Scalars['String']>;
	fieldGroupName: Maybe<Scalars['String']>;
	/** Instagram Url (optional) */
	instagram: Maybe<Scalars['String']>;
	/** LinkedIn Url (optional) */
	linkedin: Maybe<Scalars['String']>;
	/** Twitter Url (optional) */
	twitter: Maybe<Scalars['String']>;
};

/** Connection between the User type and the EnqueuedScript type */
export type UserToEnqueuedScriptConnection = {
	__typename?: 'UserToEnqueuedScriptConnection';
	/** Edges for the UserToEnqueuedScriptConnection connection */
	edges: Maybe<Array<Maybe<UserToEnqueuedScriptConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<EnqueuedScript>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToEnqueuedScriptConnectionEdge = {
	__typename?: 'UserToEnqueuedScriptConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<EnqueuedScript>;
};

/** Connection between the User type and the EnqueuedStylesheet type */
export type UserToEnqueuedStylesheetConnection = {
	__typename?: 'UserToEnqueuedStylesheetConnection';
	/** Edges for the UserToEnqueuedStylesheetConnection connection */
	edges: Maybe<Array<Maybe<UserToEnqueuedStylesheetConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<EnqueuedStylesheet>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToEnqueuedStylesheetConnectionEdge = {
	__typename?: 'UserToEnqueuedStylesheetConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<EnqueuedStylesheet>;
};

/** Arguments for filtering the UserToMediaItemConnection connection */
export type UserToMediaItemConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the User type and the mediaItem type */
export type UserToMediaItemConnection = {
	__typename?: 'UserToMediaItemConnection';
	/** Edges for the UserToMediaItemConnection connection */
	edges: Maybe<Array<Maybe<UserToMediaItemConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<MediaItem>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToMediaItemConnectionEdge = {
	__typename?: 'UserToMediaItemConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<MediaItem>;
};

/** Arguments for filtering the UserToPageConnection connection */
export type UserToPageConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the User type and the page type */
export type UserToPageConnection = {
	__typename?: 'UserToPageConnection';
	/** Edges for the UserToPageConnection connection */
	edges: Maybe<Array<Maybe<UserToPageConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Page>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToPageConnectionEdge = {
	__typename?: 'UserToPageConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Page>;
};

/** The page type */
export type Page = Node &
	ContentNode &
	DatabaseIdentifier &
	NodeWithTemplate &
	UniformResourceIdentifiable &
	NodeWithTitle &
	NodeWithContentEditor &
	NodeWithAuthor &
	NodeWithFeaturedImage &
	NodeWithComments &
	NodeWithRevisions &
	NodeWithPageAttributes &
	HierarchicalContentNode &
	MenuItemLinkable & {
		__typename?: 'Page';
		/** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
		ancestors: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
		/** Connection between the NodeWithAuthor type and the User type */
		author: Maybe<NodeWithAuthorToUserConnectionEdge>;
		/** The database identifier of the author of the node */
		authorDatabaseId: Maybe<Scalars['Int']>;
		/** The globally unique identifier of the author of the node */
		authorId: Maybe<Scalars['ID']>;
		/** Connection between the HierarchicalContentNode type and the ContentNode type */
		children: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
		/** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
		commentCount: Maybe<Scalars['Int']>;
		/** Whether the comments are open or closed for this particular post. */
		commentStatus: Maybe<Scalars['String']>;
		/** Connection between the page type and the Comment type */
		comments: Maybe<PageToCommentConnection>;
		/** The content of the post. */
		content: Maybe<Scalars['String']>;
		/** Connection between the ContentNode type and the ContentType type */
		contentType: Maybe<ContentNodeToContentTypeConnectionEdge>;
		/** The ID of the node in the database. */
		databaseId: Scalars['Int'];
		/** Post publishing date. */
		date: Maybe<Scalars['String']>;
		/** The publishing date set in GMT. */
		dateGmt: Maybe<Scalars['String']>;
		/** The desired slug of the post */
		desiredSlug: Maybe<Scalars['String']>;
		/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
		editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
		/** The RSS enclosure for the object */
		enclosure: Maybe<Scalars['String']>;
		/** Connection between the ContentNode type and the EnqueuedScript type */
		enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
		/** Connection between the ContentNode type and the EnqueuedStylesheet type */
		enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
		/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
		featuredImage: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
		/** The database identifier for the featured image node assigned to the content node */
		featuredImageDatabaseId: Maybe<Scalars['Int']>;
		/** Globally unique ID of the featured image assigned to the node */
		featuredImageId: Maybe<Scalars['ID']>;
		/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
		guid: Maybe<Scalars['String']>;
		/** The globally unique identifier of the page object. */
		id: Scalars['ID'];
		/** Whether this page is set to the static front page. */
		isFrontPage: Scalars['Boolean'];
		/** Whether this page is set to the blog posts page. */
		isPostsPage: Scalars['Boolean'];
		/** Whether the object is a node in the preview state */
		isPreview: Maybe<Scalars['Boolean']>;
		/** Whether the object is restricted from the current viewer */
		isRestricted: Maybe<Scalars['Boolean']>;
		/** True if the node is a revision of another node */
		isRevision: Maybe<Scalars['Boolean']>;
		/** The user that most recently edited the node */
		lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
		/** The permalink of the post */
		link: Maybe<Scalars['String']>;
		/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
		menuOrder: Maybe<Scalars['Int']>;
		/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
		modified: Maybe<Scalars['String']>;
		/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
		modifiedGmt: Maybe<Scalars['String']>;
		/**
		 * The id field matches the WP_Post-&gt;ID field.
		 * @deprecated Deprecated in favor of the databaseId field
		 */
		pageId: Scalars['Int'];
		/** The parent of the node. The parent object can be of various types */
		parent: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
		/** Database id of the parent node */
		parentDatabaseId: Maybe<Scalars['Int']>;
		/** The globally unique identifier of the parent node. */
		parentId: Maybe<Scalars['ID']>;
		/** Connection between the page type and the page type */
		preview: Maybe<PageToPreviewConnectionEdge>;
		/** The database id of the preview node */
		previewRevisionDatabaseId: Maybe<Scalars['Int']>;
		/** Whether the object is a node in the preview state */
		previewRevisionId: Maybe<Scalars['ID']>;
		/** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
		revisionOf: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
		/** Connection between the page type and the page type */
		revisions: Maybe<PageToRevisionConnection>;
		/** The Yoast SEO data of the page */
		seo: Maybe<PostTypeSeo>;
		/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
		slug: Maybe<Scalars['String']>;
		/** The current status of the object */
		status: Maybe<Scalars['String']>;
		/** The template assigned to a node of content */
		template: Maybe<ContentTemplate>;
		/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
		title: Maybe<Scalars['String']>;
		/** URI path for the resource */
		uri: Scalars['String'];
	};

/** The page type */
export type PageAncestorsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};

/** The page type */
export type PageChildrenArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};

/** The page type */
export type PageCommentsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<PageToCommentConnectionWhereArgs>;
};

/** The page type */
export type PageContentArgs = {
	format: Maybe<PostObjectFieldFormatEnum>;
};

/** The page type */
export type PageEnqueuedScriptsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** The page type */
export type PageEnqueuedStylesheetsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
};

/** The page type */
export type PageRevisionsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<PageToRevisionConnectionWhereArgs>;
};

/** The page type */
export type PageTitleArgs = {
	format: Maybe<PostObjectFieldFormatEnum>;
};

/** Arguments for filtering the PageToCommentConnection connection */
export type PageToCommentConnectionWhereArgs = {
	/** Comment author email address. */
	authorEmail: Maybe<Scalars['String']>;
	/** Array of author IDs to include comments for. */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Comment author URL. */
	authorUrl: Maybe<Scalars['String']>;
	/** Array of comment IDs to include. */
	commentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Include comments of a given type. */
	commentType: Maybe<Scalars['String']>;
	/** Include comments from a given array of comment types. */
	commentTypeIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn: Maybe<Scalars['String']>;
	/** Content object author ID to limit results by. */
	contentAuthor: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId: Maybe<Scalars['ID']>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Content object name to retrieve affiliated comments for. */
	contentName: Maybe<Scalars['String']>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent: Maybe<Scalars['Int']>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus: Maybe<Array<Maybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType: Maybe<Array<Maybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Karma score to retrieve matching comments for. */
	karma: Maybe<Scalars['Int']>;
	/** The cardinality of the order of the connection */
	order: Maybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby: Maybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent: Maybe<Scalars['Int']>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Search term(s) to retrieve matching comments for. */
	search: Maybe<Scalars['String']>;
	/** Comment status to limit results by. */
	status: Maybe<Scalars['String']>;
	/** Include comments for a specific user ID. */
	userId: Maybe<Scalars['ID']>;
};

/** Connection between the page type and the Comment type */
export type PageToCommentConnection = {
	__typename?: 'PageToCommentConnection';
	/** Edges for the PageToCommentConnection connection */
	edges: Maybe<Array<Maybe<PageToCommentConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Comment>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PageToCommentConnectionEdge = {
	__typename?: 'PageToCommentConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Comment>;
};

/** Connection between the page type and the page type */
export type PageToPreviewConnectionEdge = {
	__typename?: 'PageToPreviewConnectionEdge';
	/** The nodes of the connection, without the edges */
	node: Maybe<Page>;
};

/** Arguments for filtering the pageToRevisionConnection connection */
export type PageToRevisionConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the page type and the page type */
export type PageToRevisionConnection = {
	__typename?: 'PageToRevisionConnection';
	/** Edges for the pageToRevisionConnection connection */
	edges: Maybe<Array<Maybe<PageToRevisionConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Page>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PageToRevisionConnectionEdge = {
	__typename?: 'PageToRevisionConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Page>;
};

/** Arguments for filtering the UserToPositionConnection connection */
export type UserToPositionConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the User type and the position type */
export type UserToPositionConnection = {
	__typename?: 'UserToPositionConnection';
	/** Edges for the UserToPositionConnection connection */
	edges: Maybe<Array<Maybe<UserToPositionConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Position>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToPositionConnectionEdge = {
	__typename?: 'UserToPositionConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Position>;
};

/** Arguments for filtering the UserToPostConnection connection */
export type UserToPostConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Tag Slug */
	tag: Maybe<Scalars['String']>;
	/** Use Tag ID */
	tagId: Maybe<Scalars['String']>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag slugs, used to display objects from one tag OR another */
	tagSlugAnd: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of tag slugs, used to exclude objects in specified tags */
	tagSlugIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the User type and the post type */
export type UserToPostConnection = {
	__typename?: 'UserToPostConnection';
	/** Edges for the UserToPostConnection connection */
	edges: Maybe<Array<Maybe<UserToPostConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Post>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToPostConnectionEdge = {
	__typename?: 'UserToPostConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Post>;
};

/** Arguments for filtering the UserToContentRevisionUnionConnection connection */
export type UserToContentRevisionUnionConnectionWhereArgs = {
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the User type and the ContentRevisionUnion type */
export type UserToContentRevisionUnionConnection = {
	__typename?: 'UserToContentRevisionUnionConnection';
	/** Edges for the UserToContentRevisionUnionConnection connection */
	edges: Maybe<Array<Maybe<UserToContentRevisionUnionConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<ContentRevisionUnion>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToContentRevisionUnionConnectionEdge = {
	__typename?: 'UserToContentRevisionUnionConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<ContentRevisionUnion>;
};

export type ContentRevisionUnion =
	| Post
	| Page
	| Testimonial
	| About
	| Consultant
	| Position;

/** Connection between the User type and the UserRole type */
export type UserToUserRoleConnection = {
	__typename?: 'UserToUserRoleConnection';
	/** Edges for the UserToUserRoleConnection connection */
	edges: Maybe<Array<Maybe<UserToUserRoleConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<UserRole>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToUserRoleConnectionEdge = {
	__typename?: 'UserToUserRoleConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<UserRole>;
};

/** A user role object */
export type UserRole = Node & {
	__typename?: 'UserRole';
	/** The capabilities that belong to this role */
	capabilities: Maybe<Array<Maybe<Scalars['String']>>>;
	/** The display name of the role */
	displayName: Maybe<Scalars['String']>;
	/** The globally unique identifier for the user role object. */
	id: Scalars['ID'];
	/** Whether the object is restricted from the current viewer */
	isRestricted: Maybe<Scalars['Boolean']>;
	/** The registered name of the role */
	name: Maybe<Scalars['String']>;
};

export type SeoUser = {
	__typename?: 'SEOUser';
	metaDesc: Maybe<Scalars['String']>;
	metaRobotsNofollow: Maybe<Scalars['String']>;
	metaRobotsNoindex: Maybe<Scalars['String']>;
	schema: Maybe<SeoUserSchema>;
	social: Maybe<SeoUserSocial>;
	title: Maybe<Scalars['String']>;
};

/** The Schema types for User */
export type SeoUserSchema = {
	__typename?: 'SEOUserSchema';
	raw: Maybe<Scalars['String']>;
};

export type SeoUserSocial = {
	__typename?: 'SEOUserSocial';
	facebook: Maybe<Scalars['String']>;
	instagram: Maybe<Scalars['String']>;
	linkedIn: Maybe<Scalars['String']>;
	mySpace: Maybe<Scalars['String']>;
	pinterest: Maybe<Scalars['String']>;
	soundCloud: Maybe<Scalars['String']>;
	twitter: Maybe<Scalars['String']>;
	wikipedia: Maybe<Scalars['String']>;
	youTube: Maybe<Scalars['String']>;
};

/** Arguments for filtering the UserToTestimonialConnection connection */
export type UserToTestimonialConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the User type and the testimonial type */
export type UserToTestimonialConnection = {
	__typename?: 'UserToTestimonialConnection';
	/** Edges for the UserToTestimonialConnection connection */
	edges: Maybe<Array<Maybe<UserToTestimonialConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Testimonial>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToTestimonialConnectionEdge = {
	__typename?: 'UserToTestimonialConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Testimonial>;
};

/** Arguments for filtering the AboutToCategoryConnection connection */
export type AboutToCategoryConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache: Maybe<Scalars['Boolean']>;
};

/** Connection between the about type and the category type */
export type AboutToCategoryConnection = {
	__typename?: 'AboutToCategoryConnection';
	/** Edges for the AboutToCategoryConnection connection */
	edges: Maybe<Array<Maybe<AboutToCategoryConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Category>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type AboutToCategoryConnectionEdge = {
	__typename?: 'AboutToCategoryConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The Yoast SEO Primary category */
	isPrimary: Maybe<Scalars['Boolean']>;
	/** The item at the end of the edge */
	node: Maybe<Category>;
};

/** Arguments for filtering the AboutToCommentConnection connection */
export type AboutToCommentConnectionWhereArgs = {
	/** Comment author email address. */
	authorEmail: Maybe<Scalars['String']>;
	/** Array of author IDs to include comments for. */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Comment author URL. */
	authorUrl: Maybe<Scalars['String']>;
	/** Array of comment IDs to include. */
	commentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Include comments of a given type. */
	commentType: Maybe<Scalars['String']>;
	/** Include comments from a given array of comment types. */
	commentTypeIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn: Maybe<Scalars['String']>;
	/** Content object author ID to limit results by. */
	contentAuthor: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId: Maybe<Scalars['ID']>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Content object name to retrieve affiliated comments for. */
	contentName: Maybe<Scalars['String']>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent: Maybe<Scalars['Int']>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus: Maybe<Array<Maybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType: Maybe<Array<Maybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Karma score to retrieve matching comments for. */
	karma: Maybe<Scalars['Int']>;
	/** The cardinality of the order of the connection */
	order: Maybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby: Maybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent: Maybe<Scalars['Int']>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Search term(s) to retrieve matching comments for. */
	search: Maybe<Scalars['String']>;
	/** Comment status to limit results by. */
	status: Maybe<Scalars['String']>;
	/** Include comments for a specific user ID. */
	userId: Maybe<Scalars['ID']>;
};

/** Connection between the about type and the Comment type */
export type AboutToCommentConnection = {
	__typename?: 'AboutToCommentConnection';
	/** Edges for the AboutToCommentConnection connection */
	edges: Maybe<Array<Maybe<AboutToCommentConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Comment>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type AboutToCommentConnectionEdge = {
	__typename?: 'AboutToCommentConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Comment>;
};

/** Arguments for filtering the AboutToPostFormatConnection connection */
export type AboutToPostFormatConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache: Maybe<Scalars['Boolean']>;
};

/** Connection between the about type and the postFormat type */
export type AboutToPostFormatConnection = {
	__typename?: 'AboutToPostFormatConnection';
	/** Edges for the AboutToPostFormatConnection connection */
	edges: Maybe<Array<Maybe<AboutToPostFormatConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<PostFormat>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type AboutToPostFormatConnectionEdge = {
	__typename?: 'AboutToPostFormatConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<PostFormat>;
};

/** Connection between the about type and the about type */
export type AboutToPreviewConnectionEdge = {
	__typename?: 'AboutToPreviewConnectionEdge';
	/** The nodes of the connection, without the edges */
	node: Maybe<About>;
};

/** Arguments for filtering the aboutToRevisionConnection connection */
export type AboutToRevisionConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the about type and the about type */
export type AboutToRevisionConnection = {
	__typename?: 'AboutToRevisionConnection';
	/** Edges for the aboutToRevisionConnection connection */
	edges: Maybe<Array<Maybe<AboutToRevisionConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<About>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type AboutToRevisionConnectionEdge = {
	__typename?: 'AboutToRevisionConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<About>;
};

/** Field Group */
export type About_Social = {
	__typename?: 'About_Social';
	/** Email (optional) */
	email: Maybe<Scalars['String']>;
	/** Facebook Url (optional) */
	facebook: Maybe<Scalars['String']>;
	fieldGroupName: Maybe<Scalars['String']>;
	/** Instagram Url (optional) */
	instagram: Maybe<Scalars['String']>;
	/** LinkedIn Url (optional) */
	linkedin: Maybe<Scalars['String']>;
	/** Twitter Url (optional) */
	twitter: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToAboutConnection connection */
export type RootQueryToAboutConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the about type */
export type RootQueryToAboutConnection = {
	__typename?: 'RootQueryToAboutConnection';
	/** Edges for the RootQueryToAboutConnection connection */
	edges: Maybe<Array<Maybe<RootQueryToAboutConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<About>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToAboutConnectionEdge = {
	__typename?: 'RootQueryToAboutConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<About>;
};

/** All of the registered settings */
export type Settings = {
	__typename?: 'Settings';
	/** Allow people to submit comments on new posts. */
	discussionSettingsDefaultCommentStatus: Maybe<Scalars['String']>;
	/** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
	discussionSettingsDefaultPingStatus: Maybe<Scalars['String']>;
	/** A date format for all date strings. */
	generalSettingsDateFormat: Maybe<Scalars['String']>;
	/** Site tagline. */
	generalSettingsDescription: Maybe<Scalars['String']>;
	/** This address is used for admin purposes, like new user notification. */
	generalSettingsEmail: Maybe<Scalars['String']>;
	/** WordPress locale code. */
	generalSettingsLanguage: Maybe<Scalars['String']>;
	/** A day number of the week that the week should start on. */
	generalSettingsStartOfWeek: Maybe<Scalars['Int']>;
	/** A time format for all time strings. */
	generalSettingsTimeFormat: Maybe<Scalars['String']>;
	/** A city in the same timezone as you. */
	generalSettingsTimezone: Maybe<Scalars['String']>;
	/** Site title. */
	generalSettingsTitle: Maybe<Scalars['String']>;
	/** Site URL. */
	generalSettingsUrl: Maybe<Scalars['String']>;
	/** Blog pages show at most. */
	readingSettingsPostsPerPage: Maybe<Scalars['Int']>;
	/** Default post category. */
	writingSettingsDefaultCategory: Maybe<Scalars['Int']>;
	/** Default post format. */
	writingSettingsDefaultPostFormat: Maybe<Scalars['String']>;
	/** Convert emoticons like :-) and :-P to graphics on display. */
	writingSettingsUseSmilies: Maybe<Scalars['Boolean']>;
};

/** Arguments for filtering the RootQueryToCategoryConnection connection */
export type RootQueryToCategoryConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the category type */
export type RootQueryToCategoryConnection = {
	__typename?: 'RootQueryToCategoryConnection';
	/** Edges for the RootQueryToCategoryConnection connection */
	edges: Maybe<Array<Maybe<RootQueryToCategoryConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Category>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToCategoryConnectionEdge = {
	__typename?: 'RootQueryToCategoryConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Category>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum CategoryIdType {
	/** The Database ID for the node */
	DatabaseId = 'DATABASE_ID',
	/** The hashed Global ID */
	Id = 'ID',
	/** The name of the node */
	Name = 'NAME',
	/** Url friendly name of the node */
	Slug = 'SLUG',
	/** The URI for the node */
	Uri = 'URI'
}

/** Arguments for filtering the RootQueryToCommentConnection connection */
export type RootQueryToCommentConnectionWhereArgs = {
	/** Comment author email address. */
	authorEmail: Maybe<Scalars['String']>;
	/** Array of author IDs to include comments for. */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Comment author URL. */
	authorUrl: Maybe<Scalars['String']>;
	/** Array of comment IDs to include. */
	commentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Include comments of a given type. */
	commentType: Maybe<Scalars['String']>;
	/** Include comments from a given array of comment types. */
	commentTypeIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn: Maybe<Scalars['String']>;
	/** Content object author ID to limit results by. */
	contentAuthor: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId: Maybe<Scalars['ID']>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Content object name to retrieve affiliated comments for. */
	contentName: Maybe<Scalars['String']>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent: Maybe<Scalars['Int']>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus: Maybe<Array<Maybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType: Maybe<Array<Maybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Karma score to retrieve matching comments for. */
	karma: Maybe<Scalars['Int']>;
	/** The cardinality of the order of the connection */
	order: Maybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby: Maybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent: Maybe<Scalars['Int']>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Search term(s) to retrieve matching comments for. */
	search: Maybe<Scalars['String']>;
	/** Comment status to limit results by. */
	status: Maybe<Scalars['String']>;
	/** Include comments for a specific user ID. */
	userId: Maybe<Scalars['ID']>;
};

/** Connection between the RootQuery type and the Comment type */
export type RootQueryToCommentConnection = {
	__typename?: 'RootQueryToCommentConnection';
	/** Edges for the RootQueryToCommentConnection connection */
	edges: Maybe<Array<Maybe<RootQueryToCommentConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Comment>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToCommentConnectionEdge = {
	__typename?: 'RootQueryToCommentConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Comment>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ConsultantIdType {
	/** Identify a resource by the Database ID. */
	DatabaseId = 'DATABASE_ID',
	/** Identify a resource by the (hashed) Global ID. */
	Id = 'ID',
	/** Identify a resource by the URI. */
	Uri = 'URI',
	/** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
	Slug = 'SLUG'
}

/** Arguments for filtering the RootQueryToConsultantConnection connection */
export type RootQueryToConsultantConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the consultant type */
export type RootQueryToConsultantConnection = {
	__typename?: 'RootQueryToConsultantConnection';
	/** Edges for the RootQueryToConsultantConnection connection */
	edges: Maybe<Array<Maybe<RootQueryToConsultantConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Consultant>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToConsultantConnectionEdge = {
	__typename?: 'RootQueryToConsultantConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Consultant>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ContentNodeIdTypeEnum {
	/** Identify a resource by the Database ID. */
	DatabaseId = 'DATABASE_ID',
	/** Identify a resource by the (hashed) Global ID. */
	Id = 'ID',
	/** Identify a resource by the URI. */
	Uri = 'URI'
}

/** Arguments for filtering the RootQueryToContentNodeConnection connection */
export type RootQueryToContentNodeConnectionWhereArgs = {
	/** The Types of content to filter */
	contentTypes: Maybe<Array<Maybe<ContentTypeEnum>>>;
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the ContentNode type */
export type RootQueryToContentNodeConnection = {
	__typename?: 'RootQueryToContentNodeConnection';
	/** Edges for the RootQueryToContentNodeConnection connection */
	edges: Maybe<Array<Maybe<RootQueryToContentNodeConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<ContentNode>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToContentNodeConnectionEdge = {
	__typename?: 'RootQueryToContentNodeConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<ContentNode>;
};

/** The Type of Identifier used to fetch a single Content Type node. To be used along with the "id" field. Default is "ID". */
export enum ContentTypeIdTypeEnum {
	/** The globally unique ID */
	Id = 'ID',
	/** The name of the content type. */
	Name = 'NAME'
}

/** Connection between the RootQuery type and the ContentType type */
export type RootQueryToContentTypeConnection = {
	__typename?: 'RootQueryToContentTypeConnection';
	/** Edges for the RootQueryToContentTypeConnection connection */
	edges: Maybe<Array<Maybe<RootQueryToContentTypeConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<ContentType>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToContentTypeConnectionEdge = {
	__typename?: 'RootQueryToContentTypeConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<ContentType>;
};

/** The discussion setting type */
export type DiscussionSettings = {
	__typename?: 'DiscussionSettings';
	/** Allow people to submit comments on new posts. */
	defaultCommentStatus: Maybe<Scalars['String']>;
	/** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
	defaultPingStatus: Maybe<Scalars['String']>;
};

/** The general setting type */
export type GeneralSettings = {
	__typename?: 'GeneralSettings';
	/** A date format for all date strings. */
	dateFormat: Maybe<Scalars['String']>;
	/** Site tagline. */
	description: Maybe<Scalars['String']>;
	/** This address is used for admin purposes, like new user notification. */
	email: Maybe<Scalars['String']>;
	/** WordPress locale code. */
	language: Maybe<Scalars['String']>;
	/** A day number of the week that the week should start on. */
	startOfWeek: Maybe<Scalars['Int']>;
	/** A time format for all time strings. */
	timeFormat: Maybe<Scalars['String']>;
	/** A city in the same timezone as you. */
	timezone: Maybe<Scalars['String']>;
	/** Site title. */
	title: Maybe<Scalars['String']>;
	/** Site URL. */
	url: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum MediaItemIdType {
	/** Identify a resource by the Database ID. */
	DatabaseId = 'DATABASE_ID',
	/** Identify a resource by the (hashed) Global ID. */
	Id = 'ID',
	/** Identify a resource by the URI. */
	Uri = 'URI',
	/** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
	Slug = 'SLUG',
	/** Identify a media item by its source url */
	SourceUrl = 'SOURCE_URL'
}

/** Arguments for filtering the RootQueryToMediaItemConnection connection */
export type RootQueryToMediaItemConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the mediaItem type */
export type RootQueryToMediaItemConnection = {
	__typename?: 'RootQueryToMediaItemConnection';
	/** Edges for the RootQueryToMediaItemConnection connection */
	edges: Maybe<Array<Maybe<RootQueryToMediaItemConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<MediaItem>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToMediaItemConnectionEdge = {
	__typename?: 'RootQueryToMediaItemConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<MediaItem>;
};

/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export enum MenuNodeIdTypeEnum {
	/** Identify a menu node by the Database ID. */
	DatabaseId = 'DATABASE_ID',
	/** Identify a menu node by the (hashed) Global ID. */
	Id = 'ID',
	/** Identify a menu node by it's name */
	Name = 'NAME'
}

/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export type Menu = Node &
	DatabaseIdentifier & {
		__typename?: 'Menu';
		/** Added to the GraphQL Schema because the ACF Field Group &quot;FOOTER_DYNAMIC&quot; was assigned to Menus */
		FOOTER_DYNAMIC: Maybe<Menu_FooterDynamic>;
		/** Added to the GraphQL Schema because the ACF Field Group &quot;HEADER_DYNAMIC&quot; was assigned to Menus */
		HEADER_DYNAMIC: Maybe<Menu_HeaderDynamic>;
		/** The number of items in the menu */
		count: Maybe<Scalars['Int']>;
		/** The unique identifier stored in the database */
		databaseId: Scalars['Int'];
		/** The globally unique identifier of the nav menu object. */
		id: Scalars['ID'];
		/** Whether the object is restricted from the current viewer */
		isRestricted: Maybe<Scalars['Boolean']>;
		locations: Maybe<Array<Maybe<MenuLocationEnum>>>;
		/**
		 * WP ID of the nav menu.
		 * @deprecated Deprecated in favor of the databaseId field
		 */
		menuId: Maybe<Scalars['Int']>;
		/** Connection between the Menu type and the MenuItem type */
		menuItems: Maybe<MenuToMenuItemConnection>;
		/** Display name of the menu. Equivalent to WP_Term-&gt;name. */
		name: Maybe<Scalars['String']>;
		/** The url friendly name of the menu. Equivalent to WP_Term-&gt;slug */
		slug: Maybe<Scalars['String']>;
	};

/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export type MenuMenuItemsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<MenuToMenuItemConnectionWhereArgs>;
};

/** Field Group */
export type Menu_FooterDynamic = {
	__typename?: 'Menu_FooterDynamic';
	fieldGroupName: Maybe<Scalars['String']>;
};

/** Field Group */
export type Menu_HeaderDynamic = {
	__typename?: 'Menu_HeaderDynamic';
	fieldGroupName: Maybe<Scalars['String']>;
};

/** Registered menu locations */
export enum MenuLocationEnum {
	Expanded = 'EXPANDED',
	Footer = 'FOOTER',
	JetpackSocialMenu = 'JETPACK_SOCIAL_MENU',
	Mobile = 'MOBILE',
	Primary = 'PRIMARY',
	Social = 'SOCIAL'
}

/** Arguments for filtering the MenuToMenuItemConnection connection */
export type MenuToMenuItemConnectionWhereArgs = {
	/** The ID of the object */
	id: Maybe<Scalars['Int']>;
	/** The menu location for the menu being queried */
	location: Maybe<MenuLocationEnum>;
	/** The database ID of the parent menu object */
	parentDatabaseId: Maybe<Scalars['Int']>;
	/** The ID of the parent menu object */
	parentId: Maybe<Scalars['ID']>;
};

/** Connection between the Menu type and the MenuItem type */
export type MenuToMenuItemConnection = {
	__typename?: 'MenuToMenuItemConnection';
	/** Edges for the MenuToMenuItemConnection connection */
	edges: Maybe<Array<Maybe<MenuToMenuItemConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<MenuItem>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type MenuToMenuItemConnectionEdge = {
	__typename?: 'MenuToMenuItemConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<MenuItem>;
};

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItem = Node &
	DatabaseIdentifier & {
		__typename?: 'MenuItem';
		/** Connection between the MenuItem type and the MenuItem type */
		childItems: Maybe<MenuItemToMenuItemConnection>;
		/** Connection from MenuItem to it&#039;s connected node */
		connectedNode: Maybe<MenuItemToMenuItemLinkableConnectionEdge>;
		/**
		 * The object connected to this menu item.
		 * @deprecated Deprecated in favor of the connectedNode field
		 */
		connectedObject: Maybe<MenuItemObjectUnion>;
		/** Class attribute for the menu item link */
		cssClasses: Maybe<Array<Maybe<Scalars['String']>>>;
		/** The unique identifier stored in the database */
		databaseId: Scalars['Int'];
		/** Description of the menu item. */
		description: Maybe<Scalars['String']>;
		/** The globally unique identifier of the nav menu item object. */
		id: Scalars['ID'];
		/** Whether the object is restricted from the current viewer */
		isRestricted: Maybe<Scalars['Boolean']>;
		/** Label or title of the menu item. */
		label: Maybe<Scalars['String']>;
		/** Link relationship (XFN) of the menu item. */
		linkRelationship: Maybe<Scalars['String']>;
		locations: Maybe<Array<Maybe<MenuLocationEnum>>>;
		/** The Menu a MenuItem is part of */
		menu: Maybe<MenuItemToMenuConnectionEdge>;
		/**
		 * WP ID of the menu item.
		 * @deprecated Deprecated in favor of the databaseId field
		 */
		menuItemId: Maybe<Scalars['Int']>;
		/** Menu item order */
		order: Maybe<Scalars['Int']>;
		/** The database id of the parent menu item or null if it is the root */
		parentDatabaseId: Maybe<Scalars['Int']>;
		/** The globally unique identifier of the parent nav menu item object. */
		parentId: Maybe<Scalars['ID']>;
		/** Path for the resource. Relative path for internal resources. Absolute path for external resources. */
		path: Scalars['String'];
		/** Target attribute for the menu item link. */
		target: Maybe<Scalars['String']>;
		/** Title attribute for the menu item link */
		title: Maybe<Scalars['String']>;
		/** URL or destination of the menu item. */
		url: Maybe<Scalars['String']>;
	};

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItemChildItemsArgs = {
	first: Maybe<Scalars['Int']>;
	last: Maybe<Scalars['Int']>;
	after: Maybe<Scalars['String']>;
	before: Maybe<Scalars['String']>;
	where: Maybe<MenuItemToMenuItemConnectionWhereArgs>;
};

/** Arguments for filtering the MenuItemToMenuItemConnection connection */
export type MenuItemToMenuItemConnectionWhereArgs = {
	/** The ID of the object */
	id: Maybe<Scalars['Int']>;
	/** The menu location for the menu being queried */
	location: Maybe<MenuLocationEnum>;
	/** The database ID of the parent menu object */
	parentDatabaseId: Maybe<Scalars['Int']>;
	/** The ID of the parent menu object */
	parentId: Maybe<Scalars['ID']>;
};

/** Connection between the MenuItem type and the MenuItem type */
export type MenuItemToMenuItemConnection = {
	__typename?: 'MenuItemToMenuItemConnection';
	/** Edges for the MenuItemToMenuItemConnection connection */
	edges: Maybe<Array<Maybe<MenuItemToMenuItemConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<MenuItem>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type MenuItemToMenuItemConnectionEdge = {
	__typename?: 'MenuItemToMenuItemConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<MenuItem>;
};

/** Connection between the MenuItem type and the MenuItemLinkable type */
export type MenuItemToMenuItemLinkableConnectionEdge = {
	__typename?: 'MenuItemToMenuItemLinkableConnectionEdge';
	/** The nodes of the connection, without the edges */
	node: Maybe<MenuItemLinkable>;
};

/** Deprecated in favor of MenuItemLinkeable Interface */
export type MenuItemObjectUnion =
	| Post
	| Page
	| Testimonial
	| About
	| Consultant
	| Position
	| Category
	| Tag;

/** Connection between the MenuItem type and the Menu type */
export type MenuItemToMenuConnectionEdge = {
	__typename?: 'MenuItemToMenuConnectionEdge';
	/** The nodes of the connection, without the edges */
	node: Maybe<Menu>;
};

/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export enum MenuItemNodeIdTypeEnum {
	/** Identify a resource by the Database ID. */
	DatabaseId = 'DATABASE_ID',
	/** Identify a resource by the (hashed) Global ID. */
	Id = 'ID'
}

/** Arguments for filtering the RootQueryToMenuItemConnection connection */
export type RootQueryToMenuItemConnectionWhereArgs = {
	/** The ID of the object */
	id: Maybe<Scalars['Int']>;
	/** The menu location for the menu being queried */
	location: Maybe<MenuLocationEnum>;
	/** The database ID of the parent menu object */
	parentDatabaseId: Maybe<Scalars['Int']>;
	/** The ID of the parent menu object */
	parentId: Maybe<Scalars['ID']>;
};

/** Connection between the RootQuery type and the MenuItem type */
export type RootQueryToMenuItemConnection = {
	__typename?: 'RootQueryToMenuItemConnection';
	/** Edges for the RootQueryToMenuItemConnection connection */
	edges: Maybe<Array<Maybe<RootQueryToMenuItemConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<MenuItem>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToMenuItemConnectionEdge = {
	__typename?: 'RootQueryToMenuItemConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<MenuItem>;
};

/** Arguments for filtering the RootQueryToMenuConnection connection */
export type RootQueryToMenuConnectionWhereArgs = {
	/** The ID of the object */
	id: Maybe<Scalars['Int']>;
	/** The menu location for the menu being queried */
	location: Maybe<MenuLocationEnum>;
	/** The slug of the menu to query items for */
	slug: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the Menu type */
export type RootQueryToMenuConnection = {
	__typename?: 'RootQueryToMenuConnection';
	/** Edges for the RootQueryToMenuConnection connection */
	edges: Maybe<Array<Maybe<RootQueryToMenuConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Menu>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToMenuConnectionEdge = {
	__typename?: 'RootQueryToMenuConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Menu>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PageIdType {
	/** Identify a resource by the Database ID. */
	DatabaseId = 'DATABASE_ID',
	/** Identify a resource by the (hashed) Global ID. */
	Id = 'ID',
	/** Identify a resource by the URI. */
	Uri = 'URI'
}

/** Arguments for filtering the RootQueryToPageConnection connection */
export type RootQueryToPageConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the page type */
export type RootQueryToPageConnection = {
	__typename?: 'RootQueryToPageConnection';
	/** Edges for the RootQueryToPageConnection connection */
	edges: Maybe<Array<Maybe<RootQueryToPageConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Page>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToPageConnectionEdge = {
	__typename?: 'RootQueryToPageConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Page>;
};

/** An plugin object */
export type Plugin = Node & {
	__typename?: 'Plugin';
	/** Name of the plugin author(s), may also be a company name. */
	author: Maybe<Scalars['String']>;
	/** URI for the related author(s)/company website. */
	authorUri: Maybe<Scalars['String']>;
	/** Description of the plugin. */
	description: Maybe<Scalars['String']>;
	/** The globally unique identifier of the plugin object. */
	id: Scalars['ID'];
	/** Whether the object is restricted from the current viewer */
	isRestricted: Maybe<Scalars['Boolean']>;
	/** Display name of the plugin. */
	name: Maybe<Scalars['String']>;
	/** Plugin path. */
	path: Maybe<Scalars['String']>;
	/** URI for the plugin website. This is useful for directing users for support requests etc. */
	pluginUri: Maybe<Scalars['String']>;
	/** Current version of the plugin. */
	version: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the Plugin type */
export type RootQueryToPluginConnection = {
	__typename?: 'RootQueryToPluginConnection';
	/** Edges for the RootQueryToPluginConnection connection */
	edges: Maybe<Array<Maybe<RootQueryToPluginConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Plugin>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToPluginConnectionEdge = {
	__typename?: 'RootQueryToPluginConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Plugin>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PositionIdType {
	/** Identify a resource by the Database ID. */
	DatabaseId = 'DATABASE_ID',
	/** Identify a resource by the (hashed) Global ID. */
	Id = 'ID',
	/** Identify a resource by the URI. */
	Uri = 'URI',
	/** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
	Slug = 'SLUG'
}

/** Arguments for filtering the RootQueryToPositionConnection connection */
export type RootQueryToPositionConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the position type */
export type RootQueryToPositionConnection = {
	__typename?: 'RootQueryToPositionConnection';
	/** Edges for the RootQueryToPositionConnection connection */
	edges: Maybe<Array<Maybe<RootQueryToPositionConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Position>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToPositionConnectionEdge = {
	__typename?: 'RootQueryToPositionConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Position>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PostIdType {
	/** Identify a resource by the Database ID. */
	DatabaseId = 'DATABASE_ID',
	/** Identify a resource by the (hashed) Global ID. */
	Id = 'ID',
	/** Identify a resource by the URI. */
	Uri = 'URI',
	/** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
	Slug = 'SLUG'
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PostFormatIdType {
	/** The Database ID for the node */
	DatabaseId = 'DATABASE_ID',
	/** The hashed Global ID */
	Id = 'ID',
	/** The name of the node */
	Name = 'NAME',
	/** Url friendly name of the node */
	Slug = 'SLUG',
	/** The URI for the node */
	Uri = 'URI'
}

/** Arguments for filtering the RootQueryToPostFormatConnection connection */
export type RootQueryToPostFormatConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the postFormat type */
export type RootQueryToPostFormatConnection = {
	__typename?: 'RootQueryToPostFormatConnection';
	/** Edges for the RootQueryToPostFormatConnection connection */
	edges: Maybe<Array<Maybe<RootQueryToPostFormatConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<PostFormat>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToPostFormatConnectionEdge = {
	__typename?: 'RootQueryToPostFormatConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<PostFormat>;
};

/** Arguments for filtering the RootQueryToPostConnection connection */
export type RootQueryToPostConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Tag Slug */
	tag: Maybe<Scalars['String']>;
	/** Use Tag ID */
	tagId: Maybe<Scalars['String']>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag slugs, used to display objects from one tag OR another */
	tagSlugAnd: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of tag slugs, used to exclude objects in specified tags */
	tagSlugIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the post type */
export type RootQueryToPostConnection = {
	__typename?: 'RootQueryToPostConnection';
	/** Edges for the RootQueryToPostConnection connection */
	edges: Maybe<Array<Maybe<RootQueryToPostConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Post>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToPostConnectionEdge = {
	__typename?: 'RootQueryToPostConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Post>;
};

/** The reading setting type */
export type ReadingSettings = {
	__typename?: 'ReadingSettings';
	/** Blog pages show at most. */
	postsPerPage: Maybe<Scalars['Int']>;
};

/** Connection between the RootQuery type and the EnqueuedScript type */
export type RootQueryToEnqueuedScriptConnection = {
	__typename?: 'RootQueryToEnqueuedScriptConnection';
	/** Edges for the RootQueryToEnqueuedScriptConnection connection */
	edges: Maybe<Array<Maybe<RootQueryToEnqueuedScriptConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<EnqueuedScript>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToEnqueuedScriptConnectionEdge = {
	__typename?: 'RootQueryToEnqueuedScriptConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<EnqueuedScript>;
};

/** Connection between the RootQuery type and the EnqueuedStylesheet type */
export type RootQueryToEnqueuedStylesheetConnection = {
	__typename?: 'RootQueryToEnqueuedStylesheetConnection';
	/** Edges for the RootQueryToEnqueuedStylesheetConnection connection */
	edges: Maybe<Array<Maybe<RootQueryToEnqueuedStylesheetConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<EnqueuedStylesheet>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToEnqueuedStylesheetConnectionEdge = {
	__typename?: 'RootQueryToEnqueuedStylesheetConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<EnqueuedStylesheet>;
};

/** Arguments for filtering the RootQueryToContentRevisionUnionConnection connection */
export type RootQueryToContentRevisionUnionConnectionWhereArgs = {
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the ContentRevisionUnion type */
export type RootQueryToContentRevisionUnionConnection = {
	__typename?: 'RootQueryToContentRevisionUnionConnection';
	/** Edges for the RootQueryToContentRevisionUnionConnection connection */
	edges: Maybe<Array<Maybe<RootQueryToContentRevisionUnionConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<ContentRevisionUnion>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToContentRevisionUnionConnectionEdge = {
	__typename?: 'RootQueryToContentRevisionUnionConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<ContentRevisionUnion>;
};

/** The Yoast SEO site level configuration data */
export type SeoConfig = {
	__typename?: 'SEOConfig';
	breadcrumbs: Maybe<SeoBreadcrumbs>;
	contentTypes: Maybe<SeoContentTypes>;
	openGraph: Maybe<SeoOpenGraph>;
	redirects: Maybe<Array<Maybe<SeoRedirect>>>;
	schema: Maybe<SeoSchema>;
	social: Maybe<SeoSocial>;
	webmaster: Maybe<SeoWebmaster>;
};

/** The Yoast SEO breadcrumb config */
export type SeoBreadcrumbs = {
	__typename?: 'SEOBreadcrumbs';
	archivePrefix: Maybe<Scalars['String']>;
	boldLast: Maybe<Scalars['Boolean']>;
	enabled: Maybe<Scalars['Boolean']>;
	homeText: Maybe<Scalars['String']>;
	notFoundText: Maybe<Scalars['String']>;
	prefix: Maybe<Scalars['String']>;
	searchPrefix: Maybe<Scalars['String']>;
	separator: Maybe<Scalars['String']>;
	showBlogPage: Maybe<Scalars['Boolean']>;
};

/** The Yoast SEO search appearance content types */
export type SeoContentTypes = {
	__typename?: 'SEOContentTypes';
	about: Maybe<SeoContentType>;
	consultant: Maybe<SeoContentType>;
	mediaItem: Maybe<SeoContentType>;
	page: Maybe<SeoContentType>;
	position: Maybe<SeoContentType>;
	post: Maybe<SeoContentType>;
	testimonial: Maybe<SeoContentType>;
};

/** he Yoast SEO search appearance content types fields */
export type SeoContentType = {
	__typename?: 'SEOContentType';
	metaDesc: Maybe<Scalars['String']>;
	metaRobotsNoindex: Maybe<Scalars['Boolean']>;
	schema: Maybe<SeoPageInfoSchema>;
	schemaType: Maybe<Scalars['String']>;
	title: Maybe<Scalars['String']>;
};

/** The Open Graph data */
export type SeoOpenGraph = {
	__typename?: 'SEOOpenGraph';
	defaultImage: Maybe<MediaItem>;
	frontPage: Maybe<SeoOpenGraphFrontPage>;
};

/** The Open Graph Front page data */
export type SeoOpenGraphFrontPage = {
	__typename?: 'SEOOpenGraphFrontPage';
	description: Maybe<Scalars['String']>;
	image: Maybe<MediaItem>;
	title: Maybe<Scalars['String']>;
};

/** The Yoast redirect data  (Yoast Premium only) */
export type SeoRedirect = {
	__typename?: 'SEORedirect';
	format: Maybe<Scalars['String']>;
	origin: Maybe<Scalars['String']>;
	target: Maybe<Scalars['String']>;
	type: Maybe<Scalars['Int']>;
};

/** The Yoast SEO schema data */
export type SeoSchema = {
	__typename?: 'SEOSchema';
	companyLogo: Maybe<MediaItem>;
	companyName: Maybe<Scalars['String']>;
	companyOrPerson: Maybe<Scalars['String']>;
	inLanguage: Maybe<Scalars['String']>;
	logo: Maybe<MediaItem>;
	personLogo: Maybe<MediaItem>;
	personName: Maybe<Scalars['String']>;
	siteName: Maybe<Scalars['String']>;
	siteUrl: Maybe<Scalars['String']>;
	wordpressSiteName: Maybe<Scalars['String']>;
};

/** The Yoast SEO Social media links */
export type SeoSocial = {
	__typename?: 'SEOSocial';
	facebook: Maybe<SeoSocialFacebook>;
	instagram: Maybe<SeoSocialInstagram>;
	linkedIn: Maybe<SeoSocialLinkedIn>;
	mySpace: Maybe<SeoSocialMySpace>;
	pinterest: Maybe<SeoSocialPinterest>;
	twitter: Maybe<SeoSocialTwitter>;
	wikipedia: Maybe<SeoSocialWikipedia>;
	youTube: Maybe<SeoSocialYoutube>;
};

export type SeoSocialFacebook = {
	__typename?: 'SEOSocialFacebook';
	defaultImage: Maybe<MediaItem>;
	url: Maybe<Scalars['String']>;
};

export type SeoSocialInstagram = {
	__typename?: 'SEOSocialInstagram';
	url: Maybe<Scalars['String']>;
};

export type SeoSocialLinkedIn = {
	__typename?: 'SEOSocialLinkedIn';
	url: Maybe<Scalars['String']>;
};

export type SeoSocialMySpace = {
	__typename?: 'SEOSocialMySpace';
	url: Maybe<Scalars['String']>;
};

export type SeoSocialPinterest = {
	__typename?: 'SEOSocialPinterest';
	metaTag: Maybe<Scalars['String']>;
	url: Maybe<Scalars['String']>;
};

export type SeoSocialTwitter = {
	__typename?: 'SEOSocialTwitter';
	cardType: Maybe<SeoCardType>;
	username: Maybe<Scalars['String']>;
};

/** Types of cards */
export enum SeoCardType {
	Summary = 'summary',
	SummaryLargeImage = 'summary_large_image'
}

export type SeoSocialWikipedia = {
	__typename?: 'SEOSocialWikipedia';
	url: Maybe<Scalars['String']>;
};

export type SeoSocialYoutube = {
	__typename?: 'SEOSocialYoutube';
	url: Maybe<Scalars['String']>;
};

/** The Yoast SEO  webmaster fields */
export type SeoWebmaster = {
	__typename?: 'SEOWebmaster';
	baiduVerify: Maybe<Scalars['String']>;
	googleVerify: Maybe<Scalars['String']>;
	msVerify: Maybe<Scalars['String']>;
	yandexVerify: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum TagIdType {
	/** The Database ID for the node */
	DatabaseId = 'DATABASE_ID',
	/** The hashed Global ID */
	Id = 'ID',
	/** The name of the node */
	Name = 'NAME',
	/** Url friendly name of the node */
	Slug = 'SLUG',
	/** The URI for the node */
	Uri = 'URI'
}

/** Arguments for filtering the RootQueryToTagConnection connection */
export type RootQueryToTagConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the tag type */
export type RootQueryToTagConnection = {
	__typename?: 'RootQueryToTagConnection';
	/** Edges for the RootQueryToTagConnection connection */
	edges: Maybe<Array<Maybe<RootQueryToTagConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Tag>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToTagConnectionEdge = {
	__typename?: 'RootQueryToTagConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Tag>;
};

/** Connection between the RootQuery type and the Taxonomy type */
export type RootQueryToTaxonomyConnection = {
	__typename?: 'RootQueryToTaxonomyConnection';
	/** Edges for the RootQueryToTaxonomyConnection connection */
	edges: Maybe<Array<Maybe<RootQueryToTaxonomyConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Taxonomy>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToTaxonomyConnectionEdge = {
	__typename?: 'RootQueryToTaxonomyConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Taxonomy>;
};

/** The Type of Identifier used to fetch a single Taxonomy node. To be used along with the "id" field. Default is "ID". */
export enum TaxonomyIdTypeEnum {
	/** The globally unique ID */
	Id = 'ID',
	/** The name of the taxonomy */
	Name = 'NAME'
}

/** The Type of Identifier used to fetch a single resource. Default is "ID". To be used along with the "id" field. */
export enum TermNodeIdTypeEnum {
	/** The Database ID for the node */
	DatabaseId = 'DATABASE_ID',
	/** The hashed Global ID */
	Id = 'ID',
	/** The name of the node */
	Name = 'NAME',
	/** Url friendly name of the node */
	Slug = 'SLUG',
	/** The URI for the node */
	Uri = 'URI'
}

/** Arguments for filtering the RootQueryToTermNodeConnection connection */
export type RootQueryToTermNodeConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug: Maybe<Array<Maybe<Scalars['String']>>>;
	/** The Taxonomy to filter terms by */
	taxonomies: Maybe<Array<Maybe<TaxonomyEnum>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the TermNode type */
export type RootQueryToTermNodeConnection = {
	__typename?: 'RootQueryToTermNodeConnection';
	/** Edges for the RootQueryToTermNodeConnection connection */
	edges: Maybe<Array<Maybe<RootQueryToTermNodeConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<TermNode>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToTermNodeConnectionEdge = {
	__typename?: 'RootQueryToTermNodeConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<TermNode>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum TestimonialIdType {
	/** Identify a resource by the Database ID. */
	DatabaseId = 'DATABASE_ID',
	/** Identify a resource by the (hashed) Global ID. */
	Id = 'ID',
	/** Identify a resource by the URI. */
	Uri = 'URI',
	/** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
	Slug = 'SLUG'
}

/** Arguments for filtering the RootQueryToTestimonialConnection connection */
export type RootQueryToTestimonialConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search: Maybe<Scalars['String']>;
	stati: Maybe<Array<Maybe<PostStatusEnum>>>;
	status: Maybe<PostStatusEnum>;
	/** Title of the object */
	title: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the testimonial type */
export type RootQueryToTestimonialConnection = {
	__typename?: 'RootQueryToTestimonialConnection';
	/** Edges for the RootQueryToTestimonialConnection connection */
	edges: Maybe<Array<Maybe<RootQueryToTestimonialConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Testimonial>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToTestimonialConnectionEdge = {
	__typename?: 'RootQueryToTestimonialConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Testimonial>;
};

/** A theme object */
export type Theme = Node & {
	__typename?: 'Theme';
	/** Name of the theme author(s), could also be a company name. This field is equivalent to WP_Theme-&gt;get( &quot;Author&quot; ). */
	author: Maybe<Scalars['String']>;
	/** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;AuthorURI&quot; ). */
	authorUri: Maybe<Scalars['String']>;
	/** The description of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Description&quot; ). */
	description: Maybe<Scalars['String']>;
	/** The globally unique identifier of the theme object. */
	id: Scalars['ID'];
	/** Whether the object is restricted from the current viewer */
	isRestricted: Maybe<Scalars['Boolean']>;
	/** Display name of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Name&quot; ). */
	name: Maybe<Scalars['String']>;
	/** The URL of the screenshot for the theme. The screenshot is intended to give an overview of what the theme looks like. This field is equivalent to WP_Theme-&gt;get_screenshot(). */
	screenshot: Maybe<Scalars['String']>;
	/** The theme slug is used to internally match themes. Theme slugs can have subdirectories like: my-theme/sub-theme. This field is equivalent to WP_Theme-&gt;get_stylesheet(). */
	slug: Maybe<Scalars['String']>;
	/** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;Tags&quot; ). */
	tags: Maybe<Array<Maybe<Scalars['String']>>>;
	/** A URI if the theme has a website associated with it. The Theme URI is handy for directing users to a theme site for support etc. This field is equivalent to WP_Theme-&gt;get( &quot;ThemeURI&quot; ). */
	themeUri: Maybe<Scalars['String']>;
	/** The current version of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Version&quot; ). */
	version: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the Theme type */
export type RootQueryToThemeConnection = {
	__typename?: 'RootQueryToThemeConnection';
	/** Edges for the RootQueryToThemeConnection connection */
	edges: Maybe<Array<Maybe<RootQueryToThemeConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<Theme>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToThemeConnectionEdge = {
	__typename?: 'RootQueryToThemeConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<Theme>;
};

/** The Type of Identifier used to fetch a single User node. To be used along with the "id" field. Default is "ID". */
export enum UserNodeIdTypeEnum {
	/** The Database ID for the node */
	DatabaseId = 'DATABASE_ID',
	/** The Email of the User */
	Email = 'EMAIL',
	/** The hashed Global ID */
	Id = 'ID',
	/** The slug of the User */
	Slug = 'SLUG',
	/** The URI for the node */
	Uri = 'URI',
	/** The username the User uses to login with */
	Username = 'USERNAME'
}

/** Connection between the RootQuery type and the UserRole type */
export type RootQueryToUserRoleConnection = {
	__typename?: 'RootQueryToUserRoleConnection';
	/** Edges for the RootQueryToUserRoleConnection connection */
	edges: Maybe<Array<Maybe<RootQueryToUserRoleConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<UserRole>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToUserRoleConnectionEdge = {
	__typename?: 'RootQueryToUserRoleConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<UserRole>;
};

/** Arguments for filtering the RootQueryToUserConnection connection */
export type RootQueryToUserConnectionWhereArgs = {
	/** Array of userIds to exclude. */
	exclude: Maybe<Array<Maybe<Scalars['Int']>>>;
	/** Pass an array of post types to filter results to users who have published posts in those post types. */
	hasPublishedPosts: Maybe<Array<Maybe<ContentTypeEnum>>>;
	/** Array of userIds to include. */
	include: Maybe<Array<Maybe<Scalars['Int']>>>;
	/** The user login. */
	login: Maybe<Scalars['String']>;
	/** An array of logins to include. Users matching one of these logins will be included in results. */
	loginIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** An array of logins to exclude. Users matching one of these logins will not be included in results. */
	loginNotIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** The user nicename. */
	nicename: Maybe<Scalars['String']>;
	/** An array of nicenames to include. Users matching one of these nicenames will be included in results. */
	nicenameIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** An array of nicenames to exclude. Users matching one of these nicenames will not be included in results. */
	nicenameNotIn: Maybe<Array<Maybe<Scalars['String']>>>;
	/** What paramater to use to order the objects by. */
	orderby: Maybe<Array<Maybe<UsersConnectionOrderbyInput>>>;
	/** An array of role names that users must match to be included in results. Note that this is an inclusive list: users must match *each* role. */
	role: Maybe<UserRoleEnum>;
	/** An array of role names. Matched users must have at least one of these roles. */
	roleIn: Maybe<Array<Maybe<UserRoleEnum>>>;
	/** An array of role names to exclude. Users matching one or more of these roles will not be included in results. */
	roleNotIn: Maybe<Array<Maybe<UserRoleEnum>>>;
	/** Search keyword. Searches for possible string matches on columns. When "searchColumns" is left empty, it tries to determine which column to search in based on search string. */
	search: Maybe<Scalars['String']>;
	/** Array of column names to be searched. Accepts 'ID', 'login', 'nicename', 'email', 'url'. */
	searchColumns: Maybe<Array<Maybe<UsersConnectionSearchColumnEnum>>>;
};

/** Options for ordering the connection */
export type UsersConnectionOrderbyInput = {
	field: UsersConnectionOrderbyEnum;
	order: Maybe<OrderEnum>;
};

/** Field to order the connection by */
export enum UsersConnectionOrderbyEnum {
	/** Order by display name */
	DisplayName = 'DISPLAY_NAME',
	/** Order by email address */
	Email = 'EMAIL',
	/** Order by login */
	Login = 'LOGIN',
	/** Preserve the login order given in the LOGIN_IN array */
	LoginIn = 'LOGIN_IN',
	/** Order by nice name */
	NiceName = 'NICE_NAME',
	/** Preserve the nice name order given in the NICE_NAME_IN array */
	NiceNameIn = 'NICE_NAME_IN',
	/** Order by registration date */
	Registered = 'REGISTERED',
	/** Order by URL */
	Url = 'URL'
}

/** Names of available user roles */
export enum UserRoleEnum {
	Administrator = 'ADMINISTRATOR',
	Author = 'AUTHOR',
	Contributor = 'CONTRIBUTOR',
	Editor = 'EDITOR',
	SeoEditor = 'SEO_EDITOR',
	SeoManager = 'SEO_MANAGER',
	Subscriber = 'SUBSCRIBER'
}

/** Names of available user roles */
export enum UsersConnectionSearchColumnEnum {
	Administrator = 'ADMINISTRATOR',
	Author = 'AUTHOR',
	Contributor = 'CONTRIBUTOR',
	Editor = 'EDITOR',
	SeoEditor = 'SEO_EDITOR',
	SeoManager = 'SEO_MANAGER',
	Subscriber = 'SUBSCRIBER'
}

/** Connection between the RootQuery type and the User type */
export type RootQueryToUserConnection = {
	__typename?: 'RootQueryToUserConnection';
	/** Edges for the RootQueryToUserConnection connection */
	edges: Maybe<Array<Maybe<RootQueryToUserConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes: Maybe<Array<Maybe<User>>>;
	/** Information about pagination in a connection. */
	pageInfo: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToUserConnectionEdge = {
	__typename?: 'RootQueryToUserConnectionEdge';
	/** A cursor for use in pagination */
	cursor: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node: Maybe<User>;
};

/** The writing setting type */
export type WritingSettings = {
	__typename?: 'WritingSettings';
	/** Default post category. */
	defaultCategory: Maybe<Scalars['Int']>;
	/** Default post format. */
	defaultPostFormat: Maybe<Scalars['String']>;
	/** Convert emoticons like :-) and :-P to graphics on display. */
	useSmilies: Maybe<Scalars['Boolean']>;
};

/** The root mutation */
export type RootMutation = {
	__typename?: 'RootMutation';
	/** The payload for the UpdateCategory mutation */
	updateCategory: Maybe<UpdateCategoryPayload>;
	/** The payload for the UpdatePostFormat mutation */
	updatePostFormat: Maybe<UpdatePostFormatPayload>;
	/** The payload for the UpdateTag mutation */
	updateTag: Maybe<UpdateTagPayload>;
	/** The payload for the createAbout mutation */
	createAbout: Maybe<CreateAboutPayload>;
	/** The payload for the createCategory mutation */
	createCategory: Maybe<CreateCategoryPayload>;
	/** The payload for the createComment mutation */
	createComment: Maybe<CreateCommentPayload>;
	/** The payload for the createConsultant mutation */
	createConsultant: Maybe<CreateConsultantPayload>;
	/** The payload for the createMediaItem mutation */
	createMediaItem: Maybe<CreateMediaItemPayload>;
	/** The payload for the createPage mutation */
	createPage: Maybe<CreatePagePayload>;
	/** The payload for the createPosition mutation */
	createPosition: Maybe<CreatePositionPayload>;
	/** The payload for the createPost mutation */
	createPost: Maybe<CreatePostPayload>;
	/** The payload for the createPostFormat mutation */
	createPostFormat: Maybe<CreatePostFormatPayload>;
	/** The payload for the createTag mutation */
	createTag: Maybe<CreateTagPayload>;
	/** The payload for the createTestimonial mutation */
	createTestimonial: Maybe<CreateTestimonialPayload>;
	/** The payload for the createUser mutation */
	createUser: Maybe<CreateUserPayload>;
	/** The payload for the deleteAbout mutation */
	deleteAbout: Maybe<DeleteAboutPayload>;
	/** The payload for the deleteCategory mutation */
	deleteCategory: Maybe<DeleteCategoryPayload>;
	/** The payload for the deleteComment mutation */
	deleteComment: Maybe<DeleteCommentPayload>;
	/** The payload for the deleteConsultant mutation */
	deleteConsultant: Maybe<DeleteConsultantPayload>;
	/** The payload for the deleteMediaItem mutation */
	deleteMediaItem: Maybe<DeleteMediaItemPayload>;
	/** The payload for the deletePage mutation */
	deletePage: Maybe<DeletePagePayload>;
	/** The payload for the deletePosition mutation */
	deletePosition: Maybe<DeletePositionPayload>;
	/** The payload for the deletePost mutation */
	deletePost: Maybe<DeletePostPayload>;
	/** The payload for the deletePostFormat mutation */
	deletePostFormat: Maybe<DeletePostFormatPayload>;
	/** The payload for the deleteTag mutation */
	deleteTag: Maybe<DeleteTagPayload>;
	/** The payload for the deleteTestimonial mutation */
	deleteTestimonial: Maybe<DeleteTestimonialPayload>;
	/** The payload for the deleteUser mutation */
	deleteUser: Maybe<DeleteUserPayload>;
	increaseCount: Maybe<Scalars['Int']>;
	/** The payload for the login mutation */
	login: Maybe<LoginPayload>;
	/** The payload for the refreshJwtAuthToken mutation */
	refreshJwtAuthToken: Maybe<RefreshJwtAuthTokenPayload>;
	/** The payload for the registerUser mutation */
	registerUser: Maybe<RegisterUserPayload>;
	/** The payload for the resetUserPassword mutation */
	resetUserPassword: Maybe<ResetUserPasswordPayload>;
	/** The payload for the restoreComment mutation */
	restoreComment: Maybe<RestoreCommentPayload>;
	/** The payload for the sendPasswordResetEmail mutation */
	sendPasswordResetEmail: Maybe<SendPasswordResetEmailPayload>;
	/** The payload for the updateAbout mutation */
	updateAbout: Maybe<UpdateAboutPayload>;
	/** The payload for the updateComment mutation */
	updateComment: Maybe<UpdateCommentPayload>;
	/** The payload for the updateConsultant mutation */
	updateConsultant: Maybe<UpdateConsultantPayload>;
	/** The payload for the updateMediaItem mutation */
	updateMediaItem: Maybe<UpdateMediaItemPayload>;
	/** The payload for the updatePage mutation */
	updatePage: Maybe<UpdatePagePayload>;
	/** The payload for the updatePosition mutation */
	updatePosition: Maybe<UpdatePositionPayload>;
	/** The payload for the updatePost mutation */
	updatePost: Maybe<UpdatePostPayload>;
	/** The payload for the updateSettings mutation */
	updateSettings: Maybe<UpdateSettingsPayload>;
	/** The payload for the updateTestimonial mutation */
	updateTestimonial: Maybe<UpdateTestimonialPayload>;
	/** The payload for the updateUser mutation */
	updateUser: Maybe<UpdateUserPayload>;
};

/** The root mutation */
export type RootMutationUpdateCategoryArgs = {
	input: UpdateCategoryInput;
};

/** The root mutation */
export type RootMutationUpdatePostFormatArgs = {
	input: UpdatePostFormatInput;
};

/** The root mutation */
export type RootMutationUpdateTagArgs = {
	input: UpdateTagInput;
};

/** The root mutation */
export type RootMutationCreateAboutArgs = {
	input: CreateAboutInput;
};

/** The root mutation */
export type RootMutationCreateCategoryArgs = {
	input: CreateCategoryInput;
};

/** The root mutation */
export type RootMutationCreateCommentArgs = {
	input: CreateCommentInput;
};

/** The root mutation */
export type RootMutationCreateConsultantArgs = {
	input: CreateConsultantInput;
};

/** The root mutation */
export type RootMutationCreateMediaItemArgs = {
	input: CreateMediaItemInput;
};

/** The root mutation */
export type RootMutationCreatePageArgs = {
	input: CreatePageInput;
};

/** The root mutation */
export type RootMutationCreatePositionArgs = {
	input: CreatePositionInput;
};

/** The root mutation */
export type RootMutationCreatePostArgs = {
	input: CreatePostInput;
};

/** The root mutation */
export type RootMutationCreatePostFormatArgs = {
	input: CreatePostFormatInput;
};

/** The root mutation */
export type RootMutationCreateTagArgs = {
	input: CreateTagInput;
};

/** The root mutation */
export type RootMutationCreateTestimonialArgs = {
	input: CreateTestimonialInput;
};

/** The root mutation */
export type RootMutationCreateUserArgs = {
	input: CreateUserInput;
};

/** The root mutation */
export type RootMutationDeleteAboutArgs = {
	input: DeleteAboutInput;
};

/** The root mutation */
export type RootMutationDeleteCategoryArgs = {
	input: DeleteCategoryInput;
};

/** The root mutation */
export type RootMutationDeleteCommentArgs = {
	input: DeleteCommentInput;
};

/** The root mutation */
export type RootMutationDeleteConsultantArgs = {
	input: DeleteConsultantInput;
};

/** The root mutation */
export type RootMutationDeleteMediaItemArgs = {
	input: DeleteMediaItemInput;
};

/** The root mutation */
export type RootMutationDeletePageArgs = {
	input: DeletePageInput;
};

/** The root mutation */
export type RootMutationDeletePositionArgs = {
	input: DeletePositionInput;
};

/** The root mutation */
export type RootMutationDeletePostArgs = {
	input: DeletePostInput;
};

/** The root mutation */
export type RootMutationDeletePostFormatArgs = {
	input: DeletePostFormatInput;
};

/** The root mutation */
export type RootMutationDeleteTagArgs = {
	input: DeleteTagInput;
};

/** The root mutation */
export type RootMutationDeleteTestimonialArgs = {
	input: DeleteTestimonialInput;
};

/** The root mutation */
export type RootMutationDeleteUserArgs = {
	input: DeleteUserInput;
};

/** The root mutation */
export type RootMutationIncreaseCountArgs = {
	count: Maybe<Scalars['Int']>;
};

/** The root mutation */
export type RootMutationLoginArgs = {
	input: LoginInput;
};

/** The root mutation */
export type RootMutationRefreshJwtAuthTokenArgs = {
	input: RefreshJwtAuthTokenInput;
};

/** The root mutation */
export type RootMutationRegisterUserArgs = {
	input: RegisterUserInput;
};

/** The root mutation */
export type RootMutationResetUserPasswordArgs = {
	input: ResetUserPasswordInput;
};

/** The root mutation */
export type RootMutationRestoreCommentArgs = {
	input: RestoreCommentInput;
};

/** The root mutation */
export type RootMutationSendPasswordResetEmailArgs = {
	input: SendPasswordResetEmailInput;
};

/** The root mutation */
export type RootMutationUpdateAboutArgs = {
	input: UpdateAboutInput;
};

/** The root mutation */
export type RootMutationUpdateCommentArgs = {
	input: UpdateCommentInput;
};

/** The root mutation */
export type RootMutationUpdateConsultantArgs = {
	input: UpdateConsultantInput;
};

/** The root mutation */
export type RootMutationUpdateMediaItemArgs = {
	input: UpdateMediaItemInput;
};

/** The root mutation */
export type RootMutationUpdatePageArgs = {
	input: UpdatePageInput;
};

/** The root mutation */
export type RootMutationUpdatePositionArgs = {
	input: UpdatePositionInput;
};

/** The root mutation */
export type RootMutationUpdatePostArgs = {
	input: UpdatePostInput;
};

/** The root mutation */
export type RootMutationUpdateSettingsArgs = {
	input: UpdateSettingsInput;
};

/** The root mutation */
export type RootMutationUpdateTestimonialArgs = {
	input: UpdateTestimonialInput;
};

/** The root mutation */
export type RootMutationUpdateUserArgs = {
	input: UpdateUserInput;
};

/** Input for the UpdateCategory mutation */
export type UpdateCategoryInput = {
	/** The slug that the category will be an alias of */
	aliasOf: Maybe<Scalars['String']>;
	clientMutationId: Maybe<Scalars['String']>;
	/** The description of the category object */
	description: Maybe<Scalars['String']>;
	/** The ID of the category object to update */
	id: Scalars['ID'];
	/** The name of the category object to mutate */
	name: Maybe<Scalars['String']>;
	/** The ID of the category that should be set as the parent */
	parentId: Maybe<Scalars['ID']>;
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug: Maybe<Scalars['String']>;
};

/** The payload for the UpdateCategory mutation */
export type UpdateCategoryPayload = {
	__typename?: 'UpdateCategoryPayload';
	/** The created category */
	category: Maybe<Category>;
	clientMutationId: Maybe<Scalars['String']>;
};

/** Input for the UpdatePostFormat mutation */
export type UpdatePostFormatInput = {
	/** The slug that the post_format will be an alias of */
	aliasOf: Maybe<Scalars['String']>;
	clientMutationId: Maybe<Scalars['String']>;
	/** The description of the post_format object */
	description: Maybe<Scalars['String']>;
	/** The ID of the postFormat object to update */
	id: Scalars['ID'];
	/** The name of the post_format object to mutate */
	name: Maybe<Scalars['String']>;
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug: Maybe<Scalars['String']>;
};

/** The payload for the UpdatePostFormat mutation */
export type UpdatePostFormatPayload = {
	__typename?: 'UpdatePostFormatPayload';
	clientMutationId: Maybe<Scalars['String']>;
	/** The created post_format */
	postFormat: Maybe<PostFormat>;
};

/** Input for the UpdateTag mutation */
export type UpdateTagInput = {
	/** The slug that the post_tag will be an alias of */
	aliasOf: Maybe<Scalars['String']>;
	clientMutationId: Maybe<Scalars['String']>;
	/** The description of the post_tag object */
	description: Maybe<Scalars['String']>;
	/** The ID of the tag object to update */
	id: Scalars['ID'];
	/** The name of the post_tag object to mutate */
	name: Maybe<Scalars['String']>;
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug: Maybe<Scalars['String']>;
};

/** The payload for the UpdateTag mutation */
export type UpdateTagPayload = {
	__typename?: 'UpdateTagPayload';
	clientMutationId: Maybe<Scalars['String']>;
	/** The created post_tag */
	tag: Maybe<Tag>;
};

/** Input for the createAbout mutation */
export type CreateAboutInput = {
	/** The userId to assign as the author of the object */
	authorId: Maybe<Scalars['ID']>;
	/** Set connections between the about and categories */
	categories: Maybe<AboutCategoriesInput>;
	clientMutationId: Maybe<Scalars['String']>;
	/** The comment status for the object */
	commentStatus: Maybe<Scalars['String']>;
	/** The content of the object */
	content: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date: Maybe<Scalars['String']>;
	/** The excerpt of the object */
	excerpt: Maybe<Scalars['String']>;
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder: Maybe<Scalars['Int']>;
	/** The password used to protect the content of the object */
	password: Maybe<Scalars['String']>;
	/** The ping status for the object */
	pingStatus: Maybe<Scalars['String']>;
	/** URLs that have been pinged. */
	pinged: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Set connections between the about and postFormats */
	postFormats: Maybe<AboutPostFormatsInput>;
	/** The slug of the object */
	slug: Maybe<Scalars['String']>;
	/** The status of the object */
	status: Maybe<PostStatusEnum>;
	/** The title of the object */
	title: Maybe<Scalars['String']>;
	/** URLs queued to be pinged. */
	toPing: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Set relationships between the about to categories */
export type AboutCategoriesInput = {
	/** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
	append: Maybe<Scalars['Boolean']>;
	nodes: Maybe<Array<Maybe<AboutCategoriesNodeInput>>>;
};

/** List of categories to connect the about to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type AboutCategoriesNodeInput = {
	/** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
	description: Maybe<Scalars['String']>;
	/** The ID of the category. If present, this will be used to connect to the about. If no existing category exists with this ID, no connection will be made. */
	id: Maybe<Scalars['ID']>;
	/** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
	name: Maybe<Scalars['String']>;
	/** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
	slug: Maybe<Scalars['String']>;
};

/** Set relationships between the about to postFormats */
export type AboutPostFormatsInput = {
	/** If true, this will append the postFormat to existing related postFormats. If false, this will replace existing relationships. Default true. */
	append: Maybe<Scalars['Boolean']>;
	nodes: Maybe<Array<Maybe<AboutPostFormatsNodeInput>>>;
};

/** List of postFormats to connect the about to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type AboutPostFormatsNodeInput = {
	/** The description of the postFormat. This field is used to set a description of the postFormat if a new one is created during the mutation. */
	description: Maybe<Scalars['String']>;
	/** The ID of the postFormat. If present, this will be used to connect to the about. If no existing postFormat exists with this ID, no connection will be made. */
	id: Maybe<Scalars['ID']>;
	/** The name of the postFormat. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
	name: Maybe<Scalars['String']>;
	/** The slug of the postFormat. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
	slug: Maybe<Scalars['String']>;
};

/** The payload for the createAbout mutation */
export type CreateAboutPayload = {
	__typename?: 'CreateAboutPayload';
	about: Maybe<About>;
	clientMutationId: Maybe<Scalars['String']>;
};

/** Input for the createCategory mutation */
export type CreateCategoryInput = {
	/** The slug that the category will be an alias of */
	aliasOf: Maybe<Scalars['String']>;
	clientMutationId: Maybe<Scalars['String']>;
	/** The description of the category object */
	description: Maybe<Scalars['String']>;
	/** The name of the category object to mutate */
	name: Scalars['String'];
	/** The ID of the category that should be set as the parent */
	parentId: Maybe<Scalars['ID']>;
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug: Maybe<Scalars['String']>;
};

/** The payload for the createCategory mutation */
export type CreateCategoryPayload = {
	__typename?: 'CreateCategoryPayload';
	/** The created category */
	category: Maybe<Category>;
	clientMutationId: Maybe<Scalars['String']>;
};

/** Input for the createComment mutation */
export type CreateCommentInput = {
	/** The approval status of the comment. */
	approved: Maybe<Scalars['String']>;
	/** The name of the comment's author. */
	author: Maybe<Scalars['String']>;
	/** The email of the comment's author. */
	authorEmail: Maybe<Scalars['String']>;
	/** The url of the comment's author. */
	authorUrl: Maybe<Scalars['String']>;
	clientMutationId: Maybe<Scalars['String']>;
	/** The ID of the post object the comment belongs to. */
	commentOn: Maybe<Scalars['Int']>;
	/** Content of the comment. */
	content: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date: Maybe<Scalars['String']>;
	/** Parent comment of current comment. */
	parent: Maybe<Scalars['ID']>;
	/** Type of comment. */
	type: Maybe<Scalars['String']>;
};

/** The payload for the createComment mutation */
export type CreateCommentPayload = {
	__typename?: 'CreateCommentPayload';
	clientMutationId: Maybe<Scalars['String']>;
	/** The comment that was created */
	comment: Maybe<Comment>;
	/** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
	success: Maybe<Scalars['Boolean']>;
};

/** Input for the createConsultant mutation */
export type CreateConsultantInput = {
	/** The userId to assign as the author of the object */
	authorId: Maybe<Scalars['ID']>;
	/** Set connections between the consultant and categories */
	categories: Maybe<ConsultantCategoriesInput>;
	clientMutationId: Maybe<Scalars['String']>;
	/** The comment status for the object */
	commentStatus: Maybe<Scalars['String']>;
	/** The content of the object */
	content: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date: Maybe<Scalars['String']>;
	/** The excerpt of the object */
	excerpt: Maybe<Scalars['String']>;
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder: Maybe<Scalars['Int']>;
	/** The password used to protect the content of the object */
	password: Maybe<Scalars['String']>;
	/** The ping status for the object */
	pingStatus: Maybe<Scalars['String']>;
	/** URLs that have been pinged. */
	pinged: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Set connections between the consultant and postFormats */
	postFormats: Maybe<ConsultantPostFormatsInput>;
	/** The slug of the object */
	slug: Maybe<Scalars['String']>;
	/** The status of the object */
	status: Maybe<PostStatusEnum>;
	/** The title of the object */
	title: Maybe<Scalars['String']>;
	/** URLs queued to be pinged. */
	toPing: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Set relationships between the consultant to categories */
export type ConsultantCategoriesInput = {
	/** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
	append: Maybe<Scalars['Boolean']>;
	nodes: Maybe<Array<Maybe<ConsultantCategoriesNodeInput>>>;
};

/** List of categories to connect the consultant to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type ConsultantCategoriesNodeInput = {
	/** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
	description: Maybe<Scalars['String']>;
	/** The ID of the category. If present, this will be used to connect to the consultant. If no existing category exists with this ID, no connection will be made. */
	id: Maybe<Scalars['ID']>;
	/** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
	name: Maybe<Scalars['String']>;
	/** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
	slug: Maybe<Scalars['String']>;
};

/** Set relationships between the consultant to postFormats */
export type ConsultantPostFormatsInput = {
	/** If true, this will append the postFormat to existing related postFormats. If false, this will replace existing relationships. Default true. */
	append: Maybe<Scalars['Boolean']>;
	nodes: Maybe<Array<Maybe<ConsultantPostFormatsNodeInput>>>;
};

/** List of postFormats to connect the consultant to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type ConsultantPostFormatsNodeInput = {
	/** The description of the postFormat. This field is used to set a description of the postFormat if a new one is created during the mutation. */
	description: Maybe<Scalars['String']>;
	/** The ID of the postFormat. If present, this will be used to connect to the consultant. If no existing postFormat exists with this ID, no connection will be made. */
	id: Maybe<Scalars['ID']>;
	/** The name of the postFormat. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
	name: Maybe<Scalars['String']>;
	/** The slug of the postFormat. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
	slug: Maybe<Scalars['String']>;
};

/** The payload for the createConsultant mutation */
export type CreateConsultantPayload = {
	__typename?: 'CreateConsultantPayload';
	clientMutationId: Maybe<Scalars['String']>;
	consultant: Maybe<Consultant>;
};

/** Input for the createMediaItem mutation */
export type CreateMediaItemInput = {
	/** Alternative text to display when mediaItem is not displayed */
	altText: Maybe<Scalars['String']>;
	/** The userId to assign as the author of the mediaItem */
	authorId: Maybe<Scalars['ID']>;
	/** The caption for the mediaItem */
	caption: Maybe<Scalars['String']>;
	clientMutationId: Maybe<Scalars['String']>;
	/** The comment status for the mediaItem */
	commentStatus: Maybe<Scalars['String']>;
	/** The date of the mediaItem */
	date: Maybe<Scalars['String']>;
	/** The date (in GMT zone) of the mediaItem */
	dateGmt: Maybe<Scalars['String']>;
	/** Description of the mediaItem */
	description: Maybe<Scalars['String']>;
	/** The file name of the mediaItem */
	filePath: Maybe<Scalars['String']>;
	/** The file type of the mediaItem */
	fileType: Maybe<MimeTypeEnum>;
	/** The WordPress post ID or the graphQL postId of the parent object */
	parentId: Maybe<Scalars['ID']>;
	/** The ping status for the mediaItem */
	pingStatus: Maybe<Scalars['String']>;
	/** The slug of the mediaItem */
	slug: Maybe<Scalars['String']>;
	/** The status of the mediaItem */
	status: Maybe<MediaItemStatusEnum>;
	/** The title of the mediaItem */
	title: Maybe<Scalars['String']>;
};

/** The status of the media item object. */
export enum MediaItemStatusEnum {
	/** Objects with the auto-draft status */
	AutoDraft = 'AUTO_DRAFT',
	/** Objects with the inherit status */
	Inherit = 'INHERIT',
	/** Objects with the private status */
	Private = 'PRIVATE',
	/** Objects with the trash status */
	Trash = 'TRASH'
}

/** The payload for the createMediaItem mutation */
export type CreateMediaItemPayload = {
	__typename?: 'CreateMediaItemPayload';
	clientMutationId: Maybe<Scalars['String']>;
	mediaItem: Maybe<MediaItem>;
};

/** Input for the createPage mutation */
export type CreatePageInput = {
	/** The userId to assign as the author of the object */
	authorId: Maybe<Scalars['ID']>;
	clientMutationId: Maybe<Scalars['String']>;
	/** The comment status for the object */
	commentStatus: Maybe<Scalars['String']>;
	/** The content of the object */
	content: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date: Maybe<Scalars['String']>;
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder: Maybe<Scalars['Int']>;
	/** The ID of the parent object */
	parentId: Maybe<Scalars['ID']>;
	/** The password used to protect the content of the object */
	password: Maybe<Scalars['String']>;
	/** The slug of the object */
	slug: Maybe<Scalars['String']>;
	/** The status of the object */
	status: Maybe<PostStatusEnum>;
	/** The title of the object */
	title: Maybe<Scalars['String']>;
};

/** The payload for the createPage mutation */
export type CreatePagePayload = {
	__typename?: 'CreatePagePayload';
	clientMutationId: Maybe<Scalars['String']>;
	page: Maybe<Page>;
};

/** Input for the createPosition mutation */
export type CreatePositionInput = {
	/** The userId to assign as the author of the object */
	authorId: Maybe<Scalars['ID']>;
	/** Set connections between the position and categories */
	categories: Maybe<PositionCategoriesInput>;
	clientMutationId: Maybe<Scalars['String']>;
	/** The comment status for the object */
	commentStatus: Maybe<Scalars['String']>;
	/** The content of the object */
	content: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date: Maybe<Scalars['String']>;
	/** The excerpt of the object */
	excerpt: Maybe<Scalars['String']>;
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder: Maybe<Scalars['Int']>;
	/** The password used to protect the content of the object */
	password: Maybe<Scalars['String']>;
	/** The ping status for the object */
	pingStatus: Maybe<Scalars['String']>;
	/** URLs that have been pinged. */
	pinged: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Set connections between the position and postFormats */
	postFormats: Maybe<PositionPostFormatsInput>;
	/** The slug of the object */
	slug: Maybe<Scalars['String']>;
	/** The status of the object */
	status: Maybe<PostStatusEnum>;
	/** The title of the object */
	title: Maybe<Scalars['String']>;
	/** URLs queued to be pinged. */
	toPing: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Set relationships between the position to categories */
export type PositionCategoriesInput = {
	/** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
	append: Maybe<Scalars['Boolean']>;
	nodes: Maybe<Array<Maybe<PositionCategoriesNodeInput>>>;
};

/** List of categories to connect the position to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PositionCategoriesNodeInput = {
	/** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
	description: Maybe<Scalars['String']>;
	/** The ID of the category. If present, this will be used to connect to the position. If no existing category exists with this ID, no connection will be made. */
	id: Maybe<Scalars['ID']>;
	/** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
	name: Maybe<Scalars['String']>;
	/** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
	slug: Maybe<Scalars['String']>;
};

/** Set relationships between the position to postFormats */
export type PositionPostFormatsInput = {
	/** If true, this will append the postFormat to existing related postFormats. If false, this will replace existing relationships. Default true. */
	append: Maybe<Scalars['Boolean']>;
	nodes: Maybe<Array<Maybe<PositionPostFormatsNodeInput>>>;
};

/** List of postFormats to connect the position to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PositionPostFormatsNodeInput = {
	/** The description of the postFormat. This field is used to set a description of the postFormat if a new one is created during the mutation. */
	description: Maybe<Scalars['String']>;
	/** The ID of the postFormat. If present, this will be used to connect to the position. If no existing postFormat exists with this ID, no connection will be made. */
	id: Maybe<Scalars['ID']>;
	/** The name of the postFormat. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
	name: Maybe<Scalars['String']>;
	/** The slug of the postFormat. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
	slug: Maybe<Scalars['String']>;
};

/** The payload for the createPosition mutation */
export type CreatePositionPayload = {
	__typename?: 'CreatePositionPayload';
	clientMutationId: Maybe<Scalars['String']>;
	position: Maybe<Position>;
};

/** Input for the createPost mutation */
export type CreatePostInput = {
	/** The userId to assign as the author of the object */
	authorId: Maybe<Scalars['ID']>;
	/** Set connections between the post and categories */
	categories: Maybe<PostCategoriesInput>;
	clientMutationId: Maybe<Scalars['String']>;
	/** The comment status for the object */
	commentStatus: Maybe<Scalars['String']>;
	/** The content of the object */
	content: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date: Maybe<Scalars['String']>;
	/** The excerpt of the object */
	excerpt: Maybe<Scalars['String']>;
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder: Maybe<Scalars['Int']>;
	/** The password used to protect the content of the object */
	password: Maybe<Scalars['String']>;
	/** The ping status for the object */
	pingStatus: Maybe<Scalars['String']>;
	/** URLs that have been pinged. */
	pinged: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Set connections between the post and postFormats */
	postFormats: Maybe<PostPostFormatsInput>;
	/** The slug of the object */
	slug: Maybe<Scalars['String']>;
	/** The status of the object */
	status: Maybe<PostStatusEnum>;
	/** Set connections between the post and tags */
	tags: Maybe<PostTagsInput>;
	/** The title of the object */
	title: Maybe<Scalars['String']>;
	/** URLs queued to be pinged. */
	toPing: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Set relationships between the post to categories */
export type PostCategoriesInput = {
	/** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
	append: Maybe<Scalars['Boolean']>;
	nodes: Maybe<Array<Maybe<PostCategoriesNodeInput>>>;
};

/** List of categories to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostCategoriesNodeInput = {
	/** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
	description: Maybe<Scalars['String']>;
	/** The ID of the category. If present, this will be used to connect to the post. If no existing category exists with this ID, no connection will be made. */
	id: Maybe<Scalars['ID']>;
	/** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
	name: Maybe<Scalars['String']>;
	/** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
	slug: Maybe<Scalars['String']>;
};

/** Set relationships between the post to postFormats */
export type PostPostFormatsInput = {
	/** If true, this will append the postFormat to existing related postFormats. If false, this will replace existing relationships. Default true. */
	append: Maybe<Scalars['Boolean']>;
	nodes: Maybe<Array<Maybe<PostPostFormatsNodeInput>>>;
};

/** List of postFormats to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostPostFormatsNodeInput = {
	/** The description of the postFormat. This field is used to set a description of the postFormat if a new one is created during the mutation. */
	description: Maybe<Scalars['String']>;
	/** The ID of the postFormat. If present, this will be used to connect to the post. If no existing postFormat exists with this ID, no connection will be made. */
	id: Maybe<Scalars['ID']>;
	/** The name of the postFormat. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
	name: Maybe<Scalars['String']>;
	/** The slug of the postFormat. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
	slug: Maybe<Scalars['String']>;
};

/** Set relationships between the post to tags */
export type PostTagsInput = {
	/** If true, this will append the tag to existing related tags. If false, this will replace existing relationships. Default true. */
	append: Maybe<Scalars['Boolean']>;
	nodes: Maybe<Array<Maybe<PostTagsNodeInput>>>;
};

/** List of tags to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostTagsNodeInput = {
	/** The description of the tag. This field is used to set a description of the tag if a new one is created during the mutation. */
	description: Maybe<Scalars['String']>;
	/** The ID of the tag. If present, this will be used to connect to the post. If no existing tag exists with this ID, no connection will be made. */
	id: Maybe<Scalars['ID']>;
	/** The name of the tag. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
	name: Maybe<Scalars['String']>;
	/** The slug of the tag. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
	slug: Maybe<Scalars['String']>;
};

/** The payload for the createPost mutation */
export type CreatePostPayload = {
	__typename?: 'CreatePostPayload';
	clientMutationId: Maybe<Scalars['String']>;
	post: Maybe<Post>;
};

/** Input for the createPostFormat mutation */
export type CreatePostFormatInput = {
	/** The slug that the post_format will be an alias of */
	aliasOf: Maybe<Scalars['String']>;
	clientMutationId: Maybe<Scalars['String']>;
	/** The description of the post_format object */
	description: Maybe<Scalars['String']>;
	/** The name of the post_format object to mutate */
	name: Scalars['String'];
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug: Maybe<Scalars['String']>;
};

/** The payload for the createPostFormat mutation */
export type CreatePostFormatPayload = {
	__typename?: 'CreatePostFormatPayload';
	clientMutationId: Maybe<Scalars['String']>;
	/** The created post_format */
	postFormat: Maybe<PostFormat>;
};

/** Input for the createTag mutation */
export type CreateTagInput = {
	/** The slug that the post_tag will be an alias of */
	aliasOf: Maybe<Scalars['String']>;
	clientMutationId: Maybe<Scalars['String']>;
	/** The description of the post_tag object */
	description: Maybe<Scalars['String']>;
	/** The name of the post_tag object to mutate */
	name: Scalars['String'];
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug: Maybe<Scalars['String']>;
};

/** The payload for the createTag mutation */
export type CreateTagPayload = {
	__typename?: 'CreateTagPayload';
	clientMutationId: Maybe<Scalars['String']>;
	/** The created post_tag */
	tag: Maybe<Tag>;
};

/** Input for the createTestimonial mutation */
export type CreateTestimonialInput = {
	/** The userId to assign as the author of the object */
	authorId: Maybe<Scalars['ID']>;
	/** Set connections between the testimonial and categories */
	categories: Maybe<TestimonialCategoriesInput>;
	clientMutationId: Maybe<Scalars['String']>;
	/** The comment status for the object */
	commentStatus: Maybe<Scalars['String']>;
	/** The content of the object */
	content: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date: Maybe<Scalars['String']>;
	/** The excerpt of the object */
	excerpt: Maybe<Scalars['String']>;
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder: Maybe<Scalars['Int']>;
	/** The password used to protect the content of the object */
	password: Maybe<Scalars['String']>;
	/** The ping status for the object */
	pingStatus: Maybe<Scalars['String']>;
	/** URLs that have been pinged. */
	pinged: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Set connections between the testimonial and postFormats */
	postFormats: Maybe<TestimonialPostFormatsInput>;
	/** The slug of the object */
	slug: Maybe<Scalars['String']>;
	/** The status of the object */
	status: Maybe<PostStatusEnum>;
	/** The title of the object */
	title: Maybe<Scalars['String']>;
	/** URLs queued to be pinged. */
	toPing: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Set relationships between the testimonial to categories */
export type TestimonialCategoriesInput = {
	/** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
	append: Maybe<Scalars['Boolean']>;
	nodes: Maybe<Array<Maybe<TestimonialCategoriesNodeInput>>>;
};

/** List of categories to connect the testimonial to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type TestimonialCategoriesNodeInput = {
	/** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
	description: Maybe<Scalars['String']>;
	/** The ID of the category. If present, this will be used to connect to the testimonial. If no existing category exists with this ID, no connection will be made. */
	id: Maybe<Scalars['ID']>;
	/** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
	name: Maybe<Scalars['String']>;
	/** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
	slug: Maybe<Scalars['String']>;
};

/** Set relationships between the testimonial to postFormats */
export type TestimonialPostFormatsInput = {
	/** If true, this will append the postFormat to existing related postFormats. If false, this will replace existing relationships. Default true. */
	append: Maybe<Scalars['Boolean']>;
	nodes: Maybe<Array<Maybe<TestimonialPostFormatsNodeInput>>>;
};

/** List of postFormats to connect the testimonial to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type TestimonialPostFormatsNodeInput = {
	/** The description of the postFormat. This field is used to set a description of the postFormat if a new one is created during the mutation. */
	description: Maybe<Scalars['String']>;
	/** The ID of the postFormat. If present, this will be used to connect to the testimonial. If no existing postFormat exists with this ID, no connection will be made. */
	id: Maybe<Scalars['ID']>;
	/** The name of the postFormat. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
	name: Maybe<Scalars['String']>;
	/** The slug of the postFormat. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
	slug: Maybe<Scalars['String']>;
};

/** The payload for the createTestimonial mutation */
export type CreateTestimonialPayload = {
	__typename?: 'CreateTestimonialPayload';
	clientMutationId: Maybe<Scalars['String']>;
	testimonial: Maybe<Testimonial>;
};

/** Input for the createUser mutation */
export type CreateUserInput = {
	/** User's AOL IM account. */
	aim: Maybe<Scalars['String']>;
	clientMutationId: Maybe<Scalars['String']>;
	/** A string containing content about the user. */
	description: Maybe<Scalars['String']>;
	/** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
	displayName: Maybe<Scalars['String']>;
	/** A string containing the user's email address. */
	email: Maybe<Scalars['String']>;
	/** 	The user's first name. */
	firstName: Maybe<Scalars['String']>;
	/** User's Jabber account. */
	jabber: Maybe<Scalars['String']>;
	/** The user's last name. */
	lastName: Maybe<Scalars['String']>;
	/** User's locale. */
	locale: Maybe<Scalars['String']>;
	/** A string that contains a URL-friendly name for the user. The default is the user's username. */
	nicename: Maybe<Scalars['String']>;
	/** The user's nickname, defaults to the user's username. */
	nickname: Maybe<Scalars['String']>;
	/** A string that contains the plain text password for the user. */
	password: Maybe<Scalars['String']>;
	/** If true, this will refresh the users JWT secret. */
	refreshJwtUserSecret: Maybe<Scalars['Boolean']>;
	/** The date the user registered. Format is Y-m-d H:i:s. */
	registered: Maybe<Scalars['String']>;
	/** If true, this will revoke the users JWT secret. If false, this will unrevoke the JWT secret AND issue a new one. To revoke, the user must have proper capabilities to edit users JWT secrets. */
	revokeJwtUserSecret: Maybe<Scalars['Boolean']>;
	/** A string for whether to enable the rich editor or not. False if not empty. */
	richEditing: Maybe<Scalars['String']>;
	/** An array of roles to be assigned to the user. */
	roles: Maybe<Array<Maybe<Scalars['String']>>>;
	/** A string that contains the user's username for logging in. */
	username: Scalars['String'];
	/** A string containing the user's URL for the user's web site. */
	websiteUrl: Maybe<Scalars['String']>;
	/** User's Yahoo IM account. */
	yim: Maybe<Scalars['String']>;
};

/** The payload for the createUser mutation */
export type CreateUserPayload = {
	__typename?: 'CreateUserPayload';
	clientMutationId: Maybe<Scalars['String']>;
	user: Maybe<User>;
};

/** Input for the deleteAbout mutation */
export type DeleteAboutInput = {
	clientMutationId: Maybe<Scalars['String']>;
	/** Whether the object should be force deleted instead of being moved to the trash */
	forceDelete: Maybe<Scalars['Boolean']>;
	/** The ID of the about to delete */
	id: Scalars['ID'];
};

/** The payload for the deleteAbout mutation */
export type DeleteAboutPayload = {
	__typename?: 'DeleteAboutPayload';
	/** The object before it was deleted */
	about: Maybe<About>;
	clientMutationId: Maybe<Scalars['String']>;
	/** The ID of the deleted object */
	deletedId: Maybe<Scalars['ID']>;
};

/** Input for the deleteCategory mutation */
export type DeleteCategoryInput = {
	clientMutationId: Maybe<Scalars['String']>;
	/** The ID of the category to delete */
	id: Scalars['ID'];
};

/** The payload for the deleteCategory mutation */
export type DeleteCategoryPayload = {
	__typename?: 'DeleteCategoryPayload';
	/** The deteted term object */
	category: Maybe<Category>;
	clientMutationId: Maybe<Scalars['String']>;
	/** The ID of the deleted object */
	deletedId: Maybe<Scalars['ID']>;
};

/** Input for the deleteComment mutation */
export type DeleteCommentInput = {
	clientMutationId: Maybe<Scalars['String']>;
	/** Whether the comment should be force deleted instead of being moved to the trash */
	forceDelete: Maybe<Scalars['Boolean']>;
	/** The deleted comment ID */
	id: Scalars['ID'];
};

/** The payload for the deleteComment mutation */
export type DeleteCommentPayload = {
	__typename?: 'DeleteCommentPayload';
	clientMutationId: Maybe<Scalars['String']>;
	/** The deleted comment object */
	comment: Maybe<Comment>;
	/** The deleted comment ID */
	deletedId: Maybe<Scalars['ID']>;
};

/** Input for the deleteConsultant mutation */
export type DeleteConsultantInput = {
	clientMutationId: Maybe<Scalars['String']>;
	/** Whether the object should be force deleted instead of being moved to the trash */
	forceDelete: Maybe<Scalars['Boolean']>;
	/** The ID of the consultant to delete */
	id: Scalars['ID'];
};

/** The payload for the deleteConsultant mutation */
export type DeleteConsultantPayload = {
	__typename?: 'DeleteConsultantPayload';
	clientMutationId: Maybe<Scalars['String']>;
	/** The object before it was deleted */
	consultant: Maybe<Consultant>;
	/** The ID of the deleted object */
	deletedId: Maybe<Scalars['ID']>;
};

/** Input for the deleteMediaItem mutation */
export type DeleteMediaItemInput = {
	clientMutationId: Maybe<Scalars['String']>;
	/** Whether the mediaItem should be force deleted instead of being moved to the trash */
	forceDelete: Maybe<Scalars['Boolean']>;
	/** The ID of the mediaItem to delete */
	id: Scalars['ID'];
};

/** The payload for the deleteMediaItem mutation */
export type DeleteMediaItemPayload = {
	__typename?: 'DeleteMediaItemPayload';
	clientMutationId: Maybe<Scalars['String']>;
	/** The ID of the deleted mediaItem */
	deletedId: Maybe<Scalars['ID']>;
	/** The mediaItem before it was deleted */
	mediaItem: Maybe<MediaItem>;
};

/** Input for the deletePage mutation */
export type DeletePageInput = {
	clientMutationId: Maybe<Scalars['String']>;
	/** Whether the object should be force deleted instead of being moved to the trash */
	forceDelete: Maybe<Scalars['Boolean']>;
	/** The ID of the page to delete */
	id: Scalars['ID'];
};

/** The payload for the deletePage mutation */
export type DeletePagePayload = {
	__typename?: 'DeletePagePayload';
	clientMutationId: Maybe<Scalars['String']>;
	/** The ID of the deleted object */
	deletedId: Maybe<Scalars['ID']>;
	/** The object before it was deleted */
	page: Maybe<Page>;
};

/** Input for the deletePosition mutation */
export type DeletePositionInput = {
	clientMutationId: Maybe<Scalars['String']>;
	/** Whether the object should be force deleted instead of being moved to the trash */
	forceDelete: Maybe<Scalars['Boolean']>;
	/** The ID of the position to delete */
	id: Scalars['ID'];
};

/** The payload for the deletePosition mutation */
export type DeletePositionPayload = {
	__typename?: 'DeletePositionPayload';
	clientMutationId: Maybe<Scalars['String']>;
	/** The ID of the deleted object */
	deletedId: Maybe<Scalars['ID']>;
	/** The object before it was deleted */
	position: Maybe<Position>;
};

/** Input for the deletePost mutation */
export type DeletePostInput = {
	clientMutationId: Maybe<Scalars['String']>;
	/** Whether the object should be force deleted instead of being moved to the trash */
	forceDelete: Maybe<Scalars['Boolean']>;
	/** The ID of the post to delete */
	id: Scalars['ID'];
};

/** The payload for the deletePost mutation */
export type DeletePostPayload = {
	__typename?: 'DeletePostPayload';
	clientMutationId: Maybe<Scalars['String']>;
	/** The ID of the deleted object */
	deletedId: Maybe<Scalars['ID']>;
	/** The object before it was deleted */
	post: Maybe<Post>;
};

/** Input for the deletePostFormat mutation */
export type DeletePostFormatInput = {
	clientMutationId: Maybe<Scalars['String']>;
	/** The ID of the postFormat to delete */
	id: Scalars['ID'];
};

/** The payload for the deletePostFormat mutation */
export type DeletePostFormatPayload = {
	__typename?: 'DeletePostFormatPayload';
	clientMutationId: Maybe<Scalars['String']>;
	/** The ID of the deleted object */
	deletedId: Maybe<Scalars['ID']>;
	/** The deteted term object */
	postFormat: Maybe<PostFormat>;
};

/** Input for the deleteTag mutation */
export type DeleteTagInput = {
	clientMutationId: Maybe<Scalars['String']>;
	/** The ID of the tag to delete */
	id: Scalars['ID'];
};

/** The payload for the deleteTag mutation */
export type DeleteTagPayload = {
	__typename?: 'DeleteTagPayload';
	clientMutationId: Maybe<Scalars['String']>;
	/** The ID of the deleted object */
	deletedId: Maybe<Scalars['ID']>;
	/** The deteted term object */
	tag: Maybe<Tag>;
};

/** Input for the deleteTestimonial mutation */
export type DeleteTestimonialInput = {
	clientMutationId: Maybe<Scalars['String']>;
	/** Whether the object should be force deleted instead of being moved to the trash */
	forceDelete: Maybe<Scalars['Boolean']>;
	/** The ID of the testimonial to delete */
	id: Scalars['ID'];
};

/** The payload for the deleteTestimonial mutation */
export type DeleteTestimonialPayload = {
	__typename?: 'DeleteTestimonialPayload';
	clientMutationId: Maybe<Scalars['String']>;
	/** The ID of the deleted object */
	deletedId: Maybe<Scalars['ID']>;
	/** The object before it was deleted */
	testimonial: Maybe<Testimonial>;
};

/** Input for the deleteUser mutation */
export type DeleteUserInput = {
	clientMutationId: Maybe<Scalars['String']>;
	/** The ID of the user you want to delete */
	id: Scalars['ID'];
	/** Reassign posts and links to new User ID. */
	reassignId: Maybe<Scalars['ID']>;
};

/** The payload for the deleteUser mutation */
export type DeleteUserPayload = {
	__typename?: 'DeleteUserPayload';
	clientMutationId: Maybe<Scalars['String']>;
	/** The ID of the user that you just deleted */
	deletedId: Maybe<Scalars['ID']>;
	/** The deleted user object */
	user: Maybe<User>;
};

/** Input for the login mutation */
export type LoginInput = {
	clientMutationId: Maybe<Scalars['String']>;
	/** The plain-text password for the user logging in. */
	password: Scalars['String'];
	/** The username used for login. Typically a unique or email address depending on specific configuration */
	username: Scalars['String'];
};

/** The payload for the login mutation */
export type LoginPayload = {
	__typename?: 'LoginPayload';
	/** JWT Token that can be used in future requests for Authentication */
	authToken: Maybe<Scalars['String']>;
	clientMutationId: Maybe<Scalars['String']>;
	/** A JWT token that can be used in future requests to get a refreshed jwtAuthToken. If the refresh token used in a request is revoked or otherwise invalid, a valid Auth token will NOT be issued in the response headers. */
	refreshToken: Maybe<Scalars['String']>;
	/** The user that was logged in */
	user: Maybe<User>;
};

/** Input for the refreshJwtAuthToken mutation */
export type RefreshJwtAuthTokenInput = {
	clientMutationId: Maybe<Scalars['String']>;
	/** A valid, previously issued JWT refresh token. If valid a new Auth token will be provided. If invalid, expired, revoked or otherwise invalid, a new AuthToken will not be provided. */
	jwtRefreshToken: Scalars['String'];
};

/** The payload for the refreshJwtAuthToken mutation */
export type RefreshJwtAuthTokenPayload = {
	__typename?: 'RefreshJwtAuthTokenPayload';
	/** JWT Token that can be used in future requests for Authentication */
	authToken: Maybe<Scalars['String']>;
	clientMutationId: Maybe<Scalars['String']>;
};

/** Input for the registerUser mutation */
export type RegisterUserInput = {
	/** User's AOL IM account. */
	aim: Maybe<Scalars['String']>;
	clientMutationId: Maybe<Scalars['String']>;
	/** A string containing content about the user. */
	description: Maybe<Scalars['String']>;
	/** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
	displayName: Maybe<Scalars['String']>;
	/** A string containing the user's email address. */
	email: Maybe<Scalars['String']>;
	/** 	The user's first name. */
	firstName: Maybe<Scalars['String']>;
	/** User's Jabber account. */
	jabber: Maybe<Scalars['String']>;
	/** The user's last name. */
	lastName: Maybe<Scalars['String']>;
	/** User's locale. */
	locale: Maybe<Scalars['String']>;
	/** A string that contains a URL-friendly name for the user. The default is the user's username. */
	nicename: Maybe<Scalars['String']>;
	/** The user's nickname, defaults to the user's username. */
	nickname: Maybe<Scalars['String']>;
	/** A string that contains the plain text password for the user. */
	password: Maybe<Scalars['String']>;
	/** If true, this will refresh the users JWT secret. */
	refreshJwtUserSecret: Maybe<Scalars['Boolean']>;
	/** The date the user registered. Format is Y-m-d H:i:s. */
	registered: Maybe<Scalars['String']>;
	/** If true, this will revoke the users JWT secret. If false, this will unrevoke the JWT secret AND issue a new one. To revoke, the user must have proper capabilities to edit users JWT secrets. */
	revokeJwtUserSecret: Maybe<Scalars['Boolean']>;
	/** A string for whether to enable the rich editor or not. False if not empty. */
	richEditing: Maybe<Scalars['String']>;
	/** A string that contains the user's username. */
	username: Scalars['String'];
	/** A string containing the user's URL for the user's web site. */
	websiteUrl: Maybe<Scalars['String']>;
	/** User's Yahoo IM account. */
	yim: Maybe<Scalars['String']>;
};

/** The payload for the registerUser mutation */
export type RegisterUserPayload = {
	__typename?: 'RegisterUserPayload';
	clientMutationId: Maybe<Scalars['String']>;
	user: Maybe<User>;
};

/** Input for the resetUserPassword mutation */
export type ResetUserPasswordInput = {
	clientMutationId: Maybe<Scalars['String']>;
	/** Password reset key */
	key: Maybe<Scalars['String']>;
	/** The user's login (username). */
	login: Maybe<Scalars['String']>;
	/** The new password. */
	password: Maybe<Scalars['String']>;
};

/** The payload for the resetUserPassword mutation */
export type ResetUserPasswordPayload = {
	__typename?: 'ResetUserPasswordPayload';
	clientMutationId: Maybe<Scalars['String']>;
	user: Maybe<User>;
};

/** Input for the restoreComment mutation */
export type RestoreCommentInput = {
	clientMutationId: Maybe<Scalars['String']>;
	/** The ID of the comment to be restored */
	id: Scalars['ID'];
};

/** The payload for the restoreComment mutation */
export type RestoreCommentPayload = {
	__typename?: 'RestoreCommentPayload';
	clientMutationId: Maybe<Scalars['String']>;
	/** The restored comment object */
	comment: Maybe<Comment>;
	/** The ID of the restored comment */
	restoredId: Maybe<Scalars['ID']>;
};

/** Input for the sendPasswordResetEmail mutation */
export type SendPasswordResetEmailInput = {
	clientMutationId: Maybe<Scalars['String']>;
	/** A string that contains the user's username or email address. */
	username: Scalars['String'];
};

/** The payload for the sendPasswordResetEmail mutation */
export type SendPasswordResetEmailPayload = {
	__typename?: 'SendPasswordResetEmailPayload';
	clientMutationId: Maybe<Scalars['String']>;
	/** The user that the password reset email was sent to */
	user: Maybe<User>;
};

/** Input for the updateAbout mutation */
export type UpdateAboutInput = {
	/** The userId to assign as the author of the object */
	authorId: Maybe<Scalars['ID']>;
	/** Set connections between the about and categories */
	categories: Maybe<AboutCategoriesInput>;
	clientMutationId: Maybe<Scalars['String']>;
	/** The comment status for the object */
	commentStatus: Maybe<Scalars['String']>;
	/** The content of the object */
	content: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date: Maybe<Scalars['String']>;
	/** The excerpt of the object */
	excerpt: Maybe<Scalars['String']>;
	/** The ID of the about object */
	id: Scalars['ID'];
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder: Maybe<Scalars['Int']>;
	/** The password used to protect the content of the object */
	password: Maybe<Scalars['String']>;
	/** The ping status for the object */
	pingStatus: Maybe<Scalars['String']>;
	/** URLs that have been pinged. */
	pinged: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Set connections between the about and postFormats */
	postFormats: Maybe<AboutPostFormatsInput>;
	/** The slug of the object */
	slug: Maybe<Scalars['String']>;
	/** The status of the object */
	status: Maybe<PostStatusEnum>;
	/** The title of the object */
	title: Maybe<Scalars['String']>;
	/** URLs queued to be pinged. */
	toPing: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** The payload for the updateAbout mutation */
export type UpdateAboutPayload = {
	__typename?: 'UpdateAboutPayload';
	about: Maybe<About>;
	clientMutationId: Maybe<Scalars['String']>;
};

/** Input for the updateComment mutation */
export type UpdateCommentInput = {
	/** The approval status of the comment. */
	approved: Maybe<Scalars['String']>;
	/** The name of the comment's author. */
	author: Maybe<Scalars['String']>;
	/** The email of the comment's author. */
	authorEmail: Maybe<Scalars['String']>;
	/** The url of the comment's author. */
	authorUrl: Maybe<Scalars['String']>;
	clientMutationId: Maybe<Scalars['String']>;
	/** The ID of the post object the comment belongs to. */
	commentOn: Maybe<Scalars['Int']>;
	/** Content of the comment. */
	content: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date: Maybe<Scalars['String']>;
	/** The ID of the comment being updated. */
	id: Scalars['ID'];
	/** Parent comment of current comment. */
	parent: Maybe<Scalars['ID']>;
	/** Type of comment. */
	type: Maybe<Scalars['String']>;
};

/** The payload for the updateComment mutation */
export type UpdateCommentPayload = {
	__typename?: 'UpdateCommentPayload';
	clientMutationId: Maybe<Scalars['String']>;
	/** The comment that was created */
	comment: Maybe<Comment>;
	/** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
	success: Maybe<Scalars['Boolean']>;
};

/** Input for the updateConsultant mutation */
export type UpdateConsultantInput = {
	/** The userId to assign as the author of the object */
	authorId: Maybe<Scalars['ID']>;
	/** Set connections between the consultant and categories */
	categories: Maybe<ConsultantCategoriesInput>;
	clientMutationId: Maybe<Scalars['String']>;
	/** The comment status for the object */
	commentStatus: Maybe<Scalars['String']>;
	/** The content of the object */
	content: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date: Maybe<Scalars['String']>;
	/** The excerpt of the object */
	excerpt: Maybe<Scalars['String']>;
	/** The ID of the consultant object */
	id: Scalars['ID'];
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder: Maybe<Scalars['Int']>;
	/** The password used to protect the content of the object */
	password: Maybe<Scalars['String']>;
	/** The ping status for the object */
	pingStatus: Maybe<Scalars['String']>;
	/** URLs that have been pinged. */
	pinged: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Set connections between the consultant and postFormats */
	postFormats: Maybe<ConsultantPostFormatsInput>;
	/** The slug of the object */
	slug: Maybe<Scalars['String']>;
	/** The status of the object */
	status: Maybe<PostStatusEnum>;
	/** The title of the object */
	title: Maybe<Scalars['String']>;
	/** URLs queued to be pinged. */
	toPing: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** The payload for the updateConsultant mutation */
export type UpdateConsultantPayload = {
	__typename?: 'UpdateConsultantPayload';
	clientMutationId: Maybe<Scalars['String']>;
	consultant: Maybe<Consultant>;
};

/** Input for the updateMediaItem mutation */
export type UpdateMediaItemInput = {
	/** Alternative text to display when mediaItem is not displayed */
	altText: Maybe<Scalars['String']>;
	/** The userId to assign as the author of the mediaItem */
	authorId: Maybe<Scalars['ID']>;
	/** The caption for the mediaItem */
	caption: Maybe<Scalars['String']>;
	clientMutationId: Maybe<Scalars['String']>;
	/** The comment status for the mediaItem */
	commentStatus: Maybe<Scalars['String']>;
	/** The date of the mediaItem */
	date: Maybe<Scalars['String']>;
	/** The date (in GMT zone) of the mediaItem */
	dateGmt: Maybe<Scalars['String']>;
	/** Description of the mediaItem */
	description: Maybe<Scalars['String']>;
	/** The file name of the mediaItem */
	filePath: Maybe<Scalars['String']>;
	/** The file type of the mediaItem */
	fileType: Maybe<MimeTypeEnum>;
	/** The ID of the mediaItem object */
	id: Scalars['ID'];
	/** The WordPress post ID or the graphQL postId of the parent object */
	parentId: Maybe<Scalars['ID']>;
	/** The ping status for the mediaItem */
	pingStatus: Maybe<Scalars['String']>;
	/** The slug of the mediaItem */
	slug: Maybe<Scalars['String']>;
	/** The status of the mediaItem */
	status: Maybe<MediaItemStatusEnum>;
	/** The title of the mediaItem */
	title: Maybe<Scalars['String']>;
};

/** The payload for the updateMediaItem mutation */
export type UpdateMediaItemPayload = {
	__typename?: 'UpdateMediaItemPayload';
	clientMutationId: Maybe<Scalars['String']>;
	mediaItem: Maybe<MediaItem>;
};

/** Input for the updatePage mutation */
export type UpdatePageInput = {
	/** The userId to assign as the author of the object */
	authorId: Maybe<Scalars['ID']>;
	clientMutationId: Maybe<Scalars['String']>;
	/** The comment status for the object */
	commentStatus: Maybe<Scalars['String']>;
	/** The content of the object */
	content: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date: Maybe<Scalars['String']>;
	/** The ID of the page object */
	id: Scalars['ID'];
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder: Maybe<Scalars['Int']>;
	/** The ID of the parent object */
	parentId: Maybe<Scalars['ID']>;
	/** The password used to protect the content of the object */
	password: Maybe<Scalars['String']>;
	/** The slug of the object */
	slug: Maybe<Scalars['String']>;
	/** The status of the object */
	status: Maybe<PostStatusEnum>;
	/** The title of the object */
	title: Maybe<Scalars['String']>;
};

/** The payload for the updatePage mutation */
export type UpdatePagePayload = {
	__typename?: 'UpdatePagePayload';
	clientMutationId: Maybe<Scalars['String']>;
	page: Maybe<Page>;
};

/** Input for the updatePosition mutation */
export type UpdatePositionInput = {
	/** The userId to assign as the author of the object */
	authorId: Maybe<Scalars['ID']>;
	/** Set connections between the position and categories */
	categories: Maybe<PositionCategoriesInput>;
	clientMutationId: Maybe<Scalars['String']>;
	/** The comment status for the object */
	commentStatus: Maybe<Scalars['String']>;
	/** The content of the object */
	content: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date: Maybe<Scalars['String']>;
	/** The excerpt of the object */
	excerpt: Maybe<Scalars['String']>;
	/** The ID of the position object */
	id: Scalars['ID'];
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder: Maybe<Scalars['Int']>;
	/** The password used to protect the content of the object */
	password: Maybe<Scalars['String']>;
	/** The ping status for the object */
	pingStatus: Maybe<Scalars['String']>;
	/** URLs that have been pinged. */
	pinged: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Set connections between the position and postFormats */
	postFormats: Maybe<PositionPostFormatsInput>;
	/** The slug of the object */
	slug: Maybe<Scalars['String']>;
	/** The status of the object */
	status: Maybe<PostStatusEnum>;
	/** The title of the object */
	title: Maybe<Scalars['String']>;
	/** URLs queued to be pinged. */
	toPing: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** The payload for the updatePosition mutation */
export type UpdatePositionPayload = {
	__typename?: 'UpdatePositionPayload';
	clientMutationId: Maybe<Scalars['String']>;
	position: Maybe<Position>;
};

/** Input for the updatePost mutation */
export type UpdatePostInput = {
	/** The userId to assign as the author of the object */
	authorId: Maybe<Scalars['ID']>;
	/** Set connections between the post and categories */
	categories: Maybe<PostCategoriesInput>;
	clientMutationId: Maybe<Scalars['String']>;
	/** The comment status for the object */
	commentStatus: Maybe<Scalars['String']>;
	/** The content of the object */
	content: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date: Maybe<Scalars['String']>;
	/** The excerpt of the object */
	excerpt: Maybe<Scalars['String']>;
	/** The ID of the post object */
	id: Scalars['ID'];
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder: Maybe<Scalars['Int']>;
	/** The password used to protect the content of the object */
	password: Maybe<Scalars['String']>;
	/** The ping status for the object */
	pingStatus: Maybe<Scalars['String']>;
	/** URLs that have been pinged. */
	pinged: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Set connections between the post and postFormats */
	postFormats: Maybe<PostPostFormatsInput>;
	/** The slug of the object */
	slug: Maybe<Scalars['String']>;
	/** The status of the object */
	status: Maybe<PostStatusEnum>;
	/** Set connections between the post and tags */
	tags: Maybe<PostTagsInput>;
	/** The title of the object */
	title: Maybe<Scalars['String']>;
	/** URLs queued to be pinged. */
	toPing: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** The payload for the updatePost mutation */
export type UpdatePostPayload = {
	__typename?: 'UpdatePostPayload';
	clientMutationId: Maybe<Scalars['String']>;
	post: Maybe<Post>;
};

/** Input for the updateSettings mutation */
export type UpdateSettingsInput = {
	clientMutationId: Maybe<Scalars['String']>;
	/** Allow people to submit comments on new posts. */
	discussionSettingsDefaultCommentStatus: Maybe<Scalars['String']>;
	/** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
	discussionSettingsDefaultPingStatus: Maybe<Scalars['String']>;
	/** A date format for all date strings. */
	generalSettingsDateFormat: Maybe<Scalars['String']>;
	/** Site tagline. */
	generalSettingsDescription: Maybe<Scalars['String']>;
	/** This address is used for admin purposes, like new user notification. */
	generalSettingsEmail: Maybe<Scalars['String']>;
	/** WordPress locale code. */
	generalSettingsLanguage: Maybe<Scalars['String']>;
	/** A day number of the week that the week should start on. */
	generalSettingsStartOfWeek: Maybe<Scalars['Int']>;
	/** A time format for all time strings. */
	generalSettingsTimeFormat: Maybe<Scalars['String']>;
	/** A city in the same timezone as you. */
	generalSettingsTimezone: Maybe<Scalars['String']>;
	/** Site title. */
	generalSettingsTitle: Maybe<Scalars['String']>;
	/** Site URL. */
	generalSettingsUrl: Maybe<Scalars['String']>;
	/** Blog pages show at most. */
	readingSettingsPostsPerPage: Maybe<Scalars['Int']>;
	/** Default post category. */
	writingSettingsDefaultCategory: Maybe<Scalars['Int']>;
	/** Default post format. */
	writingSettingsDefaultPostFormat: Maybe<Scalars['String']>;
	/** Convert emoticons like :-) and :-P to graphics on display. */
	writingSettingsUseSmilies: Maybe<Scalars['Boolean']>;
};

/** The payload for the updateSettings mutation */
export type UpdateSettingsPayload = {
	__typename?: 'UpdateSettingsPayload';
	allSettings: Maybe<Settings>;
	clientMutationId: Maybe<Scalars['String']>;
	discussionSettings: Maybe<DiscussionSettings>;
	generalSettings: Maybe<GeneralSettings>;
	readingSettings: Maybe<ReadingSettings>;
	writingSettings: Maybe<WritingSettings>;
};

/** Input for the updateTestimonial mutation */
export type UpdateTestimonialInput = {
	/** The userId to assign as the author of the object */
	authorId: Maybe<Scalars['ID']>;
	/** Set connections between the testimonial and categories */
	categories: Maybe<TestimonialCategoriesInput>;
	clientMutationId: Maybe<Scalars['String']>;
	/** The comment status for the object */
	commentStatus: Maybe<Scalars['String']>;
	/** The content of the object */
	content: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date: Maybe<Scalars['String']>;
	/** The excerpt of the object */
	excerpt: Maybe<Scalars['String']>;
	/** The ID of the testimonial object */
	id: Scalars['ID'];
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder: Maybe<Scalars['Int']>;
	/** The password used to protect the content of the object */
	password: Maybe<Scalars['String']>;
	/** The ping status for the object */
	pingStatus: Maybe<Scalars['String']>;
	/** URLs that have been pinged. */
	pinged: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Set connections between the testimonial and postFormats */
	postFormats: Maybe<TestimonialPostFormatsInput>;
	/** The slug of the object */
	slug: Maybe<Scalars['String']>;
	/** The status of the object */
	status: Maybe<PostStatusEnum>;
	/** The title of the object */
	title: Maybe<Scalars['String']>;
	/** URLs queued to be pinged. */
	toPing: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** The payload for the updateTestimonial mutation */
export type UpdateTestimonialPayload = {
	__typename?: 'UpdateTestimonialPayload';
	clientMutationId: Maybe<Scalars['String']>;
	testimonial: Maybe<Testimonial>;
};

/** Input for the updateUser mutation */
export type UpdateUserInput = {
	/** User's AOL IM account. */
	aim: Maybe<Scalars['String']>;
	clientMutationId: Maybe<Scalars['String']>;
	/** A string containing content about the user. */
	description: Maybe<Scalars['String']>;
	/** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
	displayName: Maybe<Scalars['String']>;
	/** A string containing the user's email address. */
	email: Maybe<Scalars['String']>;
	/** 	The user's first name. */
	firstName: Maybe<Scalars['String']>;
	/** The ID of the user */
	id: Scalars['ID'];
	/** User's Jabber account. */
	jabber: Maybe<Scalars['String']>;
	/** The user's last name. */
	lastName: Maybe<Scalars['String']>;
	/** User's locale. */
	locale: Maybe<Scalars['String']>;
	/** A string that contains a URL-friendly name for the user. The default is the user's username. */
	nicename: Maybe<Scalars['String']>;
	/** The user's nickname, defaults to the user's username. */
	nickname: Maybe<Scalars['String']>;
	/** A string that contains the plain text password for the user. */
	password: Maybe<Scalars['String']>;
	/** If true, this will refresh the users JWT secret. */
	refreshJwtUserSecret: Maybe<Scalars['Boolean']>;
	/** The date the user registered. Format is Y-m-d H:i:s. */
	registered: Maybe<Scalars['String']>;
	/** If true, this will revoke the users JWT secret. If false, this will unrevoke the JWT secret AND issue a new one. To revoke, the user must have proper capabilities to edit users JWT secrets. */
	revokeJwtUserSecret: Maybe<Scalars['Boolean']>;
	/** A string for whether to enable the rich editor or not. False if not empty. */
	richEditing: Maybe<Scalars['String']>;
	/** An array of roles to be assigned to the user. */
	roles: Maybe<Array<Maybe<Scalars['String']>>>;
	/** A string containing the user's URL for the user's web site. */
	websiteUrl: Maybe<Scalars['String']>;
	/** User's Yahoo IM account. */
	yim: Maybe<Scalars['String']>;
};

/** The payload for the updateUser mutation */
export type UpdateUserPayload = {
	__typename?: 'UpdateUserPayload';
	clientMutationId: Maybe<Scalars['String']>;
	user: Maybe<User>;
};

/** A Comment Author object */
export type CommentAuthor = Node &
	Commenter & {
		__typename?: 'CommentAuthor';
		/** Identifies the primary key from the database. */
		databaseId: Scalars['Int'];
		/** The email for the comment author */
		email: Maybe<Scalars['String']>;
		/** The globally unique identifier for the comment author object */
		id: Scalars['ID'];
		/** Whether the object is restricted from the current viewer */
		isRestricted: Maybe<Scalars['Boolean']>;
		/** The name for the comment author. */
		name: Maybe<Scalars['String']>;
		/** The url the comment author. */
		url: Maybe<Scalars['String']>;
	};

/** Available timezones */
export enum TimezoneEnum {
	/** Abidjan */
	AfricaAbidjan = 'AFRICA_ABIDJAN',
	/** Accra */
	AfricaAccra = 'AFRICA_ACCRA',
	/** Addis Ababa */
	AfricaAddisAbaba = 'AFRICA_ADDIS_ABABA',
	/** Algiers */
	AfricaAlgiers = 'AFRICA_ALGIERS',
	/** Asmara */
	AfricaAsmara = 'AFRICA_ASMARA',
	/** Bamako */
	AfricaBamako = 'AFRICA_BAMAKO',
	/** Bangui */
	AfricaBangui = 'AFRICA_BANGUI',
	/** Banjul */
	AfricaBanjul = 'AFRICA_BANJUL',
	/** Bissau */
	AfricaBissau = 'AFRICA_BISSAU',
	/** Blantyre */
	AfricaBlantyre = 'AFRICA_BLANTYRE',
	/** Brazzaville */
	AfricaBrazzaville = 'AFRICA_BRAZZAVILLE',
	/** Bujumbura */
	AfricaBujumbura = 'AFRICA_BUJUMBURA',
	/** Cairo */
	AfricaCairo = 'AFRICA_CAIRO',
	/** Casablanca */
	AfricaCasablanca = 'AFRICA_CASABLANCA',
	/** Ceuta */
	AfricaCeuta = 'AFRICA_CEUTA',
	/** Conakry */
	AfricaConakry = 'AFRICA_CONAKRY',
	/** Dakar */
	AfricaDakar = 'AFRICA_DAKAR',
	/** Dar es Salaam */
	AfricaDarEsSalaam = 'AFRICA_DAR_ES_SALAAM',
	/** Djibouti */
	AfricaDjibouti = 'AFRICA_DJIBOUTI',
	/** Douala */
	AfricaDouala = 'AFRICA_DOUALA',
	/** El Aaiun */
	AfricaElAaiun = 'AFRICA_EL_AAIUN',
	/** Freetown */
	AfricaFreetown = 'AFRICA_FREETOWN',
	/** Gaborone */
	AfricaGaborone = 'AFRICA_GABORONE',
	/** Harare */
	AfricaHarare = 'AFRICA_HARARE',
	/** Johannesburg */
	AfricaJohannesburg = 'AFRICA_JOHANNESBURG',
	/** Juba */
	AfricaJuba = 'AFRICA_JUBA',
	/** Kampala */
	AfricaKampala = 'AFRICA_KAMPALA',
	/** Khartoum */
	AfricaKhartoum = 'AFRICA_KHARTOUM',
	/** Kigali */
	AfricaKigali = 'AFRICA_KIGALI',
	/** Kinshasa */
	AfricaKinshasa = 'AFRICA_KINSHASA',
	/** Lagos */
	AfricaLagos = 'AFRICA_LAGOS',
	/** Libreville */
	AfricaLibreville = 'AFRICA_LIBREVILLE',
	/** Lome */
	AfricaLome = 'AFRICA_LOME',
	/** Luanda */
	AfricaLuanda = 'AFRICA_LUANDA',
	/** Lubumbashi */
	AfricaLubumbashi = 'AFRICA_LUBUMBASHI',
	/** Lusaka */
	AfricaLusaka = 'AFRICA_LUSAKA',
	/** Malabo */
	AfricaMalabo = 'AFRICA_MALABO',
	/** Maputo */
	AfricaMaputo = 'AFRICA_MAPUTO',
	/** Maseru */
	AfricaMaseru = 'AFRICA_MASERU',
	/** Mbabane */
	AfricaMbabane = 'AFRICA_MBABANE',
	/** Mogadishu */
	AfricaMogadishu = 'AFRICA_MOGADISHU',
	/** Monrovia */
	AfricaMonrovia = 'AFRICA_MONROVIA',
	/** Nairobi */
	AfricaNairobi = 'AFRICA_NAIROBI',
	/** Ndjamena */
	AfricaNdjamena = 'AFRICA_NDJAMENA',
	/** Niamey */
	AfricaNiamey = 'AFRICA_NIAMEY',
	/** Nouakchott */
	AfricaNouakchott = 'AFRICA_NOUAKCHOTT',
	/** Ouagadougou */
	AfricaOuagadougou = 'AFRICA_OUAGADOUGOU',
	/** Porto-Novo */
	AfricaPortoNovo = 'AFRICA_PORTO_NOVO',
	/** Sao Tome */
	AfricaSaoTome = 'AFRICA_SAO_TOME',
	/** Tripoli */
	AfricaTripoli = 'AFRICA_TRIPOLI',
	/** Tunis */
	AfricaTunis = 'AFRICA_TUNIS',
	/** Windhoek */
	AfricaWindhoek = 'AFRICA_WINDHOEK',
	/** Adak */
	AmericaAdak = 'AMERICA_ADAK',
	/** Anchorage */
	AmericaAnchorage = 'AMERICA_ANCHORAGE',
	/** Anguilla */
	AmericaAnguilla = 'AMERICA_ANGUILLA',
	/** Antigua */
	AmericaAntigua = 'AMERICA_ANTIGUA',
	/** Araguaina */
	AmericaAraguaina = 'AMERICA_ARAGUAINA',
	/** Argentina - Buenos Aires */
	AmericaArgentinaBuenosAires = 'AMERICA_ARGENTINA_BUENOS_AIRES',
	/** Argentina - Catamarca */
	AmericaArgentinaCatamarca = 'AMERICA_ARGENTINA_CATAMARCA',
	/** Argentina - Cordoba */
	AmericaArgentinaCordoba = 'AMERICA_ARGENTINA_CORDOBA',
	/** Argentina - Jujuy */
	AmericaArgentinaJujuy = 'AMERICA_ARGENTINA_JUJUY',
	/** Argentina - La Rioja */
	AmericaArgentinaLaRioja = 'AMERICA_ARGENTINA_LA_RIOJA',
	/** Argentina - Mendoza */
	AmericaArgentinaMendoza = 'AMERICA_ARGENTINA_MENDOZA',
	/** Argentina - Rio Gallegos */
	AmericaArgentinaRioGallegos = 'AMERICA_ARGENTINA_RIO_GALLEGOS',
	/** Argentina - Salta */
	AmericaArgentinaSalta = 'AMERICA_ARGENTINA_SALTA',
	/** Argentina - San Juan */
	AmericaArgentinaSanJuan = 'AMERICA_ARGENTINA_SAN_JUAN',
	/** Argentina - San Luis */
	AmericaArgentinaSanLuis = 'AMERICA_ARGENTINA_SAN_LUIS',
	/** Argentina - Tucuman */
	AmericaArgentinaTucuman = 'AMERICA_ARGENTINA_TUCUMAN',
	/** Argentina - Ushuaia */
	AmericaArgentinaUshuaia = 'AMERICA_ARGENTINA_USHUAIA',
	/** Aruba */
	AmericaAruba = 'AMERICA_ARUBA',
	/** Asuncion */
	AmericaAsuncion = 'AMERICA_ASUNCION',
	/** Atikokan */
	AmericaAtikokan = 'AMERICA_ATIKOKAN',
	/** Bahia */
	AmericaBahia = 'AMERICA_BAHIA',
	/** Bahia Banderas */
	AmericaBahiaBanderas = 'AMERICA_BAHIA_BANDERAS',
	/** Barbados */
	AmericaBarbados = 'AMERICA_BARBADOS',
	/** Belem */
	AmericaBelem = 'AMERICA_BELEM',
	/** Belize */
	AmericaBelize = 'AMERICA_BELIZE',
	/** Blanc-Sablon */
	AmericaBlancSablon = 'AMERICA_BLANC_SABLON',
	/** Boa Vista */
	AmericaBoaVista = 'AMERICA_BOA_VISTA',
	/** Bogota */
	AmericaBogota = 'AMERICA_BOGOTA',
	/** Boise */
	AmericaBoise = 'AMERICA_BOISE',
	/** Cambridge Bay */
	AmericaCambridgeBay = 'AMERICA_CAMBRIDGE_BAY',
	/** Campo Grande */
	AmericaCampoGrande = 'AMERICA_CAMPO_GRANDE',
	/** Cancun */
	AmericaCancun = 'AMERICA_CANCUN',
	/** Caracas */
	AmericaCaracas = 'AMERICA_CARACAS',
	/** Cayenne */
	AmericaCayenne = 'AMERICA_CAYENNE',
	/** Cayman */
	AmericaCayman = 'AMERICA_CAYMAN',
	/** Chicago */
	AmericaChicago = 'AMERICA_CHICAGO',
	/** Chihuahua */
	AmericaChihuahua = 'AMERICA_CHIHUAHUA',
	/** Costa Rica */
	AmericaCostaRica = 'AMERICA_COSTA_RICA',
	/** Creston */
	AmericaCreston = 'AMERICA_CRESTON',
	/** Cuiaba */
	AmericaCuiaba = 'AMERICA_CUIABA',
	/** Curacao */
	AmericaCuracao = 'AMERICA_CURACAO',
	/** Danmarkshavn */
	AmericaDanmarkshavn = 'AMERICA_DANMARKSHAVN',
	/** Dawson */
	AmericaDawson = 'AMERICA_DAWSON',
	/** Dawson Creek */
	AmericaDawsonCreek = 'AMERICA_DAWSON_CREEK',
	/** Denver */
	AmericaDenver = 'AMERICA_DENVER',
	/** Detroit */
	AmericaDetroit = 'AMERICA_DETROIT',
	/** Dominica */
	AmericaDominica = 'AMERICA_DOMINICA',
	/** Edmonton */
	AmericaEdmonton = 'AMERICA_EDMONTON',
	/** Eirunepe */
	AmericaEirunepe = 'AMERICA_EIRUNEPE',
	/** El Salvador */
	AmericaElSalvador = 'AMERICA_EL_SALVADOR',
	/** Fortaleza */
	AmericaFortaleza = 'AMERICA_FORTALEZA',
	/** Fort Nelson */
	AmericaFortNelson = 'AMERICA_FORT_NELSON',
	/** Glace Bay */
	AmericaGlaceBay = 'AMERICA_GLACE_BAY',
	/** Goose Bay */
	AmericaGooseBay = 'AMERICA_GOOSE_BAY',
	/** Grand Turk */
	AmericaGrandTurk = 'AMERICA_GRAND_TURK',
	/** Grenada */
	AmericaGrenada = 'AMERICA_GRENADA',
	/** Guadeloupe */
	AmericaGuadeloupe = 'AMERICA_GUADELOUPE',
	/** Guatemala */
	AmericaGuatemala = 'AMERICA_GUATEMALA',
	/** Guayaquil */
	AmericaGuayaquil = 'AMERICA_GUAYAQUIL',
	/** Guyana */
	AmericaGuyana = 'AMERICA_GUYANA',
	/** Halifax */
	AmericaHalifax = 'AMERICA_HALIFAX',
	/** Havana */
	AmericaHavana = 'AMERICA_HAVANA',
	/** Hermosillo */
	AmericaHermosillo = 'AMERICA_HERMOSILLO',
	/** Indiana - Indianapolis */
	AmericaIndianaIndianapolis = 'AMERICA_INDIANA_INDIANAPOLIS',
	/** Indiana - Knox */
	AmericaIndianaKnox = 'AMERICA_INDIANA_KNOX',
	/** Indiana - Marengo */
	AmericaIndianaMarengo = 'AMERICA_INDIANA_MARENGO',
	/** Indiana - Petersburg */
	AmericaIndianaPetersburg = 'AMERICA_INDIANA_PETERSBURG',
	/** Indiana - Tell City */
	AmericaIndianaTellCity = 'AMERICA_INDIANA_TELL_CITY',
	/** Indiana - Vevay */
	AmericaIndianaVevay = 'AMERICA_INDIANA_VEVAY',
	/** Indiana - Vincennes */
	AmericaIndianaVincennes = 'AMERICA_INDIANA_VINCENNES',
	/** Indiana - Winamac */
	AmericaIndianaWinamac = 'AMERICA_INDIANA_WINAMAC',
	/** Inuvik */
	AmericaInuvik = 'AMERICA_INUVIK',
	/** Iqaluit */
	AmericaIqaluit = 'AMERICA_IQALUIT',
	/** Jamaica */
	AmericaJamaica = 'AMERICA_JAMAICA',
	/** Juneau */
	AmericaJuneau = 'AMERICA_JUNEAU',
	/** Kentucky - Louisville */
	AmericaKentuckyLouisville = 'AMERICA_KENTUCKY_LOUISVILLE',
	/** Kentucky - Monticello */
	AmericaKentuckyMonticello = 'AMERICA_KENTUCKY_MONTICELLO',
	/** Kralendijk */
	AmericaKralendijk = 'AMERICA_KRALENDIJK',
	/** La Paz */
	AmericaLaPaz = 'AMERICA_LA_PAZ',
	/** Lima */
	AmericaLima = 'AMERICA_LIMA',
	/** Los Angeles */
	AmericaLosAngeles = 'AMERICA_LOS_ANGELES',
	/** Lower Princes */
	AmericaLowerPrinces = 'AMERICA_LOWER_PRINCES',
	/** Maceio */
	AmericaMaceio = 'AMERICA_MACEIO',
	/** Managua */
	AmericaManagua = 'AMERICA_MANAGUA',
	/** Manaus */
	AmericaManaus = 'AMERICA_MANAUS',
	/** Marigot */
	AmericaMarigot = 'AMERICA_MARIGOT',
	/** Martinique */
	AmericaMartinique = 'AMERICA_MARTINIQUE',
	/** Matamoros */
	AmericaMatamoros = 'AMERICA_MATAMOROS',
	/** Mazatlan */
	AmericaMazatlan = 'AMERICA_MAZATLAN',
	/** Menominee */
	AmericaMenominee = 'AMERICA_MENOMINEE',
	/** Merida */
	AmericaMerida = 'AMERICA_MERIDA',
	/** Metlakatla */
	AmericaMetlakatla = 'AMERICA_METLAKATLA',
	/** Mexico City */
	AmericaMexicoCity = 'AMERICA_MEXICO_CITY',
	/** Miquelon */
	AmericaMiquelon = 'AMERICA_MIQUELON',
	/** Moncton */
	AmericaMoncton = 'AMERICA_MONCTON',
	/** Monterrey */
	AmericaMonterrey = 'AMERICA_MONTERREY',
	/** Montevideo */
	AmericaMontevideo = 'AMERICA_MONTEVIDEO',
	/** Montserrat */
	AmericaMontserrat = 'AMERICA_MONTSERRAT',
	/** Nassau */
	AmericaNassau = 'AMERICA_NASSAU',
	/** New York */
	AmericaNewYork = 'AMERICA_NEW_YORK',
	/** Nipigon */
	AmericaNipigon = 'AMERICA_NIPIGON',
	/** Nome */
	AmericaNome = 'AMERICA_NOME',
	/** Noronha */
	AmericaNoronha = 'AMERICA_NORONHA',
	/** North Dakota - Beulah */
	AmericaNorthDakotaBeulah = 'AMERICA_NORTH_DAKOTA_BEULAH',
	/** North Dakota - Center */
	AmericaNorthDakotaCenter = 'AMERICA_NORTH_DAKOTA_CENTER',
	/** North Dakota - New Salem */
	AmericaNorthDakotaNewSalem = 'AMERICA_NORTH_DAKOTA_NEW_SALEM',
	/** Nuuk */
	AmericaNuuk = 'AMERICA_NUUK',
	/** Ojinaga */
	AmericaOjinaga = 'AMERICA_OJINAGA',
	/** Panama */
	AmericaPanama = 'AMERICA_PANAMA',
	/** Pangnirtung */
	AmericaPangnirtung = 'AMERICA_PANGNIRTUNG',
	/** Paramaribo */
	AmericaParamaribo = 'AMERICA_PARAMARIBO',
	/** Phoenix */
	AmericaPhoenix = 'AMERICA_PHOENIX',
	/** Porto Velho */
	AmericaPortoVelho = 'AMERICA_PORTO_VELHO',
	/** Port-au-Prince */
	AmericaPortAuPrince = 'AMERICA_PORT_AU_PRINCE',
	/** Port of Spain */
	AmericaPortOfSpain = 'AMERICA_PORT_OF_SPAIN',
	/** Puerto Rico */
	AmericaPuertoRico = 'AMERICA_PUERTO_RICO',
	/** Punta Arenas */
	AmericaPuntaArenas = 'AMERICA_PUNTA_ARENAS',
	/** Rainy River */
	AmericaRainyRiver = 'AMERICA_RAINY_RIVER',
	/** Rankin Inlet */
	AmericaRankinInlet = 'AMERICA_RANKIN_INLET',
	/** Recife */
	AmericaRecife = 'AMERICA_RECIFE',
	/** Regina */
	AmericaRegina = 'AMERICA_REGINA',
	/** Resolute */
	AmericaResolute = 'AMERICA_RESOLUTE',
	/** Rio Branco */
	AmericaRioBranco = 'AMERICA_RIO_BRANCO',
	/** Santarem */
	AmericaSantarem = 'AMERICA_SANTAREM',
	/** Santiago */
	AmericaSantiago = 'AMERICA_SANTIAGO',
	/** Santo Domingo */
	AmericaSantoDomingo = 'AMERICA_SANTO_DOMINGO',
	/** Sao Paulo */
	AmericaSaoPaulo = 'AMERICA_SAO_PAULO',
	/** Scoresbysund */
	AmericaScoresbysund = 'AMERICA_SCORESBYSUND',
	/** Sitka */
	AmericaSitka = 'AMERICA_SITKA',
	/** St Barthelemy */
	AmericaStBarthelemy = 'AMERICA_ST_BARTHELEMY',
	/** St Johns */
	AmericaStJohns = 'AMERICA_ST_JOHNS',
	/** St Kitts */
	AmericaStKitts = 'AMERICA_ST_KITTS',
	/** St Lucia */
	AmericaStLucia = 'AMERICA_ST_LUCIA',
	/** St Thomas */
	AmericaStThomas = 'AMERICA_ST_THOMAS',
	/** St Vincent */
	AmericaStVincent = 'AMERICA_ST_VINCENT',
	/** Swift Current */
	AmericaSwiftCurrent = 'AMERICA_SWIFT_CURRENT',
	/** Tegucigalpa */
	AmericaTegucigalpa = 'AMERICA_TEGUCIGALPA',
	/** Thule */
	AmericaThule = 'AMERICA_THULE',
	/** Thunder Bay */
	AmericaThunderBay = 'AMERICA_THUNDER_BAY',
	/** Tijuana */
	AmericaTijuana = 'AMERICA_TIJUANA',
	/** Toronto */
	AmericaToronto = 'AMERICA_TORONTO',
	/** Tortola */
	AmericaTortola = 'AMERICA_TORTOLA',
	/** Vancouver */
	AmericaVancouver = 'AMERICA_VANCOUVER',
	/** Whitehorse */
	AmericaWhitehorse = 'AMERICA_WHITEHORSE',
	/** Winnipeg */
	AmericaWinnipeg = 'AMERICA_WINNIPEG',
	/** Yakutat */
	AmericaYakutat = 'AMERICA_YAKUTAT',
	/** Yellowknife */
	AmericaYellowknife = 'AMERICA_YELLOWKNIFE',
	/** Casey */
	AntarcticaCasey = 'ANTARCTICA_CASEY',
	/** Davis */
	AntarcticaDavis = 'ANTARCTICA_DAVIS',
	/** DumontDUrville */
	AntarcticaDumontdurville = 'ANTARCTICA_DUMONTDURVILLE',
	/** Macquarie */
	AntarcticaMacquarie = 'ANTARCTICA_MACQUARIE',
	/** Mawson */
	AntarcticaMawson = 'ANTARCTICA_MAWSON',
	/** McMurdo */
	AntarcticaMcmurdo = 'ANTARCTICA_MCMURDO',
	/** Palmer */
	AntarcticaPalmer = 'ANTARCTICA_PALMER',
	/** Rothera */
	AntarcticaRothera = 'ANTARCTICA_ROTHERA',
	/** Syowa */
	AntarcticaSyowa = 'ANTARCTICA_SYOWA',
	/** Troll */
	AntarcticaTroll = 'ANTARCTICA_TROLL',
	/** Vostok */
	AntarcticaVostok = 'ANTARCTICA_VOSTOK',
	/** Longyearbyen */
	ArcticLongyearbyen = 'ARCTIC_LONGYEARBYEN',
	/** Aden */
	AsiaAden = 'ASIA_ADEN',
	/** Almaty */
	AsiaAlmaty = 'ASIA_ALMATY',
	/** Amman */
	AsiaAmman = 'ASIA_AMMAN',
	/** Anadyr */
	AsiaAnadyr = 'ASIA_ANADYR',
	/** Aqtau */
	AsiaAqtau = 'ASIA_AQTAU',
	/** Aqtobe */
	AsiaAqtobe = 'ASIA_AQTOBE',
	/** Ashgabat */
	AsiaAshgabat = 'ASIA_ASHGABAT',
	/** Atyrau */
	AsiaAtyrau = 'ASIA_ATYRAU',
	/** Baghdad */
	AsiaBaghdad = 'ASIA_BAGHDAD',
	/** Bahrain */
	AsiaBahrain = 'ASIA_BAHRAIN',
	/** Baku */
	AsiaBaku = 'ASIA_BAKU',
	/** Bangkok */
	AsiaBangkok = 'ASIA_BANGKOK',
	/** Barnaul */
	AsiaBarnaul = 'ASIA_BARNAUL',
	/** Beirut */
	AsiaBeirut = 'ASIA_BEIRUT',
	/** Bishkek */
	AsiaBishkek = 'ASIA_BISHKEK',
	/** Brunei */
	AsiaBrunei = 'ASIA_BRUNEI',
	/** Chita */
	AsiaChita = 'ASIA_CHITA',
	/** Choibalsan */
	AsiaChoibalsan = 'ASIA_CHOIBALSAN',
	/** Colombo */
	AsiaColombo = 'ASIA_COLOMBO',
	/** Damascus */
	AsiaDamascus = 'ASIA_DAMASCUS',
	/** Dhaka */
	AsiaDhaka = 'ASIA_DHAKA',
	/** Dili */
	AsiaDili = 'ASIA_DILI',
	/** Dubai */
	AsiaDubai = 'ASIA_DUBAI',
	/** Dushanbe */
	AsiaDushanbe = 'ASIA_DUSHANBE',
	/** Famagusta */
	AsiaFamagusta = 'ASIA_FAMAGUSTA',
	/** Gaza */
	AsiaGaza = 'ASIA_GAZA',
	/** Hebron */
	AsiaHebron = 'ASIA_HEBRON',
	/** Hong Kong */
	AsiaHongKong = 'ASIA_HONG_KONG',
	/** Hovd */
	AsiaHovd = 'ASIA_HOVD',
	/** Ho Chi Minh */
	AsiaHoChiMinh = 'ASIA_HO_CHI_MINH',
	/** Irkutsk */
	AsiaIrkutsk = 'ASIA_IRKUTSK',
	/** Jakarta */
	AsiaJakarta = 'ASIA_JAKARTA',
	/** Jayapura */
	AsiaJayapura = 'ASIA_JAYAPURA',
	/** Jerusalem */
	AsiaJerusalem = 'ASIA_JERUSALEM',
	/** Kabul */
	AsiaKabul = 'ASIA_KABUL',
	/** Kamchatka */
	AsiaKamchatka = 'ASIA_KAMCHATKA',
	/** Karachi */
	AsiaKarachi = 'ASIA_KARACHI',
	/** Kathmandu */
	AsiaKathmandu = 'ASIA_KATHMANDU',
	/** Khandyga */
	AsiaKhandyga = 'ASIA_KHANDYGA',
	/** Kolkata */
	AsiaKolkata = 'ASIA_KOLKATA',
	/** Krasnoyarsk */
	AsiaKrasnoyarsk = 'ASIA_KRASNOYARSK',
	/** Kuala Lumpur */
	AsiaKualaLumpur = 'ASIA_KUALA_LUMPUR',
	/** Kuching */
	AsiaKuching = 'ASIA_KUCHING',
	/** Kuwait */
	AsiaKuwait = 'ASIA_KUWAIT',
	/** Macau */
	AsiaMacau = 'ASIA_MACAU',
	/** Magadan */
	AsiaMagadan = 'ASIA_MAGADAN',
	/** Makassar */
	AsiaMakassar = 'ASIA_MAKASSAR',
	/** Manila */
	AsiaManila = 'ASIA_MANILA',
	/** Muscat */
	AsiaMuscat = 'ASIA_MUSCAT',
	/** Nicosia */
	AsiaNicosia = 'ASIA_NICOSIA',
	/** Novokuznetsk */
	AsiaNovokuznetsk = 'ASIA_NOVOKUZNETSK',
	/** Novosibirsk */
	AsiaNovosibirsk = 'ASIA_NOVOSIBIRSK',
	/** Omsk */
	AsiaOmsk = 'ASIA_OMSK',
	/** Oral */
	AsiaOral = 'ASIA_ORAL',
	/** Phnom Penh */
	AsiaPhnomPenh = 'ASIA_PHNOM_PENH',
	/** Pontianak */
	AsiaPontianak = 'ASIA_PONTIANAK',
	/** Pyongyang */
	AsiaPyongyang = 'ASIA_PYONGYANG',
	/** Qatar */
	AsiaQatar = 'ASIA_QATAR',
	/** Qostanay */
	AsiaQostanay = 'ASIA_QOSTANAY',
	/** Qyzylorda */
	AsiaQyzylorda = 'ASIA_QYZYLORDA',
	/** Riyadh */
	AsiaRiyadh = 'ASIA_RIYADH',
	/** Sakhalin */
	AsiaSakhalin = 'ASIA_SAKHALIN',
	/** Samarkand */
	AsiaSamarkand = 'ASIA_SAMARKAND',
	/** Seoul */
	AsiaSeoul = 'ASIA_SEOUL',
	/** Shanghai */
	AsiaShanghai = 'ASIA_SHANGHAI',
	/** Singapore */
	AsiaSingapore = 'ASIA_SINGAPORE',
	/** Srednekolymsk */
	AsiaSrednekolymsk = 'ASIA_SREDNEKOLYMSK',
	/** Taipei */
	AsiaTaipei = 'ASIA_TAIPEI',
	/** Tashkent */
	AsiaTashkent = 'ASIA_TASHKENT',
	/** Tbilisi */
	AsiaTbilisi = 'ASIA_TBILISI',
	/** Tehran */
	AsiaTehran = 'ASIA_TEHRAN',
	/** Thimphu */
	AsiaThimphu = 'ASIA_THIMPHU',
	/** Tokyo */
	AsiaTokyo = 'ASIA_TOKYO',
	/** Tomsk */
	AsiaTomsk = 'ASIA_TOMSK',
	/** Ulaanbaatar */
	AsiaUlaanbaatar = 'ASIA_ULAANBAATAR',
	/** Urumqi */
	AsiaUrumqi = 'ASIA_URUMQI',
	/** Ust-Nera */
	AsiaUstNera = 'ASIA_UST_NERA',
	/** Vientiane */
	AsiaVientiane = 'ASIA_VIENTIANE',
	/** Vladivostok */
	AsiaVladivostok = 'ASIA_VLADIVOSTOK',
	/** Yakutsk */
	AsiaYakutsk = 'ASIA_YAKUTSK',
	/** Yangon */
	AsiaYangon = 'ASIA_YANGON',
	/** Yekaterinburg */
	AsiaYekaterinburg = 'ASIA_YEKATERINBURG',
	/** Yerevan */
	AsiaYerevan = 'ASIA_YEREVAN',
	/** Azores */
	AtlanticAzores = 'ATLANTIC_AZORES',
	/** Bermuda */
	AtlanticBermuda = 'ATLANTIC_BERMUDA',
	/** Canary */
	AtlanticCanary = 'ATLANTIC_CANARY',
	/** Cape Verde */
	AtlanticCapeVerde = 'ATLANTIC_CAPE_VERDE',
	/** Faroe */
	AtlanticFaroe = 'ATLANTIC_FAROE',
	/** Madeira */
	AtlanticMadeira = 'ATLANTIC_MADEIRA',
	/** Reykjavik */
	AtlanticReykjavik = 'ATLANTIC_REYKJAVIK',
	/** South Georgia */
	AtlanticSouthGeorgia = 'ATLANTIC_SOUTH_GEORGIA',
	/** Stanley */
	AtlanticStanley = 'ATLANTIC_STANLEY',
	/** St Helena */
	AtlanticStHelena = 'ATLANTIC_ST_HELENA',
	/** Adelaide */
	AustraliaAdelaide = 'AUSTRALIA_ADELAIDE',
	/** Brisbane */
	AustraliaBrisbane = 'AUSTRALIA_BRISBANE',
	/** Broken Hill */
	AustraliaBrokenHill = 'AUSTRALIA_BROKEN_HILL',
	/** Currie */
	AustraliaCurrie = 'AUSTRALIA_CURRIE',
	/** Darwin */
	AustraliaDarwin = 'AUSTRALIA_DARWIN',
	/** Eucla */
	AustraliaEucla = 'AUSTRALIA_EUCLA',
	/** Hobart */
	AustraliaHobart = 'AUSTRALIA_HOBART',
	/** Lindeman */
	AustraliaLindeman = 'AUSTRALIA_LINDEMAN',
	/** Lord Howe */
	AustraliaLordHowe = 'AUSTRALIA_LORD_HOWE',
	/** Melbourne */
	AustraliaMelbourne = 'AUSTRALIA_MELBOURNE',
	/** Perth */
	AustraliaPerth = 'AUSTRALIA_PERTH',
	/** Sydney */
	AustraliaSydney = 'AUSTRALIA_SYDNEY',
	/** Amsterdam */
	EuropeAmsterdam = 'EUROPE_AMSTERDAM',
	/** Andorra */
	EuropeAndorra = 'EUROPE_ANDORRA',
	/** Astrakhan */
	EuropeAstrakhan = 'EUROPE_ASTRAKHAN',
	/** Athens */
	EuropeAthens = 'EUROPE_ATHENS',
	/** Belgrade */
	EuropeBelgrade = 'EUROPE_BELGRADE',
	/** Berlin */
	EuropeBerlin = 'EUROPE_BERLIN',
	/** Bratislava */
	EuropeBratislava = 'EUROPE_BRATISLAVA',
	/** Brussels */
	EuropeBrussels = 'EUROPE_BRUSSELS',
	/** Bucharest */
	EuropeBucharest = 'EUROPE_BUCHAREST',
	/** Budapest */
	EuropeBudapest = 'EUROPE_BUDAPEST',
	/** Busingen */
	EuropeBusingen = 'EUROPE_BUSINGEN',
	/** Chisinau */
	EuropeChisinau = 'EUROPE_CHISINAU',
	/** Copenhagen */
	EuropeCopenhagen = 'EUROPE_COPENHAGEN',
	/** Dublin */
	EuropeDublin = 'EUROPE_DUBLIN',
	/** Gibraltar */
	EuropeGibraltar = 'EUROPE_GIBRALTAR',
	/** Guernsey */
	EuropeGuernsey = 'EUROPE_GUERNSEY',
	/** Helsinki */
	EuropeHelsinki = 'EUROPE_HELSINKI',
	/** Isle of Man */
	EuropeIsleOfMan = 'EUROPE_ISLE_OF_MAN',
	/** Istanbul */
	EuropeIstanbul = 'EUROPE_ISTANBUL',
	/** Jersey */
	EuropeJersey = 'EUROPE_JERSEY',
	/** Kaliningrad */
	EuropeKaliningrad = 'EUROPE_KALININGRAD',
	/** Kiev */
	EuropeKiev = 'EUROPE_KIEV',
	/** Kirov */
	EuropeKirov = 'EUROPE_KIROV',
	/** Lisbon */
	EuropeLisbon = 'EUROPE_LISBON',
	/** Ljubljana */
	EuropeLjubljana = 'EUROPE_LJUBLJANA',
	/** London */
	EuropeLondon = 'EUROPE_LONDON',
	/** Luxembourg */
	EuropeLuxembourg = 'EUROPE_LUXEMBOURG',
	/** Madrid */
	EuropeMadrid = 'EUROPE_MADRID',
	/** Malta */
	EuropeMalta = 'EUROPE_MALTA',
	/** Mariehamn */
	EuropeMariehamn = 'EUROPE_MARIEHAMN',
	/** Minsk */
	EuropeMinsk = 'EUROPE_MINSK',
	/** Monaco */
	EuropeMonaco = 'EUROPE_MONACO',
	/** Moscow */
	EuropeMoscow = 'EUROPE_MOSCOW',
	/** Oslo */
	EuropeOslo = 'EUROPE_OSLO',
	/** Paris */
	EuropeParis = 'EUROPE_PARIS',
	/** Podgorica */
	EuropePodgorica = 'EUROPE_PODGORICA',
	/** Prague */
	EuropePrague = 'EUROPE_PRAGUE',
	/** Riga */
	EuropeRiga = 'EUROPE_RIGA',
	/** Rome */
	EuropeRome = 'EUROPE_ROME',
	/** Samara */
	EuropeSamara = 'EUROPE_SAMARA',
	/** San Marino */
	EuropeSanMarino = 'EUROPE_SAN_MARINO',
	/** Sarajevo */
	EuropeSarajevo = 'EUROPE_SARAJEVO',
	/** Saratov */
	EuropeSaratov = 'EUROPE_SARATOV',
	/** Simferopol */
	EuropeSimferopol = 'EUROPE_SIMFEROPOL',
	/** Skopje */
	EuropeSkopje = 'EUROPE_SKOPJE',
	/** Sofia */
	EuropeSofia = 'EUROPE_SOFIA',
	/** Stockholm */
	EuropeStockholm = 'EUROPE_STOCKHOLM',
	/** Tallinn */
	EuropeTallinn = 'EUROPE_TALLINN',
	/** Tirane */
	EuropeTirane = 'EUROPE_TIRANE',
	/** Ulyanovsk */
	EuropeUlyanovsk = 'EUROPE_ULYANOVSK',
	/** Uzhgorod */
	EuropeUzhgorod = 'EUROPE_UZHGOROD',
	/** Vaduz */
	EuropeVaduz = 'EUROPE_VADUZ',
	/** Vatican */
	EuropeVatican = 'EUROPE_VATICAN',
	/** Vienna */
	EuropeVienna = 'EUROPE_VIENNA',
	/** Vilnius */
	EuropeVilnius = 'EUROPE_VILNIUS',
	/** Volgograd */
	EuropeVolgograd = 'EUROPE_VOLGOGRAD',
	/** Warsaw */
	EuropeWarsaw = 'EUROPE_WARSAW',
	/** Zagreb */
	EuropeZagreb = 'EUROPE_ZAGREB',
	/** Zaporozhye */
	EuropeZaporozhye = 'EUROPE_ZAPOROZHYE',
	/** Zurich */
	EuropeZurich = 'EUROPE_ZURICH',
	/** Antananarivo */
	IndianAntananarivo = 'INDIAN_ANTANANARIVO',
	/** Chagos */
	IndianChagos = 'INDIAN_CHAGOS',
	/** Christmas */
	IndianChristmas = 'INDIAN_CHRISTMAS',
	/** Cocos */
	IndianCocos = 'INDIAN_COCOS',
	/** Comoro */
	IndianComoro = 'INDIAN_COMORO',
	/** Kerguelen */
	IndianKerguelen = 'INDIAN_KERGUELEN',
	/** Mahe */
	IndianMahe = 'INDIAN_MAHE',
	/** Maldives */
	IndianMaldives = 'INDIAN_MALDIVES',
	/** Mauritius */
	IndianMauritius = 'INDIAN_MAURITIUS',
	/** Mayotte */
	IndianMayotte = 'INDIAN_MAYOTTE',
	/** Reunion */
	IndianReunion = 'INDIAN_REUNION',
	/** Apia */
	PacificApia = 'PACIFIC_APIA',
	/** Auckland */
	PacificAuckland = 'PACIFIC_AUCKLAND',
	/** Bougainville */
	PacificBougainville = 'PACIFIC_BOUGAINVILLE',
	/** Chatham */
	PacificChatham = 'PACIFIC_CHATHAM',
	/** Chuuk */
	PacificChuuk = 'PACIFIC_CHUUK',
	/** Easter */
	PacificEaster = 'PACIFIC_EASTER',
	/** Efate */
	PacificEfate = 'PACIFIC_EFATE',
	/** Enderbury */
	PacificEnderbury = 'PACIFIC_ENDERBURY',
	/** Fakaofo */
	PacificFakaofo = 'PACIFIC_FAKAOFO',
	/** Fiji */
	PacificFiji = 'PACIFIC_FIJI',
	/** Funafuti */
	PacificFunafuti = 'PACIFIC_FUNAFUTI',
	/** Galapagos */
	PacificGalapagos = 'PACIFIC_GALAPAGOS',
	/** Gambier */
	PacificGambier = 'PACIFIC_GAMBIER',
	/** Guadalcanal */
	PacificGuadalcanal = 'PACIFIC_GUADALCANAL',
	/** Guam */
	PacificGuam = 'PACIFIC_GUAM',
	/** Honolulu */
	PacificHonolulu = 'PACIFIC_HONOLULU',
	/** Kiritimati */
	PacificKiritimati = 'PACIFIC_KIRITIMATI',
	/** Kosrae */
	PacificKosrae = 'PACIFIC_KOSRAE',
	/** Kwajalein */
	PacificKwajalein = 'PACIFIC_KWAJALEIN',
	/** Majuro */
	PacificMajuro = 'PACIFIC_MAJURO',
	/** Marquesas */
	PacificMarquesas = 'PACIFIC_MARQUESAS',
	/** Midway */
	PacificMidway = 'PACIFIC_MIDWAY',
	/** Nauru */
	PacificNauru = 'PACIFIC_NAURU',
	/** Niue */
	PacificNiue = 'PACIFIC_NIUE',
	/** Norfolk */
	PacificNorfolk = 'PACIFIC_NORFOLK',
	/** Noumea */
	PacificNoumea = 'PACIFIC_NOUMEA',
	/** Pago Pago */
	PacificPagoPago = 'PACIFIC_PAGO_PAGO',
	/** Palau */
	PacificPalau = 'PACIFIC_PALAU',
	/** Pitcairn */
	PacificPitcairn = 'PACIFIC_PITCAIRN',
	/** Pohnpei */
	PacificPohnpei = 'PACIFIC_POHNPEI',
	/** Port Moresby */
	PacificPortMoresby = 'PACIFIC_PORT_MORESBY',
	/** Rarotonga */
	PacificRarotonga = 'PACIFIC_RAROTONGA',
	/** Saipan */
	PacificSaipan = 'PACIFIC_SAIPAN',
	/** Tahiti */
	PacificTahiti = 'PACIFIC_TAHITI',
	/** Tarawa */
	PacificTarawa = 'PACIFIC_TARAWA',
	/** Tongatapu */
	PacificTongatapu = 'PACIFIC_TONGATAPU',
	/** Wake */
	PacificWake = 'PACIFIC_WAKE',
	/** Wallis */
	PacificWallis = 'PACIFIC_WALLIS',
	/** UTC offset: UTC+0 */
	Utc_0 = 'UTC_0',
	/** UTC offset: UTC+0:30 */
	Utc_0_30 = 'UTC_0_30',
	/** UTC offset: UTC+1 */
	Utc_1 = 'UTC_1',
	/** UTC offset: UTC+10 */
	Utc_10 = 'UTC_10',
	/** UTC offset: UTC+10:30 */
	Utc_10_30 = 'UTC_10_30',
	/** UTC offset: UTC+11 */
	Utc_11 = 'UTC_11',
	/** UTC offset: UTC+11:30 */
	Utc_11_30 = 'UTC_11_30',
	/** UTC offset: UTC+12 */
	Utc_12 = 'UTC_12',
	/** UTC offset: UTC+12:45 */
	Utc_12_45 = 'UTC_12_45',
	/** UTC offset: UTC+13 */
	Utc_13 = 'UTC_13',
	/** UTC offset: UTC+13:45 */
	Utc_13_45 = 'UTC_13_45',
	/** UTC offset: UTC+14 */
	Utc_14 = 'UTC_14',
	/** UTC offset: UTC+1:30 */
	Utc_1_30 = 'UTC_1_30',
	/** UTC offset: UTC+2 */
	Utc_2 = 'UTC_2',
	/** UTC offset: UTC+2:30 */
	Utc_2_30 = 'UTC_2_30',
	/** UTC offset: UTC+3 */
	Utc_3 = 'UTC_3',
	/** UTC offset: UTC+3:30 */
	Utc_3_30 = 'UTC_3_30',
	/** UTC offset: UTC+4 */
	Utc_4 = 'UTC_4',
	/** UTC offset: UTC+4:30 */
	Utc_4_30 = 'UTC_4_30',
	/** UTC offset: UTC+5 */
	Utc_5 = 'UTC_5',
	/** UTC offset: UTC+5:30 */
	Utc_5_30 = 'UTC_5_30',
	/** UTC offset: UTC+5:45 */
	Utc_5_45 = 'UTC_5_45',
	/** UTC offset: UTC+6 */
	Utc_6 = 'UTC_6',
	/** UTC offset: UTC+6:30 */
	Utc_6_30 = 'UTC_6_30',
	/** UTC offset: UTC+7 */
	Utc_7 = 'UTC_7',
	/** UTC offset: UTC+7:30 */
	Utc_7_30 = 'UTC_7_30',
	/** UTC offset: UTC+8 */
	Utc_8 = 'UTC_8',
	/** UTC offset: UTC+8:30 */
	Utc_8_30 = 'UTC_8_30',
	/** UTC offset: UTC+8:45 */
	Utc_8_45 = 'UTC_8_45',
	/** UTC offset: UTC+9 */
	Utc_9 = 'UTC_9',
	/** UTC offset: UTC+9:30 */
	Utc_9_30 = 'UTC_9_30'
}

/** Options for filtering the connection */
export type MenuItemsWhereArgs = {
	/** The ID of the object */
	id: Maybe<Scalars['Int']>;
	/** The menu location for the menu being queried */
	location: Maybe<MenuLocationEnum>;
};

export type PostObjectUnion =
	| Post
	| Page
	| MediaItem
	| Testimonial
	| About
	| Consultant
	| Position;

export type TermObjectUnion = Category | Tag | PostFormat;

/** The template assigned to the node */
export type DefaultTemplate = ContentTemplate & {
	__typename?: 'DefaultTemplate';
	/** The name of the template */
	templateName: Maybe<Scalars['String']>;
};

/** The template assigned to the node */
export type CoverTemplate = ContentTemplate & {
	__typename?: 'CoverTemplate';
	/** The name of the template */
	templateName: Maybe<Scalars['String']>;
};

/** The template assigned to the node */
export type FullWidthTemplate = ContentTemplate & {
	__typename?: 'FullWidthTemplate';
	/** The name of the template */
	templateName: Maybe<Scalars['String']>;
};

export type AboutFieldsFragment = { __typename?: 'About' } & Pick<
	About,
	'content' | 'id' | 'title' | 'modified' | 'slug'
> & {
		featuredImage: Maybe<
			{ __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge' } & {
				node: Maybe<{ __typename?: 'MediaItem' } & Pick<MediaItem, 'sourceUrl'>>;
			}
		>;
	};

export type CommentFieldsFragment = { __typename?: 'Comment' } & Pick<
	Comment,
	'id' | 'date' | 'type' | 'approved' | 'content'
>;

export type ConsultantFieldsFragment = { __typename?: 'Consultant' } & Pick<
	Consultant,
	'content' | 'id' | 'title' | 'slug' | 'modified'
> & {
		featuredImage: Maybe<
			{ __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge' } & {
				node: Maybe<{ __typename?: 'MediaItem' } & Pick<MediaItem, 'sourceUrl'>>;
			}
		>;
	};

export type CustomPageFieldsFragment = { __typename?: 'Page' } & Pick<
	Page,
	'title' | 'content' | 'id' | 'slug'
> & {
		featuredImage: Maybe<
			{ __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge' } & {
				node: Maybe<{ __typename?: 'MediaItem' } & Pick<MediaItem, 'sourceUrl'>>;
			}
		>;
	};

export type MenuFragmentFragment = { __typename?: 'MenuItem' } & Pick<
	MenuItem,
	'id' | 'label' | 'url' | 'path' | 'parentId'
>;

export type PageFragmentFragment = { __typename?: 'Page' } & Pick<
	Page,
	'id' | 'title' | 'content' | 'slug' | 'uri'
>;

export type PreviewPageFragment = { __typename?: 'Page' } & Pick<
	Page,
	'databaseId' | 'slug' | 'status' | 'uri'
>;

export type PreviewPostFragment = { __typename?: 'Post' } & Pick<
	Post,
	'databaseId' | 'slug' | 'status' | 'uri'
>;

export type TestimonialFieldsFragment = { __typename?: 'Testimonial' } & Pick<
	Testimonial,
	'content' | 'id' | 'title' | 'slug' | 'modified'
> & {
		featuredImage: Maybe<
			{ __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge' } & {
				node: Maybe<{ __typename?: 'MediaItem' } & Pick<MediaItem, 'sourceUrl'>>;
			}
		>;
	};

export type AboutBySlugQueryVariables = Exact<{
	id: Scalars['ID'];
	idType: AboutIdType;
}>;

export type AboutBySlugQuery = { __typename?: 'RootQuery' } & {
	aboutPost: Maybe<{ __typename?: 'About' } & AboutFieldsFragment>;
};

export type AboutCardsDataQueryVariables = Exact<{
	name: Scalars['String'];
	field: PostObjectsConnectionOrderbyEnum;
	order: OrderEnum;
	first: Scalars['Int'];
}>;

export type AboutCardsDataQuery = { __typename?: 'RootQuery' } & {
	pages: Maybe<
		{ __typename?: 'RootQueryToPageConnection' } & {
			edges: Maybe<
				Array<
					Maybe<
						{ __typename?: 'RootQueryToPageConnectionEdge' } & {
							node: Maybe<{ __typename?: 'Page' } & CustomPageFieldsFragment>;
						}
					>
				>
			>;
		}
	>;
	abouts: Maybe<
		{ __typename?: 'RootQueryToAboutConnection' } & {
			edges: Maybe<
				Array<
					Maybe<
						{ __typename?: 'RootQueryToAboutConnectionEdge' } & {
							node: Maybe<{ __typename?: 'About' } & AboutFieldsFragment>;
						}
					>
				>
			>;
		}
	>;
};

export type AboutSlugsQueryVariables = Exact<{
	field: PostObjectsConnectionOrderbyEnum;
	order: OrderEnum;
	first: Scalars['Int'];
}>;

export type AboutSlugsQuery = { __typename?: 'RootQuery' } & {
	aboutslugs: Maybe<
		{ __typename?: 'RootQueryToAboutConnection' } & {
			edges: Maybe<
				Array<
					Maybe<
						{ __typename?: 'RootQueryToAboutConnectionEdge' } & {
							node: Maybe<{ __typename?: 'About' } & Pick<About, 'uri' | 'slug'>>;
						}
					>
				>
			>;
		}
	>;
};

export type AllTestimonialsQueryVariables = Exact<{
	field: PostObjectsConnectionOrderbyEnum;
	order: OrderEnum;
	first: Scalars['Int'];
}>;

export type AllTestimonialsQuery = { __typename?: 'RootQuery' } & {
	testimonials: Maybe<
		{ __typename?: 'RootQueryToTestimonialConnection' } & {
			edges: Maybe<
				Array<
					Maybe<
						{ __typename?: 'RootQueryToTestimonialConnectionEdge' } & Pick<
							RootQueryToTestimonialConnectionEdge,
							'cursor'
						> & {
								node: Maybe<{ __typename?: 'Testimonial' } & TestimonialFieldsFragment>;
							}
					>
				>
			>;
		}
	>;
};

export type ConsultantBySlugQueryVariables = Exact<{
	id: Scalars['ID'];
	idType: ConsultantIdType;
}>;

export type ConsultantBySlugQuery = { __typename?: 'RootQuery' } & {
	consultantPost: Maybe<
		{ __typename?: 'Consultant' } & ConsultantFieldsFragment
	>;
};

export type ConsultantSlugsQueryVariables = Exact<{
	field: PostObjectsConnectionOrderbyEnum;
	order: OrderEnum;
	first: Scalars['Int'];
}>;

export type ConsultantSlugsQuery = { __typename?: 'RootQuery' } & {
	consultantSlugs: Maybe<
		{ __typename?: 'RootQueryToConsultantConnection' } & {
			edges: Maybe<
				Array<
					Maybe<
						{ __typename?: 'RootQueryToConsultantConnectionEdge' } & {
							node: Maybe<
								{ __typename?: 'Consultant' } & Pick<Consultant, 'uri' | 'slug'>
							>;
						}
					>
				>
			>;
		}
	>;
};

export type ConsultantsDataQueryVariables = Exact<{
	name: Scalars['String'];
	field: PostObjectsConnectionOrderbyEnum;
	order: OrderEnum;
	first: Scalars['Int'];
}>;

export type ConsultantsDataQuery = { __typename?: 'RootQuery' } & {
	pages: Maybe<
		{ __typename?: 'RootQueryToPageConnection' } & {
			edges: Maybe<
				Array<
					Maybe<
						{ __typename?: 'RootQueryToPageConnectionEdge' } & {
							node: Maybe<{ __typename?: 'Page' } & CustomPageFieldsFragment>;
						}
					>
				>
			>;
		}
	>;
	consultants: Maybe<
		{ __typename?: 'RootQueryToConsultantConnection' } & {
			edges: Maybe<
				Array<
					Maybe<
						{ __typename?: 'RootQueryToConsultantConnectionEdge' } & {
							node: Maybe<{ __typename?: 'Consultant' } & ConsultantFieldsFragment>;
						}
					>
				>
			>;
		}
	>;
};

export type GetPageQueryVariables = Exact<{
	idPage: Scalars['ID'];
	idTypePage: PageIdType;
	idHead: Scalars['ID'];
	idTypeHead: MenuNodeIdTypeEnum;
	idFoot: Scalars['ID'];
	idTypeFoot: MenuNodeIdTypeEnum;
}>;

export type GetPageQuery = { __typename?: 'RootQuery' } & {
	headerMenus: Maybe<
		{ __typename?: 'Menu' } & {
			menuItems: Maybe<
				{ __typename?: 'MenuToMenuItemConnection' } & {
					edges: Maybe<
						Array<
							Maybe<
								{ __typename?: 'MenuToMenuItemConnectionEdge' } & {
									node: Maybe<
										{ __typename?: 'MenuItem' } & {
											childItems: Maybe<
												{ __typename?: 'MenuItemToMenuItemConnection' } & {
													edges: Maybe<
														Array<
															Maybe<
																{ __typename?: 'MenuItemToMenuItemConnectionEdge' } & {
																	node: Maybe<
																		{ __typename?: 'MenuItem' } & MenuFragmentFragment
																	>;
																}
															>
														>
													>;
												}
											>;
										} & MenuFragmentFragment
									>;
								}
							>
						>
					>;
				}
			>;
		}
	>;
	footerMenus: Maybe<
		{ __typename?: 'Menu' } & {
			menuItems: Maybe<
				{ __typename?: 'MenuToMenuItemConnection' } & {
					edges: Maybe<
						Array<
							Maybe<
								{ __typename?: 'MenuToMenuItemConnectionEdge' } & {
									node: Maybe<
										{ __typename?: 'MenuItem' } & {
											childItems: Maybe<
												{ __typename?: 'MenuItemToMenuItemConnection' } & {
													edges: Maybe<
														Array<
															Maybe<
																{ __typename?: 'MenuItemToMenuItemConnectionEdge' } & {
																	node: Maybe<
																		{ __typename?: 'MenuItem' } & MenuFragmentFragment
																	>;
																}
															>
														>
													>;
												}
											>;
										} & MenuFragmentFragment
									>;
								}
							>
						>
					>;
				}
			>;
		}
	>;
	page: Maybe<{ __typename?: 'Page' } & PageFragmentFragment>;
};

export type GetPagesQueryVariables = Exact<{
	first: Scalars['Int'];
	field: PostObjectsConnectionOrderbyEnum;
	order: OrderEnum;
	parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
}>;

export type GetPagesQuery = { __typename?: 'RootQuery' } & {
	pages: Maybe<
		{ __typename?: 'RootQueryToPageConnection' } & {
			nodes: Maybe<Array<Maybe<{ __typename?: 'Page' } & PageFragmentFragment>>>;
		}
	>;
};

export type GetPreviewPageQueryVariables = Exact<{
	idPage: Scalars['ID'];
	idTypePage: PageIdType;
}>;

export type GetPreviewPageQuery = { __typename?: 'RootQuery' } & {
	preview: Maybe<{ __typename?: 'Page' } & PreviewPageFragment>;
};

export type GetPreviewPostQueryVariables = Exact<{
	idPost: Scalars['ID'];
	idTypePost: PostIdType;
}>;

export type GetPreviewPostQuery = { __typename?: 'RootQuery' } & {
	previewPost: Maybe<{ __typename?: 'Post' } & PreviewPostFragment>;
};

export type HeaderFooterQueryVariables = Exact<{
	idHead: Scalars['ID'];
	idTypeHead: MenuNodeIdTypeEnum;
	idFoot: Scalars['ID'];
	idTypeFoot: MenuNodeIdTypeEnum;
}>;

export type HeaderFooterQuery = { __typename?: 'RootQuery' } & {
	headerDynamic: Maybe<
		{ __typename?: 'Menu' } & {
			menuItems: Maybe<
				{ __typename?: 'MenuToMenuItemConnection' } & {
					edges: Maybe<
						Array<
							Maybe<
								{ __typename?: 'MenuToMenuItemConnectionEdge' } & {
									node: Maybe<
										{ __typename?: 'MenuItem' } & {
											childItems: Maybe<
												{ __typename?: 'MenuItemToMenuItemConnection' } & {
													edges: Maybe<
														Array<
															Maybe<
																{ __typename?: 'MenuItemToMenuItemConnectionEdge' } & {
																	node: Maybe<
																		{ __typename?: 'MenuItem' } & MenuFragmentFragment
																	>;
																}
															>
														>
													>;
												}
											>;
										} & MenuFragmentFragment
									>;
								}
							>
						>
					>;
				}
			>;
		}
	>;
	footerDynamic: Maybe<
		{ __typename?: 'Menu' } & {
			menuItems: Maybe<
				{ __typename?: 'MenuToMenuItemConnection' } & {
					edges: Maybe<
						Array<
							Maybe<
								{ __typename?: 'MenuToMenuItemConnectionEdge' } & {
									node: Maybe<
										{ __typename?: 'MenuItem' } & {
											childItems: Maybe<
												{ __typename?: 'MenuItemToMenuItemConnection' } & {
													edges: Maybe<
														Array<
															Maybe<
																{ __typename?: 'MenuItemToMenuItemConnectionEdge' } & {
																	node: Maybe<
																		{ __typename?: 'MenuItem' } & MenuFragmentFragment
																	>;
																}
															>
														>
													>;
												}
											>;
										} & MenuFragmentFragment
									>;
								}
							>
						>
					>;
				}
			>;
		}
	>;
};

export type LandingPageQueryVariables = Exact<{
	name: Scalars['String'];
}>;

export type LandingPageQuery = { __typename?: 'RootQuery' } & {
	pages: Maybe<
		{ __typename?: 'RootQueryToPageConnection' } & {
			edges: Maybe<
				Array<
					Maybe<
						{ __typename?: 'RootQueryToPageConnectionEdge' } & {
							node: Maybe<{ __typename?: 'Page' } & CustomPageFieldsFragment>;
						}
					>
				>
			>;
		}
	>;
};

export const AboutFieldsFragmentDoc = gql`
	fragment AboutFields on About {
		content
		id
		title
		modified
		slug
		featuredImage {
			node {
				sourceUrl
			}
		}
	}
`;
export const CommentFieldsFragmentDoc = gql`
	fragment commentFields on Comment {
		id
		date
		type
		approved
		content
	}
`;
export const ConsultantFieldsFragmentDoc = gql`
	fragment ConsultantFields on Consultant {
		content
		id
		title
		slug
		modified
		featuredImage {
			node {
				sourceUrl
			}
		}
	}
`;
export const CustomPageFieldsFragmentDoc = gql`
	fragment CustomPageFields on Page {
		title
		content
		id
		slug
		featuredImage {
			node {
				sourceUrl
			}
		}
	}
`;
export const MenuFragmentFragmentDoc = gql`
	fragment MenuFragment on MenuItem {
		id
		label
		url
		path
		parentId
	}
`;
export const PageFragmentFragmentDoc = gql`
	fragment PageFragment on Page {
		id
		title
		content
		slug
		uri
	}
`;
export const PreviewPageFragmentDoc = gql`
	fragment PreviewPage on Page {
		databaseId
		slug
		status
		uri
	}
`;
export const PreviewPostFragmentDoc = gql`
	fragment PreviewPost on Post {
		databaseId
		slug
		status
		uri
	}
`;
export const TestimonialFieldsFragmentDoc = gql`
	fragment TestimonialFields on Testimonial {
		content
		id
		title
		slug
		modified
		featuredImage {
			node {
				sourceUrl
			}
		}
	}
`;
export const AboutBySlugDocument = gql`
	query AboutBySlug($id: ID!, $idType: AboutIdType!) {
		aboutPost: about(id: $id, idType: $idType) {
			...AboutFields
		}
	}
	${AboutFieldsFragmentDoc}
`;

/**
 * __useAboutBySlugQuery__
 *
 * To run a query within a React component, call `useAboutBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useAboutBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAboutBySlugQuery({
 *   variables: {
 *      id: // value for 'id'
 *      idType: // value for 'idType'
 *   },
 * });
 */
export function useAboutBySlugQuery(
	baseOptions: ApolloReactHooks.QueryHookOptions<
		AboutBySlugQuery,
		AboutBySlugQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<AboutBySlugQuery, AboutBySlugQueryVariables>(
		AboutBySlugDocument,
		baseOptions
	);
}
export function useAboutBySlugLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		AboutBySlugQuery,
		AboutBySlugQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<
		AboutBySlugQuery,
		AboutBySlugQueryVariables
	>(AboutBySlugDocument, baseOptions);
}
export type AboutBySlugQueryHookResult = ReturnType<typeof useAboutBySlugQuery>;
export type AboutBySlugLazyQueryHookResult = ReturnType<
	typeof useAboutBySlugLazyQuery
>;
export type AboutBySlugQueryResult = Apollo.QueryResult<
	AboutBySlugQuery,
	AboutBySlugQueryVariables
>;
export const AboutCardsDataDocument = gql`
	query AboutCardsData(
		$name: String!
		$field: PostObjectsConnectionOrderbyEnum!
		$order: OrderEnum!
		$first: Int!
	) {
		pages(where: { name: $name }) {
			edges {
				node {
					...CustomPageFields
				}
			}
		}
		abouts(where: { orderby: { field: $field, order: $order } }, first: $first) {
			edges {
				node {
					...AboutFields
				}
			}
		}
	}
	${CustomPageFieldsFragmentDoc}
	${AboutFieldsFragmentDoc}
`;

/**
 * __useAboutCardsDataQuery__
 *
 * To run a query within a React component, call `useAboutCardsDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useAboutCardsDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAboutCardsDataQuery({
 *   variables: {
 *      name: // value for 'name'
 *      field: // value for 'field'
 *      order: // value for 'order'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useAboutCardsDataQuery(
	baseOptions: ApolloReactHooks.QueryHookOptions<
		AboutCardsDataQuery,
		AboutCardsDataQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<
		AboutCardsDataQuery,
		AboutCardsDataQueryVariables
	>(AboutCardsDataDocument, baseOptions);
}
export function useAboutCardsDataLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		AboutCardsDataQuery,
		AboutCardsDataQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<
		AboutCardsDataQuery,
		AboutCardsDataQueryVariables
	>(AboutCardsDataDocument, baseOptions);
}
export type AboutCardsDataQueryHookResult = ReturnType<
	typeof useAboutCardsDataQuery
>;
export type AboutCardsDataLazyQueryHookResult = ReturnType<
	typeof useAboutCardsDataLazyQuery
>;
export type AboutCardsDataQueryResult = Apollo.QueryResult<
	AboutCardsDataQuery,
	AboutCardsDataQueryVariables
>;
export const AboutSlugsDocument = gql`
	query AboutSlugs(
		$field: PostObjectsConnectionOrderbyEnum!
		$order: OrderEnum!
		$first: Int!
	) {
		aboutslugs: abouts(
			where: { orderby: { field: $field, order: $order } }
			first: $first
		) {
			edges {
				node {
					uri
					slug
				}
			}
		}
	}
`;

/**
 * __useAboutSlugsQuery__
 *
 * To run a query within a React component, call `useAboutSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAboutSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAboutSlugsQuery({
 *   variables: {
 *      field: // value for 'field'
 *      order: // value for 'order'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useAboutSlugsQuery(
	baseOptions: ApolloReactHooks.QueryHookOptions<
		AboutSlugsQuery,
		AboutSlugsQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<AboutSlugsQuery, AboutSlugsQueryVariables>(
		AboutSlugsDocument,
		baseOptions
	);
}
export function useAboutSlugsLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		AboutSlugsQuery,
		AboutSlugsQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<
		AboutSlugsQuery,
		AboutSlugsQueryVariables
	>(AboutSlugsDocument, baseOptions);
}
export type AboutSlugsQueryHookResult = ReturnType<typeof useAboutSlugsQuery>;
export type AboutSlugsLazyQueryHookResult = ReturnType<
	typeof useAboutSlugsLazyQuery
>;
export type AboutSlugsQueryResult = Apollo.QueryResult<
	AboutSlugsQuery,
	AboutSlugsQueryVariables
>;
export const AllTestimonialsDocument = gql`
	query AllTestimonials(
		$field: PostObjectsConnectionOrderbyEnum!
		$order: OrderEnum!
		$first: Int!
	) {
		testimonials(
			where: { orderby: { field: $field, order: $order } }
			first: $first
		) {
			edges {
				cursor
				node {
					...TestimonialFields
				}
			}
		}
	}
	${TestimonialFieldsFragmentDoc}
`;

/**
 * __useAllTestimonialsQuery__
 *
 * To run a query within a React component, call `useAllTestimonialsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTestimonialsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTestimonialsQuery({
 *   variables: {
 *      field: // value for 'field'
 *      order: // value for 'order'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useAllTestimonialsQuery(
	baseOptions: ApolloReactHooks.QueryHookOptions<
		AllTestimonialsQuery,
		AllTestimonialsQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<
		AllTestimonialsQuery,
		AllTestimonialsQueryVariables
	>(AllTestimonialsDocument, baseOptions);
}
export function useAllTestimonialsLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		AllTestimonialsQuery,
		AllTestimonialsQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<
		AllTestimonialsQuery,
		AllTestimonialsQueryVariables
	>(AllTestimonialsDocument, baseOptions);
}
export type AllTestimonialsQueryHookResult = ReturnType<
	typeof useAllTestimonialsQuery
>;
export type AllTestimonialsLazyQueryHookResult = ReturnType<
	typeof useAllTestimonialsLazyQuery
>;
export type AllTestimonialsQueryResult = Apollo.QueryResult<
	AllTestimonialsQuery,
	AllTestimonialsQueryVariables
>;
export const ConsultantBySlugDocument = gql`
	query ConsultantBySlug($id: ID!, $idType: ConsultantIdType!) {
		consultantPost: consultant(id: $id, idType: $idType) {
			...ConsultantFields
		}
	}
	${ConsultantFieldsFragmentDoc}
`;

/**
 * __useConsultantBySlugQuery__
 *
 * To run a query within a React component, call `useConsultantBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useConsultantBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConsultantBySlugQuery({
 *   variables: {
 *      id: // value for 'id'
 *      idType: // value for 'idType'
 *   },
 * });
 */
export function useConsultantBySlugQuery(
	baseOptions: ApolloReactHooks.QueryHookOptions<
		ConsultantBySlugQuery,
		ConsultantBySlugQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<
		ConsultantBySlugQuery,
		ConsultantBySlugQueryVariables
	>(ConsultantBySlugDocument, baseOptions);
}
export function useConsultantBySlugLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		ConsultantBySlugQuery,
		ConsultantBySlugQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<
		ConsultantBySlugQuery,
		ConsultantBySlugQueryVariables
	>(ConsultantBySlugDocument, baseOptions);
}
export type ConsultantBySlugQueryHookResult = ReturnType<
	typeof useConsultantBySlugQuery
>;
export type ConsultantBySlugLazyQueryHookResult = ReturnType<
	typeof useConsultantBySlugLazyQuery
>;
export type ConsultantBySlugQueryResult = Apollo.QueryResult<
	ConsultantBySlugQuery,
	ConsultantBySlugQueryVariables
>;
export const ConsultantSlugsDocument = gql`
	query ConsultantSlugs(
		$field: PostObjectsConnectionOrderbyEnum!
		$order: OrderEnum!
		$first: Int!
	) {
		consultantSlugs: consultants(
			where: { orderby: { field: $field, order: $order } }
			first: $first
		) {
			edges {
				node {
					uri
					slug
				}
			}
		}
	}
`;

/**
 * __useConsultantSlugsQuery__
 *
 * To run a query within a React component, call `useConsultantSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useConsultantSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConsultantSlugsQuery({
 *   variables: {
 *      field: // value for 'field'
 *      order: // value for 'order'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useConsultantSlugsQuery(
	baseOptions: ApolloReactHooks.QueryHookOptions<
		ConsultantSlugsQuery,
		ConsultantSlugsQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<
		ConsultantSlugsQuery,
		ConsultantSlugsQueryVariables
	>(ConsultantSlugsDocument, baseOptions);
}
export function useConsultantSlugsLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		ConsultantSlugsQuery,
		ConsultantSlugsQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<
		ConsultantSlugsQuery,
		ConsultantSlugsQueryVariables
	>(ConsultantSlugsDocument, baseOptions);
}
export type ConsultantSlugsQueryHookResult = ReturnType<
	typeof useConsultantSlugsQuery
>;
export type ConsultantSlugsLazyQueryHookResult = ReturnType<
	typeof useConsultantSlugsLazyQuery
>;
export type ConsultantSlugsQueryResult = Apollo.QueryResult<
	ConsultantSlugsQuery,
	ConsultantSlugsQueryVariables
>;
export const ConsultantsDataDocument = gql`
	query ConsultantsData(
		$name: String!
		$field: PostObjectsConnectionOrderbyEnum!
		$order: OrderEnum!
		$first: Int!
	) {
		pages(where: { name: $name }) {
			edges {
				node {
					...CustomPageFields
				}
			}
		}
		consultants(
			where: { orderby: { field: $field, order: $order } }
			first: $first
		) {
			edges {
				node {
					...ConsultantFields
				}
			}
		}
	}
	${CustomPageFieldsFragmentDoc}
	${ConsultantFieldsFragmentDoc}
`;

/**
 * __useConsultantsDataQuery__
 *
 * To run a query within a React component, call `useConsultantsDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useConsultantsDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConsultantsDataQuery({
 *   variables: {
 *      name: // value for 'name'
 *      field: // value for 'field'
 *      order: // value for 'order'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useConsultantsDataQuery(
	baseOptions: ApolloReactHooks.QueryHookOptions<
		ConsultantsDataQuery,
		ConsultantsDataQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<
		ConsultantsDataQuery,
		ConsultantsDataQueryVariables
	>(ConsultantsDataDocument, baseOptions);
}
export function useConsultantsDataLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		ConsultantsDataQuery,
		ConsultantsDataQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<
		ConsultantsDataQuery,
		ConsultantsDataQueryVariables
	>(ConsultantsDataDocument, baseOptions);
}
export type ConsultantsDataQueryHookResult = ReturnType<
	typeof useConsultantsDataQuery
>;
export type ConsultantsDataLazyQueryHookResult = ReturnType<
	typeof useConsultantsDataLazyQuery
>;
export type ConsultantsDataQueryResult = Apollo.QueryResult<
	ConsultantsDataQuery,
	ConsultantsDataQueryVariables
>;
export const GetPageDocument = gql`
	query GetPage(
		$idPage: ID!
		$idTypePage: PageIdType!
		$idHead: ID!
		$idTypeHead: MenuNodeIdTypeEnum!
		$idFoot: ID!
		$idTypeFoot: MenuNodeIdTypeEnum!
	) {
		headerMenus: menu(id: $idHead, idType: $idTypeHead) {
			menuItems(where: { parentId: 0 }) {
				edges {
					node {
						...MenuFragment
						childItems {
							edges {
								node {
									...MenuFragment
								}
							}
						}
					}
				}
			}
		}
		footerMenus: menu(id: $idFoot, idType: $idTypeFoot) {
			menuItems(where: { parentId: 0 }) {
				edges {
					node {
						...MenuFragment
						childItems {
							edges {
								node {
									...MenuFragment
								}
							}
						}
					}
				}
			}
		}
		page: page(id: $idPage, idType: $idTypePage) {
			...PageFragment
		}
	}
	${MenuFragmentFragmentDoc}
	${PageFragmentFragmentDoc}
`;

/**
 * __useGetPageQuery__
 *
 * To run a query within a React component, call `useGetPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPageQuery({
 *   variables: {
 *      idPage: // value for 'idPage'
 *      idTypePage: // value for 'idTypePage'
 *      idHead: // value for 'idHead'
 *      idTypeHead: // value for 'idTypeHead'
 *      idFoot: // value for 'idFoot'
 *      idTypeFoot: // value for 'idTypeFoot'
 *   },
 * });
 */
export function useGetPageQuery(
	baseOptions: ApolloReactHooks.QueryHookOptions<
		GetPageQuery,
		GetPageQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<GetPageQuery, GetPageQueryVariables>(
		GetPageDocument,
		baseOptions
	);
}
export function useGetPageLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		GetPageQuery,
		GetPageQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<GetPageQuery, GetPageQueryVariables>(
		GetPageDocument,
		baseOptions
	);
}
export type GetPageQueryHookResult = ReturnType<typeof useGetPageQuery>;
export type GetPageLazyQueryHookResult = ReturnType<typeof useGetPageLazyQuery>;
export type GetPageQueryResult = Apollo.QueryResult<
	GetPageQuery,
	GetPageQueryVariables
>;
export const GetPagesDocument = gql`
	query GetPages(
		$first: Int!
		$field: PostObjectsConnectionOrderbyEnum!
		$order: OrderEnum!
		$parentIn: [ID]
	) {
		pages: pages(
			first: $first
			where: { parentIn: $parentIn, orderby: { field: $field, order: $order } }
		) {
			nodes {
				...PageFragment
			}
		}
	}
	${PageFragmentFragmentDoc}
`;

/**
 * __useGetPagesQuery__
 *
 * To run a query within a React component, call `useGetPagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPagesQuery({
 *   variables: {
 *      first: // value for 'first'
 *      field: // value for 'field'
 *      order: // value for 'order'
 *      parentIn: // value for 'parentIn'
 *   },
 * });
 */
export function useGetPagesQuery(
	baseOptions: ApolloReactHooks.QueryHookOptions<
		GetPagesQuery,
		GetPagesQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<GetPagesQuery, GetPagesQueryVariables>(
		GetPagesDocument,
		baseOptions
	);
}
export function useGetPagesLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		GetPagesQuery,
		GetPagesQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<GetPagesQuery, GetPagesQueryVariables>(
		GetPagesDocument,
		baseOptions
	);
}
export type GetPagesQueryHookResult = ReturnType<typeof useGetPagesQuery>;
export type GetPagesLazyQueryHookResult = ReturnType<
	typeof useGetPagesLazyQuery
>;
export type GetPagesQueryResult = Apollo.QueryResult<
	GetPagesQuery,
	GetPagesQueryVariables
>;
export const GetPreviewPageDocument = gql`
	query GetPreviewPage($idPage: ID!, $idTypePage: PageIdType!) {
		preview: page(id: $idPage, idType: $idTypePage) {
			...PreviewPage
		}
	}
	${PreviewPageFragmentDoc}
`;

/**
 * __useGetPreviewPageQuery__
 *
 * To run a query within a React component, call `useGetPreviewPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPreviewPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPreviewPageQuery({
 *   variables: {
 *      idPage: // value for 'idPage'
 *      idTypePage: // value for 'idTypePage'
 *   },
 * });
 */
export function useGetPreviewPageQuery(
	baseOptions: ApolloReactHooks.QueryHookOptions<
		GetPreviewPageQuery,
		GetPreviewPageQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<
		GetPreviewPageQuery,
		GetPreviewPageQueryVariables
	>(GetPreviewPageDocument, baseOptions);
}
export function useGetPreviewPageLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		GetPreviewPageQuery,
		GetPreviewPageQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<
		GetPreviewPageQuery,
		GetPreviewPageQueryVariables
	>(GetPreviewPageDocument, baseOptions);
}
export type GetPreviewPageQueryHookResult = ReturnType<
	typeof useGetPreviewPageQuery
>;
export type GetPreviewPageLazyQueryHookResult = ReturnType<
	typeof useGetPreviewPageLazyQuery
>;
export type GetPreviewPageQueryResult = Apollo.QueryResult<
	GetPreviewPageQuery,
	GetPreviewPageQueryVariables
>;
export const GetPreviewPostDocument = gql`
	query GetPreviewPost($idPost: ID!, $idTypePost: PostIdType!) {
		previewPost: post(id: $idPost, idType: $idTypePost) {
			...PreviewPost
		}
	}
	${PreviewPostFragmentDoc}
`;

/**
 * __useGetPreviewPostQuery__
 *
 * To run a query within a React component, call `useGetPreviewPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPreviewPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPreviewPostQuery({
 *   variables: {
 *      idPost: // value for 'idPost'
 *      idTypePost: // value for 'idTypePost'
 *   },
 * });
 */
export function useGetPreviewPostQuery(
	baseOptions: ApolloReactHooks.QueryHookOptions<
		GetPreviewPostQuery,
		GetPreviewPostQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<
		GetPreviewPostQuery,
		GetPreviewPostQueryVariables
	>(GetPreviewPostDocument, baseOptions);
}
export function useGetPreviewPostLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		GetPreviewPostQuery,
		GetPreviewPostQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<
		GetPreviewPostQuery,
		GetPreviewPostQueryVariables
	>(GetPreviewPostDocument, baseOptions);
}
export type GetPreviewPostQueryHookResult = ReturnType<
	typeof useGetPreviewPostQuery
>;
export type GetPreviewPostLazyQueryHookResult = ReturnType<
	typeof useGetPreviewPostLazyQuery
>;
export type GetPreviewPostQueryResult = Apollo.QueryResult<
	GetPreviewPostQuery,
	GetPreviewPostQueryVariables
>;
export const HeaderFooterDocument = gql`
	query HeaderFooter(
		$idHead: ID!
		$idTypeHead: MenuNodeIdTypeEnum!
		$idFoot: ID!
		$idTypeFoot: MenuNodeIdTypeEnum!
	) {
		headerDynamic: menu(id: $idHead, idType: $idTypeHead) {
			menuItems(where: { parentId: 0 }) {
				edges {
					node {
						...MenuFragment
						childItems {
							edges {
								node {
									...MenuFragment
								}
							}
						}
					}
				}
			}
		}
		footerDynamic: menu(id: $idFoot, idType: $idTypeFoot) {
			menuItems(where: { parentId: 0 }) {
				edges {
					node {
						...MenuFragment
						childItems {
							edges {
								node {
									...MenuFragment
								}
							}
						}
					}
				}
			}
		}
	}
	${MenuFragmentFragmentDoc}
`;

/**
 * __useHeaderFooterQuery__
 *
 * To run a query within a React component, call `useHeaderFooterQuery` and pass it any options that fit your needs.
 * When your component renders, `useHeaderFooterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHeaderFooterQuery({
 *   variables: {
 *      idHead: // value for 'idHead'
 *      idTypeHead: // value for 'idTypeHead'
 *      idFoot: // value for 'idFoot'
 *      idTypeFoot: // value for 'idTypeFoot'
 *   },
 * });
 */
export function useHeaderFooterQuery(
	baseOptions: ApolloReactHooks.QueryHookOptions<
		HeaderFooterQuery,
		HeaderFooterQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<
		HeaderFooterQuery,
		HeaderFooterQueryVariables
	>(HeaderFooterDocument, baseOptions);
}
export function useHeaderFooterLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		HeaderFooterQuery,
		HeaderFooterQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<
		HeaderFooterQuery,
		HeaderFooterQueryVariables
	>(HeaderFooterDocument, baseOptions);
}
export type HeaderFooterQueryHookResult = ReturnType<
	typeof useHeaderFooterQuery
>;
export type HeaderFooterLazyQueryHookResult = ReturnType<
	typeof useHeaderFooterLazyQuery
>;
export type HeaderFooterQueryResult = Apollo.QueryResult<
	HeaderFooterQuery,
	HeaderFooterQueryVariables
>;
export const LandingPageDocument = gql`
	query LandingPage($name: String!) {
		pages(where: { name: $name }) {
			edges {
				node {
					...CustomPageFields
				}
			}
		}
	}
	${CustomPageFieldsFragmentDoc}
`;

/**
 * __useLandingPageQuery__
 *
 * To run a query within a React component, call `useLandingPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useLandingPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLandingPageQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useLandingPageQuery(
	baseOptions: ApolloReactHooks.QueryHookOptions<
		LandingPageQuery,
		LandingPageQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<LandingPageQuery, LandingPageQueryVariables>(
		LandingPageDocument,
		baseOptions
	);
}
export function useLandingPageLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		LandingPageQuery,
		LandingPageQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<
		LandingPageQuery,
		LandingPageQueryVariables
	>(LandingPageDocument, baseOptions);
}
export type LandingPageQueryHookResult = ReturnType<typeof useLandingPageQuery>;
export type LandingPageLazyQueryHookResult = ReturnType<
	typeof useLandingPageLazyQuery
>;
export type LandingPageQueryResult = Apollo.QueryResult<
	LandingPageQuery,
	LandingPageQueryVariables
>;
export type RootQueryKeySpecifier = (
	| 'about'
	| 'aboutBy'
	| 'abouts'
	| 'allSettings'
	| 'categories'
	| 'category'
	| 'comment'
	| 'comments'
	| 'consultant'
	| 'consultantBy'
	| 'consultants'
	| 'contentNode'
	| 'contentNodes'
	| 'contentType'
	| 'contentTypes'
	| 'discussionSettings'
	| 'generalSettings'
	| 'mediaItem'
	| 'mediaItemBy'
	| 'mediaItems'
	| 'menu'
	| 'menuItem'
	| 'menuItems'
	| 'menus'
	| 'node'
	| 'nodeByUri'
	| 'page'
	| 'pageBy'
	| 'pages'
	| 'plugin'
	| 'plugins'
	| 'position'
	| 'positionBy'
	| 'positions'
	| 'post'
	| 'postBy'
	| 'postFormat'
	| 'postFormats'
	| 'posts'
	| 'readingSettings'
	| 'registeredScripts'
	| 'registeredStylesheets'
	| 'revisions'
	| 'seo'
	| 'tag'
	| 'tags'
	| 'taxonomies'
	| 'taxonomy'
	| 'termNode'
	| 'terms'
	| 'testimonial'
	| 'testimonialBy'
	| 'testimonials'
	| 'theme'
	| 'themes'
	| 'user'
	| 'userRole'
	| 'userRoles'
	| 'users'
	| 'viewer'
	| 'writingSettings'
	| RootQueryKeySpecifier
)[];
export type RootQueryFieldPolicy = {
	about?: FieldPolicy<any> | FieldReadFunction<any>;
	aboutBy?: FieldPolicy<any> | FieldReadFunction<any>;
	abouts?: FieldPolicy<any> | FieldReadFunction<any>;
	allSettings?: FieldPolicy<any> | FieldReadFunction<any>;
	categories?: FieldPolicy<any> | FieldReadFunction<any>;
	category?: FieldPolicy<any> | FieldReadFunction<any>;
	comment?: FieldPolicy<any> | FieldReadFunction<any>;
	comments?: FieldPolicy<any> | FieldReadFunction<any>;
	consultant?: FieldPolicy<any> | FieldReadFunction<any>;
	consultantBy?: FieldPolicy<any> | FieldReadFunction<any>;
	consultants?: FieldPolicy<any> | FieldReadFunction<any>;
	contentNode?: FieldPolicy<any> | FieldReadFunction<any>;
	contentNodes?: FieldPolicy<any> | FieldReadFunction<any>;
	contentType?: FieldPolicy<any> | FieldReadFunction<any>;
	contentTypes?: FieldPolicy<any> | FieldReadFunction<any>;
	discussionSettings?: FieldPolicy<any> | FieldReadFunction<any>;
	generalSettings?: FieldPolicy<any> | FieldReadFunction<any>;
	mediaItem?: FieldPolicy<any> | FieldReadFunction<any>;
	mediaItemBy?: FieldPolicy<any> | FieldReadFunction<any>;
	mediaItems?: FieldPolicy<any> | FieldReadFunction<any>;
	menu?: FieldPolicy<any> | FieldReadFunction<any>;
	menuItem?: FieldPolicy<any> | FieldReadFunction<any>;
	menuItems?: FieldPolicy<any> | FieldReadFunction<any>;
	menus?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
	nodeByUri?: FieldPolicy<any> | FieldReadFunction<any>;
	page?: FieldPolicy<any> | FieldReadFunction<any>;
	pageBy?: FieldPolicy<any> | FieldReadFunction<any>;
	pages?: FieldPolicy<any> | FieldReadFunction<any>;
	plugin?: FieldPolicy<any> | FieldReadFunction<any>;
	plugins?: FieldPolicy<any> | FieldReadFunction<any>;
	position?: FieldPolicy<any> | FieldReadFunction<any>;
	positionBy?: FieldPolicy<any> | FieldReadFunction<any>;
	positions?: FieldPolicy<any> | FieldReadFunction<any>;
	post?: FieldPolicy<any> | FieldReadFunction<any>;
	postBy?: FieldPolicy<any> | FieldReadFunction<any>;
	postFormat?: FieldPolicy<any> | FieldReadFunction<any>;
	postFormats?: FieldPolicy<any> | FieldReadFunction<any>;
	posts?: FieldPolicy<any> | FieldReadFunction<any>;
	readingSettings?: FieldPolicy<any> | FieldReadFunction<any>;
	registeredScripts?: FieldPolicy<any> | FieldReadFunction<any>;
	registeredStylesheets?: FieldPolicy<any> | FieldReadFunction<any>;
	revisions?: FieldPolicy<any> | FieldReadFunction<any>;
	seo?: FieldPolicy<any> | FieldReadFunction<any>;
	tag?: FieldPolicy<any> | FieldReadFunction<any>;
	tags?: FieldPolicy<any> | FieldReadFunction<any>;
	taxonomies?: FieldPolicy<any> | FieldReadFunction<any>;
	taxonomy?: FieldPolicy<any> | FieldReadFunction<any>;
	termNode?: FieldPolicy<any> | FieldReadFunction<any>;
	terms?: FieldPolicy<any> | FieldReadFunction<any>;
	testimonial?: FieldPolicy<any> | FieldReadFunction<any>;
	testimonialBy?: FieldPolicy<any> | FieldReadFunction<any>;
	testimonials?: FieldPolicy<any> | FieldReadFunction<any>;
	theme?: FieldPolicy<any> | FieldReadFunction<any>;
	themes?: FieldPolicy<any> | FieldReadFunction<any>;
	user?: FieldPolicy<any> | FieldReadFunction<any>;
	userRole?: FieldPolicy<any> | FieldReadFunction<any>;
	userRoles?: FieldPolicy<any> | FieldReadFunction<any>;
	users?: FieldPolicy<any> | FieldReadFunction<any>;
	viewer?: FieldPolicy<any> | FieldReadFunction<any>;
	writingSettings?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AboutKeySpecifier = (
	| 'aboutId'
	| 'author'
	| 'authorDatabaseId'
	| 'authorId'
	| 'categories'
	| 'commentCount'
	| 'commentStatus'
	| 'comments'
	| 'content'
	| 'contentType'
	| 'databaseId'
	| 'date'
	| 'dateGmt'
	| 'desiredSlug'
	| 'editingLockedBy'
	| 'enclosure'
	| 'enqueuedScripts'
	| 'enqueuedStylesheets'
	| 'excerpt'
	| 'featuredImage'
	| 'featuredImageDatabaseId'
	| 'featuredImageId'
	| 'guid'
	| 'id'
	| 'isPreview'
	| 'isRestricted'
	| 'isRevision'
	| 'lastEditedBy'
	| 'link'
	| 'menuOrder'
	| 'modified'
	| 'modifiedGmt'
	| 'pingStatus'
	| 'pinged'
	| 'postFormats'
	| 'preview'
	| 'previewRevisionDatabaseId'
	| 'previewRevisionId'
	| 'revisionOf'
	| 'revisions'
	| 'seo'
	| 'slug'
	| 'social'
	| 'status'
	| 'template'
	| 'title'
	| 'toPing'
	| 'uri'
	| AboutKeySpecifier
)[];
export type AboutFieldPolicy = {
	aboutId?: FieldPolicy<any> | FieldReadFunction<any>;
	author?: FieldPolicy<any> | FieldReadFunction<any>;
	authorDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	authorId?: FieldPolicy<any> | FieldReadFunction<any>;
	categories?: FieldPolicy<any> | FieldReadFunction<any>;
	commentCount?: FieldPolicy<any> | FieldReadFunction<any>;
	commentStatus?: FieldPolicy<any> | FieldReadFunction<any>;
	comments?: FieldPolicy<any> | FieldReadFunction<any>;
	content?: FieldPolicy<any> | FieldReadFunction<any>;
	contentType?: FieldPolicy<any> | FieldReadFunction<any>;
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	date?: FieldPolicy<any> | FieldReadFunction<any>;
	dateGmt?: FieldPolicy<any> | FieldReadFunction<any>;
	desiredSlug?: FieldPolicy<any> | FieldReadFunction<any>;
	editingLockedBy?: FieldPolicy<any> | FieldReadFunction<any>;
	enclosure?: FieldPolicy<any> | FieldReadFunction<any>;
	enqueuedScripts?: FieldPolicy<any> | FieldReadFunction<any>;
	enqueuedStylesheets?: FieldPolicy<any> | FieldReadFunction<any>;
	excerpt?: FieldPolicy<any> | FieldReadFunction<any>;
	featuredImage?: FieldPolicy<any> | FieldReadFunction<any>;
	featuredImageDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	featuredImageId?: FieldPolicy<any> | FieldReadFunction<any>;
	guid?: FieldPolicy<any> | FieldReadFunction<any>;
	id?: FieldPolicy<any> | FieldReadFunction<any>;
	isPreview?: FieldPolicy<any> | FieldReadFunction<any>;
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
	isRevision?: FieldPolicy<any> | FieldReadFunction<any>;
	lastEditedBy?: FieldPolicy<any> | FieldReadFunction<any>;
	link?: FieldPolicy<any> | FieldReadFunction<any>;
	menuOrder?: FieldPolicy<any> | FieldReadFunction<any>;
	modified?: FieldPolicy<any> | FieldReadFunction<any>;
	modifiedGmt?: FieldPolicy<any> | FieldReadFunction<any>;
	pingStatus?: FieldPolicy<any> | FieldReadFunction<any>;
	pinged?: FieldPolicy<any> | FieldReadFunction<any>;
	postFormats?: FieldPolicy<any> | FieldReadFunction<any>;
	preview?: FieldPolicy<any> | FieldReadFunction<any>;
	previewRevisionDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	previewRevisionId?: FieldPolicy<any> | FieldReadFunction<any>;
	revisionOf?: FieldPolicy<any> | FieldReadFunction<any>;
	revisions?: FieldPolicy<any> | FieldReadFunction<any>;
	seo?: FieldPolicy<any> | FieldReadFunction<any>;
	slug?: FieldPolicy<any> | FieldReadFunction<any>;
	social?: FieldPolicy<any> | FieldReadFunction<any>;
	status?: FieldPolicy<any> | FieldReadFunction<any>;
	template?: FieldPolicy<any> | FieldReadFunction<any>;
	title?: FieldPolicy<any> | FieldReadFunction<any>;
	toPing?: FieldPolicy<any> | FieldReadFunction<any>;
	uri?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NodeKeySpecifier = ('id' | NodeKeySpecifier)[];
export type NodeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ContentNodeKeySpecifier = (
	| 'contentType'
	| 'databaseId'
	| 'date'
	| 'dateGmt'
	| 'desiredSlug'
	| 'editingLockedBy'
	| 'enclosure'
	| 'enqueuedScripts'
	| 'enqueuedStylesheets'
	| 'guid'
	| 'id'
	| 'isPreview'
	| 'isRestricted'
	| 'lastEditedBy'
	| 'link'
	| 'modified'
	| 'modifiedGmt'
	| 'previewRevisionDatabaseId'
	| 'previewRevisionId'
	| 'slug'
	| 'status'
	| 'template'
	| 'uri'
	| ContentNodeKeySpecifier
)[];
export type ContentNodeFieldPolicy = {
	contentType?: FieldPolicy<any> | FieldReadFunction<any>;
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	date?: FieldPolicy<any> | FieldReadFunction<any>;
	dateGmt?: FieldPolicy<any> | FieldReadFunction<any>;
	desiredSlug?: FieldPolicy<any> | FieldReadFunction<any>;
	editingLockedBy?: FieldPolicy<any> | FieldReadFunction<any>;
	enclosure?: FieldPolicy<any> | FieldReadFunction<any>;
	enqueuedScripts?: FieldPolicy<any> | FieldReadFunction<any>;
	enqueuedStylesheets?: FieldPolicy<any> | FieldReadFunction<any>;
	guid?: FieldPolicy<any> | FieldReadFunction<any>;
	id?: FieldPolicy<any> | FieldReadFunction<any>;
	isPreview?: FieldPolicy<any> | FieldReadFunction<any>;
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
	lastEditedBy?: FieldPolicy<any> | FieldReadFunction<any>;
	link?: FieldPolicy<any> | FieldReadFunction<any>;
	modified?: FieldPolicy<any> | FieldReadFunction<any>;
	modifiedGmt?: FieldPolicy<any> | FieldReadFunction<any>;
	previewRevisionDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	previewRevisionId?: FieldPolicy<any> | FieldReadFunction<any>;
	slug?: FieldPolicy<any> | FieldReadFunction<any>;
	status?: FieldPolicy<any> | FieldReadFunction<any>;
	template?: FieldPolicy<any> | FieldReadFunction<any>;
	uri?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ContentNodeToContentTypeConnectionEdgeKeySpecifier = (
	| 'node'
	| ContentNodeToContentTypeConnectionEdgeKeySpecifier
)[];
export type ContentNodeToContentTypeConnectionEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ContentTypeKeySpecifier = (
	| 'canExport'
	| 'connectedTaxonomies'
	| 'contentNodes'
	| 'deleteWithUser'
	| 'description'
	| 'excludeFromSearch'
	| 'graphqlPluralName'
	| 'graphqlSingleName'
	| 'hasArchive'
	| 'hierarchical'
	| 'id'
	| 'isFrontPage'
	| 'isPostsPage'
	| 'isRestricted'
	| 'label'
	| 'labels'
	| 'menuIcon'
	| 'menuPosition'
	| 'name'
	| 'public'
	| 'publiclyQueryable'
	| 'restBase'
	| 'restControllerClass'
	| 'showInAdminBar'
	| 'showInGraphql'
	| 'showInMenu'
	| 'showInNavMenus'
	| 'showInRest'
	| 'showUi'
	| 'uri'
	| ContentTypeKeySpecifier
)[];
export type ContentTypeFieldPolicy = {
	canExport?: FieldPolicy<any> | FieldReadFunction<any>;
	connectedTaxonomies?: FieldPolicy<any> | FieldReadFunction<any>;
	contentNodes?: FieldPolicy<any> | FieldReadFunction<any>;
	deleteWithUser?: FieldPolicy<any> | FieldReadFunction<any>;
	description?: FieldPolicy<any> | FieldReadFunction<any>;
	excludeFromSearch?: FieldPolicy<any> | FieldReadFunction<any>;
	graphqlPluralName?: FieldPolicy<any> | FieldReadFunction<any>;
	graphqlSingleName?: FieldPolicy<any> | FieldReadFunction<any>;
	hasArchive?: FieldPolicy<any> | FieldReadFunction<any>;
	hierarchical?: FieldPolicy<any> | FieldReadFunction<any>;
	id?: FieldPolicy<any> | FieldReadFunction<any>;
	isFrontPage?: FieldPolicy<any> | FieldReadFunction<any>;
	isPostsPage?: FieldPolicy<any> | FieldReadFunction<any>;
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
	label?: FieldPolicy<any> | FieldReadFunction<any>;
	labels?: FieldPolicy<any> | FieldReadFunction<any>;
	menuIcon?: FieldPolicy<any> | FieldReadFunction<any>;
	menuPosition?: FieldPolicy<any> | FieldReadFunction<any>;
	name?: FieldPolicy<any> | FieldReadFunction<any>;
	public?: FieldPolicy<any> | FieldReadFunction<any>;
	publiclyQueryable?: FieldPolicy<any> | FieldReadFunction<any>;
	restBase?: FieldPolicy<any> | FieldReadFunction<any>;
	restControllerClass?: FieldPolicy<any> | FieldReadFunction<any>;
	showInAdminBar?: FieldPolicy<any> | FieldReadFunction<any>;
	showInGraphql?: FieldPolicy<any> | FieldReadFunction<any>;
	showInMenu?: FieldPolicy<any> | FieldReadFunction<any>;
	showInNavMenus?: FieldPolicy<any> | FieldReadFunction<any>;
	showInRest?: FieldPolicy<any> | FieldReadFunction<any>;
	showUi?: FieldPolicy<any> | FieldReadFunction<any>;
	uri?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UniformResourceIdentifiableKeySpecifier = (
	| 'id'
	| 'uri'
	| UniformResourceIdentifiableKeySpecifier
)[];
export type UniformResourceIdentifiableFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>;
	uri?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ContentTypeToTaxonomyConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| ContentTypeToTaxonomyConnectionKeySpecifier
)[];
export type ContentTypeToTaxonomyConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ContentTypeToTaxonomyConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| ContentTypeToTaxonomyConnectionEdgeKeySpecifier
)[];
export type ContentTypeToTaxonomyConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TaxonomyKeySpecifier = (
	| 'connectedContentTypes'
	| 'description'
	| 'graphqlPluralName'
	| 'graphqlSingleName'
	| 'hierarchical'
	| 'id'
	| 'isRestricted'
	| 'label'
	| 'name'
	| 'public'
	| 'restBase'
	| 'restControllerClass'
	| 'showCloud'
	| 'showInAdminColumn'
	| 'showInGraphql'
	| 'showInMenu'
	| 'showInNavMenus'
	| 'showInQuickEdit'
	| 'showInRest'
	| 'showUi'
	| TaxonomyKeySpecifier
)[];
export type TaxonomyFieldPolicy = {
	connectedContentTypes?: FieldPolicy<any> | FieldReadFunction<any>;
	description?: FieldPolicy<any> | FieldReadFunction<any>;
	graphqlPluralName?: FieldPolicy<any> | FieldReadFunction<any>;
	graphqlSingleName?: FieldPolicy<any> | FieldReadFunction<any>;
	hierarchical?: FieldPolicy<any> | FieldReadFunction<any>;
	id?: FieldPolicy<any> | FieldReadFunction<any>;
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
	label?: FieldPolicy<any> | FieldReadFunction<any>;
	name?: FieldPolicy<any> | FieldReadFunction<any>;
	public?: FieldPolicy<any> | FieldReadFunction<any>;
	restBase?: FieldPolicy<any> | FieldReadFunction<any>;
	restControllerClass?: FieldPolicy<any> | FieldReadFunction<any>;
	showCloud?: FieldPolicy<any> | FieldReadFunction<any>;
	showInAdminColumn?: FieldPolicy<any> | FieldReadFunction<any>;
	showInGraphql?: FieldPolicy<any> | FieldReadFunction<any>;
	showInMenu?: FieldPolicy<any> | FieldReadFunction<any>;
	showInNavMenus?: FieldPolicy<any> | FieldReadFunction<any>;
	showInQuickEdit?: FieldPolicy<any> | FieldReadFunction<any>;
	showInRest?: FieldPolicy<any> | FieldReadFunction<any>;
	showUi?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TaxonomyToContentTypeConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| TaxonomyToContentTypeConnectionKeySpecifier
)[];
export type TaxonomyToContentTypeConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TaxonomyToContentTypeConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| TaxonomyToContentTypeConnectionEdgeKeySpecifier
)[];
export type TaxonomyToContentTypeConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type WPPageInfoKeySpecifier = (
	| 'endCursor'
	| 'hasNextPage'
	| 'hasPreviousPage'
	| 'seo'
	| 'startCursor'
	| WPPageInfoKeySpecifier
)[];
export type WPPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>;
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>;
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>;
	seo?: FieldPolicy<any> | FieldReadFunction<any>;
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOPostTypePageInfoKeySpecifier = (
	| 'schema'
	| SEOPostTypePageInfoKeySpecifier
)[];
export type SEOPostTypePageInfoFieldPolicy = {
	schema?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOPageInfoSchemaKeySpecifier = (
	| 'raw'
	| SEOPageInfoSchemaKeySpecifier
)[];
export type SEOPageInfoSchemaFieldPolicy = {
	raw?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ContentTypeToContentNodeConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| ContentTypeToContentNodeConnectionKeySpecifier
)[];
export type ContentTypeToContentNodeConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ContentTypeToContentNodeConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| ContentTypeToContentNodeConnectionEdgeKeySpecifier
)[];
export type ContentTypeToContentNodeConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostTypeLabelDetailsKeySpecifier = (
	| 'addNew'
	| 'addNewItem'
	| 'allItems'
	| 'archives'
	| 'attributes'
	| 'editItem'
	| 'featuredImage'
	| 'filterItemsList'
	| 'insertIntoItem'
	| 'itemsList'
	| 'itemsListNavigation'
	| 'menuName'
	| 'name'
	| 'newItem'
	| 'notFound'
	| 'notFoundInTrash'
	| 'parentItemColon'
	| 'removeFeaturedImage'
	| 'searchItems'
	| 'setFeaturedImage'
	| 'singularName'
	| 'uploadedToThisItem'
	| 'useFeaturedImage'
	| 'viewItem'
	| 'viewItems'
	| PostTypeLabelDetailsKeySpecifier
)[];
export type PostTypeLabelDetailsFieldPolicy = {
	addNew?: FieldPolicy<any> | FieldReadFunction<any>;
	addNewItem?: FieldPolicy<any> | FieldReadFunction<any>;
	allItems?: FieldPolicy<any> | FieldReadFunction<any>;
	archives?: FieldPolicy<any> | FieldReadFunction<any>;
	attributes?: FieldPolicy<any> | FieldReadFunction<any>;
	editItem?: FieldPolicy<any> | FieldReadFunction<any>;
	featuredImage?: FieldPolicy<any> | FieldReadFunction<any>;
	filterItemsList?: FieldPolicy<any> | FieldReadFunction<any>;
	insertIntoItem?: FieldPolicy<any> | FieldReadFunction<any>;
	itemsList?: FieldPolicy<any> | FieldReadFunction<any>;
	itemsListNavigation?: FieldPolicy<any> | FieldReadFunction<any>;
	menuName?: FieldPolicy<any> | FieldReadFunction<any>;
	name?: FieldPolicy<any> | FieldReadFunction<any>;
	newItem?: FieldPolicy<any> | FieldReadFunction<any>;
	notFound?: FieldPolicy<any> | FieldReadFunction<any>;
	notFoundInTrash?: FieldPolicy<any> | FieldReadFunction<any>;
	parentItemColon?: FieldPolicy<any> | FieldReadFunction<any>;
	removeFeaturedImage?: FieldPolicy<any> | FieldReadFunction<any>;
	searchItems?: FieldPolicy<any> | FieldReadFunction<any>;
	setFeaturedImage?: FieldPolicy<any> | FieldReadFunction<any>;
	singularName?: FieldPolicy<any> | FieldReadFunction<any>;
	uploadedToThisItem?: FieldPolicy<any> | FieldReadFunction<any>;
	useFeaturedImage?: FieldPolicy<any> | FieldReadFunction<any>;
	viewItem?: FieldPolicy<any> | FieldReadFunction<any>;
	viewItems?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ContentNodeToEditLockConnectionEdgeKeySpecifier = (
	| 'lockTimestamp'
	| 'node'
	| ContentNodeToEditLockConnectionEdgeKeySpecifier
)[];
export type ContentNodeToEditLockConnectionEdgeFieldPolicy = {
	lockTimestamp?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserKeySpecifier = (
	| 'abouts'
	| 'avatar'
	| 'capKey'
	| 'capabilities'
	| 'comments'
	| 'consultants'
	| 'databaseId'
	| 'description'
	| 'email'
	| 'enqueuedScripts'
	| 'enqueuedStylesheets'
	| 'extraCapabilities'
	| 'firstName'
	| 'id'
	| 'isJwtAuthSecretRevoked'
	| 'isRestricted'
	| 'jwtAuthExpiration'
	| 'jwtAuthToken'
	| 'jwtRefreshToken'
	| 'jwtUserSecret'
	| 'lastName'
	| 'locale'
	| 'mediaItems'
	| 'name'
	| 'nicename'
	| 'nickname'
	| 'pages'
	| 'positions'
	| 'posts'
	| 'registeredDate'
	| 'revisions'
	| 'roles'
	| 'seo'
	| 'slug'
	| 'testimonials'
	| 'uri'
	| 'url'
	| 'userId'
	| 'username'
	| UserKeySpecifier
)[];
export type UserFieldPolicy = {
	abouts?: FieldPolicy<any> | FieldReadFunction<any>;
	avatar?: FieldPolicy<any> | FieldReadFunction<any>;
	capKey?: FieldPolicy<any> | FieldReadFunction<any>;
	capabilities?: FieldPolicy<any> | FieldReadFunction<any>;
	comments?: FieldPolicy<any> | FieldReadFunction<any>;
	consultants?: FieldPolicy<any> | FieldReadFunction<any>;
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	description?: FieldPolicy<any> | FieldReadFunction<any>;
	email?: FieldPolicy<any> | FieldReadFunction<any>;
	enqueuedScripts?: FieldPolicy<any> | FieldReadFunction<any>;
	enqueuedStylesheets?: FieldPolicy<any> | FieldReadFunction<any>;
	extraCapabilities?: FieldPolicy<any> | FieldReadFunction<any>;
	firstName?: FieldPolicy<any> | FieldReadFunction<any>;
	id?: FieldPolicy<any> | FieldReadFunction<any>;
	isJwtAuthSecretRevoked?: FieldPolicy<any> | FieldReadFunction<any>;
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
	jwtAuthExpiration?: FieldPolicy<any> | FieldReadFunction<any>;
	jwtAuthToken?: FieldPolicy<any> | FieldReadFunction<any>;
	jwtRefreshToken?: FieldPolicy<any> | FieldReadFunction<any>;
	jwtUserSecret?: FieldPolicy<any> | FieldReadFunction<any>;
	lastName?: FieldPolicy<any> | FieldReadFunction<any>;
	locale?: FieldPolicy<any> | FieldReadFunction<any>;
	mediaItems?: FieldPolicy<any> | FieldReadFunction<any>;
	name?: FieldPolicy<any> | FieldReadFunction<any>;
	nicename?: FieldPolicy<any> | FieldReadFunction<any>;
	nickname?: FieldPolicy<any> | FieldReadFunction<any>;
	pages?: FieldPolicy<any> | FieldReadFunction<any>;
	positions?: FieldPolicy<any> | FieldReadFunction<any>;
	posts?: FieldPolicy<any> | FieldReadFunction<any>;
	registeredDate?: FieldPolicy<any> | FieldReadFunction<any>;
	revisions?: FieldPolicy<any> | FieldReadFunction<any>;
	roles?: FieldPolicy<any> | FieldReadFunction<any>;
	seo?: FieldPolicy<any> | FieldReadFunction<any>;
	slug?: FieldPolicy<any> | FieldReadFunction<any>;
	testimonials?: FieldPolicy<any> | FieldReadFunction<any>;
	uri?: FieldPolicy<any> | FieldReadFunction<any>;
	url?: FieldPolicy<any> | FieldReadFunction<any>;
	userId?: FieldPolicy<any> | FieldReadFunction<any>;
	username?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CommenterKeySpecifier = (
	| 'databaseId'
	| 'email'
	| 'id'
	| 'isRestricted'
	| 'name'
	| 'url'
	| CommenterKeySpecifier
)[];
export type CommenterFieldPolicy = {
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	email?: FieldPolicy<any> | FieldReadFunction<any>;
	id?: FieldPolicy<any> | FieldReadFunction<any>;
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
	name?: FieldPolicy<any> | FieldReadFunction<any>;
	url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DatabaseIdentifierKeySpecifier = (
	| 'databaseId'
	| DatabaseIdentifierKeySpecifier
)[];
export type DatabaseIdentifierFieldPolicy = {
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToAboutConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| UserToAboutConnectionKeySpecifier
)[];
export type UserToAboutConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToAboutConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| UserToAboutConnectionEdgeKeySpecifier
)[];
export type UserToAboutConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AvatarKeySpecifier = (
	| 'default'
	| 'extraAttr'
	| 'forceDefault'
	| 'foundAvatar'
	| 'height'
	| 'isRestricted'
	| 'rating'
	| 'scheme'
	| 'size'
	| 'url'
	| 'width'
	| AvatarKeySpecifier
)[];
export type AvatarFieldPolicy = {
	default?: FieldPolicy<any> | FieldReadFunction<any>;
	extraAttr?: FieldPolicy<any> | FieldReadFunction<any>;
	forceDefault?: FieldPolicy<any> | FieldReadFunction<any>;
	foundAvatar?: FieldPolicy<any> | FieldReadFunction<any>;
	height?: FieldPolicy<any> | FieldReadFunction<any>;
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
	rating?: FieldPolicy<any> | FieldReadFunction<any>;
	scheme?: FieldPolicy<any> | FieldReadFunction<any>;
	size?: FieldPolicy<any> | FieldReadFunction<any>;
	url?: FieldPolicy<any> | FieldReadFunction<any>;
	width?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToCommentConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| UserToCommentConnectionKeySpecifier
)[];
export type UserToCommentConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToCommentConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| UserToCommentConnectionEdgeKeySpecifier
)[];
export type UserToCommentConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CommentKeySpecifier = (
	| 'agent'
	| 'approved'
	| 'author'
	| 'authorIp'
	| 'commentId'
	| 'commentedOn'
	| 'content'
	| 'databaseId'
	| 'date'
	| 'dateGmt'
	| 'id'
	| 'isRestricted'
	| 'karma'
	| 'parent'
	| 'parentDatabaseId'
	| 'parentId'
	| 'replies'
	| 'type'
	| CommentKeySpecifier
)[];
export type CommentFieldPolicy = {
	agent?: FieldPolicy<any> | FieldReadFunction<any>;
	approved?: FieldPolicy<any> | FieldReadFunction<any>;
	author?: FieldPolicy<any> | FieldReadFunction<any>;
	authorIp?: FieldPolicy<any> | FieldReadFunction<any>;
	commentId?: FieldPolicy<any> | FieldReadFunction<any>;
	commentedOn?: FieldPolicy<any> | FieldReadFunction<any>;
	content?: FieldPolicy<any> | FieldReadFunction<any>;
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	date?: FieldPolicy<any> | FieldReadFunction<any>;
	dateGmt?: FieldPolicy<any> | FieldReadFunction<any>;
	id?: FieldPolicy<any> | FieldReadFunction<any>;
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
	karma?: FieldPolicy<any> | FieldReadFunction<any>;
	parent?: FieldPolicy<any> | FieldReadFunction<any>;
	parentDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	parentId?: FieldPolicy<any> | FieldReadFunction<any>;
	replies?: FieldPolicy<any> | FieldReadFunction<any>;
	type?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CommentToCommenterConnectionEdgeKeySpecifier = (
	| 'node'
	| CommentToCommenterConnectionEdgeKeySpecifier
)[];
export type CommentToCommenterConnectionEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CommentToContentNodeConnectionEdgeKeySpecifier = (
	| 'node'
	| CommentToContentNodeConnectionEdgeKeySpecifier
)[];
export type CommentToContentNodeConnectionEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CommentToParentCommentConnectionEdgeKeySpecifier = (
	| 'node'
	| CommentToParentCommentConnectionEdgeKeySpecifier
)[];
export type CommentToParentCommentConnectionEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CommentToCommentConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| CommentToCommentConnectionKeySpecifier
)[];
export type CommentToCommentConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CommentToCommentConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| CommentToCommentConnectionEdgeKeySpecifier
)[];
export type CommentToCommentConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToConsultantConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| UserToConsultantConnectionKeySpecifier
)[];
export type UserToConsultantConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToConsultantConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| UserToConsultantConnectionEdgeKeySpecifier
)[];
export type UserToConsultantConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ConsultantKeySpecifier = (
	| 'author'
	| 'authorDatabaseId'
	| 'authorId'
	| 'categories'
	| 'commentCount'
	| 'commentStatus'
	| 'comments'
	| 'consultantId'
	| 'content'
	| 'contentType'
	| 'databaseId'
	| 'date'
	| 'dateGmt'
	| 'desiredSlug'
	| 'editingLockedBy'
	| 'enclosure'
	| 'enqueuedScripts'
	| 'enqueuedStylesheets'
	| 'excerpt'
	| 'featuredImage'
	| 'featuredImageDatabaseId'
	| 'featuredImageId'
	| 'guid'
	| 'id'
	| 'isPreview'
	| 'isRestricted'
	| 'isRevision'
	| 'lastEditedBy'
	| 'link'
	| 'menuOrder'
	| 'modified'
	| 'modifiedGmt'
	| 'pingStatus'
	| 'pinged'
	| 'postFormats'
	| 'preview'
	| 'previewRevisionDatabaseId'
	| 'previewRevisionId'
	| 'revisionOf'
	| 'revisions'
	| 'seo'
	| 'slug'
	| 'social'
	| 'status'
	| 'template'
	| 'title'
	| 'toPing'
	| 'uri'
	| ConsultantKeySpecifier
)[];
export type ConsultantFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>;
	authorDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	authorId?: FieldPolicy<any> | FieldReadFunction<any>;
	categories?: FieldPolicy<any> | FieldReadFunction<any>;
	commentCount?: FieldPolicy<any> | FieldReadFunction<any>;
	commentStatus?: FieldPolicy<any> | FieldReadFunction<any>;
	comments?: FieldPolicy<any> | FieldReadFunction<any>;
	consultantId?: FieldPolicy<any> | FieldReadFunction<any>;
	content?: FieldPolicy<any> | FieldReadFunction<any>;
	contentType?: FieldPolicy<any> | FieldReadFunction<any>;
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	date?: FieldPolicy<any> | FieldReadFunction<any>;
	dateGmt?: FieldPolicy<any> | FieldReadFunction<any>;
	desiredSlug?: FieldPolicy<any> | FieldReadFunction<any>;
	editingLockedBy?: FieldPolicy<any> | FieldReadFunction<any>;
	enclosure?: FieldPolicy<any> | FieldReadFunction<any>;
	enqueuedScripts?: FieldPolicy<any> | FieldReadFunction<any>;
	enqueuedStylesheets?: FieldPolicy<any> | FieldReadFunction<any>;
	excerpt?: FieldPolicy<any> | FieldReadFunction<any>;
	featuredImage?: FieldPolicy<any> | FieldReadFunction<any>;
	featuredImageDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	featuredImageId?: FieldPolicy<any> | FieldReadFunction<any>;
	guid?: FieldPolicy<any> | FieldReadFunction<any>;
	id?: FieldPolicy<any> | FieldReadFunction<any>;
	isPreview?: FieldPolicy<any> | FieldReadFunction<any>;
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
	isRevision?: FieldPolicy<any> | FieldReadFunction<any>;
	lastEditedBy?: FieldPolicy<any> | FieldReadFunction<any>;
	link?: FieldPolicy<any> | FieldReadFunction<any>;
	menuOrder?: FieldPolicy<any> | FieldReadFunction<any>;
	modified?: FieldPolicy<any> | FieldReadFunction<any>;
	modifiedGmt?: FieldPolicy<any> | FieldReadFunction<any>;
	pingStatus?: FieldPolicy<any> | FieldReadFunction<any>;
	pinged?: FieldPolicy<any> | FieldReadFunction<any>;
	postFormats?: FieldPolicy<any> | FieldReadFunction<any>;
	preview?: FieldPolicy<any> | FieldReadFunction<any>;
	previewRevisionDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	previewRevisionId?: FieldPolicy<any> | FieldReadFunction<any>;
	revisionOf?: FieldPolicy<any> | FieldReadFunction<any>;
	revisions?: FieldPolicy<any> | FieldReadFunction<any>;
	seo?: FieldPolicy<any> | FieldReadFunction<any>;
	slug?: FieldPolicy<any> | FieldReadFunction<any>;
	social?: FieldPolicy<any> | FieldReadFunction<any>;
	status?: FieldPolicy<any> | FieldReadFunction<any>;
	template?: FieldPolicy<any> | FieldReadFunction<any>;
	title?: FieldPolicy<any> | FieldReadFunction<any>;
	toPing?: FieldPolicy<any> | FieldReadFunction<any>;
	uri?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NodeWithTemplateKeySpecifier = (
	| 'template'
	| NodeWithTemplateKeySpecifier
)[];
export type NodeWithTemplateFieldPolicy = {
	template?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ContentTemplateKeySpecifier = (
	| 'templateName'
	| ContentTemplateKeySpecifier
)[];
export type ContentTemplateFieldPolicy = {
	templateName?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NodeWithTitleKeySpecifier = ('title' | NodeWithTitleKeySpecifier)[];
export type NodeWithTitleFieldPolicy = {
	title?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NodeWithContentEditorKeySpecifier = (
	| 'content'
	| NodeWithContentEditorKeySpecifier
)[];
export type NodeWithContentEditorFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NodeWithAuthorKeySpecifier = (
	| 'author'
	| 'authorDatabaseId'
	| 'authorId'
	| NodeWithAuthorKeySpecifier
)[];
export type NodeWithAuthorFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>;
	authorDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	authorId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NodeWithAuthorToUserConnectionEdgeKeySpecifier = (
	| 'node'
	| NodeWithAuthorToUserConnectionEdgeKeySpecifier
)[];
export type NodeWithAuthorToUserConnectionEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NodeWithFeaturedImageKeySpecifier = (
	| 'featuredImage'
	| 'featuredImageDatabaseId'
	| 'featuredImageId'
	| NodeWithFeaturedImageKeySpecifier
)[];
export type NodeWithFeaturedImageFieldPolicy = {
	featuredImage?: FieldPolicy<any> | FieldReadFunction<any>;
	featuredImageDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	featuredImageId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NodeWithFeaturedImageToMediaItemConnectionEdgeKeySpecifier = (
	| 'node'
	| NodeWithFeaturedImageToMediaItemConnectionEdgeKeySpecifier
)[];
export type NodeWithFeaturedImageToMediaItemConnectionEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MediaItemKeySpecifier = (
	| 'altText'
	| 'ancestors'
	| 'author'
	| 'authorDatabaseId'
	| 'authorId'
	| 'caption'
	| 'children'
	| 'commentCount'
	| 'commentStatus'
	| 'comments'
	| 'contentType'
	| 'databaseId'
	| 'date'
	| 'dateGmt'
	| 'description'
	| 'desiredSlug'
	| 'editingLockedBy'
	| 'enclosure'
	| 'enqueuedScripts'
	| 'enqueuedStylesheets'
	| 'fileSize'
	| 'guid'
	| 'id'
	| 'isPreview'
	| 'isRestricted'
	| 'lastEditedBy'
	| 'link'
	| 'mediaDetails'
	| 'mediaItemId'
	| 'mediaItemUrl'
	| 'mediaType'
	| 'mimeType'
	| 'modified'
	| 'modifiedGmt'
	| 'parent'
	| 'parentDatabaseId'
	| 'parentId'
	| 'previewRevisionDatabaseId'
	| 'previewRevisionId'
	| 'seo'
	| 'sizes'
	| 'slug'
	| 'sourceUrl'
	| 'srcSet'
	| 'status'
	| 'template'
	| 'title'
	| 'uri'
	| MediaItemKeySpecifier
)[];
export type MediaItemFieldPolicy = {
	altText?: FieldPolicy<any> | FieldReadFunction<any>;
	ancestors?: FieldPolicy<any> | FieldReadFunction<any>;
	author?: FieldPolicy<any> | FieldReadFunction<any>;
	authorDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	authorId?: FieldPolicy<any> | FieldReadFunction<any>;
	caption?: FieldPolicy<any> | FieldReadFunction<any>;
	children?: FieldPolicy<any> | FieldReadFunction<any>;
	commentCount?: FieldPolicy<any> | FieldReadFunction<any>;
	commentStatus?: FieldPolicy<any> | FieldReadFunction<any>;
	comments?: FieldPolicy<any> | FieldReadFunction<any>;
	contentType?: FieldPolicy<any> | FieldReadFunction<any>;
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	date?: FieldPolicy<any> | FieldReadFunction<any>;
	dateGmt?: FieldPolicy<any> | FieldReadFunction<any>;
	description?: FieldPolicy<any> | FieldReadFunction<any>;
	desiredSlug?: FieldPolicy<any> | FieldReadFunction<any>;
	editingLockedBy?: FieldPolicy<any> | FieldReadFunction<any>;
	enclosure?: FieldPolicy<any> | FieldReadFunction<any>;
	enqueuedScripts?: FieldPolicy<any> | FieldReadFunction<any>;
	enqueuedStylesheets?: FieldPolicy<any> | FieldReadFunction<any>;
	fileSize?: FieldPolicy<any> | FieldReadFunction<any>;
	guid?: FieldPolicy<any> | FieldReadFunction<any>;
	id?: FieldPolicy<any> | FieldReadFunction<any>;
	isPreview?: FieldPolicy<any> | FieldReadFunction<any>;
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
	lastEditedBy?: FieldPolicy<any> | FieldReadFunction<any>;
	link?: FieldPolicy<any> | FieldReadFunction<any>;
	mediaDetails?: FieldPolicy<any> | FieldReadFunction<any>;
	mediaItemId?: FieldPolicy<any> | FieldReadFunction<any>;
	mediaItemUrl?: FieldPolicy<any> | FieldReadFunction<any>;
	mediaType?: FieldPolicy<any> | FieldReadFunction<any>;
	mimeType?: FieldPolicy<any> | FieldReadFunction<any>;
	modified?: FieldPolicy<any> | FieldReadFunction<any>;
	modifiedGmt?: FieldPolicy<any> | FieldReadFunction<any>;
	parent?: FieldPolicy<any> | FieldReadFunction<any>;
	parentDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	parentId?: FieldPolicy<any> | FieldReadFunction<any>;
	previewRevisionDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	previewRevisionId?: FieldPolicy<any> | FieldReadFunction<any>;
	seo?: FieldPolicy<any> | FieldReadFunction<any>;
	sizes?: FieldPolicy<any> | FieldReadFunction<any>;
	slug?: FieldPolicy<any> | FieldReadFunction<any>;
	sourceUrl?: FieldPolicy<any> | FieldReadFunction<any>;
	srcSet?: FieldPolicy<any> | FieldReadFunction<any>;
	status?: FieldPolicy<any> | FieldReadFunction<any>;
	template?: FieldPolicy<any> | FieldReadFunction<any>;
	title?: FieldPolicy<any> | FieldReadFunction<any>;
	uri?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NodeWithCommentsKeySpecifier = (
	| 'commentCount'
	| 'commentStatus'
	| NodeWithCommentsKeySpecifier
)[];
export type NodeWithCommentsFieldPolicy = {
	commentCount?: FieldPolicy<any> | FieldReadFunction<any>;
	commentStatus?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type HierarchicalContentNodeKeySpecifier = (
	| 'ancestors'
	| 'children'
	| 'parent'
	| 'parentDatabaseId'
	| 'parentId'
	| HierarchicalContentNodeKeySpecifier
)[];
export type HierarchicalContentNodeFieldPolicy = {
	ancestors?: FieldPolicy<any> | FieldReadFunction<any>;
	children?: FieldPolicy<any> | FieldReadFunction<any>;
	parent?: FieldPolicy<any> | FieldReadFunction<any>;
	parentDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	parentId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type HierarchicalContentNodeToContentNodeAncestorsConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| HierarchicalContentNodeToContentNodeAncestorsConnectionKeySpecifier
)[];
export type HierarchicalContentNodeToContentNodeAncestorsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type HierarchicalContentNodeToContentNodeAncestorsConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| HierarchicalContentNodeToContentNodeAncestorsConnectionEdgeKeySpecifier
)[];
export type HierarchicalContentNodeToContentNodeAncestorsConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type HierarchicalContentNodeToContentNodeChildrenConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| HierarchicalContentNodeToContentNodeChildrenConnectionKeySpecifier
)[];
export type HierarchicalContentNodeToContentNodeChildrenConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type HierarchicalContentNodeToContentNodeChildrenConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| HierarchicalContentNodeToContentNodeChildrenConnectionEdgeKeySpecifier
)[];
export type HierarchicalContentNodeToContentNodeChildrenConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type HierarchicalContentNodeToParentContentNodeConnectionEdgeKeySpecifier = (
	| 'node'
	| HierarchicalContentNodeToParentContentNodeConnectionEdgeKeySpecifier
)[];
export type HierarchicalContentNodeToParentContentNodeConnectionEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MediaItemToCommentConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| MediaItemToCommentConnectionKeySpecifier
)[];
export type MediaItemToCommentConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MediaItemToCommentConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| MediaItemToCommentConnectionEdgeKeySpecifier
)[];
export type MediaItemToCommentConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ContentNodeToEnqueuedScriptConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| ContentNodeToEnqueuedScriptConnectionKeySpecifier
)[];
export type ContentNodeToEnqueuedScriptConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ContentNodeToEnqueuedScriptConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| ContentNodeToEnqueuedScriptConnectionEdgeKeySpecifier
)[];
export type ContentNodeToEnqueuedScriptConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type EnqueuedScriptKeySpecifier = (
	| 'args'
	| 'dependencies'
	| 'extra'
	| 'handle'
	| 'id'
	| 'src'
	| 'version'
	| EnqueuedScriptKeySpecifier
)[];
export type EnqueuedScriptFieldPolicy = {
	args?: FieldPolicy<any> | FieldReadFunction<any>;
	dependencies?: FieldPolicy<any> | FieldReadFunction<any>;
	extra?: FieldPolicy<any> | FieldReadFunction<any>;
	handle?: FieldPolicy<any> | FieldReadFunction<any>;
	id?: FieldPolicy<any> | FieldReadFunction<any>;
	src?: FieldPolicy<any> | FieldReadFunction<any>;
	version?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type EnqueuedAssetKeySpecifier = (
	| 'args'
	| 'dependencies'
	| 'extra'
	| 'handle'
	| 'id'
	| 'src'
	| 'version'
	| EnqueuedAssetKeySpecifier
)[];
export type EnqueuedAssetFieldPolicy = {
	args?: FieldPolicy<any> | FieldReadFunction<any>;
	dependencies?: FieldPolicy<any> | FieldReadFunction<any>;
	extra?: FieldPolicy<any> | FieldReadFunction<any>;
	handle?: FieldPolicy<any> | FieldReadFunction<any>;
	id?: FieldPolicy<any> | FieldReadFunction<any>;
	src?: FieldPolicy<any> | FieldReadFunction<any>;
	version?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ContentNodeToEnqueuedStylesheetConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| ContentNodeToEnqueuedStylesheetConnectionKeySpecifier
)[];
export type ContentNodeToEnqueuedStylesheetConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ContentNodeToEnqueuedStylesheetConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| ContentNodeToEnqueuedStylesheetConnectionEdgeKeySpecifier
)[];
export type ContentNodeToEnqueuedStylesheetConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type EnqueuedStylesheetKeySpecifier = (
	| 'args'
	| 'dependencies'
	| 'extra'
	| 'handle'
	| 'id'
	| 'src'
	| 'version'
	| EnqueuedStylesheetKeySpecifier
)[];
export type EnqueuedStylesheetFieldPolicy = {
	args?: FieldPolicy<any> | FieldReadFunction<any>;
	dependencies?: FieldPolicy<any> | FieldReadFunction<any>;
	extra?: FieldPolicy<any> | FieldReadFunction<any>;
	handle?: FieldPolicy<any> | FieldReadFunction<any>;
	id?: FieldPolicy<any> | FieldReadFunction<any>;
	src?: FieldPolicy<any> | FieldReadFunction<any>;
	version?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ContentNodeToEditLastConnectionEdgeKeySpecifier = (
	| 'node'
	| ContentNodeToEditLastConnectionEdgeKeySpecifier
)[];
export type ContentNodeToEditLastConnectionEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MediaDetailsKeySpecifier = (
	| 'file'
	| 'height'
	| 'meta'
	| 'sizes'
	| 'width'
	| MediaDetailsKeySpecifier
)[];
export type MediaDetailsFieldPolicy = {
	file?: FieldPolicy<any> | FieldReadFunction<any>;
	height?: FieldPolicy<any> | FieldReadFunction<any>;
	meta?: FieldPolicy<any> | FieldReadFunction<any>;
	sizes?: FieldPolicy<any> | FieldReadFunction<any>;
	width?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MediaItemMetaKeySpecifier = (
	| 'aperture'
	| 'camera'
	| 'caption'
	| 'copyright'
	| 'createdTimestamp'
	| 'credit'
	| 'focalLength'
	| 'iso'
	| 'keywords'
	| 'orientation'
	| 'shutterSpeed'
	| 'title'
	| MediaItemMetaKeySpecifier
)[];
export type MediaItemMetaFieldPolicy = {
	aperture?: FieldPolicy<any> | FieldReadFunction<any>;
	camera?: FieldPolicy<any> | FieldReadFunction<any>;
	caption?: FieldPolicy<any> | FieldReadFunction<any>;
	copyright?: FieldPolicy<any> | FieldReadFunction<any>;
	createdTimestamp?: FieldPolicy<any> | FieldReadFunction<any>;
	credit?: FieldPolicy<any> | FieldReadFunction<any>;
	focalLength?: FieldPolicy<any> | FieldReadFunction<any>;
	iso?: FieldPolicy<any> | FieldReadFunction<any>;
	keywords?: FieldPolicy<any> | FieldReadFunction<any>;
	orientation?: FieldPolicy<any> | FieldReadFunction<any>;
	shutterSpeed?: FieldPolicy<any> | FieldReadFunction<any>;
	title?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MediaSizeKeySpecifier = (
	| 'file'
	| 'fileSize'
	| 'height'
	| 'mimeType'
	| 'name'
	| 'sourceUrl'
	| 'width'
	| MediaSizeKeySpecifier
)[];
export type MediaSizeFieldPolicy = {
	file?: FieldPolicy<any> | FieldReadFunction<any>;
	fileSize?: FieldPolicy<any> | FieldReadFunction<any>;
	height?: FieldPolicy<any> | FieldReadFunction<any>;
	mimeType?: FieldPolicy<any> | FieldReadFunction<any>;
	name?: FieldPolicy<any> | FieldReadFunction<any>;
	sourceUrl?: FieldPolicy<any> | FieldReadFunction<any>;
	width?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostTypeSEOKeySpecifier = (
	| 'breadcrumbs'
	| 'canonical'
	| 'cornerstone'
	| 'focuskw'
	| 'metaDesc'
	| 'metaKeywords'
	| 'metaRobotsNofollow'
	| 'metaRobotsNoindex'
	| 'opengraphAuthor'
	| 'opengraphDescription'
	| 'opengraphImage'
	| 'opengraphModifiedTime'
	| 'opengraphPublishedTime'
	| 'opengraphPublisher'
	| 'opengraphSiteName'
	| 'opengraphTitle'
	| 'opengraphType'
	| 'opengraphUrl'
	| 'schema'
	| 'title'
	| 'twitterDescription'
	| 'twitterImage'
	| 'twitterTitle'
	| PostTypeSEOKeySpecifier
)[];
export type PostTypeSEOFieldPolicy = {
	breadcrumbs?: FieldPolicy<any> | FieldReadFunction<any>;
	canonical?: FieldPolicy<any> | FieldReadFunction<any>;
	cornerstone?: FieldPolicy<any> | FieldReadFunction<any>;
	focuskw?: FieldPolicy<any> | FieldReadFunction<any>;
	metaDesc?: FieldPolicy<any> | FieldReadFunction<any>;
	metaKeywords?: FieldPolicy<any> | FieldReadFunction<any>;
	metaRobotsNofollow?: FieldPolicy<any> | FieldReadFunction<any>;
	metaRobotsNoindex?: FieldPolicy<any> | FieldReadFunction<any>;
	opengraphAuthor?: FieldPolicy<any> | FieldReadFunction<any>;
	opengraphDescription?: FieldPolicy<any> | FieldReadFunction<any>;
	opengraphImage?: FieldPolicy<any> | FieldReadFunction<any>;
	opengraphModifiedTime?: FieldPolicy<any> | FieldReadFunction<any>;
	opengraphPublishedTime?: FieldPolicy<any> | FieldReadFunction<any>;
	opengraphPublisher?: FieldPolicy<any> | FieldReadFunction<any>;
	opengraphSiteName?: FieldPolicy<any> | FieldReadFunction<any>;
	opengraphTitle?: FieldPolicy<any> | FieldReadFunction<any>;
	opengraphType?: FieldPolicy<any> | FieldReadFunction<any>;
	opengraphUrl?: FieldPolicy<any> | FieldReadFunction<any>;
	schema?: FieldPolicy<any> | FieldReadFunction<any>;
	title?: FieldPolicy<any> | FieldReadFunction<any>;
	twitterDescription?: FieldPolicy<any> | FieldReadFunction<any>;
	twitterImage?: FieldPolicy<any> | FieldReadFunction<any>;
	twitterTitle?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOPostTypeBreadcrumbsKeySpecifier = (
	| 'text'
	| 'url'
	| SEOPostTypeBreadcrumbsKeySpecifier
)[];
export type SEOPostTypeBreadcrumbsFieldPolicy = {
	text?: FieldPolicy<any> | FieldReadFunction<any>;
	url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOPostTypeSchemaKeySpecifier = (
	| 'articleType'
	| 'pageType'
	| 'raw'
	| SEOPostTypeSchemaKeySpecifier
)[];
export type SEOPostTypeSchemaFieldPolicy = {
	articleType?: FieldPolicy<any> | FieldReadFunction<any>;
	pageType?: FieldPolicy<any> | FieldReadFunction<any>;
	raw?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NodeWithExcerptKeySpecifier = (
	| 'excerpt'
	| NodeWithExcerptKeySpecifier
)[];
export type NodeWithExcerptFieldPolicy = {
	excerpt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NodeWithTrackbacksKeySpecifier = (
	| 'pingStatus'
	| 'pinged'
	| 'toPing'
	| NodeWithTrackbacksKeySpecifier
)[];
export type NodeWithTrackbacksFieldPolicy = {
	pingStatus?: FieldPolicy<any> | FieldReadFunction<any>;
	pinged?: FieldPolicy<any> | FieldReadFunction<any>;
	toPing?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NodeWithRevisionsKeySpecifier = (
	| 'isRevision'
	| 'revisionOf'
	| NodeWithRevisionsKeySpecifier
)[];
export type NodeWithRevisionsFieldPolicy = {
	isRevision?: FieldPolicy<any> | FieldReadFunction<any>;
	revisionOf?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NodeWithRevisionsToContentNodeConnectionEdgeKeySpecifier = (
	| 'node'
	| NodeWithRevisionsToContentNodeConnectionEdgeKeySpecifier
)[];
export type NodeWithRevisionsToContentNodeConnectionEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NodeWithPageAttributesKeySpecifier = (
	| 'menuOrder'
	| NodeWithPageAttributesKeySpecifier
)[];
export type NodeWithPageAttributesFieldPolicy = {
	menuOrder?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MenuItemLinkableKeySpecifier = (
	| 'databaseId'
	| 'id'
	| 'uri'
	| MenuItemLinkableKeySpecifier
)[];
export type MenuItemLinkableFieldPolicy = {
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	id?: FieldPolicy<any> | FieldReadFunction<any>;
	uri?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ConsultantToCategoryConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| ConsultantToCategoryConnectionKeySpecifier
)[];
export type ConsultantToCategoryConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ConsultantToCategoryConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'isPrimary'
	| 'node'
	| ConsultantToCategoryConnectionEdgeKeySpecifier
)[];
export type ConsultantToCategoryConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	isPrimary?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryKeySpecifier = (
	| 'abouts'
	| 'ancestors'
	| 'categoryId'
	| 'children'
	| 'consultants'
	| 'contentNodes'
	| 'count'
	| 'databaseId'
	| 'description'
	| 'enqueuedScripts'
	| 'enqueuedStylesheets'
	| 'id'
	| 'isRestricted'
	| 'link'
	| 'name'
	| 'parent'
	| 'parentDatabaseId'
	| 'parentId'
	| 'positions'
	| 'posts'
	| 'seo'
	| 'slug'
	| 'taxonomy'
	| 'termGroupId'
	| 'termTaxonomyId'
	| 'testimonials'
	| 'uri'
	| CategoryKeySpecifier
)[];
export type CategoryFieldPolicy = {
	abouts?: FieldPolicy<any> | FieldReadFunction<any>;
	ancestors?: FieldPolicy<any> | FieldReadFunction<any>;
	categoryId?: FieldPolicy<any> | FieldReadFunction<any>;
	children?: FieldPolicy<any> | FieldReadFunction<any>;
	consultants?: FieldPolicy<any> | FieldReadFunction<any>;
	contentNodes?: FieldPolicy<any> | FieldReadFunction<any>;
	count?: FieldPolicy<any> | FieldReadFunction<any>;
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	description?: FieldPolicy<any> | FieldReadFunction<any>;
	enqueuedScripts?: FieldPolicy<any> | FieldReadFunction<any>;
	enqueuedStylesheets?: FieldPolicy<any> | FieldReadFunction<any>;
	id?: FieldPolicy<any> | FieldReadFunction<any>;
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
	link?: FieldPolicy<any> | FieldReadFunction<any>;
	name?: FieldPolicy<any> | FieldReadFunction<any>;
	parent?: FieldPolicy<any> | FieldReadFunction<any>;
	parentDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	parentId?: FieldPolicy<any> | FieldReadFunction<any>;
	positions?: FieldPolicy<any> | FieldReadFunction<any>;
	posts?: FieldPolicy<any> | FieldReadFunction<any>;
	seo?: FieldPolicy<any> | FieldReadFunction<any>;
	slug?: FieldPolicy<any> | FieldReadFunction<any>;
	taxonomy?: FieldPolicy<any> | FieldReadFunction<any>;
	termGroupId?: FieldPolicy<any> | FieldReadFunction<any>;
	termTaxonomyId?: FieldPolicy<any> | FieldReadFunction<any>;
	testimonials?: FieldPolicy<any> | FieldReadFunction<any>;
	uri?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TermNodeKeySpecifier = (
	| 'count'
	| 'databaseId'
	| 'description'
	| 'enqueuedScripts'
	| 'enqueuedStylesheets'
	| 'id'
	| 'isRestricted'
	| 'link'
	| 'name'
	| 'slug'
	| 'termGroupId'
	| 'termTaxonomyId'
	| 'uri'
	| TermNodeKeySpecifier
)[];
export type TermNodeFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>;
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	description?: FieldPolicy<any> | FieldReadFunction<any>;
	enqueuedScripts?: FieldPolicy<any> | FieldReadFunction<any>;
	enqueuedStylesheets?: FieldPolicy<any> | FieldReadFunction<any>;
	id?: FieldPolicy<any> | FieldReadFunction<any>;
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
	link?: FieldPolicy<any> | FieldReadFunction<any>;
	name?: FieldPolicy<any> | FieldReadFunction<any>;
	slug?: FieldPolicy<any> | FieldReadFunction<any>;
	termGroupId?: FieldPolicy<any> | FieldReadFunction<any>;
	termTaxonomyId?: FieldPolicy<any> | FieldReadFunction<any>;
	uri?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TermNodeToEnqueuedScriptConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| TermNodeToEnqueuedScriptConnectionKeySpecifier
)[];
export type TermNodeToEnqueuedScriptConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TermNodeToEnqueuedScriptConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| TermNodeToEnqueuedScriptConnectionEdgeKeySpecifier
)[];
export type TermNodeToEnqueuedScriptConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TermNodeToEnqueuedStylesheetConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| TermNodeToEnqueuedStylesheetConnectionKeySpecifier
)[];
export type TermNodeToEnqueuedStylesheetConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TermNodeToEnqueuedStylesheetConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| TermNodeToEnqueuedStylesheetConnectionEdgeKeySpecifier
)[];
export type TermNodeToEnqueuedStylesheetConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type HierarchicalTermNodeKeySpecifier = (
	| 'parentDatabaseId'
	| 'parentId'
	| HierarchicalTermNodeKeySpecifier
)[];
export type HierarchicalTermNodeFieldPolicy = {
	parentDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	parentId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryToAboutConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| CategoryToAboutConnectionKeySpecifier
)[];
export type CategoryToAboutConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryToAboutConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| CategoryToAboutConnectionEdgeKeySpecifier
)[];
export type CategoryToAboutConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryToAncestorsCategoryConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| CategoryToAncestorsCategoryConnectionKeySpecifier
)[];
export type CategoryToAncestorsCategoryConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryToAncestorsCategoryConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| CategoryToAncestorsCategoryConnectionEdgeKeySpecifier
)[];
export type CategoryToAncestorsCategoryConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryToCategoryConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| CategoryToCategoryConnectionKeySpecifier
)[];
export type CategoryToCategoryConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryToCategoryConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| CategoryToCategoryConnectionEdgeKeySpecifier
)[];
export type CategoryToCategoryConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryToConsultantConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| CategoryToConsultantConnectionKeySpecifier
)[];
export type CategoryToConsultantConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryToConsultantConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| CategoryToConsultantConnectionEdgeKeySpecifier
)[];
export type CategoryToConsultantConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryToContentNodeConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| CategoryToContentNodeConnectionKeySpecifier
)[];
export type CategoryToContentNodeConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryToContentNodeConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| CategoryToContentNodeConnectionEdgeKeySpecifier
)[];
export type CategoryToContentNodeConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryToParentCategoryConnectionEdgeKeySpecifier = (
	| 'node'
	| CategoryToParentCategoryConnectionEdgeKeySpecifier
)[];
export type CategoryToParentCategoryConnectionEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryToPositionConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| CategoryToPositionConnectionKeySpecifier
)[];
export type CategoryToPositionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryToPositionConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| CategoryToPositionConnectionEdgeKeySpecifier
)[];
export type CategoryToPositionConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PositionKeySpecifier = (
	| 'author'
	| 'authorDatabaseId'
	| 'authorId'
	| 'categories'
	| 'commentCount'
	| 'commentStatus'
	| 'comments'
	| 'content'
	| 'contentType'
	| 'databaseId'
	| 'date'
	| 'dateGmt'
	| 'desiredSlug'
	| 'editingLockedBy'
	| 'enclosure'
	| 'enqueuedScripts'
	| 'enqueuedStylesheets'
	| 'excerpt'
	| 'featuredImage'
	| 'featuredImageDatabaseId'
	| 'featuredImageId'
	| 'guid'
	| 'id'
	| 'isPreview'
	| 'isRestricted'
	| 'isRevision'
	| 'lastEditedBy'
	| 'link'
	| 'menuOrder'
	| 'modified'
	| 'modifiedGmt'
	| 'pingStatus'
	| 'pinged'
	| 'positionId'
	| 'postFormats'
	| 'preview'
	| 'previewRevisionDatabaseId'
	| 'previewRevisionId'
	| 'revisionOf'
	| 'revisions'
	| 'seo'
	| 'slug'
	| 'social'
	| 'status'
	| 'template'
	| 'title'
	| 'toPing'
	| 'uri'
	| PositionKeySpecifier
)[];
export type PositionFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>;
	authorDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	authorId?: FieldPolicy<any> | FieldReadFunction<any>;
	categories?: FieldPolicy<any> | FieldReadFunction<any>;
	commentCount?: FieldPolicy<any> | FieldReadFunction<any>;
	commentStatus?: FieldPolicy<any> | FieldReadFunction<any>;
	comments?: FieldPolicy<any> | FieldReadFunction<any>;
	content?: FieldPolicy<any> | FieldReadFunction<any>;
	contentType?: FieldPolicy<any> | FieldReadFunction<any>;
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	date?: FieldPolicy<any> | FieldReadFunction<any>;
	dateGmt?: FieldPolicy<any> | FieldReadFunction<any>;
	desiredSlug?: FieldPolicy<any> | FieldReadFunction<any>;
	editingLockedBy?: FieldPolicy<any> | FieldReadFunction<any>;
	enclosure?: FieldPolicy<any> | FieldReadFunction<any>;
	enqueuedScripts?: FieldPolicy<any> | FieldReadFunction<any>;
	enqueuedStylesheets?: FieldPolicy<any> | FieldReadFunction<any>;
	excerpt?: FieldPolicy<any> | FieldReadFunction<any>;
	featuredImage?: FieldPolicy<any> | FieldReadFunction<any>;
	featuredImageDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	featuredImageId?: FieldPolicy<any> | FieldReadFunction<any>;
	guid?: FieldPolicy<any> | FieldReadFunction<any>;
	id?: FieldPolicy<any> | FieldReadFunction<any>;
	isPreview?: FieldPolicy<any> | FieldReadFunction<any>;
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
	isRevision?: FieldPolicy<any> | FieldReadFunction<any>;
	lastEditedBy?: FieldPolicy<any> | FieldReadFunction<any>;
	link?: FieldPolicy<any> | FieldReadFunction<any>;
	menuOrder?: FieldPolicy<any> | FieldReadFunction<any>;
	modified?: FieldPolicy<any> | FieldReadFunction<any>;
	modifiedGmt?: FieldPolicy<any> | FieldReadFunction<any>;
	pingStatus?: FieldPolicy<any> | FieldReadFunction<any>;
	pinged?: FieldPolicy<any> | FieldReadFunction<any>;
	positionId?: FieldPolicy<any> | FieldReadFunction<any>;
	postFormats?: FieldPolicy<any> | FieldReadFunction<any>;
	preview?: FieldPolicy<any> | FieldReadFunction<any>;
	previewRevisionDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	previewRevisionId?: FieldPolicy<any> | FieldReadFunction<any>;
	revisionOf?: FieldPolicy<any> | FieldReadFunction<any>;
	revisions?: FieldPolicy<any> | FieldReadFunction<any>;
	seo?: FieldPolicy<any> | FieldReadFunction<any>;
	slug?: FieldPolicy<any> | FieldReadFunction<any>;
	social?: FieldPolicy<any> | FieldReadFunction<any>;
	status?: FieldPolicy<any> | FieldReadFunction<any>;
	template?: FieldPolicy<any> | FieldReadFunction<any>;
	title?: FieldPolicy<any> | FieldReadFunction<any>;
	toPing?: FieldPolicy<any> | FieldReadFunction<any>;
	uri?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PositionToCategoryConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| PositionToCategoryConnectionKeySpecifier
)[];
export type PositionToCategoryConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PositionToCategoryConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'isPrimary'
	| 'node'
	| PositionToCategoryConnectionEdgeKeySpecifier
)[];
export type PositionToCategoryConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	isPrimary?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PositionToCommentConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| PositionToCommentConnectionKeySpecifier
)[];
export type PositionToCommentConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PositionToCommentConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| PositionToCommentConnectionEdgeKeySpecifier
)[];
export type PositionToCommentConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PositionToPostFormatConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| PositionToPostFormatConnectionKeySpecifier
)[];
export type PositionToPostFormatConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PositionToPostFormatConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| PositionToPostFormatConnectionEdgeKeySpecifier
)[];
export type PositionToPostFormatConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostFormatKeySpecifier = (
	| 'abouts'
	| 'consultants'
	| 'contentNodes'
	| 'count'
	| 'databaseId'
	| 'description'
	| 'enqueuedScripts'
	| 'enqueuedStylesheets'
	| 'id'
	| 'isRestricted'
	| 'link'
	| 'name'
	| 'positions'
	| 'postFormatId'
	| 'posts'
	| 'seo'
	| 'slug'
	| 'taxonomy'
	| 'termGroupId'
	| 'termTaxonomyId'
	| 'testimonials'
	| 'uri'
	| PostFormatKeySpecifier
)[];
export type PostFormatFieldPolicy = {
	abouts?: FieldPolicy<any> | FieldReadFunction<any>;
	consultants?: FieldPolicy<any> | FieldReadFunction<any>;
	contentNodes?: FieldPolicy<any> | FieldReadFunction<any>;
	count?: FieldPolicy<any> | FieldReadFunction<any>;
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	description?: FieldPolicy<any> | FieldReadFunction<any>;
	enqueuedScripts?: FieldPolicy<any> | FieldReadFunction<any>;
	enqueuedStylesheets?: FieldPolicy<any> | FieldReadFunction<any>;
	id?: FieldPolicy<any> | FieldReadFunction<any>;
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
	link?: FieldPolicy<any> | FieldReadFunction<any>;
	name?: FieldPolicy<any> | FieldReadFunction<any>;
	positions?: FieldPolicy<any> | FieldReadFunction<any>;
	postFormatId?: FieldPolicy<any> | FieldReadFunction<any>;
	posts?: FieldPolicy<any> | FieldReadFunction<any>;
	seo?: FieldPolicy<any> | FieldReadFunction<any>;
	slug?: FieldPolicy<any> | FieldReadFunction<any>;
	taxonomy?: FieldPolicy<any> | FieldReadFunction<any>;
	termGroupId?: FieldPolicy<any> | FieldReadFunction<any>;
	termTaxonomyId?: FieldPolicy<any> | FieldReadFunction<any>;
	testimonials?: FieldPolicy<any> | FieldReadFunction<any>;
	uri?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostFormatToAboutConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| PostFormatToAboutConnectionKeySpecifier
)[];
export type PostFormatToAboutConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostFormatToAboutConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| PostFormatToAboutConnectionEdgeKeySpecifier
)[];
export type PostFormatToAboutConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostFormatToConsultantConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| PostFormatToConsultantConnectionKeySpecifier
)[];
export type PostFormatToConsultantConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostFormatToConsultantConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| PostFormatToConsultantConnectionEdgeKeySpecifier
)[];
export type PostFormatToConsultantConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostFormatToContentNodeConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| PostFormatToContentNodeConnectionKeySpecifier
)[];
export type PostFormatToContentNodeConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostFormatToContentNodeConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| PostFormatToContentNodeConnectionEdgeKeySpecifier
)[];
export type PostFormatToContentNodeConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostFormatToPositionConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| PostFormatToPositionConnectionKeySpecifier
)[];
export type PostFormatToPositionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostFormatToPositionConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| PostFormatToPositionConnectionEdgeKeySpecifier
)[];
export type PostFormatToPositionConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostFormatToPostConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| PostFormatToPostConnectionKeySpecifier
)[];
export type PostFormatToPostConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostFormatToPostConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| PostFormatToPostConnectionEdgeKeySpecifier
)[];
export type PostFormatToPostConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostKeySpecifier = (
	| 'author'
	| 'authorDatabaseId'
	| 'authorId'
	| 'categories'
	| 'commentCount'
	| 'commentStatus'
	| 'comments'
	| 'content'
	| 'contentType'
	| 'databaseId'
	| 'date'
	| 'dateGmt'
	| 'desiredSlug'
	| 'editingLockedBy'
	| 'enclosure'
	| 'enqueuedScripts'
	| 'enqueuedStylesheets'
	| 'excerpt'
	| 'featuredImage'
	| 'featuredImageDatabaseId'
	| 'featuredImageId'
	| 'guid'
	| 'id'
	| 'isPreview'
	| 'isRestricted'
	| 'isRevision'
	| 'isSticky'
	| 'lastEditedBy'
	| 'link'
	| 'modified'
	| 'modifiedGmt'
	| 'pingStatus'
	| 'pinged'
	| 'postFormats'
	| 'postId'
	| 'preview'
	| 'previewRevisionDatabaseId'
	| 'previewRevisionId'
	| 'revisionOf'
	| 'revisions'
	| 'seo'
	| 'slug'
	| 'social'
	| 'status'
	| 'tags'
	| 'template'
	| 'terms'
	| 'title'
	| 'toPing'
	| 'uri'
	| PostKeySpecifier
)[];
export type PostFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>;
	authorDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	authorId?: FieldPolicy<any> | FieldReadFunction<any>;
	categories?: FieldPolicy<any> | FieldReadFunction<any>;
	commentCount?: FieldPolicy<any> | FieldReadFunction<any>;
	commentStatus?: FieldPolicy<any> | FieldReadFunction<any>;
	comments?: FieldPolicy<any> | FieldReadFunction<any>;
	content?: FieldPolicy<any> | FieldReadFunction<any>;
	contentType?: FieldPolicy<any> | FieldReadFunction<any>;
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	date?: FieldPolicy<any> | FieldReadFunction<any>;
	dateGmt?: FieldPolicy<any> | FieldReadFunction<any>;
	desiredSlug?: FieldPolicy<any> | FieldReadFunction<any>;
	editingLockedBy?: FieldPolicy<any> | FieldReadFunction<any>;
	enclosure?: FieldPolicy<any> | FieldReadFunction<any>;
	enqueuedScripts?: FieldPolicy<any> | FieldReadFunction<any>;
	enqueuedStylesheets?: FieldPolicy<any> | FieldReadFunction<any>;
	excerpt?: FieldPolicy<any> | FieldReadFunction<any>;
	featuredImage?: FieldPolicy<any> | FieldReadFunction<any>;
	featuredImageDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	featuredImageId?: FieldPolicy<any> | FieldReadFunction<any>;
	guid?: FieldPolicy<any> | FieldReadFunction<any>;
	id?: FieldPolicy<any> | FieldReadFunction<any>;
	isPreview?: FieldPolicy<any> | FieldReadFunction<any>;
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
	isRevision?: FieldPolicy<any> | FieldReadFunction<any>;
	isSticky?: FieldPolicy<any> | FieldReadFunction<any>;
	lastEditedBy?: FieldPolicy<any> | FieldReadFunction<any>;
	link?: FieldPolicy<any> | FieldReadFunction<any>;
	modified?: FieldPolicy<any> | FieldReadFunction<any>;
	modifiedGmt?: FieldPolicy<any> | FieldReadFunction<any>;
	pingStatus?: FieldPolicy<any> | FieldReadFunction<any>;
	pinged?: FieldPolicy<any> | FieldReadFunction<any>;
	postFormats?: FieldPolicy<any> | FieldReadFunction<any>;
	postId?: FieldPolicy<any> | FieldReadFunction<any>;
	preview?: FieldPolicy<any> | FieldReadFunction<any>;
	previewRevisionDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	previewRevisionId?: FieldPolicy<any> | FieldReadFunction<any>;
	revisionOf?: FieldPolicy<any> | FieldReadFunction<any>;
	revisions?: FieldPolicy<any> | FieldReadFunction<any>;
	seo?: FieldPolicy<any> | FieldReadFunction<any>;
	slug?: FieldPolicy<any> | FieldReadFunction<any>;
	social?: FieldPolicy<any> | FieldReadFunction<any>;
	status?: FieldPolicy<any> | FieldReadFunction<any>;
	tags?: FieldPolicy<any> | FieldReadFunction<any>;
	template?: FieldPolicy<any> | FieldReadFunction<any>;
	terms?: FieldPolicy<any> | FieldReadFunction<any>;
	title?: FieldPolicy<any> | FieldReadFunction<any>;
	toPing?: FieldPolicy<any> | FieldReadFunction<any>;
	uri?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostToCategoryConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| PostToCategoryConnectionKeySpecifier
)[];
export type PostToCategoryConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostToCategoryConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'isPrimary'
	| 'node'
	| PostToCategoryConnectionEdgeKeySpecifier
)[];
export type PostToCategoryConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	isPrimary?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostToCommentConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| PostToCommentConnectionKeySpecifier
)[];
export type PostToCommentConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostToCommentConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| PostToCommentConnectionEdgeKeySpecifier
)[];
export type PostToCommentConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostToPostFormatConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| PostToPostFormatConnectionKeySpecifier
)[];
export type PostToPostFormatConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostToPostFormatConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| PostToPostFormatConnectionEdgeKeySpecifier
)[];
export type PostToPostFormatConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostToPreviewConnectionEdgeKeySpecifier = (
	| 'node'
	| PostToPreviewConnectionEdgeKeySpecifier
)[];
export type PostToPreviewConnectionEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostToRevisionConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| PostToRevisionConnectionKeySpecifier
)[];
export type PostToRevisionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostToRevisionConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| PostToRevisionConnectionEdgeKeySpecifier
)[];
export type PostToRevisionConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type Post_SocialKeySpecifier = (
	| 'email'
	| 'facebook'
	| 'fieldGroupName'
	| 'instagram'
	| 'linkedin'
	| 'twitter'
	| Post_SocialKeySpecifier
)[];
export type Post_SocialFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>;
	facebook?: FieldPolicy<any> | FieldReadFunction<any>;
	fieldGroupName?: FieldPolicy<any> | FieldReadFunction<any>;
	instagram?: FieldPolicy<any> | FieldReadFunction<any>;
	linkedin?: FieldPolicy<any> | FieldReadFunction<any>;
	twitter?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostToTagConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| PostToTagConnectionKeySpecifier
)[];
export type PostToTagConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostToTagConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| PostToTagConnectionEdgeKeySpecifier
)[];
export type PostToTagConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TagKeySpecifier = (
	| 'contentNodes'
	| 'count'
	| 'databaseId'
	| 'description'
	| 'enqueuedScripts'
	| 'enqueuedStylesheets'
	| 'id'
	| 'isRestricted'
	| 'link'
	| 'name'
	| 'posts'
	| 'seo'
	| 'slug'
	| 'tagId'
	| 'taxonomy'
	| 'termGroupId'
	| 'termTaxonomyId'
	| 'uri'
	| TagKeySpecifier
)[];
export type TagFieldPolicy = {
	contentNodes?: FieldPolicy<any> | FieldReadFunction<any>;
	count?: FieldPolicy<any> | FieldReadFunction<any>;
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	description?: FieldPolicy<any> | FieldReadFunction<any>;
	enqueuedScripts?: FieldPolicy<any> | FieldReadFunction<any>;
	enqueuedStylesheets?: FieldPolicy<any> | FieldReadFunction<any>;
	id?: FieldPolicy<any> | FieldReadFunction<any>;
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
	link?: FieldPolicy<any> | FieldReadFunction<any>;
	name?: FieldPolicy<any> | FieldReadFunction<any>;
	posts?: FieldPolicy<any> | FieldReadFunction<any>;
	seo?: FieldPolicy<any> | FieldReadFunction<any>;
	slug?: FieldPolicy<any> | FieldReadFunction<any>;
	tagId?: FieldPolicy<any> | FieldReadFunction<any>;
	taxonomy?: FieldPolicy<any> | FieldReadFunction<any>;
	termGroupId?: FieldPolicy<any> | FieldReadFunction<any>;
	termTaxonomyId?: FieldPolicy<any> | FieldReadFunction<any>;
	uri?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TagToContentNodeConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| TagToContentNodeConnectionKeySpecifier
)[];
export type TagToContentNodeConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TagToContentNodeConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| TagToContentNodeConnectionEdgeKeySpecifier
)[];
export type TagToContentNodeConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TagToPostConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| TagToPostConnectionKeySpecifier
)[];
export type TagToPostConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TagToPostConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| TagToPostConnectionEdgeKeySpecifier
)[];
export type TagToPostConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TaxonomySEOKeySpecifier = (
	| 'breadcrumbs'
	| 'canonical'
	| 'cornerstone'
	| 'focuskw'
	| 'metaDesc'
	| 'metaKeywords'
	| 'metaRobotsNofollow'
	| 'metaRobotsNoindex'
	| 'opengraphAuthor'
	| 'opengraphDescription'
	| 'opengraphImage'
	| 'opengraphModifiedTime'
	| 'opengraphPublishedTime'
	| 'opengraphPublisher'
	| 'opengraphSiteName'
	| 'opengraphTitle'
	| 'opengraphType'
	| 'opengraphUrl'
	| 'schema'
	| 'title'
	| 'twitterDescription'
	| 'twitterImage'
	| 'twitterTitle'
	| TaxonomySEOKeySpecifier
)[];
export type TaxonomySEOFieldPolicy = {
	breadcrumbs?: FieldPolicy<any> | FieldReadFunction<any>;
	canonical?: FieldPolicy<any> | FieldReadFunction<any>;
	cornerstone?: FieldPolicy<any> | FieldReadFunction<any>;
	focuskw?: FieldPolicy<any> | FieldReadFunction<any>;
	metaDesc?: FieldPolicy<any> | FieldReadFunction<any>;
	metaKeywords?: FieldPolicy<any> | FieldReadFunction<any>;
	metaRobotsNofollow?: FieldPolicy<any> | FieldReadFunction<any>;
	metaRobotsNoindex?: FieldPolicy<any> | FieldReadFunction<any>;
	opengraphAuthor?: FieldPolicy<any> | FieldReadFunction<any>;
	opengraphDescription?: FieldPolicy<any> | FieldReadFunction<any>;
	opengraphImage?: FieldPolicy<any> | FieldReadFunction<any>;
	opengraphModifiedTime?: FieldPolicy<any> | FieldReadFunction<any>;
	opengraphPublishedTime?: FieldPolicy<any> | FieldReadFunction<any>;
	opengraphPublisher?: FieldPolicy<any> | FieldReadFunction<any>;
	opengraphSiteName?: FieldPolicy<any> | FieldReadFunction<any>;
	opengraphTitle?: FieldPolicy<any> | FieldReadFunction<any>;
	opengraphType?: FieldPolicy<any> | FieldReadFunction<any>;
	opengraphUrl?: FieldPolicy<any> | FieldReadFunction<any>;
	schema?: FieldPolicy<any> | FieldReadFunction<any>;
	title?: FieldPolicy<any> | FieldReadFunction<any>;
	twitterDescription?: FieldPolicy<any> | FieldReadFunction<any>;
	twitterImage?: FieldPolicy<any> | FieldReadFunction<any>;
	twitterTitle?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOTaxonomySchemaKeySpecifier = (
	| 'raw'
	| SEOTaxonomySchemaKeySpecifier
)[];
export type SEOTaxonomySchemaFieldPolicy = {
	raw?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TagToTaxonomyConnectionEdgeKeySpecifier = (
	| 'node'
	| TagToTaxonomyConnectionEdgeKeySpecifier
)[];
export type TagToTaxonomyConnectionEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostToTermNodeConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| PostToTermNodeConnectionKeySpecifier
)[];
export type PostToTermNodeConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostToTermNodeConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| PostToTermNodeConnectionEdgeKeySpecifier
)[];
export type PostToTermNodeConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostFormatToTaxonomyConnectionEdgeKeySpecifier = (
	| 'node'
	| PostFormatToTaxonomyConnectionEdgeKeySpecifier
)[];
export type PostFormatToTaxonomyConnectionEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostFormatToTestimonialConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| PostFormatToTestimonialConnectionKeySpecifier
)[];
export type PostFormatToTestimonialConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostFormatToTestimonialConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| PostFormatToTestimonialConnectionEdgeKeySpecifier
)[];
export type PostFormatToTestimonialConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TestimonialKeySpecifier = (
	| 'author'
	| 'authorDatabaseId'
	| 'authorId'
	| 'categories'
	| 'commentCount'
	| 'commentStatus'
	| 'comments'
	| 'content'
	| 'contentType'
	| 'databaseId'
	| 'date'
	| 'dateGmt'
	| 'desiredSlug'
	| 'editingLockedBy'
	| 'enclosure'
	| 'enqueuedScripts'
	| 'enqueuedStylesheets'
	| 'excerpt'
	| 'featuredImage'
	| 'featuredImageDatabaseId'
	| 'featuredImageId'
	| 'guid'
	| 'id'
	| 'isPreview'
	| 'isRestricted'
	| 'isRevision'
	| 'lastEditedBy'
	| 'link'
	| 'menuOrder'
	| 'modified'
	| 'modifiedGmt'
	| 'pingStatus'
	| 'pinged'
	| 'postFormats'
	| 'preview'
	| 'previewRevisionDatabaseId'
	| 'previewRevisionId'
	| 'revisionOf'
	| 'revisions'
	| 'seo'
	| 'slug'
	| 'social'
	| 'status'
	| 'template'
	| 'testimonialId'
	| 'title'
	| 'toPing'
	| 'uri'
	| TestimonialKeySpecifier
)[];
export type TestimonialFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>;
	authorDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	authorId?: FieldPolicy<any> | FieldReadFunction<any>;
	categories?: FieldPolicy<any> | FieldReadFunction<any>;
	commentCount?: FieldPolicy<any> | FieldReadFunction<any>;
	commentStatus?: FieldPolicy<any> | FieldReadFunction<any>;
	comments?: FieldPolicy<any> | FieldReadFunction<any>;
	content?: FieldPolicy<any> | FieldReadFunction<any>;
	contentType?: FieldPolicy<any> | FieldReadFunction<any>;
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	date?: FieldPolicy<any> | FieldReadFunction<any>;
	dateGmt?: FieldPolicy<any> | FieldReadFunction<any>;
	desiredSlug?: FieldPolicy<any> | FieldReadFunction<any>;
	editingLockedBy?: FieldPolicy<any> | FieldReadFunction<any>;
	enclosure?: FieldPolicy<any> | FieldReadFunction<any>;
	enqueuedScripts?: FieldPolicy<any> | FieldReadFunction<any>;
	enqueuedStylesheets?: FieldPolicy<any> | FieldReadFunction<any>;
	excerpt?: FieldPolicy<any> | FieldReadFunction<any>;
	featuredImage?: FieldPolicy<any> | FieldReadFunction<any>;
	featuredImageDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	featuredImageId?: FieldPolicy<any> | FieldReadFunction<any>;
	guid?: FieldPolicy<any> | FieldReadFunction<any>;
	id?: FieldPolicy<any> | FieldReadFunction<any>;
	isPreview?: FieldPolicy<any> | FieldReadFunction<any>;
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
	isRevision?: FieldPolicy<any> | FieldReadFunction<any>;
	lastEditedBy?: FieldPolicy<any> | FieldReadFunction<any>;
	link?: FieldPolicy<any> | FieldReadFunction<any>;
	menuOrder?: FieldPolicy<any> | FieldReadFunction<any>;
	modified?: FieldPolicy<any> | FieldReadFunction<any>;
	modifiedGmt?: FieldPolicy<any> | FieldReadFunction<any>;
	pingStatus?: FieldPolicy<any> | FieldReadFunction<any>;
	pinged?: FieldPolicy<any> | FieldReadFunction<any>;
	postFormats?: FieldPolicy<any> | FieldReadFunction<any>;
	preview?: FieldPolicy<any> | FieldReadFunction<any>;
	previewRevisionDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	previewRevisionId?: FieldPolicy<any> | FieldReadFunction<any>;
	revisionOf?: FieldPolicy<any> | FieldReadFunction<any>;
	revisions?: FieldPolicy<any> | FieldReadFunction<any>;
	seo?: FieldPolicy<any> | FieldReadFunction<any>;
	slug?: FieldPolicy<any> | FieldReadFunction<any>;
	social?: FieldPolicy<any> | FieldReadFunction<any>;
	status?: FieldPolicy<any> | FieldReadFunction<any>;
	template?: FieldPolicy<any> | FieldReadFunction<any>;
	testimonialId?: FieldPolicy<any> | FieldReadFunction<any>;
	title?: FieldPolicy<any> | FieldReadFunction<any>;
	toPing?: FieldPolicy<any> | FieldReadFunction<any>;
	uri?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TestimonialToCategoryConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| TestimonialToCategoryConnectionKeySpecifier
)[];
export type TestimonialToCategoryConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TestimonialToCategoryConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'isPrimary'
	| 'node'
	| TestimonialToCategoryConnectionEdgeKeySpecifier
)[];
export type TestimonialToCategoryConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	isPrimary?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TestimonialToCommentConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| TestimonialToCommentConnectionKeySpecifier
)[];
export type TestimonialToCommentConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TestimonialToCommentConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| TestimonialToCommentConnectionEdgeKeySpecifier
)[];
export type TestimonialToCommentConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TestimonialToPostFormatConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| TestimonialToPostFormatConnectionKeySpecifier
)[];
export type TestimonialToPostFormatConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TestimonialToPostFormatConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| TestimonialToPostFormatConnectionEdgeKeySpecifier
)[];
export type TestimonialToPostFormatConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TestimonialToPreviewConnectionEdgeKeySpecifier = (
	| 'node'
	| TestimonialToPreviewConnectionEdgeKeySpecifier
)[];
export type TestimonialToPreviewConnectionEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TestimonialToRevisionConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| TestimonialToRevisionConnectionKeySpecifier
)[];
export type TestimonialToRevisionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TestimonialToRevisionConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| TestimonialToRevisionConnectionEdgeKeySpecifier
)[];
export type TestimonialToRevisionConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type Testimonial_SocialKeySpecifier = (
	| 'email'
	| 'facebook'
	| 'fieldGroupName'
	| 'instagram'
	| 'linkedin'
	| 'twitter'
	| Testimonial_SocialKeySpecifier
)[];
export type Testimonial_SocialFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>;
	facebook?: FieldPolicy<any> | FieldReadFunction<any>;
	fieldGroupName?: FieldPolicy<any> | FieldReadFunction<any>;
	instagram?: FieldPolicy<any> | FieldReadFunction<any>;
	linkedin?: FieldPolicy<any> | FieldReadFunction<any>;
	twitter?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PositionToPreviewConnectionEdgeKeySpecifier = (
	| 'node'
	| PositionToPreviewConnectionEdgeKeySpecifier
)[];
export type PositionToPreviewConnectionEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PositionToRevisionConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| PositionToRevisionConnectionKeySpecifier
)[];
export type PositionToRevisionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PositionToRevisionConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| PositionToRevisionConnectionEdgeKeySpecifier
)[];
export type PositionToRevisionConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type Position_SocialKeySpecifier = (
	| 'email'
	| 'facebook'
	| 'fieldGroupName'
	| 'instagram'
	| 'linkedin'
	| 'twitter'
	| Position_SocialKeySpecifier
)[];
export type Position_SocialFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>;
	facebook?: FieldPolicy<any> | FieldReadFunction<any>;
	fieldGroupName?: FieldPolicy<any> | FieldReadFunction<any>;
	instagram?: FieldPolicy<any> | FieldReadFunction<any>;
	linkedin?: FieldPolicy<any> | FieldReadFunction<any>;
	twitter?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryToPostConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| CategoryToPostConnectionKeySpecifier
)[];
export type CategoryToPostConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryToPostConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| CategoryToPostConnectionEdgeKeySpecifier
)[];
export type CategoryToPostConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryToTaxonomyConnectionEdgeKeySpecifier = (
	| 'node'
	| CategoryToTaxonomyConnectionEdgeKeySpecifier
)[];
export type CategoryToTaxonomyConnectionEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryToTestimonialConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| CategoryToTestimonialConnectionKeySpecifier
)[];
export type CategoryToTestimonialConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryToTestimonialConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| CategoryToTestimonialConnectionEdgeKeySpecifier
)[];
export type CategoryToTestimonialConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ConsultantToCommentConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| ConsultantToCommentConnectionKeySpecifier
)[];
export type ConsultantToCommentConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ConsultantToCommentConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| ConsultantToCommentConnectionEdgeKeySpecifier
)[];
export type ConsultantToCommentConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ConsultantToPostFormatConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| ConsultantToPostFormatConnectionKeySpecifier
)[];
export type ConsultantToPostFormatConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ConsultantToPostFormatConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| ConsultantToPostFormatConnectionEdgeKeySpecifier
)[];
export type ConsultantToPostFormatConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ConsultantToPreviewConnectionEdgeKeySpecifier = (
	| 'node'
	| ConsultantToPreviewConnectionEdgeKeySpecifier
)[];
export type ConsultantToPreviewConnectionEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ConsultantToRevisionConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| ConsultantToRevisionConnectionKeySpecifier
)[];
export type ConsultantToRevisionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ConsultantToRevisionConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| ConsultantToRevisionConnectionEdgeKeySpecifier
)[];
export type ConsultantToRevisionConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type Consultant_SocialKeySpecifier = (
	| 'email'
	| 'facebook'
	| 'fieldGroupName'
	| 'instagram'
	| 'linkedin'
	| 'twitter'
	| Consultant_SocialKeySpecifier
)[];
export type Consultant_SocialFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>;
	facebook?: FieldPolicy<any> | FieldReadFunction<any>;
	fieldGroupName?: FieldPolicy<any> | FieldReadFunction<any>;
	instagram?: FieldPolicy<any> | FieldReadFunction<any>;
	linkedin?: FieldPolicy<any> | FieldReadFunction<any>;
	twitter?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToEnqueuedScriptConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| UserToEnqueuedScriptConnectionKeySpecifier
)[];
export type UserToEnqueuedScriptConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToEnqueuedScriptConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| UserToEnqueuedScriptConnectionEdgeKeySpecifier
)[];
export type UserToEnqueuedScriptConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToEnqueuedStylesheetConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| UserToEnqueuedStylesheetConnectionKeySpecifier
)[];
export type UserToEnqueuedStylesheetConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToEnqueuedStylesheetConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| UserToEnqueuedStylesheetConnectionEdgeKeySpecifier
)[];
export type UserToEnqueuedStylesheetConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToMediaItemConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| UserToMediaItemConnectionKeySpecifier
)[];
export type UserToMediaItemConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToMediaItemConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| UserToMediaItemConnectionEdgeKeySpecifier
)[];
export type UserToMediaItemConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToPageConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| UserToPageConnectionKeySpecifier
)[];
export type UserToPageConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToPageConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| UserToPageConnectionEdgeKeySpecifier
)[];
export type UserToPageConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PageKeySpecifier = (
	| 'ancestors'
	| 'author'
	| 'authorDatabaseId'
	| 'authorId'
	| 'children'
	| 'commentCount'
	| 'commentStatus'
	| 'comments'
	| 'content'
	| 'contentType'
	| 'databaseId'
	| 'date'
	| 'dateGmt'
	| 'desiredSlug'
	| 'editingLockedBy'
	| 'enclosure'
	| 'enqueuedScripts'
	| 'enqueuedStylesheets'
	| 'featuredImage'
	| 'featuredImageDatabaseId'
	| 'featuredImageId'
	| 'guid'
	| 'id'
	| 'isFrontPage'
	| 'isPostsPage'
	| 'isPreview'
	| 'isRestricted'
	| 'isRevision'
	| 'lastEditedBy'
	| 'link'
	| 'menuOrder'
	| 'modified'
	| 'modifiedGmt'
	| 'pageId'
	| 'parent'
	| 'parentDatabaseId'
	| 'parentId'
	| 'preview'
	| 'previewRevisionDatabaseId'
	| 'previewRevisionId'
	| 'revisionOf'
	| 'revisions'
	| 'seo'
	| 'slug'
	| 'status'
	| 'template'
	| 'title'
	| 'uri'
	| PageKeySpecifier
)[];
export type PageFieldPolicy = {
	ancestors?: FieldPolicy<any> | FieldReadFunction<any>;
	author?: FieldPolicy<any> | FieldReadFunction<any>;
	authorDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	authorId?: FieldPolicy<any> | FieldReadFunction<any>;
	children?: FieldPolicy<any> | FieldReadFunction<any>;
	commentCount?: FieldPolicy<any> | FieldReadFunction<any>;
	commentStatus?: FieldPolicy<any> | FieldReadFunction<any>;
	comments?: FieldPolicy<any> | FieldReadFunction<any>;
	content?: FieldPolicy<any> | FieldReadFunction<any>;
	contentType?: FieldPolicy<any> | FieldReadFunction<any>;
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	date?: FieldPolicy<any> | FieldReadFunction<any>;
	dateGmt?: FieldPolicy<any> | FieldReadFunction<any>;
	desiredSlug?: FieldPolicy<any> | FieldReadFunction<any>;
	editingLockedBy?: FieldPolicy<any> | FieldReadFunction<any>;
	enclosure?: FieldPolicy<any> | FieldReadFunction<any>;
	enqueuedScripts?: FieldPolicy<any> | FieldReadFunction<any>;
	enqueuedStylesheets?: FieldPolicy<any> | FieldReadFunction<any>;
	featuredImage?: FieldPolicy<any> | FieldReadFunction<any>;
	featuredImageDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	featuredImageId?: FieldPolicy<any> | FieldReadFunction<any>;
	guid?: FieldPolicy<any> | FieldReadFunction<any>;
	id?: FieldPolicy<any> | FieldReadFunction<any>;
	isFrontPage?: FieldPolicy<any> | FieldReadFunction<any>;
	isPostsPage?: FieldPolicy<any> | FieldReadFunction<any>;
	isPreview?: FieldPolicy<any> | FieldReadFunction<any>;
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
	isRevision?: FieldPolicy<any> | FieldReadFunction<any>;
	lastEditedBy?: FieldPolicy<any> | FieldReadFunction<any>;
	link?: FieldPolicy<any> | FieldReadFunction<any>;
	menuOrder?: FieldPolicy<any> | FieldReadFunction<any>;
	modified?: FieldPolicy<any> | FieldReadFunction<any>;
	modifiedGmt?: FieldPolicy<any> | FieldReadFunction<any>;
	pageId?: FieldPolicy<any> | FieldReadFunction<any>;
	parent?: FieldPolicy<any> | FieldReadFunction<any>;
	parentDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	parentId?: FieldPolicy<any> | FieldReadFunction<any>;
	preview?: FieldPolicy<any> | FieldReadFunction<any>;
	previewRevisionDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	previewRevisionId?: FieldPolicy<any> | FieldReadFunction<any>;
	revisionOf?: FieldPolicy<any> | FieldReadFunction<any>;
	revisions?: FieldPolicy<any> | FieldReadFunction<any>;
	seo?: FieldPolicy<any> | FieldReadFunction<any>;
	slug?: FieldPolicy<any> | FieldReadFunction<any>;
	status?: FieldPolicy<any> | FieldReadFunction<any>;
	template?: FieldPolicy<any> | FieldReadFunction<any>;
	title?: FieldPolicy<any> | FieldReadFunction<any>;
	uri?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PageToCommentConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| PageToCommentConnectionKeySpecifier
)[];
export type PageToCommentConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PageToCommentConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| PageToCommentConnectionEdgeKeySpecifier
)[];
export type PageToCommentConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PageToPreviewConnectionEdgeKeySpecifier = (
	| 'node'
	| PageToPreviewConnectionEdgeKeySpecifier
)[];
export type PageToPreviewConnectionEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PageToRevisionConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| PageToRevisionConnectionKeySpecifier
)[];
export type PageToRevisionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PageToRevisionConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| PageToRevisionConnectionEdgeKeySpecifier
)[];
export type PageToRevisionConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToPositionConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| UserToPositionConnectionKeySpecifier
)[];
export type UserToPositionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToPositionConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| UserToPositionConnectionEdgeKeySpecifier
)[];
export type UserToPositionConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToPostConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| UserToPostConnectionKeySpecifier
)[];
export type UserToPostConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToPostConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| UserToPostConnectionEdgeKeySpecifier
)[];
export type UserToPostConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToContentRevisionUnionConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| UserToContentRevisionUnionConnectionKeySpecifier
)[];
export type UserToContentRevisionUnionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToContentRevisionUnionConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| UserToContentRevisionUnionConnectionEdgeKeySpecifier
)[];
export type UserToContentRevisionUnionConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToUserRoleConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| UserToUserRoleConnectionKeySpecifier
)[];
export type UserToUserRoleConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToUserRoleConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| UserToUserRoleConnectionEdgeKeySpecifier
)[];
export type UserToUserRoleConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserRoleKeySpecifier = (
	| 'capabilities'
	| 'displayName'
	| 'id'
	| 'isRestricted'
	| 'name'
	| UserRoleKeySpecifier
)[];
export type UserRoleFieldPolicy = {
	capabilities?: FieldPolicy<any> | FieldReadFunction<any>;
	displayName?: FieldPolicy<any> | FieldReadFunction<any>;
	id?: FieldPolicy<any> | FieldReadFunction<any>;
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
	name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOUserKeySpecifier = (
	| 'metaDesc'
	| 'metaRobotsNofollow'
	| 'metaRobotsNoindex'
	| 'schema'
	| 'social'
	| 'title'
	| SEOUserKeySpecifier
)[];
export type SEOUserFieldPolicy = {
	metaDesc?: FieldPolicy<any> | FieldReadFunction<any>;
	metaRobotsNofollow?: FieldPolicy<any> | FieldReadFunction<any>;
	metaRobotsNoindex?: FieldPolicy<any> | FieldReadFunction<any>;
	schema?: FieldPolicy<any> | FieldReadFunction<any>;
	social?: FieldPolicy<any> | FieldReadFunction<any>;
	title?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOUserSchemaKeySpecifier = ('raw' | SEOUserSchemaKeySpecifier)[];
export type SEOUserSchemaFieldPolicy = {
	raw?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOUserSocialKeySpecifier = (
	| 'facebook'
	| 'instagram'
	| 'linkedIn'
	| 'mySpace'
	| 'pinterest'
	| 'soundCloud'
	| 'twitter'
	| 'wikipedia'
	| 'youTube'
	| SEOUserSocialKeySpecifier
)[];
export type SEOUserSocialFieldPolicy = {
	facebook?: FieldPolicy<any> | FieldReadFunction<any>;
	instagram?: FieldPolicy<any> | FieldReadFunction<any>;
	linkedIn?: FieldPolicy<any> | FieldReadFunction<any>;
	mySpace?: FieldPolicy<any> | FieldReadFunction<any>;
	pinterest?: FieldPolicy<any> | FieldReadFunction<any>;
	soundCloud?: FieldPolicy<any> | FieldReadFunction<any>;
	twitter?: FieldPolicy<any> | FieldReadFunction<any>;
	wikipedia?: FieldPolicy<any> | FieldReadFunction<any>;
	youTube?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToTestimonialConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| UserToTestimonialConnectionKeySpecifier
)[];
export type UserToTestimonialConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToTestimonialConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| UserToTestimonialConnectionEdgeKeySpecifier
)[];
export type UserToTestimonialConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AboutToCategoryConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| AboutToCategoryConnectionKeySpecifier
)[];
export type AboutToCategoryConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AboutToCategoryConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'isPrimary'
	| 'node'
	| AboutToCategoryConnectionEdgeKeySpecifier
)[];
export type AboutToCategoryConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	isPrimary?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AboutToCommentConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| AboutToCommentConnectionKeySpecifier
)[];
export type AboutToCommentConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AboutToCommentConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| AboutToCommentConnectionEdgeKeySpecifier
)[];
export type AboutToCommentConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AboutToPostFormatConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| AboutToPostFormatConnectionKeySpecifier
)[];
export type AboutToPostFormatConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AboutToPostFormatConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| AboutToPostFormatConnectionEdgeKeySpecifier
)[];
export type AboutToPostFormatConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AboutToPreviewConnectionEdgeKeySpecifier = (
	| 'node'
	| AboutToPreviewConnectionEdgeKeySpecifier
)[];
export type AboutToPreviewConnectionEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AboutToRevisionConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| AboutToRevisionConnectionKeySpecifier
)[];
export type AboutToRevisionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AboutToRevisionConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| AboutToRevisionConnectionEdgeKeySpecifier
)[];
export type AboutToRevisionConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type About_SocialKeySpecifier = (
	| 'email'
	| 'facebook'
	| 'fieldGroupName'
	| 'instagram'
	| 'linkedin'
	| 'twitter'
	| About_SocialKeySpecifier
)[];
export type About_SocialFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>;
	facebook?: FieldPolicy<any> | FieldReadFunction<any>;
	fieldGroupName?: FieldPolicy<any> | FieldReadFunction<any>;
	instagram?: FieldPolicy<any> | FieldReadFunction<any>;
	linkedin?: FieldPolicy<any> | FieldReadFunction<any>;
	twitter?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToAboutConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| RootQueryToAboutConnectionKeySpecifier
)[];
export type RootQueryToAboutConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToAboutConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| RootQueryToAboutConnectionEdgeKeySpecifier
)[];
export type RootQueryToAboutConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SettingsKeySpecifier = (
	| 'discussionSettingsDefaultCommentStatus'
	| 'discussionSettingsDefaultPingStatus'
	| 'generalSettingsDateFormat'
	| 'generalSettingsDescription'
	| 'generalSettingsEmail'
	| 'generalSettingsLanguage'
	| 'generalSettingsStartOfWeek'
	| 'generalSettingsTimeFormat'
	| 'generalSettingsTimezone'
	| 'generalSettingsTitle'
	| 'generalSettingsUrl'
	| 'readingSettingsPostsPerPage'
	| 'writingSettingsDefaultCategory'
	| 'writingSettingsDefaultPostFormat'
	| 'writingSettingsUseSmilies'
	| SettingsKeySpecifier
)[];
export type SettingsFieldPolicy = {
	discussionSettingsDefaultCommentStatus?:
		| FieldPolicy<any>
		| FieldReadFunction<any>;
	discussionSettingsDefaultPingStatus?:
		| FieldPolicy<any>
		| FieldReadFunction<any>;
	generalSettingsDateFormat?: FieldPolicy<any> | FieldReadFunction<any>;
	generalSettingsDescription?: FieldPolicy<any> | FieldReadFunction<any>;
	generalSettingsEmail?: FieldPolicy<any> | FieldReadFunction<any>;
	generalSettingsLanguage?: FieldPolicy<any> | FieldReadFunction<any>;
	generalSettingsStartOfWeek?: FieldPolicy<any> | FieldReadFunction<any>;
	generalSettingsTimeFormat?: FieldPolicy<any> | FieldReadFunction<any>;
	generalSettingsTimezone?: FieldPolicy<any> | FieldReadFunction<any>;
	generalSettingsTitle?: FieldPolicy<any> | FieldReadFunction<any>;
	generalSettingsUrl?: FieldPolicy<any> | FieldReadFunction<any>;
	readingSettingsPostsPerPage?: FieldPolicy<any> | FieldReadFunction<any>;
	writingSettingsDefaultCategory?: FieldPolicy<any> | FieldReadFunction<any>;
	writingSettingsDefaultPostFormat?: FieldPolicy<any> | FieldReadFunction<any>;
	writingSettingsUseSmilies?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToCategoryConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| RootQueryToCategoryConnectionKeySpecifier
)[];
export type RootQueryToCategoryConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToCategoryConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| RootQueryToCategoryConnectionEdgeKeySpecifier
)[];
export type RootQueryToCategoryConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToCommentConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| RootQueryToCommentConnectionKeySpecifier
)[];
export type RootQueryToCommentConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToCommentConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| RootQueryToCommentConnectionEdgeKeySpecifier
)[];
export type RootQueryToCommentConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToConsultantConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| RootQueryToConsultantConnectionKeySpecifier
)[];
export type RootQueryToConsultantConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToConsultantConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| RootQueryToConsultantConnectionEdgeKeySpecifier
)[];
export type RootQueryToConsultantConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToContentNodeConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| RootQueryToContentNodeConnectionKeySpecifier
)[];
export type RootQueryToContentNodeConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToContentNodeConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| RootQueryToContentNodeConnectionEdgeKeySpecifier
)[];
export type RootQueryToContentNodeConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToContentTypeConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| RootQueryToContentTypeConnectionKeySpecifier
)[];
export type RootQueryToContentTypeConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToContentTypeConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| RootQueryToContentTypeConnectionEdgeKeySpecifier
)[];
export type RootQueryToContentTypeConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DiscussionSettingsKeySpecifier = (
	| 'defaultCommentStatus'
	| 'defaultPingStatus'
	| DiscussionSettingsKeySpecifier
)[];
export type DiscussionSettingsFieldPolicy = {
	defaultCommentStatus?: FieldPolicy<any> | FieldReadFunction<any>;
	defaultPingStatus?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type GeneralSettingsKeySpecifier = (
	| 'dateFormat'
	| 'description'
	| 'email'
	| 'language'
	| 'startOfWeek'
	| 'timeFormat'
	| 'timezone'
	| 'title'
	| 'url'
	| GeneralSettingsKeySpecifier
)[];
export type GeneralSettingsFieldPolicy = {
	dateFormat?: FieldPolicy<any> | FieldReadFunction<any>;
	description?: FieldPolicy<any> | FieldReadFunction<any>;
	email?: FieldPolicy<any> | FieldReadFunction<any>;
	language?: FieldPolicy<any> | FieldReadFunction<any>;
	startOfWeek?: FieldPolicy<any> | FieldReadFunction<any>;
	timeFormat?: FieldPolicy<any> | FieldReadFunction<any>;
	timezone?: FieldPolicy<any> | FieldReadFunction<any>;
	title?: FieldPolicy<any> | FieldReadFunction<any>;
	url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToMediaItemConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| RootQueryToMediaItemConnectionKeySpecifier
)[];
export type RootQueryToMediaItemConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToMediaItemConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| RootQueryToMediaItemConnectionEdgeKeySpecifier
)[];
export type RootQueryToMediaItemConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MenuKeySpecifier = (
	| 'FOOTER_DYNAMIC'
	| 'HEADER_DYNAMIC'
	| 'count'
	| 'databaseId'
	| 'id'
	| 'isRestricted'
	| 'locations'
	| 'menuId'
	| 'menuItems'
	| 'name'
	| 'slug'
	| MenuKeySpecifier
)[];
export type MenuFieldPolicy = {
	FOOTER_DYNAMIC?: FieldPolicy<any> | FieldReadFunction<any>;
	HEADER_DYNAMIC?: FieldPolicy<any> | FieldReadFunction<any>;
	count?: FieldPolicy<any> | FieldReadFunction<any>;
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	id?: FieldPolicy<any> | FieldReadFunction<any>;
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
	locations?: FieldPolicy<any> | FieldReadFunction<any>;
	menuId?: FieldPolicy<any> | FieldReadFunction<any>;
	menuItems?: FieldPolicy<any> | FieldReadFunction<any>;
	name?: FieldPolicy<any> | FieldReadFunction<any>;
	slug?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type Menu_FooterDynamicKeySpecifier = (
	| 'fieldGroupName'
	| Menu_FooterDynamicKeySpecifier
)[];
export type Menu_FooterDynamicFieldPolicy = {
	fieldGroupName?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type Menu_HeaderDynamicKeySpecifier = (
	| 'fieldGroupName'
	| Menu_HeaderDynamicKeySpecifier
)[];
export type Menu_HeaderDynamicFieldPolicy = {
	fieldGroupName?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MenuToMenuItemConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| MenuToMenuItemConnectionKeySpecifier
)[];
export type MenuToMenuItemConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MenuToMenuItemConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| MenuToMenuItemConnectionEdgeKeySpecifier
)[];
export type MenuToMenuItemConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MenuItemKeySpecifier = (
	| 'childItems'
	| 'connectedNode'
	| 'connectedObject'
	| 'cssClasses'
	| 'databaseId'
	| 'description'
	| 'id'
	| 'isRestricted'
	| 'label'
	| 'linkRelationship'
	| 'locations'
	| 'menu'
	| 'menuItemId'
	| 'order'
	| 'parentDatabaseId'
	| 'parentId'
	| 'path'
	| 'target'
	| 'title'
	| 'url'
	| MenuItemKeySpecifier
)[];
export type MenuItemFieldPolicy = {
	childItems?: FieldPolicy<any> | FieldReadFunction<any>;
	connectedNode?: FieldPolicy<any> | FieldReadFunction<any>;
	connectedObject?: FieldPolicy<any> | FieldReadFunction<any>;
	cssClasses?: FieldPolicy<any> | FieldReadFunction<any>;
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	description?: FieldPolicy<any> | FieldReadFunction<any>;
	id?: FieldPolicy<any> | FieldReadFunction<any>;
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
	label?: FieldPolicy<any> | FieldReadFunction<any>;
	linkRelationship?: FieldPolicy<any> | FieldReadFunction<any>;
	locations?: FieldPolicy<any> | FieldReadFunction<any>;
	menu?: FieldPolicy<any> | FieldReadFunction<any>;
	menuItemId?: FieldPolicy<any> | FieldReadFunction<any>;
	order?: FieldPolicy<any> | FieldReadFunction<any>;
	parentDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	parentId?: FieldPolicy<any> | FieldReadFunction<any>;
	path?: FieldPolicy<any> | FieldReadFunction<any>;
	target?: FieldPolicy<any> | FieldReadFunction<any>;
	title?: FieldPolicy<any> | FieldReadFunction<any>;
	url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MenuItemToMenuItemConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| MenuItemToMenuItemConnectionKeySpecifier
)[];
export type MenuItemToMenuItemConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MenuItemToMenuItemConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| MenuItemToMenuItemConnectionEdgeKeySpecifier
)[];
export type MenuItemToMenuItemConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MenuItemToMenuItemLinkableConnectionEdgeKeySpecifier = (
	| 'node'
	| MenuItemToMenuItemLinkableConnectionEdgeKeySpecifier
)[];
export type MenuItemToMenuItemLinkableConnectionEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MenuItemToMenuConnectionEdgeKeySpecifier = (
	| 'node'
	| MenuItemToMenuConnectionEdgeKeySpecifier
)[];
export type MenuItemToMenuConnectionEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToMenuItemConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| RootQueryToMenuItemConnectionKeySpecifier
)[];
export type RootQueryToMenuItemConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToMenuItemConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| RootQueryToMenuItemConnectionEdgeKeySpecifier
)[];
export type RootQueryToMenuItemConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToMenuConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| RootQueryToMenuConnectionKeySpecifier
)[];
export type RootQueryToMenuConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToMenuConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| RootQueryToMenuConnectionEdgeKeySpecifier
)[];
export type RootQueryToMenuConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToPageConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| RootQueryToPageConnectionKeySpecifier
)[];
export type RootQueryToPageConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToPageConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| RootQueryToPageConnectionEdgeKeySpecifier
)[];
export type RootQueryToPageConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PluginKeySpecifier = (
	| 'author'
	| 'authorUri'
	| 'description'
	| 'id'
	| 'isRestricted'
	| 'name'
	| 'path'
	| 'pluginUri'
	| 'version'
	| PluginKeySpecifier
)[];
export type PluginFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>;
	authorUri?: FieldPolicy<any> | FieldReadFunction<any>;
	description?: FieldPolicy<any> | FieldReadFunction<any>;
	id?: FieldPolicy<any> | FieldReadFunction<any>;
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
	name?: FieldPolicy<any> | FieldReadFunction<any>;
	path?: FieldPolicy<any> | FieldReadFunction<any>;
	pluginUri?: FieldPolicy<any> | FieldReadFunction<any>;
	version?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToPluginConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| RootQueryToPluginConnectionKeySpecifier
)[];
export type RootQueryToPluginConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToPluginConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| RootQueryToPluginConnectionEdgeKeySpecifier
)[];
export type RootQueryToPluginConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToPositionConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| RootQueryToPositionConnectionKeySpecifier
)[];
export type RootQueryToPositionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToPositionConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| RootQueryToPositionConnectionEdgeKeySpecifier
)[];
export type RootQueryToPositionConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToPostFormatConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| RootQueryToPostFormatConnectionKeySpecifier
)[];
export type RootQueryToPostFormatConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToPostFormatConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| RootQueryToPostFormatConnectionEdgeKeySpecifier
)[];
export type RootQueryToPostFormatConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToPostConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| RootQueryToPostConnectionKeySpecifier
)[];
export type RootQueryToPostConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToPostConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| RootQueryToPostConnectionEdgeKeySpecifier
)[];
export type RootQueryToPostConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ReadingSettingsKeySpecifier = (
	| 'postsPerPage'
	| ReadingSettingsKeySpecifier
)[];
export type ReadingSettingsFieldPolicy = {
	postsPerPage?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToEnqueuedScriptConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| RootQueryToEnqueuedScriptConnectionKeySpecifier
)[];
export type RootQueryToEnqueuedScriptConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToEnqueuedScriptConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| RootQueryToEnqueuedScriptConnectionEdgeKeySpecifier
)[];
export type RootQueryToEnqueuedScriptConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToEnqueuedStylesheetConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| RootQueryToEnqueuedStylesheetConnectionKeySpecifier
)[];
export type RootQueryToEnqueuedStylesheetConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToEnqueuedStylesheetConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| RootQueryToEnqueuedStylesheetConnectionEdgeKeySpecifier
)[];
export type RootQueryToEnqueuedStylesheetConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToContentRevisionUnionConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| RootQueryToContentRevisionUnionConnectionKeySpecifier
)[];
export type RootQueryToContentRevisionUnionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToContentRevisionUnionConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| RootQueryToContentRevisionUnionConnectionEdgeKeySpecifier
)[];
export type RootQueryToContentRevisionUnionConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOConfigKeySpecifier = (
	| 'breadcrumbs'
	| 'contentTypes'
	| 'openGraph'
	| 'redirects'
	| 'schema'
	| 'social'
	| 'webmaster'
	| SEOConfigKeySpecifier
)[];
export type SEOConfigFieldPolicy = {
	breadcrumbs?: FieldPolicy<any> | FieldReadFunction<any>;
	contentTypes?: FieldPolicy<any> | FieldReadFunction<any>;
	openGraph?: FieldPolicy<any> | FieldReadFunction<any>;
	redirects?: FieldPolicy<any> | FieldReadFunction<any>;
	schema?: FieldPolicy<any> | FieldReadFunction<any>;
	social?: FieldPolicy<any> | FieldReadFunction<any>;
	webmaster?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOBreadcrumbsKeySpecifier = (
	| 'archivePrefix'
	| 'boldLast'
	| 'enabled'
	| 'homeText'
	| 'notFoundText'
	| 'prefix'
	| 'searchPrefix'
	| 'separator'
	| 'showBlogPage'
	| SEOBreadcrumbsKeySpecifier
)[];
export type SEOBreadcrumbsFieldPolicy = {
	archivePrefix?: FieldPolicy<any> | FieldReadFunction<any>;
	boldLast?: FieldPolicy<any> | FieldReadFunction<any>;
	enabled?: FieldPolicy<any> | FieldReadFunction<any>;
	homeText?: FieldPolicy<any> | FieldReadFunction<any>;
	notFoundText?: FieldPolicy<any> | FieldReadFunction<any>;
	prefix?: FieldPolicy<any> | FieldReadFunction<any>;
	searchPrefix?: FieldPolicy<any> | FieldReadFunction<any>;
	separator?: FieldPolicy<any> | FieldReadFunction<any>;
	showBlogPage?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOContentTypesKeySpecifier = (
	| 'about'
	| 'consultant'
	| 'mediaItem'
	| 'page'
	| 'position'
	| 'post'
	| 'testimonial'
	| SEOContentTypesKeySpecifier
)[];
export type SEOContentTypesFieldPolicy = {
	about?: FieldPolicy<any> | FieldReadFunction<any>;
	consultant?: FieldPolicy<any> | FieldReadFunction<any>;
	mediaItem?: FieldPolicy<any> | FieldReadFunction<any>;
	page?: FieldPolicy<any> | FieldReadFunction<any>;
	position?: FieldPolicy<any> | FieldReadFunction<any>;
	post?: FieldPolicy<any> | FieldReadFunction<any>;
	testimonial?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOContentTypeKeySpecifier = (
	| 'metaDesc'
	| 'metaRobotsNoindex'
	| 'schema'
	| 'schemaType'
	| 'title'
	| SEOContentTypeKeySpecifier
)[];
export type SEOContentTypeFieldPolicy = {
	metaDesc?: FieldPolicy<any> | FieldReadFunction<any>;
	metaRobotsNoindex?: FieldPolicy<any> | FieldReadFunction<any>;
	schema?: FieldPolicy<any> | FieldReadFunction<any>;
	schemaType?: FieldPolicy<any> | FieldReadFunction<any>;
	title?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOOpenGraphKeySpecifier = (
	| 'defaultImage'
	| 'frontPage'
	| SEOOpenGraphKeySpecifier
)[];
export type SEOOpenGraphFieldPolicy = {
	defaultImage?: FieldPolicy<any> | FieldReadFunction<any>;
	frontPage?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOOpenGraphFrontPageKeySpecifier = (
	| 'description'
	| 'image'
	| 'title'
	| SEOOpenGraphFrontPageKeySpecifier
)[];
export type SEOOpenGraphFrontPageFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>;
	image?: FieldPolicy<any> | FieldReadFunction<any>;
	title?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEORedirectKeySpecifier = (
	| 'format'
	| 'origin'
	| 'target'
	| 'type'
	| SEORedirectKeySpecifier
)[];
export type SEORedirectFieldPolicy = {
	format?: FieldPolicy<any> | FieldReadFunction<any>;
	origin?: FieldPolicy<any> | FieldReadFunction<any>;
	target?: FieldPolicy<any> | FieldReadFunction<any>;
	type?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOSchemaKeySpecifier = (
	| 'companyLogo'
	| 'companyName'
	| 'companyOrPerson'
	| 'inLanguage'
	| 'logo'
	| 'personLogo'
	| 'personName'
	| 'siteName'
	| 'siteUrl'
	| 'wordpressSiteName'
	| SEOSchemaKeySpecifier
)[];
export type SEOSchemaFieldPolicy = {
	companyLogo?: FieldPolicy<any> | FieldReadFunction<any>;
	companyName?: FieldPolicy<any> | FieldReadFunction<any>;
	companyOrPerson?: FieldPolicy<any> | FieldReadFunction<any>;
	inLanguage?: FieldPolicy<any> | FieldReadFunction<any>;
	logo?: FieldPolicy<any> | FieldReadFunction<any>;
	personLogo?: FieldPolicy<any> | FieldReadFunction<any>;
	personName?: FieldPolicy<any> | FieldReadFunction<any>;
	siteName?: FieldPolicy<any> | FieldReadFunction<any>;
	siteUrl?: FieldPolicy<any> | FieldReadFunction<any>;
	wordpressSiteName?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOSocialKeySpecifier = (
	| 'facebook'
	| 'instagram'
	| 'linkedIn'
	| 'mySpace'
	| 'pinterest'
	| 'twitter'
	| 'wikipedia'
	| 'youTube'
	| SEOSocialKeySpecifier
)[];
export type SEOSocialFieldPolicy = {
	facebook?: FieldPolicy<any> | FieldReadFunction<any>;
	instagram?: FieldPolicy<any> | FieldReadFunction<any>;
	linkedIn?: FieldPolicy<any> | FieldReadFunction<any>;
	mySpace?: FieldPolicy<any> | FieldReadFunction<any>;
	pinterest?: FieldPolicy<any> | FieldReadFunction<any>;
	twitter?: FieldPolicy<any> | FieldReadFunction<any>;
	wikipedia?: FieldPolicy<any> | FieldReadFunction<any>;
	youTube?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOSocialFacebookKeySpecifier = (
	| 'defaultImage'
	| 'url'
	| SEOSocialFacebookKeySpecifier
)[];
export type SEOSocialFacebookFieldPolicy = {
	defaultImage?: FieldPolicy<any> | FieldReadFunction<any>;
	url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOSocialInstagramKeySpecifier = (
	| 'url'
	| SEOSocialInstagramKeySpecifier
)[];
export type SEOSocialInstagramFieldPolicy = {
	url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOSocialLinkedInKeySpecifier = (
	| 'url'
	| SEOSocialLinkedInKeySpecifier
)[];
export type SEOSocialLinkedInFieldPolicy = {
	url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOSocialMySpaceKeySpecifier = (
	| 'url'
	| SEOSocialMySpaceKeySpecifier
)[];
export type SEOSocialMySpaceFieldPolicy = {
	url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOSocialPinterestKeySpecifier = (
	| 'metaTag'
	| 'url'
	| SEOSocialPinterestKeySpecifier
)[];
export type SEOSocialPinterestFieldPolicy = {
	metaTag?: FieldPolicy<any> | FieldReadFunction<any>;
	url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOSocialTwitterKeySpecifier = (
	| 'cardType'
	| 'username'
	| SEOSocialTwitterKeySpecifier
)[];
export type SEOSocialTwitterFieldPolicy = {
	cardType?: FieldPolicy<any> | FieldReadFunction<any>;
	username?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOSocialWikipediaKeySpecifier = (
	| 'url'
	| SEOSocialWikipediaKeySpecifier
)[];
export type SEOSocialWikipediaFieldPolicy = {
	url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOSocialYoutubeKeySpecifier = (
	| 'url'
	| SEOSocialYoutubeKeySpecifier
)[];
export type SEOSocialYoutubeFieldPolicy = {
	url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOWebmasterKeySpecifier = (
	| 'baiduVerify'
	| 'googleVerify'
	| 'msVerify'
	| 'yandexVerify'
	| SEOWebmasterKeySpecifier
)[];
export type SEOWebmasterFieldPolicy = {
	baiduVerify?: FieldPolicy<any> | FieldReadFunction<any>;
	googleVerify?: FieldPolicy<any> | FieldReadFunction<any>;
	msVerify?: FieldPolicy<any> | FieldReadFunction<any>;
	yandexVerify?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToTagConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| RootQueryToTagConnectionKeySpecifier
)[];
export type RootQueryToTagConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToTagConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| RootQueryToTagConnectionEdgeKeySpecifier
)[];
export type RootQueryToTagConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToTaxonomyConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| RootQueryToTaxonomyConnectionKeySpecifier
)[];
export type RootQueryToTaxonomyConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToTaxonomyConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| RootQueryToTaxonomyConnectionEdgeKeySpecifier
)[];
export type RootQueryToTaxonomyConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToTermNodeConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| RootQueryToTermNodeConnectionKeySpecifier
)[];
export type RootQueryToTermNodeConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToTermNodeConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| RootQueryToTermNodeConnectionEdgeKeySpecifier
)[];
export type RootQueryToTermNodeConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToTestimonialConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| RootQueryToTestimonialConnectionKeySpecifier
)[];
export type RootQueryToTestimonialConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToTestimonialConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| RootQueryToTestimonialConnectionEdgeKeySpecifier
)[];
export type RootQueryToTestimonialConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ThemeKeySpecifier = (
	| 'author'
	| 'authorUri'
	| 'description'
	| 'id'
	| 'isRestricted'
	| 'name'
	| 'screenshot'
	| 'slug'
	| 'tags'
	| 'themeUri'
	| 'version'
	| ThemeKeySpecifier
)[];
export type ThemeFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>;
	authorUri?: FieldPolicy<any> | FieldReadFunction<any>;
	description?: FieldPolicy<any> | FieldReadFunction<any>;
	id?: FieldPolicy<any> | FieldReadFunction<any>;
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
	name?: FieldPolicy<any> | FieldReadFunction<any>;
	screenshot?: FieldPolicy<any> | FieldReadFunction<any>;
	slug?: FieldPolicy<any> | FieldReadFunction<any>;
	tags?: FieldPolicy<any> | FieldReadFunction<any>;
	themeUri?: FieldPolicy<any> | FieldReadFunction<any>;
	version?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToThemeConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| RootQueryToThemeConnectionKeySpecifier
)[];
export type RootQueryToThemeConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToThemeConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| RootQueryToThemeConnectionEdgeKeySpecifier
)[];
export type RootQueryToThemeConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToUserRoleConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| RootQueryToUserRoleConnectionKeySpecifier
)[];
export type RootQueryToUserRoleConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToUserRoleConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| RootQueryToUserRoleConnectionEdgeKeySpecifier
)[];
export type RootQueryToUserRoleConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToUserConnectionKeySpecifier = (
	| 'edges'
	| 'nodes'
	| 'pageInfo'
	| RootQueryToUserConnectionKeySpecifier
)[];
export type RootQueryToUserConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>;
	nodes?: FieldPolicy<any> | FieldReadFunction<any>;
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToUserConnectionEdgeKeySpecifier = (
	| 'cursor'
	| 'node'
	| RootQueryToUserConnectionEdgeKeySpecifier
)[];
export type RootQueryToUserConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>;
	node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type WritingSettingsKeySpecifier = (
	| 'defaultCategory'
	| 'defaultPostFormat'
	| 'useSmilies'
	| WritingSettingsKeySpecifier
)[];
export type WritingSettingsFieldPolicy = {
	defaultCategory?: FieldPolicy<any> | FieldReadFunction<any>;
	defaultPostFormat?: FieldPolicy<any> | FieldReadFunction<any>;
	useSmilies?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootMutationKeySpecifier = (
	| 'updateCategory'
	| 'updatePostFormat'
	| 'updateTag'
	| 'createAbout'
	| 'createCategory'
	| 'createComment'
	| 'createConsultant'
	| 'createMediaItem'
	| 'createPage'
	| 'createPosition'
	| 'createPost'
	| 'createPostFormat'
	| 'createTag'
	| 'createTestimonial'
	| 'createUser'
	| 'deleteAbout'
	| 'deleteCategory'
	| 'deleteComment'
	| 'deleteConsultant'
	| 'deleteMediaItem'
	| 'deletePage'
	| 'deletePosition'
	| 'deletePost'
	| 'deletePostFormat'
	| 'deleteTag'
	| 'deleteTestimonial'
	| 'deleteUser'
	| 'increaseCount'
	| 'login'
	| 'refreshJwtAuthToken'
	| 'registerUser'
	| 'resetUserPassword'
	| 'restoreComment'
	| 'sendPasswordResetEmail'
	| 'updateAbout'
	| 'updateComment'
	| 'updateConsultant'
	| 'updateMediaItem'
	| 'updatePage'
	| 'updatePosition'
	| 'updatePost'
	| 'updateSettings'
	| 'updateTestimonial'
	| 'updateUser'
	| RootMutationKeySpecifier
)[];
export type RootMutationFieldPolicy = {
	updateCategory?: FieldPolicy<any> | FieldReadFunction<any>;
	updatePostFormat?: FieldPolicy<any> | FieldReadFunction<any>;
	updateTag?: FieldPolicy<any> | FieldReadFunction<any>;
	createAbout?: FieldPolicy<any> | FieldReadFunction<any>;
	createCategory?: FieldPolicy<any> | FieldReadFunction<any>;
	createComment?: FieldPolicy<any> | FieldReadFunction<any>;
	createConsultant?: FieldPolicy<any> | FieldReadFunction<any>;
	createMediaItem?: FieldPolicy<any> | FieldReadFunction<any>;
	createPage?: FieldPolicy<any> | FieldReadFunction<any>;
	createPosition?: FieldPolicy<any> | FieldReadFunction<any>;
	createPost?: FieldPolicy<any> | FieldReadFunction<any>;
	createPostFormat?: FieldPolicy<any> | FieldReadFunction<any>;
	createTag?: FieldPolicy<any> | FieldReadFunction<any>;
	createTestimonial?: FieldPolicy<any> | FieldReadFunction<any>;
	createUser?: FieldPolicy<any> | FieldReadFunction<any>;
	deleteAbout?: FieldPolicy<any> | FieldReadFunction<any>;
	deleteCategory?: FieldPolicy<any> | FieldReadFunction<any>;
	deleteComment?: FieldPolicy<any> | FieldReadFunction<any>;
	deleteConsultant?: FieldPolicy<any> | FieldReadFunction<any>;
	deleteMediaItem?: FieldPolicy<any> | FieldReadFunction<any>;
	deletePage?: FieldPolicy<any> | FieldReadFunction<any>;
	deletePosition?: FieldPolicy<any> | FieldReadFunction<any>;
	deletePost?: FieldPolicy<any> | FieldReadFunction<any>;
	deletePostFormat?: FieldPolicy<any> | FieldReadFunction<any>;
	deleteTag?: FieldPolicy<any> | FieldReadFunction<any>;
	deleteTestimonial?: FieldPolicy<any> | FieldReadFunction<any>;
	deleteUser?: FieldPolicy<any> | FieldReadFunction<any>;
	increaseCount?: FieldPolicy<any> | FieldReadFunction<any>;
	login?: FieldPolicy<any> | FieldReadFunction<any>;
	refreshJwtAuthToken?: FieldPolicy<any> | FieldReadFunction<any>;
	registerUser?: FieldPolicy<any> | FieldReadFunction<any>;
	resetUserPassword?: FieldPolicy<any> | FieldReadFunction<any>;
	restoreComment?: FieldPolicy<any> | FieldReadFunction<any>;
	sendPasswordResetEmail?: FieldPolicy<any> | FieldReadFunction<any>;
	updateAbout?: FieldPolicy<any> | FieldReadFunction<any>;
	updateComment?: FieldPolicy<any> | FieldReadFunction<any>;
	updateConsultant?: FieldPolicy<any> | FieldReadFunction<any>;
	updateMediaItem?: FieldPolicy<any> | FieldReadFunction<any>;
	updatePage?: FieldPolicy<any> | FieldReadFunction<any>;
	updatePosition?: FieldPolicy<any> | FieldReadFunction<any>;
	updatePost?: FieldPolicy<any> | FieldReadFunction<any>;
	updateSettings?: FieldPolicy<any> | FieldReadFunction<any>;
	updateTestimonial?: FieldPolicy<any> | FieldReadFunction<any>;
	updateUser?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateCategoryPayloadKeySpecifier = (
	| 'category'
	| 'clientMutationId'
	| UpdateCategoryPayloadKeySpecifier
)[];
export type UpdateCategoryPayloadFieldPolicy = {
	category?: FieldPolicy<any> | FieldReadFunction<any>;
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdatePostFormatPayloadKeySpecifier = (
	| 'clientMutationId'
	| 'postFormat'
	| UpdatePostFormatPayloadKeySpecifier
)[];
export type UpdatePostFormatPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	postFormat?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateTagPayloadKeySpecifier = (
	| 'clientMutationId'
	| 'tag'
	| UpdateTagPayloadKeySpecifier
)[];
export type UpdateTagPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	tag?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreateAboutPayloadKeySpecifier = (
	| 'about'
	| 'clientMutationId'
	| CreateAboutPayloadKeySpecifier
)[];
export type CreateAboutPayloadFieldPolicy = {
	about?: FieldPolicy<any> | FieldReadFunction<any>;
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreateCategoryPayloadKeySpecifier = (
	| 'category'
	| 'clientMutationId'
	| CreateCategoryPayloadKeySpecifier
)[];
export type CreateCategoryPayloadFieldPolicy = {
	category?: FieldPolicy<any> | FieldReadFunction<any>;
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreateCommentPayloadKeySpecifier = (
	| 'clientMutationId'
	| 'comment'
	| 'success'
	| CreateCommentPayloadKeySpecifier
)[];
export type CreateCommentPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	comment?: FieldPolicy<any> | FieldReadFunction<any>;
	success?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreateConsultantPayloadKeySpecifier = (
	| 'clientMutationId'
	| 'consultant'
	| CreateConsultantPayloadKeySpecifier
)[];
export type CreateConsultantPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	consultant?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreateMediaItemPayloadKeySpecifier = (
	| 'clientMutationId'
	| 'mediaItem'
	| CreateMediaItemPayloadKeySpecifier
)[];
export type CreateMediaItemPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	mediaItem?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreatePagePayloadKeySpecifier = (
	| 'clientMutationId'
	| 'page'
	| CreatePagePayloadKeySpecifier
)[];
export type CreatePagePayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	page?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreatePositionPayloadKeySpecifier = (
	| 'clientMutationId'
	| 'position'
	| CreatePositionPayloadKeySpecifier
)[];
export type CreatePositionPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	position?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreatePostPayloadKeySpecifier = (
	| 'clientMutationId'
	| 'post'
	| CreatePostPayloadKeySpecifier
)[];
export type CreatePostPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	post?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreatePostFormatPayloadKeySpecifier = (
	| 'clientMutationId'
	| 'postFormat'
	| CreatePostFormatPayloadKeySpecifier
)[];
export type CreatePostFormatPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	postFormat?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreateTagPayloadKeySpecifier = (
	| 'clientMutationId'
	| 'tag'
	| CreateTagPayloadKeySpecifier
)[];
export type CreateTagPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	tag?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreateTestimonialPayloadKeySpecifier = (
	| 'clientMutationId'
	| 'testimonial'
	| CreateTestimonialPayloadKeySpecifier
)[];
export type CreateTestimonialPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	testimonial?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreateUserPayloadKeySpecifier = (
	| 'clientMutationId'
	| 'user'
	| CreateUserPayloadKeySpecifier
)[];
export type CreateUserPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteAboutPayloadKeySpecifier = (
	| 'about'
	| 'clientMutationId'
	| 'deletedId'
	| DeleteAboutPayloadKeySpecifier
)[];
export type DeleteAboutPayloadFieldPolicy = {
	about?: FieldPolicy<any> | FieldReadFunction<any>;
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	deletedId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteCategoryPayloadKeySpecifier = (
	| 'category'
	| 'clientMutationId'
	| 'deletedId'
	| DeleteCategoryPayloadKeySpecifier
)[];
export type DeleteCategoryPayloadFieldPolicy = {
	category?: FieldPolicy<any> | FieldReadFunction<any>;
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	deletedId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteCommentPayloadKeySpecifier = (
	| 'clientMutationId'
	| 'comment'
	| 'deletedId'
	| DeleteCommentPayloadKeySpecifier
)[];
export type DeleteCommentPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	comment?: FieldPolicy<any> | FieldReadFunction<any>;
	deletedId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteConsultantPayloadKeySpecifier = (
	| 'clientMutationId'
	| 'consultant'
	| 'deletedId'
	| DeleteConsultantPayloadKeySpecifier
)[];
export type DeleteConsultantPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	consultant?: FieldPolicy<any> | FieldReadFunction<any>;
	deletedId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteMediaItemPayloadKeySpecifier = (
	| 'clientMutationId'
	| 'deletedId'
	| 'mediaItem'
	| DeleteMediaItemPayloadKeySpecifier
)[];
export type DeleteMediaItemPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	deletedId?: FieldPolicy<any> | FieldReadFunction<any>;
	mediaItem?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeletePagePayloadKeySpecifier = (
	| 'clientMutationId'
	| 'deletedId'
	| 'page'
	| DeletePagePayloadKeySpecifier
)[];
export type DeletePagePayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	deletedId?: FieldPolicy<any> | FieldReadFunction<any>;
	page?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeletePositionPayloadKeySpecifier = (
	| 'clientMutationId'
	| 'deletedId'
	| 'position'
	| DeletePositionPayloadKeySpecifier
)[];
export type DeletePositionPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	deletedId?: FieldPolicy<any> | FieldReadFunction<any>;
	position?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeletePostPayloadKeySpecifier = (
	| 'clientMutationId'
	| 'deletedId'
	| 'post'
	| DeletePostPayloadKeySpecifier
)[];
export type DeletePostPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	deletedId?: FieldPolicy<any> | FieldReadFunction<any>;
	post?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeletePostFormatPayloadKeySpecifier = (
	| 'clientMutationId'
	| 'deletedId'
	| 'postFormat'
	| DeletePostFormatPayloadKeySpecifier
)[];
export type DeletePostFormatPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	deletedId?: FieldPolicy<any> | FieldReadFunction<any>;
	postFormat?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteTagPayloadKeySpecifier = (
	| 'clientMutationId'
	| 'deletedId'
	| 'tag'
	| DeleteTagPayloadKeySpecifier
)[];
export type DeleteTagPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	deletedId?: FieldPolicy<any> | FieldReadFunction<any>;
	tag?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteTestimonialPayloadKeySpecifier = (
	| 'clientMutationId'
	| 'deletedId'
	| 'testimonial'
	| DeleteTestimonialPayloadKeySpecifier
)[];
export type DeleteTestimonialPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	deletedId?: FieldPolicy<any> | FieldReadFunction<any>;
	testimonial?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteUserPayloadKeySpecifier = (
	| 'clientMutationId'
	| 'deletedId'
	| 'user'
	| DeleteUserPayloadKeySpecifier
)[];
export type DeleteUserPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	deletedId?: FieldPolicy<any> | FieldReadFunction<any>;
	user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LoginPayloadKeySpecifier = (
	| 'authToken'
	| 'clientMutationId'
	| 'refreshToken'
	| 'user'
	| LoginPayloadKeySpecifier
)[];
export type LoginPayloadFieldPolicy = {
	authToken?: FieldPolicy<any> | FieldReadFunction<any>;
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	refreshToken?: FieldPolicy<any> | FieldReadFunction<any>;
	user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RefreshJwtAuthTokenPayloadKeySpecifier = (
	| 'authToken'
	| 'clientMutationId'
	| RefreshJwtAuthTokenPayloadKeySpecifier
)[];
export type RefreshJwtAuthTokenPayloadFieldPolicy = {
	authToken?: FieldPolicy<any> | FieldReadFunction<any>;
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RegisterUserPayloadKeySpecifier = (
	| 'clientMutationId'
	| 'user'
	| RegisterUserPayloadKeySpecifier
)[];
export type RegisterUserPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ResetUserPasswordPayloadKeySpecifier = (
	| 'clientMutationId'
	| 'user'
	| ResetUserPasswordPayloadKeySpecifier
)[];
export type ResetUserPasswordPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RestoreCommentPayloadKeySpecifier = (
	| 'clientMutationId'
	| 'comment'
	| 'restoredId'
	| RestoreCommentPayloadKeySpecifier
)[];
export type RestoreCommentPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	comment?: FieldPolicy<any> | FieldReadFunction<any>;
	restoredId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SendPasswordResetEmailPayloadKeySpecifier = (
	| 'clientMutationId'
	| 'user'
	| SendPasswordResetEmailPayloadKeySpecifier
)[];
export type SendPasswordResetEmailPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateAboutPayloadKeySpecifier = (
	| 'about'
	| 'clientMutationId'
	| UpdateAboutPayloadKeySpecifier
)[];
export type UpdateAboutPayloadFieldPolicy = {
	about?: FieldPolicy<any> | FieldReadFunction<any>;
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateCommentPayloadKeySpecifier = (
	| 'clientMutationId'
	| 'comment'
	| 'success'
	| UpdateCommentPayloadKeySpecifier
)[];
export type UpdateCommentPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	comment?: FieldPolicy<any> | FieldReadFunction<any>;
	success?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateConsultantPayloadKeySpecifier = (
	| 'clientMutationId'
	| 'consultant'
	| UpdateConsultantPayloadKeySpecifier
)[];
export type UpdateConsultantPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	consultant?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateMediaItemPayloadKeySpecifier = (
	| 'clientMutationId'
	| 'mediaItem'
	| UpdateMediaItemPayloadKeySpecifier
)[];
export type UpdateMediaItemPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	mediaItem?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdatePagePayloadKeySpecifier = (
	| 'clientMutationId'
	| 'page'
	| UpdatePagePayloadKeySpecifier
)[];
export type UpdatePagePayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	page?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdatePositionPayloadKeySpecifier = (
	| 'clientMutationId'
	| 'position'
	| UpdatePositionPayloadKeySpecifier
)[];
export type UpdatePositionPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	position?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdatePostPayloadKeySpecifier = (
	| 'clientMutationId'
	| 'post'
	| UpdatePostPayloadKeySpecifier
)[];
export type UpdatePostPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	post?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateSettingsPayloadKeySpecifier = (
	| 'allSettings'
	| 'clientMutationId'
	| 'discussionSettings'
	| 'generalSettings'
	| 'readingSettings'
	| 'writingSettings'
	| UpdateSettingsPayloadKeySpecifier
)[];
export type UpdateSettingsPayloadFieldPolicy = {
	allSettings?: FieldPolicy<any> | FieldReadFunction<any>;
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	discussionSettings?: FieldPolicy<any> | FieldReadFunction<any>;
	generalSettings?: FieldPolicy<any> | FieldReadFunction<any>;
	readingSettings?: FieldPolicy<any> | FieldReadFunction<any>;
	writingSettings?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateTestimonialPayloadKeySpecifier = (
	| 'clientMutationId'
	| 'testimonial'
	| UpdateTestimonialPayloadKeySpecifier
)[];
export type UpdateTestimonialPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	testimonial?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateUserPayloadKeySpecifier = (
	| 'clientMutationId'
	| 'user'
	| UpdateUserPayloadKeySpecifier
)[];
export type UpdateUserPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
	user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CommentAuthorKeySpecifier = (
	| 'databaseId'
	| 'email'
	| 'id'
	| 'isRestricted'
	| 'name'
	| 'url'
	| CommentAuthorKeySpecifier
)[];
export type CommentAuthorFieldPolicy = {
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
	email?: FieldPolicy<any> | FieldReadFunction<any>;
	id?: FieldPolicy<any> | FieldReadFunction<any>;
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
	name?: FieldPolicy<any> | FieldReadFunction<any>;
	url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DefaultTemplateKeySpecifier = (
	| 'templateName'
	| DefaultTemplateKeySpecifier
)[];
export type DefaultTemplateFieldPolicy = {
	templateName?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CoverTemplateKeySpecifier = (
	| 'templateName'
	| CoverTemplateKeySpecifier
)[];
export type CoverTemplateFieldPolicy = {
	templateName?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FullWidthTemplateKeySpecifier = (
	| 'templateName'
	| FullWidthTemplateKeySpecifier
)[];
export type FullWidthTemplateFieldPolicy = {
	templateName?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TypedTypePolicies = TypePolicies & {
	RootQuery?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| RootQueryKeySpecifier
			| (() => undefined | RootQueryKeySpecifier);
		fields?: RootQueryFieldPolicy;
	};
	About?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | AboutKeySpecifier | (() => undefined | AboutKeySpecifier);
		fields?: AboutFieldPolicy;
	};
	Node?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | NodeKeySpecifier | (() => undefined | NodeKeySpecifier);
		fields?: NodeFieldPolicy;
	};
	ContentNode?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| ContentNodeKeySpecifier
			| (() => undefined | ContentNodeKeySpecifier);
		fields?: ContentNodeFieldPolicy;
	};
	ContentNodeToContentTypeConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| ContentNodeToContentTypeConnectionEdgeKeySpecifier
			| (() => undefined | ContentNodeToContentTypeConnectionEdgeKeySpecifier);
		fields?: ContentNodeToContentTypeConnectionEdgeFieldPolicy;
	};
	ContentType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| ContentTypeKeySpecifier
			| (() => undefined | ContentTypeKeySpecifier);
		fields?: ContentTypeFieldPolicy;
	};
	UniformResourceIdentifiable?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| UniformResourceIdentifiableKeySpecifier
			| (() => undefined | UniformResourceIdentifiableKeySpecifier);
		fields?: UniformResourceIdentifiableFieldPolicy;
	};
	ContentTypeToTaxonomyConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| ContentTypeToTaxonomyConnectionKeySpecifier
			| (() => undefined | ContentTypeToTaxonomyConnectionKeySpecifier);
		fields?: ContentTypeToTaxonomyConnectionFieldPolicy;
	};
	ContentTypeToTaxonomyConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| ContentTypeToTaxonomyConnectionEdgeKeySpecifier
			| (() => undefined | ContentTypeToTaxonomyConnectionEdgeKeySpecifier);
		fields?: ContentTypeToTaxonomyConnectionEdgeFieldPolicy;
	};
	Taxonomy?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| TaxonomyKeySpecifier
			| (() => undefined | TaxonomyKeySpecifier);
		fields?: TaxonomyFieldPolicy;
	};
	TaxonomyToContentTypeConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| TaxonomyToContentTypeConnectionKeySpecifier
			| (() => undefined | TaxonomyToContentTypeConnectionKeySpecifier);
		fields?: TaxonomyToContentTypeConnectionFieldPolicy;
	};
	TaxonomyToContentTypeConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| TaxonomyToContentTypeConnectionEdgeKeySpecifier
			| (() => undefined | TaxonomyToContentTypeConnectionEdgeKeySpecifier);
		fields?: TaxonomyToContentTypeConnectionEdgeFieldPolicy;
	};
	WPPageInfo?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| WPPageInfoKeySpecifier
			| (() => undefined | WPPageInfoKeySpecifier);
		fields?: WPPageInfoFieldPolicy;
	};
	SEOPostTypePageInfo?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| SEOPostTypePageInfoKeySpecifier
			| (() => undefined | SEOPostTypePageInfoKeySpecifier);
		fields?: SEOPostTypePageInfoFieldPolicy;
	};
	SEOPageInfoSchema?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| SEOPageInfoSchemaKeySpecifier
			| (() => undefined | SEOPageInfoSchemaKeySpecifier);
		fields?: SEOPageInfoSchemaFieldPolicy;
	};
	ContentTypeToContentNodeConnection?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| ContentTypeToContentNodeConnectionKeySpecifier
			| (() => undefined | ContentTypeToContentNodeConnectionKeySpecifier);
		fields?: ContentTypeToContentNodeConnectionFieldPolicy;
	};
	ContentTypeToContentNodeConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| ContentTypeToContentNodeConnectionEdgeKeySpecifier
			| (() => undefined | ContentTypeToContentNodeConnectionEdgeKeySpecifier);
		fields?: ContentTypeToContentNodeConnectionEdgeFieldPolicy;
	};
	PostTypeLabelDetails?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PostTypeLabelDetailsKeySpecifier
			| (() => undefined | PostTypeLabelDetailsKeySpecifier);
		fields?: PostTypeLabelDetailsFieldPolicy;
	};
	ContentNodeToEditLockConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| ContentNodeToEditLockConnectionEdgeKeySpecifier
			| (() => undefined | ContentNodeToEditLockConnectionEdgeKeySpecifier);
		fields?: ContentNodeToEditLockConnectionEdgeFieldPolicy;
	};
	User?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier);
		fields?: UserFieldPolicy;
	};
	Commenter?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| CommenterKeySpecifier
			| (() => undefined | CommenterKeySpecifier);
		fields?: CommenterFieldPolicy;
	};
	DatabaseIdentifier?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| DatabaseIdentifierKeySpecifier
			| (() => undefined | DatabaseIdentifierKeySpecifier);
		fields?: DatabaseIdentifierFieldPolicy;
	};
	UserToAboutConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| UserToAboutConnectionKeySpecifier
			| (() => undefined | UserToAboutConnectionKeySpecifier);
		fields?: UserToAboutConnectionFieldPolicy;
	};
	UserToAboutConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| UserToAboutConnectionEdgeKeySpecifier
			| (() => undefined | UserToAboutConnectionEdgeKeySpecifier);
		fields?: UserToAboutConnectionEdgeFieldPolicy;
	};
	Avatar?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| AvatarKeySpecifier
			| (() => undefined | AvatarKeySpecifier);
		fields?: AvatarFieldPolicy;
	};
	UserToCommentConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| UserToCommentConnectionKeySpecifier
			| (() => undefined | UserToCommentConnectionKeySpecifier);
		fields?: UserToCommentConnectionFieldPolicy;
	};
	UserToCommentConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| UserToCommentConnectionEdgeKeySpecifier
			| (() => undefined | UserToCommentConnectionEdgeKeySpecifier);
		fields?: UserToCommentConnectionEdgeFieldPolicy;
	};
	Comment?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| CommentKeySpecifier
			| (() => undefined | CommentKeySpecifier);
		fields?: CommentFieldPolicy;
	};
	CommentToCommenterConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| CommentToCommenterConnectionEdgeKeySpecifier
			| (() => undefined | CommentToCommenterConnectionEdgeKeySpecifier);
		fields?: CommentToCommenterConnectionEdgeFieldPolicy;
	};
	CommentToContentNodeConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| CommentToContentNodeConnectionEdgeKeySpecifier
			| (() => undefined | CommentToContentNodeConnectionEdgeKeySpecifier);
		fields?: CommentToContentNodeConnectionEdgeFieldPolicy;
	};
	CommentToParentCommentConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| CommentToParentCommentConnectionEdgeKeySpecifier
			| (() => undefined | CommentToParentCommentConnectionEdgeKeySpecifier);
		fields?: CommentToParentCommentConnectionEdgeFieldPolicy;
	};
	CommentToCommentConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| CommentToCommentConnectionKeySpecifier
			| (() => undefined | CommentToCommentConnectionKeySpecifier);
		fields?: CommentToCommentConnectionFieldPolicy;
	};
	CommentToCommentConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| CommentToCommentConnectionEdgeKeySpecifier
			| (() => undefined | CommentToCommentConnectionEdgeKeySpecifier);
		fields?: CommentToCommentConnectionEdgeFieldPolicy;
	};
	UserToConsultantConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| UserToConsultantConnectionKeySpecifier
			| (() => undefined | UserToConsultantConnectionKeySpecifier);
		fields?: UserToConsultantConnectionFieldPolicy;
	};
	UserToConsultantConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| UserToConsultantConnectionEdgeKeySpecifier
			| (() => undefined | UserToConsultantConnectionEdgeKeySpecifier);
		fields?: UserToConsultantConnectionEdgeFieldPolicy;
	};
	Consultant?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| ConsultantKeySpecifier
			| (() => undefined | ConsultantKeySpecifier);
		fields?: ConsultantFieldPolicy;
	};
	NodeWithTemplate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| NodeWithTemplateKeySpecifier
			| (() => undefined | NodeWithTemplateKeySpecifier);
		fields?: NodeWithTemplateFieldPolicy;
	};
	ContentTemplate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| ContentTemplateKeySpecifier
			| (() => undefined | ContentTemplateKeySpecifier);
		fields?: ContentTemplateFieldPolicy;
	};
	NodeWithTitle?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| NodeWithTitleKeySpecifier
			| (() => undefined | NodeWithTitleKeySpecifier);
		fields?: NodeWithTitleFieldPolicy;
	};
	NodeWithContentEditor?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| NodeWithContentEditorKeySpecifier
			| (() => undefined | NodeWithContentEditorKeySpecifier);
		fields?: NodeWithContentEditorFieldPolicy;
	};
	NodeWithAuthor?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| NodeWithAuthorKeySpecifier
			| (() => undefined | NodeWithAuthorKeySpecifier);
		fields?: NodeWithAuthorFieldPolicy;
	};
	NodeWithAuthorToUserConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| NodeWithAuthorToUserConnectionEdgeKeySpecifier
			| (() => undefined | NodeWithAuthorToUserConnectionEdgeKeySpecifier);
		fields?: NodeWithAuthorToUserConnectionEdgeFieldPolicy;
	};
	NodeWithFeaturedImage?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| NodeWithFeaturedImageKeySpecifier
			| (() => undefined | NodeWithFeaturedImageKeySpecifier);
		fields?: NodeWithFeaturedImageFieldPolicy;
	};
	NodeWithFeaturedImageToMediaItemConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| NodeWithFeaturedImageToMediaItemConnectionEdgeKeySpecifier
			| (() =>
					| undefined
					| NodeWithFeaturedImageToMediaItemConnectionEdgeKeySpecifier);
		fields?: NodeWithFeaturedImageToMediaItemConnectionEdgeFieldPolicy;
	};
	MediaItem?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| MediaItemKeySpecifier
			| (() => undefined | MediaItemKeySpecifier);
		fields?: MediaItemFieldPolicy;
	};
	NodeWithComments?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| NodeWithCommentsKeySpecifier
			| (() => undefined | NodeWithCommentsKeySpecifier);
		fields?: NodeWithCommentsFieldPolicy;
	};
	HierarchicalContentNode?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| HierarchicalContentNodeKeySpecifier
			| (() => undefined | HierarchicalContentNodeKeySpecifier);
		fields?: HierarchicalContentNodeFieldPolicy;
	};
	HierarchicalContentNodeToContentNodeAncestorsConnection?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| HierarchicalContentNodeToContentNodeAncestorsConnectionKeySpecifier
			| (() =>
					| undefined
					| HierarchicalContentNodeToContentNodeAncestorsConnectionKeySpecifier);
		fields?: HierarchicalContentNodeToContentNodeAncestorsConnectionFieldPolicy;
	};
	HierarchicalContentNodeToContentNodeAncestorsConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| HierarchicalContentNodeToContentNodeAncestorsConnectionEdgeKeySpecifier
			| (() =>
					| undefined
					| HierarchicalContentNodeToContentNodeAncestorsConnectionEdgeKeySpecifier);
		fields?: HierarchicalContentNodeToContentNodeAncestorsConnectionEdgeFieldPolicy;
	};
	HierarchicalContentNodeToContentNodeChildrenConnection?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| HierarchicalContentNodeToContentNodeChildrenConnectionKeySpecifier
			| (() =>
					| undefined
					| HierarchicalContentNodeToContentNodeChildrenConnectionKeySpecifier);
		fields?: HierarchicalContentNodeToContentNodeChildrenConnectionFieldPolicy;
	};
	HierarchicalContentNodeToContentNodeChildrenConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| HierarchicalContentNodeToContentNodeChildrenConnectionEdgeKeySpecifier
			| (() =>
					| undefined
					| HierarchicalContentNodeToContentNodeChildrenConnectionEdgeKeySpecifier);
		fields?: HierarchicalContentNodeToContentNodeChildrenConnectionEdgeFieldPolicy;
	};
	HierarchicalContentNodeToParentContentNodeConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| HierarchicalContentNodeToParentContentNodeConnectionEdgeKeySpecifier
			| (() =>
					| undefined
					| HierarchicalContentNodeToParentContentNodeConnectionEdgeKeySpecifier);
		fields?: HierarchicalContentNodeToParentContentNodeConnectionEdgeFieldPolicy;
	};
	MediaItemToCommentConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| MediaItemToCommentConnectionKeySpecifier
			| (() => undefined | MediaItemToCommentConnectionKeySpecifier);
		fields?: MediaItemToCommentConnectionFieldPolicy;
	};
	MediaItemToCommentConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| MediaItemToCommentConnectionEdgeKeySpecifier
			| (() => undefined | MediaItemToCommentConnectionEdgeKeySpecifier);
		fields?: MediaItemToCommentConnectionEdgeFieldPolicy;
	};
	ContentNodeToEnqueuedScriptConnection?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| ContentNodeToEnqueuedScriptConnectionKeySpecifier
			| (() => undefined | ContentNodeToEnqueuedScriptConnectionKeySpecifier);
		fields?: ContentNodeToEnqueuedScriptConnectionFieldPolicy;
	};
	ContentNodeToEnqueuedScriptConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| ContentNodeToEnqueuedScriptConnectionEdgeKeySpecifier
			| (() => undefined | ContentNodeToEnqueuedScriptConnectionEdgeKeySpecifier);
		fields?: ContentNodeToEnqueuedScriptConnectionEdgeFieldPolicy;
	};
	EnqueuedScript?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| EnqueuedScriptKeySpecifier
			| (() => undefined | EnqueuedScriptKeySpecifier);
		fields?: EnqueuedScriptFieldPolicy;
	};
	EnqueuedAsset?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| EnqueuedAssetKeySpecifier
			| (() => undefined | EnqueuedAssetKeySpecifier);
		fields?: EnqueuedAssetFieldPolicy;
	};
	ContentNodeToEnqueuedStylesheetConnection?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| ContentNodeToEnqueuedStylesheetConnectionKeySpecifier
			| (() => undefined | ContentNodeToEnqueuedStylesheetConnectionKeySpecifier);
		fields?: ContentNodeToEnqueuedStylesheetConnectionFieldPolicy;
	};
	ContentNodeToEnqueuedStylesheetConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| ContentNodeToEnqueuedStylesheetConnectionEdgeKeySpecifier
			| (() =>
					| undefined
					| ContentNodeToEnqueuedStylesheetConnectionEdgeKeySpecifier);
		fields?: ContentNodeToEnqueuedStylesheetConnectionEdgeFieldPolicy;
	};
	EnqueuedStylesheet?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| EnqueuedStylesheetKeySpecifier
			| (() => undefined | EnqueuedStylesheetKeySpecifier);
		fields?: EnqueuedStylesheetFieldPolicy;
	};
	ContentNodeToEditLastConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| ContentNodeToEditLastConnectionEdgeKeySpecifier
			| (() => undefined | ContentNodeToEditLastConnectionEdgeKeySpecifier);
		fields?: ContentNodeToEditLastConnectionEdgeFieldPolicy;
	};
	MediaDetails?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| MediaDetailsKeySpecifier
			| (() => undefined | MediaDetailsKeySpecifier);
		fields?: MediaDetailsFieldPolicy;
	};
	MediaItemMeta?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| MediaItemMetaKeySpecifier
			| (() => undefined | MediaItemMetaKeySpecifier);
		fields?: MediaItemMetaFieldPolicy;
	};
	MediaSize?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| MediaSizeKeySpecifier
			| (() => undefined | MediaSizeKeySpecifier);
		fields?: MediaSizeFieldPolicy;
	};
	PostTypeSEO?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PostTypeSEOKeySpecifier
			| (() => undefined | PostTypeSEOKeySpecifier);
		fields?: PostTypeSEOFieldPolicy;
	};
	SEOPostTypeBreadcrumbs?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| SEOPostTypeBreadcrumbsKeySpecifier
			| (() => undefined | SEOPostTypeBreadcrumbsKeySpecifier);
		fields?: SEOPostTypeBreadcrumbsFieldPolicy;
	};
	SEOPostTypeSchema?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| SEOPostTypeSchemaKeySpecifier
			| (() => undefined | SEOPostTypeSchemaKeySpecifier);
		fields?: SEOPostTypeSchemaFieldPolicy;
	};
	NodeWithExcerpt?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| NodeWithExcerptKeySpecifier
			| (() => undefined | NodeWithExcerptKeySpecifier);
		fields?: NodeWithExcerptFieldPolicy;
	};
	NodeWithTrackbacks?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| NodeWithTrackbacksKeySpecifier
			| (() => undefined | NodeWithTrackbacksKeySpecifier);
		fields?: NodeWithTrackbacksFieldPolicy;
	};
	NodeWithRevisions?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| NodeWithRevisionsKeySpecifier
			| (() => undefined | NodeWithRevisionsKeySpecifier);
		fields?: NodeWithRevisionsFieldPolicy;
	};
	NodeWithRevisionsToContentNodeConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| NodeWithRevisionsToContentNodeConnectionEdgeKeySpecifier
			| (() =>
					| undefined
					| NodeWithRevisionsToContentNodeConnectionEdgeKeySpecifier);
		fields?: NodeWithRevisionsToContentNodeConnectionEdgeFieldPolicy;
	};
	NodeWithPageAttributes?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| NodeWithPageAttributesKeySpecifier
			| (() => undefined | NodeWithPageAttributesKeySpecifier);
		fields?: NodeWithPageAttributesFieldPolicy;
	};
	MenuItemLinkable?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| MenuItemLinkableKeySpecifier
			| (() => undefined | MenuItemLinkableKeySpecifier);
		fields?: MenuItemLinkableFieldPolicy;
	};
	ConsultantToCategoryConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| ConsultantToCategoryConnectionKeySpecifier
			| (() => undefined | ConsultantToCategoryConnectionKeySpecifier);
		fields?: ConsultantToCategoryConnectionFieldPolicy;
	};
	ConsultantToCategoryConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| ConsultantToCategoryConnectionEdgeKeySpecifier
			| (() => undefined | ConsultantToCategoryConnectionEdgeKeySpecifier);
		fields?: ConsultantToCategoryConnectionEdgeFieldPolicy;
	};
	Category?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| CategoryKeySpecifier
			| (() => undefined | CategoryKeySpecifier);
		fields?: CategoryFieldPolicy;
	};
	TermNode?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| TermNodeKeySpecifier
			| (() => undefined | TermNodeKeySpecifier);
		fields?: TermNodeFieldPolicy;
	};
	TermNodeToEnqueuedScriptConnection?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| TermNodeToEnqueuedScriptConnectionKeySpecifier
			| (() => undefined | TermNodeToEnqueuedScriptConnectionKeySpecifier);
		fields?: TermNodeToEnqueuedScriptConnectionFieldPolicy;
	};
	TermNodeToEnqueuedScriptConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| TermNodeToEnqueuedScriptConnectionEdgeKeySpecifier
			| (() => undefined | TermNodeToEnqueuedScriptConnectionEdgeKeySpecifier);
		fields?: TermNodeToEnqueuedScriptConnectionEdgeFieldPolicy;
	};
	TermNodeToEnqueuedStylesheetConnection?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| TermNodeToEnqueuedStylesheetConnectionKeySpecifier
			| (() => undefined | TermNodeToEnqueuedStylesheetConnectionKeySpecifier);
		fields?: TermNodeToEnqueuedStylesheetConnectionFieldPolicy;
	};
	TermNodeToEnqueuedStylesheetConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| TermNodeToEnqueuedStylesheetConnectionEdgeKeySpecifier
			| (() => undefined | TermNodeToEnqueuedStylesheetConnectionEdgeKeySpecifier);
		fields?: TermNodeToEnqueuedStylesheetConnectionEdgeFieldPolicy;
	};
	HierarchicalTermNode?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| HierarchicalTermNodeKeySpecifier
			| (() => undefined | HierarchicalTermNodeKeySpecifier);
		fields?: HierarchicalTermNodeFieldPolicy;
	};
	CategoryToAboutConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| CategoryToAboutConnectionKeySpecifier
			| (() => undefined | CategoryToAboutConnectionKeySpecifier);
		fields?: CategoryToAboutConnectionFieldPolicy;
	};
	CategoryToAboutConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| CategoryToAboutConnectionEdgeKeySpecifier
			| (() => undefined | CategoryToAboutConnectionEdgeKeySpecifier);
		fields?: CategoryToAboutConnectionEdgeFieldPolicy;
	};
	CategoryToAncestorsCategoryConnection?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| CategoryToAncestorsCategoryConnectionKeySpecifier
			| (() => undefined | CategoryToAncestorsCategoryConnectionKeySpecifier);
		fields?: CategoryToAncestorsCategoryConnectionFieldPolicy;
	};
	CategoryToAncestorsCategoryConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| CategoryToAncestorsCategoryConnectionEdgeKeySpecifier
			| (() => undefined | CategoryToAncestorsCategoryConnectionEdgeKeySpecifier);
		fields?: CategoryToAncestorsCategoryConnectionEdgeFieldPolicy;
	};
	CategoryToCategoryConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| CategoryToCategoryConnectionKeySpecifier
			| (() => undefined | CategoryToCategoryConnectionKeySpecifier);
		fields?: CategoryToCategoryConnectionFieldPolicy;
	};
	CategoryToCategoryConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| CategoryToCategoryConnectionEdgeKeySpecifier
			| (() => undefined | CategoryToCategoryConnectionEdgeKeySpecifier);
		fields?: CategoryToCategoryConnectionEdgeFieldPolicy;
	};
	CategoryToConsultantConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| CategoryToConsultantConnectionKeySpecifier
			| (() => undefined | CategoryToConsultantConnectionKeySpecifier);
		fields?: CategoryToConsultantConnectionFieldPolicy;
	};
	CategoryToConsultantConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| CategoryToConsultantConnectionEdgeKeySpecifier
			| (() => undefined | CategoryToConsultantConnectionEdgeKeySpecifier);
		fields?: CategoryToConsultantConnectionEdgeFieldPolicy;
	};
	CategoryToContentNodeConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| CategoryToContentNodeConnectionKeySpecifier
			| (() => undefined | CategoryToContentNodeConnectionKeySpecifier);
		fields?: CategoryToContentNodeConnectionFieldPolicy;
	};
	CategoryToContentNodeConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| CategoryToContentNodeConnectionEdgeKeySpecifier
			| (() => undefined | CategoryToContentNodeConnectionEdgeKeySpecifier);
		fields?: CategoryToContentNodeConnectionEdgeFieldPolicy;
	};
	CategoryToParentCategoryConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| CategoryToParentCategoryConnectionEdgeKeySpecifier
			| (() => undefined | CategoryToParentCategoryConnectionEdgeKeySpecifier);
		fields?: CategoryToParentCategoryConnectionEdgeFieldPolicy;
	};
	CategoryToPositionConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| CategoryToPositionConnectionKeySpecifier
			| (() => undefined | CategoryToPositionConnectionKeySpecifier);
		fields?: CategoryToPositionConnectionFieldPolicy;
	};
	CategoryToPositionConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| CategoryToPositionConnectionEdgeKeySpecifier
			| (() => undefined | CategoryToPositionConnectionEdgeKeySpecifier);
		fields?: CategoryToPositionConnectionEdgeFieldPolicy;
	};
	Position?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PositionKeySpecifier
			| (() => undefined | PositionKeySpecifier);
		fields?: PositionFieldPolicy;
	};
	PositionToCategoryConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PositionToCategoryConnectionKeySpecifier
			| (() => undefined | PositionToCategoryConnectionKeySpecifier);
		fields?: PositionToCategoryConnectionFieldPolicy;
	};
	PositionToCategoryConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PositionToCategoryConnectionEdgeKeySpecifier
			| (() => undefined | PositionToCategoryConnectionEdgeKeySpecifier);
		fields?: PositionToCategoryConnectionEdgeFieldPolicy;
	};
	PositionToCommentConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PositionToCommentConnectionKeySpecifier
			| (() => undefined | PositionToCommentConnectionKeySpecifier);
		fields?: PositionToCommentConnectionFieldPolicy;
	};
	PositionToCommentConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PositionToCommentConnectionEdgeKeySpecifier
			| (() => undefined | PositionToCommentConnectionEdgeKeySpecifier);
		fields?: PositionToCommentConnectionEdgeFieldPolicy;
	};
	PositionToPostFormatConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PositionToPostFormatConnectionKeySpecifier
			| (() => undefined | PositionToPostFormatConnectionKeySpecifier);
		fields?: PositionToPostFormatConnectionFieldPolicy;
	};
	PositionToPostFormatConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| PositionToPostFormatConnectionEdgeKeySpecifier
			| (() => undefined | PositionToPostFormatConnectionEdgeKeySpecifier);
		fields?: PositionToPostFormatConnectionEdgeFieldPolicy;
	};
	PostFormat?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PostFormatKeySpecifier
			| (() => undefined | PostFormatKeySpecifier);
		fields?: PostFormatFieldPolicy;
	};
	PostFormatToAboutConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PostFormatToAboutConnectionKeySpecifier
			| (() => undefined | PostFormatToAboutConnectionKeySpecifier);
		fields?: PostFormatToAboutConnectionFieldPolicy;
	};
	PostFormatToAboutConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PostFormatToAboutConnectionEdgeKeySpecifier
			| (() => undefined | PostFormatToAboutConnectionEdgeKeySpecifier);
		fields?: PostFormatToAboutConnectionEdgeFieldPolicy;
	};
	PostFormatToConsultantConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PostFormatToConsultantConnectionKeySpecifier
			| (() => undefined | PostFormatToConsultantConnectionKeySpecifier);
		fields?: PostFormatToConsultantConnectionFieldPolicy;
	};
	PostFormatToConsultantConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| PostFormatToConsultantConnectionEdgeKeySpecifier
			| (() => undefined | PostFormatToConsultantConnectionEdgeKeySpecifier);
		fields?: PostFormatToConsultantConnectionEdgeFieldPolicy;
	};
	PostFormatToContentNodeConnection?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| PostFormatToContentNodeConnectionKeySpecifier
			| (() => undefined | PostFormatToContentNodeConnectionKeySpecifier);
		fields?: PostFormatToContentNodeConnectionFieldPolicy;
	};
	PostFormatToContentNodeConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| PostFormatToContentNodeConnectionEdgeKeySpecifier
			| (() => undefined | PostFormatToContentNodeConnectionEdgeKeySpecifier);
		fields?: PostFormatToContentNodeConnectionEdgeFieldPolicy;
	};
	PostFormatToPositionConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PostFormatToPositionConnectionKeySpecifier
			| (() => undefined | PostFormatToPositionConnectionKeySpecifier);
		fields?: PostFormatToPositionConnectionFieldPolicy;
	};
	PostFormatToPositionConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| PostFormatToPositionConnectionEdgeKeySpecifier
			| (() => undefined | PostFormatToPositionConnectionEdgeKeySpecifier);
		fields?: PostFormatToPositionConnectionEdgeFieldPolicy;
	};
	PostFormatToPostConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PostFormatToPostConnectionKeySpecifier
			| (() => undefined | PostFormatToPostConnectionKeySpecifier);
		fields?: PostFormatToPostConnectionFieldPolicy;
	};
	PostFormatToPostConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PostFormatToPostConnectionEdgeKeySpecifier
			| (() => undefined | PostFormatToPostConnectionEdgeKeySpecifier);
		fields?: PostFormatToPostConnectionEdgeFieldPolicy;
	};
	Post?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | PostKeySpecifier | (() => undefined | PostKeySpecifier);
		fields?: PostFieldPolicy;
	};
	PostToCategoryConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PostToCategoryConnectionKeySpecifier
			| (() => undefined | PostToCategoryConnectionKeySpecifier);
		fields?: PostToCategoryConnectionFieldPolicy;
	};
	PostToCategoryConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PostToCategoryConnectionEdgeKeySpecifier
			| (() => undefined | PostToCategoryConnectionEdgeKeySpecifier);
		fields?: PostToCategoryConnectionEdgeFieldPolicy;
	};
	PostToCommentConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PostToCommentConnectionKeySpecifier
			| (() => undefined | PostToCommentConnectionKeySpecifier);
		fields?: PostToCommentConnectionFieldPolicy;
	};
	PostToCommentConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PostToCommentConnectionEdgeKeySpecifier
			| (() => undefined | PostToCommentConnectionEdgeKeySpecifier);
		fields?: PostToCommentConnectionEdgeFieldPolicy;
	};
	PostToPostFormatConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PostToPostFormatConnectionKeySpecifier
			| (() => undefined | PostToPostFormatConnectionKeySpecifier);
		fields?: PostToPostFormatConnectionFieldPolicy;
	};
	PostToPostFormatConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PostToPostFormatConnectionEdgeKeySpecifier
			| (() => undefined | PostToPostFormatConnectionEdgeKeySpecifier);
		fields?: PostToPostFormatConnectionEdgeFieldPolicy;
	};
	PostToPreviewConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PostToPreviewConnectionEdgeKeySpecifier
			| (() => undefined | PostToPreviewConnectionEdgeKeySpecifier);
		fields?: PostToPreviewConnectionEdgeFieldPolicy;
	};
	PostToRevisionConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PostToRevisionConnectionKeySpecifier
			| (() => undefined | PostToRevisionConnectionKeySpecifier);
		fields?: PostToRevisionConnectionFieldPolicy;
	};
	PostToRevisionConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PostToRevisionConnectionEdgeKeySpecifier
			| (() => undefined | PostToRevisionConnectionEdgeKeySpecifier);
		fields?: PostToRevisionConnectionEdgeFieldPolicy;
	};
	Post_Social?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| Post_SocialKeySpecifier
			| (() => undefined | Post_SocialKeySpecifier);
		fields?: Post_SocialFieldPolicy;
	};
	PostToTagConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PostToTagConnectionKeySpecifier
			| (() => undefined | PostToTagConnectionKeySpecifier);
		fields?: PostToTagConnectionFieldPolicy;
	};
	PostToTagConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PostToTagConnectionEdgeKeySpecifier
			| (() => undefined | PostToTagConnectionEdgeKeySpecifier);
		fields?: PostToTagConnectionEdgeFieldPolicy;
	};
	Tag?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | TagKeySpecifier | (() => undefined | TagKeySpecifier);
		fields?: TagFieldPolicy;
	};
	TagToContentNodeConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| TagToContentNodeConnectionKeySpecifier
			| (() => undefined | TagToContentNodeConnectionKeySpecifier);
		fields?: TagToContentNodeConnectionFieldPolicy;
	};
	TagToContentNodeConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| TagToContentNodeConnectionEdgeKeySpecifier
			| (() => undefined | TagToContentNodeConnectionEdgeKeySpecifier);
		fields?: TagToContentNodeConnectionEdgeFieldPolicy;
	};
	TagToPostConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| TagToPostConnectionKeySpecifier
			| (() => undefined | TagToPostConnectionKeySpecifier);
		fields?: TagToPostConnectionFieldPolicy;
	};
	TagToPostConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| TagToPostConnectionEdgeKeySpecifier
			| (() => undefined | TagToPostConnectionEdgeKeySpecifier);
		fields?: TagToPostConnectionEdgeFieldPolicy;
	};
	TaxonomySEO?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| TaxonomySEOKeySpecifier
			| (() => undefined | TaxonomySEOKeySpecifier);
		fields?: TaxonomySEOFieldPolicy;
	};
	SEOTaxonomySchema?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| SEOTaxonomySchemaKeySpecifier
			| (() => undefined | SEOTaxonomySchemaKeySpecifier);
		fields?: SEOTaxonomySchemaFieldPolicy;
	};
	TagToTaxonomyConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| TagToTaxonomyConnectionEdgeKeySpecifier
			| (() => undefined | TagToTaxonomyConnectionEdgeKeySpecifier);
		fields?: TagToTaxonomyConnectionEdgeFieldPolicy;
	};
	PostToTermNodeConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PostToTermNodeConnectionKeySpecifier
			| (() => undefined | PostToTermNodeConnectionKeySpecifier);
		fields?: PostToTermNodeConnectionFieldPolicy;
	};
	PostToTermNodeConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PostToTermNodeConnectionEdgeKeySpecifier
			| (() => undefined | PostToTermNodeConnectionEdgeKeySpecifier);
		fields?: PostToTermNodeConnectionEdgeFieldPolicy;
	};
	PostFormatToTaxonomyConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| PostFormatToTaxonomyConnectionEdgeKeySpecifier
			| (() => undefined | PostFormatToTaxonomyConnectionEdgeKeySpecifier);
		fields?: PostFormatToTaxonomyConnectionEdgeFieldPolicy;
	};
	PostFormatToTestimonialConnection?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| PostFormatToTestimonialConnectionKeySpecifier
			| (() => undefined | PostFormatToTestimonialConnectionKeySpecifier);
		fields?: PostFormatToTestimonialConnectionFieldPolicy;
	};
	PostFormatToTestimonialConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| PostFormatToTestimonialConnectionEdgeKeySpecifier
			| (() => undefined | PostFormatToTestimonialConnectionEdgeKeySpecifier);
		fields?: PostFormatToTestimonialConnectionEdgeFieldPolicy;
	};
	Testimonial?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| TestimonialKeySpecifier
			| (() => undefined | TestimonialKeySpecifier);
		fields?: TestimonialFieldPolicy;
	};
	TestimonialToCategoryConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| TestimonialToCategoryConnectionKeySpecifier
			| (() => undefined | TestimonialToCategoryConnectionKeySpecifier);
		fields?: TestimonialToCategoryConnectionFieldPolicy;
	};
	TestimonialToCategoryConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| TestimonialToCategoryConnectionEdgeKeySpecifier
			| (() => undefined | TestimonialToCategoryConnectionEdgeKeySpecifier);
		fields?: TestimonialToCategoryConnectionEdgeFieldPolicy;
	};
	TestimonialToCommentConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| TestimonialToCommentConnectionKeySpecifier
			| (() => undefined | TestimonialToCommentConnectionKeySpecifier);
		fields?: TestimonialToCommentConnectionFieldPolicy;
	};
	TestimonialToCommentConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| TestimonialToCommentConnectionEdgeKeySpecifier
			| (() => undefined | TestimonialToCommentConnectionEdgeKeySpecifier);
		fields?: TestimonialToCommentConnectionEdgeFieldPolicy;
	};
	TestimonialToPostFormatConnection?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| TestimonialToPostFormatConnectionKeySpecifier
			| (() => undefined | TestimonialToPostFormatConnectionKeySpecifier);
		fields?: TestimonialToPostFormatConnectionFieldPolicy;
	};
	TestimonialToPostFormatConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| TestimonialToPostFormatConnectionEdgeKeySpecifier
			| (() => undefined | TestimonialToPostFormatConnectionEdgeKeySpecifier);
		fields?: TestimonialToPostFormatConnectionEdgeFieldPolicy;
	};
	TestimonialToPreviewConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| TestimonialToPreviewConnectionEdgeKeySpecifier
			| (() => undefined | TestimonialToPreviewConnectionEdgeKeySpecifier);
		fields?: TestimonialToPreviewConnectionEdgeFieldPolicy;
	};
	TestimonialToRevisionConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| TestimonialToRevisionConnectionKeySpecifier
			| (() => undefined | TestimonialToRevisionConnectionKeySpecifier);
		fields?: TestimonialToRevisionConnectionFieldPolicy;
	};
	TestimonialToRevisionConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| TestimonialToRevisionConnectionEdgeKeySpecifier
			| (() => undefined | TestimonialToRevisionConnectionEdgeKeySpecifier);
		fields?: TestimonialToRevisionConnectionEdgeFieldPolicy;
	};
	Testimonial_Social?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| Testimonial_SocialKeySpecifier
			| (() => undefined | Testimonial_SocialKeySpecifier);
		fields?: Testimonial_SocialFieldPolicy;
	};
	PositionToPreviewConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PositionToPreviewConnectionEdgeKeySpecifier
			| (() => undefined | PositionToPreviewConnectionEdgeKeySpecifier);
		fields?: PositionToPreviewConnectionEdgeFieldPolicy;
	};
	PositionToRevisionConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PositionToRevisionConnectionKeySpecifier
			| (() => undefined | PositionToRevisionConnectionKeySpecifier);
		fields?: PositionToRevisionConnectionFieldPolicy;
	};
	PositionToRevisionConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PositionToRevisionConnectionEdgeKeySpecifier
			| (() => undefined | PositionToRevisionConnectionEdgeKeySpecifier);
		fields?: PositionToRevisionConnectionEdgeFieldPolicy;
	};
	Position_Social?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| Position_SocialKeySpecifier
			| (() => undefined | Position_SocialKeySpecifier);
		fields?: Position_SocialFieldPolicy;
	};
	CategoryToPostConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| CategoryToPostConnectionKeySpecifier
			| (() => undefined | CategoryToPostConnectionKeySpecifier);
		fields?: CategoryToPostConnectionFieldPolicy;
	};
	CategoryToPostConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| CategoryToPostConnectionEdgeKeySpecifier
			| (() => undefined | CategoryToPostConnectionEdgeKeySpecifier);
		fields?: CategoryToPostConnectionEdgeFieldPolicy;
	};
	CategoryToTaxonomyConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| CategoryToTaxonomyConnectionEdgeKeySpecifier
			| (() => undefined | CategoryToTaxonomyConnectionEdgeKeySpecifier);
		fields?: CategoryToTaxonomyConnectionEdgeFieldPolicy;
	};
	CategoryToTestimonialConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| CategoryToTestimonialConnectionKeySpecifier
			| (() => undefined | CategoryToTestimonialConnectionKeySpecifier);
		fields?: CategoryToTestimonialConnectionFieldPolicy;
	};
	CategoryToTestimonialConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| CategoryToTestimonialConnectionEdgeKeySpecifier
			| (() => undefined | CategoryToTestimonialConnectionEdgeKeySpecifier);
		fields?: CategoryToTestimonialConnectionEdgeFieldPolicy;
	};
	ConsultantToCommentConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| ConsultantToCommentConnectionKeySpecifier
			| (() => undefined | ConsultantToCommentConnectionKeySpecifier);
		fields?: ConsultantToCommentConnectionFieldPolicy;
	};
	ConsultantToCommentConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| ConsultantToCommentConnectionEdgeKeySpecifier
			| (() => undefined | ConsultantToCommentConnectionEdgeKeySpecifier);
		fields?: ConsultantToCommentConnectionEdgeFieldPolicy;
	};
	ConsultantToPostFormatConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| ConsultantToPostFormatConnectionKeySpecifier
			| (() => undefined | ConsultantToPostFormatConnectionKeySpecifier);
		fields?: ConsultantToPostFormatConnectionFieldPolicy;
	};
	ConsultantToPostFormatConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| ConsultantToPostFormatConnectionEdgeKeySpecifier
			| (() => undefined | ConsultantToPostFormatConnectionEdgeKeySpecifier);
		fields?: ConsultantToPostFormatConnectionEdgeFieldPolicy;
	};
	ConsultantToPreviewConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| ConsultantToPreviewConnectionEdgeKeySpecifier
			| (() => undefined | ConsultantToPreviewConnectionEdgeKeySpecifier);
		fields?: ConsultantToPreviewConnectionEdgeFieldPolicy;
	};
	ConsultantToRevisionConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| ConsultantToRevisionConnectionKeySpecifier
			| (() => undefined | ConsultantToRevisionConnectionKeySpecifier);
		fields?: ConsultantToRevisionConnectionFieldPolicy;
	};
	ConsultantToRevisionConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| ConsultantToRevisionConnectionEdgeKeySpecifier
			| (() => undefined | ConsultantToRevisionConnectionEdgeKeySpecifier);
		fields?: ConsultantToRevisionConnectionEdgeFieldPolicy;
	};
	Consultant_Social?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| Consultant_SocialKeySpecifier
			| (() => undefined | Consultant_SocialKeySpecifier);
		fields?: Consultant_SocialFieldPolicy;
	};
	UserToEnqueuedScriptConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| UserToEnqueuedScriptConnectionKeySpecifier
			| (() => undefined | UserToEnqueuedScriptConnectionKeySpecifier);
		fields?: UserToEnqueuedScriptConnectionFieldPolicy;
	};
	UserToEnqueuedScriptConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| UserToEnqueuedScriptConnectionEdgeKeySpecifier
			| (() => undefined | UserToEnqueuedScriptConnectionEdgeKeySpecifier);
		fields?: UserToEnqueuedScriptConnectionEdgeFieldPolicy;
	};
	UserToEnqueuedStylesheetConnection?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| UserToEnqueuedStylesheetConnectionKeySpecifier
			| (() => undefined | UserToEnqueuedStylesheetConnectionKeySpecifier);
		fields?: UserToEnqueuedStylesheetConnectionFieldPolicy;
	};
	UserToEnqueuedStylesheetConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| UserToEnqueuedStylesheetConnectionEdgeKeySpecifier
			| (() => undefined | UserToEnqueuedStylesheetConnectionEdgeKeySpecifier);
		fields?: UserToEnqueuedStylesheetConnectionEdgeFieldPolicy;
	};
	UserToMediaItemConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| UserToMediaItemConnectionKeySpecifier
			| (() => undefined | UserToMediaItemConnectionKeySpecifier);
		fields?: UserToMediaItemConnectionFieldPolicy;
	};
	UserToMediaItemConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| UserToMediaItemConnectionEdgeKeySpecifier
			| (() => undefined | UserToMediaItemConnectionEdgeKeySpecifier);
		fields?: UserToMediaItemConnectionEdgeFieldPolicy;
	};
	UserToPageConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| UserToPageConnectionKeySpecifier
			| (() => undefined | UserToPageConnectionKeySpecifier);
		fields?: UserToPageConnectionFieldPolicy;
	};
	UserToPageConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| UserToPageConnectionEdgeKeySpecifier
			| (() => undefined | UserToPageConnectionEdgeKeySpecifier);
		fields?: UserToPageConnectionEdgeFieldPolicy;
	};
	Page?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | PageKeySpecifier | (() => undefined | PageKeySpecifier);
		fields?: PageFieldPolicy;
	};
	PageToCommentConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PageToCommentConnectionKeySpecifier
			| (() => undefined | PageToCommentConnectionKeySpecifier);
		fields?: PageToCommentConnectionFieldPolicy;
	};
	PageToCommentConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PageToCommentConnectionEdgeKeySpecifier
			| (() => undefined | PageToCommentConnectionEdgeKeySpecifier);
		fields?: PageToCommentConnectionEdgeFieldPolicy;
	};
	PageToPreviewConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PageToPreviewConnectionEdgeKeySpecifier
			| (() => undefined | PageToPreviewConnectionEdgeKeySpecifier);
		fields?: PageToPreviewConnectionEdgeFieldPolicy;
	};
	PageToRevisionConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PageToRevisionConnectionKeySpecifier
			| (() => undefined | PageToRevisionConnectionKeySpecifier);
		fields?: PageToRevisionConnectionFieldPolicy;
	};
	PageToRevisionConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PageToRevisionConnectionEdgeKeySpecifier
			| (() => undefined | PageToRevisionConnectionEdgeKeySpecifier);
		fields?: PageToRevisionConnectionEdgeFieldPolicy;
	};
	UserToPositionConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| UserToPositionConnectionKeySpecifier
			| (() => undefined | UserToPositionConnectionKeySpecifier);
		fields?: UserToPositionConnectionFieldPolicy;
	};
	UserToPositionConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| UserToPositionConnectionEdgeKeySpecifier
			| (() => undefined | UserToPositionConnectionEdgeKeySpecifier);
		fields?: UserToPositionConnectionEdgeFieldPolicy;
	};
	UserToPostConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| UserToPostConnectionKeySpecifier
			| (() => undefined | UserToPostConnectionKeySpecifier);
		fields?: UserToPostConnectionFieldPolicy;
	};
	UserToPostConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| UserToPostConnectionEdgeKeySpecifier
			| (() => undefined | UserToPostConnectionEdgeKeySpecifier);
		fields?: UserToPostConnectionEdgeFieldPolicy;
	};
	UserToContentRevisionUnionConnection?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| UserToContentRevisionUnionConnectionKeySpecifier
			| (() => undefined | UserToContentRevisionUnionConnectionKeySpecifier);
		fields?: UserToContentRevisionUnionConnectionFieldPolicy;
	};
	UserToContentRevisionUnionConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| UserToContentRevisionUnionConnectionEdgeKeySpecifier
			| (() => undefined | UserToContentRevisionUnionConnectionEdgeKeySpecifier);
		fields?: UserToContentRevisionUnionConnectionEdgeFieldPolicy;
	};
	UserToUserRoleConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| UserToUserRoleConnectionKeySpecifier
			| (() => undefined | UserToUserRoleConnectionKeySpecifier);
		fields?: UserToUserRoleConnectionFieldPolicy;
	};
	UserToUserRoleConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| UserToUserRoleConnectionEdgeKeySpecifier
			| (() => undefined | UserToUserRoleConnectionEdgeKeySpecifier);
		fields?: UserToUserRoleConnectionEdgeFieldPolicy;
	};
	UserRole?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| UserRoleKeySpecifier
			| (() => undefined | UserRoleKeySpecifier);
		fields?: UserRoleFieldPolicy;
	};
	SEOUser?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| SEOUserKeySpecifier
			| (() => undefined | SEOUserKeySpecifier);
		fields?: SEOUserFieldPolicy;
	};
	SEOUserSchema?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| SEOUserSchemaKeySpecifier
			| (() => undefined | SEOUserSchemaKeySpecifier);
		fields?: SEOUserSchemaFieldPolicy;
	};
	SEOUserSocial?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| SEOUserSocialKeySpecifier
			| (() => undefined | SEOUserSocialKeySpecifier);
		fields?: SEOUserSocialFieldPolicy;
	};
	UserToTestimonialConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| UserToTestimonialConnectionKeySpecifier
			| (() => undefined | UserToTestimonialConnectionKeySpecifier);
		fields?: UserToTestimonialConnectionFieldPolicy;
	};
	UserToTestimonialConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| UserToTestimonialConnectionEdgeKeySpecifier
			| (() => undefined | UserToTestimonialConnectionEdgeKeySpecifier);
		fields?: UserToTestimonialConnectionEdgeFieldPolicy;
	};
	AboutToCategoryConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| AboutToCategoryConnectionKeySpecifier
			| (() => undefined | AboutToCategoryConnectionKeySpecifier);
		fields?: AboutToCategoryConnectionFieldPolicy;
	};
	AboutToCategoryConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| AboutToCategoryConnectionEdgeKeySpecifier
			| (() => undefined | AboutToCategoryConnectionEdgeKeySpecifier);
		fields?: AboutToCategoryConnectionEdgeFieldPolicy;
	};
	AboutToCommentConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| AboutToCommentConnectionKeySpecifier
			| (() => undefined | AboutToCommentConnectionKeySpecifier);
		fields?: AboutToCommentConnectionFieldPolicy;
	};
	AboutToCommentConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| AboutToCommentConnectionEdgeKeySpecifier
			| (() => undefined | AboutToCommentConnectionEdgeKeySpecifier);
		fields?: AboutToCommentConnectionEdgeFieldPolicy;
	};
	AboutToPostFormatConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| AboutToPostFormatConnectionKeySpecifier
			| (() => undefined | AboutToPostFormatConnectionKeySpecifier);
		fields?: AboutToPostFormatConnectionFieldPolicy;
	};
	AboutToPostFormatConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| AboutToPostFormatConnectionEdgeKeySpecifier
			| (() => undefined | AboutToPostFormatConnectionEdgeKeySpecifier);
		fields?: AboutToPostFormatConnectionEdgeFieldPolicy;
	};
	AboutToPreviewConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| AboutToPreviewConnectionEdgeKeySpecifier
			| (() => undefined | AboutToPreviewConnectionEdgeKeySpecifier);
		fields?: AboutToPreviewConnectionEdgeFieldPolicy;
	};
	AboutToRevisionConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| AboutToRevisionConnectionKeySpecifier
			| (() => undefined | AboutToRevisionConnectionKeySpecifier);
		fields?: AboutToRevisionConnectionFieldPolicy;
	};
	AboutToRevisionConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| AboutToRevisionConnectionEdgeKeySpecifier
			| (() => undefined | AboutToRevisionConnectionEdgeKeySpecifier);
		fields?: AboutToRevisionConnectionEdgeFieldPolicy;
	};
	About_Social?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| About_SocialKeySpecifier
			| (() => undefined | About_SocialKeySpecifier);
		fields?: About_SocialFieldPolicy;
	};
	RootQueryToAboutConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| RootQueryToAboutConnectionKeySpecifier
			| (() => undefined | RootQueryToAboutConnectionKeySpecifier);
		fields?: RootQueryToAboutConnectionFieldPolicy;
	};
	RootQueryToAboutConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| RootQueryToAboutConnectionEdgeKeySpecifier
			| (() => undefined | RootQueryToAboutConnectionEdgeKeySpecifier);
		fields?: RootQueryToAboutConnectionEdgeFieldPolicy;
	};
	Settings?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| SettingsKeySpecifier
			| (() => undefined | SettingsKeySpecifier);
		fields?: SettingsFieldPolicy;
	};
	RootQueryToCategoryConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| RootQueryToCategoryConnectionKeySpecifier
			| (() => undefined | RootQueryToCategoryConnectionKeySpecifier);
		fields?: RootQueryToCategoryConnectionFieldPolicy;
	};
	RootQueryToCategoryConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| RootQueryToCategoryConnectionEdgeKeySpecifier
			| (() => undefined | RootQueryToCategoryConnectionEdgeKeySpecifier);
		fields?: RootQueryToCategoryConnectionEdgeFieldPolicy;
	};
	RootQueryToCommentConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| RootQueryToCommentConnectionKeySpecifier
			| (() => undefined | RootQueryToCommentConnectionKeySpecifier);
		fields?: RootQueryToCommentConnectionFieldPolicy;
	};
	RootQueryToCommentConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| RootQueryToCommentConnectionEdgeKeySpecifier
			| (() => undefined | RootQueryToCommentConnectionEdgeKeySpecifier);
		fields?: RootQueryToCommentConnectionEdgeFieldPolicy;
	};
	RootQueryToConsultantConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| RootQueryToConsultantConnectionKeySpecifier
			| (() => undefined | RootQueryToConsultantConnectionKeySpecifier);
		fields?: RootQueryToConsultantConnectionFieldPolicy;
	};
	RootQueryToConsultantConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| RootQueryToConsultantConnectionEdgeKeySpecifier
			| (() => undefined | RootQueryToConsultantConnectionEdgeKeySpecifier);
		fields?: RootQueryToConsultantConnectionEdgeFieldPolicy;
	};
	RootQueryToContentNodeConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| RootQueryToContentNodeConnectionKeySpecifier
			| (() => undefined | RootQueryToContentNodeConnectionKeySpecifier);
		fields?: RootQueryToContentNodeConnectionFieldPolicy;
	};
	RootQueryToContentNodeConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| RootQueryToContentNodeConnectionEdgeKeySpecifier
			| (() => undefined | RootQueryToContentNodeConnectionEdgeKeySpecifier);
		fields?: RootQueryToContentNodeConnectionEdgeFieldPolicy;
	};
	RootQueryToContentTypeConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| RootQueryToContentTypeConnectionKeySpecifier
			| (() => undefined | RootQueryToContentTypeConnectionKeySpecifier);
		fields?: RootQueryToContentTypeConnectionFieldPolicy;
	};
	RootQueryToContentTypeConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| RootQueryToContentTypeConnectionEdgeKeySpecifier
			| (() => undefined | RootQueryToContentTypeConnectionEdgeKeySpecifier);
		fields?: RootQueryToContentTypeConnectionEdgeFieldPolicy;
	};
	DiscussionSettings?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| DiscussionSettingsKeySpecifier
			| (() => undefined | DiscussionSettingsKeySpecifier);
		fields?: DiscussionSettingsFieldPolicy;
	};
	GeneralSettings?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| GeneralSettingsKeySpecifier
			| (() => undefined | GeneralSettingsKeySpecifier);
		fields?: GeneralSettingsFieldPolicy;
	};
	RootQueryToMediaItemConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| RootQueryToMediaItemConnectionKeySpecifier
			| (() => undefined | RootQueryToMediaItemConnectionKeySpecifier);
		fields?: RootQueryToMediaItemConnectionFieldPolicy;
	};
	RootQueryToMediaItemConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| RootQueryToMediaItemConnectionEdgeKeySpecifier
			| (() => undefined | RootQueryToMediaItemConnectionEdgeKeySpecifier);
		fields?: RootQueryToMediaItemConnectionEdgeFieldPolicy;
	};
	Menu?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | MenuKeySpecifier | (() => undefined | MenuKeySpecifier);
		fields?: MenuFieldPolicy;
	};
	Menu_FooterDynamic?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| Menu_FooterDynamicKeySpecifier
			| (() => undefined | Menu_FooterDynamicKeySpecifier);
		fields?: Menu_FooterDynamicFieldPolicy;
	};
	Menu_HeaderDynamic?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| Menu_HeaderDynamicKeySpecifier
			| (() => undefined | Menu_HeaderDynamicKeySpecifier);
		fields?: Menu_HeaderDynamicFieldPolicy;
	};
	MenuToMenuItemConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| MenuToMenuItemConnectionKeySpecifier
			| (() => undefined | MenuToMenuItemConnectionKeySpecifier);
		fields?: MenuToMenuItemConnectionFieldPolicy;
	};
	MenuToMenuItemConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| MenuToMenuItemConnectionEdgeKeySpecifier
			| (() => undefined | MenuToMenuItemConnectionEdgeKeySpecifier);
		fields?: MenuToMenuItemConnectionEdgeFieldPolicy;
	};
	MenuItem?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| MenuItemKeySpecifier
			| (() => undefined | MenuItemKeySpecifier);
		fields?: MenuItemFieldPolicy;
	};
	MenuItemToMenuItemConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| MenuItemToMenuItemConnectionKeySpecifier
			| (() => undefined | MenuItemToMenuItemConnectionKeySpecifier);
		fields?: MenuItemToMenuItemConnectionFieldPolicy;
	};
	MenuItemToMenuItemConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| MenuItemToMenuItemConnectionEdgeKeySpecifier
			| (() => undefined | MenuItemToMenuItemConnectionEdgeKeySpecifier);
		fields?: MenuItemToMenuItemConnectionEdgeFieldPolicy;
	};
	MenuItemToMenuItemLinkableConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| MenuItemToMenuItemLinkableConnectionEdgeKeySpecifier
			| (() => undefined | MenuItemToMenuItemLinkableConnectionEdgeKeySpecifier);
		fields?: MenuItemToMenuItemLinkableConnectionEdgeFieldPolicy;
	};
	MenuItemToMenuConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| MenuItemToMenuConnectionEdgeKeySpecifier
			| (() => undefined | MenuItemToMenuConnectionEdgeKeySpecifier);
		fields?: MenuItemToMenuConnectionEdgeFieldPolicy;
	};
	RootQueryToMenuItemConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| RootQueryToMenuItemConnectionKeySpecifier
			| (() => undefined | RootQueryToMenuItemConnectionKeySpecifier);
		fields?: RootQueryToMenuItemConnectionFieldPolicy;
	};
	RootQueryToMenuItemConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| RootQueryToMenuItemConnectionEdgeKeySpecifier
			| (() => undefined | RootQueryToMenuItemConnectionEdgeKeySpecifier);
		fields?: RootQueryToMenuItemConnectionEdgeFieldPolicy;
	};
	RootQueryToMenuConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| RootQueryToMenuConnectionKeySpecifier
			| (() => undefined | RootQueryToMenuConnectionKeySpecifier);
		fields?: RootQueryToMenuConnectionFieldPolicy;
	};
	RootQueryToMenuConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| RootQueryToMenuConnectionEdgeKeySpecifier
			| (() => undefined | RootQueryToMenuConnectionEdgeKeySpecifier);
		fields?: RootQueryToMenuConnectionEdgeFieldPolicy;
	};
	RootQueryToPageConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| RootQueryToPageConnectionKeySpecifier
			| (() => undefined | RootQueryToPageConnectionKeySpecifier);
		fields?: RootQueryToPageConnectionFieldPolicy;
	};
	RootQueryToPageConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| RootQueryToPageConnectionEdgeKeySpecifier
			| (() => undefined | RootQueryToPageConnectionEdgeKeySpecifier);
		fields?: RootQueryToPageConnectionEdgeFieldPolicy;
	};
	Plugin?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| PluginKeySpecifier
			| (() => undefined | PluginKeySpecifier);
		fields?: PluginFieldPolicy;
	};
	RootQueryToPluginConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| RootQueryToPluginConnectionKeySpecifier
			| (() => undefined | RootQueryToPluginConnectionKeySpecifier);
		fields?: RootQueryToPluginConnectionFieldPolicy;
	};
	RootQueryToPluginConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| RootQueryToPluginConnectionEdgeKeySpecifier
			| (() => undefined | RootQueryToPluginConnectionEdgeKeySpecifier);
		fields?: RootQueryToPluginConnectionEdgeFieldPolicy;
	};
	RootQueryToPositionConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| RootQueryToPositionConnectionKeySpecifier
			| (() => undefined | RootQueryToPositionConnectionKeySpecifier);
		fields?: RootQueryToPositionConnectionFieldPolicy;
	};
	RootQueryToPositionConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| RootQueryToPositionConnectionEdgeKeySpecifier
			| (() => undefined | RootQueryToPositionConnectionEdgeKeySpecifier);
		fields?: RootQueryToPositionConnectionEdgeFieldPolicy;
	};
	RootQueryToPostFormatConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| RootQueryToPostFormatConnectionKeySpecifier
			| (() => undefined | RootQueryToPostFormatConnectionKeySpecifier);
		fields?: RootQueryToPostFormatConnectionFieldPolicy;
	};
	RootQueryToPostFormatConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| RootQueryToPostFormatConnectionEdgeKeySpecifier
			| (() => undefined | RootQueryToPostFormatConnectionEdgeKeySpecifier);
		fields?: RootQueryToPostFormatConnectionEdgeFieldPolicy;
	};
	RootQueryToPostConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| RootQueryToPostConnectionKeySpecifier
			| (() => undefined | RootQueryToPostConnectionKeySpecifier);
		fields?: RootQueryToPostConnectionFieldPolicy;
	};
	RootQueryToPostConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| RootQueryToPostConnectionEdgeKeySpecifier
			| (() => undefined | RootQueryToPostConnectionEdgeKeySpecifier);
		fields?: RootQueryToPostConnectionEdgeFieldPolicy;
	};
	ReadingSettings?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| ReadingSettingsKeySpecifier
			| (() => undefined | ReadingSettingsKeySpecifier);
		fields?: ReadingSettingsFieldPolicy;
	};
	RootQueryToEnqueuedScriptConnection?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| RootQueryToEnqueuedScriptConnectionKeySpecifier
			| (() => undefined | RootQueryToEnqueuedScriptConnectionKeySpecifier);
		fields?: RootQueryToEnqueuedScriptConnectionFieldPolicy;
	};
	RootQueryToEnqueuedScriptConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| RootQueryToEnqueuedScriptConnectionEdgeKeySpecifier
			| (() => undefined | RootQueryToEnqueuedScriptConnectionEdgeKeySpecifier);
		fields?: RootQueryToEnqueuedScriptConnectionEdgeFieldPolicy;
	};
	RootQueryToEnqueuedStylesheetConnection?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| RootQueryToEnqueuedStylesheetConnectionKeySpecifier
			| (() => undefined | RootQueryToEnqueuedStylesheetConnectionKeySpecifier);
		fields?: RootQueryToEnqueuedStylesheetConnectionFieldPolicy;
	};
	RootQueryToEnqueuedStylesheetConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| RootQueryToEnqueuedStylesheetConnectionEdgeKeySpecifier
			| (() =>
					| undefined
					| RootQueryToEnqueuedStylesheetConnectionEdgeKeySpecifier);
		fields?: RootQueryToEnqueuedStylesheetConnectionEdgeFieldPolicy;
	};
	RootQueryToContentRevisionUnionConnection?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| RootQueryToContentRevisionUnionConnectionKeySpecifier
			| (() => undefined | RootQueryToContentRevisionUnionConnectionKeySpecifier);
		fields?: RootQueryToContentRevisionUnionConnectionFieldPolicy;
	};
	RootQueryToContentRevisionUnionConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| RootQueryToContentRevisionUnionConnectionEdgeKeySpecifier
			| (() =>
					| undefined
					| RootQueryToContentRevisionUnionConnectionEdgeKeySpecifier);
		fields?: RootQueryToContentRevisionUnionConnectionEdgeFieldPolicy;
	};
	SEOConfig?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| SEOConfigKeySpecifier
			| (() => undefined | SEOConfigKeySpecifier);
		fields?: SEOConfigFieldPolicy;
	};
	SEOBreadcrumbs?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| SEOBreadcrumbsKeySpecifier
			| (() => undefined | SEOBreadcrumbsKeySpecifier);
		fields?: SEOBreadcrumbsFieldPolicy;
	};
	SEOContentTypes?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| SEOContentTypesKeySpecifier
			| (() => undefined | SEOContentTypesKeySpecifier);
		fields?: SEOContentTypesFieldPolicy;
	};
	SEOContentType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| SEOContentTypeKeySpecifier
			| (() => undefined | SEOContentTypeKeySpecifier);
		fields?: SEOContentTypeFieldPolicy;
	};
	SEOOpenGraph?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| SEOOpenGraphKeySpecifier
			| (() => undefined | SEOOpenGraphKeySpecifier);
		fields?: SEOOpenGraphFieldPolicy;
	};
	SEOOpenGraphFrontPage?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| SEOOpenGraphFrontPageKeySpecifier
			| (() => undefined | SEOOpenGraphFrontPageKeySpecifier);
		fields?: SEOOpenGraphFrontPageFieldPolicy;
	};
	SEORedirect?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| SEORedirectKeySpecifier
			| (() => undefined | SEORedirectKeySpecifier);
		fields?: SEORedirectFieldPolicy;
	};
	SEOSchema?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| SEOSchemaKeySpecifier
			| (() => undefined | SEOSchemaKeySpecifier);
		fields?: SEOSchemaFieldPolicy;
	};
	SEOSocial?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| SEOSocialKeySpecifier
			| (() => undefined | SEOSocialKeySpecifier);
		fields?: SEOSocialFieldPolicy;
	};
	SEOSocialFacebook?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| SEOSocialFacebookKeySpecifier
			| (() => undefined | SEOSocialFacebookKeySpecifier);
		fields?: SEOSocialFacebookFieldPolicy;
	};
	SEOSocialInstagram?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| SEOSocialInstagramKeySpecifier
			| (() => undefined | SEOSocialInstagramKeySpecifier);
		fields?: SEOSocialInstagramFieldPolicy;
	};
	SEOSocialLinkedIn?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| SEOSocialLinkedInKeySpecifier
			| (() => undefined | SEOSocialLinkedInKeySpecifier);
		fields?: SEOSocialLinkedInFieldPolicy;
	};
	SEOSocialMySpace?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| SEOSocialMySpaceKeySpecifier
			| (() => undefined | SEOSocialMySpaceKeySpecifier);
		fields?: SEOSocialMySpaceFieldPolicy;
	};
	SEOSocialPinterest?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| SEOSocialPinterestKeySpecifier
			| (() => undefined | SEOSocialPinterestKeySpecifier);
		fields?: SEOSocialPinterestFieldPolicy;
	};
	SEOSocialTwitter?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| SEOSocialTwitterKeySpecifier
			| (() => undefined | SEOSocialTwitterKeySpecifier);
		fields?: SEOSocialTwitterFieldPolicy;
	};
	SEOSocialWikipedia?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| SEOSocialWikipediaKeySpecifier
			| (() => undefined | SEOSocialWikipediaKeySpecifier);
		fields?: SEOSocialWikipediaFieldPolicy;
	};
	SEOSocialYoutube?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| SEOSocialYoutubeKeySpecifier
			| (() => undefined | SEOSocialYoutubeKeySpecifier);
		fields?: SEOSocialYoutubeFieldPolicy;
	};
	SEOWebmaster?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| SEOWebmasterKeySpecifier
			| (() => undefined | SEOWebmasterKeySpecifier);
		fields?: SEOWebmasterFieldPolicy;
	};
	RootQueryToTagConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| RootQueryToTagConnectionKeySpecifier
			| (() => undefined | RootQueryToTagConnectionKeySpecifier);
		fields?: RootQueryToTagConnectionFieldPolicy;
	};
	RootQueryToTagConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| RootQueryToTagConnectionEdgeKeySpecifier
			| (() => undefined | RootQueryToTagConnectionEdgeKeySpecifier);
		fields?: RootQueryToTagConnectionEdgeFieldPolicy;
	};
	RootQueryToTaxonomyConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| RootQueryToTaxonomyConnectionKeySpecifier
			| (() => undefined | RootQueryToTaxonomyConnectionKeySpecifier);
		fields?: RootQueryToTaxonomyConnectionFieldPolicy;
	};
	RootQueryToTaxonomyConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| RootQueryToTaxonomyConnectionEdgeKeySpecifier
			| (() => undefined | RootQueryToTaxonomyConnectionEdgeKeySpecifier);
		fields?: RootQueryToTaxonomyConnectionEdgeFieldPolicy;
	};
	RootQueryToTermNodeConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| RootQueryToTermNodeConnectionKeySpecifier
			| (() => undefined | RootQueryToTermNodeConnectionKeySpecifier);
		fields?: RootQueryToTermNodeConnectionFieldPolicy;
	};
	RootQueryToTermNodeConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| RootQueryToTermNodeConnectionEdgeKeySpecifier
			| (() => undefined | RootQueryToTermNodeConnectionEdgeKeySpecifier);
		fields?: RootQueryToTermNodeConnectionEdgeFieldPolicy;
	};
	RootQueryToTestimonialConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| RootQueryToTestimonialConnectionKeySpecifier
			| (() => undefined | RootQueryToTestimonialConnectionKeySpecifier);
		fields?: RootQueryToTestimonialConnectionFieldPolicy;
	};
	RootQueryToTestimonialConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| RootQueryToTestimonialConnectionEdgeKeySpecifier
			| (() => undefined | RootQueryToTestimonialConnectionEdgeKeySpecifier);
		fields?: RootQueryToTestimonialConnectionEdgeFieldPolicy;
	};
	Theme?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | ThemeKeySpecifier | (() => undefined | ThemeKeySpecifier);
		fields?: ThemeFieldPolicy;
	};
	RootQueryToThemeConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| RootQueryToThemeConnectionKeySpecifier
			| (() => undefined | RootQueryToThemeConnectionKeySpecifier);
		fields?: RootQueryToThemeConnectionFieldPolicy;
	};
	RootQueryToThemeConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| RootQueryToThemeConnectionEdgeKeySpecifier
			| (() => undefined | RootQueryToThemeConnectionEdgeKeySpecifier);
		fields?: RootQueryToThemeConnectionEdgeFieldPolicy;
	};
	RootQueryToUserRoleConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| RootQueryToUserRoleConnectionKeySpecifier
			| (() => undefined | RootQueryToUserRoleConnectionKeySpecifier);
		fields?: RootQueryToUserRoleConnectionFieldPolicy;
	};
	RootQueryToUserRoleConnectionEdge?: Omit<
		TypePolicy,
		'fields' | 'keyFields'
	> & {
		keyFields?:
			| false
			| RootQueryToUserRoleConnectionEdgeKeySpecifier
			| (() => undefined | RootQueryToUserRoleConnectionEdgeKeySpecifier);
		fields?: RootQueryToUserRoleConnectionEdgeFieldPolicy;
	};
	RootQueryToUserConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| RootQueryToUserConnectionKeySpecifier
			| (() => undefined | RootQueryToUserConnectionKeySpecifier);
		fields?: RootQueryToUserConnectionFieldPolicy;
	};
	RootQueryToUserConnectionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| RootQueryToUserConnectionEdgeKeySpecifier
			| (() => undefined | RootQueryToUserConnectionEdgeKeySpecifier);
		fields?: RootQueryToUserConnectionEdgeFieldPolicy;
	};
	WritingSettings?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| WritingSettingsKeySpecifier
			| (() => undefined | WritingSettingsKeySpecifier);
		fields?: WritingSettingsFieldPolicy;
	};
	RootMutation?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| RootMutationKeySpecifier
			| (() => undefined | RootMutationKeySpecifier);
		fields?: RootMutationFieldPolicy;
	};
	UpdateCategoryPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| UpdateCategoryPayloadKeySpecifier
			| (() => undefined | UpdateCategoryPayloadKeySpecifier);
		fields?: UpdateCategoryPayloadFieldPolicy;
	};
	UpdatePostFormatPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| UpdatePostFormatPayloadKeySpecifier
			| (() => undefined | UpdatePostFormatPayloadKeySpecifier);
		fields?: UpdatePostFormatPayloadFieldPolicy;
	};
	UpdateTagPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| UpdateTagPayloadKeySpecifier
			| (() => undefined | UpdateTagPayloadKeySpecifier);
		fields?: UpdateTagPayloadFieldPolicy;
	};
	CreateAboutPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| CreateAboutPayloadKeySpecifier
			| (() => undefined | CreateAboutPayloadKeySpecifier);
		fields?: CreateAboutPayloadFieldPolicy;
	};
	CreateCategoryPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| CreateCategoryPayloadKeySpecifier
			| (() => undefined | CreateCategoryPayloadKeySpecifier);
		fields?: CreateCategoryPayloadFieldPolicy;
	};
	CreateCommentPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| CreateCommentPayloadKeySpecifier
			| (() => undefined | CreateCommentPayloadKeySpecifier);
		fields?: CreateCommentPayloadFieldPolicy;
	};
	CreateConsultantPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| CreateConsultantPayloadKeySpecifier
			| (() => undefined | CreateConsultantPayloadKeySpecifier);
		fields?: CreateConsultantPayloadFieldPolicy;
	};
	CreateMediaItemPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| CreateMediaItemPayloadKeySpecifier
			| (() => undefined | CreateMediaItemPayloadKeySpecifier);
		fields?: CreateMediaItemPayloadFieldPolicy;
	};
	CreatePagePayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| CreatePagePayloadKeySpecifier
			| (() => undefined | CreatePagePayloadKeySpecifier);
		fields?: CreatePagePayloadFieldPolicy;
	};
	CreatePositionPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| CreatePositionPayloadKeySpecifier
			| (() => undefined | CreatePositionPayloadKeySpecifier);
		fields?: CreatePositionPayloadFieldPolicy;
	};
	CreatePostPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| CreatePostPayloadKeySpecifier
			| (() => undefined | CreatePostPayloadKeySpecifier);
		fields?: CreatePostPayloadFieldPolicy;
	};
	CreatePostFormatPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| CreatePostFormatPayloadKeySpecifier
			| (() => undefined | CreatePostFormatPayloadKeySpecifier);
		fields?: CreatePostFormatPayloadFieldPolicy;
	};
	CreateTagPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| CreateTagPayloadKeySpecifier
			| (() => undefined | CreateTagPayloadKeySpecifier);
		fields?: CreateTagPayloadFieldPolicy;
	};
	CreateTestimonialPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| CreateTestimonialPayloadKeySpecifier
			| (() => undefined | CreateTestimonialPayloadKeySpecifier);
		fields?: CreateTestimonialPayloadFieldPolicy;
	};
	CreateUserPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| CreateUserPayloadKeySpecifier
			| (() => undefined | CreateUserPayloadKeySpecifier);
		fields?: CreateUserPayloadFieldPolicy;
	};
	DeleteAboutPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| DeleteAboutPayloadKeySpecifier
			| (() => undefined | DeleteAboutPayloadKeySpecifier);
		fields?: DeleteAboutPayloadFieldPolicy;
	};
	DeleteCategoryPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| DeleteCategoryPayloadKeySpecifier
			| (() => undefined | DeleteCategoryPayloadKeySpecifier);
		fields?: DeleteCategoryPayloadFieldPolicy;
	};
	DeleteCommentPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| DeleteCommentPayloadKeySpecifier
			| (() => undefined | DeleteCommentPayloadKeySpecifier);
		fields?: DeleteCommentPayloadFieldPolicy;
	};
	DeleteConsultantPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| DeleteConsultantPayloadKeySpecifier
			| (() => undefined | DeleteConsultantPayloadKeySpecifier);
		fields?: DeleteConsultantPayloadFieldPolicy;
	};
	DeleteMediaItemPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| DeleteMediaItemPayloadKeySpecifier
			| (() => undefined | DeleteMediaItemPayloadKeySpecifier);
		fields?: DeleteMediaItemPayloadFieldPolicy;
	};
	DeletePagePayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| DeletePagePayloadKeySpecifier
			| (() => undefined | DeletePagePayloadKeySpecifier);
		fields?: DeletePagePayloadFieldPolicy;
	};
	DeletePositionPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| DeletePositionPayloadKeySpecifier
			| (() => undefined | DeletePositionPayloadKeySpecifier);
		fields?: DeletePositionPayloadFieldPolicy;
	};
	DeletePostPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| DeletePostPayloadKeySpecifier
			| (() => undefined | DeletePostPayloadKeySpecifier);
		fields?: DeletePostPayloadFieldPolicy;
	};
	DeletePostFormatPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| DeletePostFormatPayloadKeySpecifier
			| (() => undefined | DeletePostFormatPayloadKeySpecifier);
		fields?: DeletePostFormatPayloadFieldPolicy;
	};
	DeleteTagPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| DeleteTagPayloadKeySpecifier
			| (() => undefined | DeleteTagPayloadKeySpecifier);
		fields?: DeleteTagPayloadFieldPolicy;
	};
	DeleteTestimonialPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| DeleteTestimonialPayloadKeySpecifier
			| (() => undefined | DeleteTestimonialPayloadKeySpecifier);
		fields?: DeleteTestimonialPayloadFieldPolicy;
	};
	DeleteUserPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| DeleteUserPayloadKeySpecifier
			| (() => undefined | DeleteUserPayloadKeySpecifier);
		fields?: DeleteUserPayloadFieldPolicy;
	};
	LoginPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| LoginPayloadKeySpecifier
			| (() => undefined | LoginPayloadKeySpecifier);
		fields?: LoginPayloadFieldPolicy;
	};
	RefreshJwtAuthTokenPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| RefreshJwtAuthTokenPayloadKeySpecifier
			| (() => undefined | RefreshJwtAuthTokenPayloadKeySpecifier);
		fields?: RefreshJwtAuthTokenPayloadFieldPolicy;
	};
	RegisterUserPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| RegisterUserPayloadKeySpecifier
			| (() => undefined | RegisterUserPayloadKeySpecifier);
		fields?: RegisterUserPayloadFieldPolicy;
	};
	ResetUserPasswordPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| ResetUserPasswordPayloadKeySpecifier
			| (() => undefined | ResetUserPasswordPayloadKeySpecifier);
		fields?: ResetUserPasswordPayloadFieldPolicy;
	};
	RestoreCommentPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| RestoreCommentPayloadKeySpecifier
			| (() => undefined | RestoreCommentPayloadKeySpecifier);
		fields?: RestoreCommentPayloadFieldPolicy;
	};
	SendPasswordResetEmailPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| SendPasswordResetEmailPayloadKeySpecifier
			| (() => undefined | SendPasswordResetEmailPayloadKeySpecifier);
		fields?: SendPasswordResetEmailPayloadFieldPolicy;
	};
	UpdateAboutPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| UpdateAboutPayloadKeySpecifier
			| (() => undefined | UpdateAboutPayloadKeySpecifier);
		fields?: UpdateAboutPayloadFieldPolicy;
	};
	UpdateCommentPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| UpdateCommentPayloadKeySpecifier
			| (() => undefined | UpdateCommentPayloadKeySpecifier);
		fields?: UpdateCommentPayloadFieldPolicy;
	};
	UpdateConsultantPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| UpdateConsultantPayloadKeySpecifier
			| (() => undefined | UpdateConsultantPayloadKeySpecifier);
		fields?: UpdateConsultantPayloadFieldPolicy;
	};
	UpdateMediaItemPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| UpdateMediaItemPayloadKeySpecifier
			| (() => undefined | UpdateMediaItemPayloadKeySpecifier);
		fields?: UpdateMediaItemPayloadFieldPolicy;
	};
	UpdatePagePayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| UpdatePagePayloadKeySpecifier
			| (() => undefined | UpdatePagePayloadKeySpecifier);
		fields?: UpdatePagePayloadFieldPolicy;
	};
	UpdatePositionPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| UpdatePositionPayloadKeySpecifier
			| (() => undefined | UpdatePositionPayloadKeySpecifier);
		fields?: UpdatePositionPayloadFieldPolicy;
	};
	UpdatePostPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| UpdatePostPayloadKeySpecifier
			| (() => undefined | UpdatePostPayloadKeySpecifier);
		fields?: UpdatePostPayloadFieldPolicy;
	};
	UpdateSettingsPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| UpdateSettingsPayloadKeySpecifier
			| (() => undefined | UpdateSettingsPayloadKeySpecifier);
		fields?: UpdateSettingsPayloadFieldPolicy;
	};
	UpdateTestimonialPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| UpdateTestimonialPayloadKeySpecifier
			| (() => undefined | UpdateTestimonialPayloadKeySpecifier);
		fields?: UpdateTestimonialPayloadFieldPolicy;
	};
	UpdateUserPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| UpdateUserPayloadKeySpecifier
			| (() => undefined | UpdateUserPayloadKeySpecifier);
		fields?: UpdateUserPayloadFieldPolicy;
	};
	CommentAuthor?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| CommentAuthorKeySpecifier
			| (() => undefined | CommentAuthorKeySpecifier);
		fields?: CommentAuthorFieldPolicy;
	};
	DefaultTemplate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| DefaultTemplateKeySpecifier
			| (() => undefined | DefaultTemplateKeySpecifier);
		fields?: DefaultTemplateFieldPolicy;
	};
	CoverTemplate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| CoverTemplateKeySpecifier
			| (() => undefined | CoverTemplateKeySpecifier);
		fields?: CoverTemplateFieldPolicy;
	};
	FullWidthTemplate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?:
			| false
			| FullWidthTemplateKeySpecifier
			| (() => undefined | FullWidthTemplateKeySpecifier);
		fields?: FullWidthTemplateFieldPolicy;
	};
};
