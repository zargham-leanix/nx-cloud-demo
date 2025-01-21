import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo6Component } from './lib46-demo6.component';

describe('Lib46Demo6Component', () => {
  let component: Lib46Demo6Component;
  let fixture: ComponentFixture<Lib46Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
