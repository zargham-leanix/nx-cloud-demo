import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo3Component } from './lib99-demo3.component';

describe('Lib99Demo3Component', () => {
  let component: Lib99Demo3Component;
  let fixture: ComponentFixture<Lib99Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
