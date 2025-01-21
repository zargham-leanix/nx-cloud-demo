import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo15Component } from './lib46-demo15.component';

describe('Lib46Demo15Component', () => {
  let component: Lib46Demo15Component;
  let fixture: ComponentFixture<Lib46Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
