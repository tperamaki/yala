-- CreateTable
CREATE TABLE "Thumbsignal" (
    "reviewedRestaurantId" INTEGER NOT NULL,
    "reviewCreatedBy" TEXT NOT NULL,
    "signalVariant" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,

    CONSTRAINT "Thumbsignal_pkey" PRIMARY KEY ("reviewedRestaurantId","reviewCreatedBy","createdBy")
);

-- AddForeignKey
ALTER TABLE "Thumbsignal" ADD CONSTRAINT "Thumbsignal_reviewedRestaurantId_reviewCreatedBy_fkey" FOREIGN KEY ("reviewedRestaurantId", "reviewCreatedBy") REFERENCES "Review"("restaurantId", "createdBy") ON DELETE RESTRICT ON UPDATE CASCADE;
