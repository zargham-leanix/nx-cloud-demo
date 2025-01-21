import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo29Component } from './lib50-demo29.component';

describe('Lib50Demo29Component', () => {
  let component: Lib50Demo29Component;
  let fixture: ComponentFixture<Lib50Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
