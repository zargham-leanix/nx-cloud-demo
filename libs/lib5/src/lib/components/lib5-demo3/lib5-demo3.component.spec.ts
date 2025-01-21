import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo3Component } from './lib5-demo3.component';

describe('Lib5Demo3Component', () => {
  let component: Lib5Demo3Component;
  let fixture: ComponentFixture<Lib5Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
