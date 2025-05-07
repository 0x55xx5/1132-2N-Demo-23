-- CreateTable
CREATE TABLE "Product_test" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,

    CONSTRAINT "Product_test_pkey" PRIMARY KEY ("id")
);
