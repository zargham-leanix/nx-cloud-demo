import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo3Component } from './lib72-demo3.component';

describe('Lib72Demo3Component', () => {
  let component: Lib72Demo3Component;
  let fixture: ComponentFixture<Lib72Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
