<template>
	<div class="flex flex-col items-center justify-center">
		<div class="max-w-[1600px] flex flex-col items-center justify-center">
			<div class="text-5xl font-bold mt-8 mb-4">Projects and Roles</div>
			<div
				class="p-4 mt-2 flex flex-col justify-center items-center border-4 border-dashed border-blue-300 rounded-xl">
				<div class="text-3xl mb-2">
					<div class="text-center">Project:</div>
					<div class="font-bold">
						MCP (Micro-controller programmer) Desktop Application Maintenance
					</div>
				</div>
				<div class="text-lg max-w-[600px] rounded-lg indent-8">
					Using Java, a desktop application that receives user input and
					generates a file with specific format. Also uploads that file to the
					programmer and keep track of the state of the programmer and shows
					those states to the user.
				</div>
			</div>

			<div class="flex flex-col items-center flex-1 my-4">
				<div class="text-xl">
					Role as: <span class="italic font-bold">Software Engineer</span>
				</div>

				<div
					class="text-lg max-w-[700px] indent-8 ml-4 border-4 rounded-2xl p-2 border-orange-400 border-dashed leading-8">
					<p>
						I started being a software engineer without much experience in
						school, so my manager gave me a book about design patterns to study
						how to program as well as learning java. After two weeks of reading
						the book in detail, I started working. However, the program I needed
						to maintain is nothing like what I see in the book, it's messy with
						tons of repeated code with slight tweaks, global variable used
						unnecessarily, execution is slow, and debugging is a nightmare. I
						feel a major rewrite is in place.
					</p>
					<p>
						Even though the boss does not have complete confidence in me, I
						convinced him to give me 3 months to hold the debugging of the old
						program and let me focus on rewriting. (Because debugging the old
						program was so hard and pretty much a waste of time) I ended up
						rewrote many parts of the project to be Object-Oriented with clear
						separation between model and view using the MVC principal. I
						finished the rewrite in 3 months, but also spent 1 month in the
						testing and debugging phase. The result is a program that runs
						(feels like) instantly, and easier to find the related code
						depending on the bug encountered. Even though, looking back the
						program I wrote can do with a few less layers of abstractions, I
						believe that program still saved the engineer who continued to
						maintain that program a lot of time, and I am still proud of my
						work.
					</p>
				</div>
			</div>
			<div
				class="p-4 mt-2 flex flex-col justify-center items-center border-4 border-dashed border-blue-300 rounded-xl">
				<div class="text-3xl mb-2">
					<div class="text-center">Project:</div>
					<div class="font-bold">
						USB Power Delivery/Quick Charge Testing Platform
					</div>
				</div>
				<div class="text-lg max-w-[600px] rounded-lg indent-8">
					This software platform integrates our own device with would send
					command with different protocols (USB PD, QC, FCP, etc), and
					programmable DC E-Load, programmable
				</div>
			</div>
			<div class="flex flex-col lg:flex-row">
				<div class="flex flex-col items-center flex-1 my-4">
					<div class="text-xl">
						Role as: <span class="italic font-bold">Software Engineer</span>
					</div>
					<div
						class="text-lg max-w-[700px] indent-8 ml-4 border-4 rounded-2xl p-2 border-orange-400 border-dashed leading-8">
						<p>
							As a senior software engineer now, I decided to abandon java as a
							language for the new desktop program. And chose Electron + Vue to
							be the new architecture. I chose this framework for two reasons,
							1. The html + css style will give the program a modern look, and
							the Vue framework will give the program many modern capabilities.
							2. Because many students now would study html + css as their
							front-end language, it would be easier to find new employees and
							will take shorter time to train them.
						</p>
						<p>
							This program took around 3 months to write, with many
							user-friendly features such as drag and drop, intuitive setup,
							lots of tooltips, and a backend that can connect to many different
							devices using different communication protocols. However, this
							program executes slower in older computers clients uses in their
							production lines probably due to the inherent speed of JavaScript
							and node. Even though this program has a good structure and is
							easy to maintain, if I was to get a new project, I may consider
							using Flutter instead.
						</p>
					</div>
				</div>
				<div class="flex flex-col items-center flex-1 my-4">
					<div class="text-xl">
						Role as: <span class="italic font-bold">Project Manager</span>
					</div>
					<div
						class="text-lg max-w-[700px] indent-8 ml-4 border-4 rounded-2xl p-2 border-orange-400 border-dashed leading-8">
						<p>
							I also worked as a project manager in the USB PD Testing Platform
							project. Managing 2 hardware engineers, 1 firmware engineer, and 1
							software engineer, which was myself. As a project manager, I had
							more responsibility and need to think about the product direction,
							while considering industry trends, the company SWOT analysis,
							Porter five forces analysis and so on. I also started using a
							web-based management tool, ClickUp, to manage the project, hoping
							to save myself some time. It did save me time and the engineers
							did adapt to the new tool, tasks, issues, and documents existing
							in the same project folder is the best feature I like about this
							tool. However, because the boss refuse to look at the website, I
							still have report to him over every development. Overall, I
							learned a lot, and I realize that I am a more lay back manager
							letting the engineers just do their jobs instead of asking them to
							work over-time when it is unnecessarily or asking them to report
							every single problem they encountered.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
