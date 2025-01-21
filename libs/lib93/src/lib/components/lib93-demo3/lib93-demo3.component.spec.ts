import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo3Component } from './lib93-demo3.component';

describe('Lib93Demo3Component', () => {
  let component: Lib93Demo3Component;
  let fixture: ComponentFixture<Lib93Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
