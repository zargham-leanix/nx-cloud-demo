import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo3Component } from './lib46-demo3.component';

describe('Lib46Demo3Component', () => {
  let component: Lib46Demo3Component;
  let fixture: ComponentFixture<Lib46Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
