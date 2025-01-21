import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo34Component } from './lib50-demo34.component';

describe('Lib50Demo34Component', () => {
  let component: Lib50Demo34Component;
  let fixture: ComponentFixture<Lib50Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
