import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo33Component } from './lib50-demo33.component';

describe('Lib50Demo33Component', () => {
  let component: Lib50Demo33Component;
  let fixture: ComponentFixture<Lib50Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
