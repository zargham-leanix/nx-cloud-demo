import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo11Component } from './lib50-demo11.component';

describe('Lib50Demo11Component', () => {
  let component: Lib50Demo11Component;
  let fixture: ComponentFixture<Lib50Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
