import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo4Component } from './lib41-demo4.component';

describe('Lib41Demo4Component', () => {
  let component: Lib41Demo4Component;
  let fixture: ComponentFixture<Lib41Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
