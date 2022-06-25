from tkinter import Tk, ttk

root = Tk()
root.title("Amazon Product Tracker")

frame = ttk.Frame(root, padding=10)
frame.grid(row=0, column=0)


lbl = ttk.Label(frame, text='Search')
lbl.grid(row=0, column=0)

ttk.Entry(root)

root.mainloop()

print("test")