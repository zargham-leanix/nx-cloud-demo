import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo33Component } from './lib46-demo33.component';

describe('Lib46Demo33Component', () => {
  let component: Lib46Demo33Component;
  let fixture: ComponentFixture<Lib46Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
