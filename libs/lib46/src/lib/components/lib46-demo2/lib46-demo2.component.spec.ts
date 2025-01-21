import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo2Component } from './lib46-demo2.component';

describe('Lib46Demo2Component', () => {
  let component: Lib46Demo2Component;
  let fixture: ComponentFixture<Lib46Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
