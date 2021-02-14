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
	about?: Maybe<About>;
	/**
	 * A about object
	 * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
	 */
	aboutBy?: Maybe<About>;
	/** Connection between the RootQuery type and the about type */
	abouts?: Maybe<RootQueryToAboutConnection>;
	/** Entry point to get all settings for the site */
	allSettings?: Maybe<Settings>;
	/** Connection between the RootQuery type and the category type */
	categories?: Maybe<RootQueryToCategoryConnection>;
	/** A 0bject */
	category?: Maybe<Category>;
	/** Returns a Comment */
	comment?: Maybe<Comment>;
	/** Connection between the RootQuery type and the Comment type */
	comments?: Maybe<RootQueryToCommentConnection>;
	/** An object of the consultant Type. Children posts of the Consultants Page */
	consultant?: Maybe<Consultant>;
	/**
	 * A consultant object
	 * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
	 */
	consultantBy?: Maybe<Consultant>;
	/** Connection between the RootQuery type and the consultant type */
	consultants?: Maybe<RootQueryToConsultantConnection>;
	/** An object of the contactForm Type.  */
	contactForm?: Maybe<ContactForm>;
	/**
	 * A contactForm object
	 * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
	 */
	contactFormBy?: Maybe<ContactForm>;
	/** Connection between the RootQuery type and the contactForm type */
	contactForms?: Maybe<RootQueryToContactFormConnection>;
	/** A node used to manage content */
	contentNode?: Maybe<ContentNode>;
	/** Connection between the RootQuery type and the ContentNode type */
	contentNodes?: Maybe<RootQueryToContentNodeConnection>;
	/** Fetch a Content Type node by unique Identifier */
	contentType?: Maybe<ContentType>;
	/** Connection between the RootQuery type and the ContentType type */
	contentTypes?: Maybe<RootQueryToContentTypeConnection>;
	discussionSettings?: Maybe<DiscussionSettings>;
	/** Ninja form object data. */
	form?: Maybe<Form>;
	formField?: Maybe<FormField>;
	/** Connection between the RootQuery type and the Form type */
	forms?: Maybe<RootQueryToFormConnection>;
	generalSettings?: Maybe<GeneralSettings>;
	/** An object of the mediaItem Type.  */
	mediaItem?: Maybe<MediaItem>;
	/**
	 * A mediaItem object
	 * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
	 */
	mediaItemBy?: Maybe<MediaItem>;
	/** Connection between the RootQuery type and the mediaItem type */
	mediaItems?: Maybe<RootQueryToMediaItemConnection>;
	/** A WordPress navigation menu */
	menu?: Maybe<Menu>;
	/** A WordPress navigation menu item */
	menuItem?: Maybe<MenuItem>;
	/** Connection between the RootQuery type and the MenuItem type */
	menuItems?: Maybe<RootQueryToMenuItemConnection>;
	/** Connection between the RootQuery type and the Menu type */
	menus?: Maybe<RootQueryToMenuConnection>;
	/** Fetches an object given its ID */
	node?: Maybe<Node>;
	nodeByUri?: Maybe<UniformResourceIdentifiable>;
	/** An object of the page Type.  */
	page?: Maybe<Page>;
	/**
	 * A page object
	 * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
	 */
	pageBy?: Maybe<Page>;
	/** Connection between the RootQuery type and the page type */
	pages?: Maybe<RootQueryToPageConnection>;
	/** A WordPress plugin */
	plugin?: Maybe<Plugin>;
	/** Connection between the RootQuery type and the Plugin type */
	plugins?: Maybe<RootQueryToPluginConnection>;
	/** An object of the position Type. Positions for consultants */
	position?: Maybe<Position>;
	/**
	 * A position object
	 * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
	 */
	positionBy?: Maybe<Position>;
	/** Connection between the RootQuery type and the position type */
	positions?: Maybe<RootQueryToPositionConnection>;
	/** An object of the post Type.  */
	post?: Maybe<Post>;
	/**
	 * A post object
	 * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
	 */
	postBy?: Maybe<Post>;
	/** A 0bject */
	postFormat?: Maybe<PostFormat>;
	/** Connection between the RootQuery type and the postFormat type */
	postFormats?: Maybe<RootQueryToPostFormatConnection>;
	/** Connection between the RootQuery type and the post type */
	posts?: Maybe<RootQueryToPostConnection>;
	readingSettings?: Maybe<ReadingSettings>;
	/** Connection between the RootQuery type and the EnqueuedScript type */
	registeredScripts?: Maybe<RootQueryToEnqueuedScriptConnection>;
	/** Connection between the RootQuery type and the EnqueuedStylesheet type */
	registeredStylesheets?: Maybe<RootQueryToEnqueuedStylesheetConnection>;
	/** Connection between the RootQuery type and the ContentRevisionUnion type */
	revisions?: Maybe<RootQueryToContentRevisionUnionConnection>;
	/** Returns seo site data */
	seo?: Maybe<SeoConfig>;
	/** A 0bject */
	tag?: Maybe<Tag>;
	/** Connection between the RootQuery type and the tag type */
	tags?: Maybe<RootQueryToTagConnection>;
	/** Connection between the RootQuery type and the Taxonomy type */
	taxonomies?: Maybe<RootQueryToTaxonomyConnection>;
	/** Fetch a Taxonomy node by unique Identifier */
	taxonomy?: Maybe<Taxonomy>;
	/** A node in a taxonomy used to group and relate content nodes */
	termNode?: Maybe<TermNode>;
	/** Connection between the RootQuery type and the TermNode type */
	terms?: Maybe<RootQueryToTermNodeConnection>;
	/** An object of the testimonial Type. Testimonials */
	testimonial?: Maybe<Testimonial>;
	/**
	 * A testimonial object
	 * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
	 */
	testimonialBy?: Maybe<Testimonial>;
	/** Connection between the RootQuery type and the testimonial type */
	testimonials?: Maybe<RootQueryToTestimonialConnection>;
	/** A Theme object */
	theme?: Maybe<Theme>;
	/** Connection between the RootQuery type and the Theme type */
	themes?: Maybe<RootQueryToThemeConnection>;
	/** Returns a user */
	user?: Maybe<User>;
	/** Returns a user role */
	userRole?: Maybe<UserRole>;
	/** Connection between the RootQuery type and the UserRole type */
	userRoles?: Maybe<RootQueryToUserRoleConnection>;
	/** Connection between the RootQuery type and the User type */
	users?: Maybe<RootQueryToUserConnection>;
	/** Returns the current user */
	viewer?: Maybe<User>;
	writingSettings?: Maybe<WritingSettings>;
};

/** The root entry point into the Graph */
export type RootQueryAboutArgs = {
	id: Scalars['ID'];
	idType?: Maybe<AboutIdType>;
	asPreview?: Maybe<Scalars['Boolean']>;
};

/** The root entry point into the Graph */
export type RootQueryAboutByArgs = {
	id?: Maybe<Scalars['ID']>;
	aboutId?: Maybe<Scalars['Int']>;
	uri?: Maybe<Scalars['String']>;
	slug?: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryAboutsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<RootQueryToAboutConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryCategoriesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<RootQueryToCategoryConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryCategoryArgs = {
	id: Scalars['ID'];
	idType?: Maybe<CategoryIdType>;
};

/** The root entry point into the Graph */
export type RootQueryCommentArgs = {
	id: Scalars['ID'];
};

/** The root entry point into the Graph */
export type RootQueryCommentsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<RootQueryToCommentConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryConsultantArgs = {
	id: Scalars['ID'];
	idType?: Maybe<ConsultantIdType>;
	asPreview?: Maybe<Scalars['Boolean']>;
};

/** The root entry point into the Graph */
export type RootQueryConsultantByArgs = {
	id?: Maybe<Scalars['ID']>;
	consultantId?: Maybe<Scalars['Int']>;
	uri?: Maybe<Scalars['String']>;
	slug?: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryConsultantsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<RootQueryToConsultantConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryContactFormArgs = {
	id: Scalars['ID'];
	idType?: Maybe<ContactFormIdType>;
	asPreview?: Maybe<Scalars['Boolean']>;
};

/** The root entry point into the Graph */
export type RootQueryContactFormByArgs = {
	id?: Maybe<Scalars['ID']>;
	contactFormId?: Maybe<Scalars['Int']>;
	uri?: Maybe<Scalars['String']>;
	slug?: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryContactFormsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<RootQueryToContactFormConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryContentNodeArgs = {
	id: Scalars['ID'];
	idType?: Maybe<ContentNodeIdTypeEnum>;
	contentType?: Maybe<ContentTypeEnum>;
	asPreview?: Maybe<Scalars['Boolean']>;
};

/** The root entry point into the Graph */
export type RootQueryContentNodesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<RootQueryToContentNodeConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryContentTypeArgs = {
	id: Scalars['ID'];
	idType?: Maybe<ContentTypeIdTypeEnum>;
};

/** The root entry point into the Graph */
export type RootQueryContentTypesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryFormArgs = {
	id: Scalars['ID'];
	idType?: Maybe<FormIdTypeEnum>;
};

/** The root entry point into the Graph */
export type RootQueryFormFieldArgs = {
	id: Scalars['ID'];
	idType?: Maybe<FormIdTypeEnum>;
};

/** The root entry point into the Graph */
export type RootQueryFormsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryMediaItemArgs = {
	id: Scalars['ID'];
	idType?: Maybe<MediaItemIdType>;
	asPreview?: Maybe<Scalars['Boolean']>;
};

/** The root entry point into the Graph */
export type RootQueryMediaItemByArgs = {
	id?: Maybe<Scalars['ID']>;
	mediaItemId?: Maybe<Scalars['Int']>;
	uri?: Maybe<Scalars['String']>;
	slug?: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryMediaItemsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<RootQueryToMediaItemConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryMenuArgs = {
	id: Scalars['ID'];
	idType?: Maybe<MenuNodeIdTypeEnum>;
};

/** The root entry point into the Graph */
export type RootQueryMenuItemArgs = {
	id: Scalars['ID'];
	idType?: Maybe<MenuItemNodeIdTypeEnum>;
};

/** The root entry point into the Graph */
export type RootQueryMenuItemsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<RootQueryToMenuItemConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryMenusArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<RootQueryToMenuConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryNodeArgs = {
	id?: Maybe<Scalars['ID']>;
};

/** The root entry point into the Graph */
export type RootQueryNodeByUriArgs = {
	uri: Scalars['String'];
};

/** The root entry point into the Graph */
export type RootQueryPageArgs = {
	id: Scalars['ID'];
	idType?: Maybe<PageIdType>;
	asPreview?: Maybe<Scalars['Boolean']>;
};

/** The root entry point into the Graph */
export type RootQueryPageByArgs = {
	id?: Maybe<Scalars['ID']>;
	pageId?: Maybe<Scalars['Int']>;
	uri?: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryPagesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<RootQueryToPageConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryPluginArgs = {
	id: Scalars['ID'];
};

/** The root entry point into the Graph */
export type RootQueryPluginsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryPositionArgs = {
	id: Scalars['ID'];
	idType?: Maybe<PositionIdType>;
	asPreview?: Maybe<Scalars['Boolean']>;
};

/** The root entry point into the Graph */
export type RootQueryPositionByArgs = {
	id?: Maybe<Scalars['ID']>;
	positionId?: Maybe<Scalars['Int']>;
	uri?: Maybe<Scalars['String']>;
	slug?: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryPositionsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<RootQueryToPositionConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryPostArgs = {
	id: Scalars['ID'];
	idType?: Maybe<PostIdType>;
	asPreview?: Maybe<Scalars['Boolean']>;
};

/** The root entry point into the Graph */
export type RootQueryPostByArgs = {
	id?: Maybe<Scalars['ID']>;
	postId?: Maybe<Scalars['Int']>;
	uri?: Maybe<Scalars['String']>;
	slug?: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryPostFormatArgs = {
	id: Scalars['ID'];
	idType?: Maybe<PostFormatIdType>;
};

/** The root entry point into the Graph */
export type RootQueryPostFormatsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<RootQueryToPostFormatConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryPostsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<RootQueryToPostConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryRegisteredScriptsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryRegisteredStylesheetsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryRevisionsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<RootQueryToContentRevisionUnionConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryTagArgs = {
	id: Scalars['ID'];
	idType?: Maybe<TagIdType>;
};

/** The root entry point into the Graph */
export type RootQueryTagsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<RootQueryToTagConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryTaxonomiesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryTaxonomyArgs = {
	id: Scalars['ID'];
	idType?: Maybe<TaxonomyIdTypeEnum>;
};

/** The root entry point into the Graph */
export type RootQueryTermNodeArgs = {
	id: Scalars['ID'];
	idType?: Maybe<TermNodeIdTypeEnum>;
	taxonomy?: Maybe<TaxonomyEnum>;
};

/** The root entry point into the Graph */
export type RootQueryTermsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<RootQueryToTermNodeConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryTestimonialArgs = {
	id: Scalars['ID'];
	idType?: Maybe<TestimonialIdType>;
	asPreview?: Maybe<Scalars['Boolean']>;
};

/** The root entry point into the Graph */
export type RootQueryTestimonialByArgs = {
	id?: Maybe<Scalars['ID']>;
	testimonialId?: Maybe<Scalars['Int']>;
	uri?: Maybe<Scalars['String']>;
	slug?: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryTestimonialsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<RootQueryToTestimonialConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryThemeArgs = {
	id: Scalars['ID'];
};

/** The root entry point into the Graph */
export type RootQueryThemesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryUserArgs = {
	id: Scalars['ID'];
	idType?: Maybe<UserNodeIdTypeEnum>;
};

/** The root entry point into the Graph */
export type RootQueryUserRoleArgs = {
	id: Scalars['ID'];
};

/** The root entry point into the Graph */
export type RootQueryUserRolesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryUsersArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<RootQueryToUserConnectionWhereArgs>;
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
		author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
		/** The database identifier of the author of the node */
		authorDatabaseId?: Maybe<Scalars['Int']>;
		/** The globally unique identifier of the author of the node */
		authorId?: Maybe<Scalars['ID']>;
		/** Connection between the about type and the category type */
		categories?: Maybe<AboutToCategoryConnection>;
		/** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
		commentCount?: Maybe<Scalars['Int']>;
		/** Whether the comments are open or closed for this particular post. */
		commentStatus?: Maybe<Scalars['String']>;
		/** Connection between the about type and the Comment type */
		comments?: Maybe<AboutToCommentConnection>;
		/** The content of the post. */
		content?: Maybe<Scalars['String']>;
		/** Connection between the ContentNode type and the ContentType type */
		contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
		/** The ID of the node in the database. */
		databaseId: Scalars['Int'];
		/** Post publishing date. */
		date?: Maybe<Scalars['String']>;
		/** The publishing date set in GMT. */
		dateGmt?: Maybe<Scalars['String']>;
		/** The desired slug of the post */
		desiredSlug?: Maybe<Scalars['String']>;
		/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
		editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
		/** The RSS enclosure for the object */
		enclosure?: Maybe<Scalars['String']>;
		/** Connection between the ContentNode type and the EnqueuedScript type */
		enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
		/** Connection between the ContentNode type and the EnqueuedStylesheet type */
		enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
		/** The excerpt of the post. */
		excerpt?: Maybe<Scalars['String']>;
		/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
		featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
		/** The database identifier for the featured image node assigned to the content node */
		featuredImageDatabaseId?: Maybe<Scalars['Int']>;
		/** Globally unique ID of the featured image assigned to the node */
		featuredImageId?: Maybe<Scalars['ID']>;
		/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
		guid?: Maybe<Scalars['String']>;
		/** The globally unique identifier of the about object. */
		id: Scalars['ID'];
		/** Whether the object is a node in the preview state */
		isPreview?: Maybe<Scalars['Boolean']>;
		/** Whether the object is restricted from the current viewer */
		isRestricted?: Maybe<Scalars['Boolean']>;
		/** True if the node is a revision of another node */
		isRevision?: Maybe<Scalars['Boolean']>;
		/** The user that most recently edited the node */
		lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
		/** The permalink of the post */
		link?: Maybe<Scalars['String']>;
		/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
		menuOrder?: Maybe<Scalars['Int']>;
		/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
		modified?: Maybe<Scalars['String']>;
		/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
		modifiedGmt?: Maybe<Scalars['String']>;
		/** Whether the pings are open or closed for this particular post. */
		pingStatus?: Maybe<Scalars['String']>;
		/** URLs that have been pinged. */
		pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
		/** AWS Polly URL */
		polly?: Maybe<About_Polly>;
		/** Connection between the about type and the postFormat type */
		postFormats?: Maybe<AboutToPostFormatConnection>;
		/** Connection between the about type and the about type */
		preview?: Maybe<AboutToPreviewConnectionEdge>;
		/** The database id of the preview node */
		previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
		/** Whether the object is a node in the preview state */
		previewRevisionId?: Maybe<Scalars['ID']>;
		/** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
		revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
		/** Connection between the about type and the about type */
		revisions?: Maybe<AboutToRevisionConnection>;
		/** The Yoast SEO data of the about */
		seo?: Maybe<PostTypeSeo>;
		/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
		slug?: Maybe<Scalars['String']>;
		social?: Maybe<About_Social>;
		/** The current status of the object */
		status?: Maybe<Scalars['String']>;
		/** The template assigned to a node of content */
		template?: Maybe<ContentTemplate>;
		/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
		title?: Maybe<Scalars['String']>;
		/** URLs queued to be pinged. */
		toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
		/** URI path for the resource */
		uri: Scalars['String'];
	};

/** The about type */
export type AboutCategoriesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<AboutToCategoryConnectionWhereArgs>;
};

/** The about type */
export type AboutCommentsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<AboutToCommentConnectionWhereArgs>;
};

/** The about type */
export type AboutContentArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** The about type */
export type AboutEnqueuedScriptsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The about type */
export type AboutEnqueuedStylesheetsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The about type */
export type AboutExcerptArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** The about type */
export type AboutPostFormatsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<AboutToPostFormatConnectionWhereArgs>;
};

/** The about type */
export type AboutRevisionsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<AboutToRevisionConnectionWhereArgs>;
};

/** The about type */
export type AboutTitleArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** An object with an ID */
export type Node = {
	/** The globally unique ID for the object */
	id: Scalars['ID'];
};

/** Nodes used to manage content */
export type ContentNode = {
	/** Connection between the ContentNode type and the ContentType type */
	contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
	/** The ID of the node in the database. */
	databaseId: Scalars['Int'];
	/** Post publishing date. */
	date?: Maybe<Scalars['String']>;
	/** The publishing date set in GMT. */
	dateGmt?: Maybe<Scalars['String']>;
	/** The desired slug of the post */
	desiredSlug?: Maybe<Scalars['String']>;
	/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn't exist or is greater than 15 seconds */
	editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
	/** The RSS enclosure for the object */
	enclosure?: Maybe<Scalars['String']>;
	/** Connection between the ContentNode type and the EnqueuedScript type */
	enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
	/** Connection between the ContentNode type and the EnqueuedStylesheet type */
	enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
	/** The global unique identifier for this post. This currently matches the value stored in WP_Post->guid and the guid column in the "post_objects" database table. */
	guid?: Maybe<Scalars['String']>;
	/** The globally unique identifier of the node. */
	id: Scalars['ID'];
	/** Whether the object is a node in the preview state */
	isPreview?: Maybe<Scalars['Boolean']>;
	/** Whether the object is restricted from the current viewer */
	isRestricted?: Maybe<Scalars['Boolean']>;
	/** The user that most recently edited the node */
	lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
	/** The permalink of the post */
	link?: Maybe<Scalars['String']>;
	/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
	modified?: Maybe<Scalars['String']>;
	/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
	modifiedGmt?: Maybe<Scalars['String']>;
	/** The database id of the preview node */
	previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
	/** Whether the object is a node in the preview state */
	previewRevisionId?: Maybe<Scalars['ID']>;
	/** The uri slug for the post. This is equivalent to the WP_Post->post_name field and the post_name column in the database for the "post_objects" table. */
	slug?: Maybe<Scalars['String']>;
	/** The current status of the object */
	status?: Maybe<Scalars['String']>;
	/** The template assigned to a node of content */
	template?: Maybe<ContentTemplate>;
	/** URI path for the resource */
	uri: Scalars['String'];
};

/** Nodes used to manage content */
export type ContentNodeEnqueuedScriptsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** Nodes used to manage content */
export type ContentNodeEnqueuedStylesheetsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** Connection between the ContentNode type and the ContentType type */
export type ContentNodeToContentTypeConnectionEdge = {
	__typename?: 'ContentNodeToContentTypeConnectionEdge';
	/** The nodes of the connection, without the edges */
	node?: Maybe<ContentType>;
};

/** An Post Type object */
export type ContentType = Node &
	UniformResourceIdentifiable & {
		__typename?: 'ContentType';
		/** Whether this content type should can be exported. */
		canExport?: Maybe<Scalars['Boolean']>;
		/** Connection between the ContentType type and the Taxonomy type */
		connectedTaxonomies?: Maybe<ContentTypeToTaxonomyConnection>;
		/** Connection between the ContentType type and the ContentNode type */
		contentNodes?: Maybe<ContentTypeToContentNodeConnection>;
		/** Whether content of this type should be deleted when the author of it is deleted from the system. */
		deleteWithUser?: Maybe<Scalars['Boolean']>;
		/** Description of the content type. */
		description?: Maybe<Scalars['String']>;
		/** Whether to exclude nodes of this content type from front end search results. */
		excludeFromSearch?: Maybe<Scalars['Boolean']>;
		/** The plural name of the content type within the GraphQL Schema. */
		graphqlPluralName?: Maybe<Scalars['String']>;
		/** The singular name of the content type within the GraphQL Schema. */
		graphqlSingleName?: Maybe<Scalars['String']>;
		/** Whether this content type should have archives. Content archives are generated by type and by date. */
		hasArchive?: Maybe<Scalars['Boolean']>;
		/** Whether the content type is hierarchical, for example pages. */
		hierarchical?: Maybe<Scalars['Boolean']>;
		/** The globally unique identifier of the post-type object. */
		id: Scalars['ID'];
		/** Whether this page is set to the static front page. */
		isFrontPage: Scalars['Boolean'];
		/** Whether this page is set to the blog posts page. */
		isPostsPage: Scalars['Boolean'];
		/** Whether the object is restricted from the current viewer */
		isRestricted?: Maybe<Scalars['Boolean']>;
		/** Display name of the content type. */
		label?: Maybe<Scalars['String']>;
		/** Details about the content type labels. */
		labels?: Maybe<PostTypeLabelDetails>;
		/** The name of the icon file to display as a menu icon. */
		menuIcon?: Maybe<Scalars['String']>;
		/** The position of this post type in the menu. Only applies if show_in_menu is true. */
		menuPosition?: Maybe<Scalars['Int']>;
		/** The internal name of the post type. This should not be used for display purposes. */
		name?: Maybe<Scalars['String']>;
		/** Whether a content type is intended for use publicly either via the admin interface or by front-end users. While the default settings of exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are inherited from public, each does not rely on this relationship and controls a very specific intention. */
		public?: Maybe<Scalars['Boolean']>;
		/** Whether queries can be performed on the front end for the content type as part of parse_request(). */
		publiclyQueryable?: Maybe<Scalars['Boolean']>;
		/** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
		restBase?: Maybe<Scalars['String']>;
		/** The REST Controller class assigned to handling this content type. */
		restControllerClass?: Maybe<Scalars['String']>;
		/** Makes this content type available via the admin bar. */
		showInAdminBar?: Maybe<Scalars['Boolean']>;
		/** Whether to add the content type to the GraphQL Schema. */
		showInGraphql?: Maybe<Scalars['Boolean']>;
		/** Where to show the content type in the admin menu. To work, $show_ui must be true. If true, the post type is shown in its own top level menu. If false, no menu is shown. If a string of an existing top level menu (eg. &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type will be placed as a sub-menu of that. */
		showInMenu?: Maybe<Scalars['Boolean']>;
		/** Makes this content type available for selection in navigation menus. */
		showInNavMenus?: Maybe<Scalars['Boolean']>;
		/** Whether the content type is associated with a route under the the REST API &quot;wp/v2&quot; namespace. */
		showInRest?: Maybe<Scalars['Boolean']>;
		/** Whether to generate and allow a UI for managing this content type in the admin. */
		showUi?: Maybe<Scalars['Boolean']>;
		/** The unique resource identifier path */
		uri?: Maybe<Scalars['String']>;
	};

/** An Post Type object */
export type ContentTypeConnectedTaxonomiesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** An Post Type object */
export type ContentTypeContentNodesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<ContentTypeToContentNodeConnectionWhereArgs>;
};

/** Any node that has a URI */
export type UniformResourceIdentifiable = {
	/** The unique resource identifier path */
	id: Scalars['ID'];
	/** The unique resource identifier path */
	uri?: Maybe<Scalars['String']>;
};

/** Connection between the ContentType type and the Taxonomy type */
export type ContentTypeToTaxonomyConnection = {
	__typename?: 'ContentTypeToTaxonomyConnection';
	/** Edges for the ContentTypeToTaxonomyConnection connection */
	edges?: Maybe<Array<Maybe<ContentTypeToTaxonomyConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Taxonomy>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ContentTypeToTaxonomyConnectionEdge = {
	__typename?: 'ContentTypeToTaxonomyConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Taxonomy>;
};

/** A taxonomy object */
export type Taxonomy = Node & {
	__typename?: 'Taxonomy';
	/** List of Content Types associated with the Taxonomy */
	connectedContentTypes?: Maybe<TaxonomyToContentTypeConnection>;
	/** Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description */
	description?: Maybe<Scalars['String']>;
	/** The plural name of the post type within the GraphQL Schema. */
	graphqlPluralName?: Maybe<Scalars['String']>;
	/** The singular name of the post type within the GraphQL Schema. */
	graphqlSingleName?: Maybe<Scalars['String']>;
	/** Whether the taxonomy is hierarchical */
	hierarchical?: Maybe<Scalars['Boolean']>;
	/** The globally unique identifier of the taxonomy object. */
	id: Scalars['ID'];
	/** Whether the object is restricted from the current viewer */
	isRestricted?: Maybe<Scalars['Boolean']>;
	/** Name of the taxonomy shown in the menu. Usually plural. */
	label?: Maybe<Scalars['String']>;
	/** The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label */
	name?: Maybe<Scalars['String']>;
	/** Whether the taxonomy is publicly queryable */
	public?: Maybe<Scalars['Boolean']>;
	/** Name of content type to diplay in REST API &quot;wp/v2&quot; namespace. */
	restBase?: Maybe<Scalars['String']>;
	/** The REST Controller class assigned to handling this content type. */
	restControllerClass?: Maybe<Scalars['String']>;
	/** Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud */
	showCloud?: Maybe<Scalars['Boolean']>;
	/** Whether to display a column for the taxonomy on its post type listing screens. */
	showInAdminColumn?: Maybe<Scalars['Boolean']>;
	/** Whether to add the post type to the GraphQL Schema. */
	showInGraphql?: Maybe<Scalars['Boolean']>;
	/** Whether to show the taxonomy in the admin menu */
	showInMenu?: Maybe<Scalars['Boolean']>;
	/** Whether the taxonomy is available for selection in navigation menus. */
	showInNavMenus?: Maybe<Scalars['Boolean']>;
	/** Whether to show the taxonomy in the quick/bulk edit panel. */
	showInQuickEdit?: Maybe<Scalars['Boolean']>;
	/** Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace. */
	showInRest?: Maybe<Scalars['Boolean']>;
	/** Whether to generate and allow a UI for managing terms in this taxonomy in the admin */
	showUi?: Maybe<Scalars['Boolean']>;
};

/** A taxonomy object */
export type TaxonomyConnectedContentTypesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** Connection between the Taxonomy type and the ContentType type */
export type TaxonomyToContentTypeConnection = {
	__typename?: 'TaxonomyToContentTypeConnection';
	/** Edges for the TaxonomyToContentTypeConnection connection */
	edges?: Maybe<Array<Maybe<TaxonomyToContentTypeConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<ContentType>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TaxonomyToContentTypeConnectionEdge = {
	__typename?: 'TaxonomyToContentTypeConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<ContentType>;
};

/** Information about pagination in a connection. */
export type WpPageInfo = {
	__typename?: 'WPPageInfo';
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars['String']>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars['Boolean'];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars['Boolean'];
	/** Raw schema for page */
	seo?: Maybe<SeoPostTypePageInfo>;
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars['String']>;
};

/** The page info SEO details */
export type SeoPostTypePageInfo = {
	__typename?: 'SEOPostTypePageInfo';
	schema?: Maybe<SeoPageInfoSchema>;
};

/** The Schema for post type */
export type SeoPageInfoSchema = {
	__typename?: 'SEOPageInfoSchema';
	raw?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the ContentTypeToContentNodeConnection connection */
export type ContentTypeToContentNodeConnectionWhereArgs = {
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Filter the connection based on input */
export type DateQueryInput = {
	/** Nodes should be returned after this date */
	after?: Maybe<DateInput>;
	/** Nodes should be returned before this date */
	before?: Maybe<DateInput>;
	/** Column to query against */
	column?: Maybe<PostObjectsConnectionDateColumnEnum>;
	/** For after/before, whether exact value should be matched or not */
	compare?: Maybe<Scalars['String']>;
	/** Day of the month (from 1 to 31) */
	day?: Maybe<Scalars['Int']>;
	/** Hour (from 0 to 23) */
	hour?: Maybe<Scalars['Int']>;
	/** For after/before, whether exact value should be matched or not */
	inclusive?: Maybe<Scalars['Boolean']>;
	/** Minute (from 0 to 59) */
	minute?: Maybe<Scalars['Int']>;
	/** Month number (from 1 to 12) */
	month?: Maybe<Scalars['Int']>;
	/** OR or AND, how the sub-arrays should be compared */
	relation?: Maybe<RelationEnum>;
	/** Second (0 to 59) */
	second?: Maybe<Scalars['Int']>;
	/** Week of the year (from 0 to 53) */
	week?: Maybe<Scalars['Int']>;
	/** 4 digit year (e.g. 2017) */
	year?: Maybe<Scalars['Int']>;
};

/** Date values */
export type DateInput = {
	/** Day of the month (from 1 to 31) */
	day?: Maybe<Scalars['Int']>;
	/** Month number (from 1 to 12) */
	month?: Maybe<Scalars['Int']>;
	/** 4 digit year (e.g. 2017) */
	year?: Maybe<Scalars['Int']>;
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
	edges?: Maybe<Array<Maybe<ContentTypeToContentNodeConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<ContentNode>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ContentTypeToContentNodeConnectionEdge = {
	__typename?: 'ContentTypeToContentNodeConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<ContentNode>;
};

/** Details for labels of the PostType */
export type PostTypeLabelDetails = {
	__typename?: 'PostTypeLabelDetails';
	/** Default is ‘Add New’ for both hierarchical and non-hierarchical types. */
	addNew?: Maybe<Scalars['String']>;
	/** Label for adding a new singular item. */
	addNewItem?: Maybe<Scalars['String']>;
	/** Label to signify all items in a submenu link. */
	allItems?: Maybe<Scalars['String']>;
	/** Label for archives in nav menus */
	archives?: Maybe<Scalars['String']>;
	/** Label for the attributes meta box. */
	attributes?: Maybe<Scalars['String']>;
	/** Label for editing a singular item. */
	editItem?: Maybe<Scalars['String']>;
	/** Label for the Featured Image meta box title. */
	featuredImage?: Maybe<Scalars['String']>;
	/** Label for the table views hidden heading. */
	filterItemsList?: Maybe<Scalars['String']>;
	/** Label for the media frame button. */
	insertIntoItem?: Maybe<Scalars['String']>;
	/** Label for the table hidden heading. */
	itemsList?: Maybe<Scalars['String']>;
	/** Label for the table pagination hidden heading. */
	itemsListNavigation?: Maybe<Scalars['String']>;
	/** Label for the menu name. */
	menuName?: Maybe<Scalars['String']>;
	/** General name for the post type, usually plural. */
	name?: Maybe<Scalars['String']>;
	/** Label for the new item page title. */
	newItem?: Maybe<Scalars['String']>;
	/** Label used when no items are found. */
	notFound?: Maybe<Scalars['String']>;
	/** Label used when no items are in the trash. */
	notFoundInTrash?: Maybe<Scalars['String']>;
	/** Label used to prefix parents of hierarchical items. */
	parentItemColon?: Maybe<Scalars['String']>;
	/** Label for removing the featured image. */
	removeFeaturedImage?: Maybe<Scalars['String']>;
	/** Label for searching plural items. */
	searchItems?: Maybe<Scalars['String']>;
	/** Label for setting the featured image. */
	setFeaturedImage?: Maybe<Scalars['String']>;
	/** Name for one object of this post type. */
	singularName?: Maybe<Scalars['String']>;
	/** Label for the media frame filter. */
	uploadedToThisItem?: Maybe<Scalars['String']>;
	/** Label in the media frame for using a featured image. */
	useFeaturedImage?: Maybe<Scalars['String']>;
	/** Label for viewing a singular item. */
	viewItem?: Maybe<Scalars['String']>;
	/** Label for viewing post type archives. */
	viewItems?: Maybe<Scalars['String']>;
};

/** Connection between the ContentNode type and the User type */
export type ContentNodeToEditLockConnectionEdge = {
	__typename?: 'ContentNodeToEditLockConnectionEdge';
	/** The timestamp for when the node was last edited */
	lockTimestamp?: Maybe<Scalars['String']>;
	/** The nodes of the connection, without the edges */
	node?: Maybe<User>;
};

/** A User object */
export type User = Node &
	UniformResourceIdentifiable &
	Commenter &
	DatabaseIdentifier & {
		__typename?: 'User';
		/** Connection between the User type and the about type */
		abouts?: Maybe<UserToAboutConnection>;
		/** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
		avatar?: Maybe<Avatar>;
		/** User metadata option name. Usually it will be &quot;wp_capabilities&quot;. */
		capKey?: Maybe<Scalars['String']>;
		/** A list of capabilities (permissions) granted to the user */
		capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
		/** Connection between the User type and the Comment type */
		comments?: Maybe<UserToCommentConnection>;
		/** Connection between the User type and the consultant type */
		consultants?: Maybe<UserToConsultantConnection>;
		/** Identifies the primary key from the database. */
		databaseId: Scalars['Int'];
		/** Description of the user. */
		description?: Maybe<Scalars['String']>;
		/** Email address of the user. This is equivalent to the WP_User-&gt;user_email property. */
		email?: Maybe<Scalars['String']>;
		/** Connection between the User type and the EnqueuedScript type */
		enqueuedScripts?: Maybe<UserToEnqueuedScriptConnection>;
		/** Connection between the User type and the EnqueuedStylesheet type */
		enqueuedStylesheets?: Maybe<UserToEnqueuedStylesheetConnection>;
		/** A complete list of capabilities including capabilities inherited from a role. This is equivalent to the array keys of WP_User-&gt;allcaps. */
		extraCapabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
		/** First name of the user. This is equivalent to the WP_User-&gt;user_first_name property. */
		firstName?: Maybe<Scalars['String']>;
		/** The globally unique identifier for the user object. */
		id: Scalars['ID'];
		/** Whether the JWT User secret has been revoked. If the secret has been revoked, auth tokens will not be issued until an admin, or user with proper capabilities re-issues a secret for the user. */
		isJwtAuthSecretRevoked: Scalars['Boolean'];
		/** Whether the object is restricted from the current viewer */
		isRestricted?: Maybe<Scalars['Boolean']>;
		/** The expiration for the JWT Token for the user. If not set custom for the user, it will use the default sitewide expiration setting */
		jwtAuthExpiration?: Maybe<Scalars['String']>;
		/** A JWT token that can be used in future requests for authentication/authorization */
		jwtAuthToken?: Maybe<Scalars['String']>;
		/** A JWT token that can be used in future requests to get a refreshed jwtAuthToken. If the refresh token used in a request is revoked or otherwise invalid, a valid Auth token will NOT be issued in the response headers. */
		jwtRefreshToken?: Maybe<Scalars['String']>;
		/** A unique secret tied to the users JWT token that can be revoked or refreshed. Revoking the secret prevents JWT tokens from being issued to the user. Refreshing the token invalidates previously issued tokens, but allows new tokens to be issued. */
		jwtUserSecret?: Maybe<Scalars['String']>;
		/** Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property. */
		lastName?: Maybe<Scalars['String']>;
		/** The preferred language locale set for the user. Value derived from get_user_locale(). */
		locale?: Maybe<Scalars['String']>;
		/** Connection between the User type and the mediaItem type */
		mediaItems?: Maybe<UserToMediaItemConnection>;
		/** Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property. */
		name?: Maybe<Scalars['String']>;
		/** The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename */
		nicename?: Maybe<Scalars['String']>;
		/** Nickname of the user. */
		nickname?: Maybe<Scalars['String']>;
		/** Connection between the User type and the page type */
		pages?: Maybe<UserToPageConnection>;
		/** Connection between the User type and the position type */
		positions?: Maybe<UserToPositionConnection>;
		/** Connection between the User type and the post type */
		posts?: Maybe<UserToPostConnection>;
		/** The date the user registered or was created. The field follows a full ISO8601 date string format. */
		registeredDate?: Maybe<Scalars['String']>;
		/** Connection between the User and Revisions authored by the user */
		revisions?: Maybe<UserToContentRevisionUnionConnection>;
		/** Connection between the User type and the UserRole type */
		roles?: Maybe<UserToUserRoleConnection>;
		/** The Yoast SEO data of a user */
		seo?: Maybe<SeoUser>;
		/** The slug for the user. This field is equivalent to WP_User-&gt;user_nicename */
		slug?: Maybe<Scalars['String']>;
		/** Connection between the User type and the testimonial type */
		testimonials?: Maybe<UserToTestimonialConnection>;
		/** The unique resource identifier path */
		uri?: Maybe<Scalars['String']>;
		/** A website url that is associated with the user. */
		url?: Maybe<Scalars['String']>;
		/**
		 * The Id of the user. Equivalent to WP_User-&gt;ID
		 * @deprecated Deprecated in favor of the databaseId field
		 */
		userId?: Maybe<Scalars['Int']>;
		/** Username for the user. This field is equivalent to WP_User-&gt;user_login. */
		username?: Maybe<Scalars['String']>;
	};

/** A User object */
export type UserAboutsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<UserToAboutConnectionWhereArgs>;
};

/** A User object */
export type UserAvatarArgs = {
	size?: Maybe<Scalars['Int']>;
	forceDefault?: Maybe<Scalars['Boolean']>;
	rating?: Maybe<AvatarRatingEnum>;
};

/** A User object */
export type UserCommentsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<UserToCommentConnectionWhereArgs>;
};

/** A User object */
export type UserConsultantsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<UserToConsultantConnectionWhereArgs>;
};

/** A User object */
export type UserEnqueuedScriptsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** A User object */
export type UserEnqueuedStylesheetsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** A User object */
export type UserMediaItemsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<UserToMediaItemConnectionWhereArgs>;
};

/** A User object */
export type UserPagesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<UserToPageConnectionWhereArgs>;
};

/** A User object */
export type UserPositionsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<UserToPositionConnectionWhereArgs>;
};

/** A User object */
export type UserPostsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<UserToPostConnectionWhereArgs>;
};

