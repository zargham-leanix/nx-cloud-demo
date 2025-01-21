import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo43Component } from './lib46-demo43.component';

describe('Lib46Demo43Component', () => {
  let component: Lib46Demo43Component;
  let fixture: ComponentFixture<Lib46Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
