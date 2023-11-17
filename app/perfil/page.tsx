import React from 'react';

import { Separator } from '@/components/ui/separator';
import { Profile } from './components/Profile';

export default async function SettingsProfilePage() {
  return (
    <div className="space-y-6 max-lg:pt-5">
      <div>
        <h3 className="text-lg font-medium">Mi Cuenta</h3>
        <p className="text-sm text-muted-foreground">
          Información sobre la cuenta ingresada
        </p>
      </div>
      <Separator />
      <Profile />
    </div>
  );
}