/** A User object */
export type UserRevisionsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<UserToContentRevisionUnionConnectionWhereArgs>;
};

/** A User object */
export type UserRolesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** A User object */
export type UserTestimonialsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<UserToTestimonialConnectionWhereArgs>;
};

/** The author of a comment */
export type Commenter = {
	/** Identifies the primary key from the database. */
	databaseId: Scalars['Int'];
	/** The email address of the author of a comment. */
	email?: Maybe<Scalars['String']>;
	/** The globally unique identifier for the comment author. */
	id: Scalars['ID'];
	/** Whether the author information is considered restricted. (not fully public) */
	isRestricted?: Maybe<Scalars['Boolean']>;
	/** The name of the author of a comment. */
	name?: Maybe<Scalars['String']>;
	/** The url of the author of a comment. */
	url?: Maybe<Scalars['String']>;
};

/** Object that can be identified with a Database ID */
export type DatabaseIdentifier = {
	/** The unique identifier stored in the database */
	databaseId: Scalars['Int'];
};

/** Arguments for filtering the UserToAboutConnection connection */
export type UserToAboutConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId?: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName?: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the about type */
export type UserToAboutConnection = {
	__typename?: 'UserToAboutConnection';
	/** Edges for the UserToAboutConnection connection */
	edges?: Maybe<Array<Maybe<UserToAboutConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<About>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToAboutConnectionEdge = {
	__typename?: 'UserToAboutConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<About>;
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
	default?: Maybe<Scalars['String']>;
	/** HTML attributes to insert in the IMG element. Is not sanitized. */
	extraAttr?: Maybe<Scalars['String']>;
	/** Whether to always show the default image, never the Gravatar. */
	forceDefault?: Maybe<Scalars['Boolean']>;
	/** Whether the avatar was successfully found. */
	foundAvatar?: Maybe<Scalars['Boolean']>;
	/** Height of the avatar image. */
	height?: Maybe<Scalars['Int']>;
	/** Whether the object is restricted from the current viewer */
	isRestricted?: Maybe<Scalars['Boolean']>;
	/** What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;, &#039;R&#039;, &#039;X&#039;, and are judged in that order. */
	rating?: Maybe<Scalars['String']>;
	/** Type of url scheme to use. Typically HTTP vs. HTTPS. */
	scheme?: Maybe<Scalars['String']>;
	/** The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image. */
	size?: Maybe<Scalars['Int']>;
	/** URL for the gravatar image source. */
	url?: Maybe<Scalars['String']>;
	/** Width of the avatar image. */
	width?: Maybe<Scalars['Int']>;
};

/** Arguments for filtering the UserToCommentConnection connection */
export type UserToCommentConnectionWhereArgs = {
	/** Comment author email address. */
	authorEmail?: Maybe<Scalars['String']>;
	/** Array of author IDs to include comments for. */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Comment author URL. */
	authorUrl?: Maybe<Scalars['String']>;
	/** Array of comment IDs to include. */
	commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Include comments of a given type. */
	commentType?: Maybe<Scalars['String']>;
	/** Include comments from a given array of comment types. */
	commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?: Maybe<Scalars['String']>;
	/** Content object author ID to limit results by. */
	contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId?: Maybe<Scalars['ID']>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Content object name to retrieve affiliated comments for. */
	contentName?: Maybe<Scalars['String']>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?: Maybe<Scalars['Int']>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Karma score to retrieve matching comments for. */
	karma?: Maybe<Scalars['Int']>;
	/** The cardinality of the order of the connection */
	order?: Maybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby?: Maybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent?: Maybe<Scalars['Int']>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Search term(s) to retrieve matching comments for. */
	search?: Maybe<Scalars['String']>;
	/** Comment status to limit results by. */
	status?: Maybe<Scalars['String']>;
	/** Include comments for a specific user ID. */
	userId?: Maybe<Scalars['ID']>;
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
	ContactForm = 'CONTACT_FORM',
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
	edges?: Maybe<Array<Maybe<UserToCommentConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Comment>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToCommentConnectionEdge = {
	__typename?: 'UserToCommentConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Comment>;
};

/** A Comment object */
export type Comment = Node &
	DatabaseIdentifier & {
		__typename?: 'Comment';
		/** User agent used to post the comment. This field is equivalent to WP_Comment-&gt;comment_agent and the value matching the &quot;comment_agent&quot; column in SQL. */
		agent?: Maybe<Scalars['String']>;
		/** The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL. */
		approved?: Maybe<Scalars['Boolean']>;
		/** The author of the comment */
		author?: Maybe<CommentToCommenterConnectionEdge>;
		/** IP address for the author. This field is equivalent to WP_Comment-&gt;comment_author_IP and the value matching the &quot;comment_author_IP&quot; column in SQL. */
		authorIp?: Maybe<Scalars['String']>;
		/**
		 * ID for the comment, unique among comments.
		 * @deprecated Deprecated in favor of databaseId
		 */
		commentId?: Maybe<Scalars['Int']>;
		/** Connection between the Comment type and the ContentNode type */
		commentedOn?: Maybe<CommentToContentNodeConnectionEdge>;
		/** Content of the comment. This field is equivalent to WP_Comment-&gt;comment_content and the value matching the &quot;comment_content&quot; column in SQL. */
		content?: Maybe<Scalars['String']>;
		/** The unique identifier stored in the database */
		databaseId: Scalars['Int'];
		/** Date the comment was posted in local time. This field is equivalent to WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL. */
		date?: Maybe<Scalars['String']>;
		/** Date the comment was posted in GMT. This field is equivalent to WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column in SQL. */
		dateGmt?: Maybe<Scalars['String']>;
		/** The globally unique identifier for the comment object */
		id: Scalars['ID'];
		/** Whether the object is restricted from the current viewer */
		isRestricted?: Maybe<Scalars['Boolean']>;
		/** Karma value for the comment. This field is equivalent to WP_Comment-&gt;comment_karma and the value matching the &quot;comment_karma&quot; column in SQL. */
		karma?: Maybe<Scalars['Int']>;
		/** Connection between the Comment type and the Comment type */
		parent?: Maybe<CommentToParentCommentConnectionEdge>;
		/** The database id of the parent comment node or null if it is the root comment */
		parentDatabaseId?: Maybe<Scalars['Int']>;
		/** The globally unique identifier of the parent comment node. */
		parentId?: Maybe<Scalars['ID']>;
		/** Connection between the Comment type and the Comment type */
		replies?: Maybe<CommentToCommentConnection>;
		/** Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and the value matching the &quot;comment_type&quot; column in SQL. */
		type?: Maybe<Scalars['String']>;
	};

/** A Comment object */
export type CommentContentArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** A Comment object */
export type CommentParentArgs = {
	where?: Maybe<CommentToParentCommentConnectionWhereArgs>;
};

/** A Comment object */
export type CommentRepliesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<CommentToCommentConnectionWhereArgs>;
};

/** Connection between the Comment type and the Commenter type */
export type CommentToCommenterConnectionEdge = {
	__typename?: 'CommentToCommenterConnectionEdge';
	/** The nodes of the connection, without the edges */
	node?: Maybe<Commenter>;
};

/** Connection between the Comment type and the ContentNode type */
export type CommentToContentNodeConnectionEdge = {
	__typename?: 'CommentToContentNodeConnectionEdge';
	/** The nodes of the connection, without the edges */
	node?: Maybe<ContentNode>;
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
	authorEmail?: Maybe<Scalars['String']>;
	/** Array of author IDs to include comments for. */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Comment author URL. */
	authorUrl?: Maybe<Scalars['String']>;
	/** Array of comment IDs to include. */
	commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Include comments of a given type. */
	commentType?: Maybe<Scalars['String']>;
	/** Include comments from a given array of comment types. */
	commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?: Maybe<Scalars['String']>;
	/** Content object author ID to limit results by. */
	contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId?: Maybe<Scalars['ID']>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Content object name to retrieve affiliated comments for. */
	contentName?: Maybe<Scalars['String']>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?: Maybe<Scalars['Int']>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Karma score to retrieve matching comments for. */
	karma?: Maybe<Scalars['Int']>;
	/** The cardinality of the order of the connection */
	order?: Maybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby?: Maybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent?: Maybe<Scalars['Int']>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Search term(s) to retrieve matching comments for. */
	search?: Maybe<Scalars['String']>;
	/** Comment status to limit results by. */
	status?: Maybe<Scalars['String']>;
	/** Include comments for a specific user ID. */
	userId?: Maybe<Scalars['ID']>;
};

/** Connection between the Comment type and the Comment type */
export type CommentToParentCommentConnectionEdge = {
	__typename?: 'CommentToParentCommentConnectionEdge';
	/** The nodes of the connection, without the edges */
	node?: Maybe<Comment>;
};

/** Arguments for filtering the CommentToCommentConnection connection */
export type CommentToCommentConnectionWhereArgs = {
	/** Comment author email address. */
	authorEmail?: Maybe<Scalars['String']>;
	/** Array of author IDs to include comments for. */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Comment author URL. */
	authorUrl?: Maybe<Scalars['String']>;
	/** Array of comment IDs to include. */
	commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Include comments of a given type. */
	commentType?: Maybe<Scalars['String']>;
	/** Include comments from a given array of comment types. */
	commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?: Maybe<Scalars['String']>;
	/** Content object author ID to limit results by. */
	contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId?: Maybe<Scalars['ID']>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Content object name to retrieve affiliated comments for. */
	contentName?: Maybe<Scalars['String']>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?: Maybe<Scalars['Int']>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Karma score to retrieve matching comments for. */
	karma?: Maybe<Scalars['Int']>;
	/** The cardinality of the order of the connection */
	order?: Maybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby?: Maybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent?: Maybe<Scalars['Int']>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Search term(s) to retrieve matching comments for. */
	search?: Maybe<Scalars['String']>;
	/** Comment status to limit results by. */
	status?: Maybe<Scalars['String']>;
	/** Include comments for a specific user ID. */
	userId?: Maybe<Scalars['ID']>;
};

/** Connection between the Comment type and the Comment type */
export type CommentToCommentConnection = {
	__typename?: 'CommentToCommentConnection';
	/** Edges for the CommentToCommentConnection connection */
	edges?: Maybe<Array<Maybe<CommentToCommentConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Comment>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CommentToCommentConnectionEdge = {
	__typename?: 'CommentToCommentConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Comment>;
};

/** Arguments for filtering the UserToConsultantConnection connection */
export type UserToConsultantConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId?: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName?: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the consultant type */
export type UserToConsultantConnection = {
	__typename?: 'UserToConsultantConnection';
	/** Edges for the UserToConsultantConnection connection */
	edges?: Maybe<Array<Maybe<UserToConsultantConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Consultant>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToConsultantConnectionEdge = {
	__typename?: 'UserToConsultantConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Consultant>;
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
		author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
		/** The database identifier of the author of the node */
		authorDatabaseId?: Maybe<Scalars['Int']>;
		/** The globally unique identifier of the author of the node */
		authorId?: Maybe<Scalars['ID']>;
		/** Connection between the consultant type and the category type */
		categories?: Maybe<ConsultantToCategoryConnection>;
		/** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
		commentCount?: Maybe<Scalars['Int']>;
		/** Whether the comments are open or closed for this particular post. */
		commentStatus?: Maybe<Scalars['String']>;
		/** Connection between the consultant type and the Comment type */
		comments?: Maybe<ConsultantToCommentConnection>;
		/**
		 * The id field matches the WP_Post-&gt;ID field.
		 * @deprecated Deprecated in favor of the databaseId field
		 */
		consultantId: Scalars['Int'];
		/** The content of the post. */
		content?: Maybe<Scalars['String']>;
		/** Connection between the ContentNode type and the ContentType type */
		contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
		/** The ID of the node in the database. */
		databaseId: Scalars['Int'];
		/** Post publishing date. */
		date?: Maybe<Scalars['String']>;
		/** The publishing date set in GMT. */
		dateGmt?: Maybe<Scalars['String']>;
		/** The desired slug of the post */
		desiredSlug?: Maybe<Scalars['String']>;
		/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
		editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
		/** The RSS enclosure for the object */
		enclosure?: Maybe<Scalars['String']>;
		/** Connection between the ContentNode type and the EnqueuedScript type */
		enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
		/** Connection between the ContentNode type and the EnqueuedStylesheet type */
		enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
		/** The excerpt of the post. */
		excerpt?: Maybe<Scalars['String']>;
		/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
		featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
		/** The database identifier for the featured image node assigned to the content node */
		featuredImageDatabaseId?: Maybe<Scalars['Int']>;
		/** Globally unique ID of the featured image assigned to the node */
		featuredImageId?: Maybe<Scalars['ID']>;
		/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
		guid?: Maybe<Scalars['String']>;
		/** The globally unique identifier of the consultant object. */
		id: Scalars['ID'];
		/** Whether the object is a node in the preview state */
		isPreview?: Maybe<Scalars['Boolean']>;
		/** Whether the object is restricted from the current viewer */
		isRestricted?: Maybe<Scalars['Boolean']>;
		/** True if the node is a revision of another node */
		isRevision?: Maybe<Scalars['Boolean']>;
		/** The user that most recently edited the node */
		lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
		/** The permalink of the post */
		link?: Maybe<Scalars['String']>;
		/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
		menuOrder?: Maybe<Scalars['Int']>;
		/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
		modified?: Maybe<Scalars['String']>;
		/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
		modifiedGmt?: Maybe<Scalars['String']>;
		/** Whether the pings are open or closed for this particular post. */
		pingStatus?: Maybe<Scalars['String']>;
		/** URLs that have been pinged. */
		pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
		/** AWS Polly URL */
		polly?: Maybe<Consultant_Polly>;
		/** Connection between the consultant type and the postFormat type */
		postFormats?: Maybe<ConsultantToPostFormatConnection>;
		/** Connection between the consultant type and the consultant type */
		preview?: Maybe<ConsultantToPreviewConnectionEdge>;
		/** The database id of the preview node */
		previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
		/** Whether the object is a node in the preview state */
		previewRevisionId?: Maybe<Scalars['ID']>;
		/** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
		revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
		/** Connection between the consultant type and the consultant type */
		revisions?: Maybe<ConsultantToRevisionConnection>;
		/** The Yoast SEO data of the consultant */
		seo?: Maybe<PostTypeSeo>;
		/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
		slug?: Maybe<Scalars['String']>;
		social?: Maybe<Consultant_Social>;
		/** The current status of the object */
		status?: Maybe<Scalars['String']>;
		/** The template assigned to a node of content */
		template?: Maybe<ContentTemplate>;
		/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
		title?: Maybe<Scalars['String']>;
		/** URLs queued to be pinged. */
		toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
		/** URI path for the resource */
		uri: Scalars['String'];
	};

/** The consultant type */
export type ConsultantCategoriesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<ConsultantToCategoryConnectionWhereArgs>;
};

/** The consultant type */
export type ConsultantCommentsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<ConsultantToCommentConnectionWhereArgs>;
};

/** The consultant type */
export type ConsultantContentArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** The consultant type */
export type ConsultantEnqueuedScriptsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The consultant type */
export type ConsultantEnqueuedStylesheetsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The consultant type */
export type ConsultantExcerptArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** The consultant type */
export type ConsultantPostFormatsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<ConsultantToPostFormatConnectionWhereArgs>;
};

/** The consultant type */
export type ConsultantRevisionsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<ConsultantToRevisionConnectionWhereArgs>;
};

/** The consultant type */
export type ConsultantTitleArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** A node that can have a template associated with it */
export type NodeWithTemplate = {
	/** The template assigned to the node */
	template?: Maybe<ContentTemplate>;
};

/** The template assigned to a node of content */
export type ContentTemplate = {
	/** The name of the template */
	templateName?: Maybe<Scalars['String']>;
};

/** A node that NodeWith a title */
export type NodeWithTitle = {
	/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
	title?: Maybe<Scalars['String']>;
};

/** A node that NodeWith a title */
export type NodeWithTitleTitleArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** A node that supports the content editor */
export type NodeWithContentEditor = {
	/** The content of the post. */
	content?: Maybe<Scalars['String']>;
};

/** A node that supports the content editor */
export type NodeWithContentEditorContentArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** A node that can have an author assigned to it */
export type NodeWithAuthor = {
	/** Connection between the NodeWithAuthor type and the User type */
	author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
	/** The database identifier of the author of the node */
	authorDatabaseId?: Maybe<Scalars['Int']>;
	/** The globally unique identifier of the author of the node */
	authorId?: Maybe<Scalars['ID']>;
};

/** Connection between the NodeWithAuthor type and the User type */
export type NodeWithAuthorToUserConnectionEdge = {
	__typename?: 'NodeWithAuthorToUserConnectionEdge';
	/** The nodes of the connection, without the edges */
	node?: Maybe<User>;
};

/** A node that can have a featured image set */
export type NodeWithFeaturedImage = {
	/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
	featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
	/** The database identifier for the featured image node assigned to the content node */
	featuredImageDatabaseId?: Maybe<Scalars['Int']>;
	/** Globally unique ID of the featured image assigned to the node */
	featuredImageId?: Maybe<Scalars['ID']>;
};

/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
export type NodeWithFeaturedImageToMediaItemConnectionEdge = {
	__typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
	/** The nodes of the connection, without the edges */
	node?: Maybe<MediaItem>;
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
		altText?: Maybe<Scalars['String']>;
		/** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
		ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
		/** Connection between the NodeWithAuthor type and the User type */
		author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
		/** The database identifier of the author of the node */
		authorDatabaseId?: Maybe<Scalars['Int']>;
		/** The globally unique identifier of the author of the node */
		authorId?: Maybe<Scalars['ID']>;
		/** The caption for the resource */
		caption?: Maybe<Scalars['String']>;
		/** Connection between the HierarchicalContentNode type and the ContentNode type */
		children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
		/** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
		commentCount?: Maybe<Scalars['Int']>;
		/** Whether the comments are open or closed for this particular post. */
		commentStatus?: Maybe<Scalars['String']>;
		/** Connection between the mediaItem type and the Comment type */
		comments?: Maybe<MediaItemToCommentConnection>;
		/** Connection between the ContentNode type and the ContentType type */
		contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
		/** The ID of the node in the database. */
		databaseId: Scalars['Int'];
		/** Post publishing date. */
		date?: Maybe<Scalars['String']>;
		/** The publishing date set in GMT. */
		dateGmt?: Maybe<Scalars['String']>;
		/** Description of the image (stored as post_content) */
		description?: Maybe<Scalars['String']>;
		/** The desired slug of the post */
		desiredSlug?: Maybe<Scalars['String']>;
		/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
		editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
		/** The RSS enclosure for the object */
		enclosure?: Maybe<Scalars['String']>;
		/** Connection between the ContentNode type and the EnqueuedScript type */
		enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
		/** Connection between the ContentNode type and the EnqueuedStylesheet type */
		enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
		/** The filesize in bytes of the resource */
		fileSize?: Maybe<Scalars['Int']>;
		/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
		guid?: Maybe<Scalars['String']>;
		/** The globally unique identifier of the attachment object. */
		id: Scalars['ID'];
		/** Whether the object is a node in the preview state */
		isPreview?: Maybe<Scalars['Boolean']>;
		/** Whether the object is restricted from the current viewer */
		isRestricted?: Maybe<Scalars['Boolean']>;
		/** The user that most recently edited the node */
		lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
		/** The permalink of the post */
		link?: Maybe<Scalars['String']>;
		/** Details about the mediaItem */
		mediaDetails?: Maybe<MediaDetails>;
		/**
		 * The id field matches the WP_Post-&gt;ID field.
		 * @deprecated Deprecated in favor of the databaseId field
		 */
		mediaItemId: Scalars['Int'];
		/** Url of the mediaItem */
		mediaItemUrl?: Maybe<Scalars['String']>;
		/** Type of resource */
		mediaType?: Maybe<Scalars['String']>;
		/** The mime type of the mediaItem */
		mimeType?: Maybe<Scalars['String']>;
		/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
		modified?: Maybe<Scalars['String']>;
		/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
		modifiedGmt?: Maybe<Scalars['String']>;
		/** The parent of the node. The parent object can be of various types */
		parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
		/** Database id of the parent node */
		parentDatabaseId?: Maybe<Scalars['Int']>;
		/** The globally unique identifier of the parent node. */
		parentId?: Maybe<Scalars['ID']>;
		/** The database id of the preview node */
		previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
		/** Whether the object is a node in the preview state */
		previewRevisionId?: Maybe<Scalars['ID']>;
		/** The Yoast SEO data of the mediaItem */
		seo?: Maybe<PostTypeSeo>;
		/** The sizes attribute value for an image. */
		sizes?: Maybe<Scalars['String']>;
		/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
		slug?: Maybe<Scalars['String']>;
		/** Url of the mediaItem */
		sourceUrl?: Maybe<Scalars['String']>;
		/** The srcset attribute specifies the URL of the image to use in different situations. It is a comma separated string of urls and their widths. */
		srcSet?: Maybe<Scalars['String']>;
		/** The current status of the object */
		status?: Maybe<Scalars['String']>;
		/** The template assigned to a node of content */
		template?: Maybe<ContentTemplate>;
		/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
		title?: Maybe<Scalars['String']>;
		/** URI path for the resource */
		uri: Scalars['String'];
	};

/** The mediaItem type */
export type MediaItemAncestorsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};

/** The mediaItem type */
export type MediaItemCaptionArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** The mediaItem type */
export type MediaItemChildrenArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};

/** The mediaItem type */
export type MediaItemCommentsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<MediaItemToCommentConnectionWhereArgs>;
};

/** The mediaItem type */
export type MediaItemDescriptionArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** The mediaItem type */
export type MediaItemEnqueuedScriptsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The mediaItem type */
export type MediaItemEnqueuedStylesheetsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The mediaItem type */
export type MediaItemFileSizeArgs = {
	size?: Maybe<MediaItemSizeEnum>;
};

/** The mediaItem type */
export type MediaItemSizesArgs = {
	size?: Maybe<MediaItemSizeEnum>;
};

/** The mediaItem type */
export type MediaItemSourceUrlArgs = {
	size?: Maybe<MediaItemSizeEnum>;
};

/** The mediaItem type */
export type MediaItemSrcSetArgs = {
	size?: Maybe<MediaItemSizeEnum>;
};

/** The mediaItem type */
export type MediaItemTitleArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** A node that can have comments associated with it */
export type NodeWithComments = {
	/** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
	commentCount?: Maybe<Scalars['Int']>;
	/** Whether the comments are open or closed for this particular post. */
	commentStatus?: Maybe<Scalars['String']>;
};

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNode = {
	/** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
	ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
	/** Connection between the HierarchicalContentNode type and the ContentNode type */
	children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
	/** The parent of the node. The parent object can be of various types */
	parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
	/** Database id of the parent node */
	parentDatabaseId?: Maybe<Scalars['Int']>;
	/** The globally unique identifier of the parent node. */
	parentId?: Maybe<Scalars['ID']>;
};

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeAncestorsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeChildrenArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};

/** Arguments for filtering the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs = {
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToContentNodeAncestorsConnection = {
	__typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnection';
	/** Edges for the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
	edges?: Maybe<
		Array<Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionEdge>>
	>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<ContentNode>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionEdge = {
	__typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<ContentNode>;
};

/** Arguments for filtering the HierarchicalContentNodeToContentNodeChildrenConnection connection */
export type HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs = {
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToContentNodeChildrenConnection = {
	__typename?: 'HierarchicalContentNodeToContentNodeChildrenConnection';
	/** Edges for the HierarchicalContentNodeToContentNodeChildrenConnection connection */
	edges?: Maybe<
		Array<Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionEdge>>
	>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<ContentNode>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type HierarchicalContentNodeToContentNodeChildrenConnectionEdge = {
	__typename?: 'HierarchicalContentNodeToContentNodeChildrenConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<ContentNode>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToParentContentNodeConnectionEdge = {
	__typename?: 'HierarchicalContentNodeToParentContentNodeConnectionEdge';
	/** The nodes of the connection, without the edges */
	node?: Maybe<ContentNode>;
};

/** Arguments for filtering the MediaItemToCommentConnection connection */
export type MediaItemToCommentConnectionWhereArgs = {
	/** Comment author email address. */
	authorEmail?: Maybe<Scalars['String']>;
	/** Array of author IDs to include comments for. */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Comment author URL. */
	authorUrl?: Maybe<Scalars['String']>;
	/** Array of comment IDs to include. */
	commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Include comments of a given type. */
	commentType?: Maybe<Scalars['String']>;
	/** Include comments from a given array of comment types. */
	commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?: Maybe<Scalars['String']>;
	/** Content object author ID to limit results by. */
	contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId?: Maybe<Scalars['ID']>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Content object name to retrieve affiliated comments for. */
	contentName?: Maybe<Scalars['String']>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?: Maybe<Scalars['Int']>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Karma score to retrieve matching comments for. */
	karma?: Maybe<Scalars['Int']>;
	/** The cardinality of the order of the connection */
	order?: Maybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby?: Maybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent?: Maybe<Scalars['Int']>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Search term(s) to retrieve matching comments for. */
	search?: Maybe<Scalars['String']>;
	/** Comment status to limit results by. */
	status?: Maybe<Scalars['String']>;
	/** Include comments for a specific user ID. */
	userId?: Maybe<Scalars['ID']>;
};

/** Connection between the mediaItem type and the Comment type */
export type MediaItemToCommentConnection = {
	__typename?: 'MediaItemToCommentConnection';
	/** Edges for the MediaItemToCommentConnection connection */
	edges?: Maybe<Array<Maybe<MediaItemToCommentConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Comment>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type MediaItemToCommentConnectionEdge = {
	__typename?: 'MediaItemToCommentConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Comment>;
};

/** Connection between the ContentNode type and the EnqueuedScript type */
export type ContentNodeToEnqueuedScriptConnection = {
	__typename?: 'ContentNodeToEnqueuedScriptConnection';
	/** Edges for the ContentNodeToEnqueuedScriptConnection connection */
	edges?: Maybe<Array<Maybe<ContentNodeToEnqueuedScriptConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<EnqueuedScript>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ContentNodeToEnqueuedScriptConnectionEdge = {
	__typename?: 'ContentNodeToEnqueuedScriptConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<EnqueuedScript>;
};

/** Script enqueued by the CMS */
export type EnqueuedScript = Node &
	EnqueuedAsset & {
		__typename?: 'EnqueuedScript';
		/** @todo */
		args?: Maybe<Scalars['Boolean']>;
		/** Dependencies needed to use this asset */
		dependencies?: Maybe<Array<Maybe<EnqueuedScript>>>;
		/** Extra information needed for the script */
		extra?: Maybe<Scalars['String']>;
		/** The handle of the enqueued asset */
		handle?: Maybe<Scalars['String']>;
		/** The globally unique ID for the object */
		id: Scalars['ID'];
		/** The source of the asset */
		src?: Maybe<Scalars['String']>;
		/** The version of the enqueued asset */
		version?: Maybe<Scalars['String']>;
	};

/** Asset enqueued by the CMS */
export type EnqueuedAsset = {
	/** @todo */
	args?: Maybe<Scalars['Boolean']>;
	/** Dependencies needed to use this asset */
	dependencies?: Maybe<Array<Maybe<EnqueuedScript>>>;
	/** Extra information needed for the script */
	extra?: Maybe<Scalars['String']>;
	/** The handle of the enqueued asset */
	handle?: Maybe<Scalars['String']>;
	/** The ID of the enqueued asset */
	id: Scalars['ID'];
	/** The source of the asset */
	src?: Maybe<Scalars['String']>;
	/** The version of the enqueued asset */
	version?: Maybe<Scalars['String']>;
};

/** Connection between the ContentNode type and the EnqueuedStylesheet type */
export type ContentNodeToEnqueuedStylesheetConnection = {
	__typename?: 'ContentNodeToEnqueuedStylesheetConnection';
	/** Edges for the ContentNodeToEnqueuedStylesheetConnection connection */
	edges?: Maybe<Array<Maybe<ContentNodeToEnqueuedStylesheetConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<EnqueuedStylesheet>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ContentNodeToEnqueuedStylesheetConnectionEdge = {
	__typename?: 'ContentNodeToEnqueuedStylesheetConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<EnqueuedStylesheet>;
};

/** Stylesheet enqueued by the CMS */
export type EnqueuedStylesheet = Node &
	EnqueuedAsset & {
		__typename?: 'EnqueuedStylesheet';
		/** @todo */
		args?: Maybe<Scalars['Boolean']>;
		/** Dependencies needed to use this asset */
		dependencies?: Maybe<Array<Maybe<EnqueuedScript>>>;
		/** Extra information needed for the script */
		extra?: Maybe<Scalars['String']>;
		/** The handle of the enqueued asset */
		handle?: Maybe<Scalars['String']>;
		/** The globally unique ID for the object */
		id: Scalars['ID'];
		/** The source of the asset */
		src?: Maybe<Scalars['String']>;
		/** The version of the enqueued asset */
		version?: Maybe<Scalars['String']>;
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
	node?: Maybe<User>;
};

/** File details for a Media Item */
export type MediaDetails = {
	__typename?: 'MediaDetails';
	/** The height of the mediaItem */
	file?: Maybe<Scalars['String']>;
	/** The height of the mediaItem */
	height?: Maybe<Scalars['Int']>;
	meta?: Maybe<MediaItemMeta>;
	/** The available sizes of the mediaItem */
	sizes?: Maybe<Array<Maybe<MediaSize>>>;
	/** The width of the mediaItem */
	width?: Maybe<Scalars['Int']>;
};

/** Meta connected to a MediaItem */
export type MediaItemMeta = {
	__typename?: 'MediaItemMeta';
	aperture?: Maybe<Scalars['Float']>;
	camera?: Maybe<Scalars['String']>;
	caption?: Maybe<Scalars['String']>;
	copyright?: Maybe<Scalars['String']>;
	createdTimestamp?: Maybe<Scalars['Int']>;
	credit?: Maybe<Scalars['String']>;
	focalLength?: Maybe<Scalars['Float']>;
	iso?: Maybe<Scalars['Int']>;
	keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
	orientation?: Maybe<Scalars['String']>;
	shutterSpeed?: Maybe<Scalars['Float']>;
	title?: Maybe<Scalars['String']>;
};

/** Details of an available size for a media item */
export type MediaSize = {
	__typename?: 'MediaSize';
	/** The file of the for the referenced size */
	file?: Maybe<Scalars['String']>;
	/** The filesize of the resource */
	fileSize?: Maybe<Scalars['Int']>;
	/** The height of the for the referenced size */
	height?: Maybe<Scalars['String']>;
	/** The mime type of the resource */
	mimeType?: Maybe<Scalars['String']>;
	/** The referenced size name */
	name?: Maybe<Scalars['String']>;
	/** The url of the for the referenced size */
	sourceUrl?: Maybe<Scalars['String']>;
	/** The width of the for the referenced size */
	width?: Maybe<Scalars['String']>;
};

export type PostTypeSeo = {
	__typename?: 'PostTypeSEO';
	breadcrumbs?: Maybe<Array<Maybe<SeoPostTypeBreadcrumbs>>>;
	canonical?: Maybe<Scalars['String']>;
	cornerstone?: Maybe<Scalars['Boolean']>;
	focuskw?: Maybe<Scalars['String']>;
	metaDesc?: Maybe<Scalars['String']>;
	metaKeywords?: Maybe<Scalars['String']>;
	metaRobotsNofollow?: Maybe<Scalars['String']>;
	metaRobotsNoindex?: Maybe<Scalars['String']>;
	opengraphAuthor?: Maybe<Scalars['String']>;
	opengraphDescription?: Maybe<Scalars['String']>;
	opengraphImage?: Maybe<MediaItem>;
	opengraphModifiedTime?: Maybe<Scalars['String']>;
	opengraphPublishedTime?: Maybe<Scalars['String']>;
	opengraphPublisher?: Maybe<Scalars['String']>;
	opengraphSiteName?: Maybe<Scalars['String']>;
	opengraphTitle?: Maybe<Scalars['String']>;
	opengraphType?: Maybe<Scalars['String']>;
	opengraphUrl?: Maybe<Scalars['String']>;
	schema?: Maybe<SeoPostTypeSchema>;
	title?: Maybe<Scalars['String']>;
	twitterDescription?: Maybe<Scalars['String']>;
	twitterImage?: Maybe<MediaItem>;
	twitterTitle?: Maybe<Scalars['String']>;
};

export type SeoPostTypeBreadcrumbs = {
	__typename?: 'SEOPostTypeBreadcrumbs';
	text?: Maybe<Scalars['String']>;
	url?: Maybe<Scalars['String']>;
};

/** The Schema types */
export type SeoPostTypeSchema = {
	__typename?: 'SEOPostTypeSchema';
	articleType?: Maybe<Array<Maybe<Scalars['String']>>>;
	pageType?: Maybe<Array<Maybe<Scalars['String']>>>;
	raw?: Maybe<Scalars['String']>;
};

/** A node that can have an excerpt */
export type NodeWithExcerpt = {
	/** The excerpt of the post. */
	excerpt?: Maybe<Scalars['String']>;
};

/** A node that can have an excerpt */
export type NodeWithExcerptExcerptArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** A node that can have trackbacks and pingbacks */
export type NodeWithTrackbacks = {
	/** Whether the pings are open or closed for this particular post. */
	pingStatus?: Maybe<Scalars['String']>;
	/** URLs that have been pinged. */
	pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** URLs queued to be pinged. */
	toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** A node that can have revisions */
export type NodeWithRevisions = {
	/** True if the node is a revision of another node */
	isRevision?: Maybe<Scalars['Boolean']>;
	/** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
	revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
};

/** Connection between the NodeWithRevisions type and the ContentNode type */
export type NodeWithRevisionsToContentNodeConnectionEdge = {
	__typename?: 'NodeWithRevisionsToContentNodeConnectionEdge';
	/** The nodes of the connection, without the edges */
	node?: Maybe<ContentNode>;
};

/** A node that can have page attributes */
export type NodeWithPageAttributes = {
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: Maybe<Scalars['Int']>;
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
	cacheDomain?: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: Maybe<Scalars['Boolean']>;
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
	edges?: Maybe<Array<Maybe<ConsultantToCategoryConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Category>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ConsultantToCategoryConnectionEdge = {
	__typename?: 'ConsultantToCategoryConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The Yoast SEO Primary category */
	isPrimary?: Maybe<Scalars['Boolean']>;
	/** The item at the end of the edge */
	node?: Maybe<Category>;
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
		abouts?: Maybe<CategoryToAboutConnection>;
		/** The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
		ancestors?: Maybe<CategoryToAncestorsCategoryConnection>;
		/**
		 * The id field matches the WP_Post-&gt;ID field.
		 * @deprecated Deprecated in favor of databaseId
		 */
		categoryId?: Maybe<Scalars['Int']>;
		/** Connection between the category type and the category type */
		children?: Maybe<CategoryToCategoryConnection>;
		/** Connection between the category type and the consultant type */
		consultants?: Maybe<CategoryToConsultantConnection>;
		/** Connection between the category type and the contactForm type */
		contactForms?: Maybe<CategoryToContactFormConnection>;
		/** Connection between the category type and the ContentNode type */
		contentNodes?: Maybe<CategoryToContentNodeConnection>;
		/** The number of objects connected to the object */
		count?: Maybe<Scalars['Int']>;
		/** Identifies the primary key from the database. */
		databaseId: Scalars['Int'];
		/** The description of the object */
		description?: Maybe<Scalars['String']>;
		/** Connection between the TermNode type and the EnqueuedScript type */
		enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
		/** Connection between the TermNode type and the EnqueuedStylesheet type */
		enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
		/** The globally unique ID for the object */
		id: Scalars['ID'];
		/** Whether the object is restricted from the current viewer */
		isRestricted?: Maybe<Scalars['Boolean']>;
		/** The link to the term */
		link?: Maybe<Scalars['String']>;
		/** The human friendly name of the object. */
		name?: Maybe<Scalars['String']>;
		/** Connection between the category type and the category type */
		parent?: Maybe<CategoryToParentCategoryConnectionEdge>;
		/** Database id of the parent node */
		parentDatabaseId?: Maybe<Scalars['Int']>;
		/** The globally unique identifier of the parent node. */
		parentId?: Maybe<Scalars['ID']>;
		/** Connection between the category type and the position type */
		positions?: Maybe<CategoryToPositionConnection>;
		/** Connection between the category type and the post type */
		posts?: Maybe<CategoryToPostConnection>;
		/** The Yoast SEO data of the Categories taxonomy. */
		seo?: Maybe<TaxonomySeo>;
		/** An alphanumeric identifier for the object unique to its type. */
		slug?: Maybe<Scalars['String']>;
		/** Connection between the category type and the Taxonomy type */
		taxonomy?: Maybe<CategoryToTaxonomyConnectionEdge>;
		/** The ID of the term group that this term object belongs to */
		termGroupId?: Maybe<Scalars['Int']>;
		/** The taxonomy ID that the object is associated with */
		termTaxonomyId?: Maybe<Scalars['Int']>;
		/** Connection between the category type and the testimonial type */
		testimonials?: Maybe<CategoryToTestimonialConnection>;
		/** The unique resource identifier path */
		uri: Scalars['String'];
	};

/** The category type */
export type CategoryAboutsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<CategoryToAboutConnectionWhereArgs>;
};

/** The category type */
export type CategoryAncestorsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The category type */
export type CategoryChildrenArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<CategoryToCategoryConnectionWhereArgs>;
};

/** The category type */
export type CategoryConsultantsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<CategoryToConsultantConnectionWhereArgs>;
};

/** The category type */
export type CategoryContactFormsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<CategoryToContactFormConnectionWhereArgs>;
};

/** The category type */
export type CategoryContentNodesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<CategoryToContentNodeConnectionWhereArgs>;
};

/** The category type */
export type CategoryEnqueuedScriptsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The category type */
export type CategoryEnqueuedStylesheetsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The category type */
export type CategoryPositionsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<CategoryToPositionConnectionWhereArgs>;
};

/** The category type */
export type CategoryPostsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<CategoryToPostConnectionWhereArgs>;
};

/** The category type */
export type CategoryTestimonialsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<CategoryToTestimonialConnectionWhereArgs>;
};

