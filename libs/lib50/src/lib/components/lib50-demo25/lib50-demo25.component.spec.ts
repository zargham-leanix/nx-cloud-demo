import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo25Component } from './lib50-demo25.component';

describe('Lib50Demo25Component', () => {
  let component: Lib50Demo25Component;
  let fixture: ComponentFixture<Lib50Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
