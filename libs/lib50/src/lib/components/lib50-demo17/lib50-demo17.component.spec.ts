import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo17Component } from './lib50-demo17.component';

describe('Lib50Demo17Component', () => {
  let component: Lib50Demo17Component;
  let fixture: ComponentFixture<Lib50Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
