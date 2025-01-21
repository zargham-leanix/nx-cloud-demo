import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo44Component } from './lib32-demo44.component';

describe('Lib32Demo44Component', () => {
  let component: Lib32Demo44Component;
  let fixture: ComponentFixture<Lib32Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
