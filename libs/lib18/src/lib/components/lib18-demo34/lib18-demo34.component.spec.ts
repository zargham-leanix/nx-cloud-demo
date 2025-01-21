import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo34Component } from './lib18-demo34.component';

describe('Lib18Demo34Component', () => {
  let component: Lib18Demo34Component;
  let fixture: ComponentFixture<Lib18Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
