-- CreateEnum
CREATE TYPE "FileTypeEnum" AS ENUM ('Word', 'PDF', 'Epub');

-- CreateEnum
CREATE TYPE "FontFamilyEnum" AS ENUM ('Courier', 'Helvetica', 'Times');

-- CreateEnum
CREATE TYPE "PageSizeEnum" AS ENUM ('Letter', 'Legal', 'A4');

-- CreateEnum
CREATE TYPE "TitleFontSizeEnum" AS ENUM ('Small36', 'Medium48', 'Large72');

-- CreateEnum
CREATE TYPE "SubtitleFontSizeEnum" AS ENUM ('Small22', 'Medium28', 'Large36');

-- CreateEnum
CREATE TYPE "SectionTitleFontSizeEnum" AS ENUM ('Small16', 'Medium20', 'Large24');

-- CreateEnum
CREATE TYPE "SceneTitleFontSizeEnum" AS ENUM ('Small14', 'Medium18', 'Large22');

-- CreateEnum
CREATE TYPE "SceneTextFontSizeEnum" AS ENUM ('Small12', 'Medium14', 'Large16');

-- CreateEnum
CREATE TYPE "LineHeightEnum" AS ENUM ('Single', 'OneHalf', 'Double');

-- CreateEnum
CREATE TYPE "NovelStatusEnum" AS ENUM ('Idea', 'Writing', 'Editing', 'Finished', 'Published', 'Archived');

-- CreateEnum
CREATE TYPE "GenreEnum" AS ENUM ('GeneralFiction', 'Adventure', 'Fantasy', 'HistoricalFiction', 'Horror', 'MemoirAutobiography', 'Mystery', 'Romance', 'ScienceFiction', 'Thriller', 'YoungAdult', 'WomensFiction');

