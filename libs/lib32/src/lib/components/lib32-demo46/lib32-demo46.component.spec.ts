import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo46Component } from './lib32-demo46.component';

describe('Lib32Demo46Component', () => {
  let component: Lib32Demo46Component;
  let fixture: ComponentFixture<Lib32Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
