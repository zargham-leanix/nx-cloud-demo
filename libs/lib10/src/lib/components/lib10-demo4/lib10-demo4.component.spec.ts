import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo4Component } from './lib10-demo4.component';

describe('Lib10Demo4Component', () => {
  let component: Lib10Demo4Component;
  let fixture: ComponentFixture<Lib10Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
