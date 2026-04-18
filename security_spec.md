# SYNC-OS SECURITY SPECIFICATION (v1.0)
## Architect: OS Security Core

### 1. Data Invariants
- **Identity Isolation**: A user can never read or write data belonging to another UID.
- **Relational Integrity**: Modules and Notes must be anchored to a valid `uid` that matches the authenticated session.
- **Temporal Consistency**: `updatedAt` and `createdAt` fields must strictly match `request.time`.
- **Structural Rigidity**: Documents must not contain "Shadow Fields" (keys not defined in the schema).

### 2. The "Dirty Dozen" Attack Payloads (Red Team Test Cases)

| ID | Attack Type | Vector | Expected Result |
|----|-------------|--------|-----------------|
| T1 | Identity Spoof | `uid` in payload != `request.auth.uid` | **PERMISSION_DENIED** |
| T2 | Path Poisoning | Injecting 2KB junk string as `noteId` | **PERMISSION_DENIED** |
| T3 | Shadow Field | Adding `isAdmin: true` to a UserProfile | **PERMISSION_DENIED** |
| T4 | Timestamp Spoof | Setting `createdAt` to a manual date (not server time) | **PERMISSION_DENIED** |
| T5 | Resource Exhaust | Sending 1MB string in a `topic` field | **PERMISSION_DENIED** |
| T6 | Orphan Write | Creating a note with a non-existent `uid` anchor | **PERMISSION_DENIED** |
| T7 | Cross-User Read | Requesting `/notes/attacker_id` as `user_A` | **PERMISSION_DENIED** |
| T8 | Field Deletion | Attempting to update by removing the `uid` field | **PERMISSION_DENIED** |
| T9 | Type Mismatch | Sending a number into a `displayName` string field | **PERMISSION_DENIED** |
| T10| ID Mirroring | Setting the document ID to `__root__` or `admin` | **PERMISSION_DENIED** |
| T11| List Scraping | Global query without `where(uid == ...)` | **PERMISSION_DENIED** |
| T12| State Shortcut | Modifying `moduleId` after creation | **PERMISSION_DENIED** |

### 3. Verification Strategy
Rules will be validated against the `isValidUserProfile`, `isValidStudyNote`, and `isValidLearningModule` schema helpers.
