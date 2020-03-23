
.PHONY: kong
kong:
	ansible-playbook kong-playbook.yml -i inventory $(ARGS)

.PHONY: tasks
tasks:
	ansible-playbook tasks-playbook.yml -i inventory $(ARGS)

# https://docs.ansible.com/ansible/latest/cli/ansible-playbook.html
