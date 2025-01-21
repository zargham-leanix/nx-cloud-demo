import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo31Component } from './lib32-demo31.component';

describe('Lib32Demo31Component', () => {
  let component: Lib32Demo31Component;
  let fixture: ComponentFixture<Lib32Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
