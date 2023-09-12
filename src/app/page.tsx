'use client'

import { SettingsTabs } from "@/components/SettingsTabs";
import { InputRoot, InputControl, InputPrefix } from "@/components/Input";
import { CaretDown, Code, Envelope, GlobeStand, Link, ListDashes, ListNumbers, TextB, TextItalic, UserSwitch } from "@phosphor-icons/react";
import * as FileInput from '@/components/Form/FileInput'
import { Select } from "@/components/Form/Select";
import { SelectItem } from "@/components/Form/Select/SelectItem";
import { Textarea } from "@/components/Form/Select/Textarea";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between pb-5 border-b border-zinc-300 dark:border-zinc-700">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Personal info
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              type="button">
              Cancel
            </Button>
            <Button
              variant="primary"
              type="submit"
              form="Settings">
              Save
            </Button>
          </div>

        </div>

        <form
          id="Settings"
          className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-300 dark:divide-zinc-700">
          <div className="lg:grid flex flex-col lg:grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Name
            </label>
            <div className="lg:grid gap-6 lg:grid-cols-2 flex flex-col">
              <InputRoot>
                <InputControl id="firstName" defaultValue="Rodrigo" />
              </InputRoot>

              <div className="flex flex-col gap-3 lg:block">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300 lg:sr-only"
                >
                  Last name
                </label>

                <InputRoot>
                  <InputControl defaultValue="Ferreira" />
                </InputRoot>
              </div>
            </div>

          </div>
          <div className="lg:grid gap-3 lg:grid-cols-form flex flex-col pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              E-mail address
            </label>

            <InputRoot>
              <InputPrefix>
                <Envelope className="w-5 h-5 text-zinc-500" />
              </InputPrefix>
              <InputControl id="email" type="email" defaultValue="rodriggo.lferreira@icloud.com" />
            </InputRoot>

          </div>

          <div className="lg:grid gap-3 lg:grid-cols-form flex flex-col pt-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Your photo
              <span
                className="text-sm font-normal text-zinc-500 block mt-0.5">
                This will be displayed on your profile.
              </span>
            </label>

            <FileInput.Root className="flex flex-col lg:flex-row lg:items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>

          </div>

          <div className="lg:grid gap-3 lg:grid-cols-form flex flex-col pt-5">
            <label htmlFor="role"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Role
            </label>
            <InputRoot>
              <InputPrefix>
                <Code className="w-5 h-5 text-zinc-500" />
              </InputPrefix>
              <InputControl id="role" defaultValue="Developer" />
            </InputRoot>
          </div>

          <div className="lg:grid gap-3 lg:grid-cols-form flex flex-col pt-5">
            <label htmlFor="country"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Country
            </label>
            <Select placeholder="Select a country...">
              <SelectItem value="pt" text="Portugal" />
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="jp" text="Japão" />
              <SelectItem value="fr" text="France" />
              <SelectItem value="it" text="Italy" />
              <SelectItem value="de" text="Germany" />
            </Select>
          </div>

          <div className="lg:grid gap-3 lg:grid-cols-form flex flex-col pt-5">
            <label htmlFor="timezone"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Time Zone
            </label>
            {/* Modificar  de forma correta */}
            <Select placeholder="Select a timezone...">
              <SelectItem value="pt" text="Lisboa" />
              <SelectItem value="br" text="Brasília" />
              <SelectItem value="jp" text="Tokio" />
              <SelectItem value="fr" text="Paris" />
              <SelectItem value="it" text="Palermo" />
              <SelectItem value="de" text="Berlim" />
            </Select>
          </div>

          <div className="lg:grid gap-3 lg:grid-cols-form flex flex-col pt-5">
            <label
              htmlFor="bio"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Bio
              <span
                className="text-sm font-normal text-zinc-500 block mt-0.5">
                Write a short introduction.
              </span>
            </label>

            <div className="space-y-3">
              <div className="flex flex-col lg:grid gap-3 lg:grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem value="normal" text="Normal Text" />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <Button
                    type="button"
                    variant="ghost">
                    <TextB className="h-5 w-5 tex-zinc-500" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost">
                    <TextItalic className="h-5 w-5 tex-zinc-500" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost">
                    <Link className="h-5 w-5 tex-zinc-500" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost">
                    <ListDashes className="h-5 w-5 tex-zinc-500" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost">
                    <ListNumbers className="h-5 w-5 tex-zinc-500" />
                  </Button>
                </div>
              </div>
              <Textarea
                id="bio"
                defaultValue="Write here your bio..."
              />
            </div>

          </div>

          <div className="lg:grid gap-3 lg:grid-cols-form flex flex-col pt-5">
            <label
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Portfolio projects
              <span
                className="text-sm font-normal text-zinc-500 block mt-0.5">
                Share a few snippets of your work.
              </span>
            </label>

            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button
              variant="outline"
              type="button">
              Cancel
            </Button>
            <Button
              variant="primary"
              type="submit"
              form="Settings">
              Save
            </Button>
          </div>

        </form>
      </div>
    </>
  )
}
