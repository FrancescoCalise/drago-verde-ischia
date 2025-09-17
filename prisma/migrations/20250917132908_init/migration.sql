-- CreateTable
CREATE TABLE "public"."AppUser" (
    "id" UUID NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "birthdate" DATE NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT DEFAULT 'guest',
    "phone_number" TEXT,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AppUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."GdrSession" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "urlImg" TEXT,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,
    "master" TEXT NOT NULL,
    "availableSeats" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GdrSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."GdrSessionRegistration" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "sessionId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GdrSessionRegistration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."MainEvent" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "urlImg" TEXT,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "maxSeats" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "note" TEXT NOT NULL,

    CONSTRAINT "MainEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."MainEventRegistration" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "eventId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MainEventRegistration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."LoggerIDML" (
    "id" TEXT NOT NULL,
    "IDML" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LoggerIDML_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."NewsArticle" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "imageUrl" TEXT,
    "publishedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "shares" INTEGER NOT NULL DEFAULT 0,
    "authorId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NewsArticle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."NewsLike" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "articleId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "NewsLike_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AppUser_username_key" ON "public"."AppUser"("username");

-- CreateIndex
CREATE UNIQUE INDEX "AppUser_email_key" ON "public"."AppUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "GdrSessionRegistration_userId_sessionId_key" ON "public"."GdrSessionRegistration"("userId", "sessionId");

-- CreateIndex
CREATE UNIQUE INDEX "MainEventRegistration_userId_eventId_key" ON "public"."MainEventRegistration"("userId", "eventId");

-- CreateIndex
CREATE UNIQUE INDEX "LoggerIDML_IDML_language_key" ON "public"."LoggerIDML"("IDML", "language");

-- CreateIndex
CREATE UNIQUE INDEX "NewsLike_userId_articleId_key" ON "public"."NewsLike"("userId", "articleId");

-- AddForeignKey
ALTER TABLE "public"."GdrSessionRegistration" ADD CONSTRAINT "GdrSessionRegistration_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."AppUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."GdrSessionRegistration" ADD CONSTRAINT "GdrSessionRegistration_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "public"."GdrSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."MainEventRegistration" ADD CONSTRAINT "MainEventRegistration_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."AppUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."MainEventRegistration" ADD CONSTRAINT "MainEventRegistration_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "public"."MainEvent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."NewsArticle" ADD CONSTRAINT "NewsArticle_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "public"."AppUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."NewsLike" ADD CONSTRAINT "NewsLike_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "public"."NewsArticle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;


-- Trigger per la tabella user
create trigger update_user_updated_at
before update on AppUser
for each row
execute function update_updated_at_column();

-- Trigger per la tabella gdr_sessions
CREATE TRIGGER set_gdr_sessions_updated_at
BEFORE UPDATE ON GdrSession
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();


CREATE TRIGGER set_mainEvent_updated_at
BEFORE UPDATE ON MainEvent
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER set_newsArticle_updated_at
BEFORE UPDATE ON NewsArticle
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();