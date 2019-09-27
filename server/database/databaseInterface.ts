export enum PostType {
  READ = "READ",
  UNREAD = "UNREAD",
  DELETED = "DELETED"
}

export function getWatchedSubreddits(userID: string) {
  // Do some database transaction to retrieve all subreddits the user cares about
}

export function getAllUnreadPosts() {
  // Do some database transaction to retrieve all unread
}

export function getAllReadPosts() {
  // Do some database transaction to retrieve all read
}

export function getAllDeletedPosts() {
  // Do some database transaction to retrieve all deleted
}

export function updatePostAsRead(postID: string) {
  updatePost(postID, PostType.READ);
}

export function updatePostAsUnread(postID: string) {
  updatePost(postID, PostType.UNREAD);
}

export function updatePostAsDeleted(postID: string) {
  updatePost(postID, PostType.DELETED);
}

function updatePost(postID: string, updatedType: PostType) {
  // Do some database transaction to update the entry
  console.log(`Updating POSTID ${postID} as ${updatedType}`);
}
