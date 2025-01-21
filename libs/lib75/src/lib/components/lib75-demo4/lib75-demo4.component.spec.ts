import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo4Component } from './lib75-demo4.component';

describe('Lib75Demo4Component', () => {
  let component: Lib75Demo4Component;
  let fixture: ComponentFixture<Lib75Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
