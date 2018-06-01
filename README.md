# README

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|integer|null: false, unique: true, index: true|
|email|string|null: false, unique: true|

### Association
- has_many :members


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|integer|null: false, index: true|

### Association
- has_many :members


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :member


## membersテーブル(中間)

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
