import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo3Component } from './lib45-demo3.component';

describe('Lib45Demo3Component', () => {
  let component: Lib45Demo3Component;
  let fixture: ComponentFixture<Lib45Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
