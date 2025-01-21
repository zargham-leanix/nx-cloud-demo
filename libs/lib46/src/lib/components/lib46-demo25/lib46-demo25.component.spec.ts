import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo25Component } from './lib46-demo25.component';

describe('Lib46Demo25Component', () => {
  let component: Lib46Demo25Component;
  let fixture: ComponentFixture<Lib46Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
