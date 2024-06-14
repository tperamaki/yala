/*
  Warnings:

  - The primary key for the `Review` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Review` table. All the data in the column will be lost.
  - Made the column `createdBy` on table `Restaurant` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdBy` on table `Review` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Restaurant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL
);
INSERT INTO "new_Restaurant" ("createdAt", "createdBy", "id", "name") SELECT "createdAt", "createdBy", "id", "name" FROM "Restaurant";
DROP TABLE "Restaurant";
ALTER TABLE "new_Restaurant" RENAME TO "Restaurant";
CREATE UNIQUE INDEX "Restaurant_name_key" ON "Restaurant"("name");
CREATE TABLE "new_Review" (
    "restaurantId" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,

    PRIMARY KEY ("restaurantId", "createdBy"),
    CONSTRAINT "Review_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Review" ("createdAt", "createdBy", "rating", "restaurantId") SELECT "createdAt", "createdBy", "rating", "restaurantId" FROM "Review";
DROP TABLE "Review";
ALTER TABLE "new_Review" RENAME TO "Review";
PRAGMA foreign_key_check("Restaurant");
PRAGMA foreign_key_check("Review");
PRAGMA foreign_keys=ON;
