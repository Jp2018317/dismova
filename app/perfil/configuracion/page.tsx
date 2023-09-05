import React from 'react';

import { Separator } from '@/components/ui/separator';

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Settings</h3>
        <p className="text-sm text-muted-foreground">
          Configure your account.
        </p>
      </div>
      <Separator className="my-3" />
    </div>
  );
}
