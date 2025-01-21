import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo6Component } from './lib50-demo6.component';

describe('Lib50Demo6Component', () => {
  let component: Lib50Demo6Component;
  let fixture: ComponentFixture<Lib50Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
