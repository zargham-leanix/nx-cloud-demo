import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo43Component } from './lib50-demo43.component';

describe('Lib50Demo43Component', () => {
  let component: Lib50Demo43Component;
  let fixture: ComponentFixture<Lib50Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
