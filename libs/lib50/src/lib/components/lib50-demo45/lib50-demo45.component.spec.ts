import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo45Component } from './lib50-demo45.component';

describe('Lib50Demo45Component', () => {
  let component: Lib50Demo45Component;
  let fixture: ComponentFixture<Lib50Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
