import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo32Component } from './lib50-demo32.component';

describe('Lib50Demo32Component', () => {
  let component: Lib50Demo32Component;
  let fixture: ComponentFixture<Lib50Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
