import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo3Component } from './lib26-demo3.component';

describe('Lib26Demo3Component', () => {
  let component: Lib26Demo3Component;
  let fixture: ComponentFixture<Lib26Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
