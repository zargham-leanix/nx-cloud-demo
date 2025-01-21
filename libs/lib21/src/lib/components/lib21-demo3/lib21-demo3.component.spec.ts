import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo3Component } from './lib21-demo3.component';

describe('Lib21Demo3Component', () => {
  let component: Lib21Demo3Component;
  let fixture: ComponentFixture<Lib21Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