-- CreateTable
CREATE TABLE "User"
(
    "id"                  BIGSERIAL    NOT NULL,
    "createdAt"           TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"           TIMESTAMP(3) NOT NULL,
    "deletedAt"           TIMESTAMP(3),
    "authId"              VARCHAR(255) NOT NULL,
    "stripeId"            VARCHAR(255) NOT NULL,
    "isAdmin"             BOOLEAN      NOT NULL DEFAULT false,
    "email"               VARCHAR(255) NOT NULL,
    "firstName"           VARCHAR(255) NOT NULL,
    "lastName"            VARCHAR(255) NOT NULL,
    "penName"             VARCHAR(255),
    "novelLimit"          INTEGER      NOT NULL DEFAULT 1,
    "hasFeatureHistory"   BOOLEAN      NOT NULL DEFAULT false,
    "hasFeatureNotebooks" BOOLEAN      NOT NULL DEFAULT false,
    "hasFeatureSeries"    BOOLEAN      NOT NULL DEFAULT false,
    "hasFeatureGoals"     BOOLEAN      NOT NULL DEFAULT false,
    "hasFeatureImport"    BOOLEAN      NOT NULL DEFAULT false,
    "hasFeaturePrint"     BOOLEAN      NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExportTemplate"
(
    "id"                   BIGSERIAL                  NOT NULL,
    "createdAt"            TIMESTAMP(3)               NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"            TIMESTAMP(3)               NOT NULL,
    "deletedAt"            TIMESTAMP(3),
    "userId"               BIGINT                     NOT NULL,
    "name"                 VARCHAR(255)               NOT NULL,
    "fileType"             "FileTypeEnum"             NOT NULL DEFAULT 'Word',
    "fontFamily"           "FontFamilyEnum"           NOT NULL DEFAULT 'Helvetica',
    "pageSize"             "PageSizeEnum"             NOT NULL DEFAULT 'Letter',
    "titleFontSize"        "TitleFontSizeEnum"        NOT NULL DEFAULT 'Medium48',
    "subtitleFontSize"     "SubtitleFontSizeEnum"     NOT NULL DEFAULT 'Medium28',
    "SectionTitleFontSize" "SectionTitleFontSizeEnum" NOT NULL DEFAULT 'Medium20',
    "sceneTitleFontSize"   "SceneTitleFontSizeEnum"   NOT NULL DEFAULT 'Medium18',
    "sceneTextFontSize"    "SceneTextFontSizeEnum"    NOT NULL DEFAULT 'Medium14',
    "lineHeight"           "LineHeightEnum"           NOT NULL DEFAULT 'Double',
    "includeSectionNumber" BOOLEAN                    NOT NULL DEFAULT false,
    "includeChapterTitles" BOOLEAN                    NOT NULL DEFAULT true,
    "includeSceneTitles"   BOOLEAN                    NOT NULL DEFAULT false,
    "sceneDivider"         TEXT                       NOT NULL DEFAULT '*******',
    "includePageNumbers"   BOOLEAN                    NOT NULL DEFAULT false,
    "includeNotes"         BOOLEAN                    NOT NULL DEFAULT false,
    "includeText"          BOOLEAN                    NOT NULL DEFAULT true,
    "isManuscript"         BOOLEAN                    NOT NULL DEFAULT false,
    "street"               VARCHAR(255),
    "city"                 VARCHAR(255),
    "state"                VARCHAR(255),
    "zipcode"              VARCHAR(255),
    "phone"                VARCHAR(255),

    CONSTRAINT "ExportTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Goal"
(
    "id"         BIGSERIAL    NOT NULL,
    "createdAt"  TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"  TIMESTAMP(3) NOT NULL,
    "deletedAt"  TIMESTAMP(3),
    "userId"     BIGINT       NOT NULL,
    "novelId"    BIGINT,
    "isActive"   BOOLEAN      NOT NULL DEFAULT true,
    "sendReport" BOOLEAN      NOT NULL DEFAULT false,
    "total"      INTEGER      NOT NULL,
    "daily"      INTEGER,
    "weekly"     INTEGER,
    "monday"     INTEGER,
    "tuesday"    INTEGER,
    "wednesday"  INTEGER,
    "thursday"   INTEGER,
    "friday"     INTEGER,
    "saturday"   INTEGER,
    "sunday"     INTEGER,
    "startAt"    TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Goal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Novel"
(
    "id"             BIGSERIAL         NOT NULL,
    "createdAt"      TIMESTAMP(3)      NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"      TIMESTAMP(3)      NOT NULL,
    "deletedAt"      TIMESTAMP(3),
    "status"         "NovelStatusEnum" NOT NULL DEFAULT 'Idea',
    "title"          VARCHAR(255)      NOT NULL,
    "subtitle"       VARCHAR(255),
    "author"         VARCHAR(255),
    "genre"          "GenreEnum"       NOT NULL DEFAULT 'GeneralFiction',
    "description"    TEXT,
    "coverImagePath" VARCHAR(255),
    "isbn"           VARCHAR(255),
    "asin"           VARCHAR(255),
    "publishedAt"    TIMESTAMP(3),
    "summary"        TEXT,
    "beginning"      TEXT,
    "middle"         TEXT,
    "end"            TEXT,
    "goalId"         BIGINT,
    "notebookId"     BIGINT,
    "seriesId"       BIGINT,
    "userId"         BIGINT            NOT NULL,

    CONSTRAINT "Novel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notebook"
(
    "id"          BIGSERIAL    NOT NULL,
    "createdAt"   TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"   TIMESTAMP(3) NOT NULL,
    "deletedAt"   TIMESTAMP(3),
    "userId"      BIGINT       NOT NULL,
    "name"        VARCHAR(255) NOT NULL,
    "description" TEXT,

    CONSTRAINT "Notebook_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Scene"
(
    "id"        BIGSERIAL    NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "order"     INTEGER      NOT NULL,
    "title"     VARCHAR(255) NOT NULL,
    "body"      TEXT,
    "notes"     TEXT,
    "wordCount" INTEGER      NOT NULL DEFAULT 0,
    "novelId"   BIGINT       NOT NULL,
    "sectionId" BIGINT       NOT NULL,
    "userId"    BIGINT       NOT NULL,

    CONSTRAINT "Scene_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Section"
(
    "id"        BIGSERIAL    NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "isChapter" BOOLEAN      NOT NULL DEFAULT true,
    "order"     INTEGER,
    "title"     VARCHAR(255) NOT NULL,
    "notes"     TEXT,
    "novelId"   BIGINT       NOT NULL,
    "userId"    BIGINT       NOT NULL,

    CONSTRAINT "Section_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Series"
(
    "id"          BIGSERIAL    NOT NULL,
    "createdAt"   TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"   TIMESTAMP(3) NOT NULL,
    "deletedAt"   TIMESTAMP(3),
    "name"        VARCHAR      NOT NULL,
    "description" TEXT,
    "userId"      BIGINT       NOT NULL,

    CONSTRAINT "Series_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_authId_key" ON "User" ("authId");

-- CreateIndex
CREATE UNIQUE INDEX "User_stripeId_key" ON "User" ("stripeId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User" ("email");

-- CreateIndex
CREATE UNIQUE INDEX "Goal_novelId_key" ON "Goal" ("novelId");

-- AddForeignKey
ALTER TABLE "ExportTemplate"
    ADD CONSTRAINT "ExportTemplate_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Goal"
    ADD CONSTRAINT "Goal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Goal"
    ADD CONSTRAINT "Goal_novelId_fkey" FOREIGN KEY ("novelId") REFERENCES "Novel" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Novel"
    ADD CONSTRAINT "Novel_notebookId_fkey" FOREIGN KEY ("notebookId") REFERENCES "Notebook" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Novel"
    ADD CONSTRAINT "Novel_seriesId_fkey" FOREIGN KEY ("seriesId") REFERENCES "Series" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Novel"
    ADD CONSTRAINT "Novel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notebook"
    ADD CONSTRAINT "Notebook_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Scene"
    ADD CONSTRAINT "Scene_novelId_fkey" FOREIGN KEY ("novelId") REFERENCES "Novel" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Scene"
    ADD CONSTRAINT "Scene_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Scene"
    ADD CONSTRAINT "Scene_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Section"
    ADD CONSTRAINT "Section_novelId_fkey" FOREIGN KEY ("novelId") REFERENCES "Novel" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Section"
    ADD CONSTRAINT "Section_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Series"
    ADD CONSTRAINT "Series_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
