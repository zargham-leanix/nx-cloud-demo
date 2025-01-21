import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo25Component } from './lib18-demo25.component';

describe('Lib18Demo25Component', () => {
  let component: Lib18Demo25Component;
  let fixture: ComponentFixture<Lib18Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