/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNode = {
	/** The number of objects connected to the object */
	count?: Maybe<Scalars['Int']>;
	/** Identifies the primary key from the database. */
	databaseId: Scalars['Int'];
	/** The description of the object */
	description?: Maybe<Scalars['String']>;
	/** Connection between the TermNode type and the EnqueuedScript type */
	enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
	/** Connection between the TermNode type and the EnqueuedStylesheet type */
	enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
	/** Unique identifier for the term */
	id: Scalars['ID'];
	/** Whether the object is restricted from the current viewer */
	isRestricted?: Maybe<Scalars['Boolean']>;
	/** The link to the term */
	link?: Maybe<Scalars['String']>;
	/** The human friendly name of the object. */
	name?: Maybe<Scalars['String']>;
	/** An alphanumeric identifier for the object unique to its type. */
	slug?: Maybe<Scalars['String']>;
	/** The ID of the term group that this term object belongs to */
	termGroupId?: Maybe<Scalars['Int']>;
	/** The taxonomy ID that the object is associated with */
	termTaxonomyId?: Maybe<Scalars['Int']>;
	/** The unique resource identifier path */
	uri: Scalars['String'];
};

/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNodeEnqueuedScriptsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNodeEnqueuedStylesheetsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** Connection between the TermNode type and the EnqueuedScript type */
export type TermNodeToEnqueuedScriptConnection = {
	__typename?: 'TermNodeToEnqueuedScriptConnection';
	/** Edges for the TermNodeToEnqueuedScriptConnection connection */
	edges?: Maybe<Array<Maybe<TermNodeToEnqueuedScriptConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<EnqueuedScript>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TermNodeToEnqueuedScriptConnectionEdge = {
	__typename?: 'TermNodeToEnqueuedScriptConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<EnqueuedScript>;
};

/** Connection between the TermNode type and the EnqueuedStylesheet type */
export type TermNodeToEnqueuedStylesheetConnection = {
	__typename?: 'TermNodeToEnqueuedStylesheetConnection';
	/** Edges for the TermNodeToEnqueuedStylesheetConnection connection */
	edges?: Maybe<Array<Maybe<TermNodeToEnqueuedStylesheetConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<EnqueuedStylesheet>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TermNodeToEnqueuedStylesheetConnectionEdge = {
	__typename?: 'TermNodeToEnqueuedStylesheetConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<EnqueuedStylesheet>;
};

/** Term node with hierarchical (parent/child) relationships */
export type HierarchicalTermNode = {
	/** Database id of the parent node */
	parentDatabaseId?: Maybe<Scalars['Int']>;
	/** The globally unique identifier of the parent node. */
	parentId?: Maybe<Scalars['ID']>;
};

/** Arguments for filtering the CategoryToAboutConnection connection */
export type CategoryToAboutConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId?: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName?: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the category type and the about type */
export type CategoryToAboutConnection = {
	__typename?: 'CategoryToAboutConnection';
	/** Edges for the CategoryToAboutConnection connection */
	edges?: Maybe<Array<Maybe<CategoryToAboutConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<About>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CategoryToAboutConnectionEdge = {
	__typename?: 'CategoryToAboutConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<About>;
};

/** Connection between the category type and the category type */
export type CategoryToAncestorsCategoryConnection = {
	__typename?: 'CategoryToAncestorsCategoryConnection';
	/** Edges for the CategoryToAncestorsCategoryConnection connection */
	edges?: Maybe<Array<Maybe<CategoryToAncestorsCategoryConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Category>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CategoryToAncestorsCategoryConnectionEdge = {
	__typename?: 'CategoryToAncestorsCategoryConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Category>;
};

/** Arguments for filtering the CategoryToCategoryConnection connection */
export type CategoryToCategoryConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the category type and the category type */
export type CategoryToCategoryConnection = {
	__typename?: 'CategoryToCategoryConnection';
	/** Edges for the CategoryToCategoryConnection connection */
	edges?: Maybe<Array<Maybe<CategoryToCategoryConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Category>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CategoryToCategoryConnectionEdge = {
	__typename?: 'CategoryToCategoryConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Category>;
};

/** Arguments for filtering the CategoryToConsultantConnection connection */
export type CategoryToConsultantConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId?: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName?: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the category type and the consultant type */
export type CategoryToConsultantConnection = {
	__typename?: 'CategoryToConsultantConnection';
	/** Edges for the CategoryToConsultantConnection connection */
	edges?: Maybe<Array<Maybe<CategoryToConsultantConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Consultant>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CategoryToConsultantConnectionEdge = {
	__typename?: 'CategoryToConsultantConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Consultant>;
};

/** Arguments for filtering the CategoryToContactFormConnection connection */
export type CategoryToContactFormConnectionWhereArgs = {
	/** Category ID */
	categoryId?: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName?: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the category type and the contactForm type */
export type CategoryToContactFormConnection = {
	__typename?: 'CategoryToContactFormConnection';
	/** Edges for the CategoryToContactFormConnection connection */
	edges?: Maybe<Array<Maybe<CategoryToContactFormConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<ContactForm>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CategoryToContactFormConnectionEdge = {
	__typename?: 'CategoryToContactFormConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<ContactForm>;
};

/** The contactForm type */
export type ContactForm = Node &
	ContentNode &
	DatabaseIdentifier &
	NodeWithTemplate &
	UniformResourceIdentifiable &
	NodeWithTitle &
	NodeWithContentEditor &
	NodeWithFeaturedImage & {
		__typename?: 'ContactForm';
		/** Connection between the contactForm type and the category type */
		categories?: Maybe<ContactFormToCategoryConnection>;
		/**
		 * The id field matches the WP_Post-&gt;ID field.
		 * @deprecated Deprecated in favor of the databaseId field
		 */
		contactFormId: Scalars['Int'];
		/** The content of the post. */
		content?: Maybe<Scalars['String']>;
		/** Connection between the ContentNode type and the ContentType type */
		contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
		/** The ID of the node in the database. */
		databaseId: Scalars['Int'];
		/** Post publishing date. */
		date?: Maybe<Scalars['String']>;
		/** The publishing date set in GMT. */
		dateGmt?: Maybe<Scalars['String']>;
		/** The desired slug of the post */
		desiredSlug?: Maybe<Scalars['String']>;
		/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
		editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
		/** The RSS enclosure for the object */
		enclosure?: Maybe<Scalars['String']>;
		/** Connection between the ContentNode type and the EnqueuedScript type */
		enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
		/** Connection between the ContentNode type and the EnqueuedStylesheet type */
		enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
		/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
		featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
		/** The database identifier for the featured image node assigned to the content node */
		featuredImageDatabaseId?: Maybe<Scalars['Int']>;
		/** Globally unique ID of the featured image assigned to the node */
		featuredImageId?: Maybe<Scalars['ID']>;
		/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
		guid?: Maybe<Scalars['String']>;
		/** The globally unique identifier of the contact-form object. */
		id: Scalars['ID'];
		/** Whether the object is a node in the preview state */
		isPreview?: Maybe<Scalars['Boolean']>;
		/** Whether the object is restricted from the current viewer */
		isRestricted?: Maybe<Scalars['Boolean']>;
		/** The user that most recently edited the node */
		lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
		/** The permalink of the post */
		link?: Maybe<Scalars['String']>;
		/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
		modified?: Maybe<Scalars['String']>;
		/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
		modifiedGmt?: Maybe<Scalars['String']>;
		/** Connection between the contactForm type and the contactForm type */
		preview?: Maybe<ContactFormToPreviewConnectionEdge>;
		/** The database id of the preview node */
		previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
		/** Whether the object is a node in the preview state */
		previewRevisionId?: Maybe<Scalars['ID']>;
		/** The Yoast SEO data of the contactForm */
		seo?: Maybe<PostTypeSeo>;
		/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
		slug?: Maybe<Scalars['String']>;
		/** The current status of the object */
		status?: Maybe<Scalars['String']>;
		/** The template assigned to a node of content */
		template?: Maybe<ContentTemplate>;
		/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
		title?: Maybe<Scalars['String']>;
		/** URI path for the resource */
		uri: Scalars['String'];
	};

/** The contactForm type */
export type ContactFormCategoriesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<ContactFormToCategoryConnectionWhereArgs>;
};

/** The contactForm type */
export type ContactFormContentArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** The contactForm type */
export type ContactFormEnqueuedScriptsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The contactForm type */
export type ContactFormEnqueuedStylesheetsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The contactForm type */
export type ContactFormTitleArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** Arguments for filtering the ContactFormToCategoryConnection connection */
export type ContactFormToCategoryConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the contactForm type and the category type */
export type ContactFormToCategoryConnection = {
	__typename?: 'ContactFormToCategoryConnection';
	/** Edges for the ContactFormToCategoryConnection connection */
	edges?: Maybe<Array<Maybe<ContactFormToCategoryConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Category>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ContactFormToCategoryConnectionEdge = {
	__typename?: 'ContactFormToCategoryConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The Yoast SEO Primary category */
	isPrimary?: Maybe<Scalars['Boolean']>;
	/** The item at the end of the edge */
	node?: Maybe<Category>;
};

/** Connection between the contactForm type and the contactForm type */
export type ContactFormToPreviewConnectionEdge = {
	__typename?: 'ContactFormToPreviewConnectionEdge';
	/** The nodes of the connection, without the edges */
	node?: Maybe<ContactForm>;
};

/** Arguments for filtering the CategoryToContentNodeConnection connection */
export type CategoryToContentNodeConnectionWhereArgs = {
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the category type and the ContentNode type */
export type CategoryToContentNodeConnection = {
	__typename?: 'CategoryToContentNodeConnection';
	/** Edges for the CategoryToContentNodeConnection connection */
	edges?: Maybe<Array<Maybe<CategoryToContentNodeConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<ContentNode>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CategoryToContentNodeConnectionEdge = {
	__typename?: 'CategoryToContentNodeConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<ContentNode>;
};

/** Connection between the category type and the category type */
export type CategoryToParentCategoryConnectionEdge = {
	__typename?: 'CategoryToParentCategoryConnectionEdge';
	/** The nodes of the connection, without the edges */
	node?: Maybe<Category>;
};

/** Arguments for filtering the CategoryToPositionConnection connection */
export type CategoryToPositionConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId?: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName?: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the category type and the position type */
export type CategoryToPositionConnection = {
	__typename?: 'CategoryToPositionConnection';
	/** Edges for the CategoryToPositionConnection connection */
	edges?: Maybe<Array<Maybe<CategoryToPositionConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Position>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CategoryToPositionConnectionEdge = {
	__typename?: 'CategoryToPositionConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Position>;
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
		author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
		/** The database identifier of the author of the node */
		authorDatabaseId?: Maybe<Scalars['Int']>;
		/** The globally unique identifier of the author of the node */
		authorId?: Maybe<Scalars['ID']>;
		/** Connection between the position type and the category type */
		categories?: Maybe<PositionToCategoryConnection>;
		/** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
		commentCount?: Maybe<Scalars['Int']>;
		/** Whether the comments are open or closed for this particular post. */
		commentStatus?: Maybe<Scalars['String']>;
		/** Connection between the position type and the Comment type */
		comments?: Maybe<PositionToCommentConnection>;
		/** The content of the post. */
		content?: Maybe<Scalars['String']>;
		/** Connection between the ContentNode type and the ContentType type */
		contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
		/** The ID of the node in the database. */
		databaseId: Scalars['Int'];
		/** Post publishing date. */
		date?: Maybe<Scalars['String']>;
		/** The publishing date set in GMT. */
		dateGmt?: Maybe<Scalars['String']>;
		/** The desired slug of the post */
		desiredSlug?: Maybe<Scalars['String']>;
		/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
		editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
		/** The RSS enclosure for the object */
		enclosure?: Maybe<Scalars['String']>;
		/** Connection between the ContentNode type and the EnqueuedScript type */
		enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
		/** Connection between the ContentNode type and the EnqueuedStylesheet type */
		enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
		/** The excerpt of the post. */
		excerpt?: Maybe<Scalars['String']>;
		/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
		featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
		/** The database identifier for the featured image node assigned to the content node */
		featuredImageDatabaseId?: Maybe<Scalars['Int']>;
		/** Globally unique ID of the featured image assigned to the node */
		featuredImageId?: Maybe<Scalars['ID']>;
		/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
		guid?: Maybe<Scalars['String']>;
		/** The globally unique identifier of the position object. */
		id: Scalars['ID'];
		/** Whether the object is a node in the preview state */
		isPreview?: Maybe<Scalars['Boolean']>;
		/** Whether the object is restricted from the current viewer */
		isRestricted?: Maybe<Scalars['Boolean']>;
		/** True if the node is a revision of another node */
		isRevision?: Maybe<Scalars['Boolean']>;
		/** The user that most recently edited the node */
		lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
		/** The permalink of the post */
		link?: Maybe<Scalars['String']>;
		/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
		menuOrder?: Maybe<Scalars['Int']>;
		/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
		modified?: Maybe<Scalars['String']>;
		/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
		modifiedGmt?: Maybe<Scalars['String']>;
		/** Whether the pings are open or closed for this particular post. */
		pingStatus?: Maybe<Scalars['String']>;
		/** URLs that have been pinged. */
		pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
		/** AWS Polly URL */
		polly?: Maybe<Position_Polly>;
		positionDetails?: Maybe<Position_Positiondetails>;
		/**
		 * The id field matches the WP_Post-&gt;ID field.
		 * @deprecated Deprecated in favor of the databaseId field
		 */
		positionId: Scalars['Int'];
		/** Connection between the position type and the postFormat type */
		postFormats?: Maybe<PositionToPostFormatConnection>;
		/** Connection between the position type and the position type */
		preview?: Maybe<PositionToPreviewConnectionEdge>;
		/** The database id of the preview node */
		previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
		/** Whether the object is a node in the preview state */
		previewRevisionId?: Maybe<Scalars['ID']>;
		/** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
		revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
		/** Connection between the position type and the position type */
		revisions?: Maybe<PositionToRevisionConnection>;
		/** The Yoast SEO data of the position */
		seo?: Maybe<PostTypeSeo>;
		/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
		slug?: Maybe<Scalars['String']>;
		social?: Maybe<Position_Social>;
		/** The current status of the object */
		status?: Maybe<Scalars['String']>;
		/** The template assigned to a node of content */
		template?: Maybe<ContentTemplate>;
		/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
		title?: Maybe<Scalars['String']>;
		/** URLs queued to be pinged. */
		toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
		/** URI path for the resource */
		uri: Scalars['String'];
	};

/** The position type */
export type PositionCategoriesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<PositionToCategoryConnectionWhereArgs>;
};

/** The position type */
export type PositionCommentsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<PositionToCommentConnectionWhereArgs>;
};

/** The position type */
export type PositionContentArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** The position type */
export type PositionEnqueuedScriptsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The position type */
export type PositionEnqueuedStylesheetsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The position type */
export type PositionExcerptArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** The position type */
export type PositionPostFormatsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<PositionToPostFormatConnectionWhereArgs>;
};

/** The position type */
export type PositionRevisionsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<PositionToRevisionConnectionWhereArgs>;
};

/** The position type */
export type PositionTitleArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** Arguments for filtering the PositionToCategoryConnection connection */
export type PositionToCategoryConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the position type and the category type */
export type PositionToCategoryConnection = {
	__typename?: 'PositionToCategoryConnection';
	/** Edges for the PositionToCategoryConnection connection */
	edges?: Maybe<Array<Maybe<PositionToCategoryConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Category>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PositionToCategoryConnectionEdge = {
	__typename?: 'PositionToCategoryConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The Yoast SEO Primary category */
	isPrimary?: Maybe<Scalars['Boolean']>;
	/** The item at the end of the edge */
	node?: Maybe<Category>;
};

/** Arguments for filtering the PositionToCommentConnection connection */
export type PositionToCommentConnectionWhereArgs = {
	/** Comment author email address. */
	authorEmail?: Maybe<Scalars['String']>;
	/** Array of author IDs to include comments for. */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Comment author URL. */
	authorUrl?: Maybe<Scalars['String']>;
	/** Array of comment IDs to include. */
	commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Include comments of a given type. */
	commentType?: Maybe<Scalars['String']>;
	/** Include comments from a given array of comment types. */
	commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?: Maybe<Scalars['String']>;
	/** Content object author ID to limit results by. */
	contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId?: Maybe<Scalars['ID']>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Content object name to retrieve affiliated comments for. */
	contentName?: Maybe<Scalars['String']>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?: Maybe<Scalars['Int']>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Karma score to retrieve matching comments for. */
	karma?: Maybe<Scalars['Int']>;
	/** The cardinality of the order of the connection */
	order?: Maybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby?: Maybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent?: Maybe<Scalars['Int']>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Search term(s) to retrieve matching comments for. */
	search?: Maybe<Scalars['String']>;
	/** Comment status to limit results by. */
	status?: Maybe<Scalars['String']>;
	/** Include comments for a specific user ID. */
	userId?: Maybe<Scalars['ID']>;
};

/** Connection between the position type and the Comment type */
export type PositionToCommentConnection = {
	__typename?: 'PositionToCommentConnection';
	/** Edges for the PositionToCommentConnection connection */
	edges?: Maybe<Array<Maybe<PositionToCommentConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Comment>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PositionToCommentConnectionEdge = {
	__typename?: 'PositionToCommentConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Comment>;
};

/** Field Group */
export type Position_Polly = {
	__typename?: 'Position_Polly';
	/** AWS Polly URL */
	audio?: Maybe<Scalars['String']>;
	fieldGroupName?: Maybe<Scalars['String']>;
};

/** Field Group */
export type Position_Positiondetails = {
	__typename?: 'Position_Positiondetails';
	dateclosing?: Maybe<Scalars['String']>;
	fieldGroupName?: Maybe<Scalars['String']>;
	/** Title of open position */
	jobtitle?: Maybe<Scalars['String']>;
	/** Full-time, part-time. contract, temporary */
	positiontype?: Maybe<Scalars['String']>;
	/** remote, in-person, mixed */
	remotestatus?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the PositionToPostFormatConnection connection */
export type PositionToPostFormatConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the position type and the postFormat type */
export type PositionToPostFormatConnection = {
	__typename?: 'PositionToPostFormatConnection';
	/** Edges for the PositionToPostFormatConnection connection */
	edges?: Maybe<Array<Maybe<PositionToPostFormatConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<PostFormat>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PositionToPostFormatConnectionEdge = {
	__typename?: 'PositionToPostFormatConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<PostFormat>;
};

/** The postFormat type */
export type PostFormat = Node &
	TermNode &
	DatabaseIdentifier &
	UniformResourceIdentifiable & {
		__typename?: 'PostFormat';
		/** Connection between the postFormat type and the about type */
		abouts?: Maybe<PostFormatToAboutConnection>;
		/** Connection between the postFormat type and the consultant type */
		consultants?: Maybe<PostFormatToConsultantConnection>;
		/** Connection between the postFormat type and the ContentNode type */
		contentNodes?: Maybe<PostFormatToContentNodeConnection>;
		/** The number of objects connected to the object */
		count?: Maybe<Scalars['Int']>;
		/** Identifies the primary key from the database. */
		databaseId: Scalars['Int'];
		/** The description of the object */
		description?: Maybe<Scalars['String']>;
		/** Connection between the TermNode type and the EnqueuedScript type */
		enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
		/** Connection between the TermNode type and the EnqueuedStylesheet type */
		enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
		/** The globally unique ID for the object */
		id: Scalars['ID'];
		/** Whether the object is restricted from the current viewer */
		isRestricted?: Maybe<Scalars['Boolean']>;
		/** The link to the term */
		link?: Maybe<Scalars['String']>;
		/** The human friendly name of the object. */
		name?: Maybe<Scalars['String']>;
		/** Connection between the postFormat type and the position type */
		positions?: Maybe<PostFormatToPositionConnection>;
		/**
		 * The id field matches the WP_Post-&gt;ID field.
		 * @deprecated Deprecated in favor of databaseId
		 */
		postFormatId?: Maybe<Scalars['Int']>;
		/** Connection between the postFormat type and the post type */
		posts?: Maybe<PostFormatToPostConnection>;
		/** The Yoast SEO data of the Formats taxonomy. */
		seo?: Maybe<TaxonomySeo>;
		/** An alphanumeric identifier for the object unique to its type. */
		slug?: Maybe<Scalars['String']>;
		/** Connection between the postFormat type and the Taxonomy type */
		taxonomy?: Maybe<PostFormatToTaxonomyConnectionEdge>;
		/** The ID of the term group that this term object belongs to */
		termGroupId?: Maybe<Scalars['Int']>;
		/** The taxonomy ID that the object is associated with */
		termTaxonomyId?: Maybe<Scalars['Int']>;
		/** Connection between the postFormat type and the testimonial type */
		testimonials?: Maybe<PostFormatToTestimonialConnection>;
		/** The unique resource identifier path */
		uri: Scalars['String'];
	};

/** The postFormat type */
export type PostFormatAboutsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<PostFormatToAboutConnectionWhereArgs>;
};

/** The postFormat type */
export type PostFormatConsultantsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<PostFormatToConsultantConnectionWhereArgs>;
};

/** The postFormat type */
export type PostFormatContentNodesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<PostFormatToContentNodeConnectionWhereArgs>;
};

/** The postFormat type */
export type PostFormatEnqueuedScriptsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The postFormat type */
export type PostFormatEnqueuedStylesheetsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The postFormat type */
export type PostFormatPositionsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<PostFormatToPositionConnectionWhereArgs>;
};

/** The postFormat type */
export type PostFormatPostsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<PostFormatToPostConnectionWhereArgs>;
};

/** The postFormat type */
export type PostFormatTestimonialsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<PostFormatToTestimonialConnectionWhereArgs>;
};

/** Arguments for filtering the PostFormatToAboutConnection connection */
export type PostFormatToAboutConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId?: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName?: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the postFormat type and the about type */
export type PostFormatToAboutConnection = {
	__typename?: 'PostFormatToAboutConnection';
	/** Edges for the PostFormatToAboutConnection connection */
	edges?: Maybe<Array<Maybe<PostFormatToAboutConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<About>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostFormatToAboutConnectionEdge = {
	__typename?: 'PostFormatToAboutConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<About>;
};

/** Arguments for filtering the PostFormatToConsultantConnection connection */
export type PostFormatToConsultantConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId?: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName?: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the postFormat type and the consultant type */
export type PostFormatToConsultantConnection = {
	__typename?: 'PostFormatToConsultantConnection';
	/** Edges for the PostFormatToConsultantConnection connection */
	edges?: Maybe<Array<Maybe<PostFormatToConsultantConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Consultant>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostFormatToConsultantConnectionEdge = {
	__typename?: 'PostFormatToConsultantConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Consultant>;
};

/** Arguments for filtering the PostFormatToContentNodeConnection connection */
export type PostFormatToContentNodeConnectionWhereArgs = {
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the postFormat type and the ContentNode type */
export type PostFormatToContentNodeConnection = {
	__typename?: 'PostFormatToContentNodeConnection';
	/** Edges for the PostFormatToContentNodeConnection connection */
	edges?: Maybe<Array<Maybe<PostFormatToContentNodeConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<ContentNode>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostFormatToContentNodeConnectionEdge = {
	__typename?: 'PostFormatToContentNodeConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<ContentNode>;
};

/** Arguments for filtering the PostFormatToPositionConnection connection */
export type PostFormatToPositionConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId?: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName?: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the postFormat type and the position type */
export type PostFormatToPositionConnection = {
	__typename?: 'PostFormatToPositionConnection';
	/** Edges for the PostFormatToPositionConnection connection */
	edges?: Maybe<Array<Maybe<PostFormatToPositionConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Position>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostFormatToPositionConnectionEdge = {
	__typename?: 'PostFormatToPositionConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Position>;
};

/** Arguments for filtering the PostFormatToPostConnection connection */
export type PostFormatToPostConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId?: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName?: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Tag Slug */
	tag?: Maybe<Scalars['String']>;
	/** Use Tag ID */
	tagId?: Maybe<Scalars['String']>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag slugs, used to display objects from one tag OR another */
	tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of tag slugs, used to exclude objects in specified tags */
	tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the postFormat type and the post type */
export type PostFormatToPostConnection = {
	__typename?: 'PostFormatToPostConnection';
	/** Edges for the PostFormatToPostConnection connection */
	edges?: Maybe<Array<Maybe<PostFormatToPostConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Post>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostFormatToPostConnectionEdge = {
	__typename?: 'PostFormatToPostConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Post>;
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
		author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
		/** The database identifier of the author of the node */
		authorDatabaseId?: Maybe<Scalars['Int']>;
		/** The globally unique identifier of the author of the node */
		authorId?: Maybe<Scalars['ID']>;
		/** Connection between the post type and the category type */
		categories?: Maybe<PostToCategoryConnection>;
		/** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
		commentCount?: Maybe<Scalars['Int']>;
		/** Whether the comments are open or closed for this particular post. */
		commentStatus?: Maybe<Scalars['String']>;
		/** Connection between the post type and the Comment type */
		comments?: Maybe<PostToCommentConnection>;
		/** The content of the post. */
		content?: Maybe<Scalars['String']>;
		/** Connection between the ContentNode type and the ContentType type */
		contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
		/** The ID of the node in the database. */
		databaseId: Scalars['Int'];
		/** Post publishing date. */
		date?: Maybe<Scalars['String']>;
		/** The publishing date set in GMT. */
		dateGmt?: Maybe<Scalars['String']>;
		/** The desired slug of the post */
		desiredSlug?: Maybe<Scalars['String']>;
		/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
		editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
		/** The RSS enclosure for the object */
		enclosure?: Maybe<Scalars['String']>;
		/** Connection between the ContentNode type and the EnqueuedScript type */
		enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
		/** Connection between the ContentNode type and the EnqueuedStylesheet type */
		enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
		/** The excerpt of the post. */
		excerpt?: Maybe<Scalars['String']>;
		/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
		featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
		/** The database identifier for the featured image node assigned to the content node */
		featuredImageDatabaseId?: Maybe<Scalars['Int']>;
		/** Globally unique ID of the featured image assigned to the node */
		featuredImageId?: Maybe<Scalars['ID']>;
		/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
		guid?: Maybe<Scalars['String']>;
		/** The globally unique identifier of the post object. */
		id: Scalars['ID'];
		/** Whether the object is a node in the preview state */
		isPreview?: Maybe<Scalars['Boolean']>;
		/** Whether the object is restricted from the current viewer */
		isRestricted?: Maybe<Scalars['Boolean']>;
		/** True if the node is a revision of another node */
		isRevision?: Maybe<Scalars['Boolean']>;
		/** Whether this page is sticky */
		isSticky: Scalars['Boolean'];
		/** The user that most recently edited the node */
		lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
		/** The permalink of the post */
		link?: Maybe<Scalars['String']>;
		/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
		modified?: Maybe<Scalars['String']>;
		/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
		modifiedGmt?: Maybe<Scalars['String']>;
		/** Whether the pings are open or closed for this particular post. */
		pingStatus?: Maybe<Scalars['String']>;
		/** URLs that have been pinged. */
		pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
		/** Connection between the post type and the postFormat type */
		postFormats?: Maybe<PostToPostFormatConnection>;
		/**
		 * The id field matches the WP_Post-&gt;ID field.
		 * @deprecated Deprecated in favor of the databaseId field
		 */
		postId: Scalars['Int'];
		/** Connection between the post type and the post type */
		preview?: Maybe<PostToPreviewConnectionEdge>;
		/** The database id of the preview node */
		previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
		/** Whether the object is a node in the preview state */
		previewRevisionId?: Maybe<Scalars['ID']>;
		/** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
		revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
		/** Connection between the post type and the post type */
		revisions?: Maybe<PostToRevisionConnection>;
		/** The Yoast SEO data of the post */
		seo?: Maybe<PostTypeSeo>;
		/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
		slug?: Maybe<Scalars['String']>;
		social?: Maybe<Post_Social>;
		/** The current status of the object */
		status?: Maybe<Scalars['String']>;
		/** Connection between the post type and the tag type */
		tags?: Maybe<PostToTagConnection>;
		/** The template assigned to a node of content */
		template?: Maybe<ContentTemplate>;
		/** Connection between the post type and the TermNode type */
		terms?: Maybe<PostToTermNodeConnection>;
		/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
		title?: Maybe<Scalars['String']>;
		/** URLs queued to be pinged. */
		toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
		/** URI path for the resource */
		uri: Scalars['String'];
	};

/** The post type */
export type PostCategoriesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<PostToCategoryConnectionWhereArgs>;
};

/** The post type */
export type PostCommentsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<PostToCommentConnectionWhereArgs>;
};

/** The post type */
export type PostContentArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** The post type */
export type PostEnqueuedScriptsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The post type */
export type PostEnqueuedStylesheetsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The post type */
export type PostExcerptArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** The post type */
export type PostPostFormatsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<PostToPostFormatConnectionWhereArgs>;
};

/** The post type */
export type PostRevisionsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<PostToRevisionConnectionWhereArgs>;
};

/** The post type */
export type PostTagsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<PostToTagConnectionWhereArgs>;
};

/** The post type */
export type PostTermsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<PostToTermNodeConnectionWhereArgs>;
};

/** The post type */
export type PostTitleArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** Arguments for filtering the PostToCategoryConnection connection */
export type PostToCategoryConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the post type and the category type */
export type PostToCategoryConnection = {
	__typename?: 'PostToCategoryConnection';
	/** Edges for the PostToCategoryConnection connection */
	edges?: Maybe<Array<Maybe<PostToCategoryConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Category>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostToCategoryConnectionEdge = {
	__typename?: 'PostToCategoryConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The Yoast SEO Primary category */
	isPrimary?: Maybe<Scalars['Boolean']>;
	/** The item at the end of the edge */
	node?: Maybe<Category>;
};

/** Arguments for filtering the PostToCommentConnection connection */
export type PostToCommentConnectionWhereArgs = {
	/** Comment author email address. */
	authorEmail?: Maybe<Scalars['String']>;
	/** Array of author IDs to include comments for. */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Comment author URL. */
	authorUrl?: Maybe<Scalars['String']>;
	/** Array of comment IDs to include. */
	commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Include comments of a given type. */
	commentType?: Maybe<Scalars['String']>;
	/** Include comments from a given array of comment types. */
	commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?: Maybe<Scalars['String']>;
	/** Content object author ID to limit results by. */
	contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId?: Maybe<Scalars['ID']>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Content object name to retrieve affiliated comments for. */
	contentName?: Maybe<Scalars['String']>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?: Maybe<Scalars['Int']>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Karma score to retrieve matching comments for. */
	karma?: Maybe<Scalars['Int']>;
	/** The cardinality of the order of the connection */
	order?: Maybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby?: Maybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent?: Maybe<Scalars['Int']>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Search term(s) to retrieve matching comments for. */
	search?: Maybe<Scalars['String']>;
	/** Comment status to limit results by. */
	status?: Maybe<Scalars['String']>;
	/** Include comments for a specific user ID. */
	userId?: Maybe<Scalars['ID']>;
};

/** Connection between the post type and the Comment type */
export type PostToCommentConnection = {
	__typename?: 'PostToCommentConnection';
	/** Edges for the PostToCommentConnection connection */
	edges?: Maybe<Array<Maybe<PostToCommentConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Comment>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostToCommentConnectionEdge = {
	__typename?: 'PostToCommentConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Comment>;
};

/** Arguments for filtering the PostToPostFormatConnection connection */
export type PostToPostFormatConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the post type and the postFormat type */
export type PostToPostFormatConnection = {
	__typename?: 'PostToPostFormatConnection';
	/** Edges for the PostToPostFormatConnection connection */
	edges?: Maybe<Array<Maybe<PostToPostFormatConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<PostFormat>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostToPostFormatConnectionEdge = {
	__typename?: 'PostToPostFormatConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<PostFormat>;
};

/** Connection between the post type and the post type */
export type PostToPreviewConnectionEdge = {
	__typename?: 'PostToPreviewConnectionEdge';
	/** The nodes of the connection, without the edges */
	node?: Maybe<Post>;
};

/** Arguments for filtering the postToRevisionConnection connection */
export type PostToRevisionConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId?: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName?: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Tag Slug */
	tag?: Maybe<Scalars['String']>;
	/** Use Tag ID */
	tagId?: Maybe<Scalars['String']>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag slugs, used to display objects from one tag OR another */
	tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of tag slugs, used to exclude objects in specified tags */
	tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the post type and the post type */
export type PostToRevisionConnection = {
	__typename?: 'PostToRevisionConnection';
	/** Edges for the postToRevisionConnection connection */
	edges?: Maybe<Array<Maybe<PostToRevisionConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Post>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostToRevisionConnectionEdge = {
	__typename?: 'PostToRevisionConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Post>;
};

/** Field Group */
export type Post_Social = {
	__typename?: 'Post_Social';
	/** Email (optional) */
	email?: Maybe<Scalars['String']>;
	/** Facebook Url (optional) */
	facebook?: Maybe<Scalars['String']>;
	fieldGroupName?: Maybe<Scalars['String']>;
	/** Instagram Url (optional) */
	instagram?: Maybe<Scalars['String']>;
	/** LinkedIn Url (optional) */
	linkedin?: Maybe<Scalars['String']>;
	/** Twitter Url (optional) */
	twitter?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the PostToTagConnection connection */
export type PostToTagConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the post type and the tag type */
export type PostToTagConnection = {
	__typename?: 'PostToTagConnection';
	/** Edges for the PostToTagConnection connection */
	edges?: Maybe<Array<Maybe<PostToTagConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Tag>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostToTagConnectionEdge = {
	__typename?: 'PostToTagConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Tag>;
};

/** The tag type */
export type Tag = Node &
	TermNode &
	DatabaseIdentifier &
	UniformResourceIdentifiable &
	MenuItemLinkable & {
		__typename?: 'Tag';
		/** Connection between the tag type and the ContentNode type */
		contentNodes?: Maybe<TagToContentNodeConnection>;
		/** The number of objects connected to the object */
		count?: Maybe<Scalars['Int']>;
		/** Identifies the primary key from the database. */
		databaseId: Scalars['Int'];
		/** The description of the object */
		description?: Maybe<Scalars['String']>;
		/** Connection between the TermNode type and the EnqueuedScript type */
		enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
		/** Connection between the TermNode type and the EnqueuedStylesheet type */
		enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
		/** The globally unique ID for the object */
		id: Scalars['ID'];
		/** Whether the object is restricted from the current viewer */
		isRestricted?: Maybe<Scalars['Boolean']>;
		/** The link to the term */
		link?: Maybe<Scalars['String']>;
		/** The human friendly name of the object. */
		name?: Maybe<Scalars['String']>;
		/** Connection between the tag type and the post type */
		posts?: Maybe<TagToPostConnection>;
		/** The Yoast SEO data of the Tags taxonomy. */
		seo?: Maybe<TaxonomySeo>;
		/** An alphanumeric identifier for the object unique to its type. */
		slug?: Maybe<Scalars['String']>;
		/**
		 * The id field matches the WP_Post-&gt;ID field.
		 * @deprecated Deprecated in favor of databaseId
		 */
		tagId?: Maybe<Scalars['Int']>;
		/** Connection between the tag type and the Taxonomy type */
		taxonomy?: Maybe<TagToTaxonomyConnectionEdge>;
		/** The ID of the term group that this term object belongs to */
		termGroupId?: Maybe<Scalars['Int']>;
		/** The taxonomy ID that the object is associated with */
		termTaxonomyId?: Maybe<Scalars['Int']>;
		/** The unique resource identifier path */
		uri: Scalars['String'];
	};

/** The tag type */
export type TagContentNodesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<TagToContentNodeConnectionWhereArgs>;
};

/** The tag type */
export type TagEnqueuedScriptsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The tag type */
export type TagEnqueuedStylesheetsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The tag type */
export type TagPostsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<TagToPostConnectionWhereArgs>;
};

/** Arguments for filtering the TagToContentNodeConnection connection */
export type TagToContentNodeConnectionWhereArgs = {
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the tag type and the ContentNode type */
export type TagToContentNodeConnection = {
	__typename?: 'TagToContentNodeConnection';
	/** Edges for the TagToContentNodeConnection connection */
	edges?: Maybe<Array<Maybe<TagToContentNodeConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<ContentNode>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TagToContentNodeConnectionEdge = {
	__typename?: 'TagToContentNodeConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<ContentNode>;
};

/** Arguments for filtering the TagToPostConnection connection */
export type TagToPostConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId?: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName?: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Tag Slug */
	tag?: Maybe<Scalars['String']>;
	/** Use Tag ID */
	tagId?: Maybe<Scalars['String']>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag slugs, used to display objects from one tag OR another */
	tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of tag slugs, used to exclude objects in specified tags */
	tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the tag type and the post type */
export type TagToPostConnection = {
	__typename?: 'TagToPostConnection';
	/** Edges for the TagToPostConnection connection */
	edges?: Maybe<Array<Maybe<TagToPostConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Post>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TagToPostConnectionEdge = {
	__typename?: 'TagToPostConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Post>;
};

export type TaxonomySeo = {
	__typename?: 'TaxonomySEO';
	breadcrumbs?: Maybe<Array<Maybe<SeoPostTypeBreadcrumbs>>>;
	canonical?: Maybe<Scalars['String']>;
	cornerstone?: Maybe<Scalars['Boolean']>;
	focuskw?: Maybe<Scalars['String']>;
	metaDesc?: Maybe<Scalars['String']>;
	metaKeywords?: Maybe<Scalars['String']>;
	metaRobotsNofollow?: Maybe<Scalars['String']>;
	metaRobotsNoindex?: Maybe<Scalars['String']>;
	opengraphAuthor?: Maybe<Scalars['String']>;
	opengraphDescription?: Maybe<Scalars['String']>;
	opengraphImage?: Maybe<MediaItem>;
	opengraphModifiedTime?: Maybe<Scalars['String']>;
	opengraphPublishedTime?: Maybe<Scalars['String']>;
	opengraphPublisher?: Maybe<Scalars['String']>;
	opengraphSiteName?: Maybe<Scalars['String']>;
	opengraphTitle?: Maybe<Scalars['String']>;
	opengraphType?: Maybe<Scalars['String']>;
	opengraphUrl?: Maybe<Scalars['String']>;
	schema?: Maybe<SeoTaxonomySchema>;
	title?: Maybe<Scalars['String']>;
	twitterDescription?: Maybe<Scalars['String']>;
	twitterImage?: Maybe<MediaItem>;
	twitterTitle?: Maybe<Scalars['String']>;
};

/** The Schema types for Taxonomy */
export type SeoTaxonomySchema = {
	__typename?: 'SEOTaxonomySchema';
	raw?: Maybe<Scalars['String']>;
};

/** Connection between the tag type and the Taxonomy type */
export type TagToTaxonomyConnectionEdge = {
	__typename?: 'TagToTaxonomyConnectionEdge';
	/** The nodes of the connection, without the edges */
	node?: Maybe<Taxonomy>;
};

/** Arguments for filtering the PostToTermNodeConnection connection */
export type PostToTermNodeConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** The Taxonomy to filter terms by */
	taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: Maybe<Scalars['Boolean']>;
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
	edges?: Maybe<Array<Maybe<PostToTermNodeConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<TermNode>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostToTermNodeConnectionEdge = {
	__typename?: 'PostToTermNodeConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<TermNode>;
};

/** Connection between the postFormat type and the Taxonomy type */
export type PostFormatToTaxonomyConnectionEdge = {
	__typename?: 'PostFormatToTaxonomyConnectionEdge';
	/** The nodes of the connection, without the edges */
	node?: Maybe<Taxonomy>;
};

/** Arguments for filtering the PostFormatToTestimonialConnection connection */
export type PostFormatToTestimonialConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId?: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName?: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the postFormat type and the testimonial type */
export type PostFormatToTestimonialConnection = {
	__typename?: 'PostFormatToTestimonialConnection';
	/** Edges for the PostFormatToTestimonialConnection connection */
	edges?: Maybe<Array<Maybe<PostFormatToTestimonialConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Testimonial>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostFormatToTestimonialConnectionEdge = {
	__typename?: 'PostFormatToTestimonialConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Testimonial>;
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
		author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
		/** The database identifier of the author of the node */
		authorDatabaseId?: Maybe<Scalars['Int']>;
		/** The globally unique identifier of the author of the node */
		authorId?: Maybe<Scalars['ID']>;
		/** Connection between the testimonial type and the category type */
		categories?: Maybe<TestimonialToCategoryConnection>;
		/** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
		commentCount?: Maybe<Scalars['Int']>;
		/** Whether the comments are open or closed for this particular post. */
		commentStatus?: Maybe<Scalars['String']>;
		/** Connection between the testimonial type and the Comment type */
		comments?: Maybe<TestimonialToCommentConnection>;
		/** The content of the post. */
		content?: Maybe<Scalars['String']>;
		/** Connection between the ContentNode type and the ContentType type */
		contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
		/** The ID of the node in the database. */
		databaseId: Scalars['Int'];
		/** Post publishing date. */
		date?: Maybe<Scalars['String']>;
		/** The publishing date set in GMT. */
		dateGmt?: Maybe<Scalars['String']>;
		/** The desired slug of the post */
		desiredSlug?: Maybe<Scalars['String']>;
		/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
		editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
		/** The RSS enclosure for the object */
		enclosure?: Maybe<Scalars['String']>;
		/** Connection between the ContentNode type and the EnqueuedScript type */
		enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
		/** Connection between the ContentNode type and the EnqueuedStylesheet type */
		enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
		/** The excerpt of the post. */
		excerpt?: Maybe<Scalars['String']>;
		/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
		featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
		/** The database identifier for the featured image node assigned to the content node */
		featuredImageDatabaseId?: Maybe<Scalars['Int']>;
		/** Globally unique ID of the featured image assigned to the node */
		featuredImageId?: Maybe<Scalars['ID']>;
		/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
		guid?: Maybe<Scalars['String']>;
		/** The globally unique identifier of the testimonial object. */
		id: Scalars['ID'];
		/** Whether the object is a node in the preview state */
		isPreview?: Maybe<Scalars['Boolean']>;
		/** Whether the object is restricted from the current viewer */
		isRestricted?: Maybe<Scalars['Boolean']>;
		/** True if the node is a revision of another node */
		isRevision?: Maybe<Scalars['Boolean']>;
		/** The user that most recently edited the node */
		lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
		/** The permalink of the post */
		link?: Maybe<Scalars['String']>;
		/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
		menuOrder?: Maybe<Scalars['Int']>;
		/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
		modified?: Maybe<Scalars['String']>;
		/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
		modifiedGmt?: Maybe<Scalars['String']>;
		/** Whether the pings are open or closed for this particular post. */
		pingStatus?: Maybe<Scalars['String']>;
		/** URLs that have been pinged. */
		pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
		/** AWS Polly URL */
		polly?: Maybe<Testimonial_Polly>;
		/** Connection between the testimonial type and the postFormat type */
		postFormats?: Maybe<TestimonialToPostFormatConnection>;
		/** Connection between the testimonial type and the testimonial type */
		preview?: Maybe<TestimonialToPreviewConnectionEdge>;
		/** The database id of the preview node */
		previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
		/** Whether the object is a node in the preview state */
		previewRevisionId?: Maybe<Scalars['ID']>;
		/** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
		revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
		/** Connection between the testimonial type and the testimonial type */
		revisions?: Maybe<TestimonialToRevisionConnection>;
		/** The Yoast SEO data of the testimonial */
		seo?: Maybe<PostTypeSeo>;
		/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
		slug?: Maybe<Scalars['String']>;
		social?: Maybe<Testimonial_Social>;
		/** The current status of the object */
		status?: Maybe<Scalars['String']>;
		/** The template assigned to a node of content */
		template?: Maybe<ContentTemplate>;
		/**
		 * The id field matches the WP_Post-&gt;ID field.
		 * @deprecated Deprecated in favor of the databaseId field
		 */
		testimonialId: Scalars['Int'];
		/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
		title?: Maybe<Scalars['String']>;
		/** URLs queued to be pinged. */
		toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
		/** URI path for the resource */
		uri: Scalars['String'];
	};

/** The testimonial type */
export type TestimonialCategoriesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<TestimonialToCategoryConnectionWhereArgs>;
};

/** The testimonial type */
export type TestimonialCommentsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<TestimonialToCommentConnectionWhereArgs>;
};

/** The testimonial type */
export type TestimonialContentArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** The testimonial type */
export type TestimonialEnqueuedScriptsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The testimonial type */
export type TestimonialEnqueuedStylesheetsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The testimonial type */
export type TestimonialExcerptArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** The testimonial type */
export type TestimonialPostFormatsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<TestimonialToPostFormatConnectionWhereArgs>;
};

/** The testimonial type */
export type TestimonialRevisionsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<TestimonialToRevisionConnectionWhereArgs>;
};

/** The testimonial type */
export type TestimonialTitleArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** Arguments for filtering the TestimonialToCategoryConnection connection */
export type TestimonialToCategoryConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the testimonial type and the category type */
export type TestimonialToCategoryConnection = {
	__typename?: 'TestimonialToCategoryConnection';
	/** Edges for the TestimonialToCategoryConnection connection */
	edges?: Maybe<Array<Maybe<TestimonialToCategoryConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Category>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TestimonialToCategoryConnectionEdge = {
	__typename?: 'TestimonialToCategoryConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The Yoast SEO Primary category */
	isPrimary?: Maybe<Scalars['Boolean']>;
	/** The item at the end of the edge */
	node?: Maybe<Category>;
};

/** Arguments for filtering the TestimonialToCommentConnection connection */
export type TestimonialToCommentConnectionWhereArgs = {
	/** Comment author email address. */
	authorEmail?: Maybe<Scalars['String']>;
	/** Array of author IDs to include comments for. */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Comment author URL. */
	authorUrl?: Maybe<Scalars['String']>;
	/** Array of comment IDs to include. */
	commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Include comments of a given type. */
	commentType?: Maybe<Scalars['String']>;
	/** Include comments from a given array of comment types. */
	commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?: Maybe<Scalars['String']>;
	/** Content object author ID to limit results by. */
	contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId?: Maybe<Scalars['ID']>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Content object name to retrieve affiliated comments for. */
	contentName?: Maybe<Scalars['String']>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?: Maybe<Scalars['Int']>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Karma score to retrieve matching comments for. */
	karma?: Maybe<Scalars['Int']>;
	/** The cardinality of the order of the connection */
	order?: Maybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby?: Maybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent?: Maybe<Scalars['Int']>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Search term(s) to retrieve matching comments for. */
	search?: Maybe<Scalars['String']>;
	/** Comment status to limit results by. */
	status?: Maybe<Scalars['String']>;
	/** Include comments for a specific user ID. */
	userId?: Maybe<Scalars['ID']>;
};

/** Connection between the testimonial type and the Comment type */
export type TestimonialToCommentConnection = {
	__typename?: 'TestimonialToCommentConnection';
	/** Edges for the TestimonialToCommentConnection connection */
	edges?: Maybe<Array<Maybe<TestimonialToCommentConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Comment>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TestimonialToCommentConnectionEdge = {
	__typename?: 'TestimonialToCommentConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Comment>;
};

/** Field Group */
export type Testimonial_Polly = {
	__typename?: 'Testimonial_Polly';
	/** AWS Polly URL */
	audio?: Maybe<Scalars['String']>;
	fieldGroupName?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the TestimonialToPostFormatConnection connection */
export type TestimonialToPostFormatConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the testimonial type and the postFormat type */
export type TestimonialToPostFormatConnection = {
	__typename?: 'TestimonialToPostFormatConnection';
	/** Edges for the TestimonialToPostFormatConnection connection */
	edges?: Maybe<Array<Maybe<TestimonialToPostFormatConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<PostFormat>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TestimonialToPostFormatConnectionEdge = {
	__typename?: 'TestimonialToPostFormatConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<PostFormat>;
};

/** Connection between the testimonial type and the testimonial type */
export type TestimonialToPreviewConnectionEdge = {
	__typename?: 'TestimonialToPreviewConnectionEdge';
	/** The nodes of the connection, without the edges */
	node?: Maybe<Testimonial>;
};

/** Arguments for filtering the testimonialToRevisionConnection connection */
export type TestimonialToRevisionConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId?: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName?: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the testimonial type and the testimonial type */
export type TestimonialToRevisionConnection = {
	__typename?: 'TestimonialToRevisionConnection';
	/** Edges for the testimonialToRevisionConnection connection */
	edges?: Maybe<Array<Maybe<TestimonialToRevisionConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Testimonial>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TestimonialToRevisionConnectionEdge = {
	__typename?: 'TestimonialToRevisionConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Testimonial>;
};

/** Field Group */
export type Testimonial_Social = {
	__typename?: 'Testimonial_Social';
	/** Email (optional) */
	email?: Maybe<Scalars['String']>;
	/** Facebook Url (optional) */
	facebook?: Maybe<Scalars['String']>;
	fieldGroupName?: Maybe<Scalars['String']>;
	/** Instagram Url (optional) */
	instagram?: Maybe<Scalars['String']>;
	/** LinkedIn Url (optional) */
	linkedin?: Maybe<Scalars['String']>;
	/** Twitter Url (optional) */
	twitter?: Maybe<Scalars['String']>;
};

/** Connection between the position type and the position type */
export type PositionToPreviewConnectionEdge = {
	__typename?: 'PositionToPreviewConnectionEdge';
	/** The nodes of the connection, without the edges */
	node?: Maybe<Position>;
};

/** Arguments for filtering the positionToRevisionConnection connection */
export type PositionToRevisionConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId?: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName?: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the position type and the position type */
export type PositionToRevisionConnection = {
	__typename?: 'PositionToRevisionConnection';
	/** Edges for the positionToRevisionConnection connection */
	edges?: Maybe<Array<Maybe<PositionToRevisionConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Position>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PositionToRevisionConnectionEdge = {
	__typename?: 'PositionToRevisionConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Position>;
};

/** Field Group */
export type Position_Social = {
	__typename?: 'Position_Social';
	/** Email (optional) */
	email?: Maybe<Scalars['String']>;
	/** Facebook Url (optional) */
	facebook?: Maybe<Scalars['String']>;
	fieldGroupName?: Maybe<Scalars['String']>;
	/** Instagram Url (optional) */
	instagram?: Maybe<Scalars['String']>;
	/** LinkedIn Url (optional) */
	linkedin?: Maybe<Scalars['String']>;
	/** Twitter Url (optional) */
	twitter?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the CategoryToPostConnection connection */
export type CategoryToPostConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId?: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName?: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Tag Slug */
	tag?: Maybe<Scalars['String']>;
	/** Use Tag ID */
	tagId?: Maybe<Scalars['String']>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag slugs, used to display objects from one tag OR another */
	tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of tag slugs, used to exclude objects in specified tags */
	tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the category type and the post type */
export type CategoryToPostConnection = {
	__typename?: 'CategoryToPostConnection';
	/** Edges for the CategoryToPostConnection connection */
	edges?: Maybe<Array<Maybe<CategoryToPostConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Post>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CategoryToPostConnectionEdge = {
	__typename?: 'CategoryToPostConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Post>;
};

/** Connection between the category type and the Taxonomy type */
export type CategoryToTaxonomyConnectionEdge = {
	__typename?: 'CategoryToTaxonomyConnectionEdge';
	/** The nodes of the connection, without the edges */
	node?: Maybe<Taxonomy>;
};

/** Arguments for filtering the CategoryToTestimonialConnection connection */
export type CategoryToTestimonialConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId?: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName?: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the category type and the testimonial type */
export type CategoryToTestimonialConnection = {
	__typename?: 'CategoryToTestimonialConnection';
	/** Edges for the CategoryToTestimonialConnection connection */
	edges?: Maybe<Array<Maybe<CategoryToTestimonialConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Testimonial>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CategoryToTestimonialConnectionEdge = {
	__typename?: 'CategoryToTestimonialConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Testimonial>;
};

/** Arguments for filtering the ConsultantToCommentConnection connection */
export type ConsultantToCommentConnectionWhereArgs = {
	/** Comment author email address. */
	authorEmail?: Maybe<Scalars['String']>;
	/** Array of author IDs to include comments for. */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Comment author URL. */
	authorUrl?: Maybe<Scalars['String']>;
	/** Array of comment IDs to include. */
	commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Include comments of a given type. */
	commentType?: Maybe<Scalars['String']>;
	/** Include comments from a given array of comment types. */
	commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?: Maybe<Scalars['String']>;
	/** Content object author ID to limit results by. */
	contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId?: Maybe<Scalars['ID']>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Content object name to retrieve affiliated comments for. */
	contentName?: Maybe<Scalars['String']>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?: Maybe<Scalars['Int']>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Karma score to retrieve matching comments for. */
	karma?: Maybe<Scalars['Int']>;
	/** The cardinality of the order of the connection */
	order?: Maybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby?: Maybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent?: Maybe<Scalars['Int']>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Search term(s) to retrieve matching comments for. */
	search?: Maybe<Scalars['String']>;
	/** Comment status to limit results by. */
	status?: Maybe<Scalars['String']>;
	/** Include comments for a specific user ID. */
	userId?: Maybe<Scalars['ID']>;
};

/** Connection between the consultant type and the Comment type */
export type ConsultantToCommentConnection = {
	__typename?: 'ConsultantToCommentConnection';
	/** Edges for the ConsultantToCommentConnection connection */
	edges?: Maybe<Array<Maybe<ConsultantToCommentConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Comment>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ConsultantToCommentConnectionEdge = {
	__typename?: 'ConsultantToCommentConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Comment>;
};

/** Field Group */
export type Consultant_Polly = {
	__typename?: 'Consultant_Polly';
	/** AWS Polly URL */
	audio?: Maybe<Scalars['String']>;
	fieldGroupName?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the ConsultantToPostFormatConnection connection */
export type ConsultantToPostFormatConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the consultant type and the postFormat type */
export type ConsultantToPostFormatConnection = {
	__typename?: 'ConsultantToPostFormatConnection';
	/** Edges for the ConsultantToPostFormatConnection connection */
	edges?: Maybe<Array<Maybe<ConsultantToPostFormatConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<PostFormat>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ConsultantToPostFormatConnectionEdge = {
	__typename?: 'ConsultantToPostFormatConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<PostFormat>;
};

/** Connection between the consultant type and the consultant type */
export type ConsultantToPreviewConnectionEdge = {
	__typename?: 'ConsultantToPreviewConnectionEdge';
	/** The nodes of the connection, without the edges */
	node?: Maybe<Consultant>;
};

/** Arguments for filtering the consultantToRevisionConnection connection */
export type ConsultantToRevisionConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId?: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName?: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the consultant type and the consultant type */
export type ConsultantToRevisionConnection = {
	__typename?: 'ConsultantToRevisionConnection';
	/** Edges for the consultantToRevisionConnection connection */
	edges?: Maybe<Array<Maybe<ConsultantToRevisionConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Consultant>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ConsultantToRevisionConnectionEdge = {
	__typename?: 'ConsultantToRevisionConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Consultant>;
};

/** Field Group */
export type Consultant_Social = {
	__typename?: 'Consultant_Social';
	/** Email (optional) */
	email?: Maybe<Scalars['String']>;
	/** Facebook Url (optional) */
	facebook?: Maybe<Scalars['String']>;
	fieldGroupName?: Maybe<Scalars['String']>;
	/** Instagram Url (optional) */
	instagram?: Maybe<Scalars['String']>;
	/** LinkedIn Url (optional) */
	linkedin?: Maybe<Scalars['String']>;
	/** Twitter Url (optional) */
	twitter?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the EnqueuedScript type */
export type UserToEnqueuedScriptConnection = {
	__typename?: 'UserToEnqueuedScriptConnection';
	/** Edges for the UserToEnqueuedScriptConnection connection */
	edges?: Maybe<Array<Maybe<UserToEnqueuedScriptConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<EnqueuedScript>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToEnqueuedScriptConnectionEdge = {
	__typename?: 'UserToEnqueuedScriptConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<EnqueuedScript>;
};

/** Connection between the User type and the EnqueuedStylesheet type */
export type UserToEnqueuedStylesheetConnection = {
	__typename?: 'UserToEnqueuedStylesheetConnection';
	/** Edges for the UserToEnqueuedStylesheetConnection connection */
	edges?: Maybe<Array<Maybe<UserToEnqueuedStylesheetConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<EnqueuedStylesheet>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToEnqueuedStylesheetConnectionEdge = {
	__typename?: 'UserToEnqueuedStylesheetConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<EnqueuedStylesheet>;
};

/** Arguments for filtering the UserToMediaItemConnection connection */
export type UserToMediaItemConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the mediaItem type */
export type UserToMediaItemConnection = {
	__typename?: 'UserToMediaItemConnection';
	/** Edges for the UserToMediaItemConnection connection */
	edges?: Maybe<Array<Maybe<UserToMediaItemConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<MediaItem>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToMediaItemConnectionEdge = {
	__typename?: 'UserToMediaItemConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<MediaItem>;
};

/** Arguments for filtering the UserToPageConnection connection */
export type UserToPageConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the page type */
export type UserToPageConnection = {
	__typename?: 'UserToPageConnection';
	/** Edges for the UserToPageConnection connection */
	edges?: Maybe<Array<Maybe<UserToPageConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Page>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToPageConnectionEdge = {
	__typename?: 'UserToPageConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Page>;
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
		ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
		/** Connection between the NodeWithAuthor type and the User type */
		author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
		/** The database identifier of the author of the node */
		authorDatabaseId?: Maybe<Scalars['Int']>;
		/** The globally unique identifier of the author of the node */
		authorId?: Maybe<Scalars['ID']>;
		/** Connection between the HierarchicalContentNode type and the ContentNode type */
		children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
		/** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
		commentCount?: Maybe<Scalars['Int']>;
		/** Whether the comments are open or closed for this particular post. */
		commentStatus?: Maybe<Scalars['String']>;
		/** Connection between the page type and the Comment type */
		comments?: Maybe<PageToCommentConnection>;
		/** The content of the post. */
		content?: Maybe<Scalars['String']>;
		/** Connection between the ContentNode type and the ContentType type */
		contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
		/** The ID of the node in the database. */
		databaseId: Scalars['Int'];
		/** Post publishing date. */
		date?: Maybe<Scalars['String']>;
		/** The publishing date set in GMT. */
		dateGmt?: Maybe<Scalars['String']>;
		/** The desired slug of the post */
		desiredSlug?: Maybe<Scalars['String']>;
		/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
		editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
		/** The RSS enclosure for the object */
		enclosure?: Maybe<Scalars['String']>;
		/** Connection between the ContentNode type and the EnqueuedScript type */
		enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
		/** Connection between the ContentNode type and the EnqueuedStylesheet type */
		enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
		/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
		featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
		/** The database identifier for the featured image node assigned to the content node */
		featuredImageDatabaseId?: Maybe<Scalars['Int']>;
		/** Globally unique ID of the featured image assigned to the node */
		featuredImageId?: Maybe<Scalars['ID']>;
		/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
		guid?: Maybe<Scalars['String']>;
		/** The globally unique identifier of the page object. */
		id: Scalars['ID'];
		/** Whether this page is set to the static front page. */
		isFrontPage: Scalars['Boolean'];
		/** Whether this page is set to the blog posts page. */
		isPostsPage: Scalars['Boolean'];
		/** Whether the object is a node in the preview state */
		isPreview?: Maybe<Scalars['Boolean']>;
		/** Whether the object is restricted from the current viewer */
		isRestricted?: Maybe<Scalars['Boolean']>;
		/** True if the node is a revision of another node */
		isRevision?: Maybe<Scalars['Boolean']>;
		/** The user that most recently edited the node */
		lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
		/** The permalink of the post */
		link?: Maybe<Scalars['String']>;
		/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
		menuOrder?: Maybe<Scalars['Int']>;
		/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
		modified?: Maybe<Scalars['String']>;
		/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
		modifiedGmt?: Maybe<Scalars['String']>;
		/**
		 * The id field matches the WP_Post-&gt;ID field.
		 * @deprecated Deprecated in favor of the databaseId field
		 */
		pageId: Scalars['Int'];
		/** The parent of the node. The parent object can be of various types */
		parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
		/** Database id of the parent node */
		parentDatabaseId?: Maybe<Scalars['Int']>;
		/** The globally unique identifier of the parent node. */
		parentId?: Maybe<Scalars['ID']>;
		/** Connection between the page type and the page type */
		preview?: Maybe<PageToPreviewConnectionEdge>;
		/** The database id of the preview node */
		previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
		/** Whether the object is a node in the preview state */
		previewRevisionId?: Maybe<Scalars['ID']>;
		/** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
		revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
		/** Connection between the page type and the page type */
		revisions?: Maybe<PageToRevisionConnection>;
		/** The Yoast SEO data of the page */
		seo?: Maybe<PostTypeSeo>;
		/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
		slug?: Maybe<Scalars['String']>;
		/** The current status of the object */
		status?: Maybe<Scalars['String']>;
		/** The template assigned to a node of content */
		template?: Maybe<ContentTemplate>;
		/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
		title?: Maybe<Scalars['String']>;
		/** URI path for the resource */
		uri: Scalars['String'];
	};

/** The page type */
export type PageAncestorsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};

/** The page type */
export type PageChildrenArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};

/** The page type */
export type PageCommentsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<PageToCommentConnectionWhereArgs>;
};

/** The page type */
export type PageContentArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** The page type */
export type PageEnqueuedScriptsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The page type */
export type PageEnqueuedStylesheetsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The page type */
export type PageRevisionsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<PageToRevisionConnectionWhereArgs>;
};

/** The page type */
export type PageTitleArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** Arguments for filtering the PageToCommentConnection connection */
export type PageToCommentConnectionWhereArgs = {
	/** Comment author email address. */
	authorEmail?: Maybe<Scalars['String']>;
	/** Array of author IDs to include comments for. */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Comment author URL. */
	authorUrl?: Maybe<Scalars['String']>;
	/** Array of comment IDs to include. */
	commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Include comments of a given type. */
	commentType?: Maybe<Scalars['String']>;
	/** Include comments from a given array of comment types. */
	commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?: Maybe<Scalars['String']>;
	/** Content object author ID to limit results by. */
	contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId?: Maybe<Scalars['ID']>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Content object name to retrieve affiliated comments for. */
	contentName?: Maybe<Scalars['String']>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?: Maybe<Scalars['Int']>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Karma score to retrieve matching comments for. */
	karma?: Maybe<Scalars['Int']>;
	/** The cardinality of the order of the connection */
	order?: Maybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby?: Maybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent?: Maybe<Scalars['Int']>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Search term(s) to retrieve matching comments for. */
	search?: Maybe<Scalars['String']>;
	/** Comment status to limit results by. */
	status?: Maybe<Scalars['String']>;
	/** Include comments for a specific user ID. */
	userId?: Maybe<Scalars['ID']>;
};

/** Connection between the page type and the Comment type */
export type PageToCommentConnection = {
	__typename?: 'PageToCommentConnection';
	/** Edges for the PageToCommentConnection connection */
	edges?: Maybe<Array<Maybe<PageToCommentConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Comment>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PageToCommentConnectionEdge = {
	__typename?: 'PageToCommentConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Comment>;
};

/** Connection between the page type and the page type */
export type PageToPreviewConnectionEdge = {
	__typename?: 'PageToPreviewConnectionEdge';
	/** The nodes of the connection, without the edges */
	node?: Maybe<Page>;
};

/** Arguments for filtering the pageToRevisionConnection connection */
export type PageToRevisionConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the page type and the page type */
export type PageToRevisionConnection = {
	__typename?: 'PageToRevisionConnection';
	/** Edges for the pageToRevisionConnection connection */
	edges?: Maybe<Array<Maybe<PageToRevisionConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Page>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PageToRevisionConnectionEdge = {
	__typename?: 'PageToRevisionConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Page>;
};

/** Arguments for filtering the UserToPositionConnection connection */
export type UserToPositionConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId?: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName?: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the position type */
export type UserToPositionConnection = {
	__typename?: 'UserToPositionConnection';
	/** Edges for the UserToPositionConnection connection */
	edges?: Maybe<Array<Maybe<UserToPositionConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Position>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToPositionConnectionEdge = {
	__typename?: 'UserToPositionConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Position>;
};

/** Arguments for filtering the UserToPostConnection connection */
export type UserToPostConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId?: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName?: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Tag Slug */
	tag?: Maybe<Scalars['String']>;
	/** Use Tag ID */
	tagId?: Maybe<Scalars['String']>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag slugs, used to display objects from one tag OR another */
	tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of tag slugs, used to exclude objects in specified tags */
	tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the post type */
export type UserToPostConnection = {
	__typename?: 'UserToPostConnection';
	/** Edges for the UserToPostConnection connection */
	edges?: Maybe<Array<Maybe<UserToPostConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Post>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToPostConnectionEdge = {
	__typename?: 'UserToPostConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Post>;
};

/** Arguments for filtering the UserToContentRevisionUnionConnection connection */
export type UserToContentRevisionUnionConnectionWhereArgs = {
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the ContentRevisionUnion type */
export type UserToContentRevisionUnionConnection = {
	__typename?: 'UserToContentRevisionUnionConnection';
	/** Edges for the UserToContentRevisionUnionConnection connection */
	edges?: Maybe<Array<Maybe<UserToContentRevisionUnionConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<ContentRevisionUnion>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToContentRevisionUnionConnectionEdge = {
	__typename?: 'UserToContentRevisionUnionConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<ContentRevisionUnion>;
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
	edges?: Maybe<Array<Maybe<UserToUserRoleConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<UserRole>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToUserRoleConnectionEdge = {
	__typename?: 'UserToUserRoleConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<UserRole>;
};

/** A user role object */
export type UserRole = Node & {
	__typename?: 'UserRole';
	/** The capabilities that belong to this role */
	capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** The display name of the role */
	displayName?: Maybe<Scalars['String']>;
	/** The globally unique identifier for the user role object. */
	id: Scalars['ID'];
	/** Whether the object is restricted from the current viewer */
	isRestricted?: Maybe<Scalars['Boolean']>;
	/** The registered name of the role */
	name?: Maybe<Scalars['String']>;
};

export type SeoUser = {
	__typename?: 'SEOUser';
	metaDesc?: Maybe<Scalars['String']>;
	metaRobotsNofollow?: Maybe<Scalars['String']>;
	metaRobotsNoindex?: Maybe<Scalars['String']>;
	schema?: Maybe<SeoUserSchema>;
	social?: Maybe<SeoUserSocial>;
	title?: Maybe<Scalars['String']>;
};

/** The Schema types for User */
export type SeoUserSchema = {
	__typename?: 'SEOUserSchema';
	raw?: Maybe<Scalars['String']>;
};

export type SeoUserSocial = {
	__typename?: 'SEOUserSocial';
	facebook?: Maybe<Scalars['String']>;
	instagram?: Maybe<Scalars['String']>;
	linkedIn?: Maybe<Scalars['String']>;
	mySpace?: Maybe<Scalars['String']>;
	pinterest?: Maybe<Scalars['String']>;
	soundCloud?: Maybe<Scalars['String']>;
	twitter?: Maybe<Scalars['String']>;
	wikipedia?: Maybe<Scalars['String']>;
	youTube?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the UserToTestimonialConnection connection */
export type UserToTestimonialConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId?: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName?: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the testimonial type */
export type UserToTestimonialConnection = {
	__typename?: 'UserToTestimonialConnection';
	/** Edges for the UserToTestimonialConnection connection */
	edges?: Maybe<Array<Maybe<UserToTestimonialConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Testimonial>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToTestimonialConnectionEdge = {
	__typename?: 'UserToTestimonialConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Testimonial>;
};

/** Arguments for filtering the AboutToCategoryConnection connection */
export type AboutToCategoryConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the about type and the category type */
export type AboutToCategoryConnection = {
	__typename?: 'AboutToCategoryConnection';
	/** Edges for the AboutToCategoryConnection connection */
	edges?: Maybe<Array<Maybe<AboutToCategoryConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Category>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type AboutToCategoryConnectionEdge = {
	__typename?: 'AboutToCategoryConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The Yoast SEO Primary category */
	isPrimary?: Maybe<Scalars['Boolean']>;
	/** The item at the end of the edge */
	node?: Maybe<Category>;
};

/** Arguments for filtering the AboutToCommentConnection connection */
export type AboutToCommentConnectionWhereArgs = {
	/** Comment author email address. */
	authorEmail?: Maybe<Scalars['String']>;
	/** Array of author IDs to include comments for. */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Comment author URL. */
	authorUrl?: Maybe<Scalars['String']>;
	/** Array of comment IDs to include. */
	commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Include comments of a given type. */
	commentType?: Maybe<Scalars['String']>;
	/** Include comments from a given array of comment types. */
	commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?: Maybe<Scalars['String']>;
	/** Content object author ID to limit results by. */
	contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId?: Maybe<Scalars['ID']>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Content object name to retrieve affiliated comments for. */
	contentName?: Maybe<Scalars['String']>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?: Maybe<Scalars['Int']>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Karma score to retrieve matching comments for. */
	karma?: Maybe<Scalars['Int']>;
	/** The cardinality of the order of the connection */
	order?: Maybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby?: Maybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent?: Maybe<Scalars['Int']>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Search term(s) to retrieve matching comments for. */
	search?: Maybe<Scalars['String']>;
	/** Comment status to limit results by. */
	status?: Maybe<Scalars['String']>;
	/** Include comments for a specific user ID. */
	userId?: Maybe<Scalars['ID']>;
};

/** Connection between the about type and the Comment type */
export type AboutToCommentConnection = {
	__typename?: 'AboutToCommentConnection';
	/** Edges for the AboutToCommentConnection connection */
	edges?: Maybe<Array<Maybe<AboutToCommentConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Comment>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type AboutToCommentConnectionEdge = {
	__typename?: 'AboutToCommentConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Comment>;
};

/** Field Group */
export type About_Polly = {
	__typename?: 'About_Polly';
	/** AWS Polly URL */
	audio?: Maybe<Scalars['String']>;
	fieldGroupName?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the AboutToPostFormatConnection connection */
export type AboutToPostFormatConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the about type and the postFormat type */
export type AboutToPostFormatConnection = {
	__typename?: 'AboutToPostFormatConnection';
	/** Edges for the AboutToPostFormatConnection connection */
	edges?: Maybe<Array<Maybe<AboutToPostFormatConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<PostFormat>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type AboutToPostFormatConnectionEdge = {
	__typename?: 'AboutToPostFormatConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<PostFormat>;
};

/** Connection between the about type and the about type */
export type AboutToPreviewConnectionEdge = {
	__typename?: 'AboutToPreviewConnectionEdge';
	/** The nodes of the connection, without the edges */
	node?: Maybe<About>;
};

/** Arguments for filtering the aboutToRevisionConnection connection */
export type AboutToRevisionConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId?: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName?: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the about type and the about type */
export type AboutToRevisionConnection = {
	__typename?: 'AboutToRevisionConnection';
	/** Edges for the aboutToRevisionConnection connection */
	edges?: Maybe<Array<Maybe<AboutToRevisionConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<About>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type AboutToRevisionConnectionEdge = {
	__typename?: 'AboutToRevisionConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<About>;
};

/** Field Group */
export type About_Social = {
	__typename?: 'About_Social';
	/** Email (optional) */
	email?: Maybe<Scalars['String']>;
	/** Facebook Url (optional) */
	facebook?: Maybe<Scalars['String']>;
	fieldGroupName?: Maybe<Scalars['String']>;
	/** Instagram Url (optional) */
	instagram?: Maybe<Scalars['String']>;
	/** LinkedIn Url (optional) */
	linkedin?: Maybe<Scalars['String']>;
	/** Twitter Url (optional) */
	twitter?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToAboutConnection connection */
export type RootQueryToAboutConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId?: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName?: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the about type */
export type RootQueryToAboutConnection = {
	__typename?: 'RootQueryToAboutConnection';
	/** Edges for the RootQueryToAboutConnection connection */
	edges?: Maybe<Array<Maybe<RootQueryToAboutConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<About>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToAboutConnectionEdge = {
	__typename?: 'RootQueryToAboutConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<About>;
};

/** All of the registered settings */
export type Settings = {
	__typename?: 'Settings';
	/** Allow people to submit comments on new posts. */
	discussionSettingsDefaultCommentStatus?: Maybe<Scalars['String']>;
	/** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
	discussionSettingsDefaultPingStatus?: Maybe<Scalars['String']>;
	/** A date format for all date strings. */
	generalSettingsDateFormat?: Maybe<Scalars['String']>;
	/** Site tagline. */
	generalSettingsDescription?: Maybe<Scalars['String']>;
	/** This address is used for admin purposes, like new user notification. */
	generalSettingsEmail?: Maybe<Scalars['String']>;
	/** WordPress locale code. */
	generalSettingsLanguage?: Maybe<Scalars['String']>;
	/** A day number of the week that the week should start on. */
	generalSettingsStartOfWeek?: Maybe<Scalars['Int']>;
	/** A time format for all time strings. */
	generalSettingsTimeFormat?: Maybe<Scalars['String']>;
	/** A city in the same timezone as you. */
	generalSettingsTimezone?: Maybe<Scalars['String']>;
	/** Site title. */
	generalSettingsTitle?: Maybe<Scalars['String']>;
	/** Site URL. */
	generalSettingsUrl?: Maybe<Scalars['String']>;
	/** Blog pages show at most. */
	readingSettingsPostsPerPage?: Maybe<Scalars['Int']>;
	/** Default post category. */
	writingSettingsDefaultCategory?: Maybe<Scalars['Int']>;
	/** Default post format. */
	writingSettingsDefaultPostFormat?: Maybe<Scalars['String']>;
	/** Convert emoticons like :-) and :-P to graphics on display. */
	writingSettingsUseSmilies?: Maybe<Scalars['Boolean']>;
};

/** Arguments for filtering the RootQueryToCategoryConnection connection */
export type RootQueryToCategoryConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the category type */
export type RootQueryToCategoryConnection = {
	__typename?: 'RootQueryToCategoryConnection';
	/** Edges for the RootQueryToCategoryConnection connection */
	edges?: Maybe<Array<Maybe<RootQueryToCategoryConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Category>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToCategoryConnectionEdge = {
	__typename?: 'RootQueryToCategoryConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Category>;
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
	authorEmail?: Maybe<Scalars['String']>;
	/** Array of author IDs to include comments for. */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Comment author URL. */
	authorUrl?: Maybe<Scalars['String']>;
	/** Array of comment IDs to include. */
	commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Include comments of a given type. */
	commentType?: Maybe<Scalars['String']>;
	/** Include comments from a given array of comment types. */
	commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?: Maybe<Scalars['String']>;
	/** Content object author ID to limit results by. */
	contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId?: Maybe<Scalars['ID']>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Content object name to retrieve affiliated comments for. */
	contentName?: Maybe<Scalars['String']>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?: Maybe<Scalars['Int']>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Karma score to retrieve matching comments for. */
	karma?: Maybe<Scalars['Int']>;
	/** The cardinality of the order of the connection */
	order?: Maybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby?: Maybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent?: Maybe<Scalars['Int']>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Search term(s) to retrieve matching comments for. */
	search?: Maybe<Scalars['String']>;
	/** Comment status to limit results by. */
	status?: Maybe<Scalars['String']>;
	/** Include comments for a specific user ID. */
	userId?: Maybe<Scalars['ID']>;
};

/** Connection between the RootQuery type and the Comment type */
export type RootQueryToCommentConnection = {
	__typename?: 'RootQueryToCommentConnection';
	/** Edges for the RootQueryToCommentConnection connection */
	edges?: Maybe<Array<Maybe<RootQueryToCommentConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Comment>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToCommentConnectionEdge = {
	__typename?: 'RootQueryToCommentConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Comment>;
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
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId?: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName?: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the consultant type */
export type RootQueryToConsultantConnection = {
	__typename?: 'RootQueryToConsultantConnection';
	/** Edges for the RootQueryToConsultantConnection connection */
	edges?: Maybe<Array<Maybe<RootQueryToConsultantConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Consultant>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToConsultantConnectionEdge = {
	__typename?: 'RootQueryToConsultantConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Consultant>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ContactFormIdType {
	/** Identify a resource by the Database ID. */
	DatabaseId = 'DATABASE_ID',
	/** Identify a resource by the (hashed) Global ID. */
	Id = 'ID',
	/** Identify a resource by the URI. */
	Uri = 'URI',
	/** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
	Slug = 'SLUG'
}

/** Arguments for filtering the RootQueryToContactFormConnection connection */
export type RootQueryToContactFormConnectionWhereArgs = {
	/** Category ID */
	categoryId?: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName?: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the contactForm type */
export type RootQueryToContactFormConnection = {
	__typename?: 'RootQueryToContactFormConnection';
	/** Edges for the RootQueryToContactFormConnection connection */
	edges?: Maybe<Array<Maybe<RootQueryToContactFormConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<ContactForm>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToContactFormConnectionEdge = {
	__typename?: 'RootQueryToContactFormConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<ContactForm>;
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
	contentTypes?: Maybe<Array<Maybe<ContentTypeEnum>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the ContentNode type */
export type RootQueryToContentNodeConnection = {
	__typename?: 'RootQueryToContentNodeConnection';
	/** Edges for the RootQueryToContentNodeConnection connection */
	edges?: Maybe<Array<Maybe<RootQueryToContentNodeConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<ContentNode>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToContentNodeConnectionEdge = {
	__typename?: 'RootQueryToContentNodeConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<ContentNode>;
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
	edges?: Maybe<Array<Maybe<RootQueryToContentTypeConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<ContentType>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToContentTypeConnectionEdge = {
	__typename?: 'RootQueryToContentTypeConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<ContentType>;
};

/** The discussion setting type */
export type DiscussionSettings = {
	__typename?: 'DiscussionSettings';
	/** Allow people to submit comments on new posts. */
	defaultCommentStatus?: Maybe<Scalars['String']>;
	/** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
	defaultPingStatus?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single Form. Default is ID. */
export enum FormIdTypeEnum {
	/** Identify a resource by the Database ID. */
	DatabaseId = 'DATABASE_ID',
	/** Identify a resource by the (hashed) Global ID. */
	Id = 'ID'
}

/** The form object */
export type Form = Node &
	DatabaseIdentifier & {
		__typename?: 'Form';
		/** Add Submit Button */
		addSubmit?: Maybe<Scalars['Boolean']>;
		/** Allow a public link? */
		allowPublicLink?: Maybe<Scalars['Boolean']>;
		/** Custom Class Names */
		classes?: Maybe<FormClasses>;
		/** Clear successfully completed form? */
		clearComplete?: Maybe<Scalars['Boolean']>;
		/** Currency */
		currency?: Maybe<Scalars['String']>;
		/** Custom Labels */
		customMessages?: Maybe<FormCustomMessages>;
		/** The Id of the form */
		databaseId: Scalars['Int'];
		/** Default Label Position */
		defaultLabelPos?: Maybe<Scalars['String']>;
		/** Embed Your Form */
		embedForm?: Maybe<Scalars['String']>;
		/** Connection between the Form type and the FormField type */
		fields?: Maybe<FormToFormFieldConnection>;
		/** The Id of the form */
		formId?: Maybe<Scalars['Int']>;
		/** Hide successfully completed form? */
		hideComplete?: Maybe<Scalars['Boolean']>;
		/** The globally unique identifier of the form */
		id: Scalars['ID'];
		/** Form Key */
		key?: Maybe<Scalars['String']>;
		/** Limit Submissions */
		limitSubmissionsSet?: Maybe<FormLimitSubmissionsSet>;
		/** Logged In */
		loggedInSet?: Maybe<FormLoggedInSet>;
		/** Link To Your Form */
		publicLink?: Maybe<Scalars['String']>;
		/** The Locale of the form */
		seqNum?: Maybe<Scalars['Int']>;
		/** Display Form Title */
		showTitle?: Maybe<Scalars['Boolean']>;
		/** Form Title */
		title?: Maybe<Scalars['String']>;
		/** Unique Field */
		uniqueFieldSet?: Maybe<FormUniqueFieldSet>;
	};

/** The form object */
export type FormFieldsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** Custom Class Names */
export type FormClasses = {
	__typename?: 'FormClasses';
	/** Element */
	elementClass?: Maybe<Scalars['String']>;
	/** Wrapper */
	wrapperClass?: Maybe<Scalars['String']>;
};

/** Custom Labels */
export type FormCustomMessages = {
	__typename?: 'FormCustomMessages';
	/** Please enter a valid date! */
	changeDateErrorMsg?: Maybe<Scalars['String']>;
	/** Please enter a valid email address! */
	changeEmailErrorMsg?: Maybe<Scalars['String']>;
	/** These fields must match! */
	confirmFieldErrorMsg?: Maybe<Scalars['String']>;
	/** Please increment by  */
	fieldNumberIncrementBy?: Maybe<Scalars['String']>;
	/** Number Max Error */
	fieldNumberNumMaxError?: Maybe<Scalars['String']>;
	/** Number Min Error */
	fieldNumberNumMinError?: Maybe<Scalars['String']>;
	/** Fields marked with an &lt;span class=&quot;ninja-forms-req-symbol&quot;&gt;*&lt;/span&gt; are required */
	fieldsMarkedRequired?: Maybe<Scalars['String']>;
	/** Please correct errors before submitting this form. */
	formErrorsCorrectErrors?: Maybe<Scalars['String']>;
	/** Honeypot Error */
	honeypotHoneypotError?: Maybe<Scalars['String']>;
	/** This is a required field. */
	validateRequiredField?: Maybe<Scalars['String']>;
};

/** Connection between the Form type and the FormField type */
export type FormToFormFieldConnection = {
	__typename?: 'FormToFormFieldConnection';
	/** Edges for the FormToFormFieldConnection connection */
	edges?: Maybe<Array<Maybe<FormToFormFieldConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<FormField>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type FormToFormFieldConnectionEdge = {
	__typename?: 'FormToFormFieldConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<FormField>;
};

/** Action object */
export type FormField = {
	/** Creation date */
	createdAt?: Maybe<Scalars['Int']>;
	/** The Id of the field */
	fieldId?: Maybe<Scalars['Int']>;
	/** Key of the field */
	fieldKey?: Maybe<Scalars['String']>;
	/** Label of the field */
	fieldLabel?: Maybe<Scalars['String']>;
	/** The globally unique identifier of the field */
	id: Scalars['ID'];
	/** Key of the field */
	key?: Maybe<Scalars['String']>;
	/** Label of the field */
	label?: Maybe<Scalars['String']>;
	/** Position order of the field */
	order?: Maybe<Scalars['Int']>;
	/** Parent form id */
	parentId?: Maybe<Scalars['Int']>;
	/** Indtifiable? */
	personallyIdentifiable?: Maybe<Scalars['Boolean']>;
	/** The field is required? */
	required?: Maybe<Scalars['Boolean']>;
	/** type of the field */
	type?: Maybe<Scalars['String']>;
	/** Update date */
	updatedAt?: Maybe<Scalars['Int']>;
};

/** Limit Submissions */
export type FormLimitSubmissionsSet = {
	__typename?: 'FormLimitSubmissionsSet';
	/** Limit Reached Message */
	subLimitMsg?: Maybe<Scalars['String']>;
	/** Submission Limit */
	subLimitNumber?: Maybe<Scalars['Int']>;
};

/** Logged In */
export type FormLoggedInSet = {
	__typename?: 'FormLoggedInSet';
	/** Require user to be logged in to view form? */
	loggedIn?: Maybe<Scalars['Boolean']>;
	/** Not Logged-In Message */
	notLoggedInMsg?: Maybe<Scalars['String']>;
};

/** Unique Field */
export type FormUniqueFieldSet = {
	__typename?: 'FormUniqueFieldSet';
	/** unique_field */
	uniqueField?: Maybe<Scalars['String']>;
	/** Unique Field Error Message */
	uniqueFieldError?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the Form type */
export type RootQueryToFormConnection = {
	__typename?: 'RootQueryToFormConnection';
	/** Edges for the RootQueryToFormConnection connection */
	edges?: Maybe<Array<Maybe<RootQueryToFormConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Form>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToFormConnectionEdge = {
	__typename?: 'RootQueryToFormConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Form>;
};

/** The general setting type */
export type GeneralSettings = {
	__typename?: 'GeneralSettings';
	/** A date format for all date strings. */
	dateFormat?: Maybe<Scalars['String']>;
	/** Site tagline. */
	description?: Maybe<Scalars['String']>;
	/** This address is used for admin purposes, like new user notification. */
	email?: Maybe<Scalars['String']>;
	/** WordPress locale code. */
	language?: Maybe<Scalars['String']>;
	/** A day number of the week that the week should start on. */
	startOfWeek?: Maybe<Scalars['Int']>;
	/** A time format for all time strings. */
	timeFormat?: Maybe<Scalars['String']>;
	/** A city in the same timezone as you. */
	timezone?: Maybe<Scalars['String']>;
	/** Site title. */
	title?: Maybe<Scalars['String']>;
	/** Site URL. */
	url?: Maybe<Scalars['String']>;
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
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the mediaItem type */
export type RootQueryToMediaItemConnection = {
	__typename?: 'RootQueryToMediaItemConnection';
	/** Edges for the RootQueryToMediaItemConnection connection */
	edges?: Maybe<Array<Maybe<RootQueryToMediaItemConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<MediaItem>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToMediaItemConnectionEdge = {
	__typename?: 'RootQueryToMediaItemConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<MediaItem>;
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
		FOOTER_DYNAMIC?: Maybe<Menu_FooterDynamic>;
		/** Added to the GraphQL Schema because the ACF Field Group &quot;HEADER_DYNAMIC&quot; was assigned to Menus */
		HEADER_DYNAMIC?: Maybe<Menu_HeaderDynamic>;
		/** The number of items in the menu */
		count?: Maybe<Scalars['Int']>;
		/** The unique identifier stored in the database */
		databaseId: Scalars['Int'];
		/** The globally unique identifier of the nav menu object. */
		id: Scalars['ID'];
		/** Whether the object is restricted from the current viewer */
		isRestricted?: Maybe<Scalars['Boolean']>;
		locations?: Maybe<Array<Maybe<MenuLocationEnum>>>;
		/**
		 * WP ID of the nav menu.
		 * @deprecated Deprecated in favor of the databaseId field
		 */
		menuId?: Maybe<Scalars['Int']>;
		/** Connection between the Menu type and the MenuItem type */
		menuItems?: Maybe<MenuToMenuItemConnection>;
		/** Display name of the menu. Equivalent to WP_Term-&gt;name. */
		name?: Maybe<Scalars['String']>;
		/** The url friendly name of the menu. Equivalent to WP_Term-&gt;slug */
		slug?: Maybe<Scalars['String']>;
	};

/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export type MenuMenuItemsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<MenuToMenuItemConnectionWhereArgs>;
};

/** Field Group */
export type Menu_FooterDynamic = {
	__typename?: 'Menu_FooterDynamic';
	fieldGroupName?: Maybe<Scalars['String']>;
};

/** Field Group */
export type Menu_HeaderDynamic = {
	__typename?: 'Menu_HeaderDynamic';
	fieldGroupName?: Maybe<Scalars['String']>;
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
	id?: Maybe<Scalars['Int']>;
	/** The menu location for the menu being queried */
	location?: Maybe<MenuLocationEnum>;
	/** The database ID of the parent menu object */
	parentDatabaseId?: Maybe<Scalars['Int']>;
	/** The ID of the parent menu object */
	parentId?: Maybe<Scalars['ID']>;
};

/** Connection between the Menu type and the MenuItem type */
export type MenuToMenuItemConnection = {
	__typename?: 'MenuToMenuItemConnection';
	/** Edges for the MenuToMenuItemConnection connection */
	edges?: Maybe<Array<Maybe<MenuToMenuItemConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<MenuItem>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type MenuToMenuItemConnectionEdge = {
	__typename?: 'MenuToMenuItemConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<MenuItem>;
};

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItem = Node &
	DatabaseIdentifier & {
		__typename?: 'MenuItem';
		/** Connection between the MenuItem type and the MenuItem type */
		childItems?: Maybe<MenuItemToMenuItemConnection>;
		/** Connection from MenuItem to it&#039;s connected node */
		connectedNode?: Maybe<MenuItemToMenuItemLinkableConnectionEdge>;
		/**
		 * The object connected to this menu item.
		 * @deprecated Deprecated in favor of the connectedNode field
		 */
		connectedObject?: Maybe<MenuItemObjectUnion>;
		/** Class attribute for the menu item link */
		cssClasses?: Maybe<Array<Maybe<Scalars['String']>>>;
		/** The unique identifier stored in the database */
		databaseId: Scalars['Int'];
		/** Description of the menu item. */
		description?: Maybe<Scalars['String']>;
		/** The globally unique identifier of the nav menu item object. */
		id: Scalars['ID'];
		/** Whether the object is restricted from the current viewer */
		isRestricted?: Maybe<Scalars['Boolean']>;
		/** Label or title of the menu item. */
		label?: Maybe<Scalars['String']>;
		/** Link relationship (XFN) of the menu item. */
		linkRelationship?: Maybe<Scalars['String']>;
		locations?: Maybe<Array<Maybe<MenuLocationEnum>>>;
		/** The Menu a MenuItem is part of */
		menu?: Maybe<MenuItemToMenuConnectionEdge>;
		/**
		 * WP ID of the menu item.
		 * @deprecated Deprecated in favor of the databaseId field
		 */
		menuItemId?: Maybe<Scalars['Int']>;
		/** Menu item order */
		order?: Maybe<Scalars['Int']>;
		/** The database id of the parent menu item or null if it is the root */
		parentDatabaseId?: Maybe<Scalars['Int']>;
		/** The globally unique identifier of the parent nav menu item object. */
		parentId?: Maybe<Scalars['ID']>;
		/** Path for the resource. Relative path for internal resources. Absolute path for external resources. */
		path: Scalars['String'];
		/** Target attribute for the menu item link. */
		target?: Maybe<Scalars['String']>;
		/** Title attribute for the menu item link */
		title?: Maybe<Scalars['String']>;
		/** URL or destination of the menu item. */
		url?: Maybe<Scalars['String']>;
	};

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItemChildItemsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<MenuItemToMenuItemConnectionWhereArgs>;
};

/** Arguments for filtering the MenuItemToMenuItemConnection connection */
export type MenuItemToMenuItemConnectionWhereArgs = {
	/** The ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** The menu location for the menu being queried */
	location?: Maybe<MenuLocationEnum>;
	/** The database ID of the parent menu object */
	parentDatabaseId?: Maybe<Scalars['Int']>;
	/** The ID of the parent menu object */
	parentId?: Maybe<Scalars['ID']>;
};

/** Connection between the MenuItem type and the MenuItem type */
export type MenuItemToMenuItemConnection = {
	__typename?: 'MenuItemToMenuItemConnection';
	/** Edges for the MenuItemToMenuItemConnection connection */
	edges?: Maybe<Array<Maybe<MenuItemToMenuItemConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<MenuItem>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type MenuItemToMenuItemConnectionEdge = {
	__typename?: 'MenuItemToMenuItemConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<MenuItem>;
};

/** Connection between the MenuItem type and the MenuItemLinkable type */
export type MenuItemToMenuItemLinkableConnectionEdge = {
	__typename?: 'MenuItemToMenuItemLinkableConnectionEdge';
	/** The nodes of the connection, without the edges */
	node?: Maybe<MenuItemLinkable>;
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
	node?: Maybe<Menu>;
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
	id?: Maybe<Scalars['Int']>;
	/** The menu location for the menu being queried */
	location?: Maybe<MenuLocationEnum>;
	/** The database ID of the parent menu object */
	parentDatabaseId?: Maybe<Scalars['Int']>;
	/** The ID of the parent menu object */
	parentId?: Maybe<Scalars['ID']>;
};

/** Connection between the RootQuery type and the MenuItem type */
export type RootQueryToMenuItemConnection = {
	__typename?: 'RootQueryToMenuItemConnection';
	/** Edges for the RootQueryToMenuItemConnection connection */
	edges?: Maybe<Array<Maybe<RootQueryToMenuItemConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<MenuItem>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToMenuItemConnectionEdge = {
	__typename?: 'RootQueryToMenuItemConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<MenuItem>;
};

/** Arguments for filtering the RootQueryToMenuConnection connection */
export type RootQueryToMenuConnectionWhereArgs = {
	/** The ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** The menu location for the menu being queried */
	location?: Maybe<MenuLocationEnum>;
	/** The slug of the menu to query items for */
	slug?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the Menu type */
export type RootQueryToMenuConnection = {
	__typename?: 'RootQueryToMenuConnection';
	/** Edges for the RootQueryToMenuConnection connection */
	edges?: Maybe<Array<Maybe<RootQueryToMenuConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Menu>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToMenuConnectionEdge = {
	__typename?: 'RootQueryToMenuConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Menu>;
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
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the page type */
export type RootQueryToPageConnection = {
	__typename?: 'RootQueryToPageConnection';
	/** Edges for the RootQueryToPageConnection connection */
	edges?: Maybe<Array<Maybe<RootQueryToPageConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Page>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToPageConnectionEdge = {
	__typename?: 'RootQueryToPageConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Page>;
};

/** An plugin object */
export type Plugin = Node & {
	__typename?: 'Plugin';
	/** Name of the plugin author(s), may also be a company name. */
	author?: Maybe<Scalars['String']>;
	/** URI for the related author(s)/company website. */
	authorUri?: Maybe<Scalars['String']>;
	/** Description of the plugin. */
	description?: Maybe<Scalars['String']>;
	/** The globally unique identifier of the plugin object. */
	id: Scalars['ID'];
	/** Whether the object is restricted from the current viewer */
	isRestricted?: Maybe<Scalars['Boolean']>;
	/** Display name of the plugin. */
	name?: Maybe<Scalars['String']>;
	/** Plugin path. */
	path?: Maybe<Scalars['String']>;
	/** URI for the plugin website. This is useful for directing users for support requests etc. */
	pluginUri?: Maybe<Scalars['String']>;
	/** Current version of the plugin. */
	version?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the Plugin type */
export type RootQueryToPluginConnection = {
	__typename?: 'RootQueryToPluginConnection';
	/** Edges for the RootQueryToPluginConnection connection */
	edges?: Maybe<Array<Maybe<RootQueryToPluginConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Plugin>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToPluginConnectionEdge = {
	__typename?: 'RootQueryToPluginConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Plugin>;
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
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId?: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName?: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the position type */
export type RootQueryToPositionConnection = {
	__typename?: 'RootQueryToPositionConnection';
	/** Edges for the RootQueryToPositionConnection connection */
	edges?: Maybe<Array<Maybe<RootQueryToPositionConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Position>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToPositionConnectionEdge = {
	__typename?: 'RootQueryToPositionConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Position>;
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
	cacheDomain?: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the postFormat type */
export type RootQueryToPostFormatConnection = {
	__typename?: 'RootQueryToPostFormatConnection';
	/** Edges for the RootQueryToPostFormatConnection connection */
	edges?: Maybe<Array<Maybe<RootQueryToPostFormatConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<PostFormat>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToPostFormatConnectionEdge = {
	__typename?: 'RootQueryToPostFormatConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<PostFormat>;
};

/** Arguments for filtering the RootQueryToPostConnection connection */
export type RootQueryToPostConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId?: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName?: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Tag Slug */
	tag?: Maybe<Scalars['String']>;
	/** Use Tag ID */
	tagId?: Maybe<Scalars['String']>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag slugs, used to display objects from one tag OR another */
	tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of tag slugs, used to exclude objects in specified tags */
	tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the post type */
export type RootQueryToPostConnection = {
	__typename?: 'RootQueryToPostConnection';
	/** Edges for the RootQueryToPostConnection connection */
	edges?: Maybe<Array<Maybe<RootQueryToPostConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Post>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToPostConnectionEdge = {
	__typename?: 'RootQueryToPostConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Post>;
};

/** The reading setting type */
export type ReadingSettings = {
	__typename?: 'ReadingSettings';
	/** Blog pages show at most. */
	postsPerPage?: Maybe<Scalars['Int']>;
};

/** Connection between the RootQuery type and the EnqueuedScript type */
export type RootQueryToEnqueuedScriptConnection = {
	__typename?: 'RootQueryToEnqueuedScriptConnection';
	/** Edges for the RootQueryToEnqueuedScriptConnection connection */
	edges?: Maybe<Array<Maybe<RootQueryToEnqueuedScriptConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<EnqueuedScript>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToEnqueuedScriptConnectionEdge = {
	__typename?: 'RootQueryToEnqueuedScriptConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<EnqueuedScript>;
};

/** Connection between the RootQuery type and the EnqueuedStylesheet type */
export type RootQueryToEnqueuedStylesheetConnection = {
	__typename?: 'RootQueryToEnqueuedStylesheetConnection';
	/** Edges for the RootQueryToEnqueuedStylesheetConnection connection */
	edges?: Maybe<Array<Maybe<RootQueryToEnqueuedStylesheetConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<EnqueuedStylesheet>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToEnqueuedStylesheetConnectionEdge = {
	__typename?: 'RootQueryToEnqueuedStylesheetConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<EnqueuedStylesheet>;
};

/** Arguments for filtering the RootQueryToContentRevisionUnionConnection connection */
export type RootQueryToContentRevisionUnionConnectionWhereArgs = {
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the ContentRevisionUnion type */
export type RootQueryToContentRevisionUnionConnection = {
	__typename?: 'RootQueryToContentRevisionUnionConnection';
	/** Edges for the RootQueryToContentRevisionUnionConnection connection */
	edges?: Maybe<Array<Maybe<RootQueryToContentRevisionUnionConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<ContentRevisionUnion>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToContentRevisionUnionConnectionEdge = {
	__typename?: 'RootQueryToContentRevisionUnionConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<ContentRevisionUnion>;
};

/** The Yoast SEO site level configuration data */
export type SeoConfig = {
	__typename?: 'SEOConfig';
	breadcrumbs?: Maybe<SeoBreadcrumbs>;
	contentTypes?: Maybe<SeoContentTypes>;
	openGraph?: Maybe<SeoOpenGraph>;
	redirects?: Maybe<Array<Maybe<SeoRedirect>>>;
	schema?: Maybe<SeoSchema>;
	social?: Maybe<SeoSocial>;
	webmaster?: Maybe<SeoWebmaster>;
};

/** The Yoast SEO breadcrumb config */
export type SeoBreadcrumbs = {
	__typename?: 'SEOBreadcrumbs';
	archivePrefix?: Maybe<Scalars['String']>;
	boldLast?: Maybe<Scalars['Boolean']>;
	enabled?: Maybe<Scalars['Boolean']>;
	homeText?: Maybe<Scalars['String']>;
	notFoundText?: Maybe<Scalars['String']>;
	prefix?: Maybe<Scalars['String']>;
	searchPrefix?: Maybe<Scalars['String']>;
	separator?: Maybe<Scalars['String']>;
	showBlogPage?: Maybe<Scalars['Boolean']>;
};

/** The Yoast SEO search appearance content types */
export type SeoContentTypes = {
	__typename?: 'SEOContentTypes';
	about?: Maybe<SeoContentType>;
	consultant?: Maybe<SeoContentType>;
	contactForm?: Maybe<SeoContentType>;
	mediaItem?: Maybe<SeoContentType>;
	page?: Maybe<SeoContentType>;
	position?: Maybe<SeoContentType>;
	post?: Maybe<SeoContentType>;
	testimonial?: Maybe<SeoContentType>;
};

/** he Yoast SEO search appearance content types fields */
export type SeoContentType = {
	__typename?: 'SEOContentType';
	metaDesc?: Maybe<Scalars['String']>;
	metaRobotsNoindex?: Maybe<Scalars['Boolean']>;
	schema?: Maybe<SeoPageInfoSchema>;
	schemaType?: Maybe<Scalars['String']>;
	title?: Maybe<Scalars['String']>;
};

/** The Open Graph data */
export type SeoOpenGraph = {
	__typename?: 'SEOOpenGraph';
	defaultImage?: Maybe<MediaItem>;
	frontPage?: Maybe<SeoOpenGraphFrontPage>;
};

/** The Open Graph Front page data */
export type SeoOpenGraphFrontPage = {
	__typename?: 'SEOOpenGraphFrontPage';
	description?: Maybe<Scalars['String']>;
	image?: Maybe<MediaItem>;
	title?: Maybe<Scalars['String']>;
};

/** The Yoast redirect data  (Yoast Premium only) */
export type SeoRedirect = {
	__typename?: 'SEORedirect';
	format?: Maybe<Scalars['String']>;
	origin?: Maybe<Scalars['String']>;
	target?: Maybe<Scalars['String']>;
	type?: Maybe<Scalars['Int']>;
};

/** The Yoast SEO schema data */
export type SeoSchema = {
	__typename?: 'SEOSchema';
	companyLogo?: Maybe<MediaItem>;
	companyName?: Maybe<Scalars['String']>;
	companyOrPerson?: Maybe<Scalars['String']>;
	inLanguage?: Maybe<Scalars['String']>;
	logo?: Maybe<MediaItem>;
	personLogo?: Maybe<MediaItem>;
	personName?: Maybe<Scalars['String']>;
	siteName?: Maybe<Scalars['String']>;
	siteUrl?: Maybe<Scalars['String']>;
	wordpressSiteName?: Maybe<Scalars['String']>;
};

/** The Yoast SEO Social media links */
export type SeoSocial = {
	__typename?: 'SEOSocial';
	facebook?: Maybe<SeoSocialFacebook>;
	instagram?: Maybe<SeoSocialInstagram>;
	linkedIn?: Maybe<SeoSocialLinkedIn>;
	mySpace?: Maybe<SeoSocialMySpace>;
	pinterest?: Maybe<SeoSocialPinterest>;
	twitter?: Maybe<SeoSocialTwitter>;
	wikipedia?: Maybe<SeoSocialWikipedia>;
	youTube?: Maybe<SeoSocialYoutube>;
};

export type SeoSocialFacebook = {
	__typename?: 'SEOSocialFacebook';
	defaultImage?: Maybe<MediaItem>;
	url?: Maybe<Scalars['String']>;
};

export type SeoSocialInstagram = {
	__typename?: 'SEOSocialInstagram';
	url?: Maybe<Scalars['String']>;
};

export type SeoSocialLinkedIn = {
	__typename?: 'SEOSocialLinkedIn';
	url?: Maybe<Scalars['String']>;
};

export type SeoSocialMySpace = {
	__typename?: 'SEOSocialMySpace';
	url?: Maybe<Scalars['String']>;
};

export type SeoSocialPinterest = {
	__typename?: 'SEOSocialPinterest';
	metaTag?: Maybe<Scalars['String']>;
	url?: Maybe<Scalars['String']>;
};

export type SeoSocialTwitter = {
	__typename?: 'SEOSocialTwitter';
	cardType?: Maybe<SeoCardType>;
	username?: Maybe<Scalars['String']>;
};

/** Types of cards */
export enum SeoCardType {
	Summary = 'summary',
	SummaryLargeImage = 'summary_large_image'
}

export type SeoSocialWikipedia = {
	__typename?: 'SEOSocialWikipedia';
	url?: Maybe<Scalars['String']>;
};

export type SeoSocialYoutube = {
	__typename?: 'SEOSocialYoutube';
	url?: Maybe<Scalars['String']>;
};

/** The Yoast SEO  webmaster fields */
export type SeoWebmaster = {
	__typename?: 'SEOWebmaster';
	baiduVerify?: Maybe<Scalars['String']>;
	googleVerify?: Maybe<Scalars['String']>;
	msVerify?: Maybe<Scalars['String']>;
	yandexVerify?: Maybe<Scalars['String']>;
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
	cacheDomain?: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the tag type */
export type RootQueryToTagConnection = {
	__typename?: 'RootQueryToTagConnection';
	/** Edges for the RootQueryToTagConnection connection */
	edges?: Maybe<Array<Maybe<RootQueryToTagConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Tag>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToTagConnectionEdge = {
	__typename?: 'RootQueryToTagConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Tag>;
};

/** Connection between the RootQuery type and the Taxonomy type */
export type RootQueryToTaxonomyConnection = {
	__typename?: 'RootQueryToTaxonomyConnection';
	/** Edges for the RootQueryToTaxonomyConnection connection */
	edges?: Maybe<Array<Maybe<RootQueryToTaxonomyConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Taxonomy>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToTaxonomyConnectionEdge = {
	__typename?: 'RootQueryToTaxonomyConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Taxonomy>;
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
	cacheDomain?: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** The Taxonomy to filter terms by */
	taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the TermNode type */
export type RootQueryToTermNodeConnection = {
	__typename?: 'RootQueryToTermNodeConnection';
	/** Edges for the RootQueryToTermNodeConnection connection */
	edges?: Maybe<Array<Maybe<RootQueryToTermNodeConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<TermNode>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToTermNodeConnectionEdge = {
	__typename?: 'RootQueryToTermNodeConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<TermNode>;
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
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId?: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName?: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the testimonial type */
export type RootQueryToTestimonialConnection = {
	__typename?: 'RootQueryToTestimonialConnection';
	/** Edges for the RootQueryToTestimonialConnection connection */
	edges?: Maybe<Array<Maybe<RootQueryToTestimonialConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Testimonial>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToTestimonialConnectionEdge = {
	__typename?: 'RootQueryToTestimonialConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Testimonial>;
};

/** A theme object */
export type Theme = Node & {
	__typename?: 'Theme';
	/** Name of the theme author(s), could also be a company name. This field is equivalent to WP_Theme-&gt;get( &quot;Author&quot; ). */
	author?: Maybe<Scalars['String']>;
	/** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;AuthorURI&quot; ). */
	authorUri?: Maybe<Scalars['String']>;
	/** The description of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Description&quot; ). */
	description?: Maybe<Scalars['String']>;
	/** The globally unique identifier of the theme object. */
	id: Scalars['ID'];
	/** Whether the object is restricted from the current viewer */
	isRestricted?: Maybe<Scalars['Boolean']>;
	/** Display name of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Name&quot; ). */
	name?: Maybe<Scalars['String']>;
	/** The URL of the screenshot for the theme. The screenshot is intended to give an overview of what the theme looks like. This field is equivalent to WP_Theme-&gt;get_screenshot(). */
	screenshot?: Maybe<Scalars['String']>;
	/** The theme slug is used to internally match themes. Theme slugs can have subdirectories like: my-theme/sub-theme. This field is equivalent to WP_Theme-&gt;get_stylesheet(). */
	slug?: Maybe<Scalars['String']>;
	/** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;Tags&quot; ). */
	tags?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** A URI if the theme has a website associated with it. The Theme URI is handy for directing users to a theme site for support etc. This field is equivalent to WP_Theme-&gt;get( &quot;ThemeURI&quot; ). */
	themeUri?: Maybe<Scalars['String']>;
	/** The current version of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Version&quot; ). */
	version?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the Theme type */
export type RootQueryToThemeConnection = {
	__typename?: 'RootQueryToThemeConnection';
	/** Edges for the RootQueryToThemeConnection connection */
	edges?: Maybe<Array<Maybe<RootQueryToThemeConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<Theme>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToThemeConnectionEdge = {
	__typename?: 'RootQueryToThemeConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<Theme>;
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
	edges?: Maybe<Array<Maybe<RootQueryToUserRoleConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<UserRole>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToUserRoleConnectionEdge = {
	__typename?: 'RootQueryToUserRoleConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<UserRole>;
};

/** Arguments for filtering the RootQueryToUserConnection connection */
export type RootQueryToUserConnectionWhereArgs = {
	/** Array of userIds to exclude. */
	exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
	/** Pass an array of post types to filter results to users who have published posts in those post types. */
	hasPublishedPosts?: Maybe<Array<Maybe<ContentTypeEnum>>>;
	/** Array of userIds to include. */
	include?: Maybe<Array<Maybe<Scalars['Int']>>>;
	/** The user login. */
	login?: Maybe<Scalars['String']>;
	/** An array of logins to include. Users matching one of these logins will be included in results. */
	loginIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** An array of logins to exclude. Users matching one of these logins will not be included in results. */
	loginNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** The user nicename. */
	nicename?: Maybe<Scalars['String']>;
	/** An array of nicenames to include. Users matching one of these nicenames will be included in results. */
	nicenameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** An array of nicenames to exclude. Users matching one of these nicenames will not be included in results. */
	nicenameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<UsersConnectionOrderbyInput>>>;
	/** An array of role names that users must match to be included in results. Note that this is an inclusive list: users must match *each* role. */
	role?: Maybe<UserRoleEnum>;
	/** An array of role names. Matched users must have at least one of these roles. */
	roleIn?: Maybe<Array<Maybe<UserRoleEnum>>>;
	/** An array of role names to exclude. Users matching one or more of these roles will not be included in results. */
	roleNotIn?: Maybe<Array<Maybe<UserRoleEnum>>>;
	/** Search keyword. Searches for possible string matches on columns. When "searchColumns" is left empty, it tries to determine which column to search in based on search string. */
	search?: Maybe<Scalars['String']>;
	/** Array of column names to be searched. Accepts 'ID', 'login', 'nicename', 'email', 'url'. */
	searchColumns?: Maybe<Array<Maybe<UsersConnectionSearchColumnEnum>>>;
};

/** Options for ordering the connection */
export type UsersConnectionOrderbyInput = {
	field: UsersConnectionOrderbyEnum;
	order?: Maybe<OrderEnum>;
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
	edges?: Maybe<Array<Maybe<RootQueryToUserConnectionEdge>>>;
	/** The nodes of the connection, without the edges */
	nodes?: Maybe<Array<Maybe<User>>>;
	/** Information about pagination in a connection. */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToUserConnectionEdge = {
	__typename?: 'RootQueryToUserConnectionEdge';
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars['String']>;
	/** The item at the end of the edge */
	node?: Maybe<User>;
};

/** The writing setting type */
export type WritingSettings = {
	__typename?: 'WritingSettings';
	/** Default post category. */
	defaultCategory?: Maybe<Scalars['Int']>;
	/** Default post format. */
	defaultPostFormat?: Maybe<Scalars['String']>;
	/** Convert emoticons like :-) and :-P to graphics on display. */
	useSmilies?: Maybe<Scalars['Boolean']>;
};

/** The root mutation */
export type RootMutation = {
	__typename?: 'RootMutation';
	/** The payload for the UpdateCategory mutation */
	updateCategory?: Maybe<UpdateCategoryPayload>;
	/** The payload for the UpdatePostFormat mutation */
	updatePostFormat?: Maybe<UpdatePostFormatPayload>;
	/** The payload for the UpdateTag mutation */
	updateTag?: Maybe<UpdateTagPayload>;
	/** The payload for the createAbout mutation */
	createAbout?: Maybe<CreateAboutPayload>;
	/** The payload for the createCategory mutation */
	createCategory?: Maybe<CreateCategoryPayload>;
	/** The payload for the createComment mutation */
	createComment?: Maybe<CreateCommentPayload>;
	/** The payload for the createConsultant mutation */
	createConsultant?: Maybe<CreateConsultantPayload>;
	/** The payload for the createContactForm mutation */
	createContactForm?: Maybe<CreateContactFormPayload>;
	/** The payload for the createMediaItem mutation */
	createMediaItem?: Maybe<CreateMediaItemPayload>;
	/** The payload for the createPage mutation */
	createPage?: Maybe<CreatePagePayload>;
	/** The payload for the createPosition mutation */
	createPosition?: Maybe<CreatePositionPayload>;
	/** The payload for the createPost mutation */
	createPost?: Maybe<CreatePostPayload>;
	/** The payload for the createPostFormat mutation */
	createPostFormat?: Maybe<CreatePostFormatPayload>;
	/** The payload for the createTag mutation */
	createTag?: Maybe<CreateTagPayload>;
	/** The payload for the createTestimonial mutation */
	createTestimonial?: Maybe<CreateTestimonialPayload>;
	/** The payload for the createUser mutation */
	createUser?: Maybe<CreateUserPayload>;
	/** The payload for the deleteAbout mutation */
	deleteAbout?: Maybe<DeleteAboutPayload>;
	/** The payload for the deleteCategory mutation */
	deleteCategory?: Maybe<DeleteCategoryPayload>;
	/** The payload for the deleteComment mutation */
	deleteComment?: Maybe<DeleteCommentPayload>;
	/** The payload for the deleteConsultant mutation */
	deleteConsultant?: Maybe<DeleteConsultantPayload>;
	/** The payload for the deleteContactForm mutation */
	deleteContactForm?: Maybe<DeleteContactFormPayload>;
	/** The payload for the deleteMediaItem mutation */
	deleteMediaItem?: Maybe<DeleteMediaItemPayload>;
	/** The payload for the deletePage mutation */
	deletePage?: Maybe<DeletePagePayload>;
	/** The payload for the deletePosition mutation */
	deletePosition?: Maybe<DeletePositionPayload>;
	/** The payload for the deletePost mutation */
	deletePost?: Maybe<DeletePostPayload>;
	/** The payload for the deletePostFormat mutation */
	deletePostFormat?: Maybe<DeletePostFormatPayload>;
	/** The payload for the deleteTag mutation */
	deleteTag?: Maybe<DeleteTagPayload>;
	/** The payload for the deleteTestimonial mutation */
	deleteTestimonial?: Maybe<DeleteTestimonialPayload>;
	/** The payload for the deleteUser mutation */
	deleteUser?: Maybe<DeleteUserPayload>;
	increaseCount?: Maybe<Scalars['Int']>;
	/** The payload for the login mutation */
	login?: Maybe<LoginPayload>;
	/** The payload for the refreshJwtAuthToken mutation */
	refreshJwtAuthToken?: Maybe<RefreshJwtAuthTokenPayload>;
	/** The payload for the registerUser mutation */
	registerUser?: Maybe<RegisterUserPayload>;
	/** The payload for the resetUserPassword mutation */
	resetUserPassword?: Maybe<ResetUserPasswordPayload>;
	/** The payload for the restoreComment mutation */
	restoreComment?: Maybe<RestoreCommentPayload>;
	/** The payload for the sendEmail mutation */
	sendEmail?: Maybe<SendEmailPayload>;
	/** The payload for the sendPasswordResetEmail mutation */
	sendPasswordResetEmail?: Maybe<SendPasswordResetEmailPayload>;
	/** The payload for the submitForm mutation */
	submitForm?: Maybe<SubmitFormPayload>;
	/** The payload for the updateAbout mutation */
	updateAbout?: Maybe<UpdateAboutPayload>;
	/** The payload for the updateComment mutation */
	updateComment?: Maybe<UpdateCommentPayload>;
	/** The payload for the updateConsultant mutation */
	updateConsultant?: Maybe<UpdateConsultantPayload>;
	/** The payload for the updateContactForm mutation */
	updateContactForm?: Maybe<UpdateContactFormPayload>;
	/** The payload for the updateMediaItem mutation */
	updateMediaItem?: Maybe<UpdateMediaItemPayload>;
	/** The payload for the updatePage mutation */
	updatePage?: Maybe<UpdatePagePayload>;
	/** The payload for the updatePosition mutation */
	updatePosition?: Maybe<UpdatePositionPayload>;
	/** The payload for the updatePost mutation */
	updatePost?: Maybe<UpdatePostPayload>;
	/** The payload for the updateSettings mutation */
	updateSettings?: Maybe<UpdateSettingsPayload>;
	/** The payload for the updateTestimonial mutation */
	updateTestimonial?: Maybe<UpdateTestimonialPayload>;
	/** The payload for the updateUser mutation */
	updateUser?: Maybe<UpdateUserPayload>;
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
export type RootMutationCreateContactFormArgs = {
	input: CreateContactFormInput;
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
export type RootMutationDeleteContactFormArgs = {
	input: DeleteContactFormInput;
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
	count?: Maybe<Scalars['Int']>;
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
export type RootMutationSendEmailArgs = {
	input: SendEmailInput;
};

/** The root mutation */
export type RootMutationSendPasswordResetEmailArgs = {
	input: SendPasswordResetEmailInput;
};

/** The root mutation */
export type RootMutationSubmitFormArgs = {
	input: SubmitFormInput;
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
export type RootMutationUpdateContactFormArgs = {
	input: UpdateContactFormInput;
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
	aliasOf?: Maybe<Scalars['String']>;
	clientMutationId?: Maybe<Scalars['String']>;
	/** The description of the category object */
	description?: Maybe<Scalars['String']>;
	/** The ID of the category object to update */
	id: Scalars['ID'];
	/** The name of the category object to mutate */
	name?: Maybe<Scalars['String']>;
	/** The ID of the category that should be set as the parent */
	parentId?: Maybe<Scalars['ID']>;
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdateCategory mutation */
export type UpdateCategoryPayload = {
	__typename?: 'UpdateCategoryPayload';
	/** The created category */
	category?: Maybe<Category>;
	clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the UpdatePostFormat mutation */
export type UpdatePostFormatInput = {
	/** The slug that the post_format will be an alias of */
	aliasOf?: Maybe<Scalars['String']>;
	clientMutationId?: Maybe<Scalars['String']>;
	/** The description of the post_format object */
	description?: Maybe<Scalars['String']>;
	/** The ID of the postFormat object to update */
	id: Scalars['ID'];
	/** The name of the post_format object to mutate */
	name?: Maybe<Scalars['String']>;
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdatePostFormat mutation */
export type UpdatePostFormatPayload = {
	__typename?: 'UpdatePostFormatPayload';
	clientMutationId?: Maybe<Scalars['String']>;
	/** The created post_format */
	postFormat?: Maybe<PostFormat>;
};

/** Input for the UpdateTag mutation */
export type UpdateTagInput = {
	/** The slug that the post_tag will be an alias of */
	aliasOf?: Maybe<Scalars['String']>;
	clientMutationId?: Maybe<Scalars['String']>;
	/** The description of the post_tag object */
	description?: Maybe<Scalars['String']>;
	/** The ID of the tag object to update */
	id: Scalars['ID'];
	/** The name of the post_tag object to mutate */
	name?: Maybe<Scalars['String']>;
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdateTag mutation */
export type UpdateTagPayload = {
	__typename?: 'UpdateTagPayload';
	clientMutationId?: Maybe<Scalars['String']>;
	/** The created post_tag */
	tag?: Maybe<Tag>;
};

/** Input for the createAbout mutation */
export type CreateAboutInput = {
	/** The userId to assign as the author of the object */
	authorId?: Maybe<Scalars['ID']>;
	/** Set connections between the about and categories */
	categories?: Maybe<AboutCategoriesInput>;
	clientMutationId?: Maybe<Scalars['String']>;
	/** The comment status for the object */
	commentStatus?: Maybe<Scalars['String']>;
	/** The content of the object */
	content?: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: Maybe<Scalars['String']>;
	/** The excerpt of the object */
	excerpt?: Maybe<Scalars['String']>;
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: Maybe<Scalars['Int']>;
	/** The password used to protect the content of the object */
	password?: Maybe<Scalars['String']>;
	/** The ping status for the object */
	pingStatus?: Maybe<Scalars['String']>;
	/** URLs that have been pinged. */
	pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Set connections between the about and postFormats */
	postFormats?: Maybe<AboutPostFormatsInput>;
	/** The slug of the object */
	slug?: Maybe<Scalars['String']>;
	/** The status of the object */
	status?: Maybe<PostStatusEnum>;
	/** The title of the object */
	title?: Maybe<Scalars['String']>;
	/** URLs queued to be pinged. */
	toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Set relationships between the about to categories */
export type AboutCategoriesInput = {
	/** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
	append?: Maybe<Scalars['Boolean']>;
	nodes?: Maybe<Array<Maybe<AboutCategoriesNodeInput>>>;
};

/** List of categories to connect the about to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type AboutCategoriesNodeInput = {
	/** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
	description?: Maybe<Scalars['String']>;
	/** The ID of the category. If present, this will be used to connect to the about. If no existing category exists with this ID, no connection will be made. */
	id?: Maybe<Scalars['ID']>;
	/** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
	name?: Maybe<Scalars['String']>;
	/** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
	slug?: Maybe<Scalars['String']>;
};

/** Set relationships between the about to postFormats */
export type AboutPostFormatsInput = {
	/** If true, this will append the postFormat to existing related postFormats. If false, this will replace existing relationships. Default true. */
	append?: Maybe<Scalars['Boolean']>;
	nodes?: Maybe<Array<Maybe<AboutPostFormatsNodeInput>>>;
};

/** List of postFormats to connect the about to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type AboutPostFormatsNodeInput = {
	/** The description of the postFormat. This field is used to set a description of the postFormat if a new one is created during the mutation. */
	description?: Maybe<Scalars['String']>;
	/** The ID of the postFormat. If present, this will be used to connect to the about. If no existing postFormat exists with this ID, no connection will be made. */
	id?: Maybe<Scalars['ID']>;
	/** The name of the postFormat. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
	name?: Maybe<Scalars['String']>;
	/** The slug of the postFormat. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
	slug?: Maybe<Scalars['String']>;
};

/** The payload for the createAbout mutation */
export type CreateAboutPayload = {
	__typename?: 'CreateAboutPayload';
	about?: Maybe<About>;
	clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the createCategory mutation */
export type CreateCategoryInput = {
	/** The slug that the category will be an alias of */
	aliasOf?: Maybe<Scalars['String']>;
	clientMutationId?: Maybe<Scalars['String']>;
	/** The description of the category object */
	description?: Maybe<Scalars['String']>;
	/** The name of the category object to mutate */
	name: Scalars['String'];
	/** The ID of the category that should be set as the parent */
	parentId?: Maybe<Scalars['ID']>;
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug?: Maybe<Scalars['String']>;
};

/** The payload for the createCategory mutation */
export type CreateCategoryPayload = {
	__typename?: 'CreateCategoryPayload';
	/** The created category */
	category?: Maybe<Category>;
	clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the createComment mutation */
export type CreateCommentInput = {
	/** The approval status of the comment. */
	approved?: Maybe<Scalars['String']>;
	/** The name of the comment's author. */
	author?: Maybe<Scalars['String']>;
	/** The email of the comment's author. */
	authorEmail?: Maybe<Scalars['String']>;
	/** The url of the comment's author. */
	authorUrl?: Maybe<Scalars['String']>;
	clientMutationId?: Maybe<Scalars['String']>;
	/** The ID of the post object the comment belongs to. */
	commentOn?: Maybe<Scalars['Int']>;
	/** Content of the comment. */
	content?: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: Maybe<Scalars['String']>;
	/** Parent comment of current comment. */
	parent?: Maybe<Scalars['ID']>;
	/** Type of comment. */
	type?: Maybe<Scalars['String']>;
};

/** The payload for the createComment mutation */
export type CreateCommentPayload = {
	__typename?: 'CreateCommentPayload';
	clientMutationId?: Maybe<Scalars['String']>;
	/** The comment that was created */
	comment?: Maybe<Comment>;
	/** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
	success?: Maybe<Scalars['Boolean']>;
};

/** Input for the createConsultant mutation */
export type CreateConsultantInput = {
	/** The userId to assign as the author of the object */
	authorId?: Maybe<Scalars['ID']>;
	/** Set connections between the consultant and categories */
	categories?: Maybe<ConsultantCategoriesInput>;
	clientMutationId?: Maybe<Scalars['String']>;
	/** The comment status for the object */
	commentStatus?: Maybe<Scalars['String']>;
	/** The content of the object */
	content?: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: Maybe<Scalars['String']>;
	/** The excerpt of the object */
	excerpt?: Maybe<Scalars['String']>;
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: Maybe<Scalars['Int']>;
	/** The password used to protect the content of the object */
	password?: Maybe<Scalars['String']>;
	/** The ping status for the object */
	pingStatus?: Maybe<Scalars['String']>;
	/** URLs that have been pinged. */
	pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Set connections between the consultant and postFormats */
	postFormats?: Maybe<ConsultantPostFormatsInput>;
	/** The slug of the object */
	slug?: Maybe<Scalars['String']>;
	/** The status of the object */
	status?: Maybe<PostStatusEnum>;
	/** The title of the object */
	title?: Maybe<Scalars['String']>;
	/** URLs queued to be pinged. */
	toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Set relationships between the consultant to categories */
export type ConsultantCategoriesInput = {
	/** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
	append?: Maybe<Scalars['Boolean']>;
	nodes?: Maybe<Array<Maybe<ConsultantCategoriesNodeInput>>>;
};

/** List of categories to connect the consultant to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type ConsultantCategoriesNodeInput = {
	/** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
	description?: Maybe<Scalars['String']>;
	/** The ID of the category. If present, this will be used to connect to the consultant. If no existing category exists with this ID, no connection will be made. */
	id?: Maybe<Scalars['ID']>;
	/** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
	name?: Maybe<Scalars['String']>;
	/** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
	slug?: Maybe<Scalars['String']>;
};

/** Set relationships between the consultant to postFormats */
export type ConsultantPostFormatsInput = {
	/** If true, this will append the postFormat to existing related postFormats. If false, this will replace existing relationships. Default true. */
	append?: Maybe<Scalars['Boolean']>;
	nodes?: Maybe<Array<Maybe<ConsultantPostFormatsNodeInput>>>;
};

/** List of postFormats to connect the consultant to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type ConsultantPostFormatsNodeInput = {
	/** The description of the postFormat. This field is used to set a description of the postFormat if a new one is created during the mutation. */
	description?: Maybe<Scalars['String']>;
	/** The ID of the postFormat. If present, this will be used to connect to the consultant. If no existing postFormat exists with this ID, no connection will be made. */
	id?: Maybe<Scalars['ID']>;
	/** The name of the postFormat. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
	name?: Maybe<Scalars['String']>;
	/** The slug of the postFormat. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
	slug?: Maybe<Scalars['String']>;
};

/** The payload for the createConsultant mutation */
export type CreateConsultantPayload = {
	__typename?: 'CreateConsultantPayload';
	clientMutationId?: Maybe<Scalars['String']>;
	consultant?: Maybe<Consultant>;
};

/** Input for the createContactForm mutation */
export type CreateContactFormInput = {
	/** Set connections between the contactForm and categories */
	categories?: Maybe<ContactFormCategoriesInput>;
	clientMutationId?: Maybe<Scalars['String']>;
	/** The content of the object */
	content?: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: Maybe<Scalars['String']>;
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: Maybe<Scalars['Int']>;
	/** The password used to protect the content of the object */
	password?: Maybe<Scalars['String']>;
	/** The slug of the object */
	slug?: Maybe<Scalars['String']>;
	/** The status of the object */
	status?: Maybe<PostStatusEnum>;
	/** The title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Set relationships between the contactForm to categories */
export type ContactFormCategoriesInput = {
	/** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
	append?: Maybe<Scalars['Boolean']>;
	nodes?: Maybe<Array<Maybe<ContactFormCategoriesNodeInput>>>;
};

/** List of categories to connect the contactForm to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type ContactFormCategoriesNodeInput = {
	/** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
	description?: Maybe<Scalars['String']>;
	/** The ID of the category. If present, this will be used to connect to the contactForm. If no existing category exists with this ID, no connection will be made. */
	id?: Maybe<Scalars['ID']>;
	/** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
	name?: Maybe<Scalars['String']>;
	/** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
	slug?: Maybe<Scalars['String']>;
};

/** The payload for the createContactForm mutation */
export type CreateContactFormPayload = {
	__typename?: 'CreateContactFormPayload';
	clientMutationId?: Maybe<Scalars['String']>;
	contactForm?: Maybe<ContactForm>;
};

/** Input for the createMediaItem mutation */
export type CreateMediaItemInput = {
	/** Alternative text to display when mediaItem is not displayed */
	altText?: Maybe<Scalars['String']>;
	/** The userId to assign as the author of the mediaItem */
	authorId?: Maybe<Scalars['ID']>;
	/** The caption for the mediaItem */
	caption?: Maybe<Scalars['String']>;
	clientMutationId?: Maybe<Scalars['String']>;
	/** The comment status for the mediaItem */
	commentStatus?: Maybe<Scalars['String']>;
	/** The date of the mediaItem */
	date?: Maybe<Scalars['String']>;
	/** The date (in GMT zone) of the mediaItem */
	dateGmt?: Maybe<Scalars['String']>;
	/** Description of the mediaItem */
	description?: Maybe<Scalars['String']>;
	/** The file name of the mediaItem */
	filePath?: Maybe<Scalars['String']>;
	/** The file type of the mediaItem */
	fileType?: Maybe<MimeTypeEnum>;
	/** The WordPress post ID or the graphQL postId of the parent object */
	parentId?: Maybe<Scalars['ID']>;
	/** The ping status for the mediaItem */
	pingStatus?: Maybe<Scalars['String']>;
	/** The slug of the mediaItem */
	slug?: Maybe<Scalars['String']>;
	/** The status of the mediaItem */
	status?: Maybe<MediaItemStatusEnum>;
	/** The title of the mediaItem */
	title?: Maybe<Scalars['String']>;
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
	clientMutationId?: Maybe<Scalars['String']>;
	mediaItem?: Maybe<MediaItem>;
};

/** Input for the createPage mutation */
export type CreatePageInput = {
	/** The userId to assign as the author of the object */
	authorId?: Maybe<Scalars['ID']>;
	clientMutationId?: Maybe<Scalars['String']>;
	/** The comment status for the object */
	commentStatus?: Maybe<Scalars['String']>;
	/** The content of the object */
	content?: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: Maybe<Scalars['String']>;
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: Maybe<Scalars['Int']>;
	/** The ID of the parent object */
	parentId?: Maybe<Scalars['ID']>;
	/** The password used to protect the content of the object */
	password?: Maybe<Scalars['String']>;
	/** The slug of the object */
	slug?: Maybe<Scalars['String']>;
	/** The status of the object */
	status?: Maybe<PostStatusEnum>;
	/** The title of the object */
	title?: Maybe<Scalars['String']>;
};

/** The payload for the createPage mutation */
export type CreatePagePayload = {
	__typename?: 'CreatePagePayload';
	clientMutationId?: Maybe<Scalars['String']>;
	page?: Maybe<Page>;
};

/** Input for the createPosition mutation */
export type CreatePositionInput = {
	/** The userId to assign as the author of the object */
	authorId?: Maybe<Scalars['ID']>;
	/** Set connections between the position and categories */
	categories?: Maybe<PositionCategoriesInput>;
	clientMutationId?: Maybe<Scalars['String']>;
	/** The comment status for the object */
	commentStatus?: Maybe<Scalars['String']>;
	/** The content of the object */
	content?: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: Maybe<Scalars['String']>;
	/** The excerpt of the object */
	excerpt?: Maybe<Scalars['String']>;
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: Maybe<Scalars['Int']>;
	/** The password used to protect the content of the object */
	password?: Maybe<Scalars['String']>;
	/** The ping status for the object */
	pingStatus?: Maybe<Scalars['String']>;
	/** URLs that have been pinged. */
	pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Set connections between the position and postFormats */
	postFormats?: Maybe<PositionPostFormatsInput>;
	/** The slug of the object */
	slug?: Maybe<Scalars['String']>;
	/** The status of the object */
	status?: Maybe<PostStatusEnum>;
	/** The title of the object */
	title?: Maybe<Scalars['String']>;
	/** URLs queued to be pinged. */
	toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Set relationships between the position to categories */
export type PositionCategoriesInput = {
	/** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
	append?: Maybe<Scalars['Boolean']>;
	nodes?: Maybe<Array<Maybe<PositionCategoriesNodeInput>>>;
};

/** List of categories to connect the position to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PositionCategoriesNodeInput = {
	/** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
	description?: Maybe<Scalars['String']>;
	/** The ID of the category. If present, this will be used to connect to the position. If no existing category exists with this ID, no connection will be made. */
	id?: Maybe<Scalars['ID']>;
	/** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
	name?: Maybe<Scalars['String']>;
	/** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
	slug?: Maybe<Scalars['String']>;
};

/** Set relationships between the position to postFormats */
export type PositionPostFormatsInput = {
	/** If true, this will append the postFormat to existing related postFormats. If false, this will replace existing relationships. Default true. */
	append?: Maybe<Scalars['Boolean']>;
	nodes?: Maybe<Array<Maybe<PositionPostFormatsNodeInput>>>;
};

/** List of postFormats to connect the position to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PositionPostFormatsNodeInput = {
	/** The description of the postFormat. This field is used to set a description of the postFormat if a new one is created during the mutation. */
	description?: Maybe<Scalars['String']>;
	/** The ID of the postFormat. If present, this will be used to connect to the position. If no existing postFormat exists with this ID, no connection will be made. */
	id?: Maybe<Scalars['ID']>;
	/** The name of the postFormat. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
	name?: Maybe<Scalars['String']>;
	/** The slug of the postFormat. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
	slug?: Maybe<Scalars['String']>;
};

/** The payload for the createPosition mutation */
export type CreatePositionPayload = {
	__typename?: 'CreatePositionPayload';
	clientMutationId?: Maybe<Scalars['String']>;
	position?: Maybe<Position>;
};

/** Input for the createPost mutation */
export type CreatePostInput = {
	/** The userId to assign as the author of the object */
	authorId?: Maybe<Scalars['ID']>;
	/** Set connections between the post and categories */
	categories?: Maybe<PostCategoriesInput>;
	clientMutationId?: Maybe<Scalars['String']>;
	/** The comment status for the object */
	commentStatus?: Maybe<Scalars['String']>;
	/** The content of the object */
	content?: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: Maybe<Scalars['String']>;
	/** The excerpt of the object */
	excerpt?: Maybe<Scalars['String']>;
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: Maybe<Scalars['Int']>;
	/** The password used to protect the content of the object */
	password?: Maybe<Scalars['String']>;
	/** The ping status for the object */
	pingStatus?: Maybe<Scalars['String']>;
	/** URLs that have been pinged. */
	pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Set connections between the post and postFormats */
	postFormats?: Maybe<PostPostFormatsInput>;
	/** The slug of the object */
	slug?: Maybe<Scalars['String']>;
	/** The status of the object */
	status?: Maybe<PostStatusEnum>;
	/** Set connections between the post and tags */
	tags?: Maybe<PostTagsInput>;
	/** The title of the object */
	title?: Maybe<Scalars['String']>;
	/** URLs queued to be pinged. */
	toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Set relationships between the post to categories */
export type PostCategoriesInput = {
	/** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
	append?: Maybe<Scalars['Boolean']>;
	nodes?: Maybe<Array<Maybe<PostCategoriesNodeInput>>>;
};

/** List of categories to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostCategoriesNodeInput = {
	/** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
	description?: Maybe<Scalars['String']>;
	/** The ID of the category. If present, this will be used to connect to the post. If no existing category exists with this ID, no connection will be made. */
	id?: Maybe<Scalars['ID']>;
	/** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
	name?: Maybe<Scalars['String']>;
	/** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
	slug?: Maybe<Scalars['String']>;
};

/** Set relationships between the post to postFormats */
export type PostPostFormatsInput = {
	/** If true, this will append the postFormat to existing related postFormats. If false, this will replace existing relationships. Default true. */
	append?: Maybe<Scalars['Boolean']>;
	nodes?: Maybe<Array<Maybe<PostPostFormatsNodeInput>>>;
};

/** List of postFormats to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostPostFormatsNodeInput = {
	/** The description of the postFormat. This field is used to set a description of the postFormat if a new one is created during the mutation. */
	description?: Maybe<Scalars['String']>;
	/** The ID of the postFormat. If present, this will be used to connect to the post. If no existing postFormat exists with this ID, no connection will be made. */
	id?: Maybe<Scalars['ID']>;
	/** The name of the postFormat. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
	name?: Maybe<Scalars['String']>;
	/** The slug of the postFormat. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
	slug?: Maybe<Scalars['String']>;
};

/** Set relationships between the post to tags */
export type PostTagsInput = {
	/** If true, this will append the tag to existing related tags. If false, this will replace existing relationships. Default true. */
	append?: Maybe<Scalars['Boolean']>;
	nodes?: Maybe<Array<Maybe<PostTagsNodeInput>>>;
};

/** List of tags to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostTagsNodeInput = {
	/** The description of the tag. This field is used to set a description of the tag if a new one is created during the mutation. */
	description?: Maybe<Scalars['String']>;
	/** The ID of the tag. If present, this will be used to connect to the post. If no existing tag exists with this ID, no connection will be made. */
	id?: Maybe<Scalars['ID']>;
	/** The name of the tag. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
	name?: Maybe<Scalars['String']>;
	/** The slug of the tag. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
	slug?: Maybe<Scalars['String']>;
};

/** The payload for the createPost mutation */
export type CreatePostPayload = {
	__typename?: 'CreatePostPayload';
	clientMutationId?: Maybe<Scalars['String']>;
	post?: Maybe<Post>;
};

/** Input for the createPostFormat mutation */
export type CreatePostFormatInput = {
	/** The slug that the post_format will be an alias of */
	aliasOf?: Maybe<Scalars['String']>;
	clientMutationId?: Maybe<Scalars['String']>;
	/** The description of the post_format object */
	description?: Maybe<Scalars['String']>;
	/** The name of the post_format object to mutate */
	name: Scalars['String'];
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug?: Maybe<Scalars['String']>;
};

/** The payload for the createPostFormat mutation */
export type CreatePostFormatPayload = {
	__typename?: 'CreatePostFormatPayload';
	clientMutationId?: Maybe<Scalars['String']>;
	/** The created post_format */
	postFormat?: Maybe<PostFormat>;
};

/** Input for the createTag mutation */
export type CreateTagInput = {
	/** The slug that the post_tag will be an alias of */
	aliasOf?: Maybe<Scalars['String']>;
	clientMutationId?: Maybe<Scalars['String']>;
	/** The description of the post_tag object */
	description?: Maybe<Scalars['String']>;
	/** The name of the post_tag object to mutate */
	name: Scalars['String'];
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug?: Maybe<Scalars['String']>;
};

/** The payload for the createTag mutation */
export type CreateTagPayload = {
	__typename?: 'CreateTagPayload';
	clientMutationId?: Maybe<Scalars['String']>;
	/** The created post_tag */
	tag?: Maybe<Tag>;
};

/** Input for the createTestimonial mutation */
export type CreateTestimonialInput = {
	/** The userId to assign as the author of the object */
	authorId?: Maybe<Scalars['ID']>;
	/** Set connections between the testimonial and categories */
	categories?: Maybe<TestimonialCategoriesInput>;
	clientMutationId?: Maybe<Scalars['String']>;
	/** The comment status for the object */
	commentStatus?: Maybe<Scalars['String']>;
	/** The content of the object */
	content?: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: Maybe<Scalars['String']>;
	/** The excerpt of the object */
	excerpt?: Maybe<Scalars['String']>;
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: Maybe<Scalars['Int']>;
	/** The password used to protect the content of the object */
	password?: Maybe<Scalars['String']>;
	/** The ping status for the object */
	pingStatus?: Maybe<Scalars['String']>;
	/** URLs that have been pinged. */
	pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Set connections between the testimonial and postFormats */
	postFormats?: Maybe<TestimonialPostFormatsInput>;
	/** The slug of the object */
	slug?: Maybe<Scalars['String']>;
	/** The status of the object */
	status?: Maybe<PostStatusEnum>;
	/** The title of the object */
	title?: Maybe<Scalars['String']>;
	/** URLs queued to be pinged. */
	toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Set relationships between the testimonial to categories */
export type TestimonialCategoriesInput = {
	/** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
	append?: Maybe<Scalars['Boolean']>;
	nodes?: Maybe<Array<Maybe<TestimonialCategoriesNodeInput>>>;
};

/** List of categories to connect the testimonial to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type TestimonialCategoriesNodeInput = {
	/** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
	description?: Maybe<Scalars['String']>;
	/** The ID of the category. If present, this will be used to connect to the testimonial. If no existing category exists with this ID, no connection will be made. */
	id?: Maybe<Scalars['ID']>;
	/** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
	name?: Maybe<Scalars['String']>;
	/** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
	slug?: Maybe<Scalars['String']>;
};

/** Set relationships between the testimonial to postFormats */
export type TestimonialPostFormatsInput = {
	/** If true, this will append the postFormat to existing related postFormats. If false, this will replace existing relationships. Default true. */
	append?: Maybe<Scalars['Boolean']>;
	nodes?: Maybe<Array<Maybe<TestimonialPostFormatsNodeInput>>>;
};

/** List of postFormats to connect the testimonial to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type TestimonialPostFormatsNodeInput = {
	/** The description of the postFormat. This field is used to set a description of the postFormat if a new one is created during the mutation. */
	description?: Maybe<Scalars['String']>;
	/** The ID of the postFormat. If present, this will be used to connect to the testimonial. If no existing postFormat exists with this ID, no connection will be made. */
	id?: Maybe<Scalars['ID']>;
	/** The name of the postFormat. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
	name?: Maybe<Scalars['String']>;
	/** The slug of the postFormat. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
	slug?: Maybe<Scalars['String']>;
};

/** The payload for the createTestimonial mutation */
export type CreateTestimonialPayload = {
	__typename?: 'CreateTestimonialPayload';
	clientMutationId?: Maybe<Scalars['String']>;
	testimonial?: Maybe<Testimonial>;
};

/** Input for the createUser mutation */
export type CreateUserInput = {
	/** User's AOL IM account. */
	aim?: Maybe<Scalars['String']>;
	clientMutationId?: Maybe<Scalars['String']>;
	/** A string containing content about the user. */
	description?: Maybe<Scalars['String']>;
	/** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
	displayName?: Maybe<Scalars['String']>;
	/** A string containing the user's email address. */
	email?: Maybe<Scalars['String']>;
	/** 	The user's first name. */
	firstName?: Maybe<Scalars['String']>;
	/** User's Jabber account. */
	jabber?: Maybe<Scalars['String']>;
	/** The user's last name. */
	lastName?: Maybe<Scalars['String']>;
	/** User's locale. */
	locale?: Maybe<Scalars['String']>;
	/** A string that contains a URL-friendly name for the user. The default is the user's username. */
	nicename?: Maybe<Scalars['String']>;
	/** The user's nickname, defaults to the user's username. */
	nickname?: Maybe<Scalars['String']>;
	/** A string that contains the plain text password for the user. */
	password?: Maybe<Scalars['String']>;
	/** If true, this will refresh the users JWT secret. */
	refreshJwtUserSecret?: Maybe<Scalars['Boolean']>;
	/** The date the user registered. Format is Y-m-d H:i:s. */
	registered?: Maybe<Scalars['String']>;
	/** If true, this will revoke the users JWT secret. If false, this will unrevoke the JWT secret AND issue a new one. To revoke, the user must have proper capabilities to edit users JWT secrets. */
	revokeJwtUserSecret?: Maybe<Scalars['Boolean']>;
	/** A string for whether to enable the rich editor or not. False if not empty. */
	richEditing?: Maybe<Scalars['String']>;
	/** An array of roles to be assigned to the user. */
	roles?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** A string that contains the user's username for logging in. */
	username: Scalars['String'];
	/** A string containing the user's URL for the user's web site. */
	websiteUrl?: Maybe<Scalars['String']>;
	/** User's Yahoo IM account. */
	yim?: Maybe<Scalars['String']>;
};

/** The payload for the createUser mutation */
export type CreateUserPayload = {
	__typename?: 'CreateUserPayload';
	clientMutationId?: Maybe<Scalars['String']>;
	user?: Maybe<User>;
};

/** Input for the deleteAbout mutation */
export type DeleteAboutInput = {
	clientMutationId?: Maybe<Scalars['String']>;
	/** Whether the object should be force deleted instead of being moved to the trash */
	forceDelete?: Maybe<Scalars['Boolean']>;
	/** The ID of the about to delete */
	id: Scalars['ID'];
};

/** The payload for the deleteAbout mutation */
export type DeleteAboutPayload = {
	__typename?: 'DeleteAboutPayload';
	/** The object before it was deleted */
	about?: Maybe<About>;
	clientMutationId?: Maybe<Scalars['String']>;
	/** The ID of the deleted object */
	deletedId?: Maybe<Scalars['ID']>;
};

/** Input for the deleteCategory mutation */
export type DeleteCategoryInput = {
	clientMutationId?: Maybe<Scalars['String']>;
	/** The ID of the category to delete */
	id: Scalars['ID'];
};

/** The payload for the deleteCategory mutation */
export type DeleteCategoryPayload = {
	__typename?: 'DeleteCategoryPayload';
	/** The deteted term object */
	category?: Maybe<Category>;
	clientMutationId?: Maybe<Scalars['String']>;
	/** The ID of the deleted object */
	deletedId?: Maybe<Scalars['ID']>;
};

/** Input for the deleteComment mutation */
export type DeleteCommentInput = {
	clientMutationId?: Maybe<Scalars['String']>;
	/** Whether the comment should be force deleted instead of being moved to the trash */
	forceDelete?: Maybe<Scalars['Boolean']>;
	/** The deleted comment ID */
	id: Scalars['ID'];
};

/** The payload for the deleteComment mutation */
export type DeleteCommentPayload = {
	__typename?: 'DeleteCommentPayload';
	clientMutationId?: Maybe<Scalars['String']>;
	/** The deleted comment object */
	comment?: Maybe<Comment>;
	/** The deleted comment ID */
	deletedId?: Maybe<Scalars['ID']>;
};

/** Input for the deleteConsultant mutation */
export type DeleteConsultantInput = {
	clientMutationId?: Maybe<Scalars['String']>;
	/** Whether the object should be force deleted instead of being moved to the trash */
	forceDelete?: Maybe<Scalars['Boolean']>;
	/** The ID of the consultant to delete */
	id: Scalars['ID'];
};

/** The payload for the deleteConsultant mutation */
export type DeleteConsultantPayload = {
	__typename?: 'DeleteConsultantPayload';
	clientMutationId?: Maybe<Scalars['String']>;
	/** The object before it was deleted */
	consultant?: Maybe<Consultant>;
	/** The ID of the deleted object */
	deletedId?: Maybe<Scalars['ID']>;
};

/** Input for the deleteContactForm mutation */
export type DeleteContactFormInput = {
	clientMutationId?: Maybe<Scalars['String']>;
	/** Whether the object should be force deleted instead of being moved to the trash */
	forceDelete?: Maybe<Scalars['Boolean']>;
	/** The ID of the contactForm to delete */
	id: Scalars['ID'];
};

/** The payload for the deleteContactForm mutation */
export type DeleteContactFormPayload = {
	__typename?: 'DeleteContactFormPayload';
	clientMutationId?: Maybe<Scalars['String']>;
	/** The object before it was deleted */
	contactForm?: Maybe<ContactForm>;
	/** The ID of the deleted object */
	deletedId?: Maybe<Scalars['ID']>;
};

/** Input for the deleteMediaItem mutation */
export type DeleteMediaItemInput = {
	clientMutationId?: Maybe<Scalars['String']>;
	/** Whether the mediaItem should be force deleted instead of being moved to the trash */
	forceDelete?: Maybe<Scalars['Boolean']>;
	/** The ID of the mediaItem to delete */
	id: Scalars['ID'];
};

/** The payload for the deleteMediaItem mutation */
export type DeleteMediaItemPayload = {
	__typename?: 'DeleteMediaItemPayload';
	clientMutationId?: Maybe<Scalars['String']>;
	/** The ID of the deleted mediaItem */
	deletedId?: Maybe<Scalars['ID']>;
	/** The mediaItem before it was deleted */
	mediaItem?: Maybe<MediaItem>;
};

/** Input for the deletePage mutation */
export type DeletePageInput = {
	clientMutationId?: Maybe<Scalars['String']>;
	/** Whether the object should be force deleted instead of being moved to the trash */
	forceDelete?: Maybe<Scalars['Boolean']>;
	/** The ID of the page to delete */
	id: Scalars['ID'];
};

/** The payload for the deletePage mutation */
export type DeletePagePayload = {
	__typename?: 'DeletePagePayload';
	clientMutationId?: Maybe<Scalars['String']>;
	/** The ID of the deleted object */
	deletedId?: Maybe<Scalars['ID']>;
	/** The object before it was deleted */
	page?: Maybe<Page>;
};

/** Input for the deletePosition mutation */
export type DeletePositionInput = {
	clientMutationId?: Maybe<Scalars['String']>;
	/** Whether the object should be force deleted instead of being moved to the trash */
	forceDelete?: Maybe<Scalars['Boolean']>;
	/** The ID of the position to delete */
	id: Scalars['ID'];
};

/** The payload for the deletePosition mutation */
export type DeletePositionPayload = {
	__typename?: 'DeletePositionPayload';
	clientMutationId?: Maybe<Scalars['String']>;
	/** The ID of the deleted object */
	deletedId?: Maybe<Scalars['ID']>;
	/** The object before it was deleted */
	position?: Maybe<Position>;
};

/** Input for the deletePost mutation */
export type DeletePostInput = {
	clientMutationId?: Maybe<Scalars['String']>;
	/** Whether the object should be force deleted instead of being moved to the trash */
	forceDelete?: Maybe<Scalars['Boolean']>;
	/** The ID of the post to delete */
	id: Scalars['ID'];
};

/** The payload for the deletePost mutation */
export type DeletePostPayload = {
	__typename?: 'DeletePostPayload';
	clientMutationId?: Maybe<Scalars['String']>;
	/** The ID of the deleted object */
	deletedId?: Maybe<Scalars['ID']>;
	/** The object before it was deleted */
	post?: Maybe<Post>;
};

/** Input for the deletePostFormat mutation */
export type DeletePostFormatInput = {
	clientMutationId?: Maybe<Scalars['String']>;
	/** The ID of the postFormat to delete */
	id: Scalars['ID'];
};

/** The payload for the deletePostFormat mutation */
export type DeletePostFormatPayload = {
	__typename?: 'DeletePostFormatPayload';
	clientMutationId?: Maybe<Scalars['String']>;
	/** The ID of the deleted object */
	deletedId?: Maybe<Scalars['ID']>;
	/** The deteted term object */
	postFormat?: Maybe<PostFormat>;
};

/** Input for the deleteTag mutation */
export type DeleteTagInput = {
	clientMutationId?: Maybe<Scalars['String']>;
	/** The ID of the tag to delete */
	id: Scalars['ID'];
};

/** The payload for the deleteTag mutation */
export type DeleteTagPayload = {
	__typename?: 'DeleteTagPayload';
	clientMutationId?: Maybe<Scalars['String']>;
	/** The ID of the deleted object */
	deletedId?: Maybe<Scalars['ID']>;
	/** The deteted term object */
	tag?: Maybe<Tag>;
};

/** Input for the deleteTestimonial mutation */
export type DeleteTestimonialInput = {
	clientMutationId?: Maybe<Scalars['String']>;
	/** Whether the object should be force deleted instead of being moved to the trash */
	forceDelete?: Maybe<Scalars['Boolean']>;
	/** The ID of the testimonial to delete */
	id: Scalars['ID'];
};

/** The payload for the deleteTestimonial mutation */
export type DeleteTestimonialPayload = {
	__typename?: 'DeleteTestimonialPayload';
	clientMutationId?: Maybe<Scalars['String']>;
	/** The ID of the deleted object */
	deletedId?: Maybe<Scalars['ID']>;
	/** The object before it was deleted */
	testimonial?: Maybe<Testimonial>;
};

/** Input for the deleteUser mutation */
export type DeleteUserInput = {
	clientMutationId?: Maybe<Scalars['String']>;
	/** The ID of the user you want to delete */
	id: Scalars['ID'];
	/** Reassign posts and links to new User ID. */
	reassignId?: Maybe<Scalars['ID']>;
};

/** The payload for the deleteUser mutation */
export type DeleteUserPayload = {
	__typename?: 'DeleteUserPayload';
	clientMutationId?: Maybe<Scalars['String']>;
	/** The ID of the user that you just deleted */
	deletedId?: Maybe<Scalars['ID']>;
	/** The deleted user object */
	user?: Maybe<User>;
};

/** Input for the login mutation */
export type LoginInput = {
	clientMutationId?: Maybe<Scalars['String']>;
	/** The plain-text password for the user logging in. */
	password: Scalars['String'];
	/** The username used for login. Typically a unique or email address depending on specific configuration */
	username: Scalars['String'];
};

/** The payload for the login mutation */
export type LoginPayload = {
	__typename?: 'LoginPayload';
	/** JWT Token that can be used in future requests for Authentication */
	authToken?: Maybe<Scalars['String']>;
	clientMutationId?: Maybe<Scalars['String']>;
	/** A JWT token that can be used in future requests to get a refreshed jwtAuthToken. If the refresh token used in a request is revoked or otherwise invalid, a valid Auth token will NOT be issued in the response headers. */
	refreshToken?: Maybe<Scalars['String']>;
	/** The user that was logged in */
	user?: Maybe<User>;
};

/** Input for the refreshJwtAuthToken mutation */
export type RefreshJwtAuthTokenInput = {
	clientMutationId?: Maybe<Scalars['String']>;
	/** A valid, previously issued JWT refresh token. If valid a new Auth token will be provided. If invalid, expired, revoked or otherwise invalid, a new AuthToken will not be provided. */
	jwtRefreshToken: Scalars['String'];
};

/** The payload for the refreshJwtAuthToken mutation */
export type RefreshJwtAuthTokenPayload = {
	__typename?: 'RefreshJwtAuthTokenPayload';
	/** JWT Token that can be used in future requests for Authentication */
	authToken?: Maybe<Scalars['String']>;
	clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the registerUser mutation */
export type RegisterUserInput = {
	/** User's AOL IM account. */
	aim?: Maybe<Scalars['String']>;
	clientMutationId?: Maybe<Scalars['String']>;
	/** A string containing content about the user. */
	description?: Maybe<Scalars['String']>;
	/** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
	displayName?: Maybe<Scalars['String']>;
	/** A string containing the user's email address. */
	email?: Maybe<Scalars['String']>;
	/** 	The user's first name. */
	firstName?: Maybe<Scalars['String']>;
	/** User's Jabber account. */
	jabber?: Maybe<Scalars['String']>;
	/** The user's last name. */
	lastName?: Maybe<Scalars['String']>;
	/** User's locale. */
	locale?: Maybe<Scalars['String']>;
	/** A string that contains a URL-friendly name for the user. The default is the user's username. */
	nicename?: Maybe<Scalars['String']>;
	/** The user's nickname, defaults to the user's username. */
	nickname?: Maybe<Scalars['String']>;
	/** A string that contains the plain text password for the user. */
	password?: Maybe<Scalars['String']>;
	/** If true, this will refresh the users JWT secret. */
	refreshJwtUserSecret?: Maybe<Scalars['Boolean']>;
	/** The date the user registered. Format is Y-m-d H:i:s. */
	registered?: Maybe<Scalars['String']>;
	/** If true, this will revoke the users JWT secret. If false, this will unrevoke the JWT secret AND issue a new one. To revoke, the user must have proper capabilities to edit users JWT secrets. */
	revokeJwtUserSecret?: Maybe<Scalars['Boolean']>;
	/** A string for whether to enable the rich editor or not. False if not empty. */
	richEditing?: Maybe<Scalars['String']>;
	/** A string that contains the user's username. */
	username: Scalars['String'];
	/** A string containing the user's URL for the user's web site. */
	websiteUrl?: Maybe<Scalars['String']>;
	/** User's Yahoo IM account. */
	yim?: Maybe<Scalars['String']>;
};

/** The payload for the registerUser mutation */
export type RegisterUserPayload = {
	__typename?: 'RegisterUserPayload';
	clientMutationId?: Maybe<Scalars['String']>;
	user?: Maybe<User>;
};

/** Input for the resetUserPassword mutation */
export type ResetUserPasswordInput = {
	clientMutationId?: Maybe<Scalars['String']>;
	/** Password reset key */
	key?: Maybe<Scalars['String']>;
	/** The user's login (username). */
	login?: Maybe<Scalars['String']>;
	/** The new password. */
	password?: Maybe<Scalars['String']>;
};

/** The payload for the resetUserPassword mutation */
export type ResetUserPasswordPayload = {
	__typename?: 'ResetUserPasswordPayload';
	clientMutationId?: Maybe<Scalars['String']>;
	user?: Maybe<User>;
};

/** Input for the restoreComment mutation */
export type RestoreCommentInput = {
	clientMutationId?: Maybe<Scalars['String']>;
	/** The ID of the comment to be restored */
	id: Scalars['ID'];
};

/** The payload for the restoreComment mutation */
export type RestoreCommentPayload = {
	__typename?: 'RestoreCommentPayload';
	clientMutationId?: Maybe<Scalars['String']>;
	/** The restored comment object */
	comment?: Maybe<Comment>;
	/** The ID of the restored comment */
	restoredId?: Maybe<Scalars['ID']>;
};

/** Input for the sendEmail mutation */
export type SendEmailInput = {
	/** Body of email */
	body?: Maybe<Scalars['String']>;
	clientMutationId?: Maybe<Scalars['String']>;
	/** Who to send the email from */
	from?: Maybe<Scalars['String']>;
	/** Reply to address */
	replyTo?: Maybe<Scalars['String']>;
	/** Subject of email */
	subject?: Maybe<Scalars['String']>;
	/** Who to send the email to */
	to?: Maybe<Scalars['String']>;
};

/** The payload for the sendEmail mutation */
export type SendEmailPayload = {
	__typename?: 'SendEmailPayload';
	clientMutationId?: Maybe<Scalars['String']>;
	/** Message */
	message?: Maybe<Scalars['String']>;
	/** Origin that sent the request */
	origin?: Maybe<Scalars['String']>;
	/** reply To address used */
	replyTo?: Maybe<Scalars['String']>;
	/** Was the email sent */
	sent?: Maybe<Scalars['Boolean']>;
	/** Who the email got sent to */
	to?: Maybe<Scalars['String']>;
};

/** Input for the sendPasswordResetEmail mutation */
export type SendPasswordResetEmailInput = {
	clientMutationId?: Maybe<Scalars['String']>;
	/** A string that contains the user's username or email address. */
	username: Scalars['String'];
};

/** The payload for the sendPasswordResetEmail mutation */
export type SendPasswordResetEmailPayload = {
	__typename?: 'SendPasswordResetEmailPayload';
	clientMutationId?: Maybe<Scalars['String']>;
	/** The user that the password reset email was sent to */
	user?: Maybe<User>;
};

/** Input for the submitForm mutation */
export type SubmitFormInput = {
	clientMutationId?: Maybe<Scalars['String']>;
	/** Submited form data */
	data?: Maybe<Array<Maybe<InputField>>>;
	/** Submited form Id */
	formId?: Maybe<Scalars['Int']>;
};

/** Submitted field data */
export type InputField = {
	/** Field Id */
	id?: Maybe<Scalars['Int']>;
	/** Field value */
	value?: Maybe<Scalars['String']>;
};

/** The payload for the submitForm mutation */
export type SubmitFormPayload = {
	__typename?: 'SubmitFormPayload';
	clientMutationId?: Maybe<Scalars['String']>;
	/** Field errors */
	errors?: Maybe<Array<Maybe<FieldError>>>;
	/** Generic operation message */
	message?: Maybe<Scalars['String']>;
	/** Form submitted successfuly */
	success?: Maybe<Scalars['Boolean']>;
};

/** Type of ID being used identify the form */
export type FieldError = {
	__typename?: 'FieldError';
	/** Field Id */
	fieldId: Scalars['Int'];
	/** Localized error message */
	message?: Maybe<Scalars['String']>;
	/** Slug error identifier */
	slug?: Maybe<Scalars['String']>;
};

/** Input for the updateAbout mutation */
export type UpdateAboutInput = {
	/** The userId to assign as the author of the object */
	authorId?: Maybe<Scalars['ID']>;
	/** Set connections between the about and categories */
	categories?: Maybe<AboutCategoriesInput>;
	clientMutationId?: Maybe<Scalars['String']>;
	/** The comment status for the object */
	commentStatus?: Maybe<Scalars['String']>;
	/** The content of the object */
	content?: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: Maybe<Scalars['String']>;
	/** The excerpt of the object */
	excerpt?: Maybe<Scalars['String']>;
	/** The ID of the about object */
	id: Scalars['ID'];
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: Maybe<Scalars['Int']>;
	/** The password used to protect the content of the object */
	password?: Maybe<Scalars['String']>;
	/** The ping status for the object */
	pingStatus?: Maybe<Scalars['String']>;
	/** URLs that have been pinged. */
	pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Set connections between the about and postFormats */
	postFormats?: Maybe<AboutPostFormatsInput>;
	/** The slug of the object */
	slug?: Maybe<Scalars['String']>;
	/** The status of the object */
	status?: Maybe<PostStatusEnum>;
	/** The title of the object */
	title?: Maybe<Scalars['String']>;
	/** URLs queued to be pinged. */
	toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** The payload for the updateAbout mutation */
export type UpdateAboutPayload = {
	__typename?: 'UpdateAboutPayload';
	about?: Maybe<About>;
	clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the updateComment mutation */
export type UpdateCommentInput = {
	/** The approval status of the comment. */
	approved?: Maybe<Scalars['String']>;
	/** The name of the comment's author. */
	author?: Maybe<Scalars['String']>;
	/** The email of the comment's author. */
	authorEmail?: Maybe<Scalars['String']>;
	/** The url of the comment's author. */
	authorUrl?: Maybe<Scalars['String']>;
	clientMutationId?: Maybe<Scalars['String']>;
	/** The ID of the post object the comment belongs to. */
	commentOn?: Maybe<Scalars['Int']>;
	/** Content of the comment. */
	content?: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: Maybe<Scalars['String']>;
	/** The ID of the comment being updated. */
	id: Scalars['ID'];
	/** Parent comment of current comment. */
	parent?: Maybe<Scalars['ID']>;
	/** Type of comment. */
	type?: Maybe<Scalars['String']>;
};

/** The payload for the updateComment mutation */
export type UpdateCommentPayload = {
	__typename?: 'UpdateCommentPayload';
	clientMutationId?: Maybe<Scalars['String']>;
	/** The comment that was created */
	comment?: Maybe<Comment>;
	/** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
	success?: Maybe<Scalars['Boolean']>;
};

/** Input for the updateConsultant mutation */
export type UpdateConsultantInput = {
	/** The userId to assign as the author of the object */
	authorId?: Maybe<Scalars['ID']>;
	/** Set connections between the consultant and categories */
	categories?: Maybe<ConsultantCategoriesInput>;
	clientMutationId?: Maybe<Scalars['String']>;
	/** The comment status for the object */
	commentStatus?: Maybe<Scalars['String']>;
	/** The content of the object */
	content?: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: Maybe<Scalars['String']>;
	/** The excerpt of the object */
	excerpt?: Maybe<Scalars['String']>;
	/** The ID of the consultant object */
	id: Scalars['ID'];
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: Maybe<Scalars['Int']>;
	/** The password used to protect the content of the object */
	password?: Maybe<Scalars['String']>;
	/** The ping status for the object */
	pingStatus?: Maybe<Scalars['String']>;
	/** URLs that have been pinged. */
	pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Set connections between the consultant and postFormats */
	postFormats?: Maybe<ConsultantPostFormatsInput>;
	/** The slug of the object */
	slug?: Maybe<Scalars['String']>;
	/** The status of the object */
	status?: Maybe<PostStatusEnum>;
	/** The title of the object */
	title?: Maybe<Scalars['String']>;
	/** URLs queued to be pinged. */
	toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** The payload for the updateConsultant mutation */
export type UpdateConsultantPayload = {
	__typename?: 'UpdateConsultantPayload';
	clientMutationId?: Maybe<Scalars['String']>;
	consultant?: Maybe<Consultant>;
};

/** Input for the updateContactForm mutation */
export type UpdateContactFormInput = {
	/** Set connections between the contactForm and categories */
	categories?: Maybe<ContactFormCategoriesInput>;
	clientMutationId?: Maybe<Scalars['String']>;
	/** The content of the object */
	content?: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: Maybe<Scalars['String']>;
	/** The ID of the contactForm object */
	id: Scalars['ID'];
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: Maybe<Scalars['Int']>;
	/** The password used to protect the content of the object */
	password?: Maybe<Scalars['String']>;
	/** The slug of the object */
	slug?: Maybe<Scalars['String']>;
	/** The status of the object */
	status?: Maybe<PostStatusEnum>;
	/** The title of the object */
	title?: Maybe<Scalars['String']>;
};

/** The payload for the updateContactForm mutation */
export type UpdateContactFormPayload = {
	__typename?: 'UpdateContactFormPayload';
	clientMutationId?: Maybe<Scalars['String']>;
	contactForm?: Maybe<ContactForm>;
};

/** Input for the updateMediaItem mutation */
export type UpdateMediaItemInput = {
	/** Alternative text to display when mediaItem is not displayed */
	altText?: Maybe<Scalars['String']>;
	/** The userId to assign as the author of the mediaItem */
	authorId?: Maybe<Scalars['ID']>;
	/** The caption for the mediaItem */
	caption?: Maybe<Scalars['String']>;
	clientMutationId?: Maybe<Scalars['String']>;
	/** The comment status for the mediaItem */
	commentStatus?: Maybe<Scalars['String']>;
	/** The date of the mediaItem */
	date?: Maybe<Scalars['String']>;
	/** The date (in GMT zone) of the mediaItem */
	dateGmt?: Maybe<Scalars['String']>;
	/** Description of the mediaItem */
	description?: Maybe<Scalars['String']>;
	/** The file name of the mediaItem */
	filePath?: Maybe<Scalars['String']>;
	/** The file type of the mediaItem */
	fileType?: Maybe<MimeTypeEnum>;
	/** The ID of the mediaItem object */
	id: Scalars['ID'];
	/** The WordPress post ID or the graphQL postId of the parent object */
	parentId?: Maybe<Scalars['ID']>;
	/** The ping status for the mediaItem */
	pingStatus?: Maybe<Scalars['String']>;
	/** The slug of the mediaItem */
	slug?: Maybe<Scalars['String']>;
	/** The status of the mediaItem */
	status?: Maybe<MediaItemStatusEnum>;
	/** The title of the mediaItem */
	title?: Maybe<Scalars['String']>;
};

/** The payload for the updateMediaItem mutation */
export type UpdateMediaItemPayload = {
	__typename?: 'UpdateMediaItemPayload';
	clientMutationId?: Maybe<Scalars['String']>;
	mediaItem?: Maybe<MediaItem>;
};

/** Input for the updatePage mutation */
export type UpdatePageInput = {
	/** The userId to assign as the author of the object */
	authorId?: Maybe<Scalars['ID']>;
	clientMutationId?: Maybe<Scalars['String']>;
	/** The comment status for the object */
	commentStatus?: Maybe<Scalars['String']>;
	/** The content of the object */
	content?: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: Maybe<Scalars['String']>;
	/** The ID of the page object */
	id: Scalars['ID'];
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: Maybe<Scalars['Int']>;
	/** The ID of the parent object */
	parentId?: Maybe<Scalars['ID']>;
	/** The password used to protect the content of the object */
	password?: Maybe<Scalars['String']>;
	/** The slug of the object */
	slug?: Maybe<Scalars['String']>;
	/** The status of the object */
	status?: Maybe<PostStatusEnum>;
	/** The title of the object */
	title?: Maybe<Scalars['String']>;
};

/** The payload for the updatePage mutation */
export type UpdatePagePayload = {
	__typename?: 'UpdatePagePayload';
	clientMutationId?: Maybe<Scalars['String']>;
	page?: Maybe<Page>;
};

/** Input for the updatePosition mutation */
export type UpdatePositionInput = {
	/** The userId to assign as the author of the object */
	authorId?: Maybe<Scalars['ID']>;
	/** Set connections between the position and categories */
	categories?: Maybe<PositionCategoriesInput>;
	clientMutationId?: Maybe<Scalars['String']>;
	/** The comment status for the object */
	commentStatus?: Maybe<Scalars['String']>;
	/** The content of the object */
	content?: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: Maybe<Scalars['String']>;
	/** The excerpt of the object */
	excerpt?: Maybe<Scalars['String']>;
	/** The ID of the position object */
	id: Scalars['ID'];
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: Maybe<Scalars['Int']>;
	/** The password used to protect the content of the object */
	password?: Maybe<Scalars['String']>;
	/** The ping status for the object */
	pingStatus?: Maybe<Scalars['String']>;
	/** URLs that have been pinged. */
	pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Set connections between the position and postFormats */
	postFormats?: Maybe<PositionPostFormatsInput>;
	/** The slug of the object */
	slug?: Maybe<Scalars['String']>;
	/** The status of the object */
	status?: Maybe<PostStatusEnum>;
	/** The title of the object */
	title?: Maybe<Scalars['String']>;
	/** URLs queued to be pinged. */
	toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** The payload for the updatePosition mutation */
export type UpdatePositionPayload = {
	__typename?: 'UpdatePositionPayload';
	clientMutationId?: Maybe<Scalars['String']>;
	position?: Maybe<Position>;
};

/** Input for the updatePost mutation */
export type UpdatePostInput = {
	/** The userId to assign as the author of the object */
	authorId?: Maybe<Scalars['ID']>;
	/** Set connections between the post and categories */
	categories?: Maybe<PostCategoriesInput>;
	clientMutationId?: Maybe<Scalars['String']>;
	/** The comment status for the object */
	commentStatus?: Maybe<Scalars['String']>;
	/** The content of the object */
	content?: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: Maybe<Scalars['String']>;
	/** The excerpt of the object */
	excerpt?: Maybe<Scalars['String']>;
	/** The ID of the post object */
	id: Scalars['ID'];
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: Maybe<Scalars['Int']>;
	/** The password used to protect the content of the object */
	password?: Maybe<Scalars['String']>;
	/** The ping status for the object */
	pingStatus?: Maybe<Scalars['String']>;
	/** URLs that have been pinged. */
	pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Set connections between the post and postFormats */
	postFormats?: Maybe<PostPostFormatsInput>;
	/** The slug of the object */
	slug?: Maybe<Scalars['String']>;
	/** The status of the object */
	status?: Maybe<PostStatusEnum>;
	/** Set connections between the post and tags */
	tags?: Maybe<PostTagsInput>;
	/** The title of the object */
	title?: Maybe<Scalars['String']>;
	/** URLs queued to be pinged. */
	toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** The payload for the updatePost mutation */
export type UpdatePostPayload = {
	__typename?: 'UpdatePostPayload';
	clientMutationId?: Maybe<Scalars['String']>;
	post?: Maybe<Post>;
};

/** Input for the updateSettings mutation */
export type UpdateSettingsInput = {
	clientMutationId?: Maybe<Scalars['String']>;
	/** Allow people to submit comments on new posts. */
	discussionSettingsDefaultCommentStatus?: Maybe<Scalars['String']>;
	/** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
	discussionSettingsDefaultPingStatus?: Maybe<Scalars['String']>;
	/** A date format for all date strings. */
	generalSettingsDateFormat?: Maybe<Scalars['String']>;
	/** Site tagline. */
	generalSettingsDescription?: Maybe<Scalars['String']>;
	/** This address is used for admin purposes, like new user notification. */
	generalSettingsEmail?: Maybe<Scalars['String']>;
	/** WordPress locale code. */
	generalSettingsLanguage?: Maybe<Scalars['String']>;
	/** A day number of the week that the week should start on. */
	generalSettingsStartOfWeek?: Maybe<Scalars['Int']>;
	/** A time format for all time strings. */
	generalSettingsTimeFormat?: Maybe<Scalars['String']>;
	/** A city in the same timezone as you. */
	generalSettingsTimezone?: Maybe<Scalars['String']>;
	/** Site title. */
	generalSettingsTitle?: Maybe<Scalars['String']>;
	/** Site URL. */
	generalSettingsUrl?: Maybe<Scalars['String']>;
	/** Blog pages show at most. */
	readingSettingsPostsPerPage?: Maybe<Scalars['Int']>;
	/** Default post category. */
	writingSettingsDefaultCategory?: Maybe<Scalars['Int']>;
	/** Default post format. */
	writingSettingsDefaultPostFormat?: Maybe<Scalars['String']>;
	/** Convert emoticons like :-) and :-P to graphics on display. */
	writingSettingsUseSmilies?: Maybe<Scalars['Boolean']>;
};

/** The payload for the updateSettings mutation */
export type UpdateSettingsPayload = {
	__typename?: 'UpdateSettingsPayload';
	allSettings?: Maybe<Settings>;
	clientMutationId?: Maybe<Scalars['String']>;
	discussionSettings?: Maybe<DiscussionSettings>;
	generalSettings?: Maybe<GeneralSettings>;
	readingSettings?: Maybe<ReadingSettings>;
	writingSettings?: Maybe<WritingSettings>;
};

/** Input for the updateTestimonial mutation */
export type UpdateTestimonialInput = {
	/** The userId to assign as the author of the object */
	authorId?: Maybe<Scalars['ID']>;
	/** Set connections between the testimonial and categories */
	categories?: Maybe<TestimonialCategoriesInput>;
	clientMutationId?: Maybe<Scalars['String']>;
	/** The comment status for the object */
	commentStatus?: Maybe<Scalars['String']>;
	/** The content of the object */
	content?: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: Maybe<Scalars['String']>;
	/** The excerpt of the object */
	excerpt?: Maybe<Scalars['String']>;
	/** The ID of the testimonial object */
	id: Scalars['ID'];
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: Maybe<Scalars['Int']>;
	/** The password used to protect the content of the object */
	password?: Maybe<Scalars['String']>;
	/** The ping status for the object */
	pingStatus?: Maybe<Scalars['String']>;
	/** URLs that have been pinged. */
	pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Set connections between the testimonial and postFormats */
	postFormats?: Maybe<TestimonialPostFormatsInput>;
	/** The slug of the object */
	slug?: Maybe<Scalars['String']>;
	/** The status of the object */
	status?: Maybe<PostStatusEnum>;
	/** The title of the object */
	title?: Maybe<Scalars['String']>;
	/** URLs queued to be pinged. */
	toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** The payload for the updateTestimonial mutation */
export type UpdateTestimonialPayload = {
	__typename?: 'UpdateTestimonialPayload';
	clientMutationId?: Maybe<Scalars['String']>;
	testimonial?: Maybe<Testimonial>;
};

/** Input for the updateUser mutation */
export type UpdateUserInput = {
	/** User's AOL IM account. */
	aim?: Maybe<Scalars['String']>;
	clientMutationId?: Maybe<Scalars['String']>;
	/** A string containing content about the user. */
	description?: Maybe<Scalars['String']>;
	/** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
	displayName?: Maybe<Scalars['String']>;
	/** A string containing the user's email address. */
	email?: Maybe<Scalars['String']>;
	/** 	The user's first name. */
	firstName?: Maybe<Scalars['String']>;
	/** The ID of the user */
	id: Scalars['ID'];
	/** User's Jabber account. */
	jabber?: Maybe<Scalars['String']>;
	/** The user's last name. */
	lastName?: Maybe<Scalars['String']>;
	/** User's locale. */
	locale?: Maybe<Scalars['String']>;
	/** A string that contains a URL-friendly name for the user. The default is the user's username. */
	nicename?: Maybe<Scalars['String']>;
	/** The user's nickname, defaults to the user's username. */
	nickname?: Maybe<Scalars['String']>;
	/** A string that contains the plain text password for the user. */
	password?: Maybe<Scalars['String']>;
	/** If true, this will refresh the users JWT secret. */
	refreshJwtUserSecret?: Maybe<Scalars['Boolean']>;
	/** The date the user registered. Format is Y-m-d H:i:s. */
	registered?: Maybe<Scalars['String']>;
	/** If true, this will revoke the users JWT secret. If false, this will unrevoke the JWT secret AND issue a new one. To revoke, the user must have proper capabilities to edit users JWT secrets. */
	revokeJwtUserSecret?: Maybe<Scalars['Boolean']>;
	/** A string for whether to enable the rich editor or not. False if not empty. */
	richEditing?: Maybe<Scalars['String']>;
	/** An array of roles to be assigned to the user. */
	roles?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** A string containing the user's URL for the user's web site. */
	websiteUrl?: Maybe<Scalars['String']>;
	/** User's Yahoo IM account. */
	yim?: Maybe<Scalars['String']>;
};

/** The payload for the updateUser mutation */
export type UpdateUserPayload = {
	__typename?: 'UpdateUserPayload';
	clientMutationId?: Maybe<Scalars['String']>;
	user?: Maybe<User>;
};

/** A Comment Author object */
export type CommentAuthor = Node &
	Commenter & {
		__typename?: 'CommentAuthor';
		/** Identifies the primary key from the database. */
		databaseId: Scalars['Int'];
		/** The email for the comment author */
		email?: Maybe<Scalars['String']>;
		/** The globally unique identifier for the comment author object */
		id: Scalars['ID'];
		/** Whether the object is restricted from the current viewer */
		isRestricted?: Maybe<Scalars['Boolean']>;
		/** The name for the comment author. */
		name?: Maybe<Scalars['String']>;
		/** The url the comment author. */
		url?: Maybe<Scalars['String']>;
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
	id?: Maybe<Scalars['Int']>;
	/** The menu location for the menu being queried */
	location?: Maybe<MenuLocationEnum>;
};

export type PostObjectUnion =
	| Post
	| Page
	| MediaItem
	| Testimonial
	| About
	| Consultant
	| Position
	| ContactForm;

export type TermObjectUnion = Category | Tag | PostFormat;

/** The template assigned to the node */
export type DefaultTemplate = ContentTemplate & {
	__typename?: 'DefaultTemplate';
	/** The name of the template */
	templateName?: Maybe<Scalars['String']>;
};

/** The template assigned to the node */
export type CoverTemplate = ContentTemplate & {
	__typename?: 'CoverTemplate';
	/** The name of the template */
	templateName?: Maybe<Scalars['String']>;
};

/** The template assigned to the node */
export type FullWidthTemplate = ContentTemplate & {
	__typename?: 'FullWidthTemplate';
	/** The name of the template */
	templateName?: Maybe<Scalars['String']>;
};

/** Custom Class Names */
export type AddressFieldClasses = {
	__typename?: 'AddressFieldClasses';
	/** Container */
	containerClass?: Maybe<Scalars['String']>;
	/** Element */
	elementClass?: Maybe<Scalars['String']>;
};

/** Limit Input to this Number */
export type AddressFieldInputLimitSet = {
	__typename?: 'AddressFieldInputLimitSet';
	inputLimit?: Maybe<Scalars['String']>;
	/** Text to Appear After Counter */
	inputLimitMsg?: Maybe<Scalars['String']>;
	inputLimitType?: Maybe<Scalars['String']>;
};

/** Help Text */
export type AddressFieldHelp = {
	__typename?: 'AddressFieldHelp';
	helpText?: Maybe<Scalars['String']>;
};

/** Description */
export type AddressFieldDescription = {
	__typename?: 'AddressFieldDescription';
	descText?: Maybe<Scalars['String']>;
};

/** Address */
export type AddressField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'AddressField';
		/** Admin Label */
		adminLabel?: Maybe<Scalars['String']>;
		/** Custom Class Names */
		classes?: Maybe<AddressFieldClasses>;
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** Custom Mask */
		customMask?: Maybe<Scalars['String']>;
		/** Custom Name Attribute */
		customNameAttribute?: Maybe<Scalars['String']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** Default Value */
		default?: Maybe<Scalars['String']>;
		/** Description */
		description?: Maybe<AddressFieldDescription>;
		/** Disable Browser Autocomplete */
		disableBrowserAutocomplete?: Maybe<Scalars['Boolean']>;
		/** Disable Input */
		disableInput?: Maybe<Scalars['Boolean']>;
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** Help Text */
		help?: Maybe<AddressFieldHelp>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Limit Input to this Number */
		inputLimitSet?: Maybe<AddressFieldInputLimitSet>;
		/** Field Key */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		/** Label Position */
		labelPos?: Maybe<Scalars['String']>;
		/** manual_key */
		manualKey?: Maybe<Scalars['String']>;
		/** Input Mask */
		mask?: Maybe<Scalars['String']>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** This Field Is Personally Identifiable Data */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** Placeholder */
		placeholder?: Maybe<Scalars['String']>;
		/** Required Field */
		required?: Maybe<Scalars['Boolean']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};

/** Custom Class Names */
export type Address2FieldClasses = {
	__typename?: 'Address2FieldClasses';
	/** Container */
	containerClass?: Maybe<Scalars['String']>;
	/** Element */
	elementClass?: Maybe<Scalars['String']>;
};

/** Limit Input to this Number */
export type Address2FieldInputLimitSet = {
	__typename?: 'Address2FieldInputLimitSet';
	inputLimit?: Maybe<Scalars['String']>;
	/** Text to Appear After Counter */
	inputLimitMsg?: Maybe<Scalars['String']>;
	inputLimitType?: Maybe<Scalars['String']>;
};

/** Help Text */
export type Address2FieldHelp = {
	__typename?: 'Address2FieldHelp';
	helpText?: Maybe<Scalars['String']>;
};

/** Description */
export type Address2FieldDescription = {
	__typename?: 'Address2FieldDescription';
	descText?: Maybe<Scalars['String']>;
};

/** Address 2 */
export type Address2Field = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'Address2Field';
		/** Admin Label */
		adminLabel?: Maybe<Scalars['String']>;
		/** Custom Class Names */
		classes?: Maybe<Address2FieldClasses>;
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** Custom Mask */
		customMask?: Maybe<Scalars['String']>;
		/** Custom Name Attribute */
		customNameAttribute?: Maybe<Scalars['String']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** Default Value */
		default?: Maybe<Scalars['String']>;
		/** Description */
		description?: Maybe<Address2FieldDescription>;
		/** Disable Browser Autocomplete */
		disableBrowserAutocomplete?: Maybe<Scalars['Boolean']>;
		/** Disable Input */
		disableInput?: Maybe<Scalars['Boolean']>;
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** Help Text */
		help?: Maybe<Address2FieldHelp>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Limit Input to this Number */
		inputLimitSet?: Maybe<Address2FieldInputLimitSet>;
		/** Field Key */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		/** Label Position */
		labelPos?: Maybe<Scalars['String']>;
		/** manual_key */
		manualKey?: Maybe<Scalars['String']>;
		/** Input Mask */
		mask?: Maybe<Scalars['String']>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** This Field Is Personally Identifiable Data */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** Placeholder */
		placeholder?: Maybe<Scalars['String']>;
		/** Required Field */
		required?: Maybe<Scalars['Boolean']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};

/** Button */
export type ButtonField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'ButtonField';
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Key of the field */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** Indtifiable? */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** The field is required? */
		required?: Maybe<Scalars['Boolean']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};

/** Custom Class Names */
export type CheckboxFieldClasses = {
	__typename?: 'CheckboxFieldClasses';
	/** Container */
	containerClass?: Maybe<Scalars['String']>;
	/** Element */
	elementClass?: Maybe<Scalars['String']>;
};

/** Help Text */
export type CheckboxFieldHelp = {
	__typename?: 'CheckboxFieldHelp';
	helpText?: Maybe<Scalars['String']>;
};

/** Description */
export type CheckboxFieldDescription = {
	__typename?: 'CheckboxFieldDescription';
	descText?: Maybe<Scalars['String']>;
};

/** Checkbox Values */
export type CheckboxFieldCheckboxValues = {
	__typename?: 'CheckboxFieldCheckboxValues';
	/** Checked Value */
	checkedValue?: Maybe<Scalars['String']>;
	/** Unchecked Value */
	uncheckedValue?: Maybe<Scalars['String']>;
};

/** Single Checkbox */
export type CheckboxField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'CheckboxField';
		/** Admin Label */
		adminLabel?: Maybe<Scalars['String']>;
		/** Checkbox Values */
		checkboxValues?: Maybe<CheckboxFieldCheckboxValues>;
		/** Checked Calculation Value */
		checkedCalcValue?: Maybe<Scalars['String']>;
		/** Custom Class Names */
		classes?: Maybe<CheckboxFieldClasses>;
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** Default Value */
		defaultValue?: Maybe<Scalars['String']>;
		/** Description */
		description?: Maybe<CheckboxFieldDescription>;
		/** Disable Input */
		disableInput?: Maybe<Scalars['Boolean']>;
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** Help Text */
		help?: Maybe<CheckboxFieldHelp>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Field Key */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		/** Label Position */
		labelPos?: Maybe<Scalars['String']>;
		/** manual_key */
		manualKey?: Maybe<Scalars['String']>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** Indtifiable? */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** Required Field */
		required?: Maybe<Scalars['Boolean']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Unchecked Calculation Value */
		uncheckedCalcValue?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};

/** Custom Class Names */
export type CityFieldClasses = {
	__typename?: 'CityFieldClasses';
	/** Container */
	containerClass?: Maybe<Scalars['String']>;
	/** Element */
	elementClass?: Maybe<Scalars['String']>;
};

/** Limit Input to this Number */
export type CityFieldInputLimitSet = {
	__typename?: 'CityFieldInputLimitSet';
	inputLimit?: Maybe<Scalars['String']>;
	/** Text to Appear After Counter */
	inputLimitMsg?: Maybe<Scalars['String']>;
	inputLimitType?: Maybe<Scalars['String']>;
};

/** Help Text */
export type CityFieldHelp = {
	__typename?: 'CityFieldHelp';
	helpText?: Maybe<Scalars['String']>;
};

/** Description */
export type CityFieldDescription = {
	__typename?: 'CityFieldDescription';
	descText?: Maybe<Scalars['String']>;
};

/** City */
export type CityField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'CityField';
		/** Admin Label */
		adminLabel?: Maybe<Scalars['String']>;
		/** Custom Class Names */
		classes?: Maybe<CityFieldClasses>;
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** Custom Mask */
		customMask?: Maybe<Scalars['String']>;
		/** Custom Name Attribute */
		customNameAttribute?: Maybe<Scalars['String']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** Default Value */
		default?: Maybe<Scalars['String']>;
		/** Description */
		description?: Maybe<CityFieldDescription>;
		/** Disable Browser Autocomplete */
		disableBrowserAutocomplete?: Maybe<Scalars['Boolean']>;
		/** Disable Input */
		disableInput?: Maybe<Scalars['Boolean']>;
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** Help Text */
		help?: Maybe<CityFieldHelp>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Limit Input to this Number */
		inputLimitSet?: Maybe<CityFieldInputLimitSet>;
		/** Field Key */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		/** Label Position */
		labelPos?: Maybe<Scalars['String']>;
		/** manual_key */
		manualKey?: Maybe<Scalars['String']>;
		/** Input Mask */
		mask?: Maybe<Scalars['String']>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** This Field Is Personally Identifiable Data */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** Placeholder */
		placeholder?: Maybe<Scalars['String']>;
		/** Required Field */
		required?: Maybe<Scalars['Boolean']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};

/** Custom Class Names */
export type ConfirmFieldClasses = {
	__typename?: 'ConfirmFieldClasses';
	/** Container */
	containerClass?: Maybe<Scalars['String']>;
	/** Element */
	elementClass?: Maybe<Scalars['String']>;
};

/** Limit Input to this Number */
export type ConfirmFieldInputLimitSet = {
	__typename?: 'ConfirmFieldInputLimitSet';
	inputLimit?: Maybe<Scalars['String']>;
	/** Text to Appear After Counter */
	inputLimitMsg?: Maybe<Scalars['String']>;
	inputLimitType?: Maybe<Scalars['String']>;
};

/** Help Text */
export type ConfirmFieldHelp = {
	__typename?: 'ConfirmFieldHelp';
	helpText?: Maybe<Scalars['String']>;
};

/** Description */
export type ConfirmFieldDescription = {
	__typename?: 'ConfirmFieldDescription';
	descText?: Maybe<Scalars['String']>;
};

/** Confirm */
export type ConfirmField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'ConfirmField';
		/** Admin Label */
		adminLabel?: Maybe<Scalars['String']>;
		/** Custom Class Names */
		classes?: Maybe<ConfirmFieldClasses>;
		/** Confirm */
		confirmField?: Maybe<Scalars['String']>;
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** Default Value */
		default?: Maybe<Scalars['String']>;
		/** Description */
		description?: Maybe<ConfirmFieldDescription>;
		/** Disable Input */
		disableInput?: Maybe<Scalars['Boolean']>;
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** Help Text */
		help?: Maybe<ConfirmFieldHelp>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Limit Input to this Number */
		inputLimitSet?: Maybe<ConfirmFieldInputLimitSet>;
		/** Field Key */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		/** Label Position */
		labelPos?: Maybe<Scalars['String']>;
		/** manual_key */
		manualKey?: Maybe<Scalars['String']>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** Indtifiable? */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** Placeholder */
		placeholder?: Maybe<Scalars['String']>;
		/** Required Field */
		required?: Maybe<Scalars['Boolean']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};

/** Custom Class Names */
export type DateFieldClasses = {
	__typename?: 'DateFieldClasses';
	/** Container */
	containerClass?: Maybe<Scalars['String']>;
	/** Element */
	elementClass?: Maybe<Scalars['String']>;
};

/** Help Text */
export type DateFieldHelp = {
	__typename?: 'DateFieldHelp';
	helpText?: Maybe<Scalars['String']>;
};

/** Description */
export type DateFieldDescription = {
	__typename?: 'DateFieldDescription';
	descText?: Maybe<Scalars['String']>;
};

/** Year Range */
export type DateFieldYearRange = {
	__typename?: 'DateFieldYearRange';
	/** End Year */
	yearRangeEnd?: Maybe<Scalars['Int']>;
	/** Start Year */
	yearRangeStart?: Maybe<Scalars['Int']>;
};

/** Date */
export type DateField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'DateField';
		/** Admin Label */
		adminLabel?: Maybe<Scalars['String']>;
		/** Custom Class Names */
		classes?: Maybe<DateFieldClasses>;
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** Default To Current Date */
		dateDefault?: Maybe<Scalars['Boolean']>;
		/** Format */
		dateFormat?: Maybe<Scalars['String']>;
		/** Description */
		description?: Maybe<DateFieldDescription>;
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** Help Text */
		help?: Maybe<DateFieldHelp>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Field Key */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		/** Label Position */
		labelPos?: Maybe<Scalars['String']>;
		/** manual_key */
		manualKey?: Maybe<Scalars['String']>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** Indtifiable? */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** Placeholder */
		placeholder?: Maybe<Scalars['String']>;
		/** Required Field */
		required?: Maybe<Scalars['Boolean']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
		/** Year Range */
		yearRange?: Maybe<DateFieldYearRange>;
	};

/** Custom Class Names */
export type EmailFieldClasses = {
	__typename?: 'EmailFieldClasses';
	/** Container */
	containerClass?: Maybe<Scalars['String']>;
	/** Element */
	elementClass?: Maybe<Scalars['String']>;
};

/** Help Text */
export type EmailFieldHelp = {
	__typename?: 'EmailFieldHelp';
	helpText?: Maybe<Scalars['String']>;
};

/** Description */
export type EmailFieldDescription = {
	__typename?: 'EmailFieldDescription';
	descText?: Maybe<Scalars['String']>;
};

/** Email */
export type EmailField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'EmailField';
		/** Admin Label */
		adminLabel?: Maybe<Scalars['String']>;
		/** Custom Class Names */
		classes?: Maybe<EmailFieldClasses>;
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** Custom Name Attribute */
		customNameAttribute?: Maybe<Scalars['String']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** Default Value */
		default?: Maybe<Scalars['String']>;
		/** Description */
		description?: Maybe<EmailFieldDescription>;
		/** Disable Browser Autocomplete */
		disableBrowserAutocomplete?: Maybe<Scalars['Boolean']>;
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** Help Text */
		help?: Maybe<EmailFieldHelp>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Field Key */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		/** Label Position */
		labelPos?: Maybe<Scalars['String']>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** This Field Is Personally Identifiable Data */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** Placeholder */
		placeholder?: Maybe<Scalars['String']>;
		/** Required Field */
		required?: Maybe<Scalars['Boolean']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};

/** Custom Class Names */
export type FirstnameFieldClasses = {
	__typename?: 'FirstnameFieldClasses';
	/** Container */
	containerClass?: Maybe<Scalars['String']>;
	/** Element */
	elementClass?: Maybe<Scalars['String']>;
};

/** Help Text */
export type FirstnameFieldHelp = {
	__typename?: 'FirstnameFieldHelp';
	helpText?: Maybe<Scalars['String']>;
};

/** Description */
export type FirstnameFieldDescription = {
	__typename?: 'FirstnameFieldDescription';
	descText?: Maybe<Scalars['String']>;
};

/** First Name */
export type FirstnameField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'FirstnameField';
		/** Admin Label */
		adminLabel?: Maybe<Scalars['String']>;
		/** Custom Class Names */
		classes?: Maybe<FirstnameFieldClasses>;
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** Custom Name Attribute */
		customNameAttribute?: Maybe<Scalars['String']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** Default Value */
		default?: Maybe<Scalars['String']>;
		/** Description */
		description?: Maybe<FirstnameFieldDescription>;
		/** Disable Browser Autocomplete */
		disableBrowserAutocomplete?: Maybe<Scalars['Boolean']>;
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** Help Text */
		help?: Maybe<FirstnameFieldHelp>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Field Key */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		/** Label Position */
		labelPos?: Maybe<Scalars['String']>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** This Field Is Personally Identifiable Data */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** Placeholder */
		placeholder?: Maybe<Scalars['String']>;
		/** Required Field */
		required?: Maybe<Scalars['Boolean']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};

/** Custom Class Names */
export type HtmlFieldClasses = {
	__typename?: 'HtmlFieldClasses';
	/** Container */
	containerClass?: Maybe<Scalars['String']>;
	/** Element */
	elementClass?: Maybe<Scalars['String']>;
};

/** HTML */
export type HtmlField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'HtmlField';
		/** Custom Class Names */
		classes?: Maybe<HtmlFieldClasses>;
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** Default Value */
		default?: Maybe<Scalars['String']>;
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Key of the field */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** Indtifiable? */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** The field is required? */
		required?: Maybe<Scalars['Boolean']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};

/** Hidden */
export type HiddenField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'HiddenField';
		/** Admin Label */
		adminLabel?: Maybe<Scalars['String']>;
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** Default Value */
		default?: Maybe<Scalars['String']>;
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Field Key */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** Indtifiable? */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** The field is required? */
		required?: Maybe<Scalars['Boolean']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};

/** Custom Class Names */
export type LastnameFieldClasses = {
	__typename?: 'LastnameFieldClasses';
	/** Container */
	containerClass?: Maybe<Scalars['String']>;
	/** Element */
	elementClass?: Maybe<Scalars['String']>;
};

/** Help Text */
export type LastnameFieldHelp = {
	__typename?: 'LastnameFieldHelp';
	helpText?: Maybe<Scalars['String']>;
};

/** Description */
export type LastnameFieldDescription = {
	__typename?: 'LastnameFieldDescription';
	descText?: Maybe<Scalars['String']>;
};

/** Last Name */
export type LastnameField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'LastnameField';
		/** Admin Label */
		adminLabel?: Maybe<Scalars['String']>;
		/** Custom Class Names */
		classes?: Maybe<LastnameFieldClasses>;
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** Custom Name Attribute */
		customNameAttribute?: Maybe<Scalars['String']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** Default Value */
		default?: Maybe<Scalars['String']>;
		/** Description */
		description?: Maybe<LastnameFieldDescription>;
		/** Disable Browser Autocomplete */
		disableBrowserAutocomplete?: Maybe<Scalars['Boolean']>;
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** Help Text */
		help?: Maybe<LastnameFieldHelp>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Field Key */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		/** Label Position */
		labelPos?: Maybe<Scalars['String']>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** This Field Is Personally Identifiable Data */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** Placeholder */
		placeholder?: Maybe<Scalars['String']>;
		/** Required Field */
		required?: Maybe<Scalars['Boolean']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};

/** Custom Class Names */
export type ListcheckboxFieldClasses = {
	__typename?: 'ListcheckboxFieldClasses';
	/** Container */
	containerClass?: Maybe<Scalars['String']>;
	/** Element */
	elementClass?: Maybe<Scalars['String']>;
};

/** Help Text */
export type ListcheckboxFieldHelp = {
	__typename?: 'ListcheckboxFieldHelp';
	helpText?: Maybe<Scalars['String']>;
};

/** Description */
export type ListcheckboxFieldDescription = {
	__typename?: 'ListcheckboxFieldDescription';
	descText?: Maybe<Scalars['String']>;
};

/** Checkbox List */
export type ListcheckboxField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'ListcheckboxField';
		/** Admin Label */
		adminLabel?: Maybe<Scalars['String']>;
		/** Custom Class Names */
		classes?: Maybe<ListcheckboxFieldClasses>;
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** Description */
		description?: Maybe<ListcheckboxFieldDescription>;
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** Help Text */
		help?: Maybe<ListcheckboxFieldHelp>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Field Key */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		/** Label Position */
		labelPos?: Maybe<Scalars['String']>;
		/** options */
		options?: Maybe<Array<Maybe<Scalars['String']>>>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** Indtifiable? */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** Required Field */
		required?: Maybe<Scalars['Boolean']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};

/** Custom Class Names */
export type ListcountryFieldClasses = {
	__typename?: 'ListcountryFieldClasses';
	/** Container */
	containerClass?: Maybe<Scalars['String']>;
	/** Element */
	elementClass?: Maybe<Scalars['String']>;
};

/** Help Text */
export type ListcountryFieldHelp = {
	__typename?: 'ListcountryFieldHelp';
	helpText?: Maybe<Scalars['String']>;
};

/** Description */
export type ListcountryFieldDescription = {
	__typename?: 'ListcountryFieldDescription';
	descText?: Maybe<Scalars['String']>;
};

/** Country */
export type ListcountryField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'ListcountryField';
		/** Admin Label */
		adminLabel?: Maybe<Scalars['String']>;
		/** Custom Class Names */
		classes?: Maybe<ListcountryFieldClasses>;
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** Default Value */
		default?: Maybe<Scalars['String']>;
		/** Description */
		description?: Maybe<ListcountryFieldDescription>;
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** Help Text */
		help?: Maybe<ListcountryFieldHelp>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Field Key */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		/** Label Position */
		labelPos?: Maybe<Scalars['String']>;
		/** options */
		options?: Maybe<Array<Maybe<Scalars['String']>>>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** Indtifiable? */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** Required Field */
		required?: Maybe<Scalars['Boolean']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};

/** Custom Class Names */
export type ListimageFieldClasses = {
	__typename?: 'ListimageFieldClasses';
	/** Container */
	containerClass?: Maybe<Scalars['String']>;
	/** Element */
	elementClass?: Maybe<Scalars['String']>;
};

/** Help Text */
export type ListimageFieldHelp = {
	__typename?: 'ListimageFieldHelp';
	helpText?: Maybe<Scalars['String']>;
};

/** Description */
export type ListimageFieldDescription = {
	__typename?: 'ListimageFieldDescription';
	descText?: Maybe<Scalars['String']>;
};

/** Select Image */
export type ListimageField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'ListimageField';
		/** Admin Label */
		adminLabel?: Maybe<Scalars['String']>;
		/** Allow Multiple Selections */
		allowMultiSelect?: Maybe<Scalars['Boolean']>;
		/** Custom Class Names */
		classes?: Maybe<ListimageFieldClasses>;
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** Description */
		description?: Maybe<ListimageFieldDescription>;
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** Help Text */
		help?: Maybe<ListimageFieldHelp>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Image Options &lt;a href=&quot;#&quot; class=&quot;nf-add-new&quot;&gt;Add New&lt;/a&gt; */
		imageOptions?: Maybe<Scalars['String']>;
		/** Field Key */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		/** Label Position */
		labelPos?: Maybe<Scalars['String']>;
		/** List Orientation */
		listOrientation?: Maybe<Scalars['String']>;
		/** Number of Columns */
		numColumns?: Maybe<Scalars['Int']>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** Indtifiable? */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** Required Field */
		required?: Maybe<Scalars['Boolean']>;
		/** Show Labels */
		showOptionLabels?: Maybe<Scalars['Boolean']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};

/** Custom Class Names */
export type ListmultiselectFieldClasses = {
	__typename?: 'ListmultiselectFieldClasses';
	/** Container */
	containerClass?: Maybe<Scalars['String']>;
	/** Element */
	elementClass?: Maybe<Scalars['String']>;
};

/** Help Text */
export type ListmultiselectFieldHelp = {
	__typename?: 'ListmultiselectFieldHelp';
	helpText?: Maybe<Scalars['String']>;
};

/** Description */
export type ListmultiselectFieldDescription = {
	__typename?: 'ListmultiselectFieldDescription';
	descText?: Maybe<Scalars['String']>;
};

/** Multi-Select */
export type ListmultiselectField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'ListmultiselectField';
		/** Admin Label */
		adminLabel?: Maybe<Scalars['String']>;
		/** Custom Class Names */
		classes?: Maybe<ListmultiselectFieldClasses>;
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** Description */
		description?: Maybe<ListmultiselectFieldDescription>;
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** Help Text */
		help?: Maybe<ListmultiselectFieldHelp>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Field Key */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		/** Label Position */
		labelPos?: Maybe<Scalars['String']>;
		/** Multi-Select Box Size */
		multiSize?: Maybe<Scalars['Int']>;
		/** options */
		options?: Maybe<Array<Maybe<Scalars['String']>>>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** Indtifiable? */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** Required Field */
		required?: Maybe<Scalars['Boolean']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};

/** Custom Class Names */
export type ListradioFieldClasses = {
	__typename?: 'ListradioFieldClasses';
	/** Container */
	containerClass?: Maybe<Scalars['String']>;
	/** Element */
	elementClass?: Maybe<Scalars['String']>;
};

/** Help Text */
export type ListradioFieldHelp = {
	__typename?: 'ListradioFieldHelp';
	helpText?: Maybe<Scalars['String']>;
};

/** Description */
export type ListradioFieldDescription = {
	__typename?: 'ListradioFieldDescription';
	descText?: Maybe<Scalars['String']>;
};

/** Radio List */
export type ListradioField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'ListradioField';
		/** Admin Label */
		adminLabel?: Maybe<Scalars['String']>;
		/** Custom Class Names */
		classes?: Maybe<ListradioFieldClasses>;
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** Description */
		description?: Maybe<ListradioFieldDescription>;
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** Help Text */
		help?: Maybe<ListradioFieldHelp>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Field Key */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		/** Label Position */
		labelPos?: Maybe<Scalars['String']>;
		/** options */
		options?: Maybe<Array<Maybe<Scalars['String']>>>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** Indtifiable? */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** Required Field */
		required?: Maybe<Scalars['Boolean']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};

/** Custom Class Names */
export type ListselectFieldClasses = {
	__typename?: 'ListselectFieldClasses';
	/** Container */
	containerClass?: Maybe<Scalars['String']>;
	/** Element */
	elementClass?: Maybe<Scalars['String']>;
};

/** Help Text */
export type ListselectFieldHelp = {
	__typename?: 'ListselectFieldHelp';
	helpText?: Maybe<Scalars['String']>;
};

/** Description */
export type ListselectFieldDescription = {
	__typename?: 'ListselectFieldDescription';
	descText?: Maybe<Scalars['String']>;
};

/** Select */
export type ListselectField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'ListselectField';
		/** Admin Label */
		adminLabel?: Maybe<Scalars['String']>;
		/** Custom Class Names */
		classes?: Maybe<ListselectFieldClasses>;
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** Description */
		description?: Maybe<ListselectFieldDescription>;
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** Help Text */
		help?: Maybe<ListselectFieldHelp>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Field Key */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		/** Label Position */
		labelPos?: Maybe<Scalars['String']>;
		/** options */
		options?: Maybe<Array<Maybe<Scalars['String']>>>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** Indtifiable? */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** Required Field */
		required?: Maybe<Scalars['Boolean']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};

/** Custom Class Names */
export type ListstateFieldClasses = {
	__typename?: 'ListstateFieldClasses';
	/** Container */
	containerClass?: Maybe<Scalars['String']>;
	/** Element */
	elementClass?: Maybe<Scalars['String']>;
};

/** Help Text */
export type ListstateFieldHelp = {
	__typename?: 'ListstateFieldHelp';
	helpText?: Maybe<Scalars['String']>;
};

/** Description */
export type ListstateFieldDescription = {
	__typename?: 'ListstateFieldDescription';
	descText?: Maybe<Scalars['String']>;
};

/** US States */
export type ListstateField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'ListstateField';
		/** Admin Label */
		adminLabel?: Maybe<Scalars['String']>;
		/** Custom Class Names */
		classes?: Maybe<ListstateFieldClasses>;
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** Description */
		description?: Maybe<ListstateFieldDescription>;
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** Help Text */
		help?: Maybe<ListstateFieldHelp>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Field Key */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		/** Label Position */
		labelPos?: Maybe<Scalars['String']>;
		/** options */
		options?: Maybe<Array<Maybe<Scalars['String']>>>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** Indtifiable? */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** Required Field */
		required?: Maybe<Scalars['Boolean']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};

/** Note */
export type NoteField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'NoteField';
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** Default Value */
		default?: Maybe<Scalars['String']>;
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Key of the field */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** Indtifiable? */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** The field is required? */
		required?: Maybe<Scalars['Boolean']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
		/** HTML */
		valueMirror?: Maybe<Scalars['String']>;
	};

/** Custom Class Names */
export type NumberFieldClasses = {
	__typename?: 'NumberFieldClasses';
	/** Container */
	containerClass?: Maybe<Scalars['String']>;
	/** Element */
	elementClass?: Maybe<Scalars['String']>;
};

/** Help Text */
export type NumberFieldHelp = {
	__typename?: 'NumberFieldHelp';
	helpText?: Maybe<Scalars['String']>;
};

/** Description */
export type NumberFieldDescription = {
	__typename?: 'NumberFieldDescription';
	descText?: Maybe<Scalars['String']>;
};

/** Number Options */
export type NumberFieldNumber = {
	__typename?: 'NumberFieldNumber';
	/** Max */
	numMax?: Maybe<Scalars['Int']>;
	/** Min */
	numMin?: Maybe<Scalars['Int']>;
	/** Step */
	numStep?: Maybe<Scalars['String']>;
};

/** Number */
export type NumberField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'NumberField';
		/** Admin Label */
		adminLabel?: Maybe<Scalars['String']>;
		/** Custom Class Names */
		classes?: Maybe<NumberFieldClasses>;
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** Default Value */
		default?: Maybe<Scalars['String']>;
		/** Description */
		description?: Maybe<NumberFieldDescription>;
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** Help Text */
		help?: Maybe<NumberFieldHelp>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Field Key */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		/** Label Position */
		labelPos?: Maybe<Scalars['String']>;
		/** manual_key */
		manualKey?: Maybe<Scalars['String']>;
		/** Number Options */
		number?: Maybe<NumberFieldNumber>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** Indtifiable? */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** Placeholder */
		placeholder?: Maybe<Scalars['String']>;
		/** Required Field */
		required?: Maybe<Scalars['Boolean']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};

/** Custom Class Names */
export type PasswordFieldClasses = {
	__typename?: 'PasswordFieldClasses';
	/** Container */
	containerClass?: Maybe<Scalars['String']>;
	/** Element */
	elementClass?: Maybe<Scalars['String']>;
};

/** Limit Input to this Number */
export type PasswordFieldInputLimitSet = {
	__typename?: 'PasswordFieldInputLimitSet';
	inputLimit?: Maybe<Scalars['String']>;
	/** Text to Appear After Counter */
	inputLimitMsg?: Maybe<Scalars['String']>;
	inputLimitType?: Maybe<Scalars['String']>;
};

/** Help Text */
export type PasswordFieldHelp = {
	__typename?: 'PasswordFieldHelp';
	helpText?: Maybe<Scalars['String']>;
};

/** Description */
export type PasswordFieldDescription = {
	__typename?: 'PasswordFieldDescription';
	descText?: Maybe<Scalars['String']>;
};

/** Password */
export type PasswordField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'PasswordField';
		/** Admin Label */
		adminLabel?: Maybe<Scalars['String']>;
		/** Custom Class Names */
		classes?: Maybe<PasswordFieldClasses>;
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** Default Value */
		default?: Maybe<Scalars['String']>;
		/** Description */
		description?: Maybe<PasswordFieldDescription>;
		/** Disable Input */
		disableInput?: Maybe<Scalars['Boolean']>;
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** Help Text */
		help?: Maybe<PasswordFieldHelp>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Limit Input to this Number */
		inputLimitSet?: Maybe<PasswordFieldInputLimitSet>;
		/** Field Key */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		/** Label Position */
		labelPos?: Maybe<Scalars['String']>;
		/** manual_key */
		manualKey?: Maybe<Scalars['String']>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** Indtifiable? */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** Placeholder */
		placeholder?: Maybe<Scalars['String']>;
		/** Required Field */
		required?: Maybe<Scalars['Boolean']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};

/** Custom Class Names */
export type PasswordconfirmFieldClasses = {
	__typename?: 'PasswordconfirmFieldClasses';
	/** Container */
	containerClass?: Maybe<Scalars['String']>;
	/** Element */
	elementClass?: Maybe<Scalars['String']>;
};

/** Limit Input to this Number */
export type PasswordconfirmFieldInputLimitSet = {
	__typename?: 'PasswordconfirmFieldInputLimitSet';
	inputLimit?: Maybe<Scalars['String']>;
	/** Text to Appear After Counter */
	inputLimitMsg?: Maybe<Scalars['String']>;
	inputLimitType?: Maybe<Scalars['String']>;
};

/** Help Text */
export type PasswordconfirmFieldHelp = {
	__typename?: 'PasswordconfirmFieldHelp';
	helpText?: Maybe<Scalars['String']>;
};

/** Description */
export type PasswordconfirmFieldDescription = {
	__typename?: 'PasswordconfirmFieldDescription';
	descText?: Maybe<Scalars['String']>;
};

/** Password Confirm */
export type PasswordconfirmField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'PasswordconfirmField';
		/** Admin Label */
		adminLabel?: Maybe<Scalars['String']>;
		/** Custom Class Names */
		classes?: Maybe<PasswordconfirmFieldClasses>;
		/** Confirm */
		confirmField?: Maybe<Scalars['String']>;
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** Default Value */
		default?: Maybe<Scalars['String']>;
		/** Description */
		description?: Maybe<PasswordconfirmFieldDescription>;
		/** Disable Input */
		disableInput?: Maybe<Scalars['Boolean']>;
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** Help Text */
		help?: Maybe<PasswordconfirmFieldHelp>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Limit Input to this Number */
		inputLimitSet?: Maybe<PasswordconfirmFieldInputLimitSet>;
		/** Field Key */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		/** Label Position */
		labelPos?: Maybe<Scalars['String']>;
		/** manual_key */
		manualKey?: Maybe<Scalars['String']>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** Indtifiable? */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** Placeholder */
		placeholder?: Maybe<Scalars['String']>;
		/** Required Field */
		required?: Maybe<Scalars['Boolean']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};

/** Custom Class Names */
export type PhoneFieldClasses = {
	__typename?: 'PhoneFieldClasses';
	/** Container */
	containerClass?: Maybe<Scalars['String']>;
	/** Element */
	elementClass?: Maybe<Scalars['String']>;
};

/** Limit Input to this Number */
export type PhoneFieldInputLimitSet = {
	__typename?: 'PhoneFieldInputLimitSet';
	inputLimit?: Maybe<Scalars['String']>;
	/** Text to Appear After Counter */
	inputLimitMsg?: Maybe<Scalars['String']>;
	inputLimitType?: Maybe<Scalars['String']>;
};

/** Help Text */
export type PhoneFieldHelp = {
	__typename?: 'PhoneFieldHelp';
	helpText?: Maybe<Scalars['String']>;
};

/** Description */
export type PhoneFieldDescription = {
	__typename?: 'PhoneFieldDescription';
	descText?: Maybe<Scalars['String']>;
};

/** Phone */
export type PhoneField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'PhoneField';
		/** Admin Label */
		adminLabel?: Maybe<Scalars['String']>;
		/** Custom Class Names */
		classes?: Maybe<PhoneFieldClasses>;
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** Custom Mask */
		customMask?: Maybe<Scalars['String']>;
		/** Custom Name Attribute */
		customNameAttribute?: Maybe<Scalars['String']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** Default Value */
		default?: Maybe<Scalars['String']>;
		/** Description */
		description?: Maybe<PhoneFieldDescription>;
		/** Disable Browser Autocomplete */
		disableBrowserAutocomplete?: Maybe<Scalars['Boolean']>;
		/** Disable Input */
		disableInput?: Maybe<Scalars['Boolean']>;
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** Help Text */
		help?: Maybe<PhoneFieldHelp>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Limit Input to this Number */
		inputLimitSet?: Maybe<PhoneFieldInputLimitSet>;
		/** Field Key */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		/** Label Position */
		labelPos?: Maybe<Scalars['String']>;
		/** manual_key */
		manualKey?: Maybe<Scalars['String']>;
		/** Input Mask */
		mask?: Maybe<Scalars['String']>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** This Field Is Personally Identifiable Data */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** Placeholder */
		placeholder?: Maybe<Scalars['String']>;
		/** Required Field */
		required?: Maybe<Scalars['Boolean']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};

/** Custom Class Names */
export type ProductFieldClasses = {
	__typename?: 'ProductFieldClasses';
	/** Container */
	containerClass?: Maybe<Scalars['String']>;
	/** Element */
	elementClass?: Maybe<Scalars['String']>;
};

/** Help Text */
export type ProductFieldHelp = {
	__typename?: 'ProductFieldHelp';
	helpText?: Maybe<Scalars['String']>;
};

/** Description */
export type ProductFieldDescription = {
	__typename?: 'ProductFieldDescription';
	descText?: Maybe<Scalars['String']>;
};

/** Product */
export type ProductField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'ProductField';
		/** Admin Label */
		adminLabel?: Maybe<Scalars['String']>;
		/** Custom Class Names */
		classes?: Maybe<ProductFieldClasses>;
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** Default Value */
		default?: Maybe<Scalars['String']>;
		/** Description */
		description?: Maybe<ProductFieldDescription>;
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** Help Text */
		help?: Maybe<ProductFieldHelp>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Field Key */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		/** Label Position */
		labelPos?: Maybe<Scalars['String']>;
		/** manual_key */
		manualKey?: Maybe<Scalars['String']>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** Indtifiable? */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** Placeholder */
		placeholder?: Maybe<Scalars['String']>;
		/** Price */
		productPrice?: Maybe<Scalars['String']>;
		/** Product Type */
		productType?: Maybe<Scalars['String']>;
		/** Use Inline Quantity */
		productUseQuantity?: Maybe<Scalars['Boolean']>;
		/** The field is required? */
		required?: Maybe<Scalars['Boolean']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};

/** Custom Class Names */
export type QuantityFieldClasses = {
	__typename?: 'QuantityFieldClasses';
	/** Container */
	containerClass?: Maybe<Scalars['String']>;
	/** Element */
	elementClass?: Maybe<Scalars['String']>;
};

/** Help Text */
export type QuantityFieldHelp = {
	__typename?: 'QuantityFieldHelp';
	helpText?: Maybe<Scalars['String']>;
};

/** Description */
export type QuantityFieldDescription = {
	__typename?: 'QuantityFieldDescription';
	descText?: Maybe<Scalars['String']>;
};

/** Number Options */
export type QuantityFieldNumber = {
	__typename?: 'QuantityFieldNumber';
	/** Max */
	numMax?: Maybe<Scalars['Int']>;
	/** Min */
	numMin?: Maybe<Scalars['Int']>;
	/** Step */
	numStep?: Maybe<Scalars['String']>;
};

/** Quantity */
export type QuantityField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'QuantityField';
		/** Admin Label */
		adminLabel?: Maybe<Scalars['String']>;
		/** Custom Class Names */
		classes?: Maybe<QuantityFieldClasses>;
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** Default Value */
		default?: Maybe<Scalars['String']>;
		/** Description */
		description?: Maybe<QuantityFieldDescription>;
		/** Disable Input */
		disableInput?: Maybe<Scalars['Boolean']>;
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** Help Text */
		help?: Maybe<QuantityFieldHelp>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Field Key */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		/** Label Position */
		labelPos?: Maybe<Scalars['String']>;
		/** manual_key */
		manualKey?: Maybe<Scalars['String']>;
		/** Number Options */
		number?: Maybe<QuantityFieldNumber>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** Indtifiable? */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** Placeholder */
		placeholder?: Maybe<Scalars['String']>;
		/** Product */
		productAssignment?: Maybe<Scalars['String']>;
		/** The field is required? */
		required?: Maybe<Scalars['Boolean']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};

/** Custom Class Names */
export type RecaptchaFieldClasses = {
	__typename?: 'RecaptchaFieldClasses';
	/** Container */
	containerClass?: Maybe<Scalars['String']>;
	/** Element */
	elementClass?: Maybe<Scalars['String']>;
};

/** Recaptcha */
export type RecaptchaField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'RecaptchaField';
		/** Custom Class Names */
		classes?: Maybe<RecaptchaFieldClasses>;
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Key of the field */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** Indtifiable? */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** The field is required? */
		required?: Maybe<Scalars['Boolean']>;
		/** Visibility */
		size?: Maybe<Scalars['String']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};

/** Custom Class Names */
export type ShippingFieldClasses = {
	__typename?: 'ShippingFieldClasses';
	/** Container */
	containerClass?: Maybe<Scalars['String']>;
	/** Element */
	elementClass?: Maybe<Scalars['String']>;
};

/** Help Text */
export type ShippingFieldHelp = {
	__typename?: 'ShippingFieldHelp';
	helpText?: Maybe<Scalars['String']>;
};

/** Description */
export type ShippingFieldDescription = {
	__typename?: 'ShippingFieldDescription';
	descText?: Maybe<Scalars['String']>;
};

/** Shipping */
export type ShippingField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'ShippingField';
		/** Admin Label */
		adminLabel?: Maybe<Scalars['String']>;
		/** Custom Class Names */
		classes?: Maybe<ShippingFieldClasses>;
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** Default Value */
		default?: Maybe<Scalars['String']>;
		/** Description */
		description?: Maybe<ShippingFieldDescription>;
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** Help Text */
		help?: Maybe<ShippingFieldHelp>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Field Key */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		/** Label Position */
		labelPos?: Maybe<Scalars['String']>;
		/** manual_key */
		manualKey?: Maybe<Scalars['String']>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** Indtifiable? */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** Placeholder */
		placeholder?: Maybe<Scalars['String']>;
		/** The field is required? */
		required?: Maybe<Scalars['Boolean']>;
		/** Cost */
		shippingCost?: Maybe<Scalars['String']>;
		/** shipping_options */
		shippingOptions?: Maybe<Array<Maybe<Scalars['String']>>>;
		/** Cost Type */
		shippingType?: Maybe<Scalars['String']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};

/** Custom Class Names */
export type SpamFieldClasses = {
	__typename?: 'SpamFieldClasses';
	/** Container */
	containerClass?: Maybe<Scalars['String']>;
	/** Element */
	elementClass?: Maybe<Scalars['String']>;
};

/** Limit Input to this Number */
export type SpamFieldInputLimitSet = {
	__typename?: 'SpamFieldInputLimitSet';
	inputLimit?: Maybe<Scalars['String']>;
	/** Text to Appear After Counter */
	inputLimitMsg?: Maybe<Scalars['String']>;
	inputLimitType?: Maybe<Scalars['String']>;
};

/** Help Text */
export type SpamFieldHelp = {
	__typename?: 'SpamFieldHelp';
	helpText?: Maybe<Scalars['String']>;
};

/** Description */
export type SpamFieldDescription = {
	__typename?: 'SpamFieldDescription';
	descText?: Maybe<Scalars['String']>;
};

/** Anti-Spam */
export type SpamField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'SpamField';
		/** Admin Label */
		adminLabel?: Maybe<Scalars['String']>;
		/** Custom Class Names */
		classes?: Maybe<SpamFieldClasses>;
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** Default Value */
		default?: Maybe<Scalars['String']>;
		/** Description */
		description?: Maybe<SpamFieldDescription>;
		/** Disable Input */
		disableInput?: Maybe<Scalars['Boolean']>;
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** Help Text */
		help?: Maybe<SpamFieldHelp>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Limit Input to this Number */
		inputLimitSet?: Maybe<SpamFieldInputLimitSet>;
		/** Field Key */
		key?: Maybe<Scalars['String']>;
		/** Question */
		label?: Maybe<Scalars['String']>;
		/** Question Position */
		labelPos?: Maybe<Scalars['String']>;
		/** manual_key */
		manualKey?: Maybe<Scalars['String']>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** Indtifiable? */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** Placeholder */
		placeholder?: Maybe<Scalars['String']>;
		/** Required Field */
		required?: Maybe<Scalars['Boolean']>;
		/** Answer */
		spamAnswer?: Maybe<Scalars['String']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};

/** Custom Class Names */
export type StarratingFieldClasses = {
	__typename?: 'StarratingFieldClasses';
	/** Container */
	containerClass?: Maybe<Scalars['String']>;
	/** Element */
	elementClass?: Maybe<Scalars['String']>;
};

/** Star Rating */
export type StarratingField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'StarratingField';
		/** Admin Label */
		adminLabel?: Maybe<Scalars['String']>;
		/** Custom Class Names */
		classes?: Maybe<StarratingFieldClasses>;
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** Default Value */
		default?: Maybe<Scalars['String']>;
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Field Key */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		/** Label Position */
		labelPos?: Maybe<Scalars['String']>;
		/** Number of stars */
		numberOfStars?: Maybe<Scalars['String']>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** Indtifiable? */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** Required Field */
		required?: Maybe<Scalars['Boolean']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};

/** Custom Class Names */
export type SubmitFieldClasses = {
	__typename?: 'SubmitFieldClasses';
	/** Container */
	containerClass?: Maybe<Scalars['String']>;
	/** Element */
	elementClass?: Maybe<Scalars['String']>;
};

/** Submit */
export type SubmitField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'SubmitField';
		/** Custom Class Names */
		classes?: Maybe<SubmitFieldClasses>;
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Field Key */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** Indtifiable? */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** Processing Label */
		processingLabel?: Maybe<Scalars['String']>;
		/** The field is required? */
		required?: Maybe<Scalars['Boolean']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};

/** Custom Class Names */
export type TermsFieldClasses = {
	__typename?: 'TermsFieldClasses';
	/** Container */
	containerClass?: Maybe<Scalars['String']>;
	/** Element */
	elementClass?: Maybe<Scalars['String']>;
};

/** Help Text */
export type TermsFieldHelp = {
	__typename?: 'TermsFieldHelp';
	helpText?: Maybe<Scalars['String']>;
};

/** Description */
export type TermsFieldDescription = {
	__typename?: 'TermsFieldDescription';
	descText?: Maybe<Scalars['String']>;
};

/** Terms List */
export type TermsField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'TermsField';
		/** Add New Terms */
		addNewTerms?: Maybe<Scalars['Boolean']>;
		/** Admin Label */
		adminLabel?: Maybe<Scalars['String']>;
		/** Custom Class Names */
		classes?: Maybe<TermsFieldClasses>;
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** Description */
		description?: Maybe<TermsFieldDescription>;
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** Help Text */
		help?: Maybe<TermsFieldHelp>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Field Key */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		/** Label Position */
		labelPos?: Maybe<Scalars['String']>;
		/** options */
		options?: Maybe<Array<Maybe<Scalars['String']>>>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** Indtifiable? */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** The field is required? */
		required?: Maybe<Scalars['Boolean']>;
		/** Taxonomy */
		taxonomy?: Maybe<Scalars['String']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};

/** Custom Class Names */
export type TextareaFieldClasses = {
	__typename?: 'TextareaFieldClasses';
	/** Container */
	containerClass?: Maybe<Scalars['String']>;
	/** Element */
	elementClass?: Maybe<Scalars['String']>;
};

/** Limit Input to this Number */
export type TextareaFieldInputLimitSet = {
	__typename?: 'TextareaFieldInputLimitSet';
	inputLimit?: Maybe<Scalars['String']>;
	/** Text to Appear After Counter */
	inputLimitMsg?: Maybe<Scalars['String']>;
	inputLimitType?: Maybe<Scalars['String']>;
};

/** Help Text */
export type TextareaFieldHelp = {
	__typename?: 'TextareaFieldHelp';
	helpText?: Maybe<Scalars['String']>;
};

/** Description */
export type TextareaFieldDescription = {
	__typename?: 'TextareaFieldDescription';
	descText?: Maybe<Scalars['String']>;
};

/** Paragraph Text */
export type TextareaField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'TextareaField';
		/** Admin Label */
		adminLabel?: Maybe<Scalars['String']>;
		/** Custom Class Names */
		classes?: Maybe<TextareaFieldClasses>;
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** Default Value */
		default?: Maybe<Scalars['String']>;
		/** Description */
		description?: Maybe<TextareaFieldDescription>;
		/** Disable Browser Autocomplete */
		disableBrowserAutocomplete?: Maybe<Scalars['Boolean']>;
		/** Disable Input */
		disableInput?: Maybe<Scalars['Boolean']>;
		/** Disable Rich Text Editor on Mobile */
		disableRteMobile?: Maybe<Scalars['Boolean']>;
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** Help Text */
		help?: Maybe<TextareaFieldHelp>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Limit Input to this Number */
		inputLimitSet?: Maybe<TextareaFieldInputLimitSet>;
		/** Field Key */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		/** Label Position */
		labelPos?: Maybe<Scalars['String']>;
		/** manual_key */
		manualKey?: Maybe<Scalars['String']>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** Indtifiable? */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** Placeholder */
		placeholder?: Maybe<Scalars['String']>;
		/** Required Field */
		required?: Maybe<Scalars['Boolean']>;
		/** Show Media Upload Button */
		textareaMedia?: Maybe<Scalars['Boolean']>;
		/** Show Rich Text Editor */
		textareaRte?: Maybe<Scalars['Boolean']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};

/** Custom Class Names */
export type TextboxFieldClasses = {
	__typename?: 'TextboxFieldClasses';
	/** Container */
	containerClass?: Maybe<Scalars['String']>;
	/** Element */
	elementClass?: Maybe<Scalars['String']>;
};

/** Limit Input to this Number */
export type TextboxFieldInputLimitSet = {
	__typename?: 'TextboxFieldInputLimitSet';
	inputLimit?: Maybe<Scalars['String']>;
	/** Text to Appear After Counter */
	inputLimitMsg?: Maybe<Scalars['String']>;
	inputLimitType?: Maybe<Scalars['String']>;
};

/** Help Text */
export type TextboxFieldHelp = {
	__typename?: 'TextboxFieldHelp';
	helpText?: Maybe<Scalars['String']>;
};

/** Description */
export type TextboxFieldDescription = {
	__typename?: 'TextboxFieldDescription';
	descText?: Maybe<Scalars['String']>;
};

/** Single Line Text */
export type TextboxField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'TextboxField';
		/** Admin Label */
		adminLabel?: Maybe<Scalars['String']>;
		/** Custom Class Names */
		classes?: Maybe<TextboxFieldClasses>;
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** Custom Mask */
		customMask?: Maybe<Scalars['String']>;
		/** Custom Name Attribute */
		customNameAttribute?: Maybe<Scalars['String']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** Default Value */
		default?: Maybe<Scalars['String']>;
		/** Description */
		description?: Maybe<TextboxFieldDescription>;
		/** Disable Browser Autocomplete */
		disableBrowserAutocomplete?: Maybe<Scalars['Boolean']>;
		/** Disable Input */
		disableInput?: Maybe<Scalars['Boolean']>;
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** Help Text */
		help?: Maybe<TextboxFieldHelp>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Limit Input to this Number */
		inputLimitSet?: Maybe<TextboxFieldInputLimitSet>;
		/** Field Key */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		/** Label Position */
		labelPos?: Maybe<Scalars['String']>;
		/** manual_key */
		manualKey?: Maybe<Scalars['String']>;
		/** Input Mask */
		mask?: Maybe<Scalars['String']>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** This Field Is Personally Identifiable Data */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** Placeholder */
		placeholder?: Maybe<Scalars['String']>;
		/** Required Field */
		required?: Maybe<Scalars['Boolean']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};

/** Custom Class Names */
export type TotalFieldClasses = {
	__typename?: 'TotalFieldClasses';
	/** Container */
	containerClass?: Maybe<Scalars['String']>;
	/** Element */
	elementClass?: Maybe<Scalars['String']>;
};

/** Help Text */
export type TotalFieldHelp = {
	__typename?: 'TotalFieldHelp';
	helpText?: Maybe<Scalars['String']>;
};

/** Description */
export type TotalFieldDescription = {
	__typename?: 'TotalFieldDescription';
	descText?: Maybe<Scalars['String']>;
};

/** Total */
export type TotalField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'TotalField';
		/** Admin Label */
		adminLabel?: Maybe<Scalars['String']>;
		/** Custom Class Names */
		classes?: Maybe<TotalFieldClasses>;
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** Description */
		description?: Maybe<TotalFieldDescription>;
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** Help Text */
		help?: Maybe<TotalFieldHelp>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Field Key */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		/** Label Position */
		labelPos?: Maybe<Scalars['String']>;
		/** manual_key */
		manualKey?: Maybe<Scalars['String']>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** Indtifiable? */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** The field is required? */
		required?: Maybe<Scalars['Boolean']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};

/** Unknown */
export type UnknownField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'UnknownField';
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Key of the field */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		message?: Maybe<Scalars['String']>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** Indtifiable? */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** The field is required? */
		required?: Maybe<Scalars['Boolean']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};

/** Custom Class Names */
export type ZipFieldClasses = {
	__typename?: 'ZipFieldClasses';
	/** Container */
	containerClass?: Maybe<Scalars['String']>;
	/** Element */
	elementClass?: Maybe<Scalars['String']>;
};

/** Limit Input to this Number */
export type ZipFieldInputLimitSet = {
	__typename?: 'ZipFieldInputLimitSet';
	inputLimit?: Maybe<Scalars['String']>;
	/** Text to Appear After Counter */
	inputLimitMsg?: Maybe<Scalars['String']>;
	inputLimitType?: Maybe<Scalars['String']>;
};

/** Help Text */
export type ZipFieldHelp = {
	__typename?: 'ZipFieldHelp';
	helpText?: Maybe<Scalars['String']>;
};

/** Description */
export type ZipFieldDescription = {
	__typename?: 'ZipFieldDescription';
	descText?: Maybe<Scalars['String']>;
};

/** Zip */
export type ZipField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'ZipField';
		/** Admin Label */
		adminLabel?: Maybe<Scalars['String']>;
		/** Custom Class Names */
		classes?: Maybe<ZipFieldClasses>;
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** Custom Mask */
		customMask?: Maybe<Scalars['String']>;
		/** Custom Name Attribute */
		customNameAttribute?: Maybe<Scalars['String']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** Default Value */
		default?: Maybe<Scalars['String']>;
		/** Description */
		description?: Maybe<ZipFieldDescription>;
		/** Disable Browser Autocomplete */
		disableBrowserAutocomplete?: Maybe<Scalars['Boolean']>;
		/** Disable Input */
		disableInput?: Maybe<Scalars['Boolean']>;
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** Help Text */
		help?: Maybe<ZipFieldHelp>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Limit Input to this Number */
		inputLimitSet?: Maybe<ZipFieldInputLimitSet>;
		/** Field Key */
		key?: Maybe<Scalars['String']>;
		/** Label */
		label?: Maybe<Scalars['String']>;
		/** Label Position */
		labelPos?: Maybe<Scalars['String']>;
		/** manual_key */
		manualKey?: Maybe<Scalars['String']>;
		/** Input Mask */
		mask?: Maybe<Scalars['String']>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** This Field Is Personally Identifiable Data */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** Placeholder */
		placeholder?: Maybe<Scalars['String']>;
		/** Required Field */
		required?: Maybe<Scalars['Boolean']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};

/** Custom Class Names */
export type HrFieldClasses = {
	__typename?: 'HrFieldClasses';
	/** Container */
	containerClass?: Maybe<Scalars['String']>;
	/** Element */
	elementClass?: Maybe<Scalars['String']>;
};

/** Divider */
export type HrField = Node &
	DatabaseIdentifier &
	FormField & {
		__typename?: 'HrField';
		/** Custom Class Names */
		classes?: Maybe<HrFieldClasses>;
		/** Creation date */
		createdAt?: Maybe<Scalars['Int']>;
		/** The Id of the field */
		databaseId: Scalars['Int'];
		/** The Id of the field */
		fieldId?: Maybe<Scalars['Int']>;
		/** Key of the field */
		fieldKey?: Maybe<Scalars['String']>;
		/** Label of the field */
		fieldLabel?: Maybe<Scalars['String']>;
		/** The globally unique identifier of the field */
		id: Scalars['ID'];
		/** Key of the field */
		key?: Maybe<Scalars['String']>;
		/** Label of the field */
		label?: Maybe<Scalars['String']>;
		/** Position order of the field */
		order?: Maybe<Scalars['Int']>;
		/** Parent form id */
		parentId?: Maybe<Scalars['Int']>;
		/** Indtifiable? */
		personallyIdentifiable?: Maybe<Scalars['Boolean']>;
		/** The field is required? */
		required?: Maybe<Scalars['Boolean']>;
		/** type of the field */
		type?: Maybe<Scalars['String']>;
		/** Update date */
		updatedAt?: Maybe<Scalars['Int']>;
	};
