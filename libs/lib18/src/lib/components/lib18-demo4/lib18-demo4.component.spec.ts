import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo4Component } from './lib18-demo4.component';

describe('Lib18Demo4Component', () => {
  let component: Lib18Demo4Component;
  let fixture: ComponentFixture<Lib18Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
