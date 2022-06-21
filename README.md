```
rails new cat-tin-r7 -d postgresql --api
```

gem file
```
gem 'devise_token_auth', '>= 1.2.0', git: "https://github.com/lynndylanhurley/devise_token_auth"
```


```
bundle
rails db:create
rails g devise_token_auth:install User api/auth

```

user.rb
```
class User < ActiveRecord::Base
  extend Devise::Models

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User
end
```

```
rails g migration add_trackable_to_users
```


db/migrations/_add_trackable_to_users.rb
```
class AddTrackableToUsers < ActiveRecord::Migration[7.0]
  def change
      ## Trackable
      add_column :users, :sign_in_count, :integer, :default => 0
      add_column :users, :current_sign_in_at, :datetime
      add_column :users, :last_sign_in_at, :datetime
      add_column :users, :current_sign_in_ip, :string
      add_column :users, :last_sign_in_ip, :string
  end
end
```

config/application.rb 
```
 class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")

    # Only loads a smaller set of middleware suitable for API only apps.
    # Middleware like session, flash, cookies can be added back manually.
    # Skip views, helpers and assets when generating a new resource.
    config.api_only = true

    ## ***ADD THESE TWO LINES****
    config.middleware.use ActionDispatch::Cookies
    config.middleware.use ActionDispatch::Session::CookieStore, key: '_namespace_key'
  end
 ```
