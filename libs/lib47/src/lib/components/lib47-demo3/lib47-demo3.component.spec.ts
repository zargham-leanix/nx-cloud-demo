import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo3Component } from './lib47-demo3.component';

describe('Lib47Demo3Component', () => {
  let component: Lib47Demo3Component;
  let fixture: ComponentFixture<Lib47Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
