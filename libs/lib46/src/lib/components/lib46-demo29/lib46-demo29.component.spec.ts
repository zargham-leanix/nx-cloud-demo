import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo29Component } from './lib46-demo29.component';

describe('Lib46Demo29Component', () => {
  let component: Lib46Demo29Component;
  let fixture: ComponentFixture<Lib46Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
