import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo3Component } from './lib41-demo3.component';

describe('Lib41Demo3Component', () => {
  let component: Lib41Demo3Component;
  let fixture: ComponentFixture<Lib41Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
