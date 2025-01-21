import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo3Component } from './lib8-demo3.component';

describe('Lib8Demo3Component', () => {
  let component: Lib8Demo3Component;
  let fixture: ComponentFixture<Lib8Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
