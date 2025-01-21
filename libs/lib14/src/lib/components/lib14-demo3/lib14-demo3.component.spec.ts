import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo3Component } from './lib14-demo3.component';

describe('Lib14Demo3Component', () => {
  let component: Lib14Demo3Component;
  let fixture: ComponentFixture<Lib14Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
