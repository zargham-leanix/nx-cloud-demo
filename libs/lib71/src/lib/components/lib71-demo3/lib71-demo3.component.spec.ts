import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo3Component } from './lib71-demo3.component';

describe('Lib71Demo3Component', () => {
  let component: Lib71Demo3Component;
  let fixture: ComponentFixture<Lib71Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
