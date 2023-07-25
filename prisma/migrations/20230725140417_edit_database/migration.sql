/*
  Warnings:

  - You are about to drop the column `isDeactived` on the `User` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "shortDescription" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "featuredImage" TEXT NOT NULL,
    "productImages" TEXT NOT NULL,
    "downloadableFile" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Product_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("authorId", "downloadableFile", "featuredImage", "id", "isDeleted", "name", "overview", "productImages", "shortDescription", "slug") SELECT "authorId", "downloadableFile", "featuredImage", "id", "isDeleted", "name", "overview", "productImages", "shortDescription", "slug" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "bio" TEXT,
    "avatar" TEXT NOT NULL,
    "isDeactivated" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_User" ("avatar", "bio", "email", "id", "name", "password", "username") SELECT "avatar", "bio", "email", "id", "name", "password", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
