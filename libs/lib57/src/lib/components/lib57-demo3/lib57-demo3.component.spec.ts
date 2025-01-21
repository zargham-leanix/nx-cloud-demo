import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo3Component } from './lib57-demo3.component';

describe('Lib57Demo3Component', () => {
  let component: Lib57Demo3Component;
  let fixture: ComponentFixture<Lib57Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
