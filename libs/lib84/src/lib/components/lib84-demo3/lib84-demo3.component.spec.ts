import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo3Component } from './lib84-demo3.component';

describe('Lib84Demo3Component', () => {
  let component: Lib84Demo3Component;
  let fixture: ComponentFixture<Lib84Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
