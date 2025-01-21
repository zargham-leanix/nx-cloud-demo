import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo3Component } from './lib24-demo3.component';

describe('Lib24Demo3Component', () => {
  let component: Lib24Demo3Component;
  let fixture: ComponentFixture<Lib24Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
