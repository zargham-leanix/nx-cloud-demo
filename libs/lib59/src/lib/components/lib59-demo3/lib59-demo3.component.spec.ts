import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo3Component } from './lib59-demo3.component';

describe('Lib59Demo3Component', () => {
  let component: Lib59Demo3Component;
  let fixture: ComponentFixture<Lib59Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
