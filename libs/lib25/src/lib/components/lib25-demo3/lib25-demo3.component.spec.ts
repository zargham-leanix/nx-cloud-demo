import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo3Component } from './lib25-demo3.component';

describe('Lib25Demo3Component', () => {
  let component: Lib25Demo3Component;
  let fixture: ComponentFixture<Lib25Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
