import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo39Component } from './lib32-demo39.component';

describe('Lib32Demo39Component', () => {
  let component: Lib32Demo39Component;
  let fixture: ComponentFixture<Lib32Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
