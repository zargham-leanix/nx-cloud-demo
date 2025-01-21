import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo27Component } from './lib50-demo27.component';

describe('Lib50Demo27Component', () => {
  let component: Lib50Demo27Component;
  let fixture: ComponentFixture<Lib50Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
