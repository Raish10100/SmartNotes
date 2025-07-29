import React from 'react';
import { Pin, Edit, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Individual note card component
export const NoteCard = ({ note, onEdit, onDelete, onTogglePin }) => {
  // Truncate content for preview
  const truncatedContent =
    note.content.length > 150
      ? note.content.substring(0, 150) + '...'
      : note.content;

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(new Date(date));
  };

  return (
    <Card
      className={`
        group transition-all duration-300 hover:shadow-lg hover:shadow-note-shadow/10 
        hover:bg-card-hover border-note-border cursor-pointer
        ${note.isPinned ? 'ring-2 ring-accent/30 bg-accent/5' : ''}
      `}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <h3
            className="font-semibold text-card-foreground line-clamp-2 flex-1 min-w-0"
            onClick={() => onEdit(note)}
          >
            {note.title || 'Untitled Note'}
          </h3>
          <div className="flex items-center gap-1 flex-shrink-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onTogglePin(note.id);
              }}
              className={`
                h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-all duration-200
                ${note.isPinned ? 'opacity-100 text-accent hover:text-accent-hover' : 'hover:text-primary'}
              `}
            >
              <Pin className={`h-4 w-4 ${note.isPinned ? 'fill-current' : ''}`} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onEdit(note);
              }}
              className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:text-primary"
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(note.id);
              }}
              className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0" onClick={() => onEdit(note)}>
        {truncatedContent && (
          <p className="text-muted-foreground text-sm mb-3 line-clamp-3">
            {truncatedContent}
          </p>
        )}

        {note.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {note.tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-xs px-2 py-0.5 bg-secondary/50 border-secondary text-secondary-foreground"
              >
                {tag}
              </Badge>
            ))}
            {note.tags.length > 3 && (
              <Badge
                variant="outline"
                className="text-xs px-2 py-0.5 bg-muted text-muted-foreground"
              >
                +{note.tags.length - 3}
              </Badge>
            )}
          </div>
        )}

        <div className="text-xs text-muted-foreground">
          {new Date(note.createdAt).getTime() !== new Date(note.updatedAt).getTime() ? (
            <span>Updated {formatDate(note.updatedAt)}</span>
          ) : (
            <span>Created {formatDate(note.createdAt)}</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
