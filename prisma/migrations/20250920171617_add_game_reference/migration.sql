/*
  Warnings:

  - Added the required column `gameReference` to the `GdrSession` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."GdrSession" ADD COLUMN     "gameReference" TEXT NOT NULL;
