-- CreateTable
CREATE TABLE "Thumbsignal" (
    "reviewedRestaurantId" INTEGER NOT NULL,
    "reviewCreatedBy" TEXT NOT NULL,
    "signalVariant" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,

    PRIMARY KEY ("reviewedRestaurantId", "reviewCreatedBy", "createdBy"),
    CONSTRAINT "Thumbsignal_reviewedRestaurantId_reviewCreatedBy_fkey" FOREIGN KEY ("reviewedRestaurantId", "reviewCreatedBy") REFERENCES "Review" ("restaurantId", "createdBy") ON DELETE RESTRICT ON UPDATE CASCADE
);
