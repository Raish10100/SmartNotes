import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TagInput } from './TagInput.jsx';

export const NoteForm = ({ 
  note, 
  onSave, 
  onCancel, 
  isVisible 
}) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    tags: [],
  });

  useEffect(() => {
    if (note) {
      setFormData({
        title: note.title,
        content: note.content,
        tags: [...note.tags],
      });
    } else {
      setFormData({
        title: '',
        content: '',
        tags: [],
      });
    }
  }, [note]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim() || formData.content.trim()) {
      onSave(formData);
    }
  };

  const handleCancel = () => {
    setFormData({
      title: '',
      content: '',
      tags: [],
    });
    onCancel();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-scroll shadow-2xl border-border">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-xl font-semibold">
            {note ? 'Edit Note' : 'Create New Note'}
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCancel}
            className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive"
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="overflow-y-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Note title..."
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className="text-lg font-medium bg-input border-input-border focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                autoFocus
              />
            </div>
            
            <div>
              <Textarea
                placeholder="Start writing your note..."
                value={formData.content}
                onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                className="min-h-[300px] resize-none bg-input border-input-border focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Tags
              </label>
              <TagInput
                tags={formData.tags}
                onChange={(tags) => setFormData(prev => ({ ...prev, tags }))}
                placeholder="Add tags (press Enter or comma to add)..."
              />
            </div>
            
            <div className="flex gap-2 pt-4">
              <Button
                type="submit"
                className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground transition-all duration-200"
                disabled={!formData.title.trim() && !formData.content.trim()}
              >
                {note ? 'Update Note' : 'Save Note'}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleCancel}
                className="px-6 border-border hover:bg-muted transition-all duration-200"
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
