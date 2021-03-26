let db = {
  users: [
    {
      userId: "",
      email: "",
      firestname: "",
      lastname: "",
      username: "",
      createdAt: "",
      imageUrl: "",
      bio: "",
      website: "",
      location: "",
    },
  ],
  userPosts: [
    {
      username: "",
      body: "",
      createdAt: "",
      likeCount: 3,
      commentCount: 3,
    },
  ],
  Postcomments: [
    {
      commentUser: "",
      postId: "",
      body: "",
      createdAt: "2019-03-15T10:59:52.798Z",
    },
  ],
  Pages: [
    {
      pageName: "",
      pageId: "",
      owner: "",
      likeCount: 3,
      createdAt: "2019-03-15T10:59:52.798Z",
    },
  ],
  PagePosts: [
    {
      pageName: "",
      postId: "",
      body: "",
      createdAt: "2019-03-15T10:59:52.798Z",
    },
  ],
  Pagecomments: [
    {
      username: "",
      postId: "",
      body: "",
      createdAt: "2019-03-15T10:59:52.798Z",
    },
  ],

  /*notifications: [
    {
      recipient: "",
      sender: "",
      read: "true | false",
      postId: "",
      type: "like | comment",
      createdAt: "2019-03-15T10:59:52.798Z",
    },
  ],*/
};
