

## usersテーブル

|Column|Type|Option|
|------|----|------|
|name|string|null: false, index: true, unique: true|
|email|string|null: false, unique: true|

### Association
- has_many :groups, through: :members
- has_mamy :members
- has_many :messages




## messagesテーブル

|Column|Type|Option|
|------|----|------|
|content|text|-----|
|image|string|-----|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group




## groupsテーブル

|Column|Type|Option|
|------|----|------|
|name|string|null: false|

### Association
- has_many :users, through: :members
- has_namy :members
- has_many :messages




## membersテーブル

|Column|Type|Option|
|------|----|------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group



