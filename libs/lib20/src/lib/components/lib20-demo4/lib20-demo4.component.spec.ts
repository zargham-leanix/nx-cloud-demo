import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo4Component } from './lib20-demo4.component';

describe('Lib20Demo4Component', () => {
  let component: Lib20Demo4Component;
  let fixture: ComponentFixture<Lib20Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
