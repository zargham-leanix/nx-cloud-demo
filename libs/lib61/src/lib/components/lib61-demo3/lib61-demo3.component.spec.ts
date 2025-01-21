import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo3Component } from './lib61-demo3.component';

describe('Lib61Demo3Component', () => {
  let component: Lib61Demo3Component;
  let fixture: ComponentFixture<Lib61Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
