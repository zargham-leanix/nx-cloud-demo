import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo3Component } from './lib33-demo3.component';

describe('Lib33Demo3Component', () => {
  let component: Lib33Demo3Component;
  let fixture: ComponentFixture<Lib33Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
