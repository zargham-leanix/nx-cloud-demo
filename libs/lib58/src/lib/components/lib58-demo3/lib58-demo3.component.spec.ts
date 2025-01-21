import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo3Component } from './lib58-demo3.component';

describe('Lib58Demo3Component', () => {
  let component: Lib58Demo3Component;
  let fixture: ComponentFixture<Lib58Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
