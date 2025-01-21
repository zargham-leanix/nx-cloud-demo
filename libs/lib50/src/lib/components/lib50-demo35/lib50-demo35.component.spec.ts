import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo35Component } from './lib50-demo35.component';

describe('Lib50Demo35Component', () => {
  let component: Lib50Demo35Component;
  let fixture: ComponentFixture<Lib50Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
