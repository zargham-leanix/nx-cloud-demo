import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo44Component } from './lib18-demo44.component';

describe('Lib18Demo44Component', () => {
  let component: Lib18Demo44Component;
  let fixture: ComponentFixture<Lib18Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
