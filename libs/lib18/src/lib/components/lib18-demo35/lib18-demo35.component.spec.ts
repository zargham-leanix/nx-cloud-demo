import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo35Component } from './lib18-demo35.component';

describe('Lib18Demo35Component', () => {
  let component: Lib18Demo35Component;
  let fixture: ComponentFixture<Lib18Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
