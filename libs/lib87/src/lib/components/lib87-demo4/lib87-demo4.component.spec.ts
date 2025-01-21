import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo4Component } from './lib87-demo4.component';

describe('Lib87Demo4Component', () => {
  let component: Lib87Demo4Component;
  let fixture: ComponentFixture<Lib87Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
