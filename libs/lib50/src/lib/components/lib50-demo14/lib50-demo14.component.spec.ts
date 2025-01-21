import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo14Component } from './lib50-demo14.component';

describe('Lib50Demo14Component', () => {
  let component: Lib50Demo14Component;
  let fixture: ComponentFixture<Lib50Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
