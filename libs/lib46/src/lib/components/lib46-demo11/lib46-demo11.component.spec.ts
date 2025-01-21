import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo11Component } from './lib46-demo11.component';

describe('Lib46Demo11Component', () => {
  let component: Lib46Demo11Component;
  let fixture: ComponentFixture<Lib46Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
