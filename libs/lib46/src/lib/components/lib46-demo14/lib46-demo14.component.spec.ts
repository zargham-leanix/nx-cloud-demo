import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo14Component } from './lib46-demo14.component';

describe('Lib46Demo14Component', () => {
  let component: Lib46Demo14Component;
  let fixture: ComponentFixture<Lib46Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
