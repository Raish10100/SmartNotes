import React from 'react';
import { Plus, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SearchBar } from './SearchBar.jsx';

// Header component with search, filters, and actions
export const Header = ({
  onCreateNote,
  searchQuery,
  onSearchChange,
  selectedTags,
  onTagClick,
  availableTags,
  isDarkMode,
  onToggleDarkMode,
  noteCount,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col gap-4">
          {/* Top row - Title and actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-foreground">SmartNotes</h1>
              <Badge variant="secondary" className="text-xs">
                {noteCount} {noteCount === 1 ? 'note' : 'notes'}
              </Badge>
            </div>

            <div className="flex items-center gap-2">
              <Button     
                variant="ghost"
                size="sm"
                onClick={onToggleDarkMode}
                className="h-9 w-9 p-0 hover:bg-muted transition-all duration-200"
              >
                <Moon className={`h-4 w-4 transition-all duration-200 ${isDarkMode ? 'fill-current' : ''}`} />
              </Button>

              <Button
                onClick={onCreateNote}
                className="bg-primary hover:bg-primary-hover text-primary-foreground transition-all duration-200"
              >
                <Plus className="h-4 w-4 mr-2" />
                New Note
              </Button>
            </div>
          </div>

          {/* Search and filters */}
          <div className="flex flex-col gap-3">
            <SearchBar
              value={searchQuery}
              onChange={onSearchChange}
              placeholder="Search notes by title or content..."
            />

            {availableTags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-muted-foreground py-1">
                  Filter by tags:
                </span>
                {availableTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    className={`
                      cursor-pointer transition-all duration-200 text-xs
                      ${selectedTags.includes(tag)
                        ? 'bg-accent hover:bg-accent-hover text-accent-foreground'
                        : 'hover:bg-accent/20 border-accent/30 text-foreground'
                      }
                    `}
                    onClick={() => onTagClick(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
                {selectedTags.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => selectedTags.forEach(tag => onTagClick(tag))}
                    className="text-xs h-6 px-2 text-muted-foreground hover:text-foreground"
                  >
                    Clear all
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
