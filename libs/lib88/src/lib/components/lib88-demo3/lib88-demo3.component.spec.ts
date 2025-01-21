import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo3Component } from './lib88-demo3.component';

describe('Lib88Demo3Component', () => {
  let component: Lib88Demo3Component;
  let fixture: ComponentFixture<Lib88Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
