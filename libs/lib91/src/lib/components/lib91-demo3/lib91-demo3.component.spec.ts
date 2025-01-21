import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo3Component } from './lib91-demo3.component';

describe('Lib91Demo3Component', () => {
  let component: Lib91Demo3Component;
  let fixture: ComponentFixture<Lib91Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
