import { useState } from "react";
import { Calendar, Camera, Filter, Grid3X3, LayoutList, LogOut, Search, ShoppingBag, Upload, X } from "lucide-react";
import { Badge } from "../controls/Badge";
import { Input } from "../controls/Input";
import { ScrollArea } from "../controls/ScrollArea";
import { FaceGroup } from "../FaceGroup";
import { PurchaseModal } from "../PurchaseModal";
import { PhotoViewer } from "../PhotoViewer";
import { Separator } from "../controls/Separator";
import { graphql, useLazyLoadQuery } from "react-relay";
import PhotoCollection from "../PhotoCollection";
import { BaseApplicationQuery } from "./__generated__/BaseApplicationQuery.graphql";
import { useNavigate } from "react-router";

const BASE_QUERY = graphql`
  query BaseApplicationQuery($faceId: ID, $folderId: ID) {
    folders(faceId: $faceId) {
      nodes {
        id
        name
        photoCount
      }
    }
    faces(folderId: $folderId) {
      ...FaceFragment_faces
    }
    photos(faceId: $faceId, folderId: $folderId) {
      id
      ...PhotoCollection_photos
    }
  }
`;

export default function GalleryPage() {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [selectedFaceId, setSelectedFaceId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [purchasePhoto, setPurchasePhoto] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [gridCols, setGridCols] = useState<3 | 4>(3);
  const [viewerPhoto, setViewerPhoto] = useState<string | null>(null);
  const navigate = useNavigate();

  const data = useLazyLoadQuery<BaseApplicationQuery>(BASE_QUERY, {
    faceId: selectedFaceId,
    folderId: selectedEventId,
  });

  const user = {
    user_metadata: {
      avatar_url: null,
      full_name: "John Doe",
    },
    email: "john.doe@example.com",
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "var(--background)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Top nav */}
      <header
        className="flex items-center justify-between px-6 py-3.5 border-b shrink-0"
        style={{ borderColor: "var(--border)", background: "var(--card)" }}
      >
        <div className="flex items-center gap-3">
          <Camera className="w-4.5 h-4.5" style={{ color: "var(--primary)" }} />
          <span
            style={{
              fontFamily: "'Inner', serif",
              color: "var(--foreground)",
              fontSize: "1.125rem",
              letterSpacing: "0.01em",
            }}
          >
            Lumière Archive
          </span>
          <Separator
            orientation="vertical"
            className="h-4 mx-1"
            style={{ background: "var(--border)" }}
          />
          <span
            className="text-xs"
            style={{
              color: "var(--muted-foreground)",
              fontFamily: "'DM Mono', monospace",
            }}
          ></span>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search
              className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: "var(--muted-foreground)" }}
            />
            <Input
              placeholder="Search photos…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 h-8 w-52 text-sm"
              style={{
                background: "var(--input-background)",
                border: "1px solid var(--border)",
                color: "var(--foreground)",
                borderRadius: "var(--radius-sm)",
                fontFamily: "'Inter', sans-serif",
              }}
            />
            {searchQuery && (
              <button
                className="absolute right-2.5 top-1/2 -translate-y-1/2"
                onClick={() => setSearchQuery("")}
                style={{ color: "var(--muted-foreground)" }}
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
          <button
            onClick={() => {
              navigate("/upload");
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors"
            style={{
              background: "var(--secondary)",
              color: "var(--foreground)",
              borderRadius: "var(--radius-sm)",
              border: "1px solid var(--border)",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8125rem",
            }}
          >
            <Upload className="w-3.5 h-3.5" />
            Upload
          </button>

          <div
            className="flex items-center gap-1.5 px-3 py-1.5 rounded"
            style={{
              background: "rgba(201,169,110,0.12)",
              color: "var(--primary)",
              borderRadius: "var(--radius-sm)",
              border: "1px solid rgba(201,169,110,0.2)",
            }}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span
              className="text-xs"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {0} owned
            </span>
          </div>

          <div className="flex items-center gap-2 ml-1">
            {user.user_metadata?.avatar_url ? (
              <img
                src={user.user_metadata.avatar_url}
                alt={user.user_metadata?.full_name ?? "User"}
                className="w-7 h-7 rounded-full object-cover"
                style={{ border: "1.5px solid var(--border)" }}
              />
            ) : (
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs"
                style={{
                  background: "rgba(201,169,110,0.15)",
                  color: "var(--primary)",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  border: "1.5px solid var(--border)",
                }}
              >
                {(user.user_metadata?.full_name ??
                  user.email ??
                  "?")[0].toUpperCase()}
              </div>
            )}
            <span
              className="text-xs hidden sm:block max-w-28 truncate"
              style={{
                color: "var(--muted-foreground)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {user.user_metadata?.full_name ?? user.email}
            </span>
            <button
              className="p-1.5 rounded transition-colors hover:bg-muted"
              style={{
                color: "var(--muted-foreground)",
                borderRadius: "var(--radius-sm)",
              }}
              title="Sign out"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      <div
        className="flex flex-1 overflow-hidden"
        style={{ height: "calc(100vh - 57px)" }}
      >
        {/* Sidebar */}
        {sidebarOpen && (
          <aside
            className="w-56 shrink-0 flex flex-col border-r"
            style={{
              borderColor: "var(--border)",
              background: "var(--sidebar)",
            }}
          >
            <ScrollArea className="flex-1 p-4">
              {/* Events by date */}
              <div className="mb-5">
                <p
                  className="text-xs uppercase tracking-widest mb-2.5"
                  style={{
                    color: "var(--muted-foreground)",
                    fontFamily: "'DM Mono', monospace",
                  }}
                >
                  Events
                </p>
                <div className="flex flex-col gap-0.5">
                  <button
                    className="flex items-center gap-2 px-2 py-1.5 rounded text-left transition-colors"
                    style={{
                      background:
                        selectedEventId === null
                          ? "rgba(201,169,110,0.12)"
                          : "transparent",
                      color:
                        selectedEventId === null
                          ? "var(--primary)"
                          : "var(--foreground)",
                      borderRadius: "var(--radius-sm)",
                    }}
                    onClick={() => setSelectedEventId(null)}
                  >
                    <Calendar className="w-3.5 h-3.5 shrink-0" />
                    <span className="text-sm">All events</span>
                  </button>
                  {data?.folders?.nodes?.map((event) =>
                    event ? (
                      <button
                        key={event.id}
                        className="flex flex-col px-2 py-1.5 rounded text-left transition-colors"
                        style={{
                          background:
                            selectedEventId === event?.id
                              ? "rgba(201,169,110,0.12)"
                              : "transparent",
                          color:
                            selectedEventId === event?.id
                              ? "var(--primary)"
                              : "var(--foreground)",
                          borderRadius: "var(--radius-sm)",
                        }}
                        onClick={() => setSelectedEventId(event!.id!)}
                      >
                        <span className="text-sm truncate">{event?.name}</span>
                        <span
                          className="text-xs"
                          style={{
                            color: "var(--muted-foreground)",
                            fontFamily: "'DM Mono', monospace",
                          }}
                        >
                          {event?.photoCount} photos
                        </span>
                      </button>
                    ) : null,
                  )}
                </div>
              </div>

              <Separator
                className="mb-4"
                style={{ background: "var(--border)" }}
              />

              <FaceGroup
                faces={data.faces}
                selectedFaceId={selectedFaceId}
                onSelect={setSelectedFaceId}
              />
            </ScrollArea>
          </aside>
        )}

        {/* Main gallery */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Toolbar */}
          <div
            className="flex items-center justify-between px-5 py-2.5 border-b shrink-0"
            style={{ borderColor: "var(--border)", background: "var(--card)" }}
          >
            <div className="flex items-center gap-3">
              <button
                className="p-1.5 rounded transition-colors hover:bg-muted"
                onClick={() => setSidebarOpen((v) => !v)}
                style={{
                  color: "var(--muted-foreground)",
                  borderRadius: "var(--radius-sm)",
                }}
                title="Toggle sidebar"
              >
                <Filter className="w-3.5 h-3.5" />
              </button>
              <span
                className="text-xs"
                style={{
                  color: "var(--muted-foreground)",
                  fontFamily: "'DM Mono', monospace",
                }}
              ></span>
              {selectedEventId && (
                <Badge
                  className="text-xs cursor-pointer gap-1 select-none"
                  style={{
                    background: "rgba(201,169,110,0.15)",
                    color: "var(--primary)",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid rgba(201,169,110,0.3)",
                  }}
                  onClick={() => setSelectedEventId(null)}
                >
                  <X className="w-3 h-3" />
                </Badge>
              )}
              {selectedFaceId && (
                <Badge
                  className="text-xs cursor-pointer gap-1 select-none"
                  style={{
                    background: "rgba(201,169,110,0.15)",
                    color: "var(--primary)",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid rgba(201,169,110,0.3)",
                  }}
                  onClick={() => setSelectedFaceId(null)}
                >
                  <X className="w-3 h-3" />
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-0.5">
              <button
                className="p-1.5 rounded transition-colors"
                style={{
                  background:
                    gridCols === 3 ? "rgba(201,169,110,0.15)" : "transparent",
                  color:
                    gridCols === 3
                      ? "var(--primary)"
                      : "var(--muted-foreground)",
                  borderRadius: "var(--radius-sm)",
                }}
                onClick={() => setGridCols(3)}
                title="3 columns"
              >
                <Grid3X3 className="w-3.5 h-3.5" />
              </button>
              <button
                className="p-1.5 rounded transition-colors"
                style={{
                  background:
                    gridCols === 4 ? "rgba(201,169,110,0.15)" : "transparent",
                  color:
                    gridCols === 4
                      ? "var(--primary)"
                      : "var(--muted-foreground)",
                  borderRadius: "var(--radius-sm)",
                }}
                onClick={() => setGridCols(4)}
                title="4 columns"
              >
                <LayoutList className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Photo grid */}
          <ScrollArea className="flex-1">
            <PhotoCollection
              photos={data.photos}
              onSelect={(id) => {
                console.log("Selected photo:", id);
                setViewerPhoto(id);
              }}
            />
          </ScrollArea>
        </main>
      </div>

      <PhotoViewer
        id={viewerPhoto}
        open={viewerPhoto !== null}
        onClose={() => setViewerPhoto(null)}
        onPurchase={(_id) => {
          setViewerPhoto(null);
        }}
      />

      <PurchaseModal
        photoId={purchasePhoto}
        open={purchasePhoto !== null}
        onClose={() => setPurchasePhoto(null)}
        onPurchaseComplete={() => {}}
      />
    </div>
  );
}
