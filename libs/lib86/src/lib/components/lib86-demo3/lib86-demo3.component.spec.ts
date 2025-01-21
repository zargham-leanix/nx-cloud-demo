import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo3Component } from './lib86-demo3.component';

describe('Lib86Demo3Component', () => {
  let component: Lib86Demo3Component;
  let fixture: ComponentFixture<Lib86Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
